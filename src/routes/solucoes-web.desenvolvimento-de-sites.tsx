import { createFileRoute } from "@tanstack/react-router";
import { Code2, Gauge, Layout, Palette, Rocket, Search, ShieldCheck, Smartphone, Sparkles, Zap, Globe2, LineChart } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";
import { testimonialsData } from "@/lib/testimonials.data";


const URL = "https://www.ncbrasil.com.br/solucoes-web/desenvolvimento-de-sites";

const lpFaq = [
        { q: "Qual o prazo de entrega?", a: "De **15 a 45 dias** dependendo da complexidade e quantidade de páginas." },
        { q: "Vocês fazem a hospedagem?", a: "Sim, oferecemos **hospedagem gerenciada** com SSL, CDN e backup diário." },
        { q: "Posso editar o site depois?", a: "Sim, entregamos com **painel administrativo intuitivo** e treinamento incluso." },
        { q: "O site é otimizado para Google?", a: "Sim, aplicamos **SEO on-page completo**, schema markup e performance A+." },
        { q: "Qual o investimento?", a: "Sites institucionais a partir de **R$ 3.500** — solicite proposta personalizada." },
      ];

export const Route = createFileRoute("/solucoes-web/desenvolvimento-de-sites")({
  head: () => buildLPMeta({
    title: "Criação de Sites e Loja Virtual Profissional | Desenvolvimento de Alta Performance",
    description: "Desenvolvimento de sites institucionais e lojas virtuais focados em atrair visitantes e converter vendas. Focamos em palavras-chaves que atraiam pessoas de visitantes adquirirem seu site.",
    keywords: "criação de sites, desenvolvimento de loja virtual, agência web, site institucional, e-commerce, vendas online, agência de criação de sites",
    canonical: URL,
    h1: "Desenvolvimento de Sites e Loja Virtual Profissional",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Soluções Web", to: "https://www.ncbrasil.com.br/solucoes-web" },
      { label: "Desenvolvimento de Sites", to: URL },
    ],
    faq: lpFaq,
    ogImage: "/desenvolvimento-de-sites-og.jpg",
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/solucoes-web", label: "Soluções Web" }, { to: "/solucoes-web/desenvolvimento-de-sites", label: "Desenvolvimento de Sites" }]}
      eyebrow="Sites Profissionais"
      h1={<>Plataformas Digitais que <span className="text-gradient">Escalam seu Negócio</span></>}
      intro={<>Na **NC Brasil**, desenvolvemos muito mais que sites: entregamos **ecossistemas digitais robustos** focados em atrair visitantes qualificados e convertê-los em clientes reais. Nossa tecnologia de ponta garante que sua empresa tenha a soberania necessária para liderar seu nicho.</>}
      stats={[{ value: "800+", label: "Sites entregues" }, { value: "98", label: "Score PageSpeed" }, { value: "<2s", label: "LCP médio" }, { value: "20 anos", label: "De experiência" }]}
      benefits={[
        { icon: Gauge, title: "Performance Extrema", desc: "Sites com **carregamento em menos de 2s**, otimizados para Core Web Vitals do Google." },
        { icon: Search, title: "SEO Nativo", desc: "Estrutura semântica, meta tags, schema.org e sitemap — **prontos para ranquear**." },
        { icon: Smartphone, title: "100% Responsivo", desc: "Design impecável em **mobile, tablet e desktop** — Mobile First por padrão." },
        { icon: ShieldCheck, title: "Segurança SSL", desc: "Certificado HTTPS, proteção anti-DDoS e backups diários automáticos." },
      ]}
      features={[
        { icon: Palette, title: "Design Exclusivo", desc: "Layout autoral com identidade visual alinhada à sua marca — **nada de templates prontos**." },
        { icon: Layout, title: "CMS Editável", desc: "Painel simples para você editar textos, imagens e páginas sem depender de dev." },
        { icon: Code2, title: "Código Limpo", desc: "React + TypeScript, arquitetura escalável e performance A+ no GTmetrix." },
        { icon: Sparkles, title: "Animações Sutis", desc: "Micro-interações e efeitos scroll que **encantam sem prejudicar performance**." },
        { icon: Globe2, title: "Multi-idioma", desc: "Suporte a PT-BR, inglês e espanhol com hreflang configurado." },
        { icon: LineChart, title: "Analytics Integrado", desc: "Google Analytics 4, Tag Manager, Meta Pixel e Search Console prontos." },
      ]}
      testimonials={testimonialsData.slice(0, 4)}
      faq={lpFaq}
      heroImage="/img-sistema-de-leilao/rural-dash.png"
      relatedNewsTags={["Criação de Sites","Web Design","Marketing Digital"]}
    />
  ),
});
