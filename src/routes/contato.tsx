import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  Calendar,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { Reveal, SectionHeading } from "@/components/Section";
import { trackLead } from "@/lib/analytics";

const EMAIL = "contato@ncbrasil.com.br";
const WHATSAPP =
  "https://wa.me/5511940002000?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20NC%20Brasil.";


import { buildMeta, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/contato")({
  head: () => buildMeta({
    title: "Contato · NC Brasil — Fale com Nossa Equipe de Especialistas",
    description: "Entre em contato com a NC Brasil. Tire dúvidas, agende uma reunião ou solicite um diagnóstico para seu projeto. Atendimento especializado em São Paulo e Rio de Janeiro.",
    keywords: "contato NC Brasil, agência web SP, agência RJ, telefone NC Brasil, agendar reunião desenvolvimento, suporte técnico NC Brasil, orçamento tecnologia",
    canonical: `${SITE_URL}/contato`,
    faq: [
      { q: "Como entrar em contato com a NC Brasil?", a: "Você pode nos contatar via formulário no site, e-mail (contato@ncbrasil.com.br), telefone ou WhatsApp comercial direto." },
      { q: "Qual o horário de atendimento?", a: "Atendemos de segunda a sexta, das 9h às 18h. Sábados sob agendamento." }
    ]
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackLead("form_contato");
    const subject = encodeURIComponent(`Contato site — ${form.nome || "novo lead"}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmpresa: ${form.empresa}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\n\nMensagem:\n${form.mensagem}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 text-center md:px-6 md:pt-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <MessageCircle className="h-3.5 w-3.5" />
              Contato
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
              Vamos <span className="text-gradient">conversar</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
              Conte sua ideia. Respondemos em até <strong className="text-foreground">24 horas</strong>{" "}
              úteis com um plano claro.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRID FORM + INFO */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-5">
          {/* FORM */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 md:p-10"
            >
              <h2 className="font-display text-2xl font-bold">Envie sua mensagem</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Preencha os campos abaixo — abriremos seu cliente de e-mail com tudo pronto.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <Field label="Nome completo *" required value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} />
                <Field label="Empresa" value={form.empresa} onChange={(v) => setForm({ ...form, empresa: v })} />
                <Field label="E-mail *" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <Field label="Telefone / WhatsApp" type="tel" value={form.telefone} onChange={(v) => setForm({ ...form, telefone: v })} />
              </div>

              <div className="mt-4">
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Mensagem *
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-background"
                  placeholder="Conte sobre seu projeto, prazos e objetivos..."
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground glow-sm transition-transform hover:scale-105"
              >
                Enviar mensagem
                <Send className="h-4 w-4" />
              </button>

              <p className="mt-4 text-xs text-muted-foreground">
                Prefere algo mais rápido?{" "}
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="story-link text-primary">
                  Fale conosco no WhatsApp
                </a>
                .
              </p>
            </form>
          </Reveal>

          {/* INFO */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              <InfoCard icon={Phone} title="Telefone" lines={["+55 (11) 4000-2000"]} href="tel:+551140002000" />
              <InfoCard icon={Mail} title="E-mail" lines={[EMAIL]} href={`mailto:${EMAIL}`} />
              <InfoCard
                icon={MessageCircle}
                title="WhatsApp"
                lines={["Atendimento comercial direto"]}
                href={WHATSAPP}
                external
              />
              <InfoCard
                icon={Clock}
                title="Horário"
                lines={["Seg a Sex · 9h às 18h", "Sáb · sob agendamento"]}
              />
              <InfoCard
                icon={Calendar}
                title="Agendar reunião"
                lines={["Apresentação de portfólio", "Diagnóstico do seu projeto"]}
                cta={
                  <Link to="/orcamento" className="story-link text-primary">
                    Quero agendar
                  </Link>
                }
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENDEREÇOS */}
      <section className="border-t border-border bg-surface py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            subtitle="Nossos escritórios"
            title={
              <>
                Atuação em <span className="text-gradient">São Paulo</span> e{" "}
                <span className="text-gradient">Rio de Janeiro</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <OfficeCard
              cidade="São Paulo · ABC"
              endereco="São Bernardo do Campo — SP"
              tag="Sede"
            />
            <OfficeCard
              cidade="Rio de Janeiro"
              endereco="Centro — RJ"
              tag="Filial"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
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

function InfoCard({
  icon: Icon,
  title,
  lines,
  href,
  external,
  cta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  href?: string;
  external?: boolean;
  cta?: React.ReactNode;
}) {
  const inner = (
    <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:bg-card/80">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="font-display font-semibold">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-sm text-muted-foreground">
            {l}
          </div>
        ))}
        {cta && <div className="mt-1 text-sm">{cta}</div>}
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return inner;
}

function OfficeCard({ cidade, endereco, tag }: { cidade: string; endereco: string; tag: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:glow-sm">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
      <div className="relative">
        <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
          <Building2 className="h-3 w-3" />
          {tag}
        </span>
        <h3 className="mt-4 font-display text-xl font-semibold">{cidade}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          {endereco}
        </div>
      </div>
    </div>
  );
}
