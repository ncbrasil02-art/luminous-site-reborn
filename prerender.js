import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function generate() {
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
  
  // We need to import the built entry-server which is CommonJS or ESM depending on build
  // Since we are in "type": "module", and vite build --ssr generates ESM usually.
  const { render } = await import('./dist/server/entry-server.js')
  const { newsData } = await import('./src/lib/news.data.ts')

  // Extract unique categories and tags
  const allCategories = Array.from(new Set(newsData.flatMap(p => p.categories)))
  const allTags = Array.from(new Set(newsData.flatMap(p => p.tags)))

  // List of routes to pre-render
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

  console.log(`Starting pre-rendering of ${routesToPrerender.length} routes...`)

  for (const url of routesToPrerender) {
    console.log('Rendering:', url)
    const { html: appHtml, head } = render(url)

    const html = template
      .replace('<!--app-html-->', appHtml || '')
      .replace('<!--app-head-->', head || '')

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const dir = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
}

generate().catch(err => {
  console.error(err)
  process.exit(1)
})
