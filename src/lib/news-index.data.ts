import { newsData, type NewsPost } from "@/lib/news.data";

export interface NewsIndexItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  categories: string[];
  tags: string[];
  image_url: string;
  excerpt?: string;
}

/**
 * Lightweight index of all news posts for use in lists and carousels.
 * This avoids loading the full HTML content of 260+ posts in every page.
 */
export const newsIndex: NewsIndexItem[] = newsData.map(post => ({
  id: post.id,
  title: post.title,
  slug: post.slug,
  date: post.date,
  categories: post.categories,
  tags: post.tags,
  image_url: post.image_url,
  excerpt: post.content.replace(/<[^>]*>/g, '').slice(0, 160).trim() + '...'
}));
