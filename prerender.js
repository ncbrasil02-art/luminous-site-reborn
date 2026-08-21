import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function generate() {
  const templatePath = toAbsolute('dist/index.html')
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run build:client first.')
    process.exit(1)
  }
  const template = fs.readFileSync(templatePath, 'utf-8')
  
  const { render } = await import('./dist/server/entry-server.js')
  const { newsData } = await import('./src/lib/news.data.ts')

  const allCategories = Array.from(new Set(newsData.flatMap(p => p.categories))).filter(Boolean)
  const allTags = Array.from(new Set(newsData.flatMap(p => p.tags))).filter(Boolean)

  const routesToPrerender = [
    '/',
    '/contato',
    '/orcamento',
    '/nossos-servicos',
    '/nossos-sistemas',
    '/trabalhos-realizados',
    '/empresa/quem-somos',
    '/sistema-de-leilao',
    '/sistema-de-rifas',
    '/classificados-de-veiculos',
    '/sistema-de-leilao-rural',
    '/sistema-de-leilao-de-centavos',
    '/noticias',
    ...newsData.filter(p => p.slug).map(post => `/noticias/${post.slug}`),
    ...allCategories.map(cat => `/noticias/categoria/${encodeURIComponent(cat)}`),
    ...allTags.map(tag => `/noticias/tag/${encodeURIComponent(tag)}`),
  ]

  console.log(`Starting pre-rendering of ${routesToPrerender.length} routes...`)

  for (const url of routesToPrerender) {
    try {
      console.log('Rendering:', url)
      const result = await render(url)
      
      let appHtml = result.html
      const head = result.head

      // TanStack HeadContent often renders tags inside the body during SSR.
      // We need to move them to the head if they exist in appHtml.
      
      // Extract title from appHtml if present
      let extractedHeadTags = '';
      const titleMatch = appHtml.match(/<title>.*?<\/title>/gi);
      if (titleMatch) {
        extractedHeadTags += titleMatch.join('\n');
        appHtml = appHtml.replace(/<title>.*?<\/title>/gi, '');
      }

      // Extract meta tags from appHtml
      const metaMatch = appHtml.match(/<meta.*?\/>/gi) || appHtml.match(/<meta.*?>/gi);
      if (metaMatch) {
        const uniqueMetas = metaMatch.filter(m => 
          m.includes('name="description"') || 
          m.includes('name="keywords"') || 
          m.includes('property="og:') || 
          m.includes('name="twitter:') ||
          m.includes('name="robots"')
        );
        extractedHeadTags += uniqueMetas.join('\n');
        // We don't remove all metas from appHtml as some might be legitimate, 
        // but we'll try to remove the common ones to clean up the body.
        uniqueMetas.forEach(m => {
          appHtml = appHtml.replace(m, '');
        });
      }

      // Extract links (canonical, etc.)
      const linkMatch = appHtml.match(/<link.*?\/>/gi) || appHtml.match(/<link.*?>/gi);
      if (linkMatch) {
        const uniqueLinks = linkMatch.filter(l => 
          l.includes('rel="canonical"') || 
          l.includes('rel="alternate"') ||
          l.includes('rel="icon"')
        );
        extractedHeadTags += uniqueLinks.join('\n');
        uniqueLinks.forEach(l => {
          appHtml = appHtml.replace(l, '');
        });
      }

      // Combine head from entry-server and extracted tags
      const combinedHead = (head + extractedHeadTags).trim();

      // Clean template from existing SEO tags to avoid duplicates
      let finalHtml = template.replace(/<title>.*?<\/title>/gi, '')
                              .replace(/<meta name="description" content=".*?" \/>/gi, '')
                              .replace(/<meta name="description" content=".*?"\/>/gi, '');

      if (finalHtml.includes('<!--app-head-->')) {
        finalHtml = finalHtml.replace('<!--app-head-->', combinedHead)
      } else {
        finalHtml = finalHtml.replace('</head>', `${combinedHead}\n</head>`)
      }

      if (finalHtml.includes('<!--app-html-->')) {
        finalHtml = finalHtml.replace('<!--app-html-->', appHtml)
      } else {
        finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      }

      const cleanUrl = url === '/' ? '/index' : url.replace(/\/$/, "");
      const filePath = `dist${cleanUrl}.html`
      const absolutePath = toAbsolute(filePath)
      const dir = path.dirname(absolutePath)
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      fs.writeFileSync(absolutePath, finalHtml)
    } catch (err) {
      console.error(`Error rendering ${url}:`, err)
    }
  }
  
  console.log('Pre-rendering complete.')
}

generate()
