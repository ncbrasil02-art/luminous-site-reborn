import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck, Banknote, BarChart3, Bell, Coins, CreditCard, Dice5,
  FileCheck, Gamepad2, Gift, Globe, Layers, Lock, MessageCircle, Palette,
  QrCode, Rocket, ScanLine, ShieldCheck, Smartphone, Sparkles, Spade,
  Trophy, Users, Wallet, Zap,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/plataforma-chinesa-apostas-cassino";

const lpFaq = [
  { q: "O que é uma plataforma chinesa de cassino / apostas?", a: "É uma **arquitetura de iGaming turnkey de origem asiática** (Filipinas, China, Malta), reconhecida por rodar **milhares de slots agregados, cassino ao vivo, sportsbook, mini-games e Pix** em uma única infra escalável. A NC Brasil oferece essa mesma tecnologia **tropicalizada para o Brasil** com Pix nativo, KYC BR e suporte 24/7 no fuso." },
  { q: "Já vem com jogos de slots e cassino ao vivo integrados?", a: "Sim. Agregadores como **Pragmatic Play, PG Soft, Evolution Gaming, Playtech Live, Endorphina, Spribe (Aviator), BGaming, Ezugi, Amatic e mais de 30 provedores** — total superior a **8.000 jogos** disponíveis em catálogo." },
  { q: "É legal operar cassino online no Brasil?", a: "Com a **Lei 14.790/2023** e a regulamentação da **SPA/MF (Portaria 1.475/2024)**, apostas de quota fixa e cassino online são permitidos mediante licença. Orientamos o processo: **licença estadual (LOTERJ, IPEM-PB, LOTECE) ou federal** e suporte na documentação." },
  { q: "Suporta sportsbook (apostas esportivas)?", a: "Sim, sportsbook completo com **odds ao vivo, cash out, multiplas, sistemas, boletim** e feeds via Betradar, Sportradar ou BTOBet. Cobertura de futebol, basquete, tênis, eSports e mais de 60 modalidades." },
  { q: "Como funciona o Pix e o KYC para o mercado brasileiro?", a: "**Pix instantâneo (depósito e saque) via múltiplos PSPs brasileiros** com fallback automático. KYC completo com **CPF/Serpro, biometria facial (Unico/Datavalid)**, prova de renda quando exigido pela SPA, e integração AML." },
  { q: "É multi-tenant / white label?", a: "Sim, arquitetura **multi-tenant** — várias marcas na mesma infra com dados isolados, layout independente, catálogo de jogos por operador e reports segregados." },
  { q: "Como funciona o modelo comercial?", a: "**Setup inicial + mensalidade fixa + fee por transação Pix**. Não cobramos % sobre GGR. Empresas com receita > R$5Mi/mês têm plano dedicado com SLA premium." },
  { q: "Quais recursos anti-bônus abuse e antifraude?", a: "**Engine antibônus** proprietário com detecção de multicontas via device fingerprint, análise comportamental de padrões de aposta, **rollover configurável, limite por game category** e blacklist automática de padrões suspeitos." },
  { q: "É possível operar com afiliados e programa VIP?", a: "Sim. **Módulo de afiliados completo** com CPA + RevShare + Hybrid + Sub-affiliate. **Programa VIP** com níveis, cashback progressivo, gerente pessoal e retenção via reactivation campaigns." },
  { q: "Suporta cripto (BTC, USDT) além de Pix?", a: "Sim, integração nativa com **carteiras cripto** (BTC, ETH, USDT-TRC20, USDC) via processadores como CoinsPaid, BitPay ou nó próprio. Depósito instantâneo com conversão automática para BRL." },
  { q: "Qual o prazo de entrega?", a: "**45 a 90 dias** para white label completo com sportsbook + cassino + slots + Pix + KYC operante. Operações customizadas com jogos proprietários levam 6 meses." },
  { q: "Vocês assessoram no processo de licenciamento SPA/MF?", a: "Sim, temos **parceiros jurídicos especializados** em iGaming que assessoram no processo de licença, documentação, capital social exigido e estruturação societária." },
  { q: "Suporta cassino ao vivo com dealers brasileiros?", a: "Sim, integramos com **estúdios de live casino** com dealers brasileiros (Pragmatic Play Brazil, Evolution Brazil) — mesa em português com horário nobre BR." },
  { q: "Como é o suporte técnico?", a: "**24/7 em português** por WhatsApp, ticket e videoconferência. SLA de resposta em 15 minutos e resolução crítica em 2h para clientes enterprise." },
];

export const Route = createFileRoute("/plataforma-chinesa-apostas-cassino")({
  head: () => buildLPMeta({
    title: "Plataforma de Cassino Online White Label | Sportsbook + Slots + Pix",
    description: "Plataforma completa de cassino online e apostas esportivas white label: 8.000+ slots (Pragmatic, PG Soft, Aviator), cassino ao vivo, sportsbook, Pix instantâneo, KYC BR e licenciamento SPA. Deploy em 45 dias.",
    keywords: "plataforma cassino online, white label cassino, sistema cassino online, plataforma chinesa cassino, plataforma apostas esportivas, sportsbook white label, sistema de apostas, plataforma iGaming, cassino com pix, plataforma slots online",
    canonical: URL,
    h1: "Plataforma de Cassino Online e Apostas White Label",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Sistemas", to: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { label: "Plataforma Cassino", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[
        { to: "/", label: "Home" },
        { to: "/nossos-sistemas", label: "Sistemas" },
        { to: "/plataforma-chinesa-apostas-cassino", label: "Plataforma Cassino" },
      ]}
      eyebrow="iGaming · White Label · Pix + SPA/MF"
      h1={<>Plataforma de <span className="text-gradient">Cassino Online e Apostas</span> White Label — Sportsbook, Slots e Pix Nativo</>}
      intro={<>Solução <strong className="text-foreground">iGaming turnkey</strong> com a mesma arquitetura das <strong className="text-foreground">plataformas chinesas / asiáticas de referência</strong>, tropicalizada para o Brasil: <strong className="text-foreground">8.000+ jogos agregados</strong> (Pragmatic Play, PG Soft, Evolution, Aviator), <strong className="text-foreground">sportsbook completo</strong> com odds ao vivo, cassino ao vivo com dealers BR, <strong className="text-foreground">Pix instantâneo</strong>, KYC brasileiro e conformidade com a <strong className="text-foreground">Lei 14.790/2023 e Portaria SPA/MF 1.475/2024</strong>. Sem % sobre GGR — <strong className="text-foreground">você é o operador</strong>.</>}
      stats={[
        { value: "8.000+", label: "Jogos agregados" },
        { value: "30+", label: "Provedores" },
        { value: "<30s", label: "Pix depósito/saque" },
        { value: "99.99%", label: "Uptime SLA" },
      ]}
      clients={["Bet BR", "GO Cassino", "Aposta VIP", "Casino Pix", "Sport Real", "Play Brasil", "Bet Pro", "Slot Fun"]}
      problem={{
        title: <>White labels internacionais te tornam <span className="text-destructive">refém do fornecedor</span></>,
        items: [
          "**SoftGamings, GamingTec, UltraPlay cobram 15% a 30% sobre GGR** — em R$5Mi/mês, você entrega até R$1,5Mi ao fornecedor.",
          "**Suporte no fuso de Malta ou Chipre** — problema no domingo de futebol brasileiro? Boa sorte até segunda.",
          "**Integração Pix ruim e KYC estrangeiro** rejeita CPF válido, saque demora dias, jogador migra para o concorrente.",
          "**Você não controla o RTP, o catálogo nem as promoções** — tudo depende de aprovar com o fornecedor.",
          "**Migrar de plataforma = perder base de jogadores** (o dado é deles, não seu).",
          "**Falta de assessoria de licenciamento SPA/MF** — você fica sozinho no processo regulatório brasileiro.",
        ],
      }}
      solution={{
        title: <>Uma plataforma <span className="text-gradient">tropicalizada, sua, com Pix nativo e assessoria SPA</span></>,
        desc: <>Entregamos a mesma arquitetura de <strong className="text-foreground">alta escala das plataformas asiáticas</strong>, adaptada para o Brasil: <strong className="text-foreground">código sob licença</strong>, hospedagem em cloud com PoP no BR, gateway Pix direto na sua conta, KYC nacional, catálogo de 8.000+ jogos, sportsbook completo e <strong className="text-foreground">assessoria jurídica de licenciamento SPA/MF</strong>. Nossa equipe opera junto com você por 90 dias.</>,
        highlights: [
          "**8.000+ jogos** — Pragmatic, PG Soft, Evolution, Aviator, Endorphina",
          "**Sportsbook completo** — feeds Betradar/Sportradar",
          "**Cassino ao vivo** com dealers brasileiros",
          "**Pix instantâneo BR** com múltiplos PSPs",
          "**KYC brasileiro** — Serpro, Datavalid, Unico",
          "**Assessoria SPA/MF** com parceiros jurídicos",
          "**Multi-tenant** — várias marcas na mesma infra",
          "**Suporte 24/7 no Brasil** em português",
        ],
      }}
      benefits={[
        { icon: Dice5, title: "Catálogo Massivo de Slots", desc: "**Pragmatic Play, PG Soft, Endorphina, BGaming, Spribe (Aviator), Amatic, Booongo** e mais 30 provedores — mais de **8.000 jogos** prontos." },
        { icon: Spade, title: "Cassino ao Vivo", desc: "**Evolution Gaming, Playtech, Ezugi, Pragmatic Live** — mesas 24/7 com **dealers brasileiros** em horário nobre BR." },
        { icon: Trophy, title: "Sportsbook Completo", desc: "**Odds ao vivo, cash out, múltiplas, sistemas, +60 modalidades** com feeds Betradar/Sportradar." },
        { icon: Banknote, title: "Pix Nativo BR", desc: "**Depósito e saque via Pix em segundos** com múltiplos PSPs (Efí, Pagar.me, PagBank), fallback automático." },
      ]}
      features={[
        { icon: Gamepad2, title: "Mini-games (Aviator, Plinko, Mines)", desc: "**Crash games** de altíssima retenção — Aviator, JetX, Plinko, Mines integrados via Spribe, BGaming e Turbo Games." },
        { icon: Coins, title: "Carteira Multi-moeda", desc: "**BRL, USD, USDT-TRC20, BTC, ETH** — saldo unificado com conversão automática." },
        { icon: Gift, title: "Engine de Bônus", desc: "**Welcome bonus, freespins, reload, cashback, torneios, missões** com rollover configurável e antibônus abuse." },
        { icon: Users, title: "Programa VIP em Níveis", desc: "**Bronze → Prata → Ouro → Diamante → VIP** com cashback progressivo, gerente pessoal e ofertas exclusivas." },
        { icon: Smartphone, title: "PWA + App Nativo", desc: "**iOS + Android** publicáveis nas lojas (via APK direto onde a Apple restringe), notificação push segmentada." },
        { icon: Bell, title: "Retention Engine", desc: "**Campanhas automáticas de reativação, alerta de bônus, missão diária, spin da roleta** para engajamento contínuo." },
        { icon: BarChart3, title: "BI de iGaming", desc: "**GGR, NGR, RTP por jogo, ARPPU, LTV, cohort, funnel** — dashboards prontos e API para BI externo." },
        { icon: Globe, title: "Multi-idioma", desc: "**PT-BR, EN, ES, ZH** — pronto para LATAM e expansão asiática." },
        { icon: MessageCircle, title: "Suporte Omnichannel", desc: "**Chat 24/7 no site + WhatsApp + Telegram** com IA de primeiro atendimento e escalonamento humano." },
      ]}
      modules={[
        {
          icon: Dice5,
          title: "Módulo Cassino & Slots",
          items: [
            "Agregação de 30+ provedores",
            "Categorização (novos, populares, jackpot)",
            "Filtros por RTP, volatilidade, provedor",
            "Torneios inter-jogos com premiação",
            "Demo mode para novos jogadores",
          ],
        },
        {
          icon: Trophy,
          title: "Módulo Sportsbook",
          items: [
            "Feeds Betradar / Sportradar / BTOBet",
            "Odds em tempo real + cash out",
            "Simples, múltiplas, sistemas, criador de aposta",
            "Estatísticas ao vivo",
            "Streaming de eventos integrado",
          ],
        },
        {
          icon: Wallet,
          title: "Módulo Carteira & Pix",
          items: [
            "Múltiplos PSPs Pix com fallback",
            "Cartão de crédito e cripto",
            "KYC completo (Serpro/Unico/Datavalid)",
            "AML + monitoramento COAF",
            "Saque em minutos com verificação",
          ],
        },
        {
          icon: Gift,
          title: "Módulo Bônus & Promoções",
          items: [
            "Welcome bonus configurável",
            "Freespins por jogo/provedor",
            "Cashback semanal automático",
            "Missões, torneios, spin diário",
            "Antibônus abuse integrado",
          ],
        },
        {
          icon: Users,
          title: "Módulo Afiliados & VIP",
          items: [
            "CPA + RevShare + Hybrid",
            "Sub-afiliados em 3 níveis",
            "Programa VIP com gerente pessoal",
            "Cashback progressivo por nível",
            "Painel dedicado ao afiliado",
          ],
        },
        {
          icon: ShieldCheck,
          title: "Módulo Compliance & Segurança",
          items: [
            "Conformidade Lei 14.790/2023",
            "Autoexclusão + limites responsáveis",
            "Verificação de idade + KYC",
            "Reports SPA/MF automáticos",
            "Log imutável + trilha de auditoria",
          ],
        },
      ]}
      useCases={[
        { icon: Rocket, title: "Novo Operador Licenciado", desc: "Empresa que obteve licença **SPA/MF ou estadual** e precisa de plataforma pronta para lançar em 60 dias." },
        { icon: Sparkles, title: "Marca de Influenciador", desc: "Criador com **milhões de seguidores** que quer sua própria plataforma de apostas com nome forte." },
        { icon: Globe, title: "Expansão LATAM", desc: "Operador BR que quer **entrar em México, Colômbia, Peru** com plataforma multi-jurisdicional." },
        { icon: Trophy, title: "Clube ou Federação", desc: "Time / federação esportiva com **base engajada** que quer sportsbook temático oficial." },
        { icon: Coins, title: "Plataforma Cripto-Native", desc: "Operação **cripto-first** com foco em USDT, BTC e público internacional." },
        { icon: Layers, title: "Rede de Franquias", desc: "Modelo **multi-tenant white label** com franqueados regionais operando marcas independentes." },
      ]}
      integrations={[
        { name: "Pragmatic Play", category: "Slots + Live" },
        { name: "PG Soft", category: "Slots" },
        { name: "Evolution Gaming", category: "Live Casino" },
        { name: "Spribe (Aviator)", category: "Crash Games" },
        { name: "Endorphina", category: "Slots" },
        { name: "BGaming", category: "Slots + Crash" },
        { name: "Playtech", category: "Slots + Live" },
        { name: "Ezugi", category: "Live Casino" },
        { name: "Amatic", category: "Slots" },
        { name: "Booongo", category: "Slots" },
        { name: "Betradar", category: "Sportsbook Feed" },
        { name: "Sportradar", category: "Sportsbook Feed" },
        { name: "Efí (Pix)", category: "Pagamentos" },
        { name: "Pagar.me", category: "Pagamentos" },
        { name: "PagBank", category: "Pagamentos" },
        { name: "CoinsPaid", category: "Cripto" },
        { name: "Serpro / CPF", category: "KYC" },
        { name: "Datavalid", category: "Biometria" },
        { name: "Unico Check", category: "Face Match" },
        { name: "AppsFlyer", category: "Attribution" },
      ]}
      security={[
        { icon: FileCheck, title: "Conformidade SPA/MF", desc: "**Lei 14.790/2023, Portaria 1.475/2024, reports mensais automáticos** e trilha de auditoria completa." },
        { icon: Lock, title: "LGPD + PCI-DSS", desc: "**Criptografia em repouso e trânsito, tokenização de cartão, DPO parceiro** e política auditada." },
        { icon: ScanLine, title: "KYC + Biometria + AML", desc: "**Face match, prova de vida, CPF/Serpro, bureau de crédito** e monitoramento antilavagem." },
        { icon: ShieldCheck, title: "Jogo Responsável", desc: "**Autoexclusão, limites de depósito/perda/tempo, cool-down** e integração com programas de apoio." },
      ]}
      timeline={[
        { step: "Semana 1-2", title: "Discovery & Compliance", desc: "**Definição de escopo, jurisdição, estruturação societária, licenciamento** e identidade visual." },
        { step: "Semana 3-6", title: "Setup & Integração", desc: "**Infra cloud + CDN BR, agregadores de jogos, sportsbook feeds, Pix + KYC** e ambiente de homologação." },
        { step: "Semana 7-8", title: "Homologação & Certificação", desc: "**Testes de carga (50k concurrent), auditoria de RTP, certificação de RNG, treinamento** e ajustes." },
        { step: "Semana 9-12", title: "Go-Live", desc: "**Soft launch com base restrita, ajustes, lançamento público, campanha de aquisição** e monitoramento 24/7." },
        { step: "Mês 4 em diante", title: "Otimização Contínua", desc: "**A/B tests, novos provedores, ajuste de RTP, expansão LATAM, novos mercados** e evolução do produto." },
      ]}
      comparative={{
        usLabel: "NC Brasil",
        themLabel: "White label internacional",
        rows: [
          { feature: "Comissão sobre GGR", us: "0%", them: "15% a 30%" },
          { feature: "Setup médio", us: "R$ transparente", them: "USD 50k a 200k" },
          { feature: "Dono do banco de dados", us: true, them: false },
          { feature: "Pix nativo brasileiro", us: true, them: "Parcial / travado" },
          { feature: "KYC brasileiro (Serpro/CPF)", us: true, them: false },
          { feature: "Assessoria licença SPA/MF", us: true, them: false },
          { feature: "Cassino ao vivo com dealer BR", us: true, them: "Só EN" },
          { feature: "Suporte 24/7 no Brasil (PT-BR)", us: true, them: false },
          { feature: "Multi-tenant white label", us: true, them: "Add-on caro" },
          { feature: "Catálogo 8.000+ jogos", us: true, them: true },
          { feature: "Sportsbook completo integrado", us: true, them: "Módulo à parte" },
          { feature: "Deploy em 45-90 dias", us: true, them: "6 a 12 meses" },
        ],
      }}
      testimonials={[
        { quote: "Lançamos em 60 dias com sportsbook + cassino + Pix funcionando. Nenhum white label europeu chegou perto do prazo — nem do preço.", author: "Fernando Coelho", role: "Bet BR · SP" },
        { quote: "O Pix nativo brasileiro fez nossa taxa de conversão de depósito subir 3x. Jogador brasileiro não tolera saque em D+2.", author: "Camila Ribeiro", role: "Casino Pix · RJ" },
        { quote: "A assessoria da NC no processo SPA/MF valeu o contrato. Saímos do zero à licença em 4 meses.", author: "Rafael Nunes", role: "Sport Real · PR" },
      ]}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para lançar seu <span className="text-gradient">operador de iGaming</span>?</>}
      finalCtaDesc={<>Receba um <strong className="text-foreground">plano executivo em 24h</strong> com arquitetura, catálogo de jogos, orçamento, cronograma e roadmap de licenciamento SPA/MF. <strong className="text-foreground">Consultoria estratégica gratuita</strong> com nosso time de iGaming.</>}
      relatedNewsTags={["Cassino", "Apostas", "iGaming", "Sistemas"]}
    />
  ),
});
