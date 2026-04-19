import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Gavel, LayoutDashboard, ShoppingCart, Users, Layers, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/nossos-sistemas";

const systems = [
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
  },
  {
    icon: LayoutDashboard,
    title: "Intranets & ERPs Customizados",
    description: "Sistemas internos para gestão de processos, documentos e comunicação corporativa, moldados exatamente ao seu fluxo de trabalho.",
    features: ["Gestão de Processos", "Controle de Acesso", "BI & Dashboards", "Segurança de Dados"],
    to: "/portfolio/criacao-de-sistemas"
  },
  {
    icon: Database,
    title: "Sistemas de Gestão de Dados",
    description: "Soluções para coleta, tratamento e visualização de grandes volumes de dados para tomada de decisão estratégica.",
    features: ["APIs Escaláveis", "Migração de Dados", "Segurança Avançada", "Performance Otimizada"],
    to: "/portfolio/criacao-de-sistemas"
  },
  {
    icon: ShieldCheck,
    title: "Sistemas de Área Restrita",
    description: "Plataformas seguras para membros, cursos online, portais do cliente e áreas de suporte com acesso controlado.",
    features: ["Login Multifator", "Gestão de Assinaturas", "Download Seguro", "Log de Atividades"],
    to: "/portfolio/criacao-de-sistemas"
  }
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

      {/* Systems Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system, i) => (
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
                        Ver cases de {system.title}
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