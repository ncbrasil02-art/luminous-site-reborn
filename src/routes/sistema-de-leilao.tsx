import { createFileRoute } from "@tanstack/react-router";
import {
  Banknote, Bell, Building2, Clock, CreditCard, FileSignature, Gavel, Globe2,
  Landmark, Lock, Rocket, ScrollText, Search, ShieldCheck, Smartphone,
  Sparkles, Target, TrendingUp, Users, Video, Wallet, Zap,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

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
  { q: "Vocês fornecem suporte durante pregões críticos?", a: "**Suporte 24/7 durante pregões** com equipe técnica dedicada em plantão, SLA de resposta de 1h em dias úteis e monitoramento proativo com alertas. Planos incluem evolução mensal, backups automatizados 3x/dia e ambiente de contingência." },
  { q: "É possível integrar com ERP, PJe, DOE e cartórios?", a: "Sim. **API REST + webhooks** para integração com **ERPs (SAP, TOTVS, Sankhya), PJe (Processo Judicial Eletrônico), DOE, cartórios eletrônicos, sistemas contábeis e Detran** para consulta de restrições veiculares." },
  { q: "Como funciona a prestação de contas ao juízo?", a: "Geração automática do **auto de arrematação assinado com ICP-Brasil**, relatório oficial por leilão (lotes, lances, arrematantes, valores, comissões), exportação para contabilidade e junta comercial, e nota fiscal eletrônica emitida automaticamente." },
  { q: "Quais meios de pagamento estão integrados?", a: "**PIX (liquidação em segundos)**, boleto bancário, cartão de crédito parcelado, TED/DOC e caução refundável via bloqueio de cartão. Integrações nativas com **Pagar.me, Iugu, PagSeguro, Stripe** e conciliação bancária automatizada." },
  { q: "Qual o diferencial vs Leilão PRO e Superbid?", a: "**NC Brasil**: plataforma proprietária sem aluguel, taxa 0% por lance, homologação em 27 TJs, código-fonte disponível, apps nativos com sua marca. **Concorrentes**: cobram mensalidade + % por arrematação, plataforma compartilhada, sem acesso ao código, apps sob marca do fornecedor." },
];

export const Route = createFileRoute("/sistema-de-leilao")({
  head: () => buildLPMeta({
    title: "Sistema de Leilão Online | Plataforma White-Label para Leiloeiros — NC Brasil",
    description: "Sistema profissional para leilões judiciais e extrajudiciais: cadastro de lotes, lances online e presenciais, transmissão ao vivo, split de comissões e conformidade legal completa.",
    keywords: "sistema de leilão, plataforma de leilão online, leilão judicial, leilão extrajudicial, software para leiloeiro, sistema de leilão eletrônico, leilão ao vivo, white label leilão",
    canonical: URL,
    h1: "Sistema Profissional para Leilões Judiciais e Extrajudiciais",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Sistemas", to: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { label: "Sistema de Leilão", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[
        { to: "/", label: "Home" },
        { to: "/nossos-sistemas", label: "Sistemas" },
        { to: "/sistema-de-leilao", label: "Sistema de Leilão" },
      ]}
      subtitle="Sistema de Leilão"
      h1={<>Plataforma para <span className="text-gradient">Leilões Online</span> homologada em 27 Tribunais de Justiça</>}
      intro={<>Sistema profissional para <strong className="text-foreground">leiloeiros oficiais</strong>, tribunais, bancos e cooperativas — usado por casas como <a href="https://www.ativeiloes.com.br" target="_blank" rel="noopener" className="text-primary underline underline-offset-4 hover:text-primary-glow">Ativ Leilões</a>. Realize <strong className="text-foreground">pregão eletrônico simultâneo</strong> (online + presencial) para leilões <strong className="text-foreground">judiciais (CPC art. 879–903)</strong>, <strong className="text-foreground">extrajudiciais (Decreto 21.981/32)</strong>, Detran, restritos e venda direta — com <strong className="text-foreground">plataforma própria, sem aluguel mensal e 0% de taxa por lance</strong>.</>}
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
      solution={{
        title: <>Uma plataforma <span className="text-gradient">100% sua</span> — homologada, escalável e sem mensalidade</>,
        desc: <>O <strong className="text-foreground">Sistema de Leilão NC Brasil</strong> é entregue como <strong className="text-foreground">licença perpétua com código-fonte</strong>, domínio próprio e apps iOS/Android publicados sob sua marca. Diferente de <strong className="text-foreground">Leilão PRO, Superbid e Sodré Santoro</strong> — que cobram assinatura + % por lance e mantêm sua base em servidor compartilhado — aqui você é dono do sistema, dos dados e do relacionamento com o arrematante. Homologada em <strong className="text-foreground">27 Tribunais de Justiça</strong> (AC → TO), TJ/SP, Detran e integrada ao <strong className="text-foreground">PJe</strong>, cobre pregão judicial, extrajudicial, restrito, venda direta, imóveis, rural, arte e veículos.</>,
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
        { icon: Landmark, title: "Homologada em 27 TJs", desc: "Aceita em **AC, AL, AM, AP, BA, CE, DF, ES, GO, MA, MG, MS, MT, PA, PB, PE, PI, PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO** + TJ/SP + Detran." },
        { icon: Banknote, title: "Zero mensalidade", desc: "**Licença perpétua com código-fonte** — sem aluguel, sem taxa por lance, sem percentual sobre arrematação." },
        { icon: ShieldCheck, title: "Segurança Jurídica", desc: "**Assinatura ICP-Brasil**, cronômetro sincronizado servidor, logs imutáveis e gravação do pregão como prova." },
        { icon: Video, title: "Transmissão HD ao vivo", desc: "Streaming **WebRTC + HLS adaptativo**, chat moderado, cronômetro sincronizado e gravação jurídica." },
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
        { step: "Contínuo", title: "Evolução e Suporte", desc: "Sprints mensais de melhoria, **SLA 24/7 durante pregões** e monitoramento proativo." },
      ]}
      comparative={{
        usLabel: "NC Brasil",
        themLabel: "Plataformas genéricas",
        rows: [
          { feature: "White-label com domínio próprio", us: true, them: false },
          { feature: "Cronômetro sincronizado servidor", us: true, them: false },
          { feature: "Anti-sniping nativo", us: true, them: false },
          { feature: "Split automático de comissão", us: true, them: false },
          { feature: "Transmissão HD com gravação jurídica", us: true, them: "Básico" },
          { feature: "Apps iOS e Android nativos", us: true, them: false },
          { feature: "API aberta para ERP e TJ", us: true, them: false },
          { feature: "Suporte 24/7 durante pregões", us: true, them: false },
          { feature: "Taxa por lance", us: "0%", them: "1-3%" },
          { feature: "Prazo de implantação", us: "30-60 dias", them: "90+ dias" },
        ],
      }}
      testimonials={[
        { quote: "Migramos do papel para a plataforma da NC Brasil e triplicamos o número de arrematantes em 6 meses. O suporte durante o pregão é impecável.", author: "Dr. Carlos Andrade", role: "Leiloeiro Oficial — SP" },
        { quote: "A conformidade com o CPC e a assinatura ICP-Brasil eliminaram nossas contestações judiciais. Recomendo para qualquer tribunal.", author: "Juíza Marina Ferreira", role: "Vara Cível — MG" },
        { quote: "O split automático e a integração com nosso ERP economizaram 40 horas/mês do time financeiro. ROI em 3 meses.", author: "Rafael Costa", role: "CFO — Cooperativa Rural" },
      ]}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para <span className="text-gradient">digitalizar seus leilões</span>?</>}
      finalCtaDesc={<>Agende uma <strong className="text-foreground">demonstração ao vivo</strong> — mostramos a plataforma com seus lotes reais e enviamos proposta em <strong className="text-foreground">até 24 horas</strong>.</>}
      relatedNewsTags={["Leilão", "Leilão Online", "Sistemas", "Tecnologia"]}
    />
  ),
});
