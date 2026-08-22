# Plano de Animação do Foguete (Rocket Takeoff v2)

Implementar uma animação interativa onde o foguete reaparece após 30% de rolagem da página, diminuindo de tamanho até "pousar" sobre o botão flutuante do WhatsApp, mantendo-se em um movimento de balanço para chamar a atenção do usuário.

## Alterações Técnicas

### 1. Novo Componente: `RocketLanding.tsx`
- Criar um novo componente para gerenciar a lógica de reaparecimento e pouso.
- Utilizar `framer-motion` para controlar a animação baseada no scroll (`useScroll`).
- **Gatilho**: Reaparecer de cima da tela quando `scrollYProgress` atingir aproximadamente 0.3 (30%).
- **Trajetória**: Mover-se do topo para o canto inferior direito (posição do `WhatsappFab`).
- **Escala**: Diminuir de tamanho conforme se aproxima do destino.
- **Estado Final**: Ao "pousar", iniciar uma animação de balanço contínua (`animate={{ y: [0, -10, 0] }}`).

### 2. Integração no `__root.tsx`
- Adicionar o `RocketLanding` no layout global, próximo ao `WhatsappFab`.
- Garantir que o `z-index` e a visibilidade estejam coordenados com o botão do WhatsApp.

### 3. Ajustes no `RocketTakeoff.tsx`
- O componente original de hero será mantido para o impacto inicial, mas o novo componente cuidará da fase de "perseguição" e engajamento.

## Detalhes Visuais
- Manter a identidade visual do foguete (imagem branded).
- Efeito de brilho/glow ao redor do foguete enquanto ele "pousa".
- Transição suave entre o desaparecimento do foguete do hero e o reaparecimento no scroll.
