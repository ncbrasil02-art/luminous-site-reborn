import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { ArrowLeft, Save, Image as ImageIcon, Globe, FileText } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export const Route = createFileRoute('/admin/noticias/nova')({
  component: NewsEditor
})

function NewsEditor() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    categories: '',
    tags: '',
    image_to: '',
    status: 'published'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Notícia salva com sucesso! (Simulado)')
    router.navigate({ to: '/admin/noticias' })
  }

  return (
    <div className="flex flex-col h-full bg-mesh">
      <header className="h-20 border-b border-border px-8 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
          <Link to="/admin/noticias" className="p-2 rounded-lg hover:bg-surface text-muted-foreground">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">Nova Notícia</h1>
        </div>
        <div className="flex items-center gap-3">
           <button 
             onClick={handleSubmit}
             className="bg-primary text-primary-foreground px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity glow-sm"
           >
              <Save className="h-4 w-4" />
              Publicar Agora
           </button>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="p-8 max-w-5xl mx-auto w-full grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 rounded-[2rem] border border-border bg-card/50 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Título da Notícia</label>
              <input 
                type="text" 
                required
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-lg font-bold focus:ring-2 focus:ring-primary/50 outline-none"
                placeholder="Ex: Novo sistema de leilão rural lançado..."
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Conteúdo (HTML/Texto)</label>
              <textarea 
                required
                className="w-full bg-surface border border-border rounded-xl px-4 py-3 min-h-[400px] focus:ring-2 focus:ring-primary/50 outline-none font-mono text-sm"
                placeholder="Insira o conteúdo da notícia aqui..."
                value={formData.content}
                onChange={e => setFormData({...formData, content: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-[2rem] border border-border bg-card/50 space-y-4">
            <h3 className="flex items-center gap-2 font-bold mb-2">
              <Globe className="h-4 w-4 text-primary" />
              Configurações SEO
            </h3>
            
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-muted-foreground">URL Amigável (Slug)</label>
              <input 
                type="text" 
                className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm outline-none"
                placeholder="novo-sistema-leilao"
                value={formData.slug}
                onChange={e => setFormData({...formData, slug: e.target.value})}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-muted-foreground">Categorias (separadas por vírgula)</label>
              <input 
                type="text" 
                className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm outline-none"
                placeholder="tecnologia, inovacao"
                value={formData.categories}
                onChange={e => setFormData({...formData, categories: e.target.value})}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-muted-foreground">Tags (separadas por vírgula)</label>
              <input 
                type="text" 
                className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm outline-none"
                placeholder="leilao, rural, software"
                value={formData.tags}
                onChange={e => setFormData({...formData, tags: e.target.value})}
              />
            </div>
          </div>

          <div className="p-6 rounded-[2rem] border border-border bg-card/50 space-y-4">
            <h3 className="flex items-center gap-2 font-bold mb-2">
              <ImageIcon className="h-4 w-4 text-primary" />
              Capa da Notícia
            </h3>
            
            <div className="aspect-video rounded-xl bg-surface border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground hover:border-primary/50 transition-colors cursor-pointer overflow-hidden">
               {formData.image_url ? (
                 <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
               ) : (
                 <>
                  <ImageIcon className="h-8 w-8 mb-2 opacity-20" />
                  <span className="text-[10px] font-bold uppercase">Upload ou URL</span>
                 </>
               )}
            </div>
            
            <input 
              type="text" 
              className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm outline-none"
              placeholder="https://exemplo.com/imagem.jpg"
              value={formData.image_url}
              onChange={e => setFormData({...formData, image_to: e.target.value})}
            />
          </div>

          <div className="p-6 rounded-[2rem] border border-border bg-card/50 space-y-4">
            <h3 className="flex items-center gap-2 font-bold mb-2">
              <FileText className="h-4 w-4 text-primary" />
              Status de Publicação
            </h3>
            
            <select 
              className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm outline-none"
              value={formData.status}
              onChange={e => setFormData({...formData, status: e.target.value})}
            >
              <option value="published">Publicado</option>
              <option value="draft">Rascunho</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}
