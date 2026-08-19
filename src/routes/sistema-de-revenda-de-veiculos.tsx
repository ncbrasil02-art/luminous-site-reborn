import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3, Camera, Car, CreditCard, FileCheck, Globe2, MessageCircle, Package, Search, ShieldCheck, Users,
  Zap, Lock, Cloud, Database, Award, Smartphone, DollarSign, Wrench, TrendingUp,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistema-de-revenda-de-veiculos";

const lpFaq = [
  { q: "Vocês entregam o portal com o meu domínio próprio?", a: "Sim. Portal com **domínio próprio, SSL wildcard, hospedagem otimizada AWS, CDN global e SEO técnico** — tudo incluído no plano." },
  { q: "Quais portais externos são integrados para cross-post?", a: "**Webmotors, iCarros, OLX Autos, MercadoLivre, Facebook Marketplace, Instagram Shopping, Google Vehicle Ads e Kavak** — publicação com 1 clique." },
  { q: "Existe app mobile para o vendedor no pátio?", a: "Sim, **app iOS/Android nativo** para vendedores fazerem fichamento no pátio, fotos, precificação FIPE e captura de leads offline." },
  { q: "Como funciona a integração com financiamento?", a: "Simulador integrado com os **8 principais bancos** (BV, Santander, Itaú, Bradesco, Safra, Banco Pan, Creditas, Omni) — proposta em 1 clique." },
  { q: "Suporta múltiplas lojas/filiais?", a: "Sim, arquitetura **multi-loja nativa** com transferência de estoque entre unidades, permissões granulares e BI consolidado." },
  { q: "Faz gestão financeira e contábil?", a: "Sim. **Conta corrente, DRE, fluxo de caixa, comissões, custos operacionais, ITBI/ITBM e integração contábil** (Domínio, Alterdata, Sage)." },
  { q: "Emite nota fiscal e faz DOC (transferência)?", a: "**NF-e, NFC-e e integração com DETRAN** de todos os estados para transferência, débitos, IPVA e vistoria eletrônica." },
  { q: "Tem CRM com WhatsApp?", a: "Sim. **CRM completo com pipeline visual, chatbot WhatsApp Business, distribuição automática de leads, follow-up e gravação de chamadas**." },
  { q: "Vocês entregam com estoque já cadastrado?", a: "Migração completa de **fotos, fichas, precificação e histórico** do seu sistema atual — sem retrabalho para sua equipe." },
  { q: "Qual o modelo comercial?", a: "**Licença perpétua sem mensalidade** ou SaaS com valor fixo por loja (sem taxa por veículo) — orçamento personalizado." },
];

export const Route = createFileRoute("/sistema-de-revenda-de-veiculos")({
  head: () => buildLPMeta({
    title: "Sistema para Revenda de Veículos | ERP + Portal Automotivo — NC Brasil",
    description: "ERP completo para revendas de veículos: gestão de estoque, CRM WhatsApp, financiamento, portal com anúncios integrados a Webmotors/iCarros/OLX, DOC-fácil, NF-e e app da equipe.",
    keywords: "sistema para revenda de veículos, ERP para revenda, software para loja de carros, plataforma revenda automotiva, CRM concessionária, sistema gestão de estoque veículos, DMS revenda",
    canonical: URL,
    h1: "Plataforma para Revenda de Veículos",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { name: "Revenda de Veículos", url: URL },
    ],
    faq: lpFaq,
    ogImage: "/og/revenda-veiculos.jpg",
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-sistemas", label: "Sistemas" }, { to: "/sistema-de-revenda-de-veiculos", label: "Revenda de Veículos" }]}
      eyebrow="ERP + Portal + CRM Automotivo"
      h1={<>ERP & Portal para <span className="text-gradient">Revenda de Veículos</span></>}
      intro={<>Solução <strong className="text-foreground">tudo-em-um</strong> para lojas de revenda que querem crescer: gestão completa de estoque, CRM com WhatsApp, simulador de financiamento, portal próprio com SEO e <strong className="text-foreground">publicação automática em Webmotors, iCarros, OLX e Mercado Livre</strong>. Menos retrabalho, mais leads, mais margem.</>}
      stats={[
        { value: "800+", label: "Revendas ativas" },
        { value: "150K", label: "Veículos gerenciados" },
        { value: "40%", label: "Aumento em leads" },
        { value: "R$0", label: "Setup inicial" },
      ]}
      clientsTitle={<>Revendas e concessionárias que <span className="text-gradient">confiam na NC Brasil</span></>}
      clients={["MegaCar", "AutoShow", "Revenda Premium", "CarPlus", "TopCar", "AutoBrasil", "Multimarcas SP", "Grupo Veículos MG"]}
      problem={{
        title: <>Por que a sua revenda <span className="text-destructive">perde tempo e dinheiro</span> com sistema errado?</>,
        items: [
          "**Cadastro em duplicidade** — mesmo carro precisa ser inserido no ERP, no Webmotors, no iCarros e no site da loja.",
          "**Leads perdidos** porque o WhatsApp não distribui automaticamente entre vendedores e ninguém responde a tempo.",
          "**Sem controle de margem real** — comissão, custo de reforma, ITBI e taxas comem o lucro sem alerta.",
          "**Financiamento manual** — vendedor gasta 40 minutos ligando para cada banco pra fazer simulação.",
          "**DOC de transferência** feito no papel, com filas no DETRAN e cliente esperando semanas.",
          "**Zero BI** — dono não sabe qual vendedor vende mais, qual carro fica parado ou qual canal traz mais lead.",
        ],
      }}
      solution={{
        title: <>O <span className="text-gradient">ERP + Portal + CRM</span> mais completo do mercado automotivo</>,
        desc: <>A NC Brasil desenvolve há mais de 15 anos <strong className="text-foreground">software para revenda de veículos</strong>. Nossa plataforma unifica estoque, CRM, financiamento, portal e cross-post em um único sistema — <strong className="text-foreground">sem mensalidades abusivas por veículo</strong>, com suporte especializado e roadmap contínuo de evolução.</>,
        highlights: [
          "**Tudo-em-um** — ERP + CRM + Portal + App",
          "**Cross-post 1 clique** para Webmotors, iCarros, OLX",
          "**WhatsApp Business** com bot e distribuição",
          "**8 bancos** para financiamento em 1 clique",
          "**DOC fácil** integrado com DETRAN nacional",
          "**BI da loja** com margem, giro e ROI",
        ],
      }}
      benefits={[
        { icon: Package, title: "Gestão de Estoque", desc: "Entrada, precificação FIPE, **custos, comissão, reforma e margem** por veículo — controle total do capital de giro." },
        { icon: Users, title: "CRM Automotivo", desc: "Funil de leads, **follow-up automatizado, WhatsApp e ligação** direto do card do lead — nada cai no esquecimento." },
        { icon: CreditCard, title: "Financiamento", desc: "Simulação e pré-aprovação com **BV, Santander, Itaú, Bradesco, Safra, Pan** — comissão automática configurada." },
        { icon: Globe2, title: "Anúncios Integrados", desc: "1 clique publica em **Webmotors, iCarros, OLX, MercadoLivre, Facebook Marketplace, Instagram** e portal próprio." },
      ]}
      features={[
        { icon: Camera, title: "Fotos Profissionais", desc: "Sessão fotográfica no app, **remoção de fundo IA e watermark automático** em lote." },
        { icon: FileCheck, title: "DOC-fácil", desc: "Transferência, débitos, restrições, IPVA — tudo integrado com **DETRAN de todos os estados**." },
        { icon: Search, title: "Portal com SEO", desc: "Site próprio com **URL amigável, schema Vehicle, Google Analytics e Vehicle Ads**." },
        { icon: MessageCircle, title: "WhatsApp Business", desc: "**Chatbot qualificador, distribuição de leads por vendedor, gravação e histórico** completo." },
        { icon: BarChart3, title: "BI da Loja", desc: "**Ticket médio, tempo em estoque, giro, ROI por canal** de origem — dashboard executivo." },
        { icon: ShieldCheck, title: "Vistoria Digital", desc: "Checklist com fotos, **laudo cautelar e histórico** do veículo (sinistro, gravame, roubo)." },
        { icon: Smartphone, title: "App do Vendedor", desc: "Ficha do carro, calculadora de financiamento e captura de lead **offline no pátio**." },
        { icon: DollarSign, title: "Gestão Financeira", desc: "**DRE, fluxo de caixa, comissões, ITBI, contas a pagar/receber** e integração contábil." },
        { icon: Wrench, title: "Gestão de Reforma", desc: "Controle de **serviços, peças e custos** por veículo em preparação para venda." },
      ]}
      modules={[
        { icon: Package, title: "Estoque & Precificação", items: ["Cadastro rápido com FIPE", "Custo de aquisição + reforma", "Margem alvo e mínima", "Alerta de veículo parado", "Reserva e sinal"] },
        { icon: Users, title: "CRM & Leads", items: ["Pipeline visual (Kanban)", "Distribuição automática", "Score de qualificação IA", "Follow-up cadenciado", "Motivos de perda"] },
        { icon: CreditCard, title: "Financiamento & F&I", items: ["Simulação multi-banco", "Envio de proposta 1 clique", "Comissão automática", "Seguro, garantia estendida", "Protetor financeiro"] },
        { icon: BarChart3, title: "BI Executivo", items: ["Vendas por vendedor", "Origem do lead (SEO/Ads/Direto)", "Giro por marca/modelo", "Curva ABC de estoque", "Meta vs realizado"] },
      ]}
      useCases={[
        { icon: Car, title: "Revenda Multimarca", desc: "Loja de 30-300 veículos que precisa unificar estoque, cross-post e CRM em uma única plataforma sem mensalidade abusiva." },
        { icon: Award, title: "Grupo com Múltiplas Filiais", desc: "Rede com 5+ lojas que precisa de transferência de estoque, permissões por unidade e BI consolidado." },
        { icon: TrendingUp, title: "Revenda Premium/Luxo", desc: "Loja de veículos de alto padrão com necessidade de fotos profissionais, visita virtual e CRM VIP." },
        { icon: Wrench, title: "Loja com Retífica/Reforma", desc: "Revenda que compra veículo para reformar e revender — controle de custos, prazos e OS integrada." },
      ]}
      integrations={[
        { name: "Tabela FIPE", category: "Precificação" },
        { name: "Webmotors XML", category: "Cross-post" },
        { name: "iCarros XML", category: "Cross-post" },
        { name: "OLX Autos", category: "Cross-post" },
        { name: "MercadoLivre", category: "Cross-post" },
        { name: "Facebook Marketplace", category: "Cross-post" },
        { name: "BV Financeira", category: "Financiamento" },
        { name: "Santander Auto", category: "Financiamento" },
        { name: "Bradesco Finance", category: "Financiamento" },
        { name: "DETRAN nacional", category: "Documentação" },
        { name: "WhatsApp Business API", category: "Leads" },
        { name: "Domínio Contábil", category: "Contabilidade" },
        { name: "Google Analytics 4", category: "Analytics" },
        { name: "Meta Ads / Google Ads", category: "Mídia" },
      ]}
      security={[
        { icon: Lock, title: "LGPD Compliance", desc: "Consentimento, portabilidade, anonimização e log de acesso a dados do cliente." },
        { icon: ShieldCheck, title: "Antifraude Automotivo", desc: "Validação de **placa, chassi, gravame, restrição, sinistro e leilão** antes de anunciar." },
        { icon: Cloud, title: "Infra AWS/GCP", desc: "**99.9% uptime**, backups diários e disaster recovery em <4h." },
        { icon: Database, title: "Auditoria & Permissões", desc: "Log imutável de alteração de preço, KM, foto e usuário. Permissões granulares por função." },
      ]}
      timeline={[
        { step: "01", title: "Diagnóstico da Revenda", desc: "Mapeamos operação, volume, canais de venda e integrações necessárias em 3 dias." },
        { step: "02", title: "Migração de Dados", desc: "Trazemos fotos, fichas, leads e histórico do sistema antigo — sem perder informação." },
        { step: "03", title: "White Label & Portal", desc: "Sua marca, domínio e portal próprio no ar em até 15 dias com SEO configurado." },
        { step: "04", title: "Treinamento", desc: "Equipe comercial, financeiro e pátio treinados presencialmente ou online por especialistas." },
        { step: "05", title: "Suporte Contínuo", desc: "Suporte 24/7, evoluções trimestrais e consultoria de crescimento incluídas." },
      ]}
      comparative={{
        usLabel: "NC Brasil",
        themLabel: "Concorrentes SaaS",
        rows: [
          { feature: "Licença perpétua sem mensalidade", us: true, them: false },
          { feature: "Sem taxa por veículo cadastrado", us: true, them: false },
          { feature: "Portal próprio com SEO técnico", us: true, them: "Básico" },
          { feature: "Cross-post 1 clique (todos portais)", us: true, them: "Parcial" },
          { feature: "WhatsApp Business com bot", us: true, them: false },
          { feature: "Financiamento 8 bancos integrados", us: true, them: "3-4" },
          { feature: "App nativo do vendedor", us: true, them: false },
          { feature: "BI executivo completo", us: true, them: "Básico" },
          { feature: "Código-fonte entregável", us: "Opcional", them: false },
        ],
      }}
      testimonials={[
        { quote: "Substituímos 3 sistemas por 1 só. O cross-post automático economiza 4h por dia da equipe e o BI mostra exatamente onde tem gordura pra cortar.", author: "MegaCar Multimarcas", role: "150 veículos · SP" },
        { quote: "O WhatsApp com distribuição automática e bot qualificador dobrou nossa taxa de conversão de lead em atendimento.", author: "AutoShow Premium", role: "Revenda de Luxo · RJ" },
        { quote: "Migramos de um SaaS que cobrava por veículo e economizamos R$8 mil/mês. O portal próprio ainda gera leads orgânicos via Google.", author: "Grupo TopCar", role: "Rede com 4 lojas · MG" },
      ]}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para <span className="text-gradient">profissionalizar sua revenda</span> com tecnologia?</>}
      finalCtaDesc={<>Fale com nossa equipe automotiva. Fazemos <strong className="text-foreground">demonstração ao vivo com dados da sua operação</strong>, análise de ROI e proposta comercial em até 48h.</>}
    />
  ),
});
