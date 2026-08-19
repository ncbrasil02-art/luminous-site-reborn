import { createFileRoute } from "@tanstack/react-router";
import {
  Camera, Car, CreditCard, Filter, MapPin, MessageCircle, Search, ShieldCheck, Tag, Users,
  BarChart3, Zap, Lock, Cloud, Database, Award, Globe2, Smartphone, FileCheck, Gauge,
} from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/classificados-de-veiculos";

const lpFaq = [
  { q: "É possível integrar com o meu ERP de revenda ou concessionária?", a: "Sim. Temos **APIs prontas para AutoConf, Automotor, Boom Sistemas, Localiza Meu Carro, Revenda Mais, DealerBox** e integrações personalizadas via REST/XML." },
  { q: "O sistema já vem com SEO técnico otimizado?", a: "Sim. Cada anúncio gera **URL amigável, Schema.org Vehicle, sitemap dinâmico, imagens WebP com lazy load, Core Web Vitals verde** e ping automático ao Google Vehicle Ads." },
  { q: "Aceita anúncios de particulares e revendedores no mesmo portal?", a: "Sim, com **planos gratuitos limitados para PF e pagos com destaque, super destaque e diamante** para revendas — moderação automatizada com IA." },
  { q: "Como funciona o financiamento integrado?", a: "Integramos com **BV, Santander, Itaú, Bradesco, Creditas e CredMax** para simulação em tempo real e pré-aprovação em 1 clique." },
  { q: "É PWA/responsivo e rápido no 4G?", a: "PWA com **cache offline, imagens WebP/AVIF e Core Web Vitals verde** em todos os dispositivos — carrega em menos de 2s mesmo em 4G." },
  { q: "Existe app mobile próprio?", a: "Sim, **iOS e Android nativos white label** publicados nas lojas com sua marca, notificações push e busca por voz." },
  { q: "Consulto a Tabela FIPE em tempo real?", a: "Sim. Consulta automática da **FIPE** com alerta visual de preço abaixo/na média/acima do mercado no card do veículo." },
  { q: "O sistema tem antifraude?", a: "Sim. **Validação de placa, chassi, restrições, gravame, sinistro e roubo/furto** via APIs oficiais + análise comportamental do anunciante." },
  { q: "Suporta múltiplas cidades e franquias regionais?", a: "Arquitetura **multi-tenant e geodivisão** por raio de km, cidade, estado ou região — ideal para franquias regionais." },
  { q: "Quanto custa e qual o modelo comercial?", a: "**Licença perpétua** (sem mensalidade recorrente) ou SaaS com taxa por anúncio ativo — orçamento personalizado conforme volume." },
];

export const Route = createFileRoute("/classificados-de-veiculos")({
  head: () => buildLPMeta({
    title: "Sistema de Classificados de Veículos | Portal Automotivo — NC Brasil",
    description: "Plataforma completa para portal de classificados de veículos: revendas, particulares, busca avançada, FIPE integrada, financiamento, comparador, app iOS/Android e SEO técnico.",
    keywords: "sistema classificados de veículos, portal automotivo, sistema para revenda, plataforma de veículos, classificados carros usados, criar site de carros, software portal automotivo",
    canonical: URL,
    h1: "Plataforma de Classificados Automotivos",
    breadcrumbs: [
      { name: "Home", url: "https://www.ncbrasil.com.br/" },
      { name: "Sistemas", url: "https://www.ncbrasil.com.br/nossos-sistemas" },
      { name: "Classificados de Veículos", url: URL },
    ],
    faq: lpFaq,
    ogImage: "/og/classificados-veiculos.jpg",
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/nossos-sistemas", label: "Sistemas" }, { to: "/classificados-de-veiculos", label: "Classificados de Veículos" }]}
      eyebrow="Portal Automotivo · Marketplace de Veículos"
      h1={<>Portal de <span className="text-gradient">Classificados Automotivos</span> — o próximo Webmotors/iCarros</>}
      intro={<>Sistema turnkey para lançar o <strong className="text-foreground">próximo grande portal de veículos</strong> do seu estado ou nicho. Busca avançada com <strong className="text-foreground">Tabela FIPE integrada</strong>, planos escaláveis para revendedores, financiamento em 1 clique, comparador lado-a-lado e SEO técnico premiado — tudo com nosso motor proprietário testado em milhões de anúncios.</>}
      stats={[
        { value: "50K+", label: "Anúncios ativos" },
        { value: "2M", label: "Visitas mensais" },
        { value: "800+", label: "Revendas conectadas" },
        { value: "95", label: "PageSpeed médio" },
      ]}
      clientsTitle={<>Portais e revendas que <span className="text-gradient">confiam na NC Brasil</span></>}
      clients={["AutoShow", "MegaCar Portal", "Revenda Fácil", "CarroBom", "AutoBrasil", "MercadoCar", "TopVeículos", "AutoRegional"]}
      problem={{
        title: <>Por que <span className="text-destructive">portais genéricos e Webmotors</span> não atendem o seu mercado?</>,
        items: [
          "**Comissão altíssima** dos grandes portais (Webmotors/iCarros) que corrói margem da revenda em cada venda fechada.",
          "**Anúncios diluídos** entre milhões de veículos nacionais — o comprador da sua cidade não encontra sua revenda.",
          "**Zero controle sobre lead** — o portal vende o mesmo lead para 5 concorrentes ao mesmo tempo.",
          "**Interface engessada** sem customização de destaque, layout ou identidade visual da revenda.",
          "**Sem integração real com FIPE** e gravame — o comprador precisa consultar em outros sites.",
          "**SEO inexistente** no anúncio individual — página do carro não ranqueia no Google.",
        ],
      }}
      solution={{
        title: <>Seu próprio <span className="text-gradient">portal automotivo regional</span> com tecnologia de ponta</>,
        desc: <>A NC Brasil desenvolve há mais de 15 anos <strong className="text-foreground">portais de classificados de veículos</strong> para grupos regionais, redes de revenda e nichos especializados (SUV, elétrico, premium, comercial). Você recebe uma <strong className="text-foreground">plataforma completa, marca própria e leads exclusivos</strong> — sem comissão sobre venda.</>,
        highlights: [
          "**Domínio e marca próprios** — 100% white label",
          "**Leads exclusivos** direto ao anunciante",
          "**FIPE + gravame + restrições** em tempo real",
          "**App nativo iOS/Android** com sua marca",
          "**SEO técnico** premiado (schema Vehicle)",
          "**Sem comissão** sobre venda fechada",
        ],
      }}
      benefits={[
        { icon: Search, title: "Busca Inteligente", desc: "Filtros por **marca, modelo, versão, ano, km, câmbio, cor, opcionais, blindagem e preço** com autocomplete instantâneo." },
        { icon: Tag, title: "Integração FIPE + Gravame", desc: "Consulta automática da **Tabela FIPE** e alerta de preço abaixo/na média/acima + verificação de gravame." },
        { icon: Users, title: "Planos para Revendas", desc: "Painel completo com **destaque, super destaque, diamante, integração de estoque, BI e ranking**." },
        { icon: CreditCard, title: "Financiamento em 1 clique", desc: "Simulação e pré-aprovação com **BV, Santander, Itaú, Bradesco, Creditas** — comissão para o portal." },
      ]}
      features={[
        { icon: Car, title: "Ficha Técnica Completa", desc: "Dados oficiais da montadora, opcionais, revisões, laudo cautelar e histórico de proprietários." },
        { icon: Camera, title: "Galeria Profissional", desc: "Upload em lote, watermark automático, remoção de fundo IA e **visita virtual 360°**." },
        { icon: MapPin, title: "Busca por Localização", desc: "Raio de km configurável, mapa interativo e destaque de revendas próximas ao comprador." },
        { icon: Filter, title: "Comparador de Veículos", desc: "Compare até **4 veículos lado a lado** com preço, consumo, opcionais e nota de segurança Latin NCAP." },
        { icon: MessageCircle, title: "Chat & WhatsApp Business", desc: "Chat integrado, WhatsApp click-to-call e lead qualificado para a revenda com atribuição automática." },
        { icon: ShieldCheck, title: "Antifraude Automotivo", desc: "Validação de **placa, chassi, restrições, gravame, sinistro, roubo/furto e leilão** em tempo real." },
        { icon: Smartphone, title: "App iOS/Android", desc: "App nativo com **push de baixa de preço, favoritos, alertas de novos anúncios e biometria**." },
        { icon: Globe2, title: "SEO Vehicle Schema", desc: "Cada anúncio ranqueia no Google com **schema.org/Vehicle, sitemap dinâmico e og:image otimizada**." },
        { icon: Zap, title: "Publicação Cross-Portal", desc: "1 clique publica também em **Webmotors, iCarros, OLX, MercadoLivre e Facebook Marketplace**." },
      ]}
      modules={[
        { icon: Users, title: "Painel do Revendedor", items: ["Dashboard de leads e visitas", "Gestão de estoque em lote (CSV/API)", "Múltiplos vendedores com permissões", "Ranking na página inicial", "Alertas de baixa de preço"] },
        { icon: Car, title: "Módulo do Anunciante PF", items: ["Cadastro gratuito com limite", "Planos pagos de destaque", "Chat direto com comprador", "Moderação por IA", "Verificação de identidade"] },
        { icon: BarChart3, title: "BI do Portal", items: ["Anúncios mais visitados", "Origem de tráfego (SEO, Ads, Direto)", "Conversão por revenda", "Preço médio por marca/modelo", "Relatórios exportáveis"] },
        { icon: FileCheck, title: "DOC Fácil", items: ["Transferência online", "Consulta débitos DETRAN", "IPVA e licenciamento", "Multas por placa", "Vistoria eletrônica"] },
      ]}
      useCases={[
        { icon: Globe2, title: "Portal Regional", desc: "Grupo de mídia local que quer dominar o mercado de veículos da sua cidade/estado, sem depender do Webmotors." },
        { icon: Users, title: "Rede de Revendas", desc: "Associação de revendedores que quer portal próprio com leads exclusivos e sem comissão nacional." },
        { icon: Award, title: "Portal de Nicho", desc: "Especializado em elétricos, SUVs premium, motos, caminhões, comerciais leves ou blindados." },
        { icon: Car, title: "Grupo de Concessionárias", desc: "Multimarca que quer portal próprio com integração ERP e financiamento white label." },
      ]}
      integrations={[
        { name: "Tabela FIPE", category: "Precificação" },
        { name: "AutoConf", category: "ERP" },
        { name: "Boom Sistemas", category: "ERP" },
        { name: "DealerBox", category: "ERP" },
        { name: "Webmotors XML", category: "Cross-post" },
        { name: "iCarros XML", category: "Cross-post" },
        { name: "OLX Autos", category: "Cross-post" },
        { name: "Facebook Marketplace", category: "Cross-post" },
        { name: "BV Financeira", category: "Financiamento" },
        { name: "Santander Auto", category: "Financiamento" },
        { name: "Creditas", category: "Financiamento" },
        { name: "DETRAN (todos estados)", category: "Documentação" },
        { name: "WhatsApp Business API", category: "Leads" },
        { name: "Google Vehicle Ads", category: "Mídia" },
      ]}
      security={[
        { icon: Lock, title: "LGPD + Antifraude", desc: "Consentimento explícito, validação de anunciante e proteção contra golpe do falso vendedor." },
        { icon: ShieldCheck, title: "Verificação de Placa/Chassi", desc: "APIs oficiais para checar **restrições, gravame, roubo, sinistro e leilão** em tempo real." },
        { icon: Cloud, title: "Infra AWS/GCP", desc: "**99.9% uptime**, CDN global e proteção DDoS Cloudflare." },
        { icon: Database, title: "Auditoria de Anúncios", desc: "Log imutável de alteração de preço, KM e fotos para evitar manipulação." },
      ]}
      timeline={[
        { step: "01", title: "Estratégia de Portal", desc: "Definimos posicionamento (regional/nicho), pricing e roadmap de aquisição de revendas." },
        { step: "02", title: "White Label & UX", desc: "Sua marca, cores, domínio e template exclusivo em até 20 dias." },
        { step: "03", title: "Integração ERPs", desc: "Conectamos com AutoConf, Boom, Automotor e ativamos cross-post para grandes portais." },
        { step: "04", title: "Lançamento & SEO", desc: "Setup técnico completo (schema, sitemap, GSC, Vehicle Ads) + estratégia de link building." },
        { step: "05", title: "Escala & Mídia Paga", desc: "Consultoria de Google Ads, Meta Ads e parcerias para acelerar aquisição de anunciantes." },
      ]}
      comparative={{
        usLabel: "NC Brasil",
        themLabel: "Portal genérico",
        rows: [
          { feature: "Marca e domínio próprios (white label)", us: true, them: false },
          { feature: "Sem comissão sobre venda", us: true, them: false },
          { feature: "Leads 100% exclusivos", us: true, them: false },
          { feature: "FIPE + gravame integrados", us: true, them: "Parcial" },
          { feature: "App nativo iOS/Android próprio", us: true, them: false },
          { feature: "Cross-post automático", us: true, them: false },
          { feature: "SEO técnico Vehicle Schema", us: true, them: false },
          { feature: "Financiamento white label", us: true, them: false },
          { feature: "Código-fonte entregável", us: "Opcional", them: false },
        ],
      }}
      testimonials={[
        { quote: "Saímos do Webmotors e criamos nosso portal regional com a NC. Em 6 meses fizemos 3x mais leads pagando 80% menos.", author: "Grupo AutoShow", role: "Rede de Revendas · SC" },
        { quote: "A integração com FIPE e gravame em tempo real elevou a confiança do comprador. Nossa taxa de fechamento subiu 40%.", author: "Revenda MegaCar", role: "Concessionária Multimarca · SP" },
        { quote: "O comparador e o app com push de baixa de preço fizeram o usuário voltar 3x mais ao portal. Retenção incrível.", author: "AutoRegional", role: "Portal Regional · MG" },
      ]}
      faq={lpFaq}
      finalCtaTitle={<>Pronto para lançar o <span className="text-gradient">próximo grande portal automotivo</span>?</>}
      finalCtaDesc={<>Fale com nossa equipe de produto. Enviamos <strong className="text-foreground">demo ao vivo, análise de mercado da sua região</strong> e proposta comercial em até 48h.</>}
      relatedNewsTags={["Veículos","Classificados","Sistemas"]}
    />
  ),
});
