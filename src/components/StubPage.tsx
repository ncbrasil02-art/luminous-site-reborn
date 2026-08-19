import { Link } from "@tanstack/react-router";
import { ArrowRight, Construction, Sparkles } from "lucide-react";

import { Reveal } from "./Section";

export type StubHighlight = { to: string; label: string };

export function StubPage({
  eyebrow,
  title,
  description,
  highlights,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  highlights?: StubHighlight[];
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="mx-auto max-w-5xl px-4 py-24 text-center md:px-6 md:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">{description}</p>
        </Reveal>

        {highlights && (
          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <Link
                  key={h.to}
                  to={h.to}
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:glow-sm"
                >
                  <span className="font-medium">{h.label}</span>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs text-muted-foreground backdrop-blur">
            <Construction className="h-3.5 w-3.5 text-primary" />
            Conteúdo completo em produção · Em breve, mais detalhes nesta página
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/orcamento"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-sm hover:scale-105 transition-transform"
            >
              Solicitar orçamento
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold hover:bg-surface"
            >
              Falar com a equipe
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { buildMeta } from "@/lib/seo";

export function buildStubMeta({
  title,
  description,
  keywords,
  canonical,
  faq,
  breadcrumbs,
}: {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  faq?: { q: string; a: string }[];
  breadcrumbs?: { label: string; to: string }[];
}) {
  return buildMeta({
    title,
    description,
    keywords,
    canonical,
    faq,
    breadcrumbs,
  });
}
