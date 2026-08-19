import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, Database, Cloud, Users, Award, ShieldCheck, Zap, Workflow, BarChart3, Lock, Boxes, GitBranch } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/portfolio/sistemas-criados";

const lpFaq = [
        { q: "Posso ver cases reais?", a: "Sim, acesse **Portfólio Sistemas** para cases com prints e descrição de escopo." },
        { q: "Fazem ERPs completos?", a: "Sim, ou **customizamos** ERPs existentes (Bling, Omie, TOTVS) para casos específicos." },
        { q: "Qual o prazo médio?", a: "MVP em **60-90 dias**; sistema completo em 6-12 meses." },
        { q: "Fazem manutenção?", a: "Sim, contratos de **evolução contínua** com squads dedicadas." },
      ];

export const Route = createFileRoute("/portfolio/sistemas-criados")({
  head: () => buildLPMeta({
    title: "Portfólio de Sistemas Web | ERPs, CRMs e SaaS Criados pela NC Brasil",
    description: "Portfólio de sistemas web criados pela NC Brasil. Cases de ERPs, CRMs, plataformas SaaS multi-tenant e portais corporativos.",
    keywords: "portfolio sistemas web, sistemas criados, cases sistemas, portfolio erp, portfolio saas, sistemas nc brasil",
    canonical: URL,
    h1: "Portfólio de Sistemas Web Desenvolvidos",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Portfólio", to: "https://www.ncbrasil.com.br/trabalhos-realizados" },
      { label: "Sistemas Criados", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/trabalhos-realizados", label: "Portfólio" }, { to: "/portfolio/sistemas-criados", label: "Sistemas Criados" }]}
      subtitle="Portfólio Sistemas"
      h1={<>Sistemas que <span className="text-gradient">operam 24/7 sem falhar</span></>}
      intro={<>**Mais de 400 sistemas ativos** em produção: ERPs, CRMs, portais corporativos e plataformas SaaS multi-tenant com uptime 99,9%.</>}
      stats={[{ value: "400+", label: "Sistemas ativos" }, { value: "99,9%", label: "SLA" }, { value: "Multi-tenant", label: "Arquitetura" }, { value: "24/7", label: "Suporte" }]}
      benefits={[
        { icon: LayoutDashboard, title: "Painéis Sob Medida", desc: "Dashboards com **KPIs em tempo real, gráficos e relatórios exportáveis**." },
        { icon: Cloud, title: "Arquitetura Cloud", desc: "**AWS, GCP e Cloudflare** com escala automática e alta disponibilidade." },
        { icon: ShieldCheck, title: "Segurança Enterprise", desc: "**OWASP Top 10, LGPD, SOC 2** e pentest antes de cada release crítico." },
        { icon: Award, title: "Cases Reconhecidos", desc: "Sistemas operando em **bancos, seguradoras, redes de franquia e healthtechs**." },
      ]}
      features={[
        { icon: Database, title: "Bancos Robustos", desc: "PostgreSQL, MongoDB, Redis com **backup, replicação e shards**." },
        { icon: Users, title: "Multi-Perfil", desc: "Permissões granulares por **usuário, cargo, departamento e empresa**." },
        { icon: Workflow, title: "Automação BPM", desc: "Fluxos configuráveis, aprovações, notificações e **SLA por processo**." },
        { icon: BarChart3, title: "BI Integrado", desc: "**Metabase, PowerBI ou dashboards sob medida** — decisão data-driven." },
        { icon: Lock, title: "SSO & MFA", desc: "SAML, OAuth, Microsoft, Google e **autenticação de dois fatores**." },
        { icon: Boxes, title: "Multi-Tenant", desc: "Arquitetura para **milhares de clientes** com isolamento total de dados." },
      ]}
      faq={lpFaq}
    />
  ),
});
