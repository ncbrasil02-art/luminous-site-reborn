import { createFileRoute } from "@tanstack/react-router";
import { Megaphone, Target, TrendingUp, Users, LineChart, Mail, Instagram, Facebook, Youtube, MessageCircle, Sparkles, Zap } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/marketing-digital";

export const Route = createFileRoute("/solucoes-web/marketing-digital")({
  head: () => buildLPMeta({
    title: "Marketing Digital 360° | Estratégia, Tráfego Pago e Conteúdo",
    description: "Marketing digital completo: gestão de tráfego pago, redes sociais, e-mail marketing, SEO e produção de conteúdo estratégico.",
    keywords: "marketing digital, agência de marketing digital, gestão de tráfego, redes sociais, marketing de conteúdo, estratégia digital",
    canonical: URL,
    h1: "Marketing Digital Estratégico e Data-Driven",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Soluções Web", url: "https://www.ncbrasil.com.br/solucoes-web" },
      { name: "Marketing Digital", url: URL },
    ],
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/solucoes-web", label: "Soluções Web" }, { to: "/solucoes-web/marketing-digital", label: "Marketing Digital" }]}
      eyebrow="Marketing 360°"
      h1={<>Marketing digital que <span className="text-gradient">gera resultado real</span></>}
      intro={<>Estratégia completa de **aquisição, engajamento e conversão** — tráfego pago, orgânico, conteúdo e automação em uma única operação.</>}
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
      faq={[
        { q: "Qual verba mínima?", a: "Recomendamos **R$ 3.000/mês** em verba + fee de gestão para resultados consistentes." },
        { q: "Fazem contratos longos?", a: "Trabalhamos com **contrato mínimo de 3 meses** — tempo necessário para maturar campanhas." },
        { q: "Vocês produzem os criativos?", a: "Sim, temos **estúdio próprio** de vídeo, design e copy para criativos ilimitados." },
        { q: "Como medem resultado?", a: "**GA4, Meta Pixel, GTM e dashboards Looker** — total transparência de números." },
        { q: "Atendem quais nichos?", a: "**E-commerce, SaaS, educação, saúde, imobiliário, jurídico** e infoprodutos." },
      ]}
    />
  ),
});
