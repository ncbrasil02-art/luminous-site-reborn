# Plan: Migration of News and Magazine Section

Implement a dynamic news/blog system based on the provided WordPress XML export, maintaining SEO integrity and adding new visual sections for news highlights and a "magazine" area.

## User Review Required

> [!IMPORTANT]
> The XML file contains content in Portuguese and English. I will prioritize importing all published "post" type entries.
> For images, I will try to map the WordPress featured images. If the original image URLs are broken, I will use themed placeholders or search for alternatives in the XML content.

- Do you have a specific preference for the URL structure of the news? (e.g., `/noticias/[slug]` or `/blog/[slug]`)
- Should the "Magazine" area be a separate page or a scrollable section on the home page?

## Proposed Changes

### Data Migration
- Parse `ncsistemasplataformasonline.WordPress.2026-08-19.xml` to extract all published posts.
- Generate a `src/lib/news.data.ts` file containing the structured news data (titles, slugs, dates, categories, tags, and image references).
- Map image URLs and prepare placeholders for missing assets.

### Components
- Create `src/components/NewsDisplay.tsx`: A horizontal ticker or grid of the latest news to be displayed near the footer.
- Create `src/components/MagazineSection.tsx`: A visually rich section with a magazine-style layout (large featured article + secondary grid).
- Update `src/components/SiteFooter.tsx` to include the `NewsDisplay` component.

### Routes
- Implement `src/routes/noticias.index.tsx`: The main news listing page (Magazine view).
- Implement `src/routes/noticias.$slug.tsx`: Individual news article pages with deep SEO metadata (Article Schema).
- Update `src/routes/index.tsx` to include the news highlights section before the footer.

### SEO & Performance
- Generate dynamic `Article` and `BreadcrumbList` JSON-LD for every news page.
- Ensure slugs match the old site's patterns for link continuity.
- Optimize image loading with responsive sizes.

## Technical Details
- Use `framer-motion` for the magazine layout animations.
- Implement a search/filter system by category and tag.
- Storage: News data will be stored as a static JSON/TS module for performance (SSR-friendly), as the content is legacy migration data.

---
*I will proceed with data extraction and component skeleton creation after your feedback.*
