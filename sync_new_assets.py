import os
import shutil

# Dicionário de mapeamento para as novas imagens de LEILÃO enviadas pelo usuário
# Baseado nos uploads atuais e no pedido de "palavra de cauda longa"
leilao_map = {
    "transferir_11-2.png": "sistema-de-leilao-configuracoes-identidade-01.png",
    "transferir_15_dd-2.png": "plataforma-de-leilao-dashboard-gerencial-02.png",
    "transferir_15-2.png": "sistema-de-leilao-modelos-de-card-moderno-03.png",
    "transferir_8-2.png": "plataforma-de-leilao-lote-detalhe-agronegocio-04.png",
}

# Rifas - O usuário disse que enviaria depois, mas já temos um "dashboard-pc-2.png" que parece novo
rifas_map = {
    "dashboard-pc-2.png": "sistema-de-rifas-dashboard-financeiro-premium-01.png",
}

def sync_and_clean(mapping, target_dir):
    os.makedirs(target_dir, exist_ok=True)
    
    # Deletar imagens antigas conforme solicitado ("todas as imagens que estão lá você deleta")
    print(f"Limpando diretório: {target_dir}")
    for f in os.listdir(target_dir):
        file_path = os.path.join(target_dir, f)
        try:
            if os.path.isfile(file_path):
                os.remove(file_path)
        except Exception as e:
            print(f"Erro ao deletar {f}: {e}")

    # Copiar novas imagens com nomes SEO
    for src_name, new_name in mapping.items():
        src_path = os.path.join("/mnt/user-uploads", src_name)
        if os.path.exists(src_path):
            dst_path = os.path.join(target_dir, new_name)
            shutil.copy2(src_path, dst_path)
            print(f"Copied {src_name} -> {new_name}")
        else:
            print(f"Warning: Source {src_name} not found in uploads")

print("--- Processando imagens de LEILÃO ---")
sync_and_clean(leilao_map, "public/img-sistema-de-leilao")

print("\n--- Processando imagens de RIFAS ---")
sync_and_clean(rifas_map, "public/img-sistema-de-rifas")
