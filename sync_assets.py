import os
import shutil

leilao_map = {
    "transferir_11-2.png": "sistema-de-leilao-configuracoes-identidade-01.png",
    "transferir_15_dd-2.png": "plataforma-de-leilao-dashboard-gerencial-02.png",
    "transferir_15-2.png": "sistema-de-leilao-modelos-de-card-moderno-03.png",
    "transferir_8-2.png": "plataforma-de-leilao-lote-detalhe-agronegocio-04.png",
}

rifas_map = {
    "dashboard-pc-2.png": "sistema-de-rifas-dashboard-financeiro-premium-01.png",
}

def sync_and_clean(mapping, target_dir):
    if not os.path.exists(target_dir):
        os.makedirs(target_dir, exist_ok=True)
    
    print(f"Limpando diretório: {target_dir}")
    for f in os.listdir(target_dir):
        file_path = os.path.join(target_dir, f)
        if os.path.isfile(file_path):
            os.remove(file_path)

    for src_name, new_name in mapping.items():
        src_path = os.path.join("/mnt/user-uploads", src_name)
        if os.path.exists(src_path):
            dst_path = os.path.join(target_dir, new_name)
            shutil.copy2(src_path, dst_path)
            print(f"Copied {src_name} -> {new_name}")
        else:
            print(f"Warning: Source {src_name} not found")

print("--- LEILAO ---")
sync_and_clean(leilao_map, "public/img-sistema-de-leilao")

print("\n--- RIFAS ---")
sync_and_clean(rifas_map, "public/img-sistema-de-rifas")
