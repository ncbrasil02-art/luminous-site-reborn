# Plan - Technical SEO & Performance Optimization

Improve Lighthouse metrics by optimizing image loading strategies and technical SEO metadata across the platform.

## Proposed Changes

### 1. Performance: Image Loading Optimization
- **SiteHeader**: Set main logo to `loading="eager"` and `fetchPriority="high"` to minimize LCP.
- **HeroSlider**: Implement dynamic loading (`eager` for first slide, `lazy` for others) and add `decoding="async"`.
- **LandingPage**: Change hero background to `loading="lazy"` and `decoding="async"` (as it's often below the fold or behind a complex layout).
- **Portfolio Grid**: Add `decoding="async"` to all project logo images in the homepage grid.
- **SystemsCarousel**: Ensure all preview images use `decoding="async"` to reduce main thread blocking.

### 2. Technical SEO: Metadata Consolidation
- **Helmet Utility**: Ensure `HelmetProvider` is correctly configured in `main.tsx` (verified).
- **Meta Tags**: Standardize canonical tags to be absolute URLs using the `SITE_URL` constant.
- **Favicon**: Ensure favicon links are present in `index.html` and handled correctly in `buildMeta`.

### 3. Build & Deployment: Redirects Optimization
- **Redirection Logic**: Verify `src/lib/redirects.ts` covers all legacy paths to prevent 404s that penalize SEO.

## Technical Details

- Use `fetchPriority="high"` only for the absolute most important above-the-fold content.
- Use `decoding="async"` for all non-critical images to allow the browser to decode them off the main thread.
- Ensure `loading="lazy"` is used for all images that are not immediately visible in the viewport.
- Maintain `rounded-none` and high-contrast dark theme patterns throughout the optimization.
