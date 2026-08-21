import os
import shutil
from pathlib import Path

# Imagens de Rifas (transferir_11 até transferir_17 + extras)
rifa_mapping = {
    "transferir_11.png": "rifa-1.png",
    "transferir_12.png": "rifa-2.png",
    "transferir_13.png": "rifa-3.png",
    "transferir_14.png": "rifa-4.png",
    "transferir_15.png": "rifa-5.png",
    "transferir_16.png": "rifa-6.png",
    "transferir_17.png": "rifa-7.png",
    "transferir_5.png": "rifa-dashboard.png",
    "transferir_7.png": "rifa-painel.png",
    "transferir_8.png": "rifa-vitrine.png",
}

# Imagens de Leilão (referenciadas nos prints anteriores)
leilao_mapping = {
    "dashboard-pc.png": "dashboard-premium.png",
    "c72fbdd7-08b5-4774-ae71-cef8087fcd87.png": "home-premium.png",
    "c72fbdd7-08b5-4774-ae71-cef8087fcd87-2.png": "vitrine.png",
    "image.png": "cards.png",
    "image-2.png": "card-detalhe.png",
    "image-3.png": "painel-online.png",
    "image-4.png": "configuracoes.png",
}

# Parceiros
partners_mapping = {
    "caixa.webp": "caixa.webp",
    "cresol.webp": "cresol.webp",
    "detranms.webp": "detranms.webp",
    "detransc.webp": "detransc.webp",
    "embaixada_usa.webp": "embaixada_usa.webp",
    "sicoob.webp": "sicoob.webp",
    "sicredi.webp": "sicredi.webp",
    "tjrs_1.webp": "tjrs.webp",
    "unicred.webp": "unicred.webp",
    "uniprime.webp": "uniprime.webp",
}

# Testemunhos
testimonials_mapping = {
    "caleruggeri.jpg": "cale.jpg",
    "dr.carlabarber.jpg": "carla.jpg",
    "lic.ceciliace.jpg": "cecilia.jpg",
    "cinthia_fernandez.jpg": "cinthia.jpg",
    "edergrauu.jpg": "eder.jpg",
    "hugooficial.jpg": "hugo.jpg",
    "irinassw.jpg": "irina.jpg",
    "nicolorenzonn.jpg": "nico.jpg",
}

def sync_images():
    base_upload = Path("/mnt/user-uploads")
    public_leilao = Path("public/img-sistema-de-leilao")
    public_rifas = Path("public/img-sistema-de-rifas")
    public_partners = Path("public/partners")
    public_testimonials = Path("public/testimonials")

    for p in [public_leilao, public_rifas, public_partners, public_testimonials]:
        p.mkdir(parents=True, exist_ok=True)

    mappings = [
        (leilao_mapping, public_leilao),
        (rifa_mapping, public_rifas),
        (partners_mapping, public_partners),
        (testimonials_mapping, public_testimonials)
    ]

    for mapping, dest_dir in mappings:
        for src, dest in mapping.items():
            src_path = base_upload / src
            if src_path.exists():
                shutil.copy2(src_path, dest_dir / dest)
                print(f"Copied {src} to {dest_dir}/{dest}")
            else:
                print(f"Warning: {src} not found in uploads")

if __name__ == "__main__":
    sync_images()
