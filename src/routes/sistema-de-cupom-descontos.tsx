import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Bell, CreditCard, Gift, MapPin, Percent, QrCode, ShoppingBag, Store, Tag, Ticket, Users } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistema-de-cupom-descontos";

const lpFaq = [
        { q: "É possível integrar com meu e-commerce?", a: "Sim, temos **plugins nativos para Shopify, VTEX, Nuvemshop, Tray, WooCommerce** e API REST." },
        { q: "Como funciona a comissão sobre vendas?", a: "Trackeamos via **postback ou pixel de conversão** e comissionamos automaticamente com split configurável." },
        { q: "Vocês entregam o app iOS e Android?", a: "Sim, apps nativos publicados nas lojas com sua marca e suporte à **publicação/manutenção**." },
        { q: "O sistema previne fraudes de cashback?", a: "Sim, **antifraude com device fingerprint, blacklist e regras de retenção** de saldo." },
        { q: "Posso operar em múltiplas cidades?", a: "Sim, arquitetura **multi-tenant e geodivisão** para franquias regionais." },
      ];

export const Route = createFileRoute("/sistema-de-cupom-descontos")({
  head: () => buildLPMeta({
    title: "Sistema de Cupons de Desconto | Cashback e Ofertas — NC Brasil",
    description: "Plataforma completa de cupons de desconto, cashback e ofertas para varejo, marketplace e apps. Geolocalização, QR Code, painel para lojistas e app do cliente.",
    keywords: "sistema de cupom de desconto, plataforma de cashback, sistema de ofertas, cupons online, sistema para lojistas",
    canonical: URL,
    h1: "Plataforma de Cupons e Cashback",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { name: "Sistema de Cupom", url: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-sistemas", label: "Sistemas" }, { to: "/sistema-de-cupom-descontos", label: "Cupons & Cashback" }]}
      eyebrow="Cupons & Cashback"
      h1={<>Plataforma de <span className="text-gradient">Cupons e Cashback</span></>}
      intro={<>Crie a próxima <strong className="text-foreground">Cuponomia ou Méliuz</strong>: plataforma completa para gerar tráfego, engajar clientes e comissionar sobre vendas com <strong className="text-foreground">cupons, cashback e ofertas exclusivas</strong>.</>}
      stats={[{ value: "10M+", label: "Cupons resgatados" }, { value: "500+", label: "Lojas parceiras" }, { value: "R$8Mi", label: "Cashback pago" }, { value: "4.8⭐", label: "App Store" }]}
      benefits={[
        { icon: Ticket, title: "Cupons Multi-tipo", desc: "**Percentual, valor fixo, frete grátis, BOGO e primeira compra** — regras avançadas por segmento." },
        { icon: Percent, title: "Cashback Automático", desc: "Comissão da loja convertida em **saldo do usuário**, com saque via Pix ou crédito na próxima compra." },
        { icon: Store, title: "Painel do Lojista", desc: "Autogestão de cupons, **relatório de conversão, ROI e chargeback**." },
        { icon: BarChart3, title: "Analytics Profundo", desc: "Funil por cupom, LTV do usuário e **atribuição multi-touch**." },
      ]}
      features={[
        { icon: QrCode, title: "Cupom Online e QR Físico", desc: "Uso online (código) ou presencial (QR Code na loja física)." },
        { icon: MapPin, title: "Geolocalização", desc: "Ofertas próximas ao usuário com push notification por raio." },
        { icon: CreditCard, title: "Integração PSPs", desc: "Pix, Stripe, PagSeguro, Cielo — saque de cashback em minutos." },
        { icon: Bell, title: "Notificações Inteligentes", desc: "Push, e-mail, WhatsApp e SMS com **segmentação por comportamento**." },
        { icon: Gift, title: "Programa de Indicações", desc: "MGM com bônus de cashback para quem indica e é indicado." },
        { icon: Users, title: "White Label", desc: "Marca, cores, domínio e app próprios — 100% customizável." },
      ]}
      faq={lpFaq}
      relatedNewsTags={["Cupom", "E-commerce", "Sistemas", "Marketing"]}
    />
  ),
});
