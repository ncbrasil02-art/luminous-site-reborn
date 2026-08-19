import { createFileRoute } from "@tanstack/react-router";
import { Target, Zap, MousePointerClick, TrendingUp, FileText, Rocket, Layout, Sparkles, Timer, Award, LineChart, Users } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/landing-pages";

const lpFaq = [
        { q: "Qual o prazo de entrega?", a: "LPs simples em **7 dias**, projetos completos em até 20 dias." },
        { q: "Vocês fazem o copywriting?", a: "Sim, temos **copywriters especializados** em conversão para tráfego pago." },
        { q: "Serve para Google Ads e Meta Ads?", a: "Sim, todas as LPs seguem as **diretrizes de qualidade** de ambas as plataformas." },
        { q: "Fazem testes A/B?", a: "Sim, oferecemos **2 versões de teste** e otimização baseada em dados reais." },
        { q: "Integra com meu CRM?", a: "Sim: RD Station, HubSpot, ActiveCampaign, Mailchimp, Pipedrive e **webhooks personalizados**." },
      ];

export const Route = createFileRoute("/solucoes-web/landing-pages")({
  head: () => buildLPMeta({
    title: "Criação de Landing Pages | Páginas de Alta Conversão para Campanhas",
    description: "Criação de landing pages otimizadas para conversão. Páginas rápidas, focadas em captação de leads e vendas para Google Ads e Meta Ads.",
    keywords: "landing page, criação de landing page, página de conversão, landing page para google ads, landing page profissional",
    canonical: URL,
    h1: "Landing Pages de Alta Conversão",
    breadcrumbs: [
      { name: "Home", to: "https://www.ncbrasil.com.br/" },
      { name: "Soluções Web", to: "https://www.ncbrasil.com.br/solucoes-web" },
      { name: "Landing Pages", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", name: "Home" }, { to: "/solucoes-web", name: "Soluções Web" }, { to: "/solucoes-web/landing-pages", name: "Landing Pages" }]}
      eyebrow="LPs de Conversão"
      h1={<>Landing Pages que <span className="text-gradient">convertem visitantes em clientes</span></>}
      intro={<>Páginas de captação com **copywriting persuasivo, prova social e CTAs testados** — feitas para maximizar o ROI do seu tráfego pago.</>}
      stats={[{ value: "500+", name: "LPs entregues" }, { value: "12%", name: "Conversão média" }, { value: "72h", name: "Entrega expressa" }, { value: "A/B", name: "Testes inclusos" }]}
      benefits={[
        { icon: MousePointerClick, title: "CTA Estratégico", desc: "**Botões testados A/B**, contraste otimizado e microcopy que aumenta cliques em 30%." },
        { icon: Zap, title: "Carregamento < 1s", desc: "Estrutura leve otimizada para **Google Ads Quality Score 10/10**." },
        { icon: Target, title: "Foco em Conversão", desc: "Uma única mensagem, um único objetivo — **sem distrações**." },
        { icon: TrendingUp, title: "ROI Comprovado", desc: "Nossas LPs entregam em média **3x mais leads** que sites tradicionais." },
      ]}
      features={[
        { icon: FileText, title: "Copywriting Persuasivo", desc: "Textos escritos por especialistas em conversão com **gatilhos mentais e AIDA**." },
        { icon: Layout, title: "Design Modular", desc: "Hero, benefícios, prova social, FAQ, formulário — cada bloco pensado para conversão." },
        { icon: Sparkles, title: "Animações Sutis", desc: "Micro-interações que **guiam o olhar até o CTA** sem prejudicar performance." },
        { icon: Timer, title: "Escassez e Urgência", desc: "Contadores, ofertas limitadas e estoque baixo — gatilhos éticos que vendem." },
        { icon: LineChart, title: "Analytics + Heatmap", desc: "Google Analytics, Meta Pixel, Hotjar e Clarity **prontos para uso**." },
        { icon: Users, title: "Formulário Otimizado", desc: "Multi-step, validação em tempo real, integração com **RD Station, HubSpot e ActiveCampaign**." },
      ]}
      faq={lpFaq}
    />
  ),
});
