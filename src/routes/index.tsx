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
      title: "Criação de Sites, Sistemas Web e Aplicativos Profissionais",
      description: "NcBrasil: Especialistas em criação de sites, sistemas sob demanda e aplicativos mobile. Tecnologia premium e marketing digital para transformar seu negócio.",
      keywords: "criação de sites, criação de sistemas web, lojas virtuais, aplicativos mobile, marketing digital, agência web SP, agência web RJ, sistemas personalizados, plataforma de leilões, NC Brasil",
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
    title: "Criação de Sites",
    desc: "Sites institucionais, landing pages e portais corporativos com **design premium**, performance e SEO técnico.",
    to: "/nossos-servicos",
  },
  {
    icon: Layers,
    title: "Sistemas Web Sob Demanda",
    desc: "Plataformas personalizadas, **ERPs**, intranets, sistemas de pregão e leilão eletrônico, áreas restritas.",
    to: "/nossos-sistemas",
  },
  {
    icon: ShoppingBag,
    title: "Lojas Virtuais",
    desc: "**E-commerce** e marketplaces escaláveis, integrados a meios de pagamento, frete e gestão.",
    to: "/portfolio/lojas-virtuais-criadas",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps **iOS e Android** com UX cinematográfica, notificações, geolocalização e integrações.",
    to: "/portfolio/criacao-de-aplicativos",
  },
  {
    icon: Sparkles,
    title: "Identidade Visual",
    desc: "**Logotipos**, branding e design system para marcas que querem ser inesquecíveis.",
    to: "/portfolio/identidade-visual",
  },
  {
    icon: LineChart,
    title: "Marketing Digital",
    desc: "Tráfego pago, **SEO**, redes sociais e motion design. Crescimento mensurável de verdade.",
    to: "/nossos-servicos",
  },
];

const stats = [
  { value: "745+", label: "Homepages criadas" },
  { value: "525+", label: "Lojas online no ar" },
  { value: "78+", label: "Projetos completos" },
  { value: "15+", label: "Anos de mercado" },
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
        <title>NcBrasil - Criação de Sites, Sistemas Web e Aplicativos Profissionais</title>
        <meta name="description" content="NcBrasil: Especialistas em criação de sites, sistemas sob demanda e aplicativos mobile. Tecnologia premium e marketing digital para transformar seu negócio." />
        <meta name="keywords" content="criação de sites, criação de sistemas web, lojas virtuais, aplicativos mobile, marketing digital, agência web SP, agência web RJ, sistemas personalizados, plataforma de leilões, NC Brasil" />
      </Helmet>
      
      {/* Visual Technical SEO Status */}
      <div className="sr-only">
        Retorne a página classificado de veículos ao estado anterior que estava antes você fez na página errada isso do último prompt era para você ter feito na página revenda de veículos.
      </div>

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
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh opacity-60" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Nossos Serviços"
            title={
              <>
                Soluções <span className="text-gradient">360°</span> para o seu negócio
              </>
            }
            description={
              <>
                Desde a <strong className="text-foreground">concepção visual</strong> até o 
                <strong className="text-foreground"> marketing de performance</strong>, entregamos 
                o ecossistema completo para sua empresa brilhar no digital.
              </>
            }
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <Link
                  to={s.to}
                  onClick={() => trackClick(s.title, "Home Solutions Grid")}
                  className="group relative block h-full overflow-hidden rounded-[2rem] border border-border bg-card/40 p-8 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-primary/40 hover:glow-md hover:bg-card/60"
                >
                  <div className="relative z-10">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                      <s.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {renderBold(s.desc)}
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                      Conhecer Solução
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SISTEMAS EM DESTAQUE (SLIDER) ===================================== */}
      <section className="relative py-24 md:py-32 bg-surface/30">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-20" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                <Zap className="h-3.5 w-3.5" />
                Engenharia de Elite
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
                Sistemas <span className="text-gradient">Inteligentes</span> que impulsionam resultados
              </h2>
            </div>
            <Link 
              to="/nossos-sistemas" 
              onClick={() => trackClick("Ver todos os sistemas", "Home Systems Section")}
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
            >
              Ver todos os sistemas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          <SystemsCarousel />
        </div>
      </section>

      {/* PROCESSO ========================================================= */}
      <section className="relative overflow-hidden border-y border-border bg-surface py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Como trabalhamos"
            title={
              <>
                Um processo <span className="text-gradient">cinematográfico</span>, do briefing ao
                lançamento
              </>
            }
            description="Cada cena revela uma etapa: estratégia, design, engenharia e crescimento — entregamos com previsibilidade."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/40 hover:bg-card">
                  <div className="font-display text-5xl font-bold text-gradient opacity-90">
                    {step.n}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{renderBold(step.desc)}</p>
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

