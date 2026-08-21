import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function generate() {
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
  
  // Import the SSR entry point
  const { render } = await import('./dist/server/entry-server.js')
  
  // Import news data for dynamic routes
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
      
      const appHtml = result.html
      const head = result.head

      if (!appHtml || appHtml.length < 500) {
         console.warn(`Warning: Small HTML for ${url}. Length: ${appHtml?.length || 0}`);
      }

      // Final HTML reconstruction
      const finalHtml = template
        .replace('<!--app-head-->', head || '')
        .replace('<!--app-html-->', appHtml || '')

      // Clean the URL to get a valid file path
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
