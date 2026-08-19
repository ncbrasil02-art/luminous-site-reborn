import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  BarChart3, 
  Smartphone, 
  Zap, 
  Search, 
  ShieldCheck, 
  Layers, 
  Store, 
  Users,
  CheckCircle2,
  TrendingUp,
  Globe2,
  Package
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/lojas-virtuais-criadas";

const features = [
  {
    icon: Globe2,
    title: "Checkout de Alta Performance",
    description: "Processo de compra otimizado para reduzir o abandono de carrinho e maximizar suas vendas em poucos cliques."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Lojas 100% responsivas e otimizadas para compras via smartphone, onde ocorre a maioria das vendas atuais."
  },
  {
    icon: CreditCard,
    title: "Pagamentos Integrados",
    description: "Conexão nativa com Mercado Pago, Pagar.me, PagSeguro e outros, com split de pagamentos para marketplaces."
  },
  {
    icon: Truck,
    title: "Logística & Frete",
    description: "Cálculo em tempo real com Correios, Melhor Envio e transportadoras personalizadas para todo o Brasil."
  },
  {
    icon: Search,
    title: "SEO E-commerce",
    description: "Sua loja já nasce indexada e otimizada para os motores de busca, garantindo visibilidade orgânica."
  },
  {
    icon: Package,
    title: "Gestão de Estoque",
    description: "Controle completo de inventário, variações de produtos (cor, tamanho) e integração com ERPs (Bling, Tiny)."
  }
];

const benefits = [
  "Layout exclusivo e personalizado para sua marca",
  "Sem mensalidades fixas ou taxas sobre vendas",
  "Plataforma proprietária e escalável",
  "Certificado de segurança SSL e infraestrutura robusta",
  "Suporte especializado para configuração e lançamento",
  "Integração com Instagram Shopping e Google Shopping"
];

export const Route = createFileRoute("/portfolio/lojas-virtuais-criadas")({
  head: () => buildStubMeta({
    title: "Criação de Lojas Virtuais & E-commerce Profissional · NC Brasil",
    description: "Criação de lojas virtuais de alta conversão. E-commerce completo com pagamentos, frete, SEO e design premium para vender sem limites.",
    keywords: "criação de loja virtual, e-commerce, plataforma de vendas online, criar loja virtual, loja online sp",
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
                <ShoppingBag className="h-3.5 w-3.5" />
                E-commerce & Marketplace
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                Lojas virtuais que <span className="text-gradient">convertem</span> visitantes em clientes.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Tecnologia cinematográfica para o seu comércio eletrônico. Uma loja rápida, segura e focada na melhor <strong className="text-foreground text-primary">experiência de compra</strong>.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Quero minha loja virtual
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/trabalhos-realizados"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Ver portfólio
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                <img 
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Interface de E-commerce Premium" 
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-blue-500" />
                    <span className="text-sm font-semibold text-white">Venda em Tempo Real</span>
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    Otimização de Conversão
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 border-y border-border/50 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-12">
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Tecnologias Integradas:</span>
            <div className="flex flex-wrap items-center justify-center gap-8 font-display text-lg font-bold opacity-60">
              <span>MERCADO PAGO</span>
              <span>PAGSEGUURO</span>
              <span>CORREIOS</span>
              <span>JADLOG</span>
              <span>BLING</span>
              <span>TINY ERP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            subtitle="Recursos Premium"
            title={
              <>Engenharia focada em <span className="text-gradient">vendas</span></>
            }
            description="Desenvolvemos lojas virtuais que não são apenas bonitas, mas ferramentas poderosas de faturamento."
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
                Escalabilidade sem <br />
                <span className="text-gradient">limites ou taxas.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Diferente de plataformas de aluguel que cobram porcentagem sobre suas vendas, com a NC Brasil você tem uma plataforma própria. Todo o lucro das suas vendas é seu.
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
                  Solicitar consultoria para meu e-commerce
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:ml-auto lg:max-w-md">
              <div className="rounded-[2.5rem] border border-border/60 bg-card p-10 shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-primary glow-sm">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold">Black Friday Ready</h3>
                <p className="mt-4 text-muted-foreground">
                  Nossas lojas são construídas para suportar altos picos de tráfego, garantindo que seu site não caia no momento mais importante do ano para o seu negócio.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Responsivo</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">High</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Conversion</div>
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
                Pronto para <span className="text-gradient">vender mais</span> online?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Agende uma conversa com nossos especialistas em e-commerce e descubra como podemos transformar sua ideia em uma máquina de vendas.
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
