import { Link } from "@tanstack/react-router";
import { Reveal } from "./Section";
import { ArrowRight, ChevronRight, Layout, Globe, Search, Server, LineChart, Smartphone } from "lucide-react";

const internalServices = [
  {
    title: "Criação de LPs Alta Conversão",
    to: "/solucoes-web/landing-pages",
    icon: Layout,
    desc: "Landing Pages persuasivas focadas em captação de leads e vendas."
  },
  {
    title: "SEO Google & Ranqueamento",
    to: "/solucoes-web/seo-google",
    icon: Search,
    desc: "Autoridade e primeiras posições para palavras-chave estratégicas."
  },
  {
    title: "Hospedagem de Sites e Cloud",
    to: "/solucoes-web/hospedagem",
    icon: Server,
    desc: "Infraestrutura robusta com servidores dedicados no Brasil."
  },
  {
    title: "Marketing Digital & Social Ads",
    to: "/solucoes-web/marketing-digital",
    icon: LineChart,
    desc: "Gestão de tráfego pago e conteúdos virais para redes sociais."
  },
  {
    title: "Desenvolvimento de Sites",
    to: "/solucoes-web/desenvolvimento-de-sites",
    icon: Globe,
    desc: "Sites institucionais e e-commerces de alta performance."
  },
  {
    title: "Aplicativos Web & Mobile",
    to: "/servicos/aplicativos",
    icon: Smartphone,
    desc: "Apps nativos e progressivos com tecnologia de ponta."
  }
];

export function InternalPageLinks({ currentPath }: { currentPath: string }) {
  const filtered = internalServices.filter(s => s.to !== currentPath).slice(0, 3);

  return (
    <section className="relative py-20 overflow-hidden bg-navy-950/20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                Soluções <span className="text-gradient">Interligadas</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Maximize seus resultados combinando nossas tecnologias para criar uma presença digital dominante.
              </p>
            </div>
            <Link 
              to="/nossos-servicos" 
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary-glow hover:text-white transition-colors"
            >
              Ver todos os serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((s, i) => (
            <Reveal key={s.to} delay={i * 0.1}>
              <Link
                to={s.to}
                className="group relative block overflow-hidden rounded-2xl border border-white/5 bg-navy-900/40 p-6 backdrop-blur transition-all hover:border-primary/30 hover:glow-sm hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary-glow ring-1 ring-white/10 group-hover:bg-primary group-hover:text-white transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-primary-glow transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-glow opacity-60 group-hover:opacity-100 transition-opacity">
                  Explorar
                  <ChevronRight className="h-3 w-3" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
