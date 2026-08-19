import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Target, TrendingUp, Users, Sparkles, Video, Image, LineChart, Zap, DollarSign, MousePointerClick } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/servicos/facebook-ads";

const lpFaq = [
        { q: "Verba mínima?", a: "**R$ 2.000/mês** em mídia + fee de gestão para resultados consistentes." },
        { q: "Fazem os criativos?", a: "Sim, **estúdio próprio de vídeo, foto e motion** para criativos ilimitados." },
        { q: "Quanto tempo para resultado?", a: "Primeiros dados em **7 dias**; maturidade da campanha em 30 dias." },
        { q: "BM fica com quem?", a: "**Você é dono do Business Manager e do Pixel** — mantemos acesso permissionado." },
        { q: "Trabalham com infoproduto?", a: "Sim, especialidade em **infoprodutos, e-commerce, SaaS e serviços locais**." },
      ];

export const Route = createFileRoute("/servicos/facebook-ads")({
  head: () => buildLPMeta({
    title: "Gestão de Facebook e Instagram Ads | Meta Ads com Alta Conversão",
    description: "Gestão profissional de Meta Ads (Facebook e Instagram). Campanhas com CBO, Advantage+, Lookalikes e criativos otimizados para conversão.",
    keywords: "facebook ads, instagram ads, meta ads, gestão de facebook ads, tráfego pago meta, agência facebook ads",
    canonical: URL,
    h1: "Gestão de Meta Ads (Facebook e Instagram)",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Serviços", to: "https://www.ncbrasil.com.br/servicos" },
      { label: "Facebook Ads", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-servicos", label: "Serviços" }, { to: "/servicos/facebook-ads", label: "Facebook Ads" }]}
      subtitle="Meta Ads"
      h1={<>Facebook e Instagram Ads com <span className="text-gradient">ROI real</span></>}
      intro={<>Gestão avançada de **Meta Ads com CBO, Advantage+, Lookalikes e criativos testados** — focada em escala com CAC saudável.</>}
      stats={[{ value: "R$ 15Mi", label: "Investidos em Meta" }, { value: "4,6x", label: "ROAS médio" }, { value: "200+", label: "Contas ativas" }, { value: "Meta", label: "Business Partner" }]}
      benefits={[
        { icon: Facebook, title: "Facebook Ads", desc: "Campanhas de **conversão, tráfego, engajamento e mensagens** otimizadas." },
        { icon: Instagram, title: "Instagram Ads", desc: "Feed, Stories, Reels, Explore e **collab ads** com influenciadores." },
        { icon: Sparkles, title: "Advantage+", desc: "IA da Meta com **segmentação e criativos automatizados** — mais escala." },
        { icon: Users, title: "Lookalikes 1%", desc: "Audiências espelho de **compradores, top LTV e engajados** — máxima qualidade." },
      ]}
      features={[
        { icon: Target, title: "Segmentação Fria", desc: "Interesses, comportamentos e **audiências salvas testadas em CBO**." },
        { icon: TrendingUp, title: "Escala com CBO", desc: "**Campaign Budget Optimization** com estrutura enxuta e escala vertical." },
        { icon: Video, title: "Reels Ads", desc: "Criativos verticais 9:16 com **hook de 3s** e CTA claro." },
        { icon: Image, title: "Carrossel", desc: "Múltiplos produtos ou benefícios com **swipe interativo**." },
        { icon: LineChart, title: "CAPI + Pixel", desc: "Conversion API server-side para **contornar iOS 14.5+ e ad blockers**." },
        { icon: MousePointerClick, title: "Retargeting", desc: "Segmentação de **abandono de carrinho, visualização e cross-sell**." },
      ]}
      faq={lpFaq}
      relatedNewsTags={["Facebook Ads","Redes Sociais","Marketing Digital"]}
    />
  ),
});
