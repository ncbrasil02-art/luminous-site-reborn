import { createFileRoute } from "@tanstack/react-router";
import { Code2, Gauge, Layout, Palette, Rocket, Search, ShieldCheck, Smartphone, Sparkles, Zap, Globe2, LineChart } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

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
    title: "Desenvolvimento de Sites Profissionais | Sites Institucionais e Responsivos",
    description: "Criação de sites profissionais, responsivos e otimizados para SEO. Sites institucionais de alta performance que convertem visitantes em clientes.",
    keywords: "desenvolvimento de sites, criação de sites, sites profissionais, site institucional, site responsivo, sites otimizados seo",
    canonical: URL,
    h1: "Desenvolvimento de Sites Profissionais",
    breadcrumbs: [
      { name: "Home", to: "https://www.ncbrasil.com.br/" },
      { name: "Soluções Web", to: "https://www.ncbrasil.com.br/solucoes-web" },
      { name: "Desenvolvimento de Sites", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", name: "Home" }, { to: "/solucoes-web", name: "Soluções Web" }, { to: "/solucoes-web/desenvolvimento-de-sites", name: "Desenvolvimento de Sites" }]}
      eyebrow="Sites Profissionais"
      h1={<>Sites que <span className="text-gradient">vendem</span> e posicionam sua marca</>}
      intro={<>Desenvolvemos <strong className="text-foreground">sites institucionais</strong> modernos, rápidos e otimizados para Google. Da estratégia à publicação, com foco em **conversão e autoridade digital**.</>}
      stats={[{ value: "800+", name: "Sites entregues" }, { value: "98", name: "Score PageSpeed" }, { value: "<2s", name: "LCP médio" }, { value: "20 anos", name: "De experiência" }]}
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
      faq={lpFaq}
      relatedNewsTags={["Criação de Sites","Web Design","Marketing Digital"]}
    />
  ),
});
