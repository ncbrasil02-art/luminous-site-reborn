import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Camera, Car, CarFront, CreditCard, FileCheck, Globe2, MessageCircle, Package, Search, ShieldCheck, Users } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistemas/sistema-de-revenda-de-veiculos";

const lpFaq = [
        { q: "Vocês entregam o portal do meu domínio?", a: "Sim, portal com **domínio próprio, SSL, hospedagem otimizada e SEO técnico** incluídos no plano." },
        { q: "Quais anunciadores externos são integrados?", a: "**Webmotors, iCarros, OLX, MercadoLivre, Facebook Marketplace, Instagram Shopping** e Google Vehicle Ads." },
        { q: "Funciona no celular do vendedor?", a: "Sim, **app iOS/Android** para vendedores com fichamento no pátio, fotos e captura de leads." },
        { q: "Como funciona a integração com o financiamento?", a: "Simulador integrado com **os 8 principais bancos** — o vendedor envia proposta em 1 clique." },
        { q: "Suporta múltiplas lojas?", a: "Sim, arquitetura **multi-loja** com transferência de estoque, permissões e BI consolidado." },
      ];

export const Route = createFileRoute("/sistemas/sistema-de-revenda-de-veiculos")({
  head: () => buildLPMeta({
    title: "Sistema para Revenda de Veículos | ERP + Portal Automotivo",
    description: "ERP completo para revendas de veículos: gestão de estoque, CRM, financiamento, portal com anúncios integrados a Webmotors, iCarros e OLX, DOC-fácil e app da equipe.",
    keywords: "sistema para revenda de veículos, ERP para revenda, software para revenda de carros, plataforma para revenda automotiva, sistema para loja de carros",
    canonical: URL,
    h1: "Plataforma para Revenda de Veículos",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/sistemas" },
      { name: "Revenda de Veículos", url: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/sistemas", label: "Sistemas" }, { to: "/sistemas/sistema-de-revenda-de-veiculos", label: "Revenda de Veículos" }]}
      eyebrow="Revenda de Veículos"
      h1={<>ERP & Portal para <span className="text-gradient">Revenda de Veículos</span></>}
      intro={<>Solução <strong className="text-foreground">tudo-em-um</strong> para lojas de revenda: gestão de estoque, CRM, financiamento, portal próprio com SEO e **integração com Webmotors, iCarros, OLX e Mercado Livre**.</>}
      stats={[{ value: "800+", label: "Revendas ativas" }, { value: "150K", label: "Veículos gerenciados" }, { value: "40%", label: "Aumento em leads" }, { value: "R$0", label: "Setup inicial" }]}
      benefits={[
        { icon: Package, title: "Gestão de Estoque", desc: "Entrada, precificação FIPE, **custos, comissão e margem** por veículo — controle total do capital de giro." },
        { icon: Users, title: "CRM Automotivo", desc: "Funil de leads, **follow-up automatizado, WhatsApp e ligação** direto do card do lead." },
        { icon: CreditCard, title: "Financiamento", desc: "Simulação e pré-aprovação com **BV, Santander, Itaú, Bradesco** — comissão automática." },
        { icon: Globe2, title: "Anúncios Integrados", desc: "1 clique publica em **Webmotors, iCarros, OLX, MercadoLivre, Facebook Marketplace** e portal próprio." },
      ]}
      features={[
        { icon: Camera, title: "Fotos Profissionais", desc: "Sessão fotográfica no app, remoção de fundo IA e watermark automático." },
        { icon: FileCheck, title: "DOC-fácil", desc: "Transferência, débitos, restrições, IPVA — tudo integrado com DETRAN." },
        { icon: Search, title: "Portal com SEO", desc: "Site próprio com URL amigável, schema Vehicle e Google Analytics." },
        { icon: MessageCircle, title: "WhatsApp Business", desc: "Chatbot qualificador, distribuição de leads por vendedor e histórico." },
        { icon: BarChart3, title: "BI da Loja", desc: "Ticket médio, tempo em estoque, giro, ROI por canal de origem." },
        { icon: ShieldCheck, title: "Vistoria Digital", desc: "Checklist com fotos, laudo cautelar e histórico do veículo." },
      ]}
      faq={lpFaq}
    />
  ),
});
