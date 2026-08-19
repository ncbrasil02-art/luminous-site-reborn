import { createFileRoute } from "@tanstack/react-router";
import { History, Rocket, Award, TrendingUp, Users, Sparkles, Zap, Globe2, Trophy, Star, Milestone, Building2 } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/empresa/nossa-historia";

const lpFaq = [
        { q: "Quando foi fundada?", a: "Em **2005**, em São Paulo, por 3 engenheiros com visão de fábrica de software brasileira." },
        { q: "Quantos colaboradores?", a: "Time atual de **50+ especialistas** entre engenheiros, designers, PMs e mídia paga." },
        { q: "Quais os principais marcos?", a: "**2005 fundação, 2010 sistemas B2B, 2015 marketing, 2020 mobile & cloud, 2025 IA generativa**." },
        { q: "Vocês têm escritório físico?", a: "Sim, sede em **São Paulo** com estrutura para reuniões presenciais e time distribuído no Brasil." },
      ];

export const Route = createFileRoute("/empresa/nossa-historia")({
  head: () => buildLPMeta({
    title: "Nossa História | 20 Anos de Trajetória da NC Brasil",
    description: "A trajetória da NC Brasil: de estúdio de desenvolvimento em 2005 à agência full-service com +1.500 projetos entregues em 20 anos.",
    keywords: "história nc brasil, trajetória nc brasil, história agência de tecnologia, timeline nc brasil, 20 anos nc brasil",
    canonical: URL,
    h1: "Nossa História — 20 Anos Transformando Negócios",
    breadcrumbs: [
      { name: "Home", to: "https://www.ncbrasil.com.br/" },
      { name: "Empresa", to: "https://www.ncbrasil.com.br/empresa" },
      { name: "Nossa História", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", name: "Home" }, { to: "/empresa", name: "Empresa" }, { to: "/empresa/nossa-historia", name: "Nossa História" }]}
      eyebrow="Nossa jornada"
      h1={<>Duas décadas <span className="text-gradient">construindo o futuro digital</span> do Brasil</>}
      intro={<>Da fundação em **2005** aos dias atuais, cada marco da NC Brasil foi construído com **suor de engenharia, criatividade e parceria** com nossos clientes.</>}
      stats={[{ value: "2005", name: "Ano de fundação" }, { value: "1.500+", name: "Projetos" }, { value: "50+", name: "Colaboradores" }, { value: "R$ 500Mi", name: "GMV gerado" }]}
      benefits={[
        { icon: Milestone, title: "2005 — Fundação", desc: "Nascemos como **estúdio de desenvolvimento web** em São Paulo com 3 sócios engenheiros." },
        { icon: Rocket, title: "2010 — Expansão", desc: "Lançamento da divisão de **sistemas sob demanda** e primeiros grandes contratos B2B." },
        { icon: TrendingUp, title: "2015 — Marketing", desc: "Nasce a área de **marketing digital e tráfego pago** — vira agência full-service." },
        { icon: Award, title: "2020 — Cloud & Apps", desc: "Consolidamos operação **mobile-first e cloud-native** com times remotos em 6 estados." },
      ]}
      features={[
        { icon: History, title: "Origem", desc: "Fundada em 2005 por engenheiros com visão de **democratizar software de qualidade**." },
        { icon: Sparkles, title: "Primeiro Marco", desc: "Em 2008 entregamos o **primeiro marketplace** brasileiro de compras coletivas." },
        { icon: Trophy, title: "Prêmios", desc: "Reconhecida pelo **Wave Festival, ADG Brasil e Prêmio Empresa do Ano** SP." },
        { icon: Building2, title: "Expansão", desc: "Escritório em SP + times remotos em RJ, MG, PR, PE e RS." },
        { icon: Globe2, title: "Internacional", desc: "Projetos entregues em **Portugal, EUA, Angola e Colômbia** desde 2018." },
        { icon: Star, title: "Hoje", desc: "**50+ especialistas** entregando projetos para PMEs, startups e enterprises." },
      ]}
      faq={lpFaq}
    />
  ),
});
