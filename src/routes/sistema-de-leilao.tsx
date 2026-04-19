import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Gavel, 
  MonitorPlay, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Database, 
  Smartphone, 
  LayoutDashboard, 
  Search, 
  FileCheck,
  CheckCircle2,
  Lock,
  History,
  TrendingUp,
  CreditCard
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/sistema-de-leilao";

const features = [
  {
    icon: Clock,
    title: "Lances em Tempo Real",
    description: "Tecnologia de baixa latência para garantir que cada lance seja registrado instantaneamente, sem atrasos."
  },
  {
    icon: TrendingUp,
    title: "Lance Automático",
    description: "Permite que os arrematantes definam um valor máximo e o sistema lances automaticamente pelo menor preço possível."
  },
  {
    icon: MonitorPlay,
    title: "Auditório Virtual",
    description: "Transmissão ao vivo com contagem regressiva, 'dou-lhe uma' e 'dou-lhe duas' para uma experiência presencial digital."
  },
  {
    icon: LayoutDashboard,
    title: "Painel Administrativo",
    description: "Controle total sobre lotes, usuários, lances e documentos em uma interface intuitiva e poderosa."
  },
  {
    icon: Smartphone,
    title: "Totalmente Responsivo",
    description: "Otimizado para lances via computador, tablet ou smartphone com a mesma fluidez e segurança."
  },
  {
    icon: Database,
    title: "Infraestrutura Robusta",
    description: "Hospedado em servidores de alta performance com escalabilidade para suportar milhares de usuários simultâneos."
  }
];

const benefits = [
  "Sem cobrança de aluguel ou comissão sobre vendas",
  "A plataforma é 100% sua após a aquisição",
  "Homologado pelos principais Tribunais de Justiça do Brasil",
  "Personalização completa com a sua identidade visual",
  "Suporte técnico especializado e treinamentos",
  "Gestão completa de arrematantes e documentos (NF, Termos)"
];

export const Route = createFileRoute("/sistema-de-leilao")({
  head: () => buildStubMeta({
    title: "Sistema de Leilão On-line Profissional · NC Brasil",
    description: "Plataforma completa para leiloeiros judiciais e extrajudiciais. Lances em tempo real, auditório virtual e homologação jurídica.",
    keywords: "sistema de leilão, plataforma para leiloeiro, leilão eletrônico, auditório virtual, nc brasil",
    canonical: URL,
  }),
  component: () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                <Gavel className="h-3.5 w-3.5" />
                Solução para Leiloeiros
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                A plataforma de <span className="text-gradient">leilão profissional</span> definitiva.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Uma solução robusta, homologada e <strong className="text-foreground text-primary">sem mensalidades</strong>. O sistema é seu, focado em performance e conversão de lances.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Solicitar demonstração
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Falar com especialista
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                <img 
                  src="https://images.unsplash.com/photo-1589252392322-4b96144d186e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Interface do Sistema de Leilão" 
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-red-500" />
                    <span className="text-sm font-semibold text-white">Pregão em Tempo Real</span>
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    Sincronização 0.1s
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust / Homologation */}
      <section className="py-12 border-y border-border/50 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-12">
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Homologado por:</span>
            <div className="flex flex-wrap items-center justify-center gap-8 font-display text-lg font-bold opacity-60">
              <span>TJ/SP</span>
              <span>TJ/MG</span>
              <span>TJ/RJ</span>
              <span>TJ/PR</span>
              <span>DETRAN</span>
              <span>TRIBUNAIS FEDERAIS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Recursos Avançados"
            title={
              <>Tecnologia de <span className="text-gradient">ponta</span> para seu pregão</>
            }
            description="Desenvolvemos cada ferramenta pensando na facilidade do leiloeiro e na confiança do arrematante."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-sm">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{feature.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits / No Rent Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Por que escolher a nossa <br />
                <span className="text-gradient">Plataforma de Leilão?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Diferente de outros sistemas no mercado, nós entregamos a você a propriedade total da plataforma. Chega de pagar percentuais sobre suas vendas ou aluguéis abusivos.
              </p>
              
              <ul className="mt-10 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-primary/20 p-1 text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-base font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 font-display text-lg font-bold text-primary transition-colors hover:text-primary/80"
                >
                  Solicitar uma proposta personalizada
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:ml-auto lg:max-w-md">
              <div className="rounded-[2.5rem] border border-border/60 bg-card p-10 shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-primary glow-sm">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold">Segurança Jurídica</h3>
                <p className="mt-4 text-muted-foreground">
                  Nosso sistema segue rigorosamente as normas vigentes, garantindo que todo o processo de auditagem e registro de lances seja aceito em processos judiciais e extrajudiciais.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Auditável</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Zero</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Latência</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-card p-8 text-center md:p-16 border border-border/60">
              <div className="absolute inset-0 -z-10 bg-hero-glow opacity-50" />
              <div className="absolute inset-0 -z-10 grid-pattern opacity-10" />
              
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Pronto para <span className="text-gradient">modernizar</span> seus leilões?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Agende uma demonstração ao vivo e descubra como nossa plataforma pode escalar suas operações e reduzir seus custos operacionais.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Agendar Demonstração
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Falar com Comercial
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  ),
});
