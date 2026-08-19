import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Palette, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  Layout, 
  Sparkles,
  Eye,
  Type,
  Briefcase,
  Globe
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/identidade-visual";

const components = [
  {
    icon: Palette,
    title: "Manual da Marca",
    description: "Guia completo com regras de aplicação, tipografia, cores e proibição para garantir a consistência visual em qualquer meio."
  },
  {
    icon: Layout,
    title: "Papelaria Corporativa",
    description: "Design de cartões de visita, timbrados, envelopes e assinaturas de e-mail que reforçam o profissionalismo."
  },
  {
    icon: Globe,
    title: "Presença Digital",
    description: "Adaptação da marca para redes sociais, sites e aplicativos, garantindo que a alma do negócio brilhe em todas as telas."
  },
  {
    icon: Type,
    title: "Design System",
    description: "Padronização de elementos visuais (botões, ícones, formulários) para produtos digitais escaláveis e harmônicos."
  },
  {
    icon: Layers,
    title: "Aplicações Diversas",
    description: "Design para uniformes, frotas, brindes e sinalização interna, levando sua marca para o mundo físico com excelência."
  },
  {
    icon: ShieldCheck,
    title: "Consistência de Branding",
    description: "Garantimos que cada ponto de contato do cliente com sua empresa transmita a mesma mensagem e valores."
  }
];

export const Route = createFileRoute("/portfolio/identidade-visual")({
  head: () => buildStubMeta({
    title: "Identidade Visual Completa & Branding · NC Brasil",
    description: "Criação de identidade visual profissional: logotipo, manual da marca, papelaria e design system. Transformamos empresas em marcas memoráveis.",
    keywords: "identidade visual, branding profissional, manual da marca, design system, criação de marca, empresa de branding sp",
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
                <Sparkles className="h-3.5 w-3.5" />
                Branding de Alto Nível
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                Identidade Visual com <span className="text-gradient">alma</span> e estratégia.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Muito mais que um logotipo. Desenvolvemos o <strong className="text-foreground text-primary">DNA visual</strong> completo da sua empresa, criando uma conexão profunda e duradoura com seu público-alvo.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Solicitar Consultoria de Branding
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/portfolio/criacao-de-logomarcas"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Ver Logomarcas
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                <img 
                  src="https://ncbrasil.com.br/wp-content/uploads/2016/02/criacao-de-sites-rj-53.jpg" 
                  alt="Processo de Branding e Identidade Visual" 
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-purple-500" />
                    <span className="text-sm font-semibold text-white">Full Branding Solution</span>
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    Estratégia & Design
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="O que compõe sua identidade"
            title={
              <>Uma presença <span className="text-gradient">consistente</span> em todos os canais</>
            }
            description="Desenvolvemos todos os elementos necessários para que sua marca seja reconhecida instantaneamente, não importa onde ela apareça."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {components.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-sm">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
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
                Pronto para <span className="text-gradient">profissionalizar</span> sua marca?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Seja para uma startup que está nascendo ou para um rebranding de uma empresa consolidada, nossa equipe está pronta para criar o futuro da sua marca.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Ver Proposta de Identidade Visual
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
