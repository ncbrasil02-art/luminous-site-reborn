import { createFileRoute } from "@tanstack/react-router";
import { Target, Search, ShoppingBag, Youtube, MapPin, TrendingUp, Sparkles, LineChart, Award, Zap, DollarSign, Users } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/servicos/google-ads";

const lpFaq = [
        { q: "Verba mínima?", a: "**R$ 2.000/mês** em mídia + fee de gestão para resultados consistentes." },
        { q: "Somos Google Partner?", a: "Sim, **Google Premier Partner** com certificações em Search, Shopping e YouTube." },
        { q: "Fica no meu MCC?", a: "Sim, você **é dono da conta** — nós apenas gerenciamos com acesso permissionado." },
        { q: "Fazem criativos de vídeo?", a: "Sim, estúdio próprio produz **anúncios em vídeo, imagens e responsivos**." },
        { q: "Vocês reportam como?", a: "Dashboards **Looker Studio em tempo real** + call semanal ou quinzenal." },
      ];

export const Route = createFileRoute("/servicos/google-ads")({
  head: () => buildLPMeta({
    title: "Gestão de Google Ads | Agência Parceira Premier com ROI Comprovado",
    description: "Gestão profissional de Google Ads: campanhas de Search, Shopping, YouTube, Display e Performance Max com foco em ROAS e conversões.",
    keywords: "google ads, gestão de google ads, agência google ads, campanhas google ads, google adwords, tráfego pago google",
    canonical: URL,
    h1: "Gestão Profissional de Google Ads",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Serviços", to: "https://www.ncbrasil.com.br/servicos" },
      { label: "Google Ads", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-servicos", label: "Serviços" }, { to: "/servicos/google-ads", label: "Google Ads" }]}
      eyebrow="Google Ads"
      h1={<>Consultoria e Gestão de <span className="text-gradient">Google ADS Profissional</span></>}
      intro={<>Fazemos toda a **consultoria e aplicação de resultados** em campanhas de **Google ADS**. Foco total em conversão e ROAS para garantir o retorno do seu investimento.</>}
      stats={[{ value: "R$ 20Mi", label: "Investidos em Ads" }, { value: "5,2x", label: "ROAS médio" }, { value: "Premier", label: "Google Partner" }, { value: "-38%", label: "CAC médio" }]}
      benefits={[
        { icon: Search, title: "Campanhas de Search", desc: "Palavras-chave com **alta intenção de compra** e negativação diária de termos ruins." },
        { icon: ShoppingBag, title: "Google Shopping", desc: "Feed otimizado no **Merchant Center**, títulos ricos e segmentação por margem." },
        { icon: Sparkles, title: "Performance Max", desc: "Automação inteligente com **asset groups temáticos** e sinais de audiência." },
        { icon: Youtube, title: "YouTube Ads", desc: "Vídeos com hook forte, **remarketing sequencial** e discovery ads." },
      ]}
      features={[
        { icon: Target, title: "Segmentação Cirúrgica", desc: "Audiências customizadas, lookalikes e **exclusões de baixa qualidade**." },
        { icon: MapPin, title: "Geo-Targeting", desc: "Segmentação por bairro, raio e **agendamento inteligente por horário**." },
        { icon: TrendingUp, title: "Otimização Diária", desc: "Lances, criativos, keywords e negativações **revistos todo dia útil**." },
        { icon: LineChart, title: "Tag Manager + GA4", desc: "Rastreamento avançado de conversões, **enhanced conversions e server-side**." },
        { icon: DollarSign, title: "Foco em ROAS", desc: "Bidding com **tROAS, tCPA e Max Conversions** — testes constantes." },
        { icon: Users, title: "Landing Pages", desc: "Criamos LPs otimizadas para **Quality Score 10/10** e conversão." },
      ]}
      faq={lpFaq}
      relatedNewsTags={["Google Ads","Links Patrocinados","Marketing Digital"]}
    />
  ),
});
