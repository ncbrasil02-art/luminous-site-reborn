import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Reveal } from "./Section";
import { trackLead, trackClick } from "@/lib/analytics";

interface ContactSectionProps {
  pageTitle: string;
}

const EMAIL = "comercial@ncbrasil.com.br";
const PHONE_NUMBER = "5521996509905";
const ADDRESS = "Rua Barão de Mauá 347, São Bernardo do Campo - São Paulo";
const HOURS = "Segunda a Domingo, das 08:00 às 22:00";
const EMAIL_V2 = "comercial@ncbrasil.com.br";

export function ContactSection({ pageTitle }: ContactSectionProps) {
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", whatsapp: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackLead(`form_lp_${pageTitle.toLowerCase().replace(/\s+/g, '_')}`);
    
    const subject = encodeURIComponent(`Orçamento via ${pageTitle} — ${form.nome || "Novo Lead"}`);
    const body = encodeURIComponent(
      `Página de Origem: ${pageTitle}\n\n` +
      `Nome: ${form.nome}\n` +
      `Empresa: ${form.empresa}\n` +
      `E-mail: ${form.email}\n` +
      `WhatsApp: ${form.whatsapp}\n\n` +
      `Mensagem:\n${form.mensagem}`
    );
    
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const getWhatsappUrl = () => {
    const text = encodeURIComponent(`Olá! Gostaria de um orçamento para o ${pageTitle}. Vim pelo site.`);
    return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
  };

  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-black" id="contato">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-40" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-none border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Solicite um Orçamento
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
              Entre em <span className="text-primary-glow">Contato</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
              Pronto para revolucionar seu projeto? Nossa equipe está aqui para ajudar você a começar hoje mesmo.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          {/* FORMULÁRIO */}
          <Reveal className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="group relative overflow-hidden rounded-none border border-border bg-surface-elevated/40 p-6 backdrop-blur-sm transition-all hover:border-primary/40 sm:p-8 md:p-12"
            >
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold md:text-3xl">Vamos conversar</h3>
                <p className="mt-2 text-sm text-muted-foreground">Preencha o formulário e entraremos em contato rapidamente.</p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground ml-1">Nome *</label>
                    <input 
                      required
                      placeholder="Seu nome completo"
                      value={form.nome}
                      onChange={e => setForm({...form, nome: e.target.value})}
                      className="w-full rounded-none border border-border bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground ml-1">E-mail *</label>
                    <input 
                      required
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full rounded-none border border-border bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground ml-1">Empresa *</label>
                    <input 
                      required
                      placeholder="Nome da sua empresa"
                      value={form.empresa}
                      onChange={e => setForm({...form, empresa: e.target.value})}
                      className="w-full rounded-none border border-border bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground ml-1">WhatsApp / Telefone</label>
                    <input 
                      placeholder="(11) 99999-9999"
                      value={form.whatsapp}
                      onChange={e => setForm({...form, whatsapp: e.target.value})}
                      className="w-full rounded-none border border-border bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground ml-1">Mensagem *</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto ou dúvida..."
                    value={form.mensagem}
                    onChange={e => setForm({...form, mensagem: e.target.value})}
                    className="w-full rounded-none border border-border bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:bg-background focus:ring-1 focus:ring-primary/20 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-none bg-gradient-primary py-5 text-sm font-bold text-primary-foreground glow-md transition-transform hover:scale-[1.02] active:scale-[0.98] md:w-auto md:px-12"
                >
                  Enviar Mensagem
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
            </form>
          </Reveal>

          {/* INFORMAÇÕES */}
          <Reveal delay={0.2} className="lg:col-span-2 space-y-6">
            <h3 className="font-display text-2xl font-bold md:text-3xl mb-8">Outras formas de contato</h3>
            
            <ContactInfoCard 
              icon={Mail}
              label="E-mail"
              value={EMAIL}
              desc="Resposta em até 24h"
              href={`mailto:${EMAIL}?subject=Contato via ${pageTitle}`}
            />
            
            <ContactInfoCard 
              icon={MessageCircle}
              label="WhatsApp"
              value="+55 (21) 99650-9905"
              desc="Atendimento comercial"
              href={getWhatsappUrl()}
              external
            />
            
            <ContactInfoCard 
              icon={MapPin}
              label="Endereço"
              value={ADDRESS}
              desc="Atendimento sob agendamento"
            />
            
            <ContactInfoCard 
              icon={Clock}
              label="Horário"
              value={HOURS}
              desc="Horário de Brasília"
            />

            <div className="mt-12 rounded-none border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm">
              <h4 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Diagnóstico Gratuito
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nossos especialistas estão prontos para analisar seu projeto e propor a melhor solução tecnológica.
              </p>
              <button 
                onClick={() => window.location.href = getWhatsappUrl()}
                className="mt-6 group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors"
              >
                Falar com consultor
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCard({ 
  icon: Icon, 
  label, 
  value, 
  desc, 
  href, 
  external 
}: { 
  icon: any, 
  label: string, 
  value: string, 
  desc: string, 
  href?: string, 
  external?: boolean 
}) {
  const Card = (
    <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-5 rounded-none border border-border bg-surface-elevated/40 p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-surface-elevated/60 hover:glow-sm text-center sm:text-left">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
        <div className="font-display font-bold text-foreground truncate group-hover:text-primary transition-colors">{value}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{desc}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? "_blank" : undefined} 
        rel={external ? "noopener noreferrer" : undefined}
        onClick={() => trackClick(label, "Contact Section Card")}
        className="block"
      >
        {Card}
      </a>
    );
  }

  return Card;
}
