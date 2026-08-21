# Plan - UI Refinement: contextual CTA & Layout Adjustment

The user wants to remove images from specific blocks (Comparison/Problem-Solution) on the Auction (Leilão) and Raffle (Rifas) landing pages and instead add a high-impact parallax CTA section below the comparison table using specific keywords.

## Proposed Changes

### 1. `src/components/LandingPage.tsx`
- Add a new optional prop `finalParallaxCta` to the `LandingPage` component.
- Implement the new Parallax CTA section:
    - Position: Immediately following the `comparative` (Comparison Table) section.
    - Design: Background with parallax effect (using CSS `bg-fixed` or similar), dark overlay, and bold centered text.
    - Animation: Use `framer-motion` for reveal effects.
- Remove the `image` display from the `solution` block to clean up the layout as requested.

### 2. `src/routes/sistema-de-leilao.tsx`
- Remove the `image` property from the `solution` prop.
- Define `finalParallaxCta` with:
    - Text: "Sistema de Leilão Profissional e Personalizado"
    - Background image: `/img-sistema-de-leilao/home-premium.png` (or a suitable high-quality asset from the project).

### 3. `src/routes/sistema-de-rifas.tsx`
- Remove the `image` property from the `solution` prop.
- Define `finalParallaxCta` with:
    - Text: "Sistema para Rifas Profissionais"
    - Background image: `/img-sistema-de-rifas/rifa-vitrine.png` (or a suitable high-quality asset from the project).

## Technical Details
- The Parallax section will use Tailwind's `bg-fixed` and `bg-cover` classes for a simple yet effective parallax effect.
- The text will be styled with a "Premium" aesthetic (Space Grotesk, large font size, subtle text gradient).
- RLS and SEO: These changes are strictly UI/Layout and won't impact security or metadata negatively; in fact, the keywords in the CTA will help SEO.
