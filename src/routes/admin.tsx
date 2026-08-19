import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { LayoutDashboard, Newspaper, Settings, LogOut, Import } from 'lucide-react'

export const Route = createFileRoute('/admin')({
  component: AdminLayout
})

function AdminLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card/50 flex flex-col fixed inset-y-0">
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">NC</div>
            Admin Panel
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link 
            to="/admin" 
            activeProps={{ className: "bg-primary/10 text-primary font-medium" }}
            activeOptions={{ exact: true }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-surface transition-colors"
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link 
            to="/admin/noticias" 
            activeProps={{ className: "bg-primary/10 text-primary font-medium" }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-surface transition-colors"
          >
            <Newspaper className="h-5 w-5" />
            Notícias
          </Link>
          <Link 
            to="/admin/importar" 
            activeProps={{ className: "bg-primary/10 text-primary font-medium" }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-surface transition-colors"
          >
            <Import className="h-5 w-5" />
            Importar XML
          </Link>
          <Link 
            to="/admin" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-surface transition-colors"
          >
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
      <main className="flex-1 ml-64 overflow-y-auto min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
