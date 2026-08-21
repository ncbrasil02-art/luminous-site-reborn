import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Target, TrendingUp, Users, Sparkles, Video, Image, LineChart, Zap, DollarSign, MousePointerClick } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/servicos/facebook-ads";

const lpFaq = [
        { q: "Facebook Ads ainda funciona?", a: "Sim, é uma das melhores plataformas para **gerar desejo e capturar leads** com segmentação avançada." },
        { q: "Vocês criam os vídeos para os anúncios?", a: "Sim, produzimos criativos de alta conversão focados em **Stories e Reels**." },
        { q: "Como vocês segmentam o público?", a: "Usamos inteligência de dados para atingir pessoas por **interesse, comportamento e localização**." },
        { q: "Posso anunciar com pouca verba?", a: "Sim, o Facebook permite começar com orçamentos menores e **escalar conforme o resultado** aparece." },
        { q: "Vocês gerenciam o Instagram também?", a: "Sim, as campanhas são integradas para aparecerem tanto no **Facebook quanto no Instagram**." },
      ];

export const Route = createFileRoute("/servicos/facebook-ads")({
  head: () => buildLPMeta({
    title: "Gestão de Meta Ads | Facebook e Instagram com Alta Performance",
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
      eyebrow="Meta Ads"
      h1={<>Gerenciamento de Campanhas <span className="text-gradient">Facebook ADS</span></>}
      intro={<>Fazemos toda a **consultoria e aplicação de resultados** em campanhas de **Facebook ADS**. Criativos otimizados e segmentação avançada para maximizar sua autoridade no mercado.</>}
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
      heroImage="/img-sistema-de-leilao/rural-genealogia.png"
      relatedNewsTags={["Facebook Ads","Redes Sociais","Marketing Digital"]}
    />
  ),
});
