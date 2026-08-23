import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck, Banknote, BarChart3, Bell, Coins, CreditCard, Dice5,
  FileCheck, Gamepad2, Gift, Globe, Layers, Lock, MessageCircle, Palette,
  QrCode, Rocket, ScanLine, ShieldCheck, Smartphone, Sparkles, Spade,
  Trophy, Users, Wallet, Zap,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";
import { SecuritySeals } from "@/components/SecuritySeals";
import { cassinoTestimonials } from "@/lib/testimonials.data";

// Import assets
import mainAsset from "@/assets/plataforma-cassino-main.png.asset.json";
import ui1Asset from "@/assets/plataforma-cassino-ui-1.jpg.asset.json";
import dashboardAsset from "@/assets/plataforma-cassino-dashboard.webp.asset.json";
import mobileAsset from "@/assets/plataforma-cassino-mobile.webp.asset.json";
import devicesAsset from "@/assets/plataforma-cassino-devices.webp.asset.json";
import sportsbookAsset from "@/assets/plataforma-cassino-sportsbook.webp.asset.json";
import cryptoAsset from "@/assets/plataforma-cassino-crypto.webp.asset.json";
import premiumAsset from "@/assets/plataforma-cassino-premium.jpg.asset.json";

const URL = "https://www.ncbrasil.com.br/plataforma-chinesa-apostas-cassino";

const lpFaq = [
  { q: "O que é uma plataforma chinesa de cassino / apostas?", a: "É uma **arquitetura de iGaming turnkey de origem asiática** (Filipinas, China, Malta), reconhecida por rodar **milhares de slots agregados, cassino ao vivo, sportsbook, mini-games e Pix** em uma única infra escalável. A NC Brasil oferece essa mesma tecnologia **tropicalizada para o Brasil** com Pix nativo, KYC BR e suporte 24/7 no fuso." },
  { q: "Já vem com jogos de slots e cassino ao vivo integrados?", a: "Sim. Agregadores como **Pragmatic Play, PG Soft, Evolution Gaming, Playtech Live, Endorphina, Spribe (Aviator), BGaming, Ezugi, Amatic e mais de 30 provedores** — total superior a **8.000 jogos** disponíveis em catálogo." },
  { q: "É legal operar cassino online no Brasil?", a: "Com a **Lei 14.790/2023** e a regulamentação da **SPA/MF (Portaria 1.475/2024)**, apostas de quota fixa e cassino online são permitidos mediante licença. Orientamos o processo: **licença estadual (LOTERJ, IPEM-PB, LOTECE) ou federal** e suporte na documentação." },
  { q: "Suporta sportsbook (apostas esportivas)?", a: "Sim, sportsbook completo com **odds ao vivo, cash out, multiplas, sistemas, boletim** e feeds via Betradar, Sportradar ou BTOBet. Cobertura de futebol, basquete, tênis, eSports e mais de 60 modalidades." },
  { q: "Como funciona o Pix e o KYC para o mercado brasileiro?", a: "**Pix instantâneo (depósito e saque) via múltiplos PSPs brasileiros** com fallback automático. KYC completo com **CPF/Serpro, biometria facial (Unico/Datavalid)**, prova de renda quando exigido pela SPA, e integração AML." },
  { q: "É multi-tenant / white label?", a: "Sim, arquitetura **multi-tenant** — várias marcas na mesma infra com dados isolados, layout independente, catálogo de jogos por operador e reports segregados." },
  { q: "Como funciona o modelo comercial?", a: "**Setup inicial + mensalidade fixa + fee por transação Pix**. Não cobramos % sobre GGR. Empresas com receita > R$5Mi/mês têm plano dedicado com SLA premium." },
  { q: "Quais recursos anti-bônus abuse e antifraude?", a: "**Engine antibônus** proprietário com detecção de multicontas via device fingerprint, análise comportamental de padrões de aposta, **rollover configurável, limite por game category** e blacklist automática de padrões suspeitos." },
  { q: "É possível operar com afiliados e programa VIP?", a: "Sim. **Módulo de afiliados completo** com CPA + RevShare + Hybrid + Sub-affiliate. **Programa VIP** com níveis, cashback progressivo, gerente pessoal e retenção via reactivation campaigns." },
  { q: "Suporta cripto (BTC, USDT) além de Pix?", a: "Sim, integração nativa com **carteiras cripto** (BTC, ETH, USDT-TRC20, USDC) via processadores como CoinsPaid, BitPay ou nó próprio. Depósito instantâneo com conversão automática para BRL." },
  { q: "Qual o prazo de entrega?", a: "**45 a 90 dias** para white label completo com sportsbook + cassino + slots + Pix + KYC operante. Operações customizadas com jogos proprietários levam 6 meses." },
  { q: "Vocês assessoram no processo de licenciamento SPA/MF?", a: "Sim, temos **parceiros jurídicos especializados** em iGaming que assessoram no processo de licença, documentação, capital social exigido e estruturação societária." },
  { q: "Suporta cassino ao vivo com dealers brasileiros?", a: "Sim, integramos com **estúdios de live casino** com dealers brasileiros (Pragmatic Play Brazil, Evolution Brazil) — mesa em português com horário nobre BR." },
  { q: "Como é o suporte técnico?", a: "**24/7 em português** por WhatsApp, ticket e videoconferência. SLA de resposta em 15 minutos e resolução crítica em 2h para clientes enterprise." },
];

export const Route = createFileRoute("/plataforma-chinesa-apostas-cassino")({
  head: () => buildLPMeta({
    title: "Sistema de Cassino Online Profissional | Plataforma de Jogos Chinesa",
    description: "NcBrasil: Plataforma completa de cassino online e apostas white label. Slots, cassino ao vivo, sportsbook e Pix nativo. O melhor script de cassino online do Brasil.",
    keywords: "sistema de cassino online, plataforma de jogos chinesa, script de cassino online, plataforma iGaming white label, cassino com pix, criar site de apostas",
    canonical: URL,
    h1: "Sistema de Cassino Online e Plataforma de Jogos Chinesa",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Sistemas", to: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { label: "Cassino Online", to: URL },
    ],
    faq: lpFaq,
    ogImage: mainAsset.url,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[
        { to: "/", label: "Home" },
        { to: "/nossos-sistemas", label: "Sistemas" },
        { to: "/plataforma-chinesa-apostas-cassino", label: "Cassino Online" },
      ]}
      eyebrow="iGaming · White Label · SEO & Performance"
      h1={<>Sistema de <span className="text-gradient">Cassino Online</span> e Plataforma de Jogos Chinesa</>}
      intro={<>A **NcBrasil** é referência na criação de **sistemas de cassino online** com a mesma arquitetura das plataformas chinesas e asiáticas. Oferecemos uma solução **white label turnkey** com **8.000+ jogos agregados**, sportsbook completo, **Pix instantâneo** e total conformidade regulatória. Design premium focado em **conversão e ranqueamento no Google**.</>}
      heroImage={mainAsset.url}
      imageKeyword="sistema de cassino online"
      stats={[
        { value: "8.000+", label: "Jogos agregados" },
        { value: "30+", label: "Provedores" },
        { value: "Pix", label: "Depósito instantâneo" },
        { value: "24/7", label: "Suporte especializado" },
      ]}
      showParallaxshowcase={true}
      showcase={[
        {
          title: "Interface de Jogador Premium",
          desc: "Design premium focado na experiência do usuário e alta retenção.",
          image: ui1Asset.url,
        },
        {
          title: "Dashboard de Gestão Turnkey",
          desc: "Controle total da sua operação com relatórios detalhados de GGR e NGR.",
          image: dashboardAsset.url,
        },
        {
          title: "Experiência Mobile First",
          desc: "App PWA otimizado para todos os smartphones, garantindo apostas em qualquer lugar.",
          image: mobileAsset.url,
        },
        {
          title: "Multi-dispositivo",
          desc: "Performance extrema em desktops, tablets e celulares com carregamento instantâneo.",
          image: devicesAsset.url,
        },
        {
          title: "Sportsbook de Alta Performance",
          desc: "Integração com odds ao vivo e milhares de eventos esportivos mundiais.",
          image: sportsbookAsset.url,
        },
        {
          title: "Ecossistema Cripto & Pix",
          desc: "Segurança total em transações com Bitcoin, USDT e Pix nativo brasileiro.",
          image: cryptoAsset.url,
        },
      ]}
      problem={{
        title: <>Sua operação não pode ser <span className="text-destructive">refém de tecnologias obsoletas</span></>,
        items: [
          "**Plataformas lentas** que derrubam o ranqueamento SEO do seu domínio.",
          "**Falta de suporte no Brasil** causa prejuízos em horários de pico.",
          "**Gateways de pagamento instáveis** que resultam em desistência de depósitos.",
          "**Ausência de jogos populares** como os slots da PG Soft e Pragmatic Play.",
          "**Dificuldade de indexação no Google** por falta de otimização de código.",
        ],
      }}
      solution={{
        title: <>A melhor <span className="text-gradient">plataforma de jogos chinesa</span> tropicalizada pela NcBrasil</>,
        desc: <>Desenvolvemos um <strong className="text-foreground text-primary">script de cassino online</strong> robusto, com código limpo e focado em <strong className="text-foreground text-primary">SEO técnico</strong>. Nossa plataforma entrega o que há de mais moderno em iGaming: <strong className="text-foreground text-primary">baixa latência, segurança extrema e alta escalabilidade</strong>.</>,
        highlights: [
          "**SEO Otimizado** para ranquear nas principais palavras-chaves do nicho.",
          "**Pix Nativo** com liquidação imediata na conta do operador.",
          "**Catálogo Completo** com Fortune Tiger, Aviator e milhares de slots.",
          "**Sportsbook Integrado** com feeds de dados em tempo real.",
          "**Segurança Bancária** com criptografia de ponta e KYC BR.",
        ],
      }}
      benefits={[
        { icon: Dice5, title: "8.000+ Jogos", desc: "Os slots mais procurados do mercado: **PG Soft, Pragmatic, Spribe** e muito mais." },
        { icon: Banknote, title: "Pix Instantâneo", desc: "Depósitos e saques automáticos via Pix para máxima satisfação do jogador." },
        { icon: Trophy, title: "Sportsbook Elite", desc: "Apostas esportivas com odds competitivas e cobertura global de eventos." },
        { icon: ShieldCheck, title: "Compliance Total", desc: "Conformidade com a **Lei 14.790/2023** e assessoria jurídica completa." },
      ]}
      features={[
        { icon: Zap, title: "Velocidade Extrema", desc: "Código otimizado para carregamento ultra-rápido, essencial para SEO." },
        { icon: Users, title: "Programa VIP", desc: "Engine de fidelização com níveis, cashback e bônus personalizados." },
        { icon: Smartphone, title: "Mobile Otimizado", desc: "Interface intuitiva que converte visitantes em jogadores ativos." },
        { icon: BarChart3, title: "Relatórios BI", desc: "Dashboards inteligentes para análise de faturamento e comportamento." },
        { icon: Rocket, title: "Lançamento Rápido", desc: "Sua plataforma no ar em tempo recorde com configuração turnkey." },
        { icon: Globe, title: "Multi-idiomas", desc: "Pronto para expansão internacional com suporte a várias moedas." },
      ]}
      finalParallaxCta={{
        text: "NcBrasil - Especialista em Plataforma de Cassino Online",
        image: premiumAsset.url,
      }}
      finalCtaTitle={<>Seja o dono da sua própria <span className="text-gradient">plataforma de cassino</span></>}
      finalCtaDesc={<>Fale agora com um especialista da **NcBrasil** e receba um orçamento personalizado para o seu **sistema de cassino online**. Otimização total para dominar as buscas do Google.</>}
      testimonials={cassinoTestimonials}
      faq={lpFaq}
      relatedNewsTags={["Cassino", "iGaming", "Sistemas", "Tecnologia"]}
    />
    <SecuritySeals />
    </>
  ),
});