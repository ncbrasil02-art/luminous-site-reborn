import { newsData } from "@/lib/news.data";

/**
 * Mapeamento completo de URLs antigas (site legado ncbrasil.com.br)
 * para as novas rotas da plataforma. Usado para responder 301/308
 * em vez de jogar todo mundo para a home.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // --- Sistemas (antigas URLs planas / aninhadas) ---
  "/sistemas/sistema-de-leilao": "/sistema-de-leilao",
  "/sistemas/sistema-de-rifas": "/sistema-de-rifas",
  "/sistemas/sistema-de-leilao-rural": "/sistema-de-leilao-rural",
  "/sistemas/sistema-de-leilao-de-centavos": "/sistema-de-leilao-de-centavos",
  "/sistemas/sistema-de-raspadinha": "/sistema-de-raspadinha",
  "/sistemas/classificados-de-veiculos": "/classificados-de-veiculos",
  "/sistemas/sistema-de-revenda-de-veiculos": "/sistema-de-revenda-de-veiculos",
  "/sistemas/plataforma-chinesa-apostas-cassino": "/plataforma-chinesa-apostas-cassino",
  "/sistemas/sistema-de-cupom-descontos": "/sistema-de-cupom-descontos",
  "/sistemas/sistema-de-ofertas-cupom-marketplace": "/sistema-de-ofertas-cupom-marketplace",
  "/sistemas/programa-de-ordem-de-servico": "/programa-de-ordem-de-servico",
  "/sistemas/sistema-sob-demanda-nc-brasil": "/sistema-sob-demanda-nc-brasil",
  "/script-de-rifas": "/sistema-de-rifas",
  "/script-de-leilao": "/sistema-de-leilao",
  "/sistema-de-leiloes": "/sistema-de-leilao",
  "/sistema-leilao": "/sistema-de-leilao",
  "/leilao-rural": "/sistema-de-leilao-rural",
  "/leilao-de-centavos": "/sistema-de-leilao-de-centavos",
  "/sistema-de-cassino": "/plataforma-chinesa-apostas-cassino",
  "/cassino-online": "/plataforma-chinesa-apostas-cassino",
  "/sistema-de-classificados": "/classificados-de-veiculos",
  "/classificados-de-veiculos-php": "/classificados-de-veiculos",
  "/sistema-de-revenda-de-autos": "/sistema-de-revenda-de-veiculos",
  "/sistemas-web": "/solucoes-web/sistemas-web",
  "/sistemas": "/nossos-sistemas",

  // --- Serviços / soluções web ---
  "/criar-sites": "/solucoes-web/desenvolvimento-de-sites",
  "/criacao-de-sites": "/solucoes-web/desenvolvimento-de-sites",
  "/criar-sites/criacao-de-sites": "/solucoes-web/desenvolvimento-de-sites",
  "/criar-sites/criacao-de-aplicativos": "/servicos/aplicativos",
  "/criacao-de-aplicativos": "/servicos/aplicativos",
  "/aplicativos": "/servicos/aplicativos",
  "/criar-sites/loja-virtual": "/solucoes-web/loja-virtual",
  "/loja-virtual": "/solucoes-web/loja-virtual",
  "/lojas-virtuais": "/solucoes-web/loja-virtual",
  "/e-commerce": "/solucoes-web/loja-virtual",
  "/hospedagem-de-sites": "/solucoes-web/hospedagem",
  "/hospedagem": "/solucoes-web/hospedagem",
  "/marketing-digital": "/solucoes-web/marketing-digital",
  "/seo": "/solucoes-web/seo-google",
  "/seo-google": "/solucoes-web/seo-google",
  "/otimizacao-de-sites": "/solucoes-web/seo-google",
  "/landing-page": "/solucoes-web/landing-pages",
  "/landing-pages": "/solucoes-web/landing-pages",
  "/google-adwords": "/servicos/google-ads",
  "/google-ads": "/servicos/google-ads",
  "/facebook-ads": "/servicos/facebook-ads",
  "/redes-sociais": "/servicos/facebook-ads",
  "/identidade-visual": "/servicos/identidade-visual",
  "/criacao-de-logomarcas": "/portfolio/criacao-de-logomarcas",
  "/logotipos": "/portfolio/logotipos-criados",
  "/consultoria": "/servicos/consultoria",
  "/desenvolvimento": "/servicos/desenvolvimento",
  "/servicos": "/nossos-servicos",
  "/solucoes": "/solucoes-web",

  // --- Institucional ---
  "/quem-somos": "/empresa/quem-somos",
  "/nossa-historia": "/empresa/nossa-historia",
  "/clientes": "/empresa/clientes",
  "/empresa/sobre": "/empresa/quem-somos",
  "/sobre": "/empresa/quem-somos",
  "/fale-conosco": "/contato",
  "/contato-nc-brasil": "/contato",
  "/solicite-um-orcamento": "/orcamento",
  "/orcamentos": "/orcamento",
  "/portfolio": "/trabalhos-realizados",
  "/trabalhos": "/trabalhos-realizados",

  // --- Blog / notícias ---
  "/blog": "/noticias",
  "/noticia": "/noticias",
  "/artigos": "/noticias",
  "/categoria": "/noticias",
  "/tag": "/noticias",
};

const FLAT_ROUTES = new Set([
  "sistema-de-leilao",
  "sistema-de-rifas",
  "sistema-de-leilao-rural",
  "sistema-de-leilao-de-centavos",
  "sistema-de-raspadinha",
  "sistema-de-revenda-de-veiculos",
  "sistema-de-cupom-descontos",
  "sistema-de-ofertas-cupom-marketplace",
  "sistema-sob-demanda-nc-brasil",
  "plataforma-chinesa-apostas-cassino",
  "programa-de-ordem-de-servico",
  "classificados-de-veiculos",
  "nossos-sistemas",
  "nossos-servicos",
  "trabalhos-realizados",
  "solucoes-web",
  "software",
  "orcamento",
  "contato",
  "empresa",
  "noticias",
  "instagram-para-empresas",
  "dicas-para-e-commerce",
  "erros-na-criacao-de-um-aplicativo",
]);

/** Normaliza: minúsculas, sem barra final, sem .html/.php, sem query. */
export function normalizePath(pathname: string): string {
  let p = pathname.split("?")[0].split("#")[0].toLowerCase();
  p = p.replace(/\.(html?|php|aspx?)$/i, "");
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p || "/";
}

/**
 * Resolve o destino de uma URL legada.
 * Retorna null quando não há equivalência confiável (aí exibimos o 404 real).
 */
export function resolveLegacyPath(pathname: string): string | null {
  const path = normalizePath(pathname);
  if (path === "/") return null;

  // 1. Mapa explícito
  if (LEGACY_REDIRECTS[path]) return LEGACY_REDIRECTS[path];

  const parts = path.split("/").filter(Boolean);
  const slug = parts[parts.length - 1];
  const first = parts[0];

  // 2. Post de notícia em qualquer estrutura antiga (/blog/2019/05/slug, /noticia/slug…)
  const post = newsData.find((p) => p.slug === slug);
  if (post) return `/noticias/${post.slug}`;

  // 3. Categorias e tags legadas
  if (["categoria", "category", "cat"].includes(first) && parts[1]) {
    return `/noticias/categoria/${parts[1]}`;
  }
  if (["tag", "tags"].includes(first) && parts[1]) {
    return `/noticias/tag/${parts[1]}`;
  }
  const categorySlug = (c: string) =>
    c
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
  if (newsData.some((p) => p.categories.some((c) => categorySlug(c) === first))) {
    return `/noticias/categoria/${first}`;
  }

  // 4. Último segmento é uma rota plana conhecida (URLs antigas aninhadas)
  if (parts.length > 1 && FLAT_ROUTES.has(slug)) return `/${slug}`;

  // 5. Mapa explícito aplicado ao último segmento (ex: /criar-sites/loja-virtual)
  if (parts.length > 1 && LEGACY_REDIRECTS[`/${slug}`]) return LEGACY_REDIRECTS[`/${slug}`];

  // 6. Path normalizado difere do original (barra final, maiúsculas, .html)
  if (path !== pathname.split("?")[0]) {
    if (FLAT_ROUTES.has(path.replace(/^\//, ""))) return path;
  }

  return null;
}
