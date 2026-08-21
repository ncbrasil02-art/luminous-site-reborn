import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import {
  Camera, Car, CreditCard, Filter, MapPin, MessageCircle, Search, ShieldCheck, Tag, Users,
  BarChart3, Zap, Lock, Cloud, Database, Award, Globe2, Smartphone, FileCheck, Gauge,
  DollarSign, Wrench, TrendingUp,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";
import { veiculosTestimonials } from "@/lib/testimonials.data";

// Import asset pointers
import heroAsset from "@/assets/classificados-veiculos-hero.jpeg.asset.json";
import dashboardVkAsset from "@/assets/classificados-veiculos-dashboard-vkintegradora.png.asset.json";
import vitrineMobiAsset from "@/assets/classificados-veiculos-vitrine-mobiauto.png.asset.json";
import importadorAsset from "@/assets/classificados-veiculos-importador-estoque.png.asset.json";
import adminPanelAsset from "@/assets/classificados-veiculos-painel-admin.png.asset.json";
import mobileDetailAsset from "@/assets/classificados-veiculos-detalhe-mobile.png.asset.json";
import gestaoGeralAsset from "@/assets/classificados-veiculos-gestao-geral.png.asset.json";

const URL = "https://www.ncbrasil.com.br/sistema-de-revenda-de-veiculos";

const lpFaq = [
  { q: "É possível integrar com o meu ERP de revenda ou concessionária?", a: "Sim. Temos **APIs prontas para AutoConf, Automotor, Boom Sistemas, Localiza Meu Carro, Revenda Mais, DealerBox** e integrações personalizadas via REST/XML para o seu **Classificado de veículos PHP**." },
  { q: "O sistema já vem com SEO técnico otimizado?", a: "Sim. Cada anúncio gera **URL amigável, Schema.org Vehicle, sitemap dinâmico e imagens WebP** no seu **Sistema portal de veículos**." },
  { q: "Aceita anúncios de particulares e revendedores no mesmo portal?", a: "Sim, com planos flexíveis na sua **Plataforma de anúncio de veículos** com moderação automatizada via IA." },
  { q: "Como funciona o financiamento integrado?", a: "Integramos com as principais financeiras para simulação em tempo real no seu **Sistema revenda de autos**." },
  { q: "Existe app mobile próprio?", a: "Sim, **iOS e Android nativos** para o seu **Sistema para revendedor de carros** com notificações push." },
  { q: "Consulto a Tabela FIPE em tempo real?", a: "Sim. Consulta automática da **FIPE** integrada ao seu **Portal anúncio de veículos**." },
];

export const Route = createFileRoute("/sistema-de-revenda-de-veiculos")({
  head: () => buildLPMeta({
    title: "Sistema para Revenda de Carros e Portal de Anúncios de Veículos",
    description: "NcBrasil: Plataforma completa de classificado de veículos PHP, sistema portal de veículos e revenda de autos com Tabela FIPE e apps nativos.",
    keywords: "classificado de veículos PHP, sistema portal de veículos, plataforma de anúncio de veículos, sistema revenda de autos, sistema para revendedor de carros, portal anúncio de veículos",
    canonical: URL,
    h1: "NcBrasil - Sistema para Revendedor de Carros",
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Sistemas", to: "/nossos-sistemas" },
      { label: "Revenda de Veículos", to: "/sistema-de-revenda-de-veiculos" },
    ],
    faq: lpFaq,
    ogImage: heroAsset.url,
  }),
  component: () => (
    <>
      <Helmet>
        <title>Sistema para Revendedor de Carros | Portal Anúncio de Veículos — NC Brasil</title>
        <meta name="description" content="Domine o mercado com seu próprio Classificado de veículos PHP. Sistema portal de veículos completo com integração FIPE e apps nativos." />
        <meta name="keywords" content="classificado de veículos PHP, sistema portal de veículos, plataforma de anúncio de veículos, sistema revenda de autos, sistema para revendedor de carros, portal anúncio de veículos" />
      </Helmet>
      <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-sistemas", label: "Sistemas" }, { to: "/sistema-de-revenda-de-veiculos", label: "Revenda de Veículos" }]}
      eyebrow="Portal Automotivo · Marketplace de Veículos"
      h1={<>Sistema para <span className="text-gradient">Revendedor de Carros</span> Profissional</>}
      intro={<>Lançamos seu **Portal anúncio de veículos** com tecnologia de ponta. Uma **Plataforma de anúncio de veículos** completa com Tabela FIPE e **Sistema revenda de autos**.</>}
      logo="/logo-nc-brasil.png"
      heroImage={heroAsset.url}
      stats={[
        { value: "50K+", label: "Anúncios ativos" },
        { value: "2M", label: "Visitas mensais" },
        { value: "800+", label: "Revendas conectadas" },
        { value: "95", label: "PageSpeed médio" },
      ]}
      clientsTitle={<>Portais e revendas que <span className="text-gradient">confiam na NC Brasil</span></>}
      clients={["AutoShow", "MegaCar Portal", "Revenda Fácil", "CarroBom", "AutoBrasil", "MercadoCar", "TopVeículos", "AutoRegional"]}
      problem={{
        title: <>Por que seu <span className="text-destructive">Portal anúncio de veículos</span> precisa ser profissional?</>,
        items: [
          "**Dependência de taxas abusivas** em portais nacionais de **Classificado de veículos PHP**.",
          "**Falta de regionalismo** no seu **Sistema portal de veículos** local.",
          "**Processos manuais** lentos sem uma **Plataforma de anúncio de veículos** integrada.",
          "**Baixa conversão** em sites que não possuem um **Sistema revenda de autos** moderno.",
          "**SEO fraco** que impede o ranqueamento do seu **Sistema para revendedor de carros**.",
        ],
      }}
      solution={{
        title: <>A melhor <span className="text-gradient">Plataforma de anúncio de veículos</span> do Brasil</>,
        desc: <>Desenvolvemos um **Sistema para revendedor de carros** robusto e focado em conversão. Nossa solução de **Portal anúncio de veículos** entrega autonomia total para sua marca.</>,
        highlights: [
          "**White Label Completo** no seu **Classificado de veículos PHP**",
          "**Importador de Estoque** para o **Sistema portal de veículos**",
          "**Tabela FIPE Integrada** na **Plataforma de anúncio de veículos**",
          "**App iOS e Android** para o seu **Sistema revenda de autos**",
          "**SEO de Alta Performance** no **Sistema para revendedor de carros**",
          "**Gerenciamento Total** via **Portal anúncio de veículos**",
        ],
      }}
      showcase={[
        {
          title: "Dashboard Administrativo de Alta Performance",
          desc: "Controle total sobre seu **Classificado de veículos PHP** com métricas em tempo real.",
          image: adminPanelAsset.url
        },
        {
          title: "Painel do Lojista e Revenda",
          desc: "Ambiente exclusivo para gerenciar o estoque no seu **Sistema portal de veículos**.",
          image: dashboardVkAsset.url
        },
        {
          title: "Vitrine Premium e Mobile First",
          desc: "Experiência cinematográfica na sua **Plataforma de anúncio de veículos**.",
          image: vitrineMobiAsset.url
        },
        {
          title: "Importação Inteligente de Estoque",
          desc: "Sincronização automática para o seu **Sistema revenda de autos**.",
          image: importadorAsset.url
        },
        {
          title: "Gestão Geral e Financeira",
          desc: "Visão 360 do seu **Sistema para revendedor de carros**.",
          image: gestaoGeralAsset.url
        },
        {
          title: "Detalhes do Veículo e Conversão",
          desc: "Ficha técnica completa no seu **Portal anúncio de veículos**.",
          image: mobileDetailAsset.url
        }
      ]}
      benefits={[
        { icon: Search, title: "Busca Avançada", desc: "Filtros inteligentes no seu **Classificado de veículos PHP**." },
        { icon: Tag, title: "Tabela FIPE Ativa", desc: "Preços atualizados no seu **Sistema portal de veículos**." },
        { icon: Users, title: "Multilojista", desc: "Gerencie revendedores na sua **Plataforma de anúncio de veículos**." },
        { icon: CreditCard, title: "Financiamento Direto", desc: "Simulador integrado no seu **Sistema revenda de autos**." },
      ]}
      features={[
        { icon: Car, title: "Ficha Técnica Rica", desc: "Dados completos no seu **Sistema para revendedor de carros**." },
        { icon: Camera, title: "Galeria Inteligente", desc: "Fotos em alta definição no seu **Portal anúncio de veículos**." },
        { icon: MapPin, title: "Geolocalização", desc: "Busca por proximidade no seu **Classificado de veículos PHP**." },
        { icon: Filter, title: "Filtros Pro", desc: "Refine a busca no seu **Sistema portal de veículos**." },
        { icon: MessageCircle, title: "Leads WhatsApp", desc: "Contato direto na sua **Plataforma de anúncio de veículos**." },
        { icon: ShieldCheck, title: "Segurança Total", desc: "Moderação ativa no seu **Sistema revenda de autos**." },
        { icon: Smartphone, title: "App White Label", desc: "Apps nativos no seu **Sistema para revendedor de carros**." },
        { icon: Globe2, title: "SEO Automotivo", desc: "Ranqueamento orgânico do seu **Portal anúncio de veículos**." },
        { icon: Zap, title: "Alta Velocidade", desc: "Performance extrema no seu **Classificado de veículos PHP**." },
      ]}
      finalParallaxCta={{
        text: "Portal Anúncio de Veículos Premium",
        image: heroAsset.url
      }}
      testimonials={veiculosTestimonials}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para dominar o mercado com seu <span className="text-gradient">Sistema Portal de Veículos</span>?</>}
      finalCtaDesc={<>Fale com especialistas em **Plataforma de anúncio de veículos**. Demonstração disponível.</>}
      relatedNewsTags={["Veículos", "Classificados", "Sistemas"]}
    />
    </>
  ),
});
