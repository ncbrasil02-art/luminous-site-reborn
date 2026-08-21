import { createFileRoute } from "@tanstack/react-router";
import { Search, TrendingUp, Link2, FileText, Gauge, Target, LineChart, Award, Globe2, Zap, ShieldCheck, Sparkles } from "lucide-react";
import { LandingPage, buildLPMeta } from "@/components/LandingPage";

const URL = "https://www.ncbrasil.com.br/solucoes-web/seo-google";

const lpFaq = [
        { q: "Em quanto tempo vejo resultado?", a: "Primeiros ganhos em **60-90 dias**; resultados consistentes a partir de 6 meses." },
        { q: "Vocês garantem primeira página?", a: "Ninguém pode garantir posições — mas nosso **histórico mostra 90% dos projetos no Top 10** em 12 meses." },
        { q: "Fazem SEO local?", a: "Sim, especialidade em **Google Business Profile, SEO por bairro e Google Maps**." },
        { q: "Trabalham com que ferramentas?", a: "**Ahrefs, SEMrush, Screaming Frog, Search Console, GA4, Sitebulb** e mais." },
        { q: "Preciso de conteúdo?", a: "Sim, **conteúdo é o combustível do SEO** — produzimos com redatores especializados." },
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
      h1={<>SEO Google: <span className="text-gradient">Ranqueamento e Autoridade de Palavras-Chave</span></>}
      intro={<>Atuamos com o **rankeamento e autoridade de palavras-chaves** de curta e longa cauda, maximizando os resultados orgânicos nos principais buscadores como o Google para elevar qualquer empresa ao topo.</>}
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
