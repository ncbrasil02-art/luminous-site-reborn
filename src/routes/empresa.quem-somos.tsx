import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Users, Award, Target, Heart, Sparkles, Rocket, ShieldCheck, TrendingUp, Globe2, Lightbulb, Zap, Handshake } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";
import { SITE_URL } from "@/lib/seo";

const URL = `${SITE_URL}/empresa/quem-somos`;

const lpFaq = [
        { q: "Onde a NC Brasil está localizada?", a: "Sede em **São Paulo (SP)**, com times remotos em Rio, Belo Horizonte, Curitiba e Recife." },
        { q: "Atendem empresas de qualquer porte?", a: "Sim: de **startups em pré-seed até enterprises** com faturamento acima de R$ 100Mi." },
        { q: "Qual o diferencial da NC?", a: "**Time sênior**, entrega no prazo, código aberto ao cliente e parceria de longo prazo." },
        { q: "Vocês têm cases públicos?", a: "Sim, veja **nossos trabalhos realizados** e portfólio detalhado por categoria." },
      ];

export const Route = createFileRoute("/empresa/quem-somos")({
  head: () => buildLPMeta({
    title: "Quem Somos | NC Brasil — 20 Anos de Tecnologia e Marketing Digital",
    description: "Conheça a NC Brasil: agência de tecnologia e marketing digital com 20 anos de mercado, +1500 projetos entregues e time multidisciplinar.",
    keywords: "nc brasil, quem somos nc brasil, agência de tecnologia, empresa desenvolvimento software, sobre a nc brasil",
    canonical: URL,
    h1: "Quem Somos — NC Brasil",
    breadcrumbs: [
      { label: "Home", to: `${SITE_URL}/` },
      { label: "Empresa", to: `${SITE_URL}/empresa` },
      { label: "Quem Somos", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <>
      <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/empresa", label: "Empresa" }, { to: "/empresa/quem-somos", label: "Quem Somos" }]}
      eyebrow="Sobre nós"
      h1={<>Nossa Empresa: <span className="text-gradient">Ranqueamento, Autoridade e Tecnologia</span></>}
      intro={<>Nossa empresa atua com **ranqueamento e autoridade das palavras-chaves**, subindo qualquer empresa nos principais resultados dos buscadores. Com vasta experiência no **mercado brasileiro e internacional**, nossa estrutura garante resultados comprovados e suporte técnico especializado em todas as frentes digitais.</>}
      stats={[{ value: "20 anos", label: "De mercado" }, { value: "1.500+", label: "Projetos entregues" }, { value: "50+", label: "Especialistas" }, { value: "12", label: "Estados atendidos" }]}
      benefits={[
        { icon: Award, title: "Experiência Comprovada", desc: "Duas décadas construindo **sistemas, sites e apps** para PMEs, startups e grandes marcas." },
        { icon: Users, title: "Time Sênior", desc: "**Engenheiros, designers, estrategistas e traffic managers** — todos in-house, sem terceirização." },
        { icon: Target, title: "Foco em ROI", desc: "Cada decisão orientada por **métricas, dados e retorno mensurável** para o cliente." },
        { icon: Heart, title: "Parceria de Longo Prazo", desc: "**80% dos clientes** estão conosco há mais de 3 anos — relacionamento é nosso maior ativo." },
      ]}
      features={[
        { icon: Sparkles, title: "Missão", desc: "Democratizar tecnologia de ponta para empresas brasileiras de todos os portes." },
        { icon: Rocket, title: "Visão", desc: "Ser referência nacional em **engenharia de software e marketing performance**." },
        { icon: ShieldCheck, title: "Valores", desc: "Transparência, excelência técnica, entrega no prazo e **respeito absoluto ao contrato**." },
        { icon: Lightbulb, title: "Inovação Contínua", desc: "Investimos em **R&D com IA, edge computing e novas stacks** todo trimestre." },
        { icon: Globe2, title: "Alcance Nacional", desc: "Clientes de **Norte a Sul do Brasil** e projetos em Portugal, EUA e Angola." },
        { icon: Handshake, title: "Cultura Colaborativa", desc: "Time treinado em **comunicação clara, autonomia responsável e ownership**." },
      ]}
      faq={lpFaq}
    />
    </>
  ),
});
