import { createFileRoute } from "@tanstack/react-router";
import { Banknote, BarChart3, Gift, ScanLine, ShieldCheck, ShoppingBag, Smartphone, Trophy, Users, Wallet, Zap, FileCheck } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistemas/sistema-de-rifas";

export const Route = createFileRoute("/sistemas/sistema-de-rifas")({
  head: () => buildLPMeta({
    title: "Sistema de Rifas Online | Plataforma Legal e Completa",
    description: "Sistema profissional para rifas online: sorteios pela Loteria Federal, Pix instantâneo, cotas ilimitadas, painel do organizador e app do participante.",
    keywords: "sistema de rifas online, plataforma de rifas, rifa online legalizada, sistema de sorteios, rifa com pix, rifa pela loteria federal",
    canonical: URL,
    h1: "Plataforma Completa para Rifas Online",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/sistemas" },
      { name: "Sistema de Rifas", url: URL },
    ],
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/sistemas", label: "Sistemas" }, { to: "/sistemas/sistema-de-rifas", label: "Sistema de Rifas" }]}
      eyebrow="Rifas Online"
      h1={<>Plataforma para <span className="text-gradient">Rifas Online</span></>}
      intro={<>Crie e opere <strong className="text-foreground">rifas legalizadas</strong> com sorteio pela Loteria Federal, cotas de R$0,10 a R$1.000, Pix instantâneo e sistema antifraude.</>}
      stats={[{ value: "50Mi+", label: "Cotas vendidas" }, { value: "3.000+", label: "Rifas realizadas" }, { value: "R$500K", label: "Ticket médio" }, { value: "5⭐", label: "Nota Reclame Aqui" }]}
      benefits={[
        { icon: Trophy, title: "Sorteio Loteria Federal", desc: "Extração automática pela **Loteria Federal ou premiação por cota fixa** com laudo público." },
        { icon: Banknote, title: "Pix em Segundos", desc: "Reserva de cota, **pagamento e liberação em <10s** com webhook do PSP." },
        { icon: FileCheck, title: "Conformidade Legal", desc: "Modelos de **título de capitalização, associação sem fins lucrativos ou autorização SECAP**." },
        { icon: ShieldCheck, title: "Cotas Auditáveis", desc: "Cada cota gera **hash blockchain** — comprador confere sua cota no sorteio." },
      ]}
      features={[
        { icon: ShoppingBag, title: "Cotas Ilimitadas", desc: "De 100 a **10 milhões de cotas** por rifa, com filtros e cota premiada." },
        { icon: Wallet, title: "Múltiplos Meios", desc: "Pix, cartão, boleto e crédito de cotas anteriores." },
        { icon: Gift, title: "Cota Bônus & Descontos", desc: "Combos com desconto progressivo — leva 10 paga 8, etc." },
        { icon: Users, title: "Ranking de Compradores", desc: "Prêmio para top compradores e cota premiada aleatória extra." },
        { icon: Smartphone, title: "App do Participante", desc: "Notificação do sorteio, cotas compradas e histórico de rifas." },
        { icon: BarChart3, title: "Painel do Organizador", desc: "Vendas em tempo real, conciliação e **saque automático** para conta." },
      ]}
      faq={[
        { q: "Rifa online é legal no Brasil?", a: "Sim, se estruturada corretamente como **título de capitalização, promoção comercial autorizada pela SECAP** ou por associação. Orientamos o modelo ideal." },
        { q: "Como funciona o sorteio?", a: "Pela **extração da Loteria Federal** (5 dezenas correspondentes à cota) ou premiação de cota fixa comprada." },
        { q: "É possível fazer rifas beneficentes?", a: "Sim, temos modelo específico para **associações e ONGs** com prestação de contas transparente." },
        { q: "Aceita split de pagamento?", a: "Sim, split automático entre **organizador, plataforma e afiliados** integrado com Pagar.me e Iugu." },
        { q: "Qual o prazo de implantação?", a: "**7 a 15 dias** para versão white label pronta; customizações levam mais tempo." },
      ]}
    />
  ),
});
