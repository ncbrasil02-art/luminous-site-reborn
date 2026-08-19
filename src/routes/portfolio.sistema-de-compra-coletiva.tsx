import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  ShoppingCart, 
  Ticket, 
  Users, 
  Smartphone, 
  MapPin, 
  Zap, 
  Clock, 
  ShieldCheck, 
  LayoutDashboard, 
  BarChart3, 
  QrCode,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  Gift,
  Share2
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";

const URL = "https://www.ncbrasil.com.br/portfolio/sistema-de-compra-coletiva";

const features = [
  {
    icon: ShoppingCart,
    title: "Marketplace de Ofertas",
    description: "Plataforma multi-empresa onde parceiros podem cadastrar suas próprias ofertas e gerenciar suas vendas."
  },
  {
    icon: QrCode,
    title: "Validação via QR Code",
    description: "App exclusivo para o lojista validar o cupom do cliente instantaneamente no estabelecimento."
  },
  {
    icon: Clock,
    title: "Gatilhos de Escassez",
    description: "Contadores regressivos e limites de estoque para estimular a compra por impulso e aumentar a conversão."
  },
  {
    icon: MapPin,
    title: "Geolocalização",
    description: "Filtro de ofertas por cidade ou proximidade, mostrando os melhores descontos perto do usuário."
  },
  {
    icon: CreditCard,
    title: "Split de Pagamento",
    description: "Integração com gateways para divisão automática de valores entre o portal e o lojista parceiro."
  },
  {
    icon: BarChart3,
    title: "Relatórios Estratégicos",
    description: "Painel completo de BI com métricas de vendas, comportamento do usuário e performance de parceiros."
  }
];

const benefits = [
  "Software 100% proprietário (sem taxas mensais por venda)",
  "Gestão simplificada de cupons e vouchers digitais",
  "Sistema de Afiliados integrado para expansão viral",
  "Customização total de layout e regras de negócio",
  "Infraestrutura escalável para picos de tráfego (Black Friday)",
  "Suporte técnico e treinamento para sua equipe"
];

export const Route = createFileRoute("/portfolio/sistema-de-compra-coletiva")({
  head: () => buildStubMeta({
    title: "Sistema de Compra Coletiva & Marketplace de Ofertas · NC Brasil",
    description: "Plataforma completa de compra coletiva: gestão de ofertas, parceiros, vouchers, pagamentos e validação por QR Code. Comece seu portal hoje.",
    keywords: "sistema de compra coletiva, plataforma de ofertas, script compras coletivas, marketplace de descontos, cupom de desconto",
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
                <Ticket className="h-3.5 w-3.5" />
                Solução para Portais de Ofertas
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                O seu próprio <span className="text-gradient">Marketplace</span> de compras coletivas.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Uma plataforma robusta para gerenciar ofertas, parceiros e cupons. Tecnologia de ponta com <strong className="text-foreground text-primary">propriedade total</strong> e sem mensalidades.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Ver Demonstração
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Falar com especialista
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-2 backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Interface do Sistema de Compra Coletiva" 
                  className="aspect-[4/3] w-full rounded-2xl object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                    <span className="text-sm font-semibold text-white">Oferta Ativa: 742 lances</span>
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    Sincronização Cloud
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Cupons Gerados", value: "2.5M+" },
              { label: "Empresas Parceiras", value: "150+" },
              { label: "Tempo de Resposta", value: "< 200ms" },
              { label: "Disponibilidade", value: "99.9%" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Funcionalidades"
            title={
              <>Tudo o que você precisa para <span className="text-gradient">liderar</span> o mercado</>
            }
            description="Desenvolvemos uma engenharia completa para que você foque apenas em fechar parcerias e vender."
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

      {/* Competitive Advantages */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                Sua plataforma, <br />
                <span className="text-gradient">suas regras.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Diferente de sistemas SaaS com taxas ocultas, nossa solução é vendida como licença vitalícia. Você tem o controle total dos seus dados, parceiros e faturamento.
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
                  Solicitar orçamento detalhado
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:ml-auto lg:max-w-md">
              <div className="rounded-[2.5rem] border border-border/60 bg-card p-10 shadow-xl">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-primary glow-sm">
                  <LayoutDashboard className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold">Painel do Lojista</h3>
                <p className="mt-4 text-muted-foreground">
                  Cada parceiro possui sua área administrativa para acompanhar vendas, baixar cupons validados e gerenciar seu próprio fluxo de caixa dentro do portal.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8">
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Autônomo</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Real</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Time Data</div>
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
                Lance seu portal de <span className="text-gradient">ofertas</span> em tempo recorde
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Agende uma conversa e veja como podemos customizar nossa tecnologia para o seu modelo de negócio de compra coletiva ou marketplace de cupons.
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
