import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function generate() {
  // Use dist/index.html as the base template
  const templatePath = toAbsolute('dist/index.html')
  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Run build:client first.')
    process.exit(1)
  }
  const template = fs.readFileSync(templatePath, 'utf-8')
  
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

      // Final HTML reconstruction
      // We look for <!--app-head--> and <!--app-html-->
      // If they were stripped by Vite's minifier, we fallback to replacing the standard tags
      let finalHtml = template;

      if (finalHtml.includes('<!--app-head-->')) {
        finalHtml = finalHtml.replace('<!--app-head-->', head || '')
      } else {
        // Fallback: inject into <head>
        finalHtml = finalHtml.replace('</head>', `${head || ''}</head>`)
      }

      if (finalHtml.includes('<!--app-html-->')) {
        finalHtml = finalHtml.replace('<!--app-html-->', appHtml || '')
      } else {
        // Fallback: inject into <div id="root">
        finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${appHtml || ''}</div>`)
      }

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
