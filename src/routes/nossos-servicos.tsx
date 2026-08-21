import { createFileRoute, Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Globe2, ShoppingBag, Smartphone, Sparkles, LineChart, Search, Palette, Code2, Zap, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Section";
import { buildStubMeta } from "@/components/StubPage";
import { SystemsCarousel } from "@/components/SystemsCarousel";

const URL = "https://www.ncbrasil.com.br/nossos-servicos";

const services = [
  {
    icon: Globe2,
    title: "Desenvolvimento de Sites",
    description: "Sites institucionais e portais corporativos focados em performance e conversão. Design exclusivo que transmite autoridade.",
    features: ["Performance Máxima", "SEO Integrado", "Design Responsivo", "Painel Administrativo"],
    to: "/solucoes-web/desenvolvimento-de-sites"
  },
  {
    icon: ShoppingBag,
    title: "Lojas Virtuais & E-commerce",
    description: "Plataformas robustas e escaláveis para vender seus produtos online. Foco total na experiência de compra do usuário.",
    features: ["Pagamentos Seguros", "Gestão de Estoque", "Cálculo de Frete", "Mobile First"],
    to: "/solucoes-web/loja-virtual"
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Desenvolvimento de apps nativos e híbridos para iOS e Android. Transformamos sua ideia em uma ferramenta mobile de sucesso.",
    features: ["Notificações Push", "Geolocalização", "Câmera & Sensores", "Design UX Premium"],
    to: "/servicos/aplicativos"
  },
  {
    icon: Palette,
    title: "Identidade Visual & Branding",
    description: "Criamos marcas que se destacam e comunicam seus valores. Logotipos, paletas de cores e guias de marca completos.",
    features: ["Criação de Logo", "Manual da Marca", "Design System", "Papelaria Digital"],
    to: "/servicos/identidade-visual"
  },
  {
    icon: LineChart,
    title: "Marketing Digital",
    description: "Estratégias completas para atrair, converter e fidelizar clientes através de canais digitais.",
    features: ["Tráfego Pago (Ads)", "Social Media", "Email Marketing", "Inbound Marketing"],
    to: "/solucoes-web/marketing-digital"
  },
  {
    icon: Search,
    title: "SEO & Posicionamento",
    description: "Otimização para mecanismos de busca para que seu negócio apareça na primeira página do Google.",
    features: ["Auditoria Técnica", "Pesquisa de Keywords", "Link Building", "Otimização On-page"],
    to: "/solucoes-web/seo-google"
  }
];

export const Route = createFileRoute("/nossos-servicos")({
  head: () => buildStubMeta({
    title: "Nossos Serviços | Criação de Sites, LPs, SEO e Marketing Digital",
    description: "Conheça os serviços da NC Brasil: criação de sites, sistemas web, lojas virtuais, aplicativos mobile, identidade visual e marketing digital.",
    keywords: "serviços de tecnologia, criação de sites, marketing digital, agência web SP RJ",
    canonical: URL,
    ogImage: "/nossos-servicos-og.jpg",
    faq: services.map(s => ({ q: `O que é ${s.title}?`, a: s.description })),
  }),
  component: () => (
    <div className="pt-20">
      <Helmet>
        <title>Nossos Serviços · NC Brasil — Sites, Sistemas, Apps e Marketing</title>
        <meta name="description" content="Conheça os serviços da NC Brasil: criação de sites, sistemas web, lojas virtuais, aplicativos mobile, identidade visual e marketing digital." />
        <meta name="keywords" content="serviços de tecnologia, criação de sites, marketing digital, agência web SP RJ" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 -z-10 bg-hero-glow" />
        <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground list-none p-0 m-0">
                <li className="flex items-center gap-1">
                  <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li className="flex items-center gap-1">
                  <ChevronRight className="h-3 w-3 opacity-50" aria-hidden="true" />
                  <span className="text-foreground/80" aria-current="page">Nossos Serviços</span>
                </li>
              </ol>
            </nav>
          </Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Nossos Serviços
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] md:text-6xl">
                Serviços que <span className="text-gradient">transformam</span> seu negócio
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Do <strong className="text-foreground">briefing</strong> ao <strong className="text-foreground">crescimento</strong>: tudo que sua marca precisa para vender mais online e escalar resultados.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05}>
                <Link
                  to={service.to}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:glow-sm"
                >
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                  
                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                      <service.icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold">{service.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    
                    <ul className="mt-8 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto pt-8">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                        Saiba mais sobre {service.title}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLEMENTARY SYSTEMS SECTION ==================================== */}
      <section className="relative py-24 md:py-32 bg-surface/30">
        <div className="absolute inset-0 -z-10 grid-pattern opacity-20" />
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Engenharia Web"
            title={<>Sistemas que <span className="text-gradient">potencializam</span> seus serviços</>}
            description="Além de marketing e design, entregamos a inteligência de software necessária para escalar sua operação."
          />
          <div className="mt-16">
            <SystemsCarousel />
          </div>
        </div>
      </section>
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-surface p-8 text-center md:p-16">
              <div className="absolute inset-0 -z-10 bg-mesh opacity-20" />
              <div className="absolute inset-0 -z-10 grid-pattern opacity-10" />
              
              <h2 className="font-display text-3xl font-bold md:text-5xl">
                Pronto para <span className="text-gradient">alavancar</span> seu projeto?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                Fale com nossos especialistas e descubra como nossas soluções podem transformar a presença digital da sua empresa.
              </p>
              
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  to="/orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground glow-sm transition-transform hover:scale-105"
                >
                  Solicitar orçamento gratuito
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-8 py-4 text-base font-bold backdrop-blur transition-colors hover:bg-surface"
                >
                  Falar pelo WhatsApp
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  ),
});