# Plan - Fix News Article Routing and Loading

The user reported that the latest blog articles (related to "Painel de Controle" and "Pedras Preciosas") were not opening correctly and were showing incorrect content. I have identified and partially addressed issues with empty slugs and unstable dates.

## Proposed Changes

### 1. Stabilize News Data
- Ensure all 264 articles have unique, search-engine-friendly slugs (already performed via automated script).
- Hardcode dates for the latest strategic articles to ensure consistent sorting across SSG and client-side hydration.
- Replace any remaining internal legacy image paths with stable high-definition assets.

### 2. Improve Routing Robustness
- Add explicit logging in the news loader to help diagnose any future mismatches.
- Ensure the `MagazineSection` and `NewsIndex` components use stable filtering and sorting.

## Technical Details

- **Files to Modify:**
  - `src/lib/news.data.ts`: Standardize slugs and dates for all entries.
  - `src/routes/noticias.$slug.tsx`: Add a console warning if a slug is not found before throwing a 404 to aid in debugging.
- **Verification:**
  - Run a validation script to confirm no empty slugs exist.
  - Verify that `newsData.find` correctly resolves the slugs mentioned by the user (`painel-de-controle-leiloes-ia` and `ncbrasil-lanca-novo-sistema-de-leilao-para-pedras-preciosas`).
