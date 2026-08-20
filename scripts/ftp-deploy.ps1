param(
    [string]$FtpHost = "212.85.6.36",
    [string]$FtpUser = "u386043061.ncbrasil.com.br",
    [string]$LocalDir = "dist",
    [string]$RemoteBase = "/",
    [switch]$UseFtps
)

$ErrorActionPreference = "Stop"

Write-Host "Usuario FTP: $FtpUser"
$securePassword = Read-Host -Prompt "Senha FTP" -AsSecureString
$plainPassword = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword))
$networkCred = New-Object System.Net.NetworkCredential($FtpUser, $plainPassword)

function New-FtpRequest {
    param([string]$Url, [string]$Method)
    $req = [System.Net.FtpWebRequest]::Create($Url)
    $req.Credentials = New-Object System.Net.NetworkCredential($networkCred.UserName, $networkCred.Password)
    $req.Method = $Method
    $req.UsePassive = $true
    $req.UseBinary = $true
    $req.KeepAlive = $false
    if ($UseFtps) {
        $req.EnableSsl = $true
        [System.Net.ServicePointManager]::ServerCertificateValidationCallback = { $true }
    }
    return $req
}

function Get-FtpListing {
    param([string]$Url)
    $req = New-FtpRequest -Url $Url -Method ([System.Net.WebRequestMethods+Ftp]::ListDirectory)
    $resp = $req.GetResponse()
    $reader = New-Object System.IO.StreamReader($resp.GetResponseStream())
    $out = $reader.ReadToEnd()
    $reader.Close(); $resp.Close()
    return $out
}

function New-FtpDirectory {
    param([string]$Url)
    try {
        $req = New-FtpRequest -Url $Url -Method ([System.Net.WebRequestMethods+Ftp]::MakeDirectory)
        $resp = $req.GetResponse()
        $resp.Close()
        Write-Host "  criada pasta: $Url"
    } catch [System.Net.WebException] {
        # ignore "already exists" style errors, rethrow anything else
        $resp = $_.Exception.Response
        if (-not $resp) { throw }
    }
}

function Send-FtpFile {
    param([string]$LocalPath, [string]$Url)
    $req = New-FtpRequest -Url $Url -Method ([System.Net.WebRequestMethods+Ftp]::UploadFile)
    $bytes = [System.IO.File]::ReadAllBytes($LocalPath)
    $req.ContentLength = $bytes.Length
    $stream = $req.GetRequestStream()
    $stream.Write($bytes, 0, $bytes.Length)
    $stream.Close()
    $resp = $req.GetResponse()
    $resp.Close()
}

$rootUrl = "ftp://$FtpHost$RemoteBase"
Write-Host "Conectando e listando raiz remota: $rootUrl"
Write-Host (Get-FtpListing -Url $rootUrl)

Write-Host "`nIniciando upload de '$LocalDir' -> '$RemoteBase' em $FtpHost ..."

$localRoot = (Resolve-Path $LocalDir).Path
$allFiles = Get-ChildItem -Path $localRoot -Recurse -File
$createdDirs = New-Object System.Collections.Generic.HashSet[string]

$i = 0
foreach ($file in $allFiles) {
    $i++
    $relative = $file.FullName.Substring($localRoot.Length).TrimStart('\','/') -replace '\\','/'
    $remoteDir = ($RemoteBase.TrimEnd('/') + '/' + [System.IO.Path]::GetDirectoryName($relative).Replace('\','/')).TrimEnd('/')
    if ($remoteDir -and $remoteDir -ne "" -and -not $createdDirs.Contains($remoteDir)) {
        # create each path segment once
        $segments = $remoteDir.Trim('/').Split('/')
        $accum = ""
        foreach ($seg in $segments) {
            if (-not $seg) { continue }
            $accum = "$accum/$seg"
            if (-not $createdDirs.Contains($accum)) {
                New-FtpDirectory -Url "ftp://$FtpHost$accum"
                [void]$createdDirs.Add($accum)
            }
        }
    }
    $remoteUrl = "ftp://$FtpHost" + ($RemoteBase.TrimEnd('/') + '/' + $relative)
    Write-Host "[$i/$($allFiles.Count)] $relative"
    Send-FtpFile -LocalPath $file.FullName -Url $remoteUrl
}

Write-Host "`nUpload concluido: $($allFiles.Count) arquivos enviados."
