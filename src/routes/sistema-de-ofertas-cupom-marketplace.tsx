import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, CreditCard, MapPin, Package, Percent, Search, ShieldCheck, Store, Tag, Truck, Users, Zap } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistema-de-ofertas-cupom-marketplace";

const lpFaq = [
        { q: "Aceita produtos físicos e serviços?", a: "Sim, arquitetura flexível para **produtos, serviços, ingressos, cursos e cupons** — cada tipo com fluxo próprio." },
        { q: "Como funciona o onboarding de lojistas?", a: "Autocadastro com **KYC/KYB, aprovação em 24h e integração com Pagar.me** para split automático." },
        { q: "Vocês entregam app para os lojistas?", a: "Sim, **app do lojista** para gestão + **app do consumidor** — ambos white label." },
        { q: "É possível operar por franquia regional?", a: "Sim, arquitetura **multi-tenant** — cada franqueado tem cidade, comissão e branding próprios." },
        { q: "Qual o prazo de implantação?", a: "**60 a 120 dias** para MVP completo com apps e infraestrutura escalável." },
      ];

export const Route = createFileRoute("/sistema-de-ofertas-cupom-marketplace")({
  head: () => buildLPMeta({
    title: "Marketplace de Ofertas e Cupons | Plataforma Multi-Lojista",
    description: "Plataforma marketplace de ofertas: múltiplos lojistas, cupons, comissionamento, split de pagamento, avaliações e painel para vendedores.",
    keywords: "marketplace de ofertas, sistema de marketplace, plataforma multi-lojista, marketplace de cupons, sistema white label marketplace",
    canonical: URL,
    h1: "Plataforma de Marketplace de Ofertas",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { name: "Marketplace de Ofertas", url: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-sistemas", label: "Sistemas" }, { to: "/sistema-de-ofertas-cupom-marketplace", label: "Marketplace de Ofertas" }]}
      eyebrow="Marketplace"
      h1={<>Marketplace de <span className="text-gradient">Ofertas & Cupons</span></>}
      intro={<>Plataforma <strong className="text-foreground">multi-lojista</strong> pronta para operar como **Peixe Urbano, Groupon ou ClickOn**: cupons, ofertas relâmpago, split de pagamento e comissionamento automático.</>}
      stats={[{ value: "10K+", label: "Lojistas cadastráveis" }, { value: "1M+", label: "Ofertas ativas" }, { value: "R$50Mi", label: "GMV processado" }, { value: "40+", label: "Cidades atendidas" }]}
      benefits={[
        { icon: Store, title: "Painel do Lojista", desc: "Autocadastro, upload de ofertas, gestão de estoque e **relatório de vendas em tempo real**." },
        { icon: CreditCard, title: "Split de Pagamento", desc: "Divisão automática entre marketplace, lojista, afiliado e taxas via **Pagar.me / Iugu**." },
        { icon: Percent, title: "Comissionamento Flexível", desc: "Comissão fixa, percentual, escalonada por volume ou por categoria." },
        { icon: ShieldCheck, title: "Escrow Seguro", desc: "Retenção do valor até **entrega/uso do cupom** — protege comprador e vendedor." },
      ]}
      features={[
        { icon: Tag, title: "Cupons Digitais", desc: "Voucher com QR Code para validação no PDV do lojista via app." },
        { icon: MapPin, title: "Geolocalização", desc: "Ofertas próximas + integração com Google Maps e busca por raio." },
        { icon: Search, title: "Busca & Filtros", desc: "Busca full-text, filtros por categoria, preço, avaliação e desconto." },
        { icon: Package, title: "Produtos e Serviços", desc: "Do **cabeleireiro ao restaurante e produto físico** — múltiplos tipos de oferta." },
        { icon: Users, title: "Avaliações e Reviews", desc: "Sistema de reviews com moderação, foto e resposta do lojista." },
        { icon: Truck, title: "Logística Integrada", desc: "Melhor Envio, Correios API e frete grátis condicional por lojista." },
      ]}
      faq={lpFaq}
      relatedNewsTags={["Marketplace","Cupom","E-commerce"]}
    />
  ),
});
