import { createFileRoute } from '@tanstack/react-router'
import { PlusCircle, Search, Edit, Trash2, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/admin/noticias')({
  component: AdminNewsList
})

function AdminNewsList() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="flex flex-col h-full">
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
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <tr key={i} className="hover:bg-surface/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-semibold line-clamp-1">Notícia Migrada ou Cadastrada #{i}</div>
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
        </div>
      </div>
    </div>
  )
}
