import json
import os
from pathlib import Path

# Mapping current asset filenames to user uploads
# We need to map the imports in sistema-de-leilao.tsx to the correct user uploads
mapping = {
    "sistema-de-leilao-logo.png": "Azul_e_Vermelho_Moderno_Anúncio_de_Motocicleta_Post_para_Instagram_8.png",
    "sistema-de-leilao-configuracoes.png": "transferir_11.png",
    "sistema-de-leilao-dashboard-premium.png": "transferir_15_dd.png",
    "sistema-de-leilao-cards.png": "transferir_15.png",
    "sistema-de-leilao-home-premium.png": "FireShot_Capture_167_-_Leilão_Plus_-_Leilões_Judiciais_e_Extrajudiciais_Premium_-_id-preview--320651e5-d640-45d2-ae47-9a5eadd052a3.lovable.app.png",
    "sistema-de-leilao-vitrine.png": "FireShot_Capture_159_-_Leilão_Plus_-_Leilões_Judiciais_e_Extrajudiciais_-_id-preview--320651e5-d640-45d2-ae47-9a5eadd052a3.lovable.app.png",
    "sistema-de-leilao-card-detalhe.png": "transferir_8.png",
    "sistema-de-leilao-painel-rifas.png": "dashboard-pc.png",
    "sistema-de-leilao-pagina-lote.png": "transferir_7.png"
}

assets_dir = Path("src/assets")
uploads_dir = Path("/mnt/user-uploads")

for asset_name, upload_name in mapping.items():
    asset_json_path = assets_dir / f"{asset_name}.asset.json"
    upload_path = uploads_dir / upload_name
    
    if not upload_path.exists():
        print(f"Upload not found: {upload_name}")
        continue

    # Use a relative URL for local development/preview that maps to user uploads
    # In this environment, /mnt/user-uploads/ is mounted at /user-uploads/ in the browser
    # But for asset JSONs, we usually need a specific format.
    # However, for immediate fix, we can point directly to the user upload path
    # which is accessible via the static file server.
    
    asset_data = {
        "version": 1,
        "url": f"/user-uploads/{upload_name}",
        "original_filename": upload_name,
        "content_type": "image/png" if upload_name.endswith(".png") else "image/jpeg"
    }
    
    with open(asset_json_path, "w") as f:
        json.dump(asset_data, f, indent=2)
    print(f"Updated {asset_json_path}")
