import os
import json

asset_files = [
    "src/assets/sistema-de-leilao-logo.png.asset.json",
    "src/assets/sistema-de-leilao-home-premium.png.asset.json",
    "src/assets/sistema-de-leilao-vitrine.png.asset.json",
    "src/assets/sistema-de-leilao-dashboard-premium.png.asset.json",
    "src/assets/sistema-de-leilao-cards.png.asset.json",
    "src/assets/sistema-de-leilao-configuracoes.png.asset.json",
    "src/assets/sistema-de-leilao-card-detalhe.png.asset.json",
    "src/assets/sistema-de-leilao-painel-rifas.png.asset.json",
    "src/assets/sistema-de-leilao-pagina-lote.png.asset.json"
]

for file_path in asset_files:
    if not os.path.exists(file_path):
        print(f"File {file_path} not found.")
        continue
    
    with open(file_path, 'r') as f:
        data = json.load(f)
    
    # URL Decode the path if it contains escaped characters like \u00f3
    # The JSON loader already handled the \u escapes, but the browser might 
    # need them encoded for the URL if the server doesn't handle literal UTF-8 in paths.
    # However, /user-uploads/ is usually handled by the dev server.
    
    print(f"Checking {file_path}: {data['url']}")
    
    # If the URL looks okay but isn't loading, it might be due to the spaces or special chars 
    # not being correctly handled in the JSON URL field vs the actual file system.
    
