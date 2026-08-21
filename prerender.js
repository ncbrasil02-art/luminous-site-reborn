import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')
const { newsData } = await import('./src/lib/news.data.ts')

// Extract unique categories and tags
const allCategories = Array.from(new Set(newsData.flatMap(p => p.categories)))
const allTags = Array.from(new Set(newsData.flatMap(p => p.tags)))

// List of routes to pre-render. 
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
  ...newsData.map(post => `/noticias/${post.slug}`),
  ...allCategories.map(cat => `/noticias/categoria/${encodeURIComponent(cat)}`),
  ...allTags.map(tag => `/noticias/tag/${encodeURIComponent(tag)}`),
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    
    // Create subdirectories if they don't exist
    const dir = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
