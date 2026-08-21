import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import {
  Camera, Car, CreditCard, Filter, MapPin, MessageCircle, Search, ShieldCheck, Tag, Users,
  BarChart3, Zap, Lock, Cloud, Database, Award, Globe2, Smartphone, FileCheck, Gauge,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";
import { veiculosTestimonials } from "@/lib/testimonials.data";

const URL = "https://www.ncbrasil.com.br/classificados-de-veiculos";

const lpFaq = [
  { q: "É possível integrar com o meu ERP de revenda ou concessionária?", a: "Sim. Temos **APIs prontas para AutoConf, Automotor, Boom Sistemas, Localiza Meu Carro, Revenda Mais, DealerBox** e integrações personalizadas via REST/XML." },
  { q: "O sistema já vem com SEO técnico otimizado?", a: "Sim. Cada anúncio gera **URL amigável, Schema.org Vehicle, sitemap dinâmico, imagens WebP com lazy load, Core Web Vitals verde** e ping automático ao Google Vehicle Ads." },
  { q: "Aceita anúncios de particulares e revendedores no mesmo portal?", a: "Sim, com **planos gratuitos limitados para PF e pagos com destaque, super destaque e diamante** para revendas — moderação automatizada com IA." },
  { q: "Como funciona o financiamento integrado?", a: "Integramos com **BV, Santander, Itaú, Bradesco, Creditas e CredMax** para simulação em tempo real e pré-aprovação em 1 clique." },
  { q: "É PWA/responsivo e rápido no 4G?", a: "PWA com **cache offline, imagens WebP/AVIF e Core Web Vitals verde** em todos os dispositivos — carrega em menos de 2s mesmo em 4G." },
  { q: "Existe app mobile próprio?", a: "Sim, **iOS e Android nativos white label** publicados nas lojas com sua marca, notificações push e busca por voz." },
  { q: "Consulto a Tabela FIPE em tempo real?", a: "Sim. Consulta automática da **FIPE** com alerta visual de preço abaixo/na média/acima do mercado no card do veículo." },
  { q: "O sistema tem antifraude?", a: "Sim. **Validação de placa, chassi, restrições, gravame, sinistro e roubo/furto** via APIs oficiais + análise comportamental do anunciante." },
  { q: "Suporta múltiplas cidades e franquias regionais?", a: "Arquitetura **multi-tenant e geodivisão** por raio de km, cidade, estado ou região — ideal para franquias regionais." },
  { q: "Quanto custa e qual o modelo comercial?", a: "**Licença perpétua** (sem mensalidade recorrente) ou SaaS com taxa por anúncio ativo — orçamento personalizado conforme volume." },
];

export const Route = createFileRoute("/classificados-de-veiculos")({
  head: () => buildLPMeta({
    title: "Sistema de Classificados de Veículos | Portal Automotivo Estilo WebMotors",
    description: "NcBrasil: Portal de anúncios de veículos completo com Tabela FIPE, financiamento e apps. O sistema ideal para revenda de autos e marketplaces.",
    keywords: "classificado de veículos, sistema para revenda de autos, portal de anúncios de veículos, plataforma profissional estilo WebMotors, sistema para gerenciamento de vendas de veículos, portal de anúncios de autos",
    canonical: URL,
    h1: "NcBrasil - Sistema de Classificados de Veículos",
    breadcrumbs: [
      { label: "Home", to: "/" },
      { label: "Sistemas", to: "/nossos-sistemas" },
      { label: "Classificados de Veículos", to: "/classificados-de-veiculos" },
    ],
    faq: lpFaq,
    ogImage: "/img-sistema-de-veiculos/sistema-de-classificados-de-veiculos-hero.jpeg",
  }),
  component: () => (
    <>
      <Helmet>
        <title>Sistema de Classificados de Veículos | Portal Automotivo — NC Brasil</title>
        <meta name="description" content="Plataforma profissional estilo WebMotors para classificados de veículos. Sistema para revenda de autos, portal de anúncios de autos e gerenciamento de vendas." />
        <meta name="keywords" content="classificado de veículos, sistema para revenda de autos, portal de anúncios de veículos, plataforma profissional estilo WebMotors, sistema para gerenciamento de vendas de veículos, portal de anúncios de autos" />
      </Helmet>
      <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-sistemas", label: "Sistemas" }, { to: "/classificados-de-veiculos", label: "Classificados de Veículos" }]}
      eyebrow="Portal Automotivo · Marketplace de Veículos"
      h1={<>Sistema de <span className="text-gradient">Classificados de Veículos</span> Profissional</>}
      intro={<>Lançamos seu <strong className="text-foreground">portal de anúncios de veículos</strong> com tecnologia de ponta. Uma <strong className="text-foreground">plataforma profissional estilo WebMotors</strong> completa com Tabela FIPE, financiamento integrado e <strong className="text-foreground">gerenciamento de vendas de veículos</strong> para revendas e particulares.</>}
      logo="/img-sistema-de-veiculos/nc-veiculos-logo-premium.png"
      heroImage="/img-sistema-de-veiculos/sistema-de-classificados-de-veiculos-hero.jpeg"
      stats={[
        { value: "50K+", label: "Anúncios ativos" },
        { value: "2M", label: "Visitas mensais" },
        { value: "800+", label: "Revendas conectadas" },
        { value: "95", label: "PageSpeed médio" },
      ]}
      clientsTitle={<>Portais e revendas que <span className="text-gradient">confiam na NC Brasil</span></>}
      clients={["AutoShow", "MegaCar Portal", "Revenda Fácil", "CarroBom", "AutoBrasil", "MercadoCar", "TopVeículos", "AutoRegional"]}
      problem={{
        title: <>Por que seu <span className="text-destructive">portal de anúncios de autos</span> precisa ser profissional?</>,
        items: [
          "**Dependência de terceiros** — Portais nacionais cobram taxas abusivas por lead e por venda.",
          "**Falta de regionalismo** — O cliente da sua cidade quer comprar localmente, mas não encontra sua vitrine.",
          "**Processos manuais** — Cadastrar estoque um a um em múltiplos portais é lento e gera erros.",
          "**Falta de confiança** — Compradores temem golpes em portais sem verificação de placa e chassi.",
          "**SEO fraco** — Seu portal não aparece no Google quando alguém busca por 'carros usados na minha cidade'.",
        ],
      }}
      solution={{
        title: <>A melhor <span className="text-gradient">plataforma profissional estilo WebMotors</span> do Brasil</>,
        desc: <>Desenvolvemos um <strong className="text-foreground">sistema para revenda de autos</strong> robusto, focado em conversão e SEO. Nossa solução de <strong className="text-foreground">portal de anúncios de veículos</strong> entrega autonomia total para sua marca dominar o mercado regional ou nacional.</>,
        highlights: [
          "**White Label Completo** — Use sua marca e domínio próprio",
          "**Importador de Estoque** — Sincronização automática com WebMotors e OLX",
          "**Tabela FIPE Integrada** — Preços sempre atualizados automaticamente",
          "**App iOS e Android** — Presença mobile nativa com notificações push",
          "**SEO de Alta Performance** — Ranqueamento orgânico garantido",
          "**Gerenciamento Total** — Dashboard administrativo completo e intuitivo",
        ],
      }}
      showcase={[
        {
          title: "Dashboard Administrativo de Alta Performance",
          desc: "Controle total sobre seu portal de anúncios de autos. Métricas de MRR, novos anúncios, usuários e gestão de lojistas em tempo real.",
          image: "/img-sistema-de-veiculos/sistema-para-revenda-de-autos-admin-dashboard.jpeg"
        },
        {
          title: "Painel do Lojista e Revenda",
          desc: "Cada parceiro tem seu próprio ambiente para gerenciar leads, visualizações e o desempenho da sua loja de veículos.",
          image: "/img-sistema-de-veiculos/portal-de-anuncios-de-veiculos-loja-dashboard.jpeg"
        },
        {
          title: "Importação Inteligente de Estoque",
          desc: "Importe centenas de veículos instantaneamente de outros portais como WebMotors e OLX com nosso extrator via URL.",
          image: "/img-sistema-de-veiculos/plataforma-estilo-webmotors-importador.png"
        },
        {
          title: "Gestão de Inventário e Status",
          desc: "Visualização clara de todos os veículos, anos, KM, preços e status de moderação no sistema de gerenciamento de vendas.",
          image: "/img-sistema-de-veiculos/sistema-para-gerenciamento-de-vendas-de-veiculos-lista.png"
        }
      ]}
      benefits={[
        { icon: Search, title: "Busca Avançada", desc: "Filtros inteligentes por marca, modelo, ano e opcionais, exatamente como na WebMotors." },
        { icon: Tag, title: "Tabela FIPE Ativa", desc: "Compare preços em tempo real e mostre ofertas com selo 'Abaixo da FIPE' automaticamente." },
        { icon: Users, title: "Multilojista (Marketplace)", desc: "Gerencie centenas de revendedores com painéis individuais e faturamento integrado." },
        { icon: CreditCard, title: "Financiamento Direto", desc: "Simulador de parcelas integrado com as principais financeiras do mercado automotivo." },
      ]}
      features={[
        { icon: Car, title: "Ficha Técnica Rica", desc: "Dados completos, opcionais, histórico e galeria de fotos em alta definição com marca d'água." },
        { icon: Camera, title: "Galeria Inteligente", desc: "Upload múltiplo rápido com otimização automática para WebP (SEO e velocidade)." },
        { icon: MapPin, title: "Geolocalização", desc: "Filtre veículos por raio de distância ou cidade, facilitando a negociação local." },
        { icon: Filter, title: "Comparador de Autos", desc: "Permita que o usuário compare até 4 veículos lado a lado tecnicamente." },
        { icon: MessageCircle, title: "Leads via WhatsApp", desc: "Integração direta com o WhatsApp do vendedor com tracking de conversão." },
        { icon: ShieldCheck, title: "Segurança & Moderação", desc: "Sistema de denúncia e verificação de anunciantes para evitar fraudes no portal." },
        { icon: Smartphone, title: "App White Label", desc: "Sua própria plataforma profissional nas lojas App Store e Google Play." },
        { icon: Globe2, title: "SEO Automotivo", desc: "URLs amigáveis e MetaTags automáticas para cada veículo cadastrado." },
        { icon: Zap, title: "Performance Extrema", desc: "Carregamento instantâneo para não perder nenhum comprador no mobile." },
      ]}
      finalParallaxCta={{
        text: "Sistema para Revenda de Autos Premium",
        image: "/logo.jpg"
      }}
      testimonials={veiculosTestimonials}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para dominar o mercado com seu <span className="text-gradient">Portal de Anúncios de Autos</span>?</>}
      finalCtaDesc={<>Fale com nossos especialistas em <strong className="text-foreground">sistemas para revenda de veículos</strong>. Demonstração personalizada disponível.</>}
      relatedNewsTags={["Veículos", "Classificados", "Sistemas"]}
    />
    </>
  ),
});


