import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.ncbrasil.com.br';
const DATE = new Date().toISOString();

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/contato', priority: '0.8', changefreq: 'monthly' },
  { path: '/empresa', priority: '0.7', changefreq: 'monthly' },
  { path: '/empresa/clientes', priority: '0.7', changefreq: 'monthly' },
  { path: '/empresa/nossa-historia', priority: '0.7', changefreq: 'monthly' },
  { path: '/empresa/quem-somos', priority: '0.7', changefreq: 'monthly' },
  { path: '/nossos-servicos', priority: '0.8', changefreq: 'weekly' },
  { path: '/nossos-sistemas', priority: '0.8', changefreq: 'weekly' },
  { path: '/orcamento', priority: '0.8', changefreq: 'monthly' },
  { path: '/software', priority: '0.8', changefreq: 'monthly' },
  { path: '/trabalhos-realizados', priority: '0.7', changefreq: 'weekly' },
  { path: '/noticias', priority: '0.8', changefreq: 'daily' },
];

const systems = [
  '/sistema-de-leilao',
  '/sistema-de-leilao-rural',
  '/sistema-de-leilao-de-centavos',
  '/sistema-de-rifas',
  '/classificados-de-veiculos',
  '/sistema-de-revenda-de-veiculos',
  '/sistema-sob-demanda-nc-brasil',
  '/sistema-de-cupom-descontos',
  '/sistema-de-raspadinha',
  '/programa-de-ordem-de-servico',
  '/plataforma-chinesa-apostas-cassino',
  '/sistema-de-ofertas-cupom-marketplace',
  '/dicas-para-e-commerce',
  '/erros-na-criacao-de-um-aplicativo',
  '/instagram-para-empresas'
];

const services = [
  '/servicos/aplicativos',
  '/servicos/consultoria',
  '/servicos/desenvolvimento',
  '/servicos/facebook-ads',
  '/servicos/google-ads',
  '/servicos/identidade-visual',
  '/servicos/sistemas-web',
  '/solucoes-web/desenvolvimento-de-sites',
  '/solucoes-web/hospedagem',
  '/solucoes-web/landing-pages',
  '/solucoes-web/loja-virtual',
  '/solucoes-web/marketing-digital',
  '/solucoes-web/seo-google'
];

const portfolio = [
  '/portfolio/aplicativos-criados',
  '/portfolio/criacao-de-aplicativos',
  '/portfolio/criacao-de-logomarcas',
  '/portfolio/criacao-de-sistemas',
  '/portfolio/identidade-visual',
  '/portfolio/logotipos-criados',
  '/portfolio/lojas-virtuais-criadas',
  '/portfolio/sistema-de-compra-coletiva',
  '/portfolio/sistemas-criados',
  '/portfolio/sites-criados'
];

// Extract news slugs from src/lib/news.data.ts
const newsDataContent = fs.readFileSync('src/lib/news.data.ts', 'utf-8');
const slugMatches = newsDataContent.matchAll(/"slug":\s*"([^"]+)"/g);
const newsSlugs = Array.from(slugMatches).map(m => m[1]);

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

function addUrl(loc, priority, changefreq) {
  xml += '  <url>\n';
  xml += `    <loc>${BASE_URL}${loc}</loc>\n`;
  xml += `    <lastmod>${DATE}</lastmod>\n`;
  xml += `    <changefreq>${changefreq}</changefreq>\n`;
  xml += `    <priority>${priority}</priority>\n`;
  xml += '  </url>\n';
}

staticRoutes.forEach(r => addUrl(r.path, r.priority, r.changefreq));
systems.forEach(s => addUrl(s, '0.9', 'weekly'));
services.forEach(s => addUrl(s, '0.8', 'weekly'));
portfolio.forEach(p => addUrl(p, '0.7', 'weekly'));
newsSlugs.forEach(slug => addUrl(`/noticias/${slug}`, '0.6', 'monthly'));

xml += '</urlset>';

fs.writeFileSync('public/sitemap.xml', xml);
console.log('Sitemap generated with ' + (staticRoutes.length + systems.length + services.length + portfolio.length + newsSlugs.length) + ' URLs.');
