# Plano de Atualização da Landing Page de Rifas

O objetivo é transformar a página do **Sistema de Rifas** em uma Landing Page Premium, seguindo o padrão da página de Leilão, com foco em SEO, novos recursos visuais (showcase parallax) e prova social estratégica.

## Mudanças visuais e de interface
- **Showcase Parallax**: Implementação de uma seção de galeria com efeito parallax exibindo as interfaces do sistema (Painel, Rifas, App, etc.), baseada na imagem enviada pelo usuário.
- **Bloco de Lucros (Social Proof)**: Adição de uma nova seção no início da página focada em "Pessoas que estão utilizando e tendo altos lucros", com fotos e depoimentos contextuais.
- **Efeito de Expansão de Imagens**: Garantir que o componente `LandingPage` utilize a lógica de expansão para as imagens longas enviadas pelo usuário.
- **Vídeos e Imagens Estratégicos**: Posicionamento de mídias para otimizar o tempo de permanência do usuário na página.

## Otimização de SEO e Conteúdo
- **Palavras-chave Focais**: Reestruturação de textos focando em: *script de rifas*, *sistema de rifas*, *fazer rifa online*, *plataforma de rifas*, *plataforma de ações online*, *script de ações*, *sistema de ações de rifas*.
- **Copywriting**: Ajuste nos títulos (H1, H2) e descrições para um tom mais persuasivo e voltado para marketing, destacando a rentabilidade do sistema.

## Detalhes técnicos
- Atualização da rota `src/routes/sistema-de-rifas.tsx` para incluir novos props no componente `LandingPage`.
- Mapeamento de novos depoimentos específicos para o setor de rifas no `src/lib/testimonials.data.ts`.
- Inclusão do carrossel de parceiros/homologações se aplicável ao contexto de rifas (ex: Loteria Federal, Gateways de Pagamento).
