import { createFileRoute } from "@tanstack/react-router";
import { Banknote, Coins, Gift, ScanLine, ShieldCheck, Smartphone, Sparkles, Ticket, Trophy, Users, Wallet, Zap } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistemas/sistema-de-raspadinha";

const lpFaq = [
        { q: "É legal operar raspadinhas online no Brasil?", a: "Depende do modelo. Operamos como **título de capitalização, promoção comercial ou fantasy** — orientamos o modelo legal ideal." },
        { q: "Como funciona o estoque de prêmios?", a: "Configure lotes com **quantidade, valor e probabilidade** — o sistema garante distribuição matemática correta." },
        { q: "Aceita pagamento via Pix?", a: "Sim, Pix instantâneo para depósito e saque com **conciliação automática 24/7**." },
        { q: "Vocês entregam identidade visual?", a: "Sim, criamos **arte das raspadinhas, animação e app** — 100% white label." },
        { q: "Qual o custo de operação?", a: "Modelo **setup + mensalidade + fee por transação** — envie seu volume estimado para proposta." },
      ];

export const Route = createFileRoute("/sistemas/sistema-de-raspadinha")({
  head: () => buildLPMeta({
    title: "Sistema de Raspadinha Online | Plataforma Instant Win",
    description: "Plataforma completa de raspadinhas digitais com prêmios instantâneos, Pix, gestão de estoque de prêmios, antifraude e app mobile.",
    keywords: "sistema de raspadinha online, raspadinha digital, plataforma instant win, sistema de prêmios online, raspadinha personalizada",
    canonical: URL,
    h1: "Plataforma de Raspadinhas Digitais",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/sistemas" },
      { name: "Raspadinha Online", url: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/sistemas", label: "Sistemas" }, { to: "/sistemas/sistema-de-raspadinha", label: "Raspadinha Online" }]}
      eyebrow="Instant Win"
      h1={<>Plataforma de <span className="text-gradient">Raspadinhas Digitais</span></>}
      intro={<>Sistema completo para criar raspadinhas online com <strong className="text-foreground">prêmios instantâneos em Pix</strong>, animações realistas de raspagem, controle de estoque de prêmios e conformidade legal.</>}
      stats={[{ value: "5M+", label: "Raspadinhas jogadas" }, { value: "R$3Mi", label: "Prêmios distribuídos" }, { value: "24h", label: "Saque via Pix" }, { value: "100%", label: "Antifraude" }]}
      benefits={[
        { icon: ScanLine, title: "Animação Realista", desc: "Efeito de raspagem **canvas + haptic feedback** para experiência premium no mobile." },
        { icon: Banknote, title: "Prêmio em Pix", desc: "Prêmios em dinheiro creditados **direto na carteira** e sacáveis via Pix instantâneo." },
        { icon: ShieldCheck, title: "RNG Auditável", desc: "**Gerador aleatório certificado** com auditoria externa e histórico verificável por usuário." },
        { icon: Trophy, title: "Múltiplos Prêmios", desc: "**Dinheiro, produtos, cashback, freespins** e prêmios físicos com entrega." },
      ]}
      features={[
        { icon: Coins, title: "Créditos & Recargas", desc: "Sistema de créditos com **combos, cashback e bônus** por depósito." },
        { icon: Wallet, title: "Carteira Segura", desc: "Saldo, extrato completo, saque via Pix com KYC integrado." },
        { icon: Gift, title: "Raspadinhas Temáticas", desc: "Datas comemorativas, marcas parceiras e temporadas — arte customizada." },
        { icon: Users, title: "Programa de Indicação", desc: "Ganhe raspadinhas grátis por amigo convidado ativo." },
        { icon: Smartphone, title: "PWA + App Nativo", desc: "Instalável no celular com **notificações push** de novas raspadinhas." },
        { icon: Zap, title: "Escala Massiva", desc: "Infraestrutura para **milhares de jogadas por segundo** com filas assíncronas." },
      ]}
      faq={lpFaq}
    />
  ),
});
