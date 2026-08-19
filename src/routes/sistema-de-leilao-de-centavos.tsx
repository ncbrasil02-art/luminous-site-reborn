import { createFileRoute } from "@tanstack/react-router";
import { Banknote, BarChart3, Clock, Coins, Gift, ShieldCheck, Sparkles, Timer, Trophy, Users, Wallet, Zap } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistema-de-leilao-de-centavos";

const lpFaq = [
        { q: "Leilão de centavos é legal no Brasil?", a: "Sim, quando estruturado como **plataforma de skill/gaming, promoção comercial ou clube de compras** — orientamos o formato mais seguro." },
        { q: "Como funciona a economia dos créditos?", a: "Usuário compra pacote (ex: 100 créditos por R$50). Cada lance custa 1 crédito e sobe o preço em R$0,01." },
        { q: "Vocês entregam os prêmios?", a: "Não fazemos a logística, mas integramos com **Melhor Envio, Correios e transportadoras** para automatizar o envio." },
        { q: "Como evitar multicontas?", a: "**KYC + device fingerprint + análise comportamental** identificam padrões suspeitos automaticamente." },
        { q: "Aceita criptomoedas?", a: "Sim, opção de créditos comprados em **USDT/BTC** via gateway integrado." },
      ];

export const Route = createFileRoute("/sistema-de-leilao-de-centavos")({
  head: () => buildLPMeta({
    title: "Sistema de Leilão de Centavos | Plataforma Penny Auction",
    description: "Plataforma completa para leilão de centavos (penny auction): créditos, timer anti-sniping, ranking de arrematantes, entrega de prêmios e Pix.",
    keywords: "sistema leilão de centavos, penny auction, plataforma leilão centavos, sistema de lances, leilão online centavos",
    canonical: URL,
    h1: "Plataforma Completa para Leilão de Centavos",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Sistemas", to: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { label: "Leilão de Centavos", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-sistemas", label: "Sistemas" }, { to: "/sistema-de-leilao-de-centavos", label: "Leilão de Centavos" }]}
      subtitle="Penny Auction"
      h1={<>Plataforma de <span className="text-gradient">Leilão de Centavos</span></>}
      intro={<>Sistema turnkey para operar leilões de centavos ao estilo <strong className="text-foreground">MadBid / QuiBids</strong>: pacotes de créditos, lances por 1 centavo, timer regressivo e entrega automatizada de prêmios.</>}
      stats={[{ value: "500K+", label: "Lances/mês" }, { value: "R$2Mi", label: "Prêmios entregues" }, { value: "97%", label: "Retenção 30d" }, { value: "1s", label: "Latência de lance" }]}
      benefits={[
        { icon: Coins, title: "Pacotes de Créditos", desc: "Configuração de **pacotes promocionais, bônus por volume e cashback** em créditos." },
        { icon: Timer, title: "Timer Anti-Sniping", desc: "Prorrogação automática **10s a cada novo lance** — engajamento máximo até o fim." },
        { icon: Trophy, title: "Auto-lance (Bot)", desc: "Usuários configuram lances automáticos com **limite máximo de créditos**." },
        { icon: Banknote, title: "Buy Now Inteligente", desc: "Opção de comprar o produto abatendo **valor dos lances gastos**." },
      ]}
      features={[
        { icon: Zap, title: "WebSocket em Tempo Real", desc: "Cada lance atualiza timer e ranking em **<200ms** para todos os espectadores." },
        { icon: Wallet, title: "Carteira & Pix", desc: "Créditos, saldo em BRL, saque via Pix e conciliação automática." },
        { icon: Users, title: "Ranking Público", desc: "Top arrematantes, biggest winners e leilões mais disputados." },
        { icon: Gift, title: "Prêmios Diversificados", desc: "Eletrônicos, joias, gift cards, cripto — controle de estoque e logística." },
        { icon: Clock, title: "Leilões Programados", desc: "Cronograma diário com **leilões flash, VIP e beginners-only**." },
        { icon: ShieldCheck, title: "Antifraude Robusto", desc: "**Device fingerprint, KYC, limite diário e blacklist** — controle multicontas." },
      ]}
      faq={lpFaq}
      relatedNewsTags={["Leilão", "Leilão Online", "E-commerce", "Sistemas"]}
    />
  ),
});
