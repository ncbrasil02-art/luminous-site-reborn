import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  Code2, 
  Database, 
  Gavel, 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Layers, 
  ShieldCheck,
  Car,
  Ticket,
  Gift,
  Coins,
  Globe,
  Store,
  Key,
  Calendar,
  Map,
  MessageSquare,
  Home,
  Share2,
  Church,
  Search
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/nossos-sistemas";

const mainSystems = [
  {
    icon: Gavel,
    title: "Sistemas de Leilão Eletrônico",
    description: "Plataformas completas para leilões judiciais e extrajudiciais, com lances em tempo real, gestão de lotes e integração com editais.",
    features: ["Lances em Tempo Real", "Auditagem Completa", "Gestão de Arrematantes", "Homologação Jurídica"],
    to: "/sistema-de-leilao"
  },
  {
    icon: ShoppingCart,
    title: "Marketplaces & Multi-lojas",
    description: "Estruturas complexas para múltiplos vendedores, com split de pagamentos, dashboards individuais e gestão centralizada.",
    features: ["Split de Pagamentos", "Painel do Vendedor", "Cálculo de Comissões", "Logística Integrada"],
    to: "/portfolio/lojas-virtuais-criadas"
  },
  {
    icon: Users,
    title: "Sistemas de Compra Coletiva",
    description: "Plataformas de ofertas com gatilhos de escassez, gestão de cupons e validação via QR Code para estabelecimentos parceiros.",
    features: ["Controle de Cupons", "Validação por App", "Relatórios de Vendas", "Integração de Parceiros"],
    to: "/portfolio/sistema-de-compra-coletiva"
  }
];

const catalogSystems = [
  { icon: Gavel, title: "Sistema de Leilão", to: "/sistema-de-leilao" },
  { icon: Gavel, title: "Sistema de Leilão Rural Online", to: "/orcamento" },
  { icon: Car, title: "Classificados de Veículos", to: "/orcamento" },
  { icon: Ticket, title: "Sistema de Cupom Descontos", to: "/orcamento" },
  { icon: Gift, title: "Sistema de Raspadinha On-line", to: "/orcamento" },
  { icon: Coins, title: "Sistema de Rifas", to: "/orcamento" },
  { icon: Globe, title: "Script Plataforma Chinesa", to: "/orcamento" },
  { icon: Store, title: "MarketPlace de Ofertas", to: "/orcamento" },
  { icon: Key, title: "Revenda de Veículos", to: "/orcamento" },
  { icon: Calendar, title: "Sistema de Ingressos Online", to: "/orcamento" },
  { icon: Coins, title: "Leilão de Centavos", to: "/orcamento" },
  { icon: Map, title: "Sistema Guia Comercial", to: "/orcamento" },
  { icon: MessageSquare, title: "Atendimento On-line", to: "/orcamento" },
  { icon: Home, title: "Site para Imobiliária", to: "/orcamento" },
  { icon: Share2, title: "Sistema de Afiliados", to: "/orcamento" },
  { icon: Church, title: "Sites para Igrejas", to: "/orcamento" },
];

export const Route = createFileRoute("/nossos-sistemas")({
  head: () => buildStubMeta({
    title: "Nossos Sistemas · NC Brasil — Plataformas Web Personalizadas",
    description: "Sistemas web sob demanda: leilões eletrônicos, marketplaces, intranets, ERPs, sistemas de cupons e plataformas customizadas.",
    keywords: "criação de sistemas, sistema sob demanda, leilão eletrônico, marketplace, intranet, ERP customizado",
    canonical: URL,
  }),
  component: () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                <Layers className="h-3.5 w-3.5" />
                Nossos Sistemas
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
                Sistemas <span className="text-gradient">sob demanda</span> que escalam
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Desenvolvemos engenharia de software sob medida para resolver <strong className="text-foreground">desafios complexos</strong> e otimizar processos que sistemas prontos não resolvem.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Categorias Principais"
            title={<>Sistemas <span className="text-gradient">Core</span></>}
            description="Nossas soluções de engenharia mais robustas e escaláveis para negócios de alta complexidade."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainSystems.map((system, i) => (
              <Reveal key={system.title} delay={i * 0.05}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-sm">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                  
                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                      <system.icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold">{system.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {system.description}
                    </p>
                    
                    <ul className="mt-8 space-y-3">
                      {system.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                          <Code2 className="h-3 w-3 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto pt-8">
                      <Link
                        to={system.to}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        Ver detalhes
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Catalog Section */}
      <section className="py-24 bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Portfólio de Scripts & Softwares"
            title={<>Catálogo <span className="text-gradient">Completo</span> de Soluções</>}
            description="Explore nossa ampla gama de sistemas prontos para implantação imediata em diversos setores."
          />
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {catalogSystems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.02}>
                <Link
                  to={item.to}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:bg-primary/5 hover:translate-x-1"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold leading-tight transition-colors group-hover:text-primary">
                      {item.title}
                    </span>
                    <span className="mt-1 flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Saiba mais <ArrowRight className="h-2.5 w-2.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack / Banner */}
      <section className="py-12 border-y border-border/50 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale transition-all hover:grayscale-0">
            {["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "Next.js", "Flutter"].map((tech) => (
              <span key={tech} className="text-sm font-bold tracking-widest uppercase">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-card p-8 text-center md:p-16 border border-border/60">
              <div className="absolute inset-0 -z-10 bg-hero-glow opacity-50" />
              <div className="absolute inset-0 -z-10 grid-pattern opacity-10" />
              
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Tem um desafio <span className="text-gradient">técnico</span> para nós?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Nossa equipe de engenharia está pronta para desenhar a arquitetura ideal para o seu sistema personalizado.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Agendar consultoria técnica
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Conversar agora
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  ),
});