/** mee manda o link dlelas paara  verr */
import { createFileRoute, Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe2,
  Layers,
  LineChart,
  Rocket,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Trophy,
  Zap,
  ChevronRight,
  ShieldCheck,
  Globe,
  Database,
  Search,
  Layout,
  Server,
} from "lucide-react";
import { FloatingObject } from "@/components/FloatingObject";


import { Reveal, SectionHeading } from "@/components/Section";
import { SystemsCarousel } from "@/components/SystemsCarousel";
import { trackClick } from "@/lib/analytics";

import { buildMeta, SITE_URL } from "@/lib/seo";
import { MagazineSection } from "@/components/MagazineSection";

import { TestimonialsSection } from "@/components/TestimonialsSection";
import { testimonialsData } from "@/lib/testimonials.data";

const OG_IMAGE = `/og-home.jpg`;

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NC Brasil — Criação de Sites, Sistemas Web e Aplicativos",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-nc-brasil.png`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description:
    "Empresa de criação de sites profissionais, sistemas web, lojas virtuais, aplicativos mobile e marketing digital em São Paulo e Rio de Janeiro.",
  address: {
    "@type": "PostalAddress",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  geo: {
    "@type": "GeoCoordinates",
    "latitude": -23.55052,
    "longitude": -46.633308
  },
  telephone: "+55-11-99999-9999",
  priceRange: "$$$",
  areaServed: ["São Paulo", "Rio de Janeiro", "Brasil"],
  serviceType: [
    "Criação de Sites",
    "Criação de Sistemas Web",
    "Lojas Virtuais",
    "Aplicativos Mobile",
    "Marketing Digital",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": testimonialsData.length.toString()
  },
  review: testimonialsData.map(t => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": t.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": t.rating.toString(),
      "bestRating": "5"
    },
    "reviewBody": t.quote
  }))
};

export const Route = createFileRoute("/")({
  head: () => {
    const meta = buildMeta({
      title: "Criação de Sites e Sistemas Web de Alta Performance",
      description: "NcBrasil: Especialistas em sistemas cinematográficos, plataformas de leilão e aplicativos de alto padrão. Tecnologia premium para empresas líderes.",
      keywords: "criação de sites premium, sistemas web alta performance, plataforma de leilão online, aplicativos mobile premium, marketing digital estratégico, agência de tecnologia SP",
      ogImage: "/logo-nc-brasil.png",
      canonical: "/",
    });


    return {
      ...meta,
      scripts: [
        ...meta.scripts!,
        { type: "application/ld+json", children: JSON.stringify(homeJsonLd) }
      ],
    };
  },
  component: HomePage,
});

const solutions = [
  {
    icon: Globe2,
    title: "Desenvolvimento de Sites",
    desc: "Sites institucionais e lojas virtuais focados em **atrair visitantes e converter vendas** com tecnologia moderna e SEO nativo.",
    to: "/solucoes-web/desenvolvimento-de-sites",
  },
  {
    icon: Layout,
    title: "LPs Alta Conversão",
    desc: "Criação de **Landing Pages de alta conversão** focadas em produtos ou serviços, otimizadas para captação de leads qualificados.",
    to: "/solucoes-web/landing-pages",
  },
  {
    icon: Search,
    title: "SEO Google",
    desc: "**Rankeamento e autoridade** em palavras-chaves de curta e longa cauda para maximizar resultados orgânicos.",
    to: "/solucoes-web/seo-google",
  },
  {
    icon: Server,
    title: "Hospedagem de Sites",
    desc: "**Servidores dedicados e planos cloud** com infraestrutura total no Brasil e consultoria especializada.",
    to: "/solucoes-web/hospedagem",
  },
  {
    icon: LineChart,
    title: "Marketing Digital",
    desc: "**Criação de posts e vídeos virais** para TikTok, Instagram e Facebook Ads com gestão profissional de campanhas.",
    to: "/solucoes-web/marketing-digital",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps **iOS e Android** com UX cinematográfica, notificações e sistemas de alta performance.",
    to: "/portfolio/criacao-de-aplicativos",
  },
];

const stats = [
  { value: "745+", label: "Sites & Lojas entregues" },
  { value: "525+", label: "LPs de Alta Conversão" },
  { value: "78+", label: "Sistemas Customizados" },
  { value: "20+", label: "Anos de Experiência" },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico estratégico",
    desc: "Entendemos seu negócio, público e concorrência. Definimos KPIs e o **mapa do projeto**.",
  },
  {
    n: "02",
    title: "Design & Prototipagem",
    desc: "Criamos a **identidade visual** e protótipos navegáveis em alta fidelidade antes de codar.",
  },
  {
    n: "03",
    title: "Desenvolvimento ágil",
    desc: "Engenharia robusta com **entregas semanais**, testes contínuos e SEO técnico desde o dia 1.",
  },
  {
    n: "04",
    title: "Lançamento & Crescimento",
    desc: "Go-live, **analytics**, suporte dedicado e otimização contínua para escalar resultados.",
  },
];

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

function HomePage() {
  return (
    <>
      <Helmet>
        <title>NcBrasil - Sistemas Web e Sites de Alta Performance</title>
        <meta name="description" content="NcBrasil: Especialistas em sistemas cinematográficos, plataformas de leilão e aplicativos de alto padrão. Tecnologia premium para empresas líderes." />
        <meta name="keywords" content="criação de sites premium, sistemas web alta performance, plataforma de leilão online, aplicativos mobile premium, marketing digital estratégico, agência de tecnologia SP" />
      </Helmet>

      
      {/* Visual Technical SEO Status */}

      {/* HERO ============================================================= */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-hero opacity-80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-background to-transparent z-10" />
          
          {/* Animated Mesh */}
          <div className="absolute inset-0 bg-mesh opacity-40 mix-blend-screen" />
          
          {/* Floating Tech Objects */}
          <FloatingObject className="top-[15%] left-[10%] opacity-40 hidden md:block" delay={0}>
             <div className="h-16 w-16 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center backdrop-blur-sm">
                <Globe className="h-8 w-8 text-primary/60" />
             </div>
          </FloatingObject>
          <FloatingObject className="top-[25%] right-[15%] opacity-30 hidden lg:block" delay={1.5} duration={7}>
             <div className="h-20 w-20 rounded-full border border-primary-glow/20 bg-primary-glow/5 flex items-center justify-center backdrop-blur-sm">
                <Database className="h-10 w-10 text-primary-glow/50" />
             </div>
          </FloatingObject>
          <FloatingObject className="bottom-[20%] left-[20%] opacity-40 hidden md:block" delay={0.5} duration={8}>
             <div className="h-12 w-12 rounded-lg border border-secondary/20 bg-secondary/5 flex items-center justify-center backdrop-blur-sm rotate-12">
                <Code2 className="h-6 w-6 text-secondary/60" />
             </div>
          </FloatingObject>
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-4 py-24 text-center md:px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary-glow backdrop-blur-md glow-sm mb-8">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Liderança em Tecnologia Digital
            </span>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-5xl font-bold leading-[1] tracking-tight text-foreground md:text-8xl lg:text-[7rem]"
          >
            Sistemas de <span className="text-gradient drop-shadow-[0_0_30px_rgba(49,91,255,0.3)]">Alta Performance</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 mx-auto max-w-3xl"
          >
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              Transformamos ideias em <strong className="text-foreground">ecossistemas digitais</strong> cinematográficos. 
              Especialistas em <strong className="text-primary-glow">plataformas de leilão</strong>, 
              sistemas web escaláveis e apps de alto padrão para o mercado brasileiro.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/nossos-sistemas"
              onClick={() => trackClick("Explorar Nossos Sistemas", "Home Hero")}
              className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:glow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorar Soluções
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to="/contato"
              onClick={() => trackClick("Solicitar Orçamento", "Home Hero")}
              className="flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
            >
              Consultoria Estratégica
            </Link>
          </motion.div>

          {/* Premium Partners / Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-24 pt-12 border-t border-white/5"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-8">
              Tecnologia validada por centenas de negócios no Brasil
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               {stats.map((s) => (
                 <div key={s.label} className="text-center">
                    <div className="text-xl md:text-2xl font-display font-bold text-foreground">{s.value}</div>
                    <div className="text-[9px] uppercase tracking-tighter text-muted-foreground">{s.label}</div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* SERVIÇOS E SOLUÇÕES =============================================== */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Decorative elements for services section */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Expertise Digital"
            title={
              <>
                Ecossistema de <span className="text-gradient">Alta Performance</span>
              </>
            }
            description={
              <>
                Engenharia de software e design de alta fidelidade para empresas que buscam 
                <strong className="text-foreground"> soberania digital</strong> e escala global.
              </>
            }
          />


          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <Link
                  to={s.to}
                  onClick={() => trackClick(s.title, "Home Solutions Grid")}
                  className="group relative block h-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-navy-900/20 p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:glow-md hover:bg-navy-900/40"
                >
                  {/* Glowing background hint */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-700 group-hover:bg-primary/20" />
                  
                  <div className="relative z-10">
                    <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-surface-elevated text-primary-glow shadow-glow-sm ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:glow-sm">
                      <s.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-primary-glow transition-colors">{s.title}</h3>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors">
                      {renderBold(s.desc)}
                    </p>
                    <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-glow opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                      Explorar Tecnologia
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* SISTEMAS EM DESTAQUE (SLIDER) ===================================== */}
      <section className="relative py-24 md:py-40 bg-navy-950/20">
        <div className="absolute inset-0 z-0 bg-hero-glow opacity-30 rotate-180" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-glow mb-6">
                  <Rocket className="h-3.5 w-3.5" />
                  Ecossistema Premium
                </span>
              </Reveal>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl leading-[1.1]">
                Nossos <span className="text-gradient">Sistemas Flagship</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Plataformas de alta escala projetadas para dominar o mercado. 
                Tecnologia cinematográfica que converte.
              </p>
            </div>
            <Link 
              to="/nossos-sistemas" 
              onClick={() => trackClick("Ver todos os sistemas", "Home Systems Section")}
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-glow hover:text-white transition-all duration-300"
            >
              Catálogo Completo
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/5 transition-transform group-hover:translate-x-2 group-hover:bg-primary group-hover:text-white">
                <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          </div>

          <SystemsCarousel />
        </div>
      </section>


      {/* PROCESSO ========================================================= */}
      <section className="relative overflow-hidden border-y border-white/5 bg-navy-950/40 py-24 md:py-40">
        <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent shadow-[0_0_20px_rgba(49,91,255,0.4)]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Workflow Cinematográfico"
            title={
              <>
                Da Concepção à <span className="text-gradient">Soberania Digital</span>
              </>
            }
            description="Cada etapa é uma cena meticulosamente planejada para garantir que seu projeto seja memorável e altamente lucrativo."
          />


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="group relative h-full rounded-[2rem] border border-white/5 bg-navy-950/40 p-8 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:bg-navy-900/40 hover:-translate-y-2">
                  <div className="font-display text-6xl font-black text-white/5 transition-colors group-hover:text-primary/10">
                    {step.n}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    {renderBold(step.desc)}
                  </p>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* DESTAQUES ======================================================== */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                  <Trophy className="h-3.5 w-3.5" />
                  Especialidades
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight md:text-5xl">
                  Plataformas <span className="text-gradient">sob demanda</span> que escalam com
                  você
                </h2>
                <p className="mt-5 text-muted-foreground md:text-lg">
                  Desenvolvemos <strong className="text-foreground">sistemas customizados</strong>{" "}
                  como <strong className="text-foreground">leilões eletrônicos</strong>,{" "}
                  <strong className="text-foreground">marketplaces</strong>,{" "}
                  <strong className="text-foreground">compra coletiva</strong>, gestão de eventos e
                  ingressos, intranets corporativas e muito mais.
                </p>

                <ul className="mt-8 space-y-3 text-sm">
                  {[
                    {
                      to: "/portfolio/criacao-de-sistemas",
                      label: "Criação de Sistemas",
                    },
                    {
                      to: "/portfolio/sistema-de-compra-coletiva",
                      label: "Sistema de Compra Coletiva",
                    },
                    {
                      to: "/portfolio/lojas-virtuais-criadas",
                      label: "Lojas Virtuais & Marketplaces",
                    },
                    {
                      to: "/portfolio/criacao-de-aplicativos",
                      label: "Aplicativos Mobile iOS & Android",
                    },
                    {
                      to: "/portfolio/identidade-visual",
                      label: "Identidade Visual & Branding",
                    },
                  ].map((it) => (
                    <li key={it.to} className="flex items-center gap-3">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">
                        <Code2 className="h-3.5 w-3.5" />
                      </span>
                      <Link to={it.to} className="story-link text-foreground font-medium">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link
                    to="/trabalhos-realizados"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-sm hover:scale-105 transition-transform"
                  >
                    Explorar portfólio
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-primary opacity-30 blur-3xl animate-glow-pulse" />
                <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-1">
                  <div className="rounded-[22px] bg-background p-8">
                    <div className="grid grid-cols-3 gap-3">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-xl border border-border bg-gradient-to-br from-primary/10 to-transparent"
                          style={{
                            animation: `glow-pulse 4s ease-in-out ${i * 0.15}s infinite`,
                          }}
                        />
                      ))}
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-gradient-primary opacity-70" />
                      <div className="h-2 w-1/2 rounded-full bg-muted" />
                      <div className="h-2 w-2/3 rounded-full bg-muted" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />


      {/* CTA FINAL ======================================================== */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface/60 px-6 py-16 backdrop-blur md:px-12">
              <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
              <div className="relative">
                <Rocket className="mx-auto h-10 w-10 text-primary" />
                <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-5xl">
                  Vamos colocar seu projeto <span className="text-gradient">no ar</span>?
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Conte sua ideia. Em até <strong className="text-foreground">24 horas</strong>{" "}
                  enviamos uma proposta clara, com escopo, prazo e investimento.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    to="/orcamento"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-md hover:scale-105 transition-transform"
                  >
                    Solicitar orçamento
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-surface"
                  >
                    Falar com um especialista
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <MagazineSection />
    </>
  );
}

