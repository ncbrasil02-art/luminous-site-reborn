import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import {
  Banknote, BarChart3, Bell, Building2, Clock, Coins, CreditCard,
  FileCheck, Gift, Globe, Layers, Lock, MessageCircle, Palette,
  Rocket, ScanLine, ShieldCheck, ShoppingBag, Smartphone, Sparkles,
  Ticket, Trophy, Users, Wallet, Zap,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";
import { rifasTestimonials } from "@/lib/testimonials.data";
import { PartnerCarousel } from "@/components/PartnerCarousel";

// Image Assets - Otimizadas com SEO
const rifasLogoUrl = "/img-sistema-de-rifas/nc-rifas-logo-premium.png";
const rifasShowcase1Url = "/img-sistema-de-rifas/sistema-de-rifas-dashboard-admin-01.png";
const rifasShowcase2Url = "/img-sistema-de-rifas/sistema-de-rifas-configuracoes-identidade-02.png";
const rifasShowcase3Url = "/img-sistema-de-rifas/sistema-de-rifas-edicao-campanha-03.png";
const rifasShowcase4Url = "/img-sistema-de-rifas/plataforma-de-rifas-vitrine-cliente-04.png";
const rifasShowcase5Url = "/img-sistema-de-rifas/sistema-de-rifas-mobile-app-05.png";
const rifasShowcase6Url = "/img-sistema-de-rifas/plataforma-de-rifas-mobile-cotas-06.png";
const rifasShowcase7Url = "/img-sistema-de-rifas/sistema-de-rifas-mobile-checkout-07.png";


const URL = "https://www.ncbrasil.com.br/sistema-de-rifas";

export const lpFaq = [
  { q: "É seguro e legal criar rifa online no Brasil?", a: "Sim. Existem **três caminhos legais** que orientamos você a adotar: **título de capitalização** (via seguradora parceira), **promoção comercial autorizada pela SECAP/Ministério da Fazenda** ou **rifa filantrópica de associação/ONG sem fins lucrativos**. O sistema já vem preparado com **termos, regulamento gerado automaticamente e prestação de contas transparente**." },
  { q: "Como funciona o sorteio pela Loteria Federal?", a: "Definimos a extração da Loteria Federal (concurso, data) e o sistema **converte as 5 dezenas premiadas em uma cota vencedora** conforme regra escolhida (dezena por dezena, cota unificada, milhar invertida etc.). O resultado é **público, auditável e imutável** com hash blockchain." },
  { q: "Preciso pagar taxa por cota vendida ou comissão sobre a arrecadação?", a: "**Não. Diferente do Rifei, Rifana e Rifafy que cobram taxa por cota ou % sobre vendas**, na NC Brasil o sistema é **seu, com licença perpétua ou mensalidade fixa**. Você fica com **100% da arrecadação** e paga apenas a taxa do gateway de pagamento (Pix ~R$0,10)." },
  { q: "Quantas cotas posso vender por rifa?", a: "De **100 a 10 milhões de cotas** por campanha, com valor livre de R$0,10 a R$1.000. Suporta rifas com **cotas premiadas instantâneas**, ranking de maiores compradores e cotas bônus." },
  { q: "Aceita Pix instantâneo? E cartão de crédito parcelado?", a: "Sim. **Pix com liberação em <10 segundos** via webhook (Mercado Pago, Efí, PagBank, Pagar.me, Iugu, Asaas). Cartão de crédito **parcelado em até 12x** e boleto opcional. **Split automático** entre organizador, afiliados e plataforma." },
  { q: "Existe app para o participante?", a: "Sim, **PWA + aplicativo nativo iOS/Android** com sua marca (white label). O participante recebe **notificação push do sorteio, resultado, cotas premiadas e novas campanhas**." },
  { q: "Como evitam fraudes e cotas duplicadas?", a: "Cada cota gera **hash único e imutável** registrado em log público. O sistema tem **antifraude com device fingerprint, blacklist de CPF, limite por CPF/dispositivo, KYC opcional** e verificação de titularidade Pix." },
  { q: "Consigo criar rifas beneficentes para minha ONG?", a: "Sim. Temos modelo específico para **associações, igrejas e ONGs** com relatório de prestação de contas, comprovante de doação e **isenção fiscal quando cabível**. Já entregamos plataformas para campanhas beneficentes de mais de R$500 mil." },
  { q: "Qual o prazo de entrega e como funciona a implantação?", a: "**Entrega quase imediata (mesmo dia)** para versão white label pronta com sua marca, domínio e gateway. Customizações pontuais são entregues em tempo recorde para você começar a faturar agora." },
  { q: "Vocês fazem hospedagem e suporte?", a: "Sim, entregamos **hospedagem cloud escalável (AWS/Cloudflare), CDN global, backup diário, SSL, monitoramento 24/7 e suporte técnico** por WhatsApp e ticket." },
  { q: "É possível ter afiliados vendendo minhas rifas?", a: "Sim, **módulo de afiliados nativo** com link único, cupom personalizado, painel de vendas, **comissão configurável e saque automático via Pix**." },
  { q: "Posso vender cotas em combos ou com desconto progressivo?", a: "Sim. Configure combos **'leve 10 pague 8'**, desconto progressivo, cotas bônus por indicação, cashback e **cupom promocional** por cliente ou por rifa." },
];

export const Route = createFileRoute("/sistema-de-rifas")({
  head: () => buildLPMeta({
    title: "Sistema de Rifas com Hora Premiada, Roletas e Raspadinhas Online",
    description: "NcBrasil: Plataforma profissional de rifas com Hora Premiada, Roletas, Raspadinhas e Cotas Premiadas. O sistema mais completo e viral do Brasil.",
    keywords: "sistema de rifas, hora premiada, roletas online, raspadinhas digitais, cotas premiadas, plataforma de rifas profissional, script de rifas viral",
    canonical: "https://www.ncbrasil.com.br/sistema-de-rifas",
    h1: "NcBrasil - Sistema de Rifas Online",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Sistemas", to: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { label: "Sistema de Rifas", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <>
      <Helmet>
        <title>Sistema de Rifas com Hora Premiada, Roletas e Raspadinhas Online</title>
        <meta name="description" content="Tenha sua plataforma profissional de rifas com módulos de Hora Premiada, Roletas e Raspadinhas. O sistema mais completo e viral do mercado brasileiro." />
        <meta name="keywords" content="sistema de rifas, hora premiada, roletas online, raspadinhas digitais, cotas premiadas, plataforma de rifas profissional, script de rifas viral" />
        <link rel="canonical" href="https://www.ncbrasil.com.br/sistema-de-rifas" />
      </Helmet>
      <LandingPage
      imageKeyword="melhor script de rifas e plataforma de ações online profissional"
      showParallaxshowcase
      showcaseImages={[
        rifasShowcase4Url,
        rifasShowcase2Url,
        rifasShowcase3Url,
        rifasShowcase1Url,
        rifasShowcase5Url,
        rifasShowcase6Url,
        rifasShowcase7Url,
      ]}
      breadcrumbs={[
        { to: "/", label: "Home" },
        { to: "/nossos-sistemas", label: "Sistemas" },
        { to: "/sistema-de-rifas", label: "Sistema de Rifas" },
      ]}
      eyebrow="Ações Online · Script de Rifas · Lucro Real"
      h1={<>Sistema de Rifas com <span className="text-gradient">Hora Premiada</span>, Roletas, Raspadinhas e Cotas Premiadas</>}
      intro={<>Tenha seu próprio <strong className="text-foreground text-primary">sistema de rifas</strong> profissional com módulos de <strong className="text-foreground text-primary">Hora Premiada</strong>, Roletas Interativas, Raspadinhas Digitais e Cotas Premiadas. Nossa <strong className="text-foreground text-primary">plataforma de ações online</strong> é a única que entrega o <strong className="text-foreground text-primary">script de ações</strong> completo e viral. Com o nosso <strong className="text-foreground text-primary">sistema de ações de rifas</strong> você escala seu faturamento com automação total e <strong className="text-foreground text-primary">Pix instantâneo</strong>.</>}
      stats={[
        { value: "50Mi+", label: "Cotas vendidas" },
        { value: "3.000+", label: "Rifas realizadas" },
        { value: "R$500k", label: "Ticket médio por rifa" },
        { value: "0%", label: "Taxa sobre vendas" },
      ]}
      clients={["Ativ Rifas", "Rifa da Sorte BR", "Sorte Premiada", "Rifa Solidária", "Meu Prêmio", "GO Rifas", "Rifa VIP", "Sorteios Brasil"]}
      extraContentBeforeProblem={
        <div className="relative isolate py-4">
          <div className="absolute inset-0 -z-10 bg-primary/5 blur-3xl opacity-30" />
          <PartnerCarousel 
            title="Integrado com os melhores Gateways e Loteria Federal"
            logos={[
              { name: "Caixa", url: "/partners/caixa.webp", link: "https://www.caixa.gov.br/" },
              { name: "Mercado Pago", url: "https://www.ncbrasil.com.br/partners/mercado-pago.png" },
              { name: "Pagar.me", url: "https://www.ncbrasil.com.br/partners/pagarme.png" },
              { name: "Efí", url: "https://www.ncbrasil.com.br/partners/efi.png" },
              { name: "Asaas", url: "https://www.ncbrasil.com.br/partners/asaas.png" },
              { name: "Loteria Federal", url: "https://www.ncbrasil.com.br/partners/loteria-federal.png" },
            ]}
          />
        </div>
      }
      problem={{
        title: <>Plataformas de rifa cobram <span className="text-destructive">até 8% sobre cada cota vendida</span></>,
        items: [
          "**Rifei, Rifana e Rifafy cobram % sobre TUDO que você arrecada** — em uma rifa de R$100 mil, você paga R$8 mil só de taxa da plataforma.",
          "Você **não é dono do seu domínio, dos seus clientes nem do banco de dados** — se a plataforma sai do ar, você perde o negócio inteiro.",
          "**Limitações de personalização**: layout engessado, sem app próprio, sem controle de identidade visual.",
          "**Insegurança jurídica**: sistemas genéricos não orientam sobre o modelo legal correto (título de capitalização, SECAP ou filantropia).",
          "**Falta de app nativo iOS/Android** com sua marca — o participante nunca lembra de você.",
          "**Suporte terceirizado, sem SLA, respostas em dias** — em pleno sorteio, você fica na mão.",
          "**Falta de app nativo iOS/Android** com sua marca — o participante nunca lembra de você.",
          "**Suporte terceirizado, sem SLA, respostas em dias** — em pleno sorteio, você fica na mão.",
        ],
      }}
      solution={{
        title: <>Seu <span className="text-gradient">Sistema de Rifas</span> com Hora Premiada e Roletas</>,
        desc: <>Ao contratar nossa <strong className="text-foreground text-primary">plataforma de rifas</strong>, você recebe recursos exclusivos como <strong className="text-foreground text-primary">Hora Premiada</strong>, Roletas e Raspadinhas Digitais. Nosso <strong className="text-foreground text-primary">sistema de rifas</strong> permite que você gerencie campanhas virais de alta conversão. É a solução definitiva para quem busca um <strong className="text-foreground text-primary">script de ações</strong> robusto, seguro e altamente tecnológico com <strong className="text-foreground text-primary">Cotas Premiadas</strong> automáticas.</>,
        highlights: [
          "**Módulo Hora Premiada** — Sorteios relâmpago automatizados",
          "**Roletas e Raspadinhas** — Gamificação para engajamento viral",
          "**Cotas Premiadas** — Prêmios instantâneos automáticos",
          "**Pix instantâneo** liberado em <10 segundos",
          "**Orientação legal completa** — modelo SECAP, capitalização ou filantropia",
          "**Suporte técnico 24/7** por WhatsApp e ticket",
          "**Cotas ilimitadas** — de 100 a 10 milhões por campanha",
          "**Módulo de afiliados** com comissão automática",
        ],
        
      }}
      testimonials={rifasTestimonials}
      benefits={[
        { icon: Trophy, title: "Sorteio Loteria Federal", desc: "Extração oficial pela **Loteria Federal ou por cota premiada instantânea** — hash público e auditável para cada bilhete." },
        { icon: Banknote, title: "Pix em Segundos", desc: "Reserva, **pagamento e liberação da cota em <10s** via webhook do PSP. Sem intermediário, dinheiro cai direto na sua conta." },
        { icon: FileCheck, title: "Conformidade Legal", desc: "Modelos prontos de **título de capitalização, SECAP ou associação sem fins lucrativos** — orientamos qual usar." },
        { icon: ShieldCheck, title: "Cotas Auditáveis", desc: "Cada bilhete gera **hash imutável em blockchain** — o comprador confere sua cota antes do sorteio." },
      ]}
      features={[
        { icon: ShoppingBag, title: "Hora Premiada & Cotas", desc: "De **100 a 10 milhões de cotas** por rifa, com módulos de **Hora Premiada** e cotas premiadas instantâneas automáticas." },
        { icon: Wallet, title: "Múltiplos Meios de Pagamento", desc: "**Pix, cartão em até 12x, boleto** e crédito de cotas anteriores. Split automático entre organizador e afiliados." },
        { icon: Gift, title: "Roletas & Raspadinhas", desc: "**Roletas Interativas e Raspadinhas Digitais** para engajamento imediato e gamificação da sua plataforma." },
        { icon: Users, title: "Ranking de Compradores", desc: "**Top compradores** com prêmio extra automático e ranking em tempo real na página da rifa." },
        { icon: Smartphone, title: "App do Participante", desc: "**iOS + Android nativo** com sua marca, notificação push do sorteio, minhas cotas e histórico." },
        { icon: BarChart3, title: "Dashboard do Organizador", desc: "**Vendas em tempo real, conciliação bancária, curva de arrecadação** e saque automático." },
        { icon: MessageCircle, title: "WhatsApp Integrado", desc: "**Click-to-WhatsApp** em cada rifa, envio automático do comprovante e lembrete do sorteio." },
        { icon: Palette, title: "Identidade Visual Própria", desc: "Cores, logo, domínio, tipografia — **100% white label**, sua marca do início ao fim." },
        { icon: Globe, title: "Domínio Próprio + SSL", desc: "Seu domínio `.com.br` com **certificado SSL grátis, CDN global e cache** para carregamento instantâneo." },
      ]}
      modules={[
        {
          icon: Ticket,
          title: "Módulo Virais",
          items: [
            "Hora Premiada com sorteios relâmpago",
            "Roletas Interativas de bônus",
            "Raspadinhas Digitais instantâneas",
            "Cotas Premiadas automatizadas",
            "Sorteio Loteria Federal integrado",
          ],
        },
        {
          icon: Users,
          title: "Módulo Afiliados",
          items: [
            "Link único por afiliado",
            "Cupom personalizado com desconto",
            "Comissão configurável por rifa",
            "Painel de vendas do afiliado",
            "Saque automático via Pix",
          ],
        },
        {
          icon: Wallet,
          title: "Módulo Pagamentos",
          items: [
            "Pix instantâneo com webhook",
            "Cartão parcelado em até 12x",
            "Boleto bancário",
            "Split entre organizador e afiliados",
            "Conciliação bancária automática",
          ],
        },
        {
          icon: BarChart3,
          title: "Módulo Analytics",
          items: [
            "Vendas em tempo real",
            "Curva de arrecadação por rifa",
            "Top compradores e afiliados",
            "Origem de tráfego (UTM)",
            "Exportação CSV/Excel",
          ],
        },
        {
          icon: Bell,
          title: "Módulo Marketing",
          items: [
            "Notificação push nativa",
            "E-mail transacional",
            "WhatsApp Business API",
            "SMS de lembrete do sorteio",
            "Campanhas segmentadas",
          ],
        },
        {
          icon: ShieldCheck,
          title: "Módulo Antifraude",
          items: [
            "Device fingerprint",
            "Limite de cotas por CPF",
            "Blacklist e validação de titularidade Pix",
            "KYC opcional (biometria facial)",
            "Log de ações imutável",
          ],
        },
      ]}
      useCases={[
        { icon: Building2, title: "Empreendedor de Rifas", desc: "Organizador profissional que **vende rifas de carro, moto, eletrônicos e Pix** — busca escala e margem." },
        { icon: Sparkles, title: "Influenciador Digital", desc: "Criador com audiência que quer **monetizar via rifas** com sua marca e app próprio nas lojas." },
        { icon: Trophy, title: "Concessionária & Revenda", desc: "Rifas de **veículos novos e seminovos** com integração de estoque e financiamento pós-sorteio." },
        { icon: Users, title: "ONGs e Associações", desc: "Rifas **filantrópicas com prestação de contas transparente** e comprovante de doação." },
        { icon: ShoppingBag, title: "E-commerce & Varejo", desc: "Rifas como **estratégia de aquisição** — desova de estoque com margem maior que Black Friday." },
        { icon: Rocket, title: "Startups & Marketplaces", desc: "Plataformas SaaS que querem entrar no **mercado de rifas white label** com marca própria." },
      ]}
      integrations={[
        { label: "Mercado Pago", category: "Pix / Cartão" },
        { label: "Pagar.me", category: "Pix / Split" },
        { label: "Efí (Gerencianet)", category: "Pix" },
        { label: "PagBank", category: "Pix / Cartão" },
        { label: "Iugu", category: "Boleto / Split" },
        { label: "Asaas", category: "Cobrança" },
        { label: "WhatsApp Business", category: "Comunicação" },
        { label: "Google Analytics 4", category: "Analytics" },
        { label: "Meta Pixel", category: "Ads" },
        { label: "TikTok Pixel", category: "Ads" },
        { label: "Google Tag Manager", category: "Tags" },
        { label: "Loteria Federal API", category: "Sorteio" },
        { label: "Serpro/CPF", category: "KYC" },
        { label: "Melhor Envio", category: "Logística" },
        { label: "Correios", category: "Logística" },
        { label: "Zendesk", category: "Suporte" },
      ]}
      security={[
        { icon: Lock, title: "LGPD Compliant", desc: "**Consentimento granular, portabilidade de dados, DPO parceiro** e política de privacidade auditada." },
        { icon: ShieldCheck, title: "PCI-DSS", desc: "**Cartão nunca trafega pelo servidor** — tokenização direta no PSP e infraestrutura auditada." },
        { icon: ScanLine, title: "KYC + Antifraude", desc: "**Biometria facial, validação CPF/Serpro e device fingerprint** com engine antifraude proprietário." },
        { icon: FileCheck, title: "Hash Blockchain", desc: "Cada cota registra **hash SHA-256 timestamped** — impossível alterar depois de vendida." },
      ]}
      timeline={[
        { step: "Etapa 01", title: "Briefing", desc: "Reunião inicial para alinhamento de expectativas e coleta de requisitos da sua plataforma de ações." },
        { step: "Etapa 02", title: "Montagem do Template", desc: "Personalização da identidade visual e estrutura das rifas conforme sua marca." },
        { step: "Etapa 03", title: "Apresentação da Plataforma", desc: "Demonstração das funcionalidades de cotas, combos e gateway de pagamento." },
        { step: "Etapa 04", title: "Testes das Funcionalidades", desc: "Verificação rigorosa de todos os módulos de vendas, segurança e performance." },
        { step: "Etapa 05", title: "Campanha de Teste", desc: "Simulação de um sorteio real para garantir que o fluxo Pix e as cotas operem perfeitamente." },
        { step: "Etapa 06", title: "Treinamento da Equipe", desc: "Capacitação completa para sua equipe gerenciar campanhas e afiliados com maestria." },
        { step: "Etapa 07", title: "Publicação no Domínio Final", desc: "Lançamento oficial no seu domínio com toda a infraestrutura pronta para vender." },
        { step: "Etapa 08", title: "Suporte e Atualizações", desc: "Prestação de suporte contínuo e evolução da plataforma com atualizações constantes." },
      ]}
      comparative={{
        usLabel: "NC Brasil",
        themLabel: "Rifei / Rifana / Rifafy",
        rows: [
          { feature: "Taxa sobre vendas", us: "0%", them: "3% a 8%" },
          { feature: "Domínio próprio", us: true, them: false },
          { feature: "App iOS/Android com sua marca", us: true, them: false },
          { feature: "Código-fonte licenciado", us: true, them: false },
          { feature: "Base de dados e clientes sua", us: true, them: false },
          { feature: "Cotas Premiadas Ilimitadas", us: true, them: "Limitado" },
          { feature: "Split de Pagamento Nativo", us: true, them: false },
        ],
      }}
      faq={lpFaq}
      finalParallaxCta={{
        text: "**Sistema para Rifas Profissionais**",
        image: "/img-sistema-de-rifas/rifa-vitrine.png"
      }}
      relatedNewsTags={["rifas", "sistemas", "vendas", "tecnologia"]}
      />
    </>
  ),
});
