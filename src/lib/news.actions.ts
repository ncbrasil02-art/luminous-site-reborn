import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { newsData, type NewsPost } from "./news.data";

// In a real app with a DB, we would use Supabase here.
// For now, we simulate persistence for the admin panel.
// Note: This only persists in the server memory during dev/runtime.
let dynamicNews: NewsPost[] = [...newsData];

export const getAdminNews = createServerFn({ method: "GET" })
  .handler(async () => {
    return dynamicNews;
  });

export const getAdminNewsById = createServerFn({ method: "GET" })
  .inputValidator((id: string) => z.string().parse(id))
  .handler(async ({ data: id }) => {
    const post = dynamicNews.find((p) => p.id === id);
    if (!post) throw new Error("Notícia não encontrada");
    return post;
  });

export const saveNews = createServerFn({ method: "POST" })
  .inputValidator((data: any) => 
    z.object({
      id: z.string().optional(),
      title: z.string().min(5),
      content: z.string().min(20),
      categories: z.array(z.string()),
      tags: z.array(z.string()),
      image_url: z.string().nullable(),
      slug: z.string(),
      status: z.enum(['published', 'draft']).default('published')
    }).parse(data)
  )
  .handler(async ({ data }) => {
    const isNew = !data.id;
    const id = data.id || Math.random().toString(36).substr(2, 9);
    
    const post: NewsPost = {
      id,
      title: data.title,
      slug: data.slug,
      content: data.content,
      categories: data.categories,
      tags: data.tags,
      image_url: data.image_url,
      date: new Date().toISOString(),
      thumb_id: null
    };

    if (isNew) {
      dynamicNews = [post, ...dynamicNews];
    } else {
      dynamicNews = dynamicNews.map((p) => (p.id === id ? post : p));
    }

    return post;
  });

export const deleteNews = createServerFn({ method: "POST" })
  .inputValidator((id: string) => z.string().parse(id))
  .handler(async ({ data: id }) => {
    dynamicNews = dynamicNews.filter((p) => p.id !== id);
    return { success: true };
  });
