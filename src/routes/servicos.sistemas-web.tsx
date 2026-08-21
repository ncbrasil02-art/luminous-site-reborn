import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, Users, Lock, BarChart3, Workflow, Database, Zap, Cloud, ShieldCheck, Boxes, Settings, GitBranch } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/servicos/sistemas-web";

const lpFaq = [
        { q: "Vocês fazem ERP completo?", a: "Sim, ou **customizamos ERPs existentes** (Bling, Omie, TOTVS) para casos específicos." },
        { q: "Serve para minha operação?", a: "Sim, **fazemos discovery** para entender processos e propor arquitetura ideal." },
        { q: "Consigo integrar com outros sistemas?", a: "Sim, **API-first** — integramos com qualquer sistema que exponha API ou webhook." },
        { q: "Como cobram?", a: "Escopo fechado ou **mensalidade SaaS** (para sistemas próprios comercializados)." },
        { q: "Quem hospeda?", a: "Hospedamos em **cloud gerenciada** ou entregamos para seu time de DevOps." },
      ];

export const Route = createFileRoute("/servicos/sistemas-web")({
  head: () => buildLPMeta({
    title: "Desenvolvimento de Sistemas Web | ERPs, CRMs e SaaS Sob Medida",
    description: "Desenvolvimento de sistemas web sob medida: ERPs, CRMs, portais, intranets, sistemas de gestão e plataformas SaaS multi-tenant.",
    keywords: "sistemas web, desenvolvimento de sistemas, erp personalizado, crm sob medida, sistema de gestão, plataforma saas",
    canonical: URL,
    serviceType: "sistemas web",
    h1: "Sistemas Web Personalizados para Sua Operação",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Serviços", to: "https://www.ncbrasil.com.br/servicos" },
      { label: "Sistemas Web", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-servicos", label: "Serviços" }, { to: "/servicos/sistemas-web", label: "Sistemas Web" }]}
      eyebrow="Sistemas Web"
      benefitsTitle={<>Ganhos de um <span className="text-gradient">sistema web sob medida</span></>}
      featuresTitle={<>Recursos dos nossos <span className="text-gradient">ERPs, CRMs e plataformas SaaS</span></>}
      faqTitle={<>Dúvidas sobre <span className="text-gradient">desenvolvimento de sistemas web</span></>}
      h1={<>Sistemas web <span className="text-gradient">sob medida</span> para gestão e operação</>}
      intro={<>Do **ERP ao CRM, do portal do cliente ao SaaS multi-tenant** — construímos sistemas web que automatizam processos e escalam com seu negócio.</>}
      stats={[{ value: "400+", label: "Sistemas ativos" }, { value: "Multi-tenant", label: "Arquitetura" }, { value: "99,9%", label: "SLA" }, { value: "24/7", label: "Suporte" }]}
      benefits={[
        { icon: LayoutDashboard, title: "Painéis Sob Medida", desc: "Dashboards com **KPIs em tempo real, gráficos interativos e relatórios exportáveis**." },
        { icon: Lock, title: "Multi-Perfil", desc: "Controle granular de permissões por **usuário, cargo, departamento ou empresa**." },
        { icon: Workflow, title: "Automação de Fluxos", desc: "**Workflows configuráveis**, aprovações, notificações e integrações com terceiros." },
        { icon: Cloud, title: "Multi-Tenant SaaS", desc: "Arquitetura para **atender milhares de clientes** com isolamento total de dados." },
      ]}
      features={[
        { icon: Users, title: "Gestão de Usuários", desc: "SSO, MFA, LGPD compliance e auditoria completa de acessos." },
        { icon: BarChart3, title: "BI Integrado", desc: "Dashboards com Metabase, PowerBI ou construídos sob medida." },
        { icon: Database, title: "Dados Seguros", desc: "Backup automático, replicação, criptografia at-rest e in-transit." },
        { icon: Boxes, title: "Módulos Escaláveis", desc: "Adicione novos módulos sem reescrever — **arquitetura modular**." },
        { icon: Settings, title: "API-First", desc: "Todo sistema tem **API REST/GraphQL documentada** para integração." },
        { icon: GitBranch, title: "Evolução Contínua", desc: "Novas features publicadas **sem downtime** via deploys blue/green." },
      ]}
      faq={lpFaq}
    />
  ),
});
