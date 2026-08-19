import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Palette, 
  PenTool, 
  Zap, 
  CheckCircle2, 
  Layers, 
  Target, 
  ShieldCheck, 
  Layout, 
  Sparkles,
  Eye,
  Type
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/criacao-de-logomarcas";

const features = [
  {
    icon: Target,
    title: "Conceito Estratégico",
    description: "Cada curva e cor é pensada para transmitir a essência e os valores da sua empresa para o público certo."
  },
  {
    icon: Sparkles,
    title: "Design Atemporal",
    description: "Criamos marcas que resistem ao tempo, evitando modismos passageiros e mantendo a relevância por décadas."
  },
  {
    icon: Eye,
    title: "Alto Impacto Visual",
    description: "Logotipos desenhados para se destacar em qualquer meio, do cartão de visitas ao outdoor digital."
  },
  {
    icon: Type,
    title: "Tipografia Exclusiva",
    description: "Seleção e ajuste de fontes que reforçam a personalidade da marca e garantem legibilidade perfeita."
  },
  {
    icon: Palette,
    title: "Paleta de Cores",
    description: "Estudo cromático baseado em psicologia das cores para gerar a conexão emocional desejada com o cliente."
  },
  {
    icon: ShieldCheck,
    title: "Pronta para Registro",
    description: "Desenvolvemos marcas únicas, com alta originalidade, facilitando o processo de registro no INPI."
  }
];

export const Route = createFileRoute("/portfolio/criacao-de-logomarcas")({
  head: () => buildStubMeta({
    title: "Criação de Logomarcas Profissionais · NC Brasil — Design de Logotipos",
    description: "Criação de logomarcas modernas, estratégicas e atemporais. Dê uma identidade única e profissional para o seu negócio se destacar no mercado.",
    keywords: "criação de logomarca, design de logotipo, criar marca profissional, branding, design gráfico sp",
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
                <PenTool className="h-3.5 w-3.5" />
                Branding & Design
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                A marca que seu <span className="text-gradient">sucesso</span> merece ter.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                O logotipo é a porta de entrada do seu negócio. Desenvolvemos logomarcas <strong className="text-foreground text-primary">profissionais e estratégicas</strong> que transmitem confiança e autoridade instantânea.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Criar minha Logomarca
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/portfolio/logotipos-criados"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Ver Portfólio
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                <img 
                  src="https://ncbrasil.com.br/wp-content/uploads/2016/05/desenvolvimento-webdesign-70.jpg" 
                  alt="Processo de Criação de Logomarca" 
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-yellow-500" />
                    <span className="text-sm font-semibold text-white">Design Estratégico</span>
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    Vetor & Alta Resolução
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
            eyebrow="Nossa Entrega"
            title={
              <>Design focado em <span className="text-gradient">resultados</span></>
            }
            description="Uma logomarca amadora pode destruir a percepção de valor do seu produto. Nós criamos marcas que valorizam seu negócio."
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

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-card p-8 text-center md:p-16 border border-border/60">
              <div className="absolute inset-0 -z-10 bg-hero-glow opacity-50" />
              <div className="absolute inset-0 -z-10 grid-pattern opacity-10" />
              
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Sua empresa merece uma <span className="text-gradient">marca forte</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Fale com nossos designers e descubra como podemos criar uma identidade visual que vai elevar o patamar do seu negócio.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Falar com Designer
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  ),
});
