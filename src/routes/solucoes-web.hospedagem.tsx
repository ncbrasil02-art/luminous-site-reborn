import { createFileRoute } from "@tanstack/react-router";
import { Server, ShieldCheck, Zap, Cloud, HardDrive, Globe2, Lock, Activity, Cpu, Database, Headphones, BadgeCheck } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/hospedagem";

const lpFaq = [
        { q: "Qual a diferença para hospedagens populares?", a: "Nossa hospedagem é **gerenciada por engenheiros DevOps** — não é compartilhada e nunca deixa seu site fora do ar por vizinho ruim." },
        { q: "Migram meu site atual?", a: "Sim, **migração gratuita e sem downtime**, cuidamos de tudo em até 48h." },
        { q: "Qual o valor?", a: "Planos a partir de **R$ 149/mês** — proposta personalizada conforme necessidade." },
        { q: "Serve para e-commerce?", a: "Sim, temos planos otimizados para **WooCommerce, Magento e plataformas próprias**." },
        { q: "Fazem manutenção?", a: "Sim, **atualizações, patches de segurança e otimizações** incluídos no plano." },
      ];

export const Route = createFileRoute("/solucoes-web/hospedagem")({
  head: () => buildLPMeta({
    title: "Hospedagem de Sites e Sistemas | Cloud Gerenciada com SSL e Backup",
    description: "Hospedagem cloud gerenciada para sites, e-commerces e sistemas. SSL grátis, backup diário, CDN global, uptime 99,9% e suporte 24/7.",
    keywords: "hospedagem de sites, hospedagem cloud, hospedagem gerenciada, hospedagem para e-commerce, servidor dedicado",
    canonical: URL,
    h1: "Hospedagem Cloud Gerenciada de Alta Performance",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Soluções Web", to: "https://www.ncbrasil.com.br/solucoes-web" },
      { label: "Hospedagem", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/solucoes-web", label: "Soluções Web" }, { to: "/solucoes-web/hospedagem", label: "Hospedagem" }]}
      eyebrow="Infra Cloud"
      h1={<>Hospedagem de Alta Performance: <span className="text-gradient">Sites e Servidores Dedicados</span></>}
      intro={<>Oferecemos serviços de **hospedagem para revendas, websites e servidores dedicados**. Infraestrutura robusta em Cloud para garantir que sua operação nunca pare, com suporte especialista 24/7.</>}
      stats={[{ value: "99,9%", label: "Uptime garantido" }, { value: "24/7", label: "Suporte técnico" }, { value: "<50ms", label: "Latência Brasil" }, { value: "SSL", label: "Grátis Let's Encrypt" }]}
      benefits={[
        { icon: Zap, title: "Performance Extrema", desc: "**SSD NVMe, HTTP/3, cache Redis** e CDN Cloudflare em 300+ pontos globais." },
        { icon: ShieldCheck, title: "Segurança Total", desc: "**WAF, anti-DDoS, malware scan** e firewall aplicacional inclusos." },
        { icon: Cloud, title: "Cloud Escalável", desc: "Aumente RAM, CPU e disco **sem downtime** conforme sua demanda cresce." },
        { icon: HardDrive, title: "Backup Diário", desc: "Snapshots incrementais **retidos por 30 dias** — restauração em 1 clique." },
      ]}
      features={[
        { icon: Lock, title: "SSL Grátis", desc: "Let's Encrypt renovado automaticamente, incluindo wildcard subdomínios." },
        { icon: Globe2, title: "CDN Global", desc: "Cloudflare Enterprise com **cache inteligente e otimização automática** de imagens." },
        { icon: Activity, title: "Monitoramento 24/7", desc: "Uptime, resposta, uso de recursos e **alertas instantâneos** via SMS/e-mail." },
        { icon: Cpu, title: "Servidor Dedicado", desc: "Opções de VPS, bare metal e Kubernetes para **projetos de alto tráfego**." },
        { icon: Database, title: "Bancos Gerenciados", desc: "PostgreSQL, MySQL, MongoDB e Redis com backup automático e réplicas." },
        { icon: Headphones, title: "Suporte Especialista", desc: "Time DevOps brasileiro — **resposta em menos de 30 minutos** em horário comercial." },
      ]}
      faq={lpFaq}
      heroImage="/img-sistema-de-leilao/rural-pregao.png"
    />
  ),
});
