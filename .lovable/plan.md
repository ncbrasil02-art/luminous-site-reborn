# Plano de Implementação - Correção de Imagens e Teste de Texto

O usuário reportou que "não resolveu", referindo-se provavelmente a problemas anteriores com imagens (logotipos e depoimentos) que às vezes não aparecem após o deploy. Vou realizar uma auditoria completa e aplicar correções definitivas, além de verificar o texto solicitado.

## Ações Técnicas

### 1. Correção Definitiva de Imagens (CDN & Fallbacks)
- **Página de Rifas (`src/routes/sistema-de-rifas.tsx`):**
    - Verificar todas as URLs absolutas e garantir que apontam para o domínio principal `https://www.ncbrasil.com.br`.
    - Garantir que o componente `PartnerCarousel` tenha fallbacks de texto elegantes caso a imagem falhe.
- **Página de Leilão (`src/routes/sistema-de-leilao.tsx`):**
    - Repetir a verificação de URLs absolutas.
- **Depoimentos (`src/lib/testimonials.data.ts`):**
    - Migrar URLs relativas (ex: `/testimonials/carla.jpg`) para URLs absolutas no domínio oficial, pois o deploy na Hostinger parece ter problemas com caminhos relativos em assets dinâmicos.
- **Componente LandingPage (`src/components/LandingPage.tsx`):**
    - Reforçar o tratamento de `onError` em todas as imagens (Hero, Showcase, Galeria).

### 2. Otimização de Performance e Cache
- Garantir que as imagens tenham `loading="lazy"` (exceto no Hero).
- Verificar se o `favicon.png` está sendo servido corretamente via URL absoluta em `src/lib/seo.ts`.

### 3. Verificação do Texto "não resolveu"
- O usuário enviou um comando de edição visual para o texto "não resolveu" no `body` de `src/routes/index.tsx`.
- Como esse texto não existe no código, interpretarei isso como um feedback de que os problemas anteriores persistem e farei a correção técnica profunda mencionada acima.

## Detalhes de Implementação

### URLs de Depoimentos
Mapear:
- `/testimonials/carla.jpg` -> `https://www.ncbrasil.com.br/testimonials/carla.jpg`
- etc.

### Componente PartnerCarousel
Adicionar lógica para detectar falha e mostrar o nome da empresa estilizado caso a imagem não carregue.

---
*Nota: Este plano foca na estabilidade das imagens após o deploy, que é a dor recorrente do usuário.*
