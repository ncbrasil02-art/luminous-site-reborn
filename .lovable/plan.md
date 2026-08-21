# Plan for Fixing Route Direct Access

The user is reporting that direct navigation to subpages (like `/sistema-de-leilao`) results in a 404 error, requiring them to go through the homepage first. This is a common issue in Single Page Applications (SPAs) hosted on static platforms without proper catch-all configuration.

## Proposed Changes

### Configuration
- I will verify if there's any server-side configuration missing (e.g., `.htaccess` for Apache or `_redirects` for Netlify/Hostinger).
- Since this is a TanStack Start project running as a Vite SPA, the "fix" usually involves ensuring the host serves `index.html` for all unknown paths.

### Route Handling
- I will check the `__root.tsx` and `NotFoundComponent` to ensure they handle direct deep links correctly.
- I will verify that the TanStack Router configuration in `src/router.tsx` is set up to handle base paths correctly.

### Technical Steps
1. **Analyze the 404 behavior**: Determine if the error comes from the React app (NotFoundComponent) or the hosting server (browser's native 404).
2. **Implement Catch-all for Static Hosting**: Add a `public/_redirects` file (standard for many modern hosts) and potentially a `public/.htaccess` file to ensure all paths redirect to `index.html`.
3. **Verify Route Tree Generation**: Ensure the route tree is correctly generated and all slugs are being matched.
4. **Test Direct URLs**: Verify that `https://www.ncbrasil.com.br/sistema-de-leilao` and `https://www.ncbrasil.com.br/sistema-de-rifas` work when refreshed or entered directly.

### Meta Data Verification
- Ensure that the canonical URLs in `seo.ts` and individual routes are absolute and correct to prevent indexing issues during this routing change.

## User Review Required
> [!NOTE]
> This fix depends on how your hosting (Hostinger) is configured. I will add standard redirect files that work for most modern hosting environments. If the problem persists after these changes, you may need to enable "Single Page Application" mode in your Hostinger control panel.
