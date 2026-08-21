import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function generate() {
  const template = fs.readFileSync(toAbsolute('index.html'), 'utf-8')
  
  // Import the SSR entry point
  const { render } = await import('./dist/server/entry-server.js')
  
  const routesToPrerender = [
    '/',
    '/sistema-de-leilao',
    '/sistema-de-rifas',
  ]

  console.log(`Starting debug pre-rendering of ${routesToPrerender.length} routes...`)

  for (const url of routesToPrerender) {
    try {
      console.log('Rendering:', url)
      const result = await render(url)
      
      const appHtml = result.html
      const head = result.head

      console.log(`URL: ${url} | Head length: ${head?.length || 0} | HTML length: ${appHtml?.length || 0}`)
      if (head) {
        console.log(`Head content snippet: ${head.substring(0, 100)}...`)
      }
    } catch (err) {
      console.error(`Error rendering ${url}:`, err)
    }
  }
}

generate()