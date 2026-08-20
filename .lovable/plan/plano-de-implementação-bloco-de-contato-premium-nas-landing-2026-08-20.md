# Plano de Implementação: Bloco de Contato Premium nas Landing Pages

Este plano visa adicionar um bloco de contato completo e visualmente impactante ao final de todas as Landing Pages do site, seguindo o design da referência enviada e automatizando o rastreamento da página de origem no formulário.

## Alterações de Design e UX

- **Novo Componente `ContactSection`**: Um bloco premium com:
  - **Formulário à esquerda**: Campos de Nome, E-mail, Empresa, WhatsApp e Mensagem.
  - **Informações à direita**: E-mail, WhatsApp (com link direto), Endereço (São Bernardo do Campo) e Horário (Segunda a Domingo, 8h às 22h).
  - **Identificação da Origem**: O formulário capturará automaticamente o título ou URL da página para que o e-mail/whatsapp chegue identificado (ex: "Contato via Sistema de Leilão").

## Detalhes Técnicos

- **Componente**: Criação de `src/components/ContactSection.tsx`.
- **Integração**: Inclusão do componente no `src/components/LandingPage.tsx`, posicionado entre o FAQ e as Notícias Relacionadas (conforme pedido de ordem anterior).
- **Dados**:
  - E-mail: `comercial@ncbrasil.com.br`
  - WhatsApp: `21996509905`
  - Endereço: `Rua Barão de Mauá 347, São Bernardo do Campo - São Paulo`
  - Horário: `Segunda a Domingo, das 08:00 às 22:00`
- **Funcionalidade**:
  - O formulário abrirá o cliente de e-mail do usuário com o assunto pré-preenchido contendo o nome da página atual.
  - O link de WhatsApp terá uma mensagem inicial identificando a página.

## Verificação e Testes

- Validar a responsividade do novo bloco em dispositivos móveis.
- Garantir que o formulário está capturando corretamente a propriedade `pageTitle` ou `h1`.
- Verificar se as informações de contato estão consistentes com a solicitação.
