import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Terminal,
  CheckCircle2,
  Lock,
  Workflow,
  Cpu
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/criacao-de-sistemas";

const features = [
  {
    icon: Database,
    title: "ERPs Customizados",
    description: "Sistemas de gestão empresarial moldados exatamente ao seu fluxo de trabalho, integrando todos os departamentos."
  },
  {
    icon: Users,
    title: "Intranets & Portais",
    description: "Áreas restritas seguras para comunicação interna, gestão de documentos e automação de processos corporativos."
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Digitalize fluxos manuais, reduza erros humanos e aumente a produtividade com algoritmos inteligentes."
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards de BI",
    description: "Visualização de dados em tempo real para tomada de decisões estratégicas baseadas em indicadores reais."
  },
  {
    icon: Lock,
    title: "Segurança de Dados",
    description: "Arquitetura robusta com criptografia, backups automáticos e conformidade com a LGPD."
  },
  {
    icon: Cpu,
    title: "Sistemas Escaláveis",
    description: "Desenvolvimento preparado para o crescimento do seu negócio, suportando milhares de requisições simultâneas."
  }
];

const benefits = [
  "Arquitetura de software moderna e de alto desempenho",
  "Engenharia sob medida para desafios de qualquer complexidade",
  "Propriedade total do código-fonte após o desenvolvimento",
  "Integração via API com outros sistemas e ferramentas",
  "Design de interface (UI/UX) intuitivo para o usuário final",
  "Suporte e manutenção técnica contínua"
];

export const Route = createFileRoute("/portfolio/criacao-de-sistemas")({
  head: () => buildStubMeta({
    title: "Criação de Sistemas Web Personalizados · NC Brasil — Engenharia de Software",
    description: "Desenvolvemos sistemas web sob medida: ERPs, intranets, automação de processos e plataformas complexas. Engenharia de ponta para sua empresa.",
    keywords: "criação de sistemas, sistemas web sp, erp personalizado, automação comercial, desenvolvimento de software",
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
                <Code2 className="h-3.5 w-3.5" />
                Engenharia de Software Sob Demanda
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                Sistemas que resolvem o que o <span className="text-gradient">pronto não resolve</span>.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Não adaptamos seu negócio a um software. Desenvolvemos o <strong className="text-foreground text-primary">software ideal</strong> para o seu negócio. Engenharia de alta performance e segurança.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Consultoria Técnica
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                  alt="Interface de Sistema Complexo" 
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-white">Full-Stack Engineering</span>
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    Clean Code Architecture
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-12 border-y border-border/50 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale transition-all hover:grayscale-0">
            {["Node.js", "Python", "React", "PostgreSQL", "Redis", "Docker", "AWS", "Google Cloud"].map((tech) => (
              <span key={tech} className="text-sm font-bold tracking-widest uppercase">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            subtitle="Nossas Especialidades"
            title={
              <>Soluções de <span className="text-gradient">alta complexidade</span></>
            }
            description="De ERPs robustos a portais corporativos, nossa engenharia é preparada para qualquer desafio de software."
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

      {/* Customization / Ownership Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                O software é seu. <br />
                <span className="text-gradient">O controle é total.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Diferente de sistemas engessados, nossas soluções customizadas permitem que você seja o dono do código e dos dados, sem ficar refém de mensalidades ou limitações técnicas.
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
                  Agendar reunião estratégica
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:ml-auto lg:max-w-md">
              <div className="rounded-[2.5rem] border border-border/60 bg-card p-10 shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-primary glow-sm">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold">Arquitetura de Ponta</h3>
                <p className="mt-4 text-muted-foreground">
                  Trabalhamos com as tecnologias mais modernas do mercado (React, Node, Cloud) para garantir que seu sistema seja rápido, seguro e fácil de manter.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
                  <div>
                    <div className="text-2xl font-bold">LGPD</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Compliance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Escalável</div>
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
                Pronto para digitalizar <span className="text-gradient">seu negócio</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Fale com nossos especialistas e descubra como a engenharia da NC Brasil pode criar a solução ideal para o seu desafio técnico.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Solicitar Demonstração
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
