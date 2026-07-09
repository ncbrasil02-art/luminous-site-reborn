import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Users, TrendingUp, Target, MessageSquare, ClipboardCheck, Compass, Award, Zap, LineChart, Rocket, Search } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/servicos/consultoria";

export const Route = createFileRoute("/servicos/consultoria")({
  head: () => buildLPMeta({
    title: "Consultoria em Tecnologia e Marketing Digital | Estratégia Sob Medida",
    description: "Consultoria estratégica em tecnologia, transformação digital e marketing. Diagnóstico, roadmap e mentoria para acelerar seu crescimento.",
    keywords: "consultoria em tecnologia, consultoria em marketing digital, consultoria transformação digital, mentoria de negócios",
    canonical: URL,
    h1: "Consultoria em Tecnologia e Marketing Digital",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Serviços", url: "https://www.ncbrasil.com.br/servicos" },
      { name: "Consultoria", url: URL },
    ],
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-servicos", label: "Serviços" }, { to: "/servicos/consultoria", label: "Consultoria" }]}
      eyebrow="Consultoria Estratégica"
      h1={<>Consultoria que transforma <span className="text-gradient">estratégia em resultado</span></>}
      intro={<>**Diagnóstico, roadmap e mentoria** para líderes que precisam acelerar transformação digital, escalar operações ou reposicionar produto.</>}
      stats={[{ value: "500+", label: "Empresas atendidas" }, { value: "20 anos", label: "De experiência" }, { value: "C-Level", label: "Consultores sênior" }, { value: "ROI 10x", label: "Cases comprovados" }]}
      benefits={[
        { icon: Compass, title: "Diagnóstico 360°", desc: "Análise profunda de **produto, operação, tech, marketing e financeiro**." },
        { icon: Target, title: "Roadmap Prático", desc: "Plano de **90/180/365 dias** com metas, responsáveis e KPIs claros." },
        { icon: Users, title: "Mentoria Executiva", desc: "Sessões quinzenais com **C-level e founders** para destravar decisões." },
        { icon: TrendingUp, title: "Métricas que Importam", desc: "CAC, LTV, MRR, churn, NPS — **decisões baseadas em dados**." },
      ]}
      features={[
        { icon: Lightbulb, title: "Estratégia Digital", desc: "Posicionamento, funil, jornada e **stack tecnológico ideal**." },
        { icon: Search, title: "Discovery Técnico", desc: "Auditoria de arquitetura, dívida técnica e **plano de modernização**." },
        { icon: ClipboardCheck, title: "OKRs & KPIs", desc: "Definição de OKRs trimestrais e dashboards de acompanhamento." },
        { icon: MessageSquare, title: "War Room", desc: "Presença no time em **momentos críticos**: pivot, funding, lançamento." },
        { icon: LineChart, title: "Growth Hacking", desc: "Experimentos, funil AARRR e **loops de crescimento** validados." },
        { icon: Rocket, title: "Go-to-Market", desc: "Estratégia de lançamento com **pricing, canais e mensagens**." },
      ]}
      faq={[
        { q: "Como funciona a consultoria?", a: "Diagnóstico inicial de **2 semanas** + entrega de roadmap + acompanhamento mensal ou quinzenal." },
        { q: "Atendem startups ou empresas grandes?", a: "Ambos — **desde early-stage até enterprise** com faturamento >R$ 100Mi." },
        { q: "Vocês executam ou só apontam?", a: "Ambos os modelos disponíveis: **advisory ou hands-on** com squads dedicadas." },
        { q: "Qual o investimento?", a: "**A partir de R$ 8.000/mês** dependendo do modelo e nível de senioridade." },
        { q: "Assinam NDA?", a: "Sim, **NDA e cláusula de não-competição** em todas as consultorias." },
      ]}
    />
  ),
});
