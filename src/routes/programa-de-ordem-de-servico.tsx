import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  ClipboardCheck, 
  Users, 
  Settings, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  CheckCircle2,
  Clock,
  ShieldCheck,
  LayoutDashboard,
  FileText,
  DollarSign,
  Briefcase
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/programa-de-ordem-de-servico";

const features = [
  {
    icon: ClipboardCheck,
    title: "Gestão de Ordens",
    description: "Controle total sobre abertura, acompanhamento e fechamento de chamados com facilidade e rapidez."
  },
  {
    icon: Users,
    title: "Controle de Técnicos",
    description: "Atribua tarefas para sua equipe de campo e acompanhe o status de cada atendimento em tempo real."
  },
  {
    icon: DollarSign,
    title: "Financeiro Integrado",
    description: "Gerencie receitas, orçamentos e emita boletos de cobrança diretamente pelo sistema de OS."
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Estratégico",
    description: "Visualize indicadores de performance, faturamento e produtividade em painéis intuitivos."
  },
  {
    icon: FileText,
    title: "Relatórios de Peças",
    description: "Controle o estoque de peças utilizadas em cada serviço e evite desperdícios ou perdas."
  },
  {
    icon: ShieldCheck,
    title: "Segurança de Dados",
    description: "Seus dados protegidos com criptografia e backups automáticos em servidores de alta performance."
  }
];

const benefits = [
  "Organização completa dos serviços prestados",
  "Previsão de faturamento baseada em OS emitidas",
  "Redução de erros e retrabalho na equipe",
  "Melhoria no tempo de resposta ao cliente",
  "Acesso remoto via tablet ou smartphone",
  "Histórico completo de atendimentos por cliente"
];

export const Route = createFileRoute("/programa-de-ordem-de-servico")({
  head: () => buildStubMeta({
    title: "Programa de Ordem de Serviço (OS) Profissional · NC Brasil",
    description: "Sistema completo para gestão de ordens de serviço, técnicos, peças e financeiro. Otimize sua assistência técnica ou empresa de serviços.",
    keywords: "programa de ordem de serviço, sistema de OS, gestão de atendimentos, software para assistência técnica, ordem de serviço online",
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
                <Briefcase className="h-3.5 w-3.5" />
                Gestão de Serviços
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                Simplifique sua <span className="text-gradient">Ordem de Serviço</span> com inteligência.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Organize atendimentos, técnicos, peças e financeiro em uma única plataforma. Ganhe produtividade e <strong className="text-foreground text-primary">total controle</strong> sobre sua operação.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Solicitar Demonstração
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Falar com Consultor
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                <img 
                  src="https://www.ncbrasil.com.br/wp-content/uploads/2018/07/ordem-de-producao-e-a-importancia-da-tecnologia-para-evitar-perdas-750x410.jpeg" 
                  alt="Interface do Sistema de Ordem de Serviço" 
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-blue-500" />
                    <span className="text-sm font-semibold text-white">Sistema em Nuvem</span>
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    Acesso Full 24/7
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Applicability Section */}
      <section className="py-12 border-y border-border/50 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-12">
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Ideal para:</span>
            <div className="flex flex-wrap items-center justify-center gap-8 font-display text-lg font-bold opacity-60">
              <span>Assistência Técnica</span>
              <span>Oficinas Mecânicas</span>
              <span>Suporte de TI</span>
              <span>Manutenção Predial</span>
              <span>Prestadores de Serviço</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Funcionalidades Chave"
            title={
              <>Tudo para uma gestão <span className="text-gradient">impecável</span></>
            }
            description="Desenvolvemos ferramentas específicas para facilitar o dia a dia de quem gerencia serviços complexos."
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

      {/* Benefits Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Por que usar o nosso <br />
                <span className="text-gradient">Programa de OS?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Elimine o papel e as planilhas confusas. Tenha um histórico centralizado de tudo o que acontece na sua empresa e tome decisões baseadas em dados reais.
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
                  Solicitar uma proposta agora
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:ml-auto lg:max-w-md">
              <div className="rounded-[2.5rem] border border-border/60 bg-card p-10 shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-primary glow-sm">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold">Customização Total</h3>
                <p className="mt-4 text-muted-foreground">
                  Entendemos que cada negócio tem seu fluxo. Nosso sistema é flexível e pode ser adaptado para as regras específicas do seu setor de atuação.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Web-based</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Backup</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Diário</div>
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
                Dê o próximo passo na sua <span className="text-gradient">gestão</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Agende uma demonstração gratuita e descubra como nosso Programa de Ordem de Serviço pode transformar a produtividade da sua equipe.
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
