# Plano de Melhoria SEO e Conteúdo Estático

O objetivo é garantir que o site seja totalmente indexável pelo Google, com conteúdo presente no HTML inicial (SSG) e metadados exclusivos para cada página.

## Ações Técnicas

### 1. Otimização do SSG (Static Site Generation)
- **Ajustar `prerender.js`**: Incluir todas as rotas dinâmicas do blog (`/noticias/$slug`) e categorias/tags no processo de pré-renderização para que o Google veja o conteúdo completo no código-fonte.
- **Estabilização da Hidratação**: Corrigir possíveis discrepâncias entre o HTML gerado no servidor e o cliente para evitar erros de renderização.

### 2. Metadados e SEO Contextual
- **Personalização de Títulos e Descriptions**: Revisar e aplicar títulos exclusivos e meta-descriptions ricas em palavras-chave para todas as rotas institucionais, sistemas e serviços.
- **Hierarquia de Tags (H1, H2, H3)**: Garantir que cada Landing Page tenha um H1 único e uma estrutura semântica clara com palavras-chave relevantes integradas naturalmente ao texto.
- **Canonical Tags e JSON-LD**: Validar se todas as páginas possuem a tag canonical absoluta correta e esquemas de dados estruturados (Schema.org) para breadcrumbs, FAQ e artigos.

### 3. Ajuste de Conteúdo por Categoria
- **Sistemas Premium**: Refinar o conteúdo das LPs de Leilão, Rifas, Veículos e Rural com foco em conversão e termos técnicos do setor.
- **Revista Digital**: Garantir que a indexação das notícias exiba o conteúdo real do post no HTML estático.

## Detalhes de Implementação

- Atualizar o script de build para orquestrar a geração estática de forma robusta.
- Modificar o componente `LandingPage` e as rotas específicas para aceitar metadados SEO mais granulares.
- Validar a saída do build gerando um dump do HTML de rotas críticas para inspeção visual.
