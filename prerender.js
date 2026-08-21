import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// List of routes to pre-render. 
// For TanStack Router, we can crawl src/routes or define them manually.
const routesToPrerender = [
  '/',
  '/contato',
  '/orcamento',
  '/nossos-servicos',
  '/nossos-sistemas',
  '/empresa/quem-somos',
  '/sistema-de-leilao',
  '/sistema-de-rifas',
  '/classificados-de-veiculos',
  '/sistema-de-leilao-rural',
  '/sistema-de-leilao-de-centavos',
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
