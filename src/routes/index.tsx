import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
} from "lucide-react";

import heroTech from "@/assets/hero-tech.jpg";
import { Reveal, SectionHeading } from "@/components/Section";

const SITE_URL = "https://www.ncbrasil.com.br";
const OG_IMAGE = `${SITE_URL}/og-home.jpg`;

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NC Brasil — Criação de Sites, Sistemas Web e Aplicativos",
  url: SITE_URL,
  image: OG_IMAGE,
  description:
    "Empresa de criação de sites profissionais, sistemas web, lojas virtuais, aplicativos mobile e marketing digital em São Paulo e Rio de Janeiro.",
  areaServed: ["São Paulo", "Rio de Janeiro", "Brasil"],
  serviceType: [
    "Criação de Sites",
    "Criação de Sistemas Web",
    "Lojas Virtuais",
    "Aplicativos Mobile",
    "Marketing Digital",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NC Brasil · Criação de Sites, Sistemas Web e Aplicativos" },
      {
        name: "description",
        content:
          "Agência de tecnologia especializada em criação de sites, sistemas web, lojas virtuais, aplicativos mobile e marketing digital em SP e RJ. Solicite seu orçamento.",
      },
      {
        name: "keywords",
        content:
          "criação de sites, criação de sistemas, lojas virtuais, aplicativos mobile, marketing digital, agência web SP, agência web RJ, sistemas personalizados, plataforma de leilões, sistema de cupons",
      },
      { property: "og:title", content: "NC Brasil · Sistemas, Sites e Marketing Digital" },
      {
        property: "og:description",
        content:
          "Criação de sites profissionais, sistemas web sob demanda, lojas virtuais, aplicativos e campanhas digitais. Atuação em São Paulo e Rio de Janeiro.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NC Brasil · Sistemas, Sites e Marketing Digital" },
      {
        name: "twitter:description",
        content:
          "Sites, sistemas, lojas virtuais e apps que vendem. Tecnologia de ponta com design premium.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(homeJsonLd) }],
  }),
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
      {/* HERO ============================================================= */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroTech}
            alt=""
            aria-hidden
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center md:px-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Sistemas · Sites · Apps · Marketing
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Tecnologia que <span className="text-gradient">vende</span>.
            <br className="hidden md:block" />
            Design que <span className="text-gradient">encanta</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
          >
            Somos a <strong className="text-foreground">NC Brasil</strong> — agência de{" "}
            <Link to="/nossos-sistemas" className="story-link text-foreground">
              <strong>sistemas web sob demanda</strong>
            </Link>
            ,{" "}
            <Link to="/portfolio/lojas-virtuais-criadas" className="story-link text-foreground">
              <strong>lojas virtuais</strong>
            </Link>{" "}
            e{" "}
            <Link to="/portfolio/criacao-de-aplicativos" className="story-link text-foreground">
              <strong>aplicativos mobile</strong>
            </Link>{" "}
            para empresas em <strong className="text-foreground">SP</strong> e{" "}
            <strong className="text-foreground">RJ</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link
              to="/orcamento"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-md transition-transform hover:scale-105"
            >
              Quero um orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/trabalhos-realizados"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface"
            >
              Ver trabalhos realizados
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl px-4 py-5 text-center"
              >
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOLUÇÕES ========================================================= */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-mesh opacity-60" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="O que fazemos"
            title={
              <>
                Soluções digitais com <span className="text-gradient">visão de negócio</span>
              </>
            }
            description={
              <>
                Combinamos <strong className="text-foreground">design</strong>,{" "}
                <strong className="text-foreground">engenharia</strong> e{" "}
                <strong className="text-foreground">marketing</strong> para entregar
                produtos digitais que geram resultado real.
              </>
            }
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <Link
                  to={s.to}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-sm"
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                  <div className="relative">
                    <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {renderBold(s.desc)}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Saiba mais
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO ========================================================= */}
      <section className="relative overflow-hidden border-y border-border bg-surface py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
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
    </>
  );
}
