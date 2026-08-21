import { createFileRoute } from "@tanstack/react-router";
import { Megaphone, Target, TrendingUp, Users, LineChart, Mail, Instagram, Facebook, Youtube, MessageCircle, Sparkles, Zap } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/marketing-digital";

const lpFaq = [
        { q: "Qual verba mínima?", a: "Recomendamos **R$ 3.000/mês** em verba + fee de gestão para resultados consistentes." },
        { q: "Fazem contratos longos?", a: "Trabalhamos com **contrato mínimo de 3 meses** — tempo necessário para maturar campanhas." },
        { q: "Vocês produzem os criativos?", a: "Sim, temos **estúdio próprio** de vídeo, design e copy para criativos ilimitados." },
        { q: "Como medem resultado?", a: "**GA4, Meta Pixel, GTM e dashboards Looker** — total transparência de números." },
        { q: "Atendem quais nichos?", a: "**E-commerce, SaaS, educação, saúde, imobiliário, jurídico** e infoprodutos." },
      ];

export const Route = createFileRoute("/solucoes-web/marketing-digital")({
  head: () => buildLPMeta({
    title: "Marketing Digital Estratégico | Vídeos Virais e Gestão de Ads",
    description: "Gestão completa de marketing digital: criação de posts e vídeos virais para TikTok, Facebook e Instagram com campanhas profissionais de alta performance.",
    keywords: "marketing digital, posts virais, vídeos virais, gestão redes sociais, marketing tiktok, campanhas facebook instagram",
    canonical: URL,
    h1: "Marketing Digital e Gestão de Campanhas Virais",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Soluções Web", to: "https://www.ncbrasil.com.br/solucoes-web" },
      { label: "Marketing Digital", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/solucoes-web", label: "Soluções Web" }, { to: "/solucoes-web/marketing-digital", label: "Marketing Digital" }]}
      eyebrow="Marketing 360°"
      h1={<>Marketing Digital: <span className="text-gradient">Posts e Vídeos Virais</span></>}
      intro={<>Especialistas em **criação de posts e vídeos virais** para redes sociais. Gerenciamos suas campanhas no **TikTok, Facebook e Instagram** com conteúdos profissionais focados em atrair e converter seu público.</>}
      stats={[{ value: "R$ 30Mi", label: "Verba gerenciada" }, { value: "4,8x", label: "ROAS médio" }, { value: "150+", label: "Clientes ativos" }, { value: "24/7", label: "Monitoramento" }]}
      benefits={[
        { icon: Target, title: "Tráfego Pago", desc: "Google Ads, Meta Ads, TikTok Ads e LinkedIn Ads — **gestão com foco em ROAS**." },
        { icon: TrendingUp, title: "SEO Orgânico", desc: "Estratégia de conteúdo, link building e otimização técnica para **subir no Google**." },
        { icon: Users, title: "Gestão de Redes", desc: "Instagram, Facebook, TikTok e LinkedIn com **calendário editorial estratégico**." },
        { icon: Mail, title: "E-mail & Automação", desc: "Fluxos de nutrição, remarketing e recuperação com **RD, HubSpot ou ActiveCampaign**." },
      ]}
      features={[
        { icon: Megaphone, title: "Estratégia 360°", desc: "Diagnóstico, personas, funil de vendas e plano de mídia completo." },
        { icon: LineChart, title: "Relatórios Semanais", desc: "Dashboards em tempo real com **CAC, LTV, ROAS e projeções**." },
        { icon: Instagram, title: "Social Media", desc: "Produção de conteúdo, stories, reels e engajamento diário." },
        { icon: Facebook, title: "Meta Ads", desc: "Campanhas otimizadas com **CBO, Advantage+ e Lookalikes avançados**." },
        { icon: Youtube, title: "YouTube Ads", desc: "TrueView, discovery e bumper ads — alcance qualificado em vídeo." },
        { icon: Sparkles, title: "Copywriting", desc: "Criativos com **hooks virais e ganchos de conversão** testados A/B." },
      ]}
      faq={lpFaq}
      heroImage="/img-sistema-de-leilao/rural-lote.png"
      relatedNewsTags={["Marketing Digital","Facebook Ads","Google Ads"]}
    />
  ),
});
