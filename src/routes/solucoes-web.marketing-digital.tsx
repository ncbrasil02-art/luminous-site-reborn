import { createFileRoute } from "@tanstack/react-router";
import { Megaphone, Target, TrendingUp, Users, LineChart, Mail, Instagram, Facebook, Youtube, MessageCircle, Sparkles, Zap } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/marketing-digital";

const lpFaq = [
        { q: "Quais redes sociais vocês gerenciam?", a: "Focamos em **TikTok, Instagram, Facebook e YouTube**, criando conteúdos virais específicos para cada plataforma." },
        { q: "Vocês fazem a edição dos vídeos?", a: "Sim, temos um time especializado em **edição de vídeos curtos, reels e vídeos para anúncios** com foco em retenção." },
        { q: "Como funciona a gestão de posts virais?", a: "Analisamos tendências em tempo real e criamos **posts profissionais** que conversam com o público-alvo da sua marca." },
        { q: "Trabalham com tráfego pago nas redes?", a: "Sim, integramos a criação de conteúdo com **campanhas de Meta Ads e TikTok Ads** para maximizar o alcance." },
        { q: "Qual o prazo para ver resultados?", a: "Resultados de engajamento são rápidos, mas a **autoridade de marca** é construída de forma sólida em 3 a 6 meses." },
      ];

export const Route = createFileRoute("/solucoes-web/marketing-digital")({
  head: () => buildLPMeta({
    title: "Marketing Digital Estratégico | Posts e Vídeos Virais para Redes Sociais",
    description: "Marketing digital focado em resultados: criação de posts virais, vídeos virais e gerenciamento de campanhas nas redes sociais como TikTok, Facebook e Instagram.",
    keywords: "marketing digital, posts virais, vídeos virais, gestão redes sociais, marketing tiktok, campanhas facebook instagram, posts profissionais",
    canonical: URL,
    h1: "Marketing Digital: Posts e Vídeos Virais",
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
      h1={<>Marketing Estratégico para <span className="text-gradient">Escalar sua Presença Digital</span></>}
      intro={<>Aceleramos seu crescimento com **marketing digital focado em conversão**. Criamos posts e vídeos virais que não apenas engajam, mas posicionam sua marca como autoridade incontestável no TikTok, Instagram e Facebook.</>}
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
