import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { newsData } from "@/lib/news.data";
import { NewsDisplay } from "./NewsDisplay";
import { trackRedirect } from "@/lib/analytics";
import { buildMeta } from "@/lib/seo";
import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  Minus,
  Rocket,
  Sparkles,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";

import { Reveal, SectionHeading } from "./Section";

export type LPFeature = { icon: LucideIcon; title: string; desc: string };
export type LPBenefit = { icon: LucideIcon; title: string; desc: string };
export type LPFaq = { q: string; a: string };
export type LPStat = { value: string; label: string };
export type LPTestimonial = { quote: string; author: string; role: string };
export type LPBreadcrumb = { to: string; label: string };
export type LPModule = { icon: LucideIcon; title: string; items: string[] };
export type LPUseCase = { icon: LucideIcon; title: string; desc: string };
export type LPIntegration = { name: string; category?: string };
export type LPSecurityItem = { icon: LucideIcon; title: string; desc: string };
export type LPTimelineStep = { step: string; title: string; desc: string };
export type LPCompareRow = { feature: string; us: boolean | string; them: boolean | string };
export type LPGalleryItem = { src: string; alt: string; caption?: string };

export type LandingPageProps = {
  breadcrumbs: LPBreadcrumb[];
  eyebrow: string;
  h1: React.ReactNode;
  intro: React.ReactNode;
  primaryCta?: { to: string; label: string };
  secondaryCta?: { to: string; label: string };
  stats?: LPStat[];
  clientsTitle?: React.ReactNode;
  clients?: string[];
  problem?: { title?: React.ReactNode; items: string[] };
  solution?: { title?: React.ReactNode; desc: React.ReactNode; highlights?: string[] };
  benefitsTitle?: React.ReactNode;
  benefits?: LPBenefit[];
  featuresTitle?: React.ReactNode;
  features?: LPFeature[];
  modulesTitle?: React.ReactNode;
  modules?: LPModule[];
  useCasesTitle?: React.ReactNode;
  useCases?: LPUseCase[];
  integrationsTitle?: React.ReactNode;
  integrations?: LPIntegration[];
  securityTitle?: React.ReactNode;
  security?: LPSecurityItem[];
  timelineTitle?: React.ReactNode;
  timeline?: LPTimelineStep[];
  comparativeTitle?: React.ReactNode;
  comparative?: { usLabel?: string; themLabel?: string; rows: LPCompareRow[] };
  galleryTitle?: React.ReactNode;
  gallery?: LPGalleryItem[];
  testimonials?: LPTestimonial[];
  faqTitle?: React.ReactNode;
  faq?: LPFaq[];
  finalCtaTitle?: React.ReactNode;
  finalCtaDesc?: React.ReactNode;
  relatedNewsTags?: string[]; // New prop for related news
};

export function buildLPMeta(options: {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  h1: string;
  breadcrumbs?: { label: string; to: string }[];
  faq?: LPFaq[];
  ogImage?: string;
}) {
  return buildMeta({
    ...options,
    ogType: "website",
    faq: options.faq?.map((f) => ({ q: f.q, a: f.a })),
    breadcrumbs: options.breadcrumbs,
  });
}

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

export function LandingPage({
  breadcrumbs,
  eyebrow,
  h1,
  intro,
  primaryCta = { to: "/orcamento", label: "Solicitar orçamento" },
  secondaryCta = { to: "/contato", label: "Falar com especialista" },
  stats,
  clientsTitle,
  clients,
  problem,
  solution,
  benefitsTitle,
  benefits,
  featuresTitle,
  features,
  modulesTitle,
  modules,
  useCasesTitle,
  useCases,
  integrationsTitle,
  integrations,
  securityTitle,
  security,
  timelineTitle,
  timeline,
  comparativeTitle,
  comparative,
  galleryTitle,
  gallery,
  testimonials,
  faqTitle,
  faq,
  finalCtaTitle,
  finalCtaDesc,
  relatedNewsTags = [],
}: LandingPageProps) {
  const search = useRouterState({ select: (s) => s.location.search });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    // If the user arrived here from a migration redirect, track it.
    // We check the 'from_redirect' search param added in the redirect route.
    if (search && (search as any).from_redirect === "sistemas_migration") {
      trackRedirect(`/sistemas${pathname}`, pathname);
    }
  }, [search, pathname]);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="absolute -top-24 left-1/2 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6 md:pt-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            {breadcrumbs.map((b, i) => (
              <span key={b.to + i} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-foreground/80">{b.label}</span>
                ) : (
                  <Link to={b.to} className="hover:text-primary transition-colors">
                    {b.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </div>

        <div className="mx-auto max-w-5xl px-4 pb-20 pt-4 text-center md:px-6 md:pb-28">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            {h1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-base text-muted-foreground md:text-lg"
          >
            {intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to={primaryCta.to}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-md transition-transform hover:scale-105"
            >
              {primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to={secondaryCta.to}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface"
            >
              {secondaryCta.label}
            </Link>
          </motion.div>

          {stats && (
            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl px-4 py-5 text-center">
                  <div className="font-display text-2xl font-bold text-gradient md:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CLIENTS */}
      {clients && clients.length > 0 && (
        <section className="relative border-y border-border bg-surface/30 py-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {clientsTitle ?? "Empresas que confiam na NC Brasil"}
            </h2>

            <div className="marquee-mask mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {clients.map((c) => (
                <span key={c} className="font-display text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROBLEM / SOLUTION */}
      {(problem || solution) && (
        <section className="relative py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
            {problem && (
              <Reveal>
                <div className="h-full rounded-3xl border border-destructive/30 bg-destructive/5 p-8 backdrop-blur">
                  <span className="inline-flex items-center gap-2 rounded-full bg-destructive/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive">
                    <X className="h-3.5 w-3.5" /> O problema
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
                    {problem.title ?? <>Sem uma plataforma dedicada você <span className="text-destructive">perde receita</span></>}
                  </h2>
                  <ul className="mt-6 space-y-3">
                    {problem.items.map((it) => (
                      <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                        <span>{renderBold(it)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
            {solution && (
              <Reveal delay={0.1}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-primary/40 bg-primary/5 p-8 backdrop-blur glow-sm">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                  <span className="relative inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Check className="h-3.5 w-3.5" /> A solução NC Brasil
                  </span>
                  <h2 className="relative mt-4 font-display text-2xl font-bold md:text-3xl">
                    {solution.title ?? <>Uma plataforma <span className="text-gradient">completa</span> e pronta para escalar</>}
                  </h2>
                  <p className="relative mt-4 text-sm text-muted-foreground md:text-base">
                    {typeof solution.desc === "string" ? renderBold(solution.desc) : solution.desc}
                  </p>
                  {solution.highlights && (
                    <ul className="relative mt-6 grid gap-3 sm:grid-cols-2">
                      {solution.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{renderBold(h)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}



      {/* BENEFITS */}
      {benefits && benefits.length > 0 && (
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Por que escolher"
              title={benefitsTitle ?? <>Vantagens que fazem <span className="text-gradient">a diferença</span></>}
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.05}>
                  <div className="group h-full rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                      <b.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{renderBold(b.desc)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {features && features.length > 0 && (
        <section className="relative overflow-hidden border-y border-border bg-surface/40 py-20 md:py-28">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Recursos"
              title={featuresTitle ?? <>Tudo que você precisa <span className="text-gradient">em um só lugar</span></>}
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.04}>
                  <div className="flex h-full gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40">
                    <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{f.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{renderBold(f.desc)}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MODULES */}
      {modules && modules.length > 0 && (
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Módulos"
              title={modulesTitle ?? <>Módulos que compõem <span className="text-gradient">a plataforma</span></>}
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {m.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{renderBold(it)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* USE CASES */}
      {useCases && useCases.length > 0 && (
        <section className="relative overflow-hidden border-y border-border bg-surface/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Casos de uso"
              title={useCasesTitle ?? <>Feito para <span className="text-gradient">quem faz acontecer</span></>}
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((u, i) => (
                <Reveal key={u.title} delay={i * 0.04}>
                  <div className="group h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:border-primary/40 hover:glow-sm">
                    <u.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                    <h3 className="mt-4 font-display text-lg font-semibold">{u.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{renderBold(u.desc)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INTEGRATIONS */}
      {integrations && integrations.length > 0 && (
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Integrações"
              title={integrationsTitle ?? <>Conecta com <span className="text-gradient">seu ecossistema</span></>}
            />
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {integrations.map((it, i) => (
                <Reveal key={it.name} delay={i * 0.02}>
                  <div className="rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition-all hover:border-primary/50 hover:text-primary">
                    {it.name}
                    {it.category && <span className="ml-2 text-xs text-muted-foreground">· {it.category}</span>}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECURITY */}
      {security && security.length > 0 && (
        <section className="relative overflow-hidden border-y border-border bg-surface/40 py-20 md:py-28">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Segurança"
              title={securityTitle ?? <>Segurança e <span className="text-gradient">conformidade</span> em primeiro lugar</>}
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {security.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.04}>
                  <div className="h-full rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur">
                    <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{renderBold(s.desc)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TIMELINE */}
      {timeline && timeline.length > 0 && (
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Linha do tempo"
              title={timelineTitle ?? <>Como implantamos <span className="text-gradient">seu projeto</span></>}
            />
            <ol className="relative mt-14 space-y-8 border-l border-primary/30 pl-8">
              {timeline.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.05}>
                  <li className="relative">
                    <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground glow-sm">
                      {i + 1}
                    </span>
                    <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur">
                      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{t.step}</div>
                      <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{renderBold(t.desc)}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* COMPARATIVE */}
      {comparative && comparative.rows.length > 0 && (
        <section className="relative overflow-hidden border-y border-border bg-surface/40 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Comparativo"
              title={comparativeTitle ?? <>Por que somos <span className="text-gradient">a melhor escolha</span></>}
            />
            <Reveal>
              <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface/60">
                      <th className="px-4 py-4 text-left font-semibold md:px-6">Recurso</th>
                      <th className="px-4 py-4 text-center font-semibold text-primary md:px-6">
                        {comparative.usLabel ?? "NC Brasil"}
                      </th>
                      <th className="px-4 py-4 text-center font-semibold text-muted-foreground md:px-6">
                        {comparative.themLabel ?? "Concorrência"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparative.rows.map((r, i) => (
                      <tr key={r.feature} className={i % 2 === 0 ? "bg-transparent" : "bg-surface/30"}>
                        <td className="px-4 py-3.5 md:px-6">{r.feature}</td>
                        <td className="px-4 py-3.5 text-center md:px-6">
                          {typeof r.us === "boolean"
                            ? r.us
                              ? <Check className="mx-auto h-5 w-5 text-primary" />
                              : <Minus className="mx-auto h-5 w-5 text-muted-foreground" />
                            : <span className="font-medium text-primary">{r.us}</span>}
                        </td>
                        <td className="px-4 py-3.5 text-center text-muted-foreground md:px-6">
                          {typeof r.them === "boolean"
                            ? r.them
                              ? <Check className="mx-auto h-5 w-5 text-muted-foreground/70" />
                              : <X className="mx-auto h-5 w-5 text-muted-foreground/50" />
                            : <span>{r.them}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {gallery && gallery.length > 0 && (
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Galeria"
              title={galleryTitle ?? <>Veja a plataforma <span className="text-gradient">em ação</span></>}
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {gallery.map((g, i) => (
                <Reveal key={g.src} delay={i * 0.05}>
                  <figure className="group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={g.src}
                        alt={g.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {g.caption && (
                      <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
                        {g.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* TESTIMONIALS */}
      {testimonials && testimonials.length > 0 && (
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <SectionHeading eyebrow="Prova social" title={<>Clientes que <span className="text-gradient">confiam em nós</span></>} />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.author} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
                    <div className="flex gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-foreground/90">"{t.quote}"</p>
                    <div className="mt-6">
                      <div className="text-sm font-semibold">{t.author}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED NEWS */}
      <NewsDisplay 
        filterTags={relatedNewsTags} 
        title={
          <>
            Conteúdo <span className="text-gradient">Relacionado</span>
          </>
        }
        eyebrow="Blog & Insights"
      />

      {/* RELATED NEWS */}
      {relatedNewsTags && relatedNewsTags.length > 0 && (
        <NewsDisplay 
          filterTags={relatedNewsTags} 
          title={<>Conteúdo Relacionado e <span className="text-gradient">Insights</span></>}
          eyebrow="Blog & Notícias"
        />
      )}

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="relative overflow-hidden border-y border-border bg-surface/40 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title={faqTitle ?? <>Tire suas <span className="text-gradient">dúvidas</span></>}
            />
            <div className="mt-12 space-y-4">
              {faq.map((item, i) => (
                <Reveal key={item.q} delay={i * 0.04}>
                  <details className="group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/30">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold list-none">
                      <span className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {item.q}
                      </span>
                      <ChevronRight className="h-4 w-4 text-primary transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 pl-7 text-sm text-muted-foreground">{renderBold(item.a)}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-mesh opacity-60" />
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface/60 px-6 py-14 backdrop-blur md:px-12">
              <div className="absolute -inset-px rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
              <div className="relative">
                <Rocket className="mx-auto h-10 w-10 text-primary" />
                <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-5xl">
                  {finalCtaTitle ?? <>Vamos começar seu <span className="text-gradient">projeto</span>?</>}
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  {finalCtaDesc ?? <>Resposta em até <strong className="text-foreground">24 horas</strong> com escopo, prazo e investimento.</>}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link to="/orcamento" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-md hover:scale-105 transition-transform">
                    Solicitar orçamento
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/contato" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-surface">
                    <MessageCircle className="h-4 w-4" />
                    Falar com especialista
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

