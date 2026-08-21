import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Banknote, BarChart3, Clock, Coins, Gift, ShieldCheck, Sparkles, Timer, Trophy, Users, Wallet, Zap, Smartphone, ShoppingCart, Percent } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";
import { centavosTestimonials } from "@/lib/testimonials.data";
import { SITE_URL } from "@/lib/seo";

import vitrineAsset from "@/assets/centavos-vitrine.png.asset.json";
import detalheAsset from "@/assets/centavos-detalhe.png.asset.json";
import heroAsset from "@/assets/centavos-hero.png.asset.json";
import pacotesAsset from "@/assets/centavos-pacotes.png.asset.json";
import encerradosAsset from "@/assets/centavos-encerrados.png.asset.json";
import mobileAsset from "@/assets/centavos-mobile.png.asset.json";
import rankingAsset from "@/assets/centavos-ranking.png.asset.json";

const URL = `${SITE_URL}/sistema-de-leilao-de-centavos`;

const lpFaq = [
  { q: "O sistema de leilão de centavos é legal no Brasil?", a: "Sim. Quando configurado corretamente como **plataforma de entretenimento e clube de benefícios**, seguindo as normas de promoções comerciais e Skill Gaming. O **sistema leilão de centavos** da NC Brasil é desenvolvido com total conformidade jurídica." },
  { q: "Como funciona a monetização do site de leilão de centavos?", a: "O faturamento principal vem da **venda de pacotes de lances (créditos)**. O usuário compra créditos e cada lance dado aumenta o valor do produto em apenas R$ 0,01. A margem de lucro é altíssima, pois um produto pode gerar milhares de lances antes de ser arrematado." },
  { q: "O sistema possui bot ou robô de lance automático?", a: "Sim. O nosso **sistema leilão de centavos** possui a função de **Lance Automático (BidButler)**, onde o usuário define um limite de lances e o sistema disputa por ele, aumentando o engajamento e a competitividade do leilão." },
  { q: "Como é feita a entrega dos prêmios arrematados?", a: "A plataforma possui um **módulo de logística completo**. Após o arremate, o vencedor paga o valor final (geralmente com 99% de desconto) e o frete. O sistema notifica o administrador para o envio do produto." },
  { q: "Quais são os diferenciais do software de leilão de centavos da NC Brasil?", a: "Diferente de scripts genéricos, nosso **sistema leilão de centavos** é construído com tecnologia de alta performance (WebSockets), garantindo que o cronômetro seja preciso em milissegundos, evitando contestações e fraudes." },
  { q: "É possível integrar com gateways de pagamento como Pix?", a: "Sim. O sistema já vem com **integração nativa para Pix com liquidação instantânea**, além de cartão de crédito e boleto, facilitando a compra de créditos pelos usuários." },
];

export const Route = createFileRoute("/sistema-de-leilao-de-centavos")({
  head: () => buildLPMeta({
    title: "Leilão de Centavos | Plataforma Premium Penny Auction",
    description: "NcBrasil: Crie seu site de leilão de centavos com lances em tempo real, timer de alta precisão e Pix. A melhor plataforma de entretenimento do Brasil.",
    keywords: "sistema leilão de centavos, plataforma de leilão de centavos, site de leilão de centavos, software leilão centavos, script leilão de centavos, penny auction brasil, sistema de lances online",
    canonical: "/sistema-de-leilao-de-centavos",
    h1: "NcBrasil - Sistema de Leilão de Centavos",
    breadcrumbs: [
      { label: "Home", to: `${SITE_URL}/` },
      { label: "Sistemas", to: `${SITE_URL}/nossos-sistemas` },
      { label: "Sistema Leilão de Centavos", to: URL },
    ],
    faq: lpFaq,
    ogImage: heroAsset.url,
  }),
  component: () => (
    <>
      <Helmet>
        <title>Sistema Leilão de Centavos | Plataforma Premium Penny Auction</title>
        <meta name="description" content="Crie seu site de leilão de centavos profissional. Plataforma completa com pacotes de lances, timer anti-sniping, Pix e apps. O melhor sistema leilão de centavos." />
        <meta name="keywords" content="sistema leilão de centavos, plataforma de leilão de centavos, site de leilão de centavos, software leilão centavos, script leilão de centavos, penny auction brasil, sistema de lances online" />
      </Helmet>
      <LandingPage
      imageKeyword="sistema leilão de centavos"
      heroImage={heroAsset.url}
      showParallaxshowcase
      showcaseImages={[
        vitrineAsset.url,
        detalheAsset.url,
        mobileAsset.url,
        pacotesAsset.url,
        rankingAsset.url,
        encerradosAsset.url,
      ]}
      showcase={[
        { title: "Vitrine de Prêmios", desc: "Interface otimizada para exibir produtos premium e atrair lances.", image: vitrineAsset.url },
        { title: "Pregão em Tempo Real", desc: "Cronômetro sincronizado via WebSocket para precisão absoluta.", image: detalheAsset.url },
        { title: "Experiência Mobile", desc: "Layout 100% responsivo para o usuário arrematar de qualquer lugar.", image: mobileAsset.url },
        { title: "Pacotes de Lances", desc: "Gestão completa de créditos e promoções para aumentar o faturamento.", image: pacotesAsset.url },
        { title: "Ranking e Gamificação", desc: "Histórico de ganhadores e ranking de usuários mais ativos.", image: rankingAsset.url },
        { title: "Galeria de Arrematados", desc: "Exibição de provas sociais com produtos já entregues com sucesso.", image: encerradosAsset.url },
      ]}
      breadcrumbs={[
        { to: "/", label: "Home" },
        { to: "/nossos-sistemas", label: "Sistemas" },
        { to: "/sistema-de-leilao-de-centavos", label: "Leilão de Centavos" },
      ]}
      eyebrow="Plataforma Profissional"
      h1={
        <div className="flex flex-col items-center gap-8 text-center">
          <span>Sistema <span className="text-gradient">Leilão de Centavos</span> Premium</span>
        </div>
      }
      intro={
        <>
          Lance o seu próprio **site de leilão de centavos** com a tecnologia mais avançada do mercado. O nosso **sistema leilão de centavos** (Penny Auction) permite que você comercialize produtos premium através de um modelo de lances altamente lucrativo. Se você busca uma **plataforma de leilão de centavos** robusta, com split de pagamentos, proteção anti-fraude e performance impecável, a NC Brasil tem a solução ideal para o seu negócio.
        </>
      }
      primaryCta={{ to: "/orcamento", label: "Solicitar orçamento" }}
      secondaryCta={{ to: "/contato", label: "Falar com consultor" }}
      finalPrimaryCta={{ to: "/orcamento", label: "Solicitar orçamento" }}
      finalSecondaryCta={{ to: "/contato", label: "Falar com a equipe" }}
      stats={[
        { value: "99% OFF", label: "Desconto médio" },
        { value: "0ms", label: "Delay de lance" },
        { value: "100%", label: "White-label" },
        { value: "Pix", label: "Checkout nativo" },
      ]}
      clients={[
        "Marketplaces", "Influenciadores", "Empresas de E-commerce",
        "Clubes de Benefícios", "Portais de Prêmios", "Startups de Gaming",
      ]}
      problem={{
        title: <>Scripts baratos <span className="text-destructive">destroem a confiança</span> e travam no pregão</>,
        items: [
          "**Delay no cronômetro** faz o usuário perder o lance no último segundo, gerando reclamações e processos.",
          "Sistemas sem **segurança contra multicontas** são alvos fáceis para usuários que fraudam o sistema.",
          "Design amador e carregamento lento afastam o público que busca **produtos de luxo**.",
          "Falta de um **módulo financeiro profissional** torna a gestão de pagamentos e envios um pesadelo.",
          "Plataformas que não suportam **alto volume de acessos simultâneos** caem no momento crítico do pregão.",
        ],
      }}
      solution={{
        title: <>A melhor <span className="text-gradient">Plataforma de Leilão de Centavos</span> do Brasil</>,
        desc: <>Desenvolvemos um **software de leilão de centavos** do zero, focado em alta performance e escalabilidade. Com nosso **sistema leilão de centavos**, você tem controle total sobre as margens, cronogramas de leilões e pacotes de créditos. É a ferramenta perfeita para quem quer dominar o mercado de **penny auction** com um design cinematográfico e tecnologia de ponta.</>,
        highlights: [
          "**Motor WebSockets** — lances em tempo real com latência zero",
          "**BidButler (Lance Automático)** — mais lances mesmo sem o usuário logado",
          "**Proteção Anti-Sniping** — prorrogação inteligente do timer",
          "**Gestão de Estoque** — controle de prêmios e logística de entrega",
          "**Buy Now (Compre Agora)** — converta o usuário mesmo se ele não ganhar",
          "**Split de Pagamentos** — Pix automático e conciliação bancária",
          "**App Nativo Opcional** — sua marca nas lojas App Store e Play Store",
          "**Relatórios de BI** — acompanhe lucros, lances e conversão em tempo real",
        ],
      }}
      benefits={[
        { icon: Coins, title: "Economia de Créditos", desc: "Venda **pacotes de lances** com bônus e aumente o LTV do seu usuário no seu **site de leilão**." },
        { icon: Timer, title: "Cronômetro de Alta Precisão", desc: "**Sistema leilão de centavos** com tecnologia que evita delays e garante lisura no pregão." },
        { icon: Smartphone, title: "Mobile First", desc: "Interface pensada para arremates rápidos no celular. O melhor **software leilão centavos**." },
        { icon: ShieldCheck, title: "Antifraude Integrado", desc: "Bloqueio de multicontas por IP, Hardware ID e comportamento suspeito." },
      ]}
      features={[
        { icon: Zap, title: "Performance Extrema", desc: "Suporta milhares de usuários dando lances simultâneos sem lentidão." },
        { icon: ShoppingCart, title: "Módulo E-commerce", desc: "Venda direta de produtos com abatimento dos lances gastos pelo usuário." },
        { icon: BarChart3, title: "Painel de Controle", desc: "Gestão total de leilões, usuários, créditos e histórico de pregões." },
        { icon: Percent, title: "Marketing e Cupons", desc: "Crie campanhas de cupons e créditos grátis para novos usuários." },
        { icon: Users, title: "Ranking de Ganhadores", desc: "Gere prova social automática com a galeria de vencedores do sistema." },
        { icon: Wallet, title: "Checkout Transparente", desc: "Pagamentos integrados via Pix, cartão e boleto sem sair do site." },
      ]}
      testimonials={centavosTestimonials}
      faq={lpFaq}
      relatedNewsTags={["Leilão", "Leilão de Centavos", "Penny Auction", "E-commerce", "Sistemas"]}
      finalParallaxCta={{
        text: "Comece agora o seu próprio negócio de Leilão de Centavos com a melhor plataforma do mercado.",
        image: heroAsset.url
      }}
    />
    </>
  ),
});
