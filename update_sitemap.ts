import fs from 'fs';
import path from 'path';
import { newsData } from './src/lib/news.data.ts';

const DOMAIN = 'https://www.ncbrasil.com.br';
const DATE = new Date().toISOString();

// Routes already in sitemap.xml (manually managed for priority)
const staticRoutes = [
  '/',
  '/sistema-de-leilao',
  '/sistema-de-leilao-rural',
  '/sistema-de-leilao-de-centavos',
  '/sistema-de-rifas',
  '/classificados-de-veiculos',
  '/sistema-de-revenda-de-veiculos',
  '/plataforma-chinesa-apostas-cassino',
  '/sistema-de-raspadinha',
  '/sistema-de-cupom-descontos',
  '/sistema-de-ofertas-cupom-marketplace',
  '/sistema-sob-demanda-nc-brasil',
  '/programa-de-ordem-de-servico',
  '/software',
  '/nossos-servicos',
  '/solucoes-web/desenvolvimento-de-sites',
  '/solucoes-web/loja-virtual',
  '/solucoes-web/landing-pages',
  '/solucoes-web/marketing-digital',
  '/solucoes-web/seo-google',
  '/servicos/aplicativos',
  '/empresa/quem-somos',
  '/trabalhos-realizados',
  '/contato',
  '/orcamento',
  '/noticias'
];

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add Static Routes
  staticRoutes.forEach(route => {
    let priority = '0.8';
    let freq = 'weekly';
    
    if (route === '/') { priority = '1.0'; freq = 'daily'; }
    if (route.includes('sistema-')) { priority = '0.9'; }
    if (route === '/noticias') { priority = '0.7'; freq = 'daily'; }
    
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${route}</loc>\n`;
    xml += `    <lastmod>${DATE}</lastmod>\n`;
    xml += `    <changefreq>${freq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Add News Posts
  newsData.forEach(post => {
    if (!post.slug) return;
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}/noticias/${post.slug}</loc>\n`;
    xml += `    <lastmod>${DATE}</lastmod>\n`;
    xml += '    <changefreq>monthly</changefreq>\n';
    xml += '    <priority>0.5</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  
  fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), xml);
  console.log('Sitemap updated with news posts!');
}

generateSitemap();
