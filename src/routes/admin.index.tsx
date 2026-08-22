import { createFileRoute } from '@tanstack/react-router'
import { newsData } from '@/lib/news.data'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard
})

function AdminDashboard() {
  const totalNews = newsData.length;
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Administrativo</h1>
      
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <div className="p-6 rounded-none bg-card border border-border">
          <div className="text-sm text-muted-foreground font-medium mb-1">Total de Notícias</div>
          <div className="text-3xl font-bold">{totalNews}</div>
        </div>
        <div className="p-6 rounded-none bg-card border border-border">
          <div className="text-sm text-muted-foreground font-medium mb-1">Publicadas</div>
          <div className="text-3xl font-bold text-primary">{totalNews}</div>
        </div>
        <div className="p-6 rounded-none bg-card border border-border">
          <div className="text-sm text-muted-foreground font-medium mb-1">Rascunhos</div>
          <div className="text-3xl font-bold text-amber-500">0</div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="p-8 rounded-none border border-border bg-card/50">
          <h2 className="text-xl font-bold mb-4">Ações Rápidas</h2>
          <div className="grid grid-cols-2 gap-4">
             <button className="p-4 rounded-none bg-surface border border-border hover:border-primary/50 transition-colors text-left">
                <div className="font-bold text-primary mb-1">Nova Notícia</div>
                <div className="text-xs text-muted-foreground">Cadastre um novo conteúdo agora.</div>
             </button>
             <button className="p-4 rounded-none bg-surface border border-border hover:border-primary/50 transition-colors text-left">
                <div className="font-bold text-primary mb-1">Ver Site</div>
                <div className="text-xs text-muted-foreground">Abra a home para conferir.</div>
             </button>
          </div>
        </div>

        <div className="p-8 rounded-none border border-border bg-card/50">
          <h2 className="text-xl font-bold mb-4">SEO e Indexação</h2>
          <div className="space-y-4">
             <div className="flex items-center justify-between p-3 rounded-none bg-surface">
                <div className="text-sm font-medium">Sitemap XML</div>
                <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">Ativo</code>
             </div>
             <div className="flex items-center justify-between p-3 rounded-none bg-surface">
                <div className="text-sm font-medium">RSS Feed</div>
                <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">Ativo</code>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
