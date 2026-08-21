import { createFileRoute } from "@tanstack/react-router";
import { Server, ShieldCheck, Zap, Cloud, HardDrive, Globe2, Lock, Activity, Cpu, Database, Headphones, BadgeCheck } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/hospedagem";

const lpFaq = [
  { q: "Por que escolher um servidor dedicado no Brasil?", a: "Servidores nacionais garantem a **menor latência possível**, tornando seu site muito mais rápido para o público brasileiro." },
  { q: "O que é hospedagem em Cloud?", a: "É uma infraestrutura escalável que permite aumentar recursos como **RAM e CPU instantaneamente** conforme seu tráfego cresce." },
  { q: "Vocês oferecem suporte para e-mail profissional?", a: "Sim, configuramos toda a estrutura de e-mails para que sua empresa tenha uma **presença profissional completa**." },
  { q: "Meu site terá certificado de segurança SSL?", a: "Sim, instalamos e renovamos automaticamente o **SSL gratuito** em todos os domínios hospedados conosco." },
  { q: "Como funciona a consultoria para dedicados?", a: "Analisamos sua carga de processamento e configuramos o **hardware ideal** para que você nunca tenha gargalos de performance." },
];

export const Route = createFileRoute("/solucoes-web/hospedagem")({
  head: () => buildLPMeta({
    title: "Hospedagem de Sites e Sistemas | Servidores Dedicados e Cloud no Brasil",
    description: "Hospedagem profissional com servidores dedicados, planos cloud e infraestrutura total no Brasil. Consultoria para servidores dedicados e ambientes escaláveis.",
    keywords: "hospedagem de sites, servidor dedicado brasil, planos cloud, consultoria servidores, hospedagem sistemas, infraestrutura web, hospedagem revenda",
    canonical: URL,
    h1: "Hospedagem de Sites, Sistemas e Servidores Dedicados",
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
      h1={<>Infraestrutura Robusta para <span className="text-gradient">Escalar seus Sistemas</span></>}
      intro={<>Hospedagem profissional com **servidores dedicados e cloud** projetada para projetos que não podem parar. Consultoria técnica e infraestrutura brasileira que garante velocidade extrema e estabilidade total.</>}
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
