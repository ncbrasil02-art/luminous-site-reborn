import { createFileRoute } from "@tanstack/react-router";
import { Handshake, Building2, Store, Rocket, Award, Users, Star, Trophy, Heart, TrendingUp, Globe2, Sparkles } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/empresa/clientes";

const lpFaq = [
        { q: "Posso ver os clientes atendidos?", a: "Sim, acesse **Trabalhos Realizados** para portfolio completo com cases documentados." },
        { q: "Vocês atendem meu segmento?", a: "Provavelmente sim — atendemos **50+ segmentos** diferentes. Fale conosco para confirmar." },
        { q: "Trabalham com franquias?", a: "Sim, temos experiência com **arquitetura multi-tenant e gestão de franqueadora**." },
        { q: "Aceitam projetos de ONG?", a: "Sim, temos **condições especiais para ONGs e organizações sem fins lucrativos**." },
      ];

export const Route = createFileRoute("/empresa/clientes")({
  head: () => buildLPMeta({
    title: "Nossos Clientes | Marcas que Confiam na NC Brasil",
    description: "Marcas e empresas que confiam na NC Brasil: de startups a enterprises. Cases de sucesso em e-commerce, sistemas, apps e marketing digital.",
    keywords: "clientes nc brasil, cases de sucesso, marcas atendidas, portfólio clientes, empresas atendidas nc brasil",
    canonical: URL,
    h1: "Marcas que Confiam na NC Brasil",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Empresa", to: "https://www.ncbrasil.com.br/empresa" },
      { label: "Clientes", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/empresa", label: "Empresa" }, { to: "/empresa/clientes", label: "Clientes" }]}
      subtitle="Nossos clientes"
      h1={<>Marcas que <span className="text-gradient">confiam na NC Brasil</span></>}
      intro={<>De **startups em pré-seed a grandes corporações**, mais de 800 marcas ativas escolhem a NC Brasil como parceira estratégica de tecnologia e marketing.</>}
      stats={[{ value: "800+", label: "Clientes ativos" }, { value: "1.500+", label: "Projetos entregues" }, { value: "80%", label: "Retenção +3 anos" }, { value: "4,9⭐", label: "Satisfação" }]}
      benefits={[
        { icon: Building2, title: "Enterprises", desc: "Grandes corporações com **operações complexas, multi-tenant e alto SLA**." },
        { icon: Rocket, title: "Startups", desc: "Aceleramos **MVPs, produtos SaaS e captação de rodadas** com engenharia sênior." },
        { icon: Store, title: "PMEs", desc: "Sites, e-commerces e sistemas de gestão para **negócios que precisam escalar**." },
        { icon: Handshake, title: "Governo & ONGs", desc: "Projetos com **transparência, LGPD e conformidade legal** para setor público." },
      ]}
      features={[
        { icon: Trophy, title: "Retenção Alta", desc: "**80% dos clientes** estão conosco há mais de 3 anos — relacionamento é nosso maior ativo." },
        { icon: Star, title: "Depoimentos Reais", desc: "Cases documentados no **portfólio, com métricas e resultados públicos**." },
        { icon: Users, title: "Multi-Setor", desc: "Varejo, saúde, jurídico, imobiliário, educação, indústria, food e agro." },
        { icon: TrendingUp, title: "Cases de ROI", desc: "Clientes com **ROI de até 10x** em campanhas e sistemas entregues." },
        { icon: Globe2, title: "Nacional & Internacional", desc: "Atendemos **Brasil inteiro + Portugal, EUA, Angola e Colômbia**." },
        { icon: Heart, title: "Parcerias Longas", desc: "Média de **5 anos de relacionamento** com clientes ativos." },
      ]}
      faq={lpFaq}
    />
  ),
});
