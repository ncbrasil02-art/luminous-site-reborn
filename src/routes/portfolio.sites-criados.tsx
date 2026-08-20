import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Palette, Smartphone, Award, Zap, Sparkles, Layout, Search, Gauge, ShieldCheck, Layers, Rocket } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

import { SITE_URL } from "@/lib/seo";

const URL = `${SITE_URL}/portfolio/sites-criados`;

const lpFaq = [
        { q: "Posso ver cases reais?", a: "Sim, acesse **Trabalhos Realizados** para portfólio completo com links ativos." },
        { q: "Vocês fazem site institucional?", a: "Sim, é nossa **especialidade há 20 anos** — desde sites simples até portais complexos." },
        { q: "Quanto tempo demora?", a: "Sites simples em **15-30 dias**, portais complexos em 45-90 dias." },
        { q: "Fazem manutenção?", a: "Sim, planos mensais com **atualização, backup, monitoramento e suporte**." },
      ];

export const Route = createFileRoute("/portfolio/sites-criados")({
  head: () => buildLPMeta({
    title: "Portfólio de Sites Criados | Cases de Desenvolvimento Web NC Brasil",
    description: "Portfólio completo de sites criados pela NC Brasil. Cases de sites institucionais, landing pages e portais corporativos de alta performance.",
    keywords: "portfolio sites, sites criados, cases desenvolvimento web, portfolio nc brasil, sites institucionais",
    canonical: URL,
    h1: "Portfólio de Sites Criados pela NC Brasil",
    breadcrumbs: [
      { label: "Home", to: `${SITE_URL}/` },
      { label: "Portfólio", to: `${SITE_URL}/trabalhos-realizados` },
      { label: "Sites Criados", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/trabalhos-realizados", label: "Portfólio" }, { to: "/portfolio/sites-criados", label: "Sites Criados" }]}
      eyebrow="Portfólio Web"
      h1={<>Sites que <span className="text-gradient">encantam e convertem</span></>}
      intro={<>**Mais de 800 sites entregues** em 20 anos: institucionais, portais corporativos, landing pages e sites premiados com performance A+ no Google.</>}
      stats={[{ value: "800+", label: "Sites entregues" }, { value: "98", label: "Score PageSpeed" }, { value: "20 anos", label: "De experiência" }, { value: "Top 3", label: "SEO médio" }]}
      benefits={[
        { icon: Award, title: "Design Premiado", desc: "Layouts autorais reconhecidos por **Wave Festival, ADG e Behance Featured**." },
        { icon: Gauge, title: "Performance A+", desc: "**Core Web Vitals 100/100** em Lighthouse — sites que carregam em <2s." },
        { icon: Search, title: "SEO On-Page", desc: "**Estrutura semântica, schema.org e meta tags** que ranqueiam no Google." },
        { icon: Smartphone, title: "100% Responsivos", desc: "Perfeitos em **desktop, tablet e mobile** com Mobile First por padrão." },
      ]}
      features={[
        { icon: Globe2, title: "Sites Institucionais", desc: "Cases de empresas de médio e grande porte com **áreas restritas e blog integrado**." },
        { icon: Layout, title: "Portais Corporativos", desc: "Portais com **login de clientes, catálogo, blog e área de investidor**." },
        { icon: Palette, title: "Sites Autorais", desc: "Design 100% exclusivo — **nada de templates prontos**." },
        { icon: Sparkles, title: "Animações Premium", desc: "Micro-interações, parallax e scroll animado com **Framer Motion e GSAP**." },
        { icon: Layers, title: "CMS Editável", desc: "Painel intuitivo para o cliente editar **sem depender de dev**." },
        { icon: ShieldCheck, title: "Seguros e Estáveis", desc: "SSL, WAF, backup diário e **uptime 99,9%**." },
      ]}
      faq={lpFaq}
      relatedNewsTags={["Criação de Sites","Portfólio","Web Design"]}
    />
  ),
});
