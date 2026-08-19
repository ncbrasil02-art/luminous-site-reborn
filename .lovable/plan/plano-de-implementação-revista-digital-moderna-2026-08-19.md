# Plano de Implementação: Revista Digital Moderna

Implementar uma seção de revista digital com layout premium, animações fluidas, paginação e suporte a conteúdo completo, integrando-a na estrutura de notícias existente.

## Alterações de Design e Componentes

- **NewsDisplay (Carrossel)**: Ajustar para um layout mais "cinematográfico" com efeitos de glow e transições de slide suaves.
- **MagazineSection (Nova Seção)**: Reconstruir esta seção para agir como a "vitrine" da revista na Home, com layout assimétrico e tipografia moderna.
- **Lista de Notícias (/noticias)**: Implementar paginação real (ou "Carregar Mais" infinito) e filtros visuais por categoria/tag.
- **Artigo (/noticias/$slug)**: Melhorar o suporte a conteúdo completo com tipografia de leitura otimizada, sumário automático e sugestões de leitura relacionada.

## Detalhes Técnicos

- **Navegação**: Uso de `Link` do TanStack Router com prefetch para transições instantâneas.
- **Animações**: `framer-motion` para entrada de elementos e `embla-carousel` para slides.
- **SEO**: Reforçar JSON-LD `NewsArticle` em cada notícia e `BreadcrumbList`.
- **Conteúdo**: Garantir que o `dangerouslySetInnerHTML` lide corretamente com o HTML vindo do XML importado, estilizando-o via `prose-invert`.

## Passos de Implementação

1.  **Refatoração do NewsDisplay**: Aprimorar o carrossel no final da Home.
2.  **Upgrade da MagazineSection**: Criar o layout de "revista" com grid moderna.
3.  **Paginação na Listagem**: Adicionar lógica de estado para carregar lotes de notícias em `/noticias`.
4.  **Melhoria do Artigo**: Ajustar `src/routes/noticias.$slug.tsx` para suporte a leitura longa.
