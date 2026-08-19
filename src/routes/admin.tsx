import { createFileRoute, redirect } from '@tanstack/react-router'
import { LayoutDashboard, Newspaper, Settings, LogOut, PlusCircle, Search, Edit, Trash2, CheckCircle, Clock } from 'lucide-react'
import { useState } from 'react'
import { useServerFn } from '@tanstack/react-start'
import { getAdminNews } from '@/lib/news.actions'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  loader: async () => {
    // In a real app, check auth here
    return {}
  },
  component: AdminDashboard
})

function AdminDashboard() {
  const fetchNews = useServerFn(getAdminNews)
  const [searchTerm, setSearchTerm] = useState('')
  
  // Using a query to fetch the news (simulated)
  const { data: news = [], isLoading } = { data: [], isLoading: false } // Placeholder for real TanStack Query integration

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card/50 flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">NC</div>
            Admin Panel
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-surface transition-colors">
            <Newspaper className="h-5 w-5" />
            Notícias
          </Link>
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-surface transition-colors">
            <Settings className="h-5 w-5" />
            Configurações
          </Link>
        </nav>

        <div className="p-4 border-t border-border">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="h-5 w-5" />
            Sair
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 border-b border-border px-8 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-10">
          <h1 className="text-2xl font-bold">Gerenciamento de Notícias</h1>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Pesquisar notícias..." 
                  className="pl-10 pr-4 py-2 rounded-lg bg-surface border border-border focus:ring-2 focus:ring-primary/50 outline-none w-64 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
             <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
                <PlusCircle className="h-4 w-4" />
                Nova Notícia
             </button>
          </div>
        </header>

        <div className="p-8">
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-sm text-muted-foreground font-medium mb-1">Total de Notícias</div>
              <div className="text-3xl font-bold">132</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-sm text-muted-foreground font-medium mb-1">Publicadas</div>
              <div className="text-3xl font-bold text-primary">128</div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-sm text-muted-foreground font-medium mb-1">Rascunhos</div>
              <div className="text-3xl font-bold text-amber-500">4</div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card overflow-hidden">
             <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface/50 border-b border-border">
                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Título</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Data</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i} className="hover:bg-surface/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold line-clamp-1">Título de Exemplo para a Notícia {i}</div>
                        <div className="text-xs text-muted-foreground">tecnologia, inovacao</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        19/08/2026
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-500/10 text-green-500">
                          <CheckCircle className="h-3 w-3" />
                          Publicado
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                           <button className="p-2 rounded-lg hover:bg-surface text-muted-foreground transition-colors">
                             <Edit className="h-4 w-4" />
                           </button>
                           <button className="p-2 rounded-lg hover:bg-destructive/10 text-destructive transition-colors">
                             <Trash2 className="h-4 w-4" />
                           </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
             </table>
             <div className="p-4 border-t border-border flex justify-center">
                <button className="text-sm font-medium text-primary hover:underline">Ver todas as notícias</button>
             </div>
          </div>
        </div>
      </main>
    </div>
  )
}
