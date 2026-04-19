import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  Heart,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  Users2,
} from "lucide-react";

import teamImg from "@/assets/team-empresa.jpg";
import { Reveal, SectionHeading } from "@/components/Section";

const SITE_URL = "https://www.ncbrasil.com.br";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "A Empresa · NC Brasil — Agência de Tecnologia em SP e RJ" },
      {
        name: "description",
        content:
          "Conheça a NC Brasil: agência de tecnologia com mais de 15 anos criando sites, sistemas web, lojas virtuais e aplicativos para marcas em São Paulo e Rio de Janeiro.",
      },
      {
        name: "keywords",
        content:
          "NC Brasil empresa, agência de tecnologia SP, agência web RJ, equipe desenvolvimento, fábrica de software, criação de sistemas",
      },
      { property: "og:title", content: "A Empresa · NC Brasil" },
      {
        property: "og:description",
        content:
          "15+ anos transformando ideias em produtos digitais que vendem. Conheça nossa equipe, valores e processo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/empresa` },
      { property: "og:image", content: `${SITE_URL}/og-empresa.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "A Empresa · NC Brasil" },
      {
        name: "twitter:description",
        content: "Quem somos, no que acreditamos e como entregamos resultado.",
      },
      { name: "twitter:image", content: `${SITE_URL}/og-empresa.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/empresa` }],
  }),
  component: EmpresaPage,
});

const values = [
  {
    icon: Target,
    title: "Foco em resultado",
    desc: "Não entregamos pixels: entregamos **negócio**. Cada decisão é guiada por métricas e impacto.",
  },
  {
    icon: ShieldCheck,
    title: "Engenharia confiável",
    desc: "Código limpo, testado e escalável. Plataformas que **rodam por anos** sem dor de cabeça.",
  },
  {
    icon: Heart,
    title: "Parceria de longo prazo",
    desc: "Não somos fornecedor — somos **time**. Continuamos junto após o go-live.",
  },
  {
    icon: Lightbulb,
    title: "Curiosidade tecnológica",
    desc: "Estudamos o estado-da-arte para entregar o que há de **mais moderno**.",
  },
];

const team = [
  "Gestor Comercial",
  "Designer UX/UI",
  "Programador Sênior",
  "Gerente de Sistemas",
  "Análise de Sistemas",
  "Gestor de Projetos",
  "SEO & Marketing",
  "Aplicativos Mobile",
  "Comunicação Visual",
];

function bold(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
    p.startsWith("**") ? (
      <strong key={i} className="text-foreground">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    ),
  );
}

function EmpresaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                <Building2 className="h-3.5 w-3.5" />
                A Empresa
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
                Construímos <span className="text-gradient">tecnologia</span> que move negócios
              </h1>
              <p className="mt-6 text-base text-muted-foreground md:text-lg">
                A <strong className="text-foreground">NC Brasil</strong> nasceu para unir{" "}
                <strong className="text-foreground">design</strong>,{" "}
                <strong className="text-foreground">engenharia</strong> e{" "}
                <strong className="text-foreground">marketing</strong> em uma única casa. Há mais de{" "}
                <strong className="text-foreground">15 anos</strong> criamos sites, sistemas,{" "}
                <Link to="/portfolio/lojas-virtuais-criadas" className="story-link text-foreground">
                  <strong>lojas virtuais</strong>
                </Link>{" "}
                e{" "}
                <Link to="/portfolio/criacao-de-aplicativos" className="story-link text-foreground">
                  <strong>aplicativos</strong>
                </Link>{" "}
                para marcas em <strong className="text-foreground">São Paulo</strong> e{" "}
                <strong className="text-foreground">Rio de Janeiro</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-sm hover:scale-105 transition-transform"
                >
                  Solicitar proposta
                </Link>
                <Link
                  to="/trabalhos-realizados"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold hover:bg-surface"
                >
                  Ver portfólio
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-20 blur-3xl animate-glow-pulse" />
                <img
                  src={teamImg}
                  alt="Equipe NC Brasil colaborando em interface holográfica"
                  width={1536}
                  height={1024}
                  className="relative w-full rounded-3xl border border-border object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="relative border-y border-border bg-surface py-20 md:py-28">
        <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
          <Reveal>
            <Rocket className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-6 font-display text-3xl font-bold md:text-5xl">
              Nossa missão é <span className="text-gradient">simplificar o complexo</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-muted-foreground md:text-lg">
              Transformamos processos manuais em <strong className="text-foreground">plataformas digitais</strong>,
              ideias soltas em <strong className="text-foreground">produtos rentáveis</strong> e marcas
              esquecíveis em <strong className="text-foreground">experiências memoráveis</strong>. Tudo com
              tecnologia de ponta e estética cinematográfica.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Nossos valores"
            title={
              <>
                O que <span className="text-gradient">nos move</span> todos os dias
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-sm">
                  <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{bold(v.desc)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="relative overflow-hidden border-y border-border bg-surface py-24 md:py-32">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Nosso time"
            title={
              <>
                Profissionais experientes em <span className="text-gradient">cada cena</span>
              </>
            }
            description="Designers, programadores, analistas, especialistas em SEO e marketing. Time multidisciplinar pronto para entregar."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((role, i) => (
              <Reveal key={role} delay={i * 0.04}>
                <div className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 backdrop-blur transition-all hover:border-primary/40 hover:bg-card">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-primary text-primary-foreground glow-sm">
                    <Users2 className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-semibold">{role}</div>
                    <div className="text-xs text-muted-foreground">Especialista NC Brasil</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="grid gap-6 rounded-3xl border border-border bg-surface p-10 md:grid-cols-4 md:p-14">
              {[
                { v: "15+", l: "Anos no mercado" },
                { v: "745+", l: "Sites lançados" },
                { v: "525+", l: "Lojas virtuais" },
                { v: "78+", l: "Projetos completos" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
                    {s.v}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <Reveal>
            <div className="rounded-3xl border border-primary/30 bg-surface/60 px-6 py-14 backdrop-blur">
              <Award className="mx-auto h-10 w-10 text-primary" />
              <h2 className="mt-6 font-display text-3xl font-bold md:text-4xl">
                Pronto para tirar seu projeto <span className="text-gradient">do papel</span>?
              </h2>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-md hover:scale-105 transition-transform"
                >
                  Solicitar orçamento
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold hover:bg-surface-elevated"
                >
                  Falar conosco
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
