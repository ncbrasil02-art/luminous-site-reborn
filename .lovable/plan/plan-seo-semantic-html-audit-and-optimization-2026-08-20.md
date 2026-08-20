# Plan: SEO & Semantic HTML Audit and Optimization

Analyze and optimize the current routing, meta tags, and semantic structure to ensure every page has unique SEO metadata and valid HTML structure for the new production domain `www.ncbrasil.com.br`.

## Proposed Changes

### SEO Metadata Optimization
- **Unified SEO Utility**: Refine `src/lib/seo.ts` to ensure it generates all critical tags (Title, Description, Canonical, OG, Twitter, JSON-LD) correctly for the main domain.
- **Unique Page Metadata**: Verify and update `head` functions in all routes (Home, Solutions, Systems, Blog, etc.) to provide unique, keyword-rich titles and descriptions.
- **Canonical Tags**: Ensure every route has a self-referencing canonical tag pointing to `www.ncbrasil.com.br`.
- **JSON-LD Schema**: Add or refine structured data for `ProfessionalService`, `BreadcrumbList`, `FAQPage`, and `NewsArticle` where applicable.

### Semantic HTML Structure
- **Heading Hierarchy**: Ensure every page has exactly one `<h1>` that matches the target keyword and page title, followed by a logical hierarchy of `<h2>` to `<h6>`.
- **Semantic Elements**: Use `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, and `<nav>` correctly across all templates.
- **Responsive Images**: Ensure images have proper `alt` text, `width`, `height`, and utilize `<picture>` for WebP support.

### Technical SEO & Connectivity
- **Robots & Sitemap**: Verify `public/robots.txt` and the dynamic `sitemap.xml` route cover all friendly URLs.
- **Analytics Connectivity**: Ensure GA4 and UA IDs are active and correctly tracking across all pages.
- **Social Sharing**: Validate that `ShareButtons` and Open Graph tags use absolute URLs for proper preview generation.

## Technical Details

- **Routing**: TanStack Router `head` functions will be used for metadata injection.
- **Metadata Logic**: `buildMeta` and `buildLPMeta` helpers will be the source of truth.
- **Component Audit**: Audit `LandingPage.tsx` and custom route components for heading hierarchy.
- **URL Strategy**: Maintain "Flat URL" structure (e.g., `/sistema-de-leilao` instead of `/sistemas/leilao`) as requested.

## User Review Required

> [!IMPORTANT]
> The site is already live at `www.ncbrasil.com.br`. These changes are focused on fine-tuning the SEO performance. Do you have specific keywords you want to prioritize for any particular page besides "Sistema de Leilão"?
