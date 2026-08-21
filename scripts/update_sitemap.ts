import { newsData } from "../src/lib/news.data";
import fs from "fs";
import path from "path";

const SITE_URL = "https://www.ncbrasil.com.br";

const staticRoutes = [
  { url: "/", priority: "1.0", changefreq: "daily" },
  { url: "/sistema-de-leilao", priority: "0.9", changefreq: "weekly" },
  { url: "/sistema-de-leilao-rural", priority: "0.9", changefreq: "weekly" },
  { url: "/sistema-de-leilao-de-centavos", priority: "0.9", changefreq: "weekly" },
  { url: "/sistema-de-rifas", priority: "0.9", changefreq: "weekly" },
  { url: "/classificados-de-veiculos", priority: "0.9", changefreq: "weekly" },
  { url: "/sistema-de-revenda-de-veiculos", priority: "0.9", changefreq: "weekly" },
  { url: "/sistema-sob-demanda-nc-brasil", priority: "0.9", changefreq: "weekly" },
  { url: "/sistema-de-cupom-descontos", priority: "0.9", changefreq: "weekly" },
  { url: "/sistema-de-raspadinha", priority: "0.9", changefreq: "weekly" },
  { url: "/programa-de-ordem-de-servico", priority: "0.9", changefreq: "weekly" },
  { url: "/nossos-servicos", priority: "0.8", changefreq: "weekly" },
  { url: "/trabalhos-realizados", priority: "0.8", changefreq: "weekly" },
  { url: "/empresa/quem-somos", priority: "0.8", changefreq: "weekly" },
  { url: "/contato", priority: "0.8", changefreq: "weekly" },
  { url: "/orcamento", priority: "0.8", changefreq: "weekly" },
  { url: "/noticias", priority: "0.7", changefreq: "daily" },
];

function generateSitemap() {
  const now = new Date().toISOString();
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Static Routes
  staticRoutes.forEach((route) => {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${route.url}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // News Routes
  newsData.forEach((post) => {
    if (post.slug) {
      xml += `  <url>\n`;
      xml += `    <loc>${SITE_URL}/noticias/${post.slug}</loc>\n`;
      xml += `    <lastmod>${now}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.5</priority>\n`;
      xml += `  </url>\n`;
    }
  });

  xml += "</urlset>";

  fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml);
  console.log("Sitemap updated successfully!");
}

generateSitemap();
