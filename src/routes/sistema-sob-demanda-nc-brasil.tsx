import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Code2, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Smartphone, 
  Settings, 
  CheckCircle2,
  Rocket,
  Search,
  Users,
  MessageSquare,
  LayoutDashboard
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/sistema-sob-demanda-nc-brasil";

const features = [
  {
    icon: Code2,
    title: "Desenvolvimento Exclusivo",
    description: "Software planejado e executado conforme a necessidade real de cada cliente, sem excessos ou limitações."
  },
  {
    icon: Cpu,
    title: "Engenharia de Ponta",
    description: "Utilizamos as tecnologias mais modernas para garantir performance, escalabilidade e segurança."
  },
  {
    icon: Smartphone,
    title: "Sistemas On Demand",
    description: "Soluções que acompanham o crescimento do seu negócio, permitindo evoluções constantes e ágeis."
  },
  {
    icon: LayoutDashboard,
    title: "Foco na Experiência",
    description: "Interfaces intuitivas desenhadas para otimizar o fluxo de trabalho e aumentar a produtividade da equipe."
  },
  {
    icon: ShieldCheck,
    title: "Segurança & Propriedade",
    description: "Diferente de sistemas SaaS, o código e a plataforma são seus. Total controle sobre seus dados e infraestrutura."
  },
  {
    icon: MessageSquare,
    title: "Suporte Especializado",
    description: "Consultoria técnica próxima para garantir que o sistema atenda exatamente aos seus processos internos."
  }
];

const benefits = [
  "Desenvolvimento sob medida para o seu modelo de negócio",
  "Integração total com seus processos internos atuais",
  "Escalabilidade para suportar o crescimento da empresa",
  "Redução de custos operacionais com automação",
  "Propriedade total da licença do software",
  "Agilidade na implementação de novos recursos"
];

export const Route = createFileRoute("/sistema-sob-demanda-nc-brasil")({
  head: () => buildStubMeta({
    title: "Sistema Sob Demanda · NC Brasil — Software Personalizado",
    description: "Desenvolvimento de sistemas exclusivos sob demanda. Quando os softwares de prateleira não bastam, criamos a solução ideal para seu negócio.",
    keywords: "sistema sob demanda, software personalizado, desenvolvimento sob medida, sistema on demand, nc brasil",
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
                <Rocket className="h-3.5 w-3.5" />
                Soluções Sob Medida
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                Seu negócio é único. Seu <span className="text-gradient">sistema</span> também deve ser.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Quando softwares prontos não resolvem seus desafios, nós criamos a engenharia ideal. Sistemas <strong className="text-foreground text-primary">sob demanda</strong> feitos para performar.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Agendar Consultoria
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Falar com Engenheiro
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                <img 
                  src="https://www.ncbrasil.com.br/wp-content/uploads/2018/07/m_11-3.png" 
                  alt="Desenvolvimento de Sistema Sob Demanda" 
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-orange-500" />
                    <span className="text-sm font-semibold text-white">Desenvolvimento Ágil</span>
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    100% Exclusivo
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Por que Sob Demanda?"
            title={
              <>A diferença entre <span className="text-gradient">se adaptar</span> e <span className="text-gradient">liderar</span></>
            }
            description="Muitas empresas perdem produtividade tentando se adaptar a ferramentas limitadas. Nós invertemos essa lógica."
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

      {/* Comparisons Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Potencialize seus <br />
                <span className="text-gradient">Processos Internos</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Um sistema sob demanda não é apenas um software, é uma vantagem competitiva. Ele resolve gargalos específicos que seus concorrentes ainda enfrentam com ferramentas genéricas.
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
                  Solicitar estudo de viabilidade
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:ml-auto lg:max-w-md">
              <div className="rounded-[2.5rem] border border-border/60 bg-card p-10 shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-primary glow-sm">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold">Arquitetura Escalável</h3>
                <p className="mt-4 text-muted-foreground">
                  Nossos sistemas são construídos com foco no futuro. Começamos com o core do seu negócio e expandimos conforme sua demanda cresce, sem precisar recomeçar do zero.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
                  <div>
                    <div className="text-2xl font-bold">Micro</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">API</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">First</div>
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
                Vamos transformar sua <span className="text-gradient">visão</span> em software?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Seja um novo marketplace, um CRM personalizado ou uma ferramenta de automação industrial, nossa equipe está pronta para o desafio.
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
                  Consultoria Gratuita
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  ),
});
