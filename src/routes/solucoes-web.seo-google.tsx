import { createFileRoute } from "@tanstack/react-router";
import { Search, TrendingUp, Link2, FileText, Gauge, Target, LineChart, Award, Globe2, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/seo-google";

const lpFaq = [
  { q: "Em quanto tempo meu site aparece no topo do Google?", a: "O SEO é um processo gradual; ganhos iniciais surgem em **30 a 90 dias**, com consolidação da autoridade em 6 a 12 meses." },
  { q: "Vocês garantem a primeira posição?", a: "Nenhuma agência séria garante o 1º lugar, mas garantimos a aplicação das **melhores práticas e otimização técnica** para levar seu site ao topo." },
  { q: "O que é SEO de cauda longa?", a: "São frases mais específicas que trazem um **público muito mais qualificado** e propenso a converter do que termos genéricos." },
  { q: "Como vocês medem o sucesso do SEO?", a: "Através do aumento de **tráfego orgânico, impressões no Search Console e conversões diretas** vindas da busca." },
  { q: "SEO e Google Ads são a mesma coisa?", a: "Não. O SEO foca em resultados **orgânicos (gratuitos)** a longo prazo, enquanto o Ads é tráfego pago imediato." },
];

export const Route = createFileRoute("/solucoes-web/seo-google")({
  head: () => buildLPMeta({
    title: "SEO Google | Ranqueamento e Autoridade de Palavras-Chave",
    description: "Especialistas em SEO onde atuamos rankeando qualquer empresa em palavras-chaves de curta e longa cauda, maximizando os resultados orgânicos nos principais buscadores.",
    keywords: "seo google, rankeamento google, palavras-chave curta cauda, palavras-chave longa cauda, otimização buscadores, autoridade digital, seo google local",
    canonical: URL,
    h1: "SEO Google: Ranqueamento e Autoridade Digital",
    breadcrumbs: [
      { label: "Home", to: "https://www.ncbrasil.com.br/" },
      { label: "Soluções Web", to: "https://www.ncbrasil.com.br/solucoes-web" },
      { label: "SEO Google", to: URL },
    ],
    faq: lpFaq,
  }),
  component: () => (
    <LandingPage
      breadcrumbs={[{ to: "/", label: "Home" }, { to: "/solucoes-web", label: "Soluções Web" }, { to: "/solucoes-web/seo-google", label: "SEO Google" }]}
      eyebrow="SEO Profissional"
      h1={<>Domine o Google e <span className="text-gradient">Escale suas Vendas Orgânicas</span></>}
      intro={<>Eleve sua empresa ao topo com nossa metodologia de **SEO de alta performance**. Atuamos no rankeamento estratégico de palavras-chave de curta e longa cauda para garantir que seu site seja a primeira opção do seu cliente.</>}
      stats={[{ value: "+340%", label: "Tráfego orgânico" }, { value: "Top 3", label: "Rankings alcançados" }, { value: "500+", label: "Palavras-chave" }, { value: "12 meses", label: "Resultado consistente" }]}
      benefits={[
        { icon: Search, title: "Keyword Research", desc: "Mapeamento com **Ahrefs, SEMrush e Google Search Console** — foco em intenção de busca." },
        { icon: Gauge, title: "SEO Técnico", desc: "Core Web Vitals, schema.org, sitemap, robots.txt e **crawl budget otimizado**." },
        { icon: FileText, title: "Conteúdo Estratégico", desc: "Clusters temáticos, pillar pages e artigos com **EEAT e autoridade tópica**." },
        { icon: Link2, title: "Link Building", desc: "Backlinks de qualidade em portais relevantes — **estratégia 100% white-hat**." },
      ]}
      features={[
        { icon: TrendingUp, title: "Auditoria Completa", desc: "Análise de 200+ pontos técnicos, on-page e off-page com plano de ação priorizado." },
        { icon: Target, title: "SEO Local", desc: "Google Business Profile, NAP, avaliações e **ranqueamento por bairro/cidade**." },
        { icon: Globe2, title: "SEO Internacional", desc: "Hreflang, geotargeting e estratégia para **múltiplos países e idiomas**." },
        { icon: LineChart, title: "Relatórios Mensais", desc: "Rankings, tráfego, conversões e evolução de autoridade em dashboards." },
        { icon: Award, title: "E-E-A-T", desc: "Estratégias para provar **Experience, Expertise, Authority e Trust** ao Google." },
        { icon: Sparkles, title: "SEO para IA", desc: "Otimização para **SGE, Perplexity e resultados de IA generativa**." },
      ]}
      faq={lpFaq}
      relatedNewsTags={["SEO","Google","Marketing Digital"]}
    />
  ),
});
