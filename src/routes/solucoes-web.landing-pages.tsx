import { createFileRoute } from "@tanstack/react-router";
import { Target, Zap, MousePointerClick, TrendingUp, FileText, Rocket, Layout, Sparkles, Timer, Award, LineChart, Users } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/landing-pages";

const lpFaq = [
  { q: "O que torna uma Landing Page de alta conversão?", a: "O uso estratégico de **copywriting persuasivo, design limpo e CTAs claros** que guiam o usuário para a ação desejada." },
  { q: "Posso usar a LP para vender produtos físicos?", a: "Com certeza, são ideais para **lançamentos ou promoções específicas**, focando toda a atenção no produto estrela." },
  { q: "A Landing Page é integrada ao meu CRM?", a: "Sim, conectamos os formulários diretamente ao seu **funil de vendas** para que nenhum lead seja perdido." },
  { q: "Quanto tempo leva para criar uma LP?", a: "Projetamos e entregamos sua página otimizada em um prazo médio de **7 a 15 dias úteis**." },
  { q: "A página é otimizada para mobile?", a: "Sim, cada LP é desenvolvida com foco total em **dispositivos móveis**, onde ocorre a maioria das conversões hoje." },
];

export const Route = createFileRoute("/solucoes-web/landing-pages")({
  head: () => buildLPMeta({
    title: "Criação de LPs Alta Conversão | Focado em Produtos e Serviços",
    description: "Especialistas na criação de Landing Pages de alta conversão para capturar leads qualificados. LPs persuasivas que interagem com todo o seu ecossistema digital.",
    keywords: "criação de landing pages, landing page alta conversão, landing page produtos, landing page serviços, captação de leads, criação de lps",
    canonical: URL,
    h1: "Criação de Landing Pages de Alta Conversão",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Soluções Web", to: "https://www.ncbrasil.com.br/solucoes-web" },
      { label: "Landing Pages", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/solucoes-web", label: "Soluções Web" }, { to: "/solucoes-web/landing-pages", label: "Landing Pages" }]}
      eyebrow="LPs de Conversão"
      h1={<>Landing Pages que <span className="text-gradient">Escalam sua Captação de Leads</span></>}
      intro={<>Transforme cliques em lucro com **Landing Pages de altíssima conversão**. Projetamos LPs persuasivas com gatilhos mentais e design cinematográfico para capturar leads qualificados para seu produto ou serviço.</>}
      stats={[{ value: "500+", label: "LPs entregues" }, { value: "12%", label: "Conversão média" }, { value: "72h", label: "Entrega expressa" }, { value: "A/B", label: "Testes inclusos" }]}
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
