import os
import subprocess
import json

mappings = [
    ("/mnt/user-uploads/FireShot_Capture_143_-_Leilão_Plus_-_Leilões_Judiciais_e_Extrajudiciais_Premium_-_id-preview--320651e5-d640-45d2-ae47-9a5eadd052a3.lovable.app.png", "sistema-de-leilao-home-premium.png"),
    ("/mnt/user-uploads/FireShot_Capture_159_-_Leilão_Plus_-_Leilões_Judiciais_e_Extrajudiciais_-_id-preview--320651e5-d640-45d2-ae47-9a5eadd052a3.lovable.app.png", "sistema-de-leilao-vitrine.png"),
    ("/mnt/user-uploads/FireShot_Capture_167_-_Leilão_Plus_-_Leilões_Judiciais_e_Extrajudiciais_Premium_-_id-preview--320651e5-d640-45d2-ae47-9a5eadd052a3.lovable.app.png", "sistema-de-leilao-dashboard-premium.png"),
    ("/mnt/user-uploads/dashboard-pc.png", "sistema-de-leilao-cards.png"),
    ("/mnt/user-uploads/transferir_11.png", "sistema-de-leilao-logo.png"),
    ("/mnt/user-uploads/transferir_15.png", "sistema-de-leilao-configuracoes.png"),
    ("/mnt/user-uploads/transferir_7.png", "sistema-de-leilao-card-detalhe.png"),
    ("/mnt/user-uploads/transferir_8.png", "sistema-de-leilao-painel-rifas.png"),
    ("/mnt/user-uploads/transferir_15_dd.png", "sistema-de-leilao-dashboard-detalhe.png")
]

os.makedirs("src/assets", exist_ok=True)

for local_path, target_name in mappings:
    print(f"Uploading {local_path} as {target_name}...")
    try:
        # lovable-assets create outputs the JSON to stdout
        cmd = ["lovable-assets", "create", "--file", local_path, "--filename", target_name]
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        
        asset_json_path = f"src/assets/{target_name}.asset.json"
        with open(asset_json_path, "w") as f:
            f.write(result.stdout)
        print(f"Created {asset_json_path}")
    except Exception as e:
        print(f"Failed to upload {target_name}: {e}")
        if hasattr(e, 'stderr'):
            print(f"Error: {e.stderr}")
