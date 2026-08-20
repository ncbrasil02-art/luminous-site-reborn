import { createFileRoute } from "@tanstack/react-router";
import {
  Banknote, Bell, Building2, Clock, CreditCard, FileSignature, Gavel, Globe2,
  Landmark, Lock, Rocket, ScrollText, Search, ShieldCheck, Smartphone,
  Sparkles, Target, TrendingUp, Users, Video, Wallet, Zap,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";
import { PartnerCarousel } from "@/components/PartnerCarousel";
import { SITE_URL } from "@/lib/seo";
import { testimonialsData } from "@/lib/testimonials.data";

const URL = "https://www.ncbrasil.com.br/sistema-de-leilao";

const lpFaq = [
  { q: "A plataforma é homologada nos Tribunais de Justiça?", a: "Sim. A plataforma NC Brasil é **homologada em 27 Tribunais de Justiça** (AC, AL, AM, AP, BA, CE, DF, ES, GO, MA, MG, MS, MT, PA, PB, PE, PI, PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO), além de atender **TJ/SP, Detran, leilões judiciais, extrajudiciais, restritos e venda direta**." },
  { q: "Como funciona o modelo de aluguel do sistema?", a: "**Não cobramos aluguel mensal do sistema — a plataforma é sua.** Diferente de concorrentes como Leilão PRO ou Superbid que operam por assinatura recorrente, você adquire a licença completa, com domínio próprio e código instalado em servidor dedicado. Sem taxa por lance, sem percentual sobre arrematação." },
  { q: "O sistema atende leilões judiciais e extrajudiciais?", a: "Sim. A plataforma atende **leilões judiciais (CPC art. 879 a 903)**, **extrajudiciais (Decreto 21.981/32)**, **restritos, venda direta, Detran, imóveis, rurais, arte e veículos**, com fluxos separados de edital, publicação em DOE, cronograma e prestação de contas." },
  { q: "Como funciona a transmissão ao vivo do pregão?", a: "Streaming em **HD adaptativo (WebRTC + HLS)** com cronômetro sincronizado servidor-cliente (evita contestação de lance), chat moderado, histórico completo do pregão e **gravação armazenada como prova jurídica** por até 10 anos." },
  { q: "O sistema calcula comissões, taxas e impostos automaticamente?", a: "Sim. **Comissão do leiloeiro (5% arrematante + 5% comitente), taxa administrativa, ITBI, ICMS e IR** são calculados por lote conforme regras configuráveis, com **split automático via PIX** para leiloeiro, comitente e plataforma no momento da liquidação." },
  { q: "É possível personalizar a marca e ter domínio próprio?", a: "**100% white-label**: logotipo, cores, tipografia, **domínio próprio** (`leiloes.suaempresa.com.br` ou `.com.br` dedicado), edital personalizado, templates de e-mail e apps iOS/Android com sua marca na App Store e Play Store. Case real: [ativeiloes.com.br](https://www.ativeiloes.com.br) operando na plataforma." },
  { q: "Quanto tempo leva a implantação completa?", a: "De **30 a 60 dias**, incluindo configuração white-label, integrações com meios de pagamento (PIX/Boleto/Cartão), KYC (Receita/Serasa), treinamento da equipe (operadores + financeiro + moderadores) e **leilão-piloto acompanhado in loco**." },
  { q: "Como funciona a habilitação (KYC) de arrematantes?", a: "Cadastro com **KYC completo integrado à Receita Federal** (validação CPF/CNPJ), upload de documentos com OCR, comprovante de residência, e aprovação global ou por lote com trilha de auditoria LGPD. Blacklist e histórico de inadimplência incluídos." },
  { q: "Suporta lances automáticos, robô e anti-sniping?", a: "Sim. **Lance máximo programado (robô)** com notificação push, e-mail e SMS. **Anti-sniping nativo**: prorrogação automática de 3 minutos quando há lance nos últimos segundos, evitando lances de última hora e garantindo lisura do pregão conforme jurisprudência do STJ." },
  { q: "Vocês fazem suporte durante pregões críticos?", a: "**Suporte 24/7 durante pregões** com equipe técnica dedicada em plantão, SLA de resposta de 1h em dias úteis e monitoramento proativo com alertas. Planos incluem evolução mensal, backups automatizados 3x/dia e ambiente de contingência." },
  { q: "É possível integrar com ERP, PJe, DOE e cartórios?", a: "Sim. **API REST + webhooks** para integração com **ERPs (SAP, TOTVS, Sankhya), PJe (Processo Judicial Eletrônico), DOE, cartórios eletrônicos, sistemas contábeis e Detran** para consulta de restrições veiculares." },
  { q: "Como funciona a prestação de contas ao juízo?", a: "Geração automática do **auto de arrematação assinado com ICP-Brasil**, relatório oficial por leilão (lotes, lances, arrematantes, valores, comissões), exportação para contabilidade e junta comercial, e nota fiscal eletrônica emitida automaticamente." },
  { q: "Quais meios de pagamento estão integrados?", a: "**PIX (liquidação em segundos)**, boleto bancário, cartão de crédito parcelado, TED/DOC e caução refundável via bloqueio de cartão. Integrações nativas com **Pagar.me, Iugu, PagSeguro, Stripe** e conciliação bancária automatizada." },
  { q: "Qual o diferencial vs Leilão PRO e Superbid?", a: "**NC Brasil**: plataforma proprietária sem aluguel, taxa 0% por lance, homologação em 27 TJs, código-fonte disponível, apps nativos com sua marca. **Concorrentes**: cobram mensalidade + % por arrematação, plataforma compartilhada, sem acesso ao código, apps sob marca do fornecedor." },
];

export const Route = createFileRoute("/sistema-de-leilao")({
  head: () => buildLPMeta({
    title: "Sistema de Leilão NC Brasil | Sistema para Leilões Online",
    description: "Plataforma de leilões online profissional para leiloeiros oficiais e tribunais. Sistema para leiloeiro com pregão eletrônico, transmissão ao vivo e split de comissões.",
    keywords: "sistema de leilão, plataforma de leilões, sistema para leiloeiro, plataforma de pregões online, sas leilão, site de leilão, sistema de leilão online, plataforma de leilão online, sistema online para leiloeiro",
    canonical: "/sistema-de-leilao",
    h1: "Sistema de Leilão NC Brasil: Plataforma de Leilões Online e Pregões",
    breadcrumbs: [
      { label: "Home", to: `${SITE_URL}/` },
      { label: "Sistemas", to: `${SITE_URL}/nossos-sistemas` },
      { label: "Sistema de Leilão", to: URL },
    ],
    faq: lpFaq,
    ogImage: "/sistema-de-leilao-og.jpg",
  }),
  component: () => (
    <>
      <LandingPage
      imageKeyword="sistema de leilão"
      showParallaxshowcase
      showcaseImages={[
        "https://www.ncbrasil.com.br/sistema-de-leilao/sistema-de-leilao-home-premium.png",
        "https://www.ncbrasil.com.br/sistema-de-leilao/sistema-de-leilao-vitrine.png",
        "https://www.ncbrasil.com.br/sistema-de-leilao/sistema-de-leilao-dashboard-premium.png",
        "https://www.ncbrasil.com.br/sistema-de-leilao/sistema-de-leilao-dashboard-detalhe.png",
        "https://www.ncbrasil.com.br/sistema-de-leilao/sistema-de-leilao-cards.png",
        "https://www.ncbrasil.com.br/sistema-de-leilao/sistema-de-leilao-painel-online.png",
      ]}
      breadcrumbs={[
        { to: "/", label: "Home" },
        { to: "/nossos-sistemas", label: "Sistemas" },
        { to: "/sistema-de-leilao", label: "Sistema de Leilão" },
      ]}
      eyebrow="Sistema para Leiloeiro"
      h1={
        <div className="flex flex-col items-center gap-8">
          <img 
            src="https://www.ncbrasil.com.br/logo.jpg"
            alt="NC Leilões - Plataforma de Leilão" 
            className="h-20 md:h-28 w-auto transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/logo.jpg';
            }}
          />
          <span>Sistema de Leilão <span className="text-gradient">NC Brasil</span>: Sua Plataforma de Leilão Online</span>
        </div>
      }
      intro={<>Aumente seus pregões com a melhor <strong className="text-foreground">plataforma de leilões</strong> do mercado. O nosso <strong className="text-foreground">sistema de leilão online</strong> é homologado em 27 Tribunais de Justiça e utilizado por grandes <strong className="text-foreground">leiloeiros oficiais</strong>. Se você busca um <strong className="text-foreground">sistema para leiloeiro</strong> completo, com pregão eletrônico simultâneo e <strong className="text-foreground">plataforma de pregões online</strong>, a NC Brasil oferece a solução definitiva: <strong className="text-foreground">seu site de leilão</strong> próprio, sem aluguel mensal e com tecnologia de ponta.</>}
      primaryCta={{ to: "/orcamento", label: "Solicitar orçamento" }}
      secondaryCta={{ to: "#features", label: "Saiba mais" }}
      finalPrimaryCta={{ to: "/orcamento", label: "Solicitar orçamento" }}
      finalSecondaryCta={{ to: "/contato", label: "Falar com a equipe" }}
      stats={[
        { value: "27 TJs", label: "Tribunais homologados" },
        { value: "0%", label: "Taxa por lance" },
        { value: "500K+", label: "Lances processados" },
        { value: "24/7", label: "Suporte em pregões" },
      ]}
      clients={[
        "Tribunais de Justiça", "Detran", "Bancos", "Cooperativas Rurais",
        "Leiloeiros Oficiais", "Prefeituras", "Concessionárias", "Cartórios",
      ]}
      problem={{
        title: <>Alugar plataforma de terceiros <span className="text-destructive">custa caro</span> e limita seu negócio</>,
        items: [
          "**Mensalidades de R$ 3.000 a R$ 15.000** + percentual sobre cada arrematação corroem sua margem.",
          "Sites genéricos e planilhas **sem cronômetro sincronizado** geram contestação judicial e anulação de pregão.",
          "Plataformas compartilhadas expõem sua **base de arrematantes** para o próprio concorrente do fornecedor.",
          "Sem **app nativo com sua marca**, você perde autoridade e recompra do arrematante.",
          "Sem **KYC integrado à Receita** e trilha LGPD, o risco de fraude e ação judicial recai sobre o leiloeiro.",
          "Concorrentes que já operam com plataforma dedicada capturam **até 3x mais arrematantes por edital**.",
        ],
      }}
      extraContentBeforeProblem={
        <div className="relative isolate py-4">
          <div className="absolute inset-0 -z-10 bg-primary/5 blur-3xl opacity-30" />
          <PartnerCarousel 
            title="Sistema Homologado e Utilizado por Grandes Órgãos"
            logos={[
              { name: "TJRS", url: "https://www.ncbrasil.com.br/partners/tjrs.webp", link: "https://www.tjrs.jus.br/" },
              { name: "Caixa", url: "https://www.ncbrasil.com.br/partners/caixa.webp", link: "https://www.caixa.gov.br/" },
              { name: "Detran-MS", url: "https://www.ncbrasil.com.br/partners/detranms.webp", link: "https://www.detran.ms.gov.br/" },
              { name: "Detran-SC", url: "https://www.ncbrasil.com.br/partners/detransc.webp", link: "https://www.detran.sc.gov.br/" },
              { name: "Embaixada EUA", url: "https://www.ncbrasil.com.br/partners/embaixada_usa.webp" },
              { name: "Sicoob", url: "https://www.ncbrasil.com.br/partners/sicoob.webp", link: "https://www.sicoob.com.br/" },
              { name: "Sicredi", url: "https://www.ncbrasil.com.br/partners/sicredi.webp", link: "https://www.sicredi.com.br/" },
              { name: "Unicred", url: "https://www.ncbrasil.com.br/partners/unicred.webp", link: "https://www.unicred.com.br/" },
              { name: "Uniprime", url: "https://www.ncbrasil.com.br/partners/uniprime.webp", link: "https://www.uniprimebr.com.br/" },
              { name: "Cresol", url: "https://www.ncbrasil.com.br/partners/cresol.webp", link: "https://cresol.com.br/" },
            ]}
          />
        </div>
      }
      solution={{
        title: <>Sua <span className="text-gradient">Plataforma de Leilão Online</span> — Homologada e Sem Mensalidade</>,
        desc: <>O <strong className="text-foreground">Sistema de Leilão NC Brasil</strong> é a ferramenta ideal para quem deseja <strong className="text-foreground">ver o site de leilões</strong> operando com máxima performance. Entregamos um <strong className="text-foreground">sistema online para leiloeiro</strong> com licença perpétua e código-fonte. Nossa <strong className="text-foreground">plataforma de pregões online</strong> é robusta, white-label e preparada para leilões judiciais e extrajudiciais. Diferente de soluções como <strong className="text-foreground">sas leilão</strong> genéricas, oferecemos personalização total para o seu negócio.</>,
        image: "/__l5e/assets-v1/2bea6211-cf33-4267-8b1c-75cc39c82e15/sistema-de-leilao-configuracoes.png",
        highlights: [
          "**Plataforma proprietária** — sem aluguel mensal, taxa 0% por lance",
          "**Homologada em 27 TJs** + TJ/SP + Detran + PJe",
          "**Multi-modalidade**: judicial, extrajudicial, Detran, rural, arte",
          "**Anti-sniping + robô de lance** conforme jurisprudência STJ",
          "**White-label completo**: domínio, apps iOS/Android com sua marca",
          "**Assinatura ICP-Brasil** para autos de arrematação",
          "**Split PIX automático** leiloeiro/comitente/plataforma",
          "**Trilha LGPD** e backups 3x/dia em servidor dedicado",
        ],
      }}
      benefits={[
        { icon: Landmark, title: "Plataforma de Leilões Homologada", desc: "Aceita em **27 TJs** + TJ/SP + Detran. O melhor **sistema online para leiloeiro** jurídico." },
        { icon: Banknote, title: "Sem taxas extras", desc: "**Sistema de leilão online** com 0% de taxa por lance. O lucro do **pregão online** é todo seu." },
        { icon: ShieldCheck, title: "Segurança Jurídica", desc: "**Assinatura ICP-Brasil**, cronômetro sincronizado e logs imutáveis para seu **site de leilão**." },
        { icon: Video, title: "Pregão ao Vivo HD", desc: "Transmissão **WebRTC** em tempo real. Sua **plataforma de pregões online** com zero delay." },
      ]}
      features={[
        { icon: FileSignature, title: "Cadastro rico de lotes", desc: "Fotos ilimitadas, vídeo 360°, laudos, matrículas e edital anexos." },
        { icon: Users, title: "Habilitação com KYC", desc: "Validação de CPF/CNPJ na Receita e aprovação por lote." },
        { icon: Bell, title: "Lances automáticos", desc: "Lance máximo programado com notificação push, e-mail e SMS." },
        { icon: Banknote, title: "Comissões e split", desc: "Cálculo automático de comissão, taxa, ITBI e repasse ao leiloeiro." },
        { icon: Clock, title: "Anti-sniping", desc: "Prorrogação automática quando há lance nos últimos segundos." },
        { icon: Lock, title: "LGPD & conformidade", desc: "Trilha de auditoria, backups e política de retenção." },
      ]}
      modules={[
        { icon: ScrollText, title: "Módulo de Editais", items: [
          "Editor rico com **modelos por tipo de leilão**",
          "Publicação automática em DOE e portais",
          "Versionamento e histórico de retificações",
          "Geração de PDF assinado digitalmente",
        ]},
        { icon: Users, title: "Módulo de Arrematantes", items: [
          "Cadastro com **KYC integrado à Receita**",
          "Upload de documentos com OCR",
          "Aprovação global ou por lote",
          "Blacklist e histórico de inadimplência",
        ]},
        { icon: Video, title: "Módulo Pregão ao Vivo", items: [
          "Streaming **HD adaptativo** (WebRTC + HLS)",
          "Cronômetro sincronizado servidor",
          "Chat moderado e reações",
          "Gravação para prova jurídica",
        ]},
        { icon: Wallet, title: "Módulo Financeiro", items: [
          "**PIX, boleto e cartão** integrados",
          "Split automático leiloeiro/comitente",
          "Caução refundável",
          "Conciliação bancária automatizada",
        ]},
        { icon: Landmark, title: "Módulo Prestação de Contas", items: [
          "Relatório oficial por leilão",
          "Exportação para **contabilidade e junta**",
          "Nota fiscal automática",
          "Auditoria completa de eventos",
        ]},
        { icon: Smartphone, title: "App Mobile Arrematante", items: [
          "Apps **iOS e Android nativos**",
          "Push de novos lotes e status",
          "Lance em 1 toque com biometria",
          "Assistir pregão pelo celular",
        ]},
      ]}
      useCases={[
        { icon: Gavel, title: "Leiloeiros Oficiais", desc: "Digitalize 100% do pregão — do edital ao **auto de arrematação**, com prestação de contas automática." },
        { icon: Building2, title: "Tribunais de Justiça", desc: "Leilão judicial homologado, integração com **PJe** e edital publicado no DOE." },
        { icon: Landmark, title: "Bancos e Financeiras", desc: "Recuperação de garantias (imóveis e veículos) com **compliance bancário**." },
        { icon: Target, title: "Concessionárias e Frotistas", desc: "Leilão de veículos com laudo cautelar e **integração com Detran**." },
        { icon: TrendingUp, title: "Cooperativas Rurais", desc: "Leilão de **gado, terras e maquinário** com pesagem integrada." },
        { icon: Sparkles, title: "Galerias e Casas de Arte", desc: "Catálogo curado, **certificado de autenticidade** e pregão internacional." },
      ]}
      integrations={[
        { label: "PIX", category: "Pagamento" },
        { label: "Pagar.me", category: "Pagamento" },
        { label: "Stripe", category: "Pagamento" },
        { label: "PagSeguro", category: "Pagamento" },
        { label: "Receita Federal", category: "KYC" },
        { label: "Serasa", category: "KYC" },
        { label: "PJe", category: "Judicial" },
        { label: "DOE", category: "Publicação" },
        { label: "Detran", category: "Veículos" },
        { label: "SAP", category: "ERP" },
        { label: "TOTVS", category: "ERP" },
        { label: "Google Analytics", category: "Analytics" },
        { label: "Meta Pixel", category: "Marketing" },
        { label: "OneSignal", category: "Push" },
        { label: "SendGrid", category: "E-mail" },
      ]}
      security={[
        { icon: ShieldCheck, title: "LGPD Compliance", desc: "DPO dedicado, consentimento granular e **direito ao esquecimento** implementado." },
        { icon: Lock, title: "Criptografia AES-256", desc: "Dados em repouso e em trânsito com **TLS 1.3** obrigatório." },
        { icon: FileSignature, title: "Assinatura Digital", desc: "Integração com **ICP-Brasil** para autos e recibos." },
        { icon: Search, title: "Trilha de Auditoria", desc: "Todo evento é logado — quem fez, quando, de onde e o que mudou." },
      ]}
      timeline={[
        { step: "Semana 1-2", title: "Descoberta e Setup", desc: "Kick-off, mapeamento de regras de negócio, provisionamento da instância e **configuração white-label** (cores, domínio, logo)." },
        { step: "Semana 3-4", title: "Configuração e Integrações", desc: "Meios de pagamento, KYC, e-mail transacional, DOE e **integrações com seu ERP/TJ**." },
        { step: "Semana 5-6", title: "Treinamento", desc: "Capacitação da equipe: **operadores, moderadores e financeiro**, com manual e vídeos." },
        { step: "Semana 7-8", title: "Leilão-piloto acompanhado", desc: "Primeiro pregão com **suporte in-loco em tempo real** e ajustes finos." },
      ]}
      comparative={{
        usLabel: "NC Brasil",
        themLabel: "Leilão PRO / Superbid",
        rows: [
          { feature: "Licença perpétua (Sem aluguel)", us: true, them: false },
          { feature: "Taxa 0% por lance", us: true, them: false },
          { feature: "Homologação em 27 TJs", us: true, them: "Limitado" },
          { feature: "Código-fonte disponível", us: true, them: false },
          { feature: "Apps White-label (Sua Marca)", us: true, them: false },
          { feature: "Assinatura ICP-Brasil nativa", us: true, them: "Opcional" },
        ],
      }}
      faq={lpFaq}
      relatedNewsTags={["leilão", "sistemas", "jurídico", "tecnologia"]}
    />
    </>
  ),
});
