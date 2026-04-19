import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Palette, 
  Layers, 
  Zap, 
  CheckCircle2, 
  PenTool, 
  Layout, 
  Sparkles,
  Search,
  Maximize2
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/logotipos-criados";

const logotypes = [
  { src: "https://ncbrasil.com.br/wp-content/uploads/2015/01/sistemas-aplicativos-desenvolvimento-53.jpg", alt: "Logotipo Criado pela NC Brasil" },
  { src: "https://ncbrasil.com.br/wp-content/uploads/2015/01/sistemas-aplicativos-desenvolvimento-52.jpg", alt: "Design de Logotipo Profissional" },
  { src: "https://ncbrasil.com.br/wp-content/uploads/2015/01/sistemas-aplicativos-desenvolvimento-51.jpg", alt: "Identidade Visual Corporativa" },
  { src: "https://ncbrasil.com.br/wp-content/uploads/2015/01/sistemas-aplicativos-desenvolvimento-50.jpg", alt: "Marca Exclusiva para Empresa" },
  { src: "https://ncbrasil.com.br/wp-content/uploads/2015/01/sistemas-aplicativos-desenvolvimento-49.jpg", alt: "Criação de Logo e Branding" },
  { src: "https://ncbrasil.com.br/wp-content/uploads/2015/01/sistemas-aplicativos-desenvolvimento-56.jpg", alt: "Estudo de Logotipo" },
  { src: "https://ncbrasil.com.br/wp-content/uploads/2015/01/sistemas-aplicativos-desenvolvimento-57.jpg", alt: "Conceito de Marca" },
  { src: "https://ncbrasil.com.br/wp-content/uploads/2015/01/sistemas-aplicativos-desenvolvimento-48.jpg", alt: "Vetorização e Design de Logo" },
];

export const Route = createFileRoute("/portfolio/logotipos-criados")({
  head: () => buildStubMeta({
    title: "Galeria de Logotipos Criados · NC Brasil — Portfólio de Design",
    description: "Confira nossa galeria de logotipos e marcas criadas para empresas de diversos setores. Design estratégico e atemporal.",
    keywords: "logotipos criados, galeria de logos, design de logotipo, portfólio de marcas, nc brasil design",
    canonical: URL,
  }),
  component: () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              <Palette className="h-3.5 w-3.5" />
              Galeria de Design
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
              Marcas que contam <br />
              <span className="text-gradient">histórias de sucesso</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Confira uma seleção de logotipos que desenvolvemos, onde cada detalhe foi pensado para transmitir a essência e os valores de cada negócio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {logotypes.map((logo, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40 hover:glow-sm hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-primary p-3 text-white shadow-lg">
                      <Maximize2 className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-surface/30">
        <div className="mx-auto max-w-5xl px-4 md:px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-5xl">
              Sua marca pode ser a <span className="text-gradient">próxima</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
              Estamos prontos para criar um logotipo que vai diferenciar sua empresa e gerar valor real para sua marca.
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
                to="/portfolio/criacao-de-logomarcas"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
              >
                Processo de Criação
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  ),
});
