# Plan: Administrative Panel and SEO Automation

We will implement a professional administrative panel for news management and automate SEO feeds (RSS/Sitemap) to improve indexing. Due to the current backend environment constraints, the admin panel will initially use local persistence while providing a complete UI for content management.

## 1. Administrative Panel
Create a secure management area for news.
- **Route `/admin`**: Dashboard with summary statistics.
- **Route `/admin/noticias`**: Table listing all articles with search, filtering, and status (Draft/Published).
- **Route `/admin/noticias/nova`**: Editor for creating new articles.
- **Route `/admin/noticias/editar/$id`**: Editor for existing articles.
- **Components**:
  - `AdminLayout`: Sidebar navigation and header.
  - `NewsForm`: Rich content editor, metadata settings (slug, category, tags), and image management.
  - `StatusBadge`: Visual indicator for publication status.

## 2. SEO & Distribution
Automate indexing and content delivery.
- **RSS Feed (`/api/public/rss`)**: Standard RSS 2.0 feed for news aggregators and recurrence.
- **Dynamic Sitemap (`/api/public/sitemap`)**: Auto-generated XML including all news URLs and priorities.
- **Meta Tags**: Ensure the admin-edited metadata propagates to the frontend LPs.

## 3. Data Integration
- Create `src/lib/news.actions.ts` to centralize all news operations.
- Update news listing components to prioritize dynamic content.

## Technical Details
- **UI Framework**: Tailwind CSS + shadcn/ui components.
- **Icons**: Lucide React.
- **Routing**: TanStack Router.
- **Feeds**: Server Routes (`src/routes/api/public/*`) returning raw XML responses.
- **Persistence**: `localStorage` as a fallback for the admin panel until Lovable Cloud credits are available for a full database migration.
