import { createFileRoute } from "@tanstack/react-router";
import { Camera, Car, CreditCard, Filter, Gauge, MapPin, MessageCircle, Search, ShieldCheck, Sparkles, Tag, Users } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/sistemas/classificados-de-veiculos";

export const Route = createFileRoute("/sistemas/classificados-de-veiculos")({
  head: () => buildLPMeta({
    title: "Sistema de Classificados de Veículos | Portal Automotivo",
    description: "Plataforma completa para classificados de veículos: revendas, particulares, busca avançada FIPE, financiamento integrado e comparador de carros.",
    keywords: "sistema classificados de veículos, portal automotivo, sistema para revenda, plataforma de veículos, classificados carros usados",
    canonical: URL,
    h1: "Plataforma de Classificados Automotivos",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/sistemas" },
      { name: "Classificados de Veículos", url: URL },
    ],
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/sistemas", label: "Sistemas" }, { to: "/sistemas/classificados-de-veiculos", label: "Classificados de Veículos" }]}
      eyebrow="Classificados"
      h1={<>Portal de <span className="text-gradient">Classificados Automotivos</span></>}
      intro={<>Sistema completo para criar o próximo <strong className="text-foreground">grande portal de veículos</strong> — busca avançada com tabela FIPE, planos para revendedores, financiamento integrado e comparador.</>}
      stats={[{ value: "50K+", label: "Anúncios ativos" }, { value: "2M", label: "Visitas/mês" }, { value: "800+", label: "Revendas ativas" }, { value: "95%", label: "SEO score" }]}
      benefits={[
        { icon: Search, title: "Busca Inteligente", desc: "Filtros por **marca, modelo, versão, ano, km, câmbio, cor, opcionais e preço** com autocomplete." },
        { icon: Tag, title: "Integração FIPE", desc: "Consulta automática da **Tabela FIPE** e alerta de preço abaixo/acima do mercado." },
        { icon: Users, title: "Planos para Revendas", desc: "Painel de revendedor com **destaques, super destaques e integração com estoque**." },
        { icon: CreditCard, title: "Financiamento Online", desc: "Simulação e pré-aprovação integrada com **bancos e financeiras** parceiras." },
      ]}
      features={[
        { icon: Car, title: "Ficha Técnica Completa", desc: "Dados oficiais, opcionais, revisões e histórico de proprietários." },
        { icon: Camera, title: "Galeria Profissional", desc: "Upload em lote, watermark automático e visita virtual 360°." },
        { icon: MapPin, title: "Busca por Localização", desc: "Raio de km configurável e mapa interativo com anúncios próximos." },
        { icon: Filter, title: "Comparador de Veículos", desc: "Compare até **4 veículos lado a lado** com preço, consumo e opcionais." },
        { icon: MessageCircle, title: "Chat & WhatsApp", desc: "Chat integrado, WhatsApp click-to-call e lead qualificado para revenda." },
        { icon: ShieldCheck, title: "Antifraude", desc: "Validação de placa, chassi, restrições e alerta de anúncio suspeito." },
      ]}
      faq={[
        { q: "É possível integrar com o meu ERP de revenda?", a: "Sim, temos **APIs prontas para AutoConf, Automotor, Boom Sistemas e Localiza Meu Carro**." },
        { q: "O sistema já vem com SEO otimizado?", a: "Sim. Cada anúncio gera **página única com URL amigável, schema Vehicle, sitemap dinâmico** e imagens otimizadas." },
        { q: "Aceita anúncios de particulares?", a: "Sim, com **planos gratuitos limitados e pagos para destaque** — moderação automatizada." },
        { q: "Como funciona o financiamento integrado?", a: "Integramos com o **CredMax, Creditas e bancos parceiros** para simulação em tempo real." },
        { q: "É responsivo e rápido?", a: "PWA com **cache offline, imagens WebP e Core Web Vitals verde** em todos os dispositivos." },
      ]}
    />
  ),
});
