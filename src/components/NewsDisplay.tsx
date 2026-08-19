import { Link } from "@tanstack/react-router";
import { newsData } from "@/lib/news.data";
import { ArrowRight, Calendar } from "lucide-react";

export function NewsDisplay() {
  const latestNews = newsData.slice(0, 4);

  return (
    <div className="border-t border-border bg-card/50 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl font-bold">Últimas Notícias</h2>
          <Link to="/noticias" className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1">
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {latestNews.map((news) => (
            <Link key={news.id} to={`/noticias/${news.slug}`} className="group block space-y-3">
              <div className="h-40 overflow-hidden rounded-xl bg-surface">
                {news.image_url ? (
                  <img src={news.image_url} alt={news.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/30">Sem Imagem</div>
                )}
              </div>
              <h3 className="line-clamp-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                {news.title}
              </h3>
              <div className="flex items-center text-xs text-muted-foreground gap-2">
                <Calendar className="h-3 w-3" />
                {new Date(news.date).toLocaleDateString("pt-BR")}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
