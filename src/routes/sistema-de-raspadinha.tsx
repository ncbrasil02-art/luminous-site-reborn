import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck, Banknote, BarChart3, Bell, Coins, CreditCard, Dice5,
  FileCheck, Gift, Globe, Layers, Lock, MessageCircle, Palette,
  QrCode, Rocket, ScanLine, ShieldCheck, Smartphone, Sparkles,
  Ticket, Trophy, Users, Wallet, Zap,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistema-de-raspadinha";

const lpFaq = [
  { q: "Raspadinha online valendo Pix é legal no Brasil?", a: "Depende do modelo. Operamos legalmente como **título de capitalização com sorteio incorporado** (via seguradora parceira), **promoção comercial autorizada pela SECAP** ou **jogo de skill / fantasy**. Nossa equipe orienta o formato ideal para sua operação — **regulamento e termos incluídos**." },
  { q: "Como funciona o estoque de prêmios das raspadinhas?", a: "Você configura **lotes de raspadinhas com quantidade fixa, valor unitário e distribuição matemática de prêmios** (ex: 100.000 raspadinhas de R$2 com 1 prêmio de R$5.000, 10 de R$500, 100 de R$50…). O sistema garante distribuição exata via **RNG certificado e auditável**." },
  { q: "O RNG (gerador aleatório) é confiável e auditável?", a: "Sim. Usamos **RNG criptográfico com semente auditável, log imutável e certificado por auditoria externa (padrão iTech Labs / GLI)**. Cada raspadinha gera um **hash público** — o jogador confere o resultado no blockchain." },
  { q: "Aceita Pix instantâneo para depósito e saque?", a: "Sim. **Depósito via Pix cai em segundos** (webhook do PSP); **saque de prêmios em Pix processado em minutos** com validação de titularidade e KYC. Zero intervenção manual." },
  { q: "É possível ter app nativo iOS e Android?", a: "Sim, entregamos **PWA + aplicativo nativo iOS/Android** publicado nas lojas com sua marca, notificação push nativa, haptic feedback ao raspar e **experiência mobile-first premium**." },
  { q: "Como o sistema previne fraudes e multicontas?", a: "**Device fingerprint, biometria facial no KYC, blacklist de CPF, limite diário/mensal por dispositivo, análise comportamental** e integração com bureau de crédito. Bloqueio automático de padrões suspeitos." },
  { q: "Posso vender raspadinhas de marcas parceiras ou temáticas?", a: "Sim, temos módulo de **raspadinhas temáticas** (Copa, Natal, Dia dos Namorados, marcas parceiras) com arte customizada e regras diferentes por lote." },
  { q: "Qual é o custo de operação?", a: "Modelo **setup inicial + mensalidade fixa + fee por transação Pix** (repasse do PSP). Não cobramos % sobre GGR. Envie seu volume estimado e devolvemos proposta em 24h." },
  { q: "Vocês entregam a identidade visual e as artes das raspadinhas?", a: "Sim, temos time de **design in-house**: criamos a **arte das raspadinhas, animação de raspagem, logo, app icon, splash screen** e material de marketing." },
  { q: "É possível operar em múltiplas marcas (multi-tenant)?", a: "Sim, arquitetura **multi-tenant** — uma infra única servindo várias marcas / operações regionais com dados isolados." },
  { q: "Qual o prazo de entrega?", a: "**15 a 30 dias** para versão white label pronta com sua marca e um lote de raspadinhas inicial. Customizações profundas levam de 45 a 90 dias." },
  { q: "Aceita bônus, freespins, cashback e programa de fidelidade?", a: "Sim, engine de **promoções completa**: bônus de boas-vindas, raspadinhas grátis, cashback percentual, torneios, missões diárias e **programa VIP com níveis**." },
];

export const Route = createFileRoute("/sistema-de-raspadinha")({
  head: () => buildLPMeta({
    title: "Sistema de Raspadinha Online | Plataforma White Label com Pix",
    description: "Plataforma completa de raspadinha online valendo Pix: RNG auditável, estoque de prêmios, KYC + antifraude, app iOS/Android white label e engine de bônus. Entrega em 30 dias.",
    keywords: "sistema de raspadinha online, raspadinha online, plataforma raspadinha, raspadinha valendo pix, raspadinha instant win, sistema raspadinha digital, plataforma instant win, raspadinha white label",
    canonical: URL,
    h1: "Sistema de Raspadinha Online White Label",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { name: "Sistema de Raspadinha", url: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[
        { to: "/", label: "Home" },
        { to: "/nossos-sistemas", label: "Sistemas" },
        { to: "/sistema-de-raspadinha", label: "Sistema de Raspadinha" },
      ]}
      eyebrow="Instant Win · Raspadinha Valendo Pix · White Label"
      h1={<>Sistema de <span className="text-gradient">Raspadinha Online</span> — Prêmio em Pix, RNG Auditável, App Próprio</>}
      intro={<>Plataforma <strong className="text-foreground">turnkey white label</strong> para operar <strong className="text-foreground">raspadinha online valendo Pix</strong> com <strong className="text-foreground">RNG certificado</strong>, animação canvas premium, controle de estoque de prêmios, KYC + antifraude e app iOS/Android publicado com sua marca. <strong className="text-foreground">Mais de 5 milhões de raspadinhas processadas</strong>, R$3 milhões em prêmios distribuídos e infraestrutura preparada para <strong className="text-foreground">milhares de jogadas por segundo</strong>. Sem % sobre GGR — <strong className="text-foreground">você é dono da operação</strong>.</>}
      stats={[
        { value: "5Mi+", label: "Raspadinhas jogadas" },
        { value: "R$3Mi", label: "Prêmios distribuídos" },
        { value: "<30s", label: "Saque Pix" },
        { value: "99.99%", label: "Uptime SLA" },
      ]}
      clients={["Raspa BR", "PixWin", "Sorte na Mão", "Raspadinha VIP", "GO Raspa", "InstaWin", "Prêmio Fácil", "Raspaí"]}
      problem={{
        title: <>Plataformas prontas te tratam como <span className="text-destructive">produto, não como dono</span></>,
        items: [
          "**White labels internacionais (SoftGamings, GamingTec) cobram % sobre GGR de 15% a 30%** — em uma operação de R$1 milhão/mês, R$150 mil ficam com eles.",
          "**Dados dos jogadores ficam com o fornecedor** — se você quiser trocar de plataforma, começa do zero.",
          "**RNG genérico sem auditoria pública** — se um jogador desconfiar da lisura, você não tem como provar.",
          "**Sem app nativo com sua marca** — só web mobile que ninguém instala nem lembra.",
          "**Integração de Pix genérica, sem otimização para Brasil** — saques travados por dias, KYC estrangeiro que rejeita CPF válido.",
          "**Suporte no fuso de Malta ou Chipre** — problema no domingo à noite? Boa sorte.",
        ],
      }}
      solution={{
        title: <>Uma plataforma <span className="text-gradient">brasileira, sua, com Pix nativo e RNG auditável</span></>,
        desc: <>Entregamos a <strong className="text-foreground">plataforma completa em seu nome</strong>: código-fonte, hospedagem, gateway Pix direto na sua conta, KYC brasileiro (Serpro/Datavalid), app iOS/Android com sua marca nas lojas e <strong className="text-foreground">zero comissão sobre GGR</strong>. Nossa equipe orienta o modelo legal, integra o RNG certificado e <strong className="text-foreground">opera junto com você nos primeiros 90 dias</strong>.</>,
        highlights: [
          "**RNG criptográfico auditável** com hash público por jogada",
          "**Pix instantâneo BR nativo** (Efí, Mercado Pago, Pagar.me)",
          "**App iOS + Android nativo** com haptic feedback",
          "**KYC brasileiro completo** — CPF, biometria facial, Serpro",
          "**Estoque matemático de prêmios** — distribuição garantida",
          "**Zero fee sobre GGR** — só setup + mensalidade fixa",
          "**Multi-tenant** — várias marcas na mesma infra",
          "**Suporte técnico 24/7 no Brasil** por WhatsApp",
        ],
      }}
      benefits={[
        { icon: ScanLine, title: "Animação Realista de Raspagem", desc: "**Canvas WebGL + haptic feedback nativo** — a experiência de raspar no celular é indistinguível de uma raspadinha física de papel." },
        { icon: Banknote, title: "Prêmio em Pix Instantâneo", desc: "Prêmios em dinheiro creditados **na carteira em segundos** e sacáveis via Pix com validação automática de titularidade." },
        { icon: ShieldCheck, title: "RNG Auditável", desc: "**Gerador criptográfico com semente pública, log imutável e certificação externa** — jogador confere no blockchain." },
        { icon: Trophy, title: "Múltiplos Tipos de Prêmio", desc: "**Dinheiro em Pix, produtos físicos, cashback, freespins, cupom, cripto** — tudo em uma única raspadinha." },
      ]}
      features={[
        { icon: Coins, title: "Créditos & Recargas", desc: "Sistema de créditos com **combos promocionais, cashback progressivo, bônus por depósito e primeira compra**." },
        { icon: Wallet, title: "Carteira Segura", desc: "**Saldo em BRL, extrato completo, saque via Pix, cartão pré-pago virtual** e histórico auditável." },
        { icon: Gift, title: "Raspadinhas Temáticas", desc: "**Datas comemorativas, marcas parceiras, temporadas esportivas** — arte e regras customizadas por lote." },
        { icon: Users, title: "Programa de Indicação", desc: "**MGM completo** — ganhe raspadinhas grátis e % sobre depósito do indicado." },
        { icon: Smartphone, title: "PWA + App Nativo", desc: "**Instalável no celular** com notificação push, ícone na home e experiência offline parcial." },
        { icon: Zap, title: "Escala Massiva", desc: "**Milhares de jogadas por segundo** com filas assíncronas, cache multi-camada e sharding de banco." },
        { icon: Bell, title: "Push Segmentado", desc: "Notificação por **comportamento** — jogador inativo, saldo alto sem uso, nova raspadinha temática." },
        { icon: BadgeCheck, title: "Programa VIP", desc: "**Níveis Bronze → Diamante** com cashback progressivo, gerente pessoal e raspadinhas exclusivas." },
        { icon: Globe, title: "Multi-idioma & Multi-moeda", desc: "PT-BR, EN, ES + **BRL, USD, USDT** — pronto para expansão internacional." },
      ]}
      modules={[
        {
          icon: Ticket,
          title: "Módulo Raspadinhas",
          items: [
            "Criação de lotes com distribuição matemática",
            "RNG criptográfico auditável",
            "Animação canvas + haptic feedback",
            "Arte customizada por lote",
            "Preço e prêmios configuráveis",
          ],
        },
        {
          icon: Wallet,
          title: "Módulo Carteira & Pix",
          items: [
            "Depósito via Pix instantâneo",
            "Saque em minutos com validação",
            "Histórico e extrato completo",
            "KYC + biometria facial",
            "Antilavagem (AML) integrado",
          ],
        },
        {
          icon: Gift,
          title: "Módulo Promoções",
          items: [
            "Bônus de boas-vindas",
            "Cashback percentual",
            "Freespins e raspadinhas grátis",
            "Missões diárias/semanais",
            "Torneios com premiação",
          ],
        },
        {
          icon: Users,
          title: "Módulo Afiliados & VIP",
          items: [
            "Link único por afiliado",
            "Comissão por CPA + RevShare",
            "Programa VIP em níveis",
            "Gerente pessoal para high rollers",
            "Painel de conversão",
          ],
        },
        {
          icon: BarChart3,
          title: "Módulo Analytics",
          items: [
            "GGR / NGR em tempo real",
            "LTV, ARPPU, retenção D1/D7/D30",
            "Funil por raspadinha e por lote",
            "Cohort analysis",
            "Exportação para BI",
          ],
        },
        {
          icon: ShieldCheck,
          title: "Módulo Antifraude",
          items: [
            "Device fingerprint",
            "Detecção de multicontas",
            "Regras de retenção de saldo",
            "Blacklist e limite diário",
            "Integração com bureau de crédito",
          ],
        },
      ]}
      useCases={[
        { icon: Sparkles, title: "Influenciador Digital", desc: "Criador com **audiência engajada** que monetiza com raspadinhas próprias — app nas lojas com sua marca." },
        { icon: Rocket, title: "Empreendedor iGaming", desc: "Operador brasileiro que quer **entrar em instant win** sem depender de plataforma internacional." },
        { icon: Trophy, title: "Marca de Consumo", desc: "**Promoção comercial** com raspadinhas — engajamento e retenção de clientes de varejo/CPG." },
        { icon: Users, title: "Rede de Franquias", desc: "Operação **multi-tenant regional** — cada franqueado com sua página, mesma infra." },
        { icon: Globe, title: "Expansão LATAM", desc: "Plataforma **multi-idioma / multi-moeda** para expandir para México, Colômbia, Argentina." },
        { icon: Coins, title: "Plataforma Cripto", desc: "Raspadinhas com **depósito em USDT/BTC** e saque em Pix ou cripto." },
      ]}
      integrations={[
        { name: "Mercado Pago", category: "Pix" },
        { name: "Efí (Gerencianet)", category: "Pix" },
        { name: "Pagar.me", category: "Pix / Split" },
        { name: "PagBank", category: "Pix / Cartão" },
        { name: "Iugu", category: "Cobrança" },
        { name: "Serpro / Datavalid", category: "KYC" },
        { name: "Unico Check", category: "Biometria" },
        { name: "Idwall", category: "AML" },
        { name: "Google Analytics 4", category: "Analytics" },
        { name: "Meta Pixel", category: "Ads" },
        { name: "TikTok Pixel", category: "Ads" },
        { name: "AppsFlyer", category: "Mobile Attribution" },
        { name: "WhatsApp Business", category: "Comunicação" },
        { name: "Zendesk", category: "Suporte" },
        { name: "Amplitude", category: "Product Analytics" },
        { name: "Segment", category: "CDP" },
      ]}
      security={[
        { icon: Lock, title: "LGPD Compliant", desc: "**Consentimento granular, portabilidade, direito ao esquecimento** e DPO parceiro incluídos." },
        { icon: ShieldCheck, title: "PCI-DSS + AML", desc: "**Tokenização de cartão, monitoramento antilavagem** e reports COAF quando aplicável." },
        { icon: ScanLine, title: "KYC + Biometria", desc: "**Face match, prova de vida, validação CPF** via Serpro/Datavalid e bureau de crédito." },
        { icon: FileCheck, title: "RNG Certificado", desc: "**iTech Labs / GLI ready** — auditoria externa e hash público por jogada." },
      ]}
      timeline={[
        { step: "Semana 1-2", title: "Discovery & Design", desc: "Reunião, **definição do modelo legal, identidade visual, arte das raspadinhas** e configuração de lotes." },
        { step: "Semana 3-4", title: "Setup & Integração", desc: "**Infra provisionada, domínio + SSL, gateway Pix, KYC, RNG certificado** e ambiente de homologação." },
        { step: "Semana 5", title: "Homologação", desc: "**Testes de carga (10k req/s), auditoria de RNG, teste de fluxo Pix, treinamento** e ajustes finais." },
        { step: "Semana 6", title: "Go-Live", desc: "**Publicação em produção, submissão do app iOS/Android, campanha de lançamento** e monitoramento 24/7." },
        { step: "Mês 2-3", title: "Otimização", desc: "**A/B tests, ajuste de RTP, novas raspadinhas temáticas, expansão de canais** de aquisição." },
      ]}
      comparative={{
        usLabel: "NC Brasil",
        themLabel: "White label internacional",
        rows: [
          { feature: "Comissão sobre GGR", us: "0%", them: "15% a 30%" },
          { feature: "Setup inicial", us: "Fixo, sem surpresas", them: "USD 20k a 100k" },
          { feature: "Código-fonte licenciado", us: true, them: false },
          { feature: "Dono do banco de dados", us: true, them: false },
          { feature: "Pix nativo brasileiro", us: true, them: "Parcial" },
          { feature: "KYC brasileiro (Serpro/CPF)", us: true, them: false },
          { feature: "App iOS/Android com sua marca", us: true, them: "Add-on caro" },
          { feature: "RNG com hash público auditável", us: true, them: "Fechado" },
          { feature: "Suporte 24/7 no Brasil (PT-BR)", us: true, them: false },
          { feature: "Time de arte in-house", us: true, them: false },
          { feature: "Multi-tenant", us: true, them: "Add-on" },
          { feature: "Deploy em 30 dias", us: true, them: "3 a 6 meses" },
        ],
      }}
      testimonials={[
        { quote: "Trocamos um white label europeu pela NC Brasil e economizamos R$180 mil/mês em GGR. O Pix nativo mudou nossa retenção completamente.", author: "Bruno Cardoso", role: "PixWin · SP" },
        { quote: "O RNG com hash público na blockchain acabou com qualquer questionamento de lisura. Nosso NPS subiu de 42 para 71.", author: "Thaís Menezes", role: "Raspa BR · RJ" },
        { quote: "Em 90 dias já estávamos operando com app iOS e Android nas lojas. Nenhum fornecedor internacional entregou isso antes.", author: "Diego Rocha", role: "GO Raspa · GO" },
      ]}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para lançar sua <span className="text-gradient">plataforma de raspadinhas</span>?</>}
      finalCtaDesc={<>Receba um <strong className="text-foreground">plano executivo em 24h</strong> com modelo legal, arquitetura, prazo, investimento e projeção de GGR. <strong className="text-foreground">Consultoria estratégica gratuita</strong>.</>}
      relatedNewsTags={["Raspadinha","Sorteios","Sistemas"]}
    />
  ),
});
