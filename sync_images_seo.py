import os
import shutil

# Dicionários de mapeamento baseados no visual e nomes dos arquivos originais
# Leilão
leilao_map = {
    "image-2.png": "sistema-de-leilao-vitrine-principal-01.png",
    "image-3.png": "plataforma-de-leilao-dashboard-administrativo-02.png",
    "image-4.png": "software-de-leiloes-judiciais-e-extrajudiciais-03.png",
    "image-5.png": "sistema-de-leilao-online-mobile-responsivo-04.png",
    "image-6.png": "plataforma-de-leilao-lotes-e-categorias-05.png",
}

# Rifas
rifas_map = {
    "transferir_11.png": "sistema-de-rifas-online-vitrine-01.png",
    "transferir_12.png": "plataforma-de-rifas-digital-configuracoes-02.png",
    "transferir_13.png": "script-de-rifas-automatizado-lucrativo-03.png",
    "transferir_14.png": "sistema-de-rifas-com-cotas-premiadas-04.png",
    "transferir_15.png": "plataforma-de-rifas-painel-do-cliente-05.png",
    "transferir_16.png": "software-para-rifas-online-seguro-06.png",
    "transferir_17.png": "sistema-de-rifas-n-c-brasil-tecnologia-07.png",
}

def sync_and_rename(mapping, target_dir):
    os.makedirs(target_dir, exist_ok=True)
    # Limpar diretório para evitar misturas antigas
    for f in os.listdir(target_dir):
        os.remove(os.path.join(target_dir, f))
    
    for src_name, new_name in mapping.items():
        src_path = os.path.join("/mnt/user-uploads", src_name)
        if os.path.exists(src_path):
            dst_path = os.path.join(target_dir, new_name)
            shutil.copy2(src_path, dst_path)
            print(f"Copied {src_name} -> {new_name}")
        else:
            print(f"Warning: Source {src_name} not found")

print("Syncing Leilão images...")
sync_and_rename(leilao_map, "public/img-sistema-de-leilao")

print("\nSyncing Rifas images...")
sync_and_rename(rifas_map, "public/img-sistema-de-rifas")
