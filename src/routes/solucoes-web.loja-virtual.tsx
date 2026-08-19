import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, Package, ShoppingBag, ShoppingCart, Store, Truck, Zap, BarChart3, Percent, Users, Smartphone, ShieldCheck } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/loja-virtual";

const lpFaq = [
        { q: "Vocês integram com Bling ou Tiny?", a: "Sim, integramos com **Bling, Tiny, Omie e ERPs personalizados** via API." },
        { q: "Aceita dropshipping?", a: "Sim, temos módulo de **dropshipping com AliExpress e fornecedores nacionais**." },
        { q: "É plataforma própria ou WooCommerce?", a: "Trabalhamos com **plataforma própria escalável** ou WooCommerce, conforme o projeto." },
        { q: "Quanto custa manter uma loja?", a: "Hospedagem a partir de **R$ 250/mês** com SSL, backup e suporte incluso." },
        { q: "Qual o prazo?", a: "**30 a 60 dias** para MVP pronto com produtos cadastrados e integrações ativas." },
      ];

export const Route = createFileRoute("/solucoes-web/loja-virtual")({
  head: () => buildLPMeta({
    title: "Criação de Loja Virtual | E-commerce Profissional com Alta Conversão",
    description: "Criação de loja virtual completa: catálogo, checkout otimizado, integração com meios de pagamento, frete, marketplaces e ERP.",
    keywords: "criação de loja virtual, e-commerce, loja online, plataforma e-commerce, loja virtual profissional, e-commerce personalizado",
    canonical: URL,
    h1: "Criação de Loja Virtual Profissional",
    breadcrumbs: [
      { name: "Home", to: "https://www.ncbrasil.com.br/" },
      { name: "Soluções Web", to: "https://www.ncbrasil.com.br/solucoes-web" },
      { name: "Loja Virtual", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", name: "Home" }, { to: "/solucoes-web", name: "Soluções Web" }, { to: "/solucoes-web/loja-virtual", name: "Loja Virtual" }]}
      eyebrow="E-commerce"
      h1={<>Loja Virtual pronta para <span className="text-gradient">vender muito</span></>}
      intro={<>Plataforma de e-commerce completa com **checkout otimizado, integração com marketplaces e meios de pagamento**. De 0 a R$ 100 mil/mês com estrutura escalável.</>}
      stats={[{ value: "300+", name: "Lojas ativas" }, { value: "R$ 50Mi", name: "GMV anual" }, { value: "3,2%", name: "Taxa conversão" }, { value: "99,9%", name: "Uptime" }]}
      benefits={[
        { icon: ShoppingCart, title: "Checkout Otimizado", desc: "Checkout **em uma página** com Pix, cartão e boleto — reduz abandono em 40%." },
        { icon: CreditCard, title: "Múltiplos Pagamentos", desc: "Integração com **Mercado Pago, PagSeguro, Cielo, Pagar.me, Stripe** e Pix." },
        { icon: Truck, title: "Frete Automático", desc: "Correios, Melhor Envio, Loggi, Jadlog — **cálculo em tempo real** por CEP." },
        { icon: Store, title: "Multi-marketplace", desc: "Sincronização com **Mercado Livre, Shopee, Amazon e Magalu** via ERP." },
      ]}
      features={[
        { icon: Package, title: "Gestão de Produtos", desc: "Variações, grades, kits, combos, produtos digitais e assinaturas." },
        { icon: Percent, title: "Cupons e Promoções", desc: "Descontos progressivos, cupom por categoria, frete grátis condicional." },
        { icon: BarChart3, title: "Relatórios Completos", desc: "Vendas, produtos mais vendidos, ROI de campanhas e funil de abandono." },
        { icon: Users, title: "CRM Integrado", desc: "Segmentação de clientes, e-mail marketing e recuperação de carrinho." },
        { icon: Smartphone, title: "PWA Mobile", desc: "Loja instalável no celular como app — sem depender das lojas de apps." },
        { icon: ShieldCheck, title: "Antifraude", desc: "Análise automática de risco com **ClearSale, Konduto ou Cybersource**." },
      ]}
      faq={lpFaq}
      relatedNewsTags={["E-commerce","Loja Virtual","Sistemas"]}
    />
  ),
});
