import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  Rocket,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

import { Reveal, SectionHeading } from "./Section";

export type LPFeature = { icon: LucideIcon; title: string; desc: string };
export type LPBenefit = { icon: LucideIcon; title: string; desc: string };
export type LPFaq = { q: string; a: string };
export type LPStat = { value: string; label: string };
export type LPTestimonial = { quote: string; author: string; role: string };
export type LPBreadcrumb = { to: string; label: string };

export type LandingPageProps = {
  breadcrumbs: LPBreadcrumb[];
  eyebrow: string;
  h1: React.ReactNode;
  intro: React.ReactNode;
  primaryCta?: { to: string; label: string };
  secondaryCta?: { to: string; label: string };
  stats?: LPStat[];
  benefitsTitle?: React.ReactNode;
  benefits?: LPBenefit[];
  featuresTitle?: React.ReactNode;
  features?: LPFeature[];
  testimonials?: LPTestimonial[];
  faqTitle?: React.ReactNode;
  faq?: LPFaq[];
  finalCtaTitle?: React.ReactNode;
  finalCtaDesc?: React.ReactNode;
};

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
  benefitsTitle,
  benefits,
  featuresTitle,
  features,
  testimonials,
  faqTitle,
  faq,
  finalCtaTitle,
  finalCtaDesc,
}: LandingPageProps) {
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

export function buildLPMeta({
  title,
  description,
  keywords,
  canonical,
  h1,
  breadcrumbs,
  faq,
}: {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  h1: string;
  breadcrumbs: { name: string; url: string }[];
  faq?: { q: string; a: string }[];
}) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name,
      item: b.url,
    })),
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    description,
    provider: {
      "@type": "Organization",
      name: "NC Brasil",
      url: "https://www.ncbrasil.com.br",
    },
    areaServed: ["São Paulo", "Rio de Janeiro", "Brasil"],
  };
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceLd) },
      ...(faq && faq.length
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }]
        : []),
    ],
  };
}
