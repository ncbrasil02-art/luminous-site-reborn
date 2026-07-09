import { createFileRoute } from "@tanstack/react-router";
import { Banknote, BarChart3, Dice5, Gamepad2, Gift, Globe2, Headphones, ShieldCheck, Sparkles, Trophy, Users, Wallet } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistemas/plataforma-chinesa-apostas-cassino";

export const Route = createFileRoute("/sistemas/plataforma-chinesa-apostas-cassino")({
  head: () => buildLPMeta({
    title: "Plataforma de Cassino Online | White Label Completa — NC Brasil",
    description: "Plataforma completa para cassino online: slots, live casino, sportsbook, Pix instantâneo, gateway antifraude, painel de operador e app mobile.",
    keywords: "plataforma de cassino online, white label cassino, sistema de apostas, iGaming, plataforma bet, cassino brasileiro",
    canonical: URL,
    h1: "Plataforma Completa para Cassino Online",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/sistemas" },
      { name: "Plataforma de Cassino", url: URL },
    ],
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/sistemas", label: "Sistemas" }, { to: "/sistemas/plataforma-chinesa-apostas-cassino", label: "Plataforma de Cassino" }]}
      eyebrow="iGaming"
      h1={<>Plataforma <span className="text-gradient">Cassino Online</span> White Label</>}
      intro={<>Solução <strong className="text-foreground">turnkey</strong> para operar seu próprio cassino online: <strong className="text-foreground">slots Pragmatic e Evolution</strong>, live casino, sportsbook e Pix instantâneo em uma única stack.</>}
      stats={[{ value: "5.000+", label: "Jogos integrados" }, { value: "50+", label: "Provedores" }, { value: "R$1B+", label: "Volume processado" }, { value: "99.99%", label: "Uptime" }]}
      benefits={[
        { icon: Gamepad2, title: "Catálogo Premium", desc: "Integração com **Pragmatic Play, Evolution, PG Soft, Spribe, BGaming** e +50 provedores certificados." },
        { icon: Banknote, title: "Pix Instantâneo", desc: "Depósito e saque via **Pix 24/7** com aprovação em segundos e conciliação automatizada." },
        { icon: ShieldCheck, title: "KYC & Antifraude", desc: "Validação biométrica, **AML, PLD e limite responsável** por usuário." },
        { icon: BarChart3, title: "BI em Tempo Real", desc: "GGR, NGR, RTP, hold, cohort de jogadores e **relatórios regulatórios** prontos." },
      ]}
      features={[
        { icon: Dice5, title: "Slots & Live Casino", desc: "Roleta ao vivo, blackjack, baccarat, crash games e slots mais populares." },
        { icon: Trophy, title: "Sportsbook Integrado", desc: "Odds em tempo real de futebol, basquete, e-sports e mais de 40 esportes." },
        { icon: Wallet, title: "Carteira Unificada", desc: "Saldo único para cassino, esportes e bônus — sem transferência entre módulos." },
        { icon: Gift, title: "Sistema de Bônus", desc: "Welcome bonus, cashback, freespins, rollover configurável e torneios." },
        { icon: Users, title: "Programa de Afiliados", desc: "Painel completo com **CPA, RevShare, sub-afiliados** e trackers dedicados." },
        { icon: Headphones, title: "Suporte 24/7", desc: "Chat, e-mail e WhatsApp em pt-BR integrados no admin do operador." },
      ]}
      faq={[
        { q: "A plataforma é certificada?", a: "Sim, com **certificações GLI, iTech Labs** e prontos para regulamentação SIGAP/SPA no Brasil." },
        { q: "Vocês fornecem licença de operação?", a: "Trabalhamos com **licenças de Curaçao, Anjouan e SPA-BR** através de parceiros consultivos." },
        { q: "Quanto tempo leva para colocar no ar?", a: "Um cassino white label completo fica operacional em **45 a 90 dias** com integrações e app." },
        { q: "Aceita criptomoedas?", a: "Sim, **BTC, USDT (ERC20/TRC20)** e stablecoins com wallet custodial integrada." },
        { q: "Fazem app iOS e Android?", a: "Sim, **PWA + apps nativos** publicados via TestFlight, sideload ou lojas alternativas conforme política." },
      ]}
    />
  ),
});
