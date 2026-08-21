import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function generate() {
  const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
  
  const { render } = await import('./dist/server/entry-server.js')
  const { newsData } = await import('./src/lib/news.data.ts')

  const allCategories = Array.from(new Set(newsData.flatMap(p => p.categories)))
  const allTags = Array.from(new Set(newsData.flatMap(p => p.tags)))

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
    try {
      console.log('Rendering:', url)
      const result = await render(url)
      
      const appHtml = result.html
      const head = result.head

      console.log(`URL: ${url}, head length: ${head?.length || 0}, html length: ${appHtml?.length || 0}`)

      const finalHtml = template
        .replace('<!--app-head-->', head || '')
        .replace('<!--app-html-->', appHtml || '')

      const filePath = `dist${url === '/' ? '/index' : url}.html`
      const absolutePath = toAbsolute(filePath)
      const dir = path.dirname(absolutePath)
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }
      fs.writeFileSync(absolutePath, finalHtml)
      console.log('pre-rendered:', filePath)
    } catch (err) {
      console.error(`Error rendering ${url}:`, err)
    }
  }
}

generate().catch(err => {
  console.error(err)
  process.exit(1)
})
