import { createFileRoute } from "@tanstack/react-router";
import { Palette, PenTool, Sparkles, Type, Image, Award, Layers, Brush, Eye, Layout, Book, Zap } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/servicos/identidade-visual";

export const Route = createFileRoute("/servicos/identidade-visual")({
  head: () => buildLPMeta({
    title: "Identidade Visual e Branding | Design de Marca Profissional",
    description: "Criação de identidade visual completa: logotipo, manual de marca, paleta, tipografia, aplicações e branding estratégico.",
    keywords: "identidade visual, branding, criação de logotipo, manual de marca, design de marca, brand identity",
    canonical: URL,
    h1: "Identidade Visual e Branding Estratégico",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Serviços", url: "https://www.ncbrasil.com.br/servicos" },
      { name: "Identidade Visual", url: URL },
    ],
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-servicos", label: "Serviços" }, { to: "/servicos/identidade-visual", label: "Identidade Visual" }]}
      eyebrow="Branding"
      h1={<>Identidade visual que <span className="text-gradient">posiciona sua marca</span></>}
      intro={<>Da **pesquisa de mercado ao manual de marca** — criamos identidades visuais memoráveis que geram reconhecimento, desejo e diferenciação.</>}
      stats={[{ value: "1.500+", label: "Marcas criadas" }, { value: "20 anos", label: "De branding" }, { value: "100%", label: "Autoral" }, { value: "Manual", label: "De marca completo" }]}
      benefits={[
        { icon: Sparkles, title: "Conceito Estratégico", desc: "Marca com **propósito, arquétipos e posicionamento** definidos por estrategistas." },
        { icon: Palette, title: "Sistema Visual", desc: "Paleta, tipografia, grafismos e **grid de aplicações consistentes**." },
        { icon: Book, title: "Manual de Marca", desc: "Guia completo com **usos corretos, versões, malha e do's & don'ts**." },
        { icon: Award, title: "Marcas Premiadas", desc: "Portfolio com marcas premiadas em **Wave Festival, Cannes e ADG Brasil**." },
      ]}
      features={[
        { icon: PenTool, title: "Logotipo Vetorial", desc: "Entrega em AI, SVG, PNG, PDF, EPS — versões monocromática, negativa e reduzida." },
        { icon: Type, title: "Tipografia", desc: "Seleção ou **criação de fontes exclusivas** para diferenciação total." },
        { icon: Image, title: "Aplicações", desc: "Cartão, papel timbrado, envelope, uniforme, fachada, veículos e social." },
        { icon: Layers, title: "Sub-marcas", desc: "Arquitetura de marca com **produtos, serviços e linhas** consistentes." },
        { icon: Brush, title: "Motion Branding", desc: "Assinatura animada, transições e **kit para redes sociais em motion**." },
        { icon: Eye, title: "Rebranding", desc: "Refresh ou reposicionamento completo com **plano de transição** para o mercado." },
      ]}
      faq={[
        { q: "Qual o prazo?", a: "Identidade completa em **30 a 60 dias**, com etapas de aprovação semanais." },
        { q: "Quantas propostas apresentam?", a: "**2 a 3 conceitos distintos** na primeira rodada, com ajustes ilimitados no escolhido." },
        { q: "Entregam manual de marca?", a: "Sim, PDF completo + **versão web interativa** para consulta da equipe." },
        { q: "Fazem aplicações também?", a: "Sim: papelaria, redes sociais, embalagens, sinalização e **veículos**." },
        { q: "Registrar no INPI?", a: "Orientamos e conectamos com **escritórios de propriedade intelectual** parceiros." },
      ]}
    />
  ),
});
