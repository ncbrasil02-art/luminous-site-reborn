# Reformulação dos Cards de Sistemas e Reorganização da Home

Ajustar a arquitetura da página inicial para priorizar os sistemas (LPs de plataformas) antes dos serviços, reformulando os cards com um design profissional "Premium", efeitos de brilho e animações cinematográficas, dando destaque especial ao Sistema de Leilão.

## User Review Required

> [!IMPORTANT]
> A nova estrutura colocará a seção de "Sistemas Flagship" (Leilões, Rifas, etc.) acima da seção de "Expertise Digital" (Criação de Sites, SEO, etc.) na página inicial.

## Proposed Changes

### Identidade Visual e UI
- **Efeitos de Brilho (Glow):** Implementar bordas animadas e halos de luz nos cards de sistemas.
- **Design Profissional:** Utilizar tipografia Space Grotesk com pesos variados e acabamentos em gradiente Navy-Electric Blue.
- **Destaque ao Leilão:** O card do Sistema de Leilão receberá um selo de "Especialidade NcBrasil" e um efeito visual mais intenso.

### Reorganização da Home (`src/routes/index.tsx`)
- Mover a seção `SISTEMAS EM DESTAQUE` para cima da seção `SERVIÇOS E SOLUÇÕES`.
- Adicionar uma chamada de alto impacto visual (Hero secundário) para os sistemas.

### Reformulação dos Cards (`src/components/SystemsCarousel.tsx`)
- Aumentar a escala e o contraste dos cards.
- Adicionar ícones 3D ou ilustrações tecnológicas flutuantes.
- Implementar transições de slide mais fluidas.

## Technical Details
- **Componentes:** Atualização do `SystemsCarousel.tsx` para novos estilos e animações do Framer Motion.
- **Layout:** Reordenação das seções no arquivo de rota principal da Home.
- **CSS:** Adição de utilitários de animação para o "Selo de Destaque" do leilão.
