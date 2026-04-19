import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, FileText, Send } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/Section";

const SITE_URL = "https://www.ncbrasil.com.br";
const EMAIL = "contato@ncbrasil.com.br";

export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Orçamento · NC Brasil — Solicite uma Proposta em 24h" },
      {
        name: "description",
        content:
          "Solicite um orçamento personalizado para seu site, sistema, loja virtual ou aplicativo. Resposta em até 24 horas com escopo, prazo e investimento.",
      },
      {
        name: "keywords",
        content:
          "orçamento criação de sites, orçamento sistema web, orçamento loja virtual, orçamento aplicativo, proposta agência web",
      },
      { property: "og:title", content: "Solicitar Orçamento · NC Brasil" },
      {
        property: "og:description",
        content: "Receba uma proposta clara em até 24h. Escopo, prazo e investimento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/orcamento` },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Solicitar Orçamento · NC Brasil" },
      {
        name: "twitter:description",
        content: "Receba uma proposta clara em até 24h.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/orcamento` }],
  }),
  component: OrcamentoPage,
});

const tipos = [
  "Site Institucional",
  "Landing Page",
  "Loja Virtual / E-commerce",
  "Sistema Web sob Demanda",
  "Aplicativo Mobile",
  "Marketing Digital / SEO",
  "Identidade Visual / Logotipo",
  "Outro",
];

const prazos = ["O quanto antes", "Em 1 mês", "Em 2-3 meses", "Apenas pesquisando"];

function OrcamentoPage() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    tipo: tipos[0],
    prazo: prazos[1],
    detalhes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Orçamento — ${form.tipo} — ${form.nome}`);
    const body = encodeURIComponent(
      `Tipo de projeto: ${form.tipo}\nPrazo: ${form.prazo}\n\nNome: ${form.nome}\nEmpresa: ${form.empresa}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\n\nDetalhes:\n${form.detalhes}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-3xl px-4 pt-20 pb-10 text-center md:px-6 md:pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <FileText className="h-3.5 w-3.5" />
              Orçamento
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Receba uma proposta em <span className="text-gradient">24 horas</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
              Conte sobre seu projeto. Vamos analisar e devolver com{" "}
              <strong className="text-foreground">escopo</strong>,{" "}
              <strong className="text-foreground">prazo</strong> e{" "}
              <strong className="text-foreground">investimento</strong> claros.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <form
                onSubmit={submit}
                className="rounded-3xl border border-border bg-card p-6 md:p-10"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Nome *" required value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} />
                  <Field label="Empresa" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} />
                  <Field label="E-mail *" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <Field label="Telefone / WhatsApp" type="tel" value={form.telefone} onChange={(v) => setForm({ ...form, telefone: v })} />

                  <Select label="Tipo de projeto" value={form.tipo} options={tipos} onChange={(v) => setForm({ ...form, tipo: v })} />
                  <Select label="Prazo desejado" value={form.prazo} options={prazos} onChange={(v) => setForm({ ...form, prazo: v })} />
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Detalhes do projeto *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.detalhes}
                    onChange={(e) => setForm({ ...form, detalhes: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-background"
                    placeholder="Funcionalidades desejadas, referências, público-alvo, integrações..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Enviar pedido
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="rounded-3xl border border-primary/30 bg-surface/60 p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold">O que está incluso</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  {[
                    "Análise estratégica do projeto",
                    "Escopo funcional detalhado",
                    "Cronograma com marcos",
                    "Investimento transparente",
                    "Suporte pós-lançamento",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{i}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl border border-border bg-background/40 p-4 text-sm">
                  <p className="text-muted-foreground">
                    Quer ver primeiro o que entregamos?
                  </p>
                  <Link
                    to="/trabalhos-realizados"
                    className="mt-2 inline-flex items-center gap-1 font-semibold text-primary"
                  >
                    Conheça nosso portfólio
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-background"
      />
    </div>
  );
}

function Select({
  label, value, options, onChange,
}: { label: string; value: string; options: readonly string[]; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-background"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">{o}</option>
        ))}
      </select>
    </div>
  );
}
