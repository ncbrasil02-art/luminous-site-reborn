import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Layout, 
  CheckCircle2,
  Code2,
  Globe,
  Users,
  MessageSquare,
  BarChart3,
  Apple,
  Play
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/criacao-de-aplicativos";

const features = [
  {
    icon: Apple,
    title: "iOS (iPhone & iPad)",
    description: "Desenvolvimento de apps robustos e elegantes para o ecossistema Apple, focados em performance e UX nativa."
  },
  {
    icon: Play,
    title: "Android Apps",
    description: "Criação de aplicativos para a maior base de usuários do mundo, com total compatibilidade entre diferentes dispositivos."
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento Híbrido",
    description: "Tecnologias que permitem um único código para iOS e Android, reduzindo custos e tempo de manutenção."
  },
  {
    icon: Layout,
    title: "Design de Interface UI/UX",
    description: "Interfaces intuitivas e profissionais desenhadas para encantar o usuário e facilitar a navegação."
  },
  {
    icon: Code2,
    title: "Integração de APIs",
    description: "Conectamos seu aplicativo aos seus sistemas internos, gateways de pagamento e serviços de terceiros."
  },
  {
    icon: BarChart3,
    title: "Analytics & Métricas",
    description: "Acompanhe o comportamento dos seus usuários e o desempenho do seu app com ferramentas de BI integradas."
  }
];

const steps = [
  {
    title: "Briefing & Estratégia",
    desc: "Entendemos seu modelo de negócio e definimos as funcionalidades essenciais."
  },
  {
    title: "Prototipagem UX",
    desc: "Criamos a estrutura visual e fluxos de navegação antes de iniciar o código."
  },
  {
    title: "Desenvolvimento Ágil",
    desc: "Sua solução ganha vida com ciclos de entrega constantes e transparentes."
  },
  {
    title: "Testes & Publicação",
    desc: "Garantia de qualidade e assessoria completa para publicação nas lojas (App Store e Play Store)."
  }
];

export const Route = createFileRoute("/portfolio/criacao-de-aplicativos")({
  head: () => buildStubMeta({
    title: "Criação de Aplicativos Mobile Profissionais · NC Brasil",
    description: "Desenvolvimento de apps iOS e Android sob medida. UX fluida, performance nativa e integração total com seus sistemas.",
    keywords: "criação de aplicativos, desenvolvimento mobile, app iOS Android, aplicativo personalizado, empresa de apps sp",
    canonical: URL,
    ogImage: "/criacao-de-apps-og.jpg",
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
                <Smartphone className="h-3.5 w-3.5" />
                Mobile First Solutions
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                O seu negócio na <span className="text-gradient">palma da mão</span> dos seus clientes.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Desenvolvemos aplicativos mobile que de fato agregam valor ao seu negócio. Tecnologia de ponta com <strong className="text-foreground text-primary">UX de alta performance</strong> e performance impecável.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Orçar meu Aplicativo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/trabalhos-realizados"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Ver Casos de Sucesso
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                <img 
                  src="https://ncbrasil.com.br/wp-content/uploads/2016/05/desenvolvimento-webdesign-109.jpg" 
                  alt="Desenvolvimento de Aplicativos Mobile" 
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                    <span className="text-sm font-semibold text-white">Pronto para iOS & Android</span>
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    Nativo & Híbrido
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-12">
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Expertise técnica em:</span>
            <div className="flex flex-wrap items-center justify-center gap-8 font-display text-lg font-bold opacity-60">
              <span>React Native</span>
              <span>Flutter</span>
              <span>Swift / iOS</span>
              <span>Kotlin / Android</span>
              <span>Node.js API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Nossos Diferenciais"
            title={
              <>Tecnologia que <span className="text-gradient">conecta</span> sua empresa ao futuro</>
            }
            description="Desenvolvemos aplicativos focados em escala, segurança e, acima de tudo, na facilidade de uso."
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

      {/* Methodology Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Como criamos seu <br />
                <span className="text-gradient">App de Sucesso?</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Temos uma metodologia clara e eficiente para transformar sua ideia em um produto digital pronto para o mercado, minimizando riscos e otimizando recursos.
              </p>
              
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-primary/30">
                    <h4 className="font-bold text-foreground">{step.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 font-display text-lg font-bold text-primary transition-colors hover:text-primary/80"
                >
                  Agendar conversa estratégica
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:ml-auto lg:max-w-md">
              <div className="rounded-[2.5rem] border border-border/60 bg-card p-10 shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-primary glow-sm">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold">Performance Extrema</h3>
                <p className="mt-4 text-muted-foreground">
                  Ninguém gosta de apps lentos. Nossa engenharia foca em tempos de resposta imediatos e consumo otimizado de bateria e dados.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
                  <div>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">&lt; 100ms</div>
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
                Vamos tirar seu <span className="text-gradient">App</span> do papel?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Agende uma reunião de consultoria gratuita e veja como nossa equipe de engenharia pode transformar seu projeto mobile em realidade.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Solicitar Proposta
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Falar com Especialista
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  ),
});
