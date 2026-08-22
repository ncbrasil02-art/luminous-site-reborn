# Plan: Premium Cinematic Hero Slider with Dynamic Platform Highlights

Redesign the Home Hero section as a cinematic slider that cycles through key platforms (Leilão, Rifas, Cassino, etc.), focusing on high-end design, transition effects, and SEO-targeted copy.

## Proposed Changes

### 1. New Component: `HeroSlider.tsx`
- Create a high-fidelity slider using `framer-motion` and `AnimatePresence`.
- Each slide will feature:
    - **Text Content (Left Side):** Title with keywords, description, and high-conversion CTA.
    - **Visual Content (Right Side):** High-quality product image with gradient masks and "glow" effects.
- Cinematic transition effects (cross-fade + slight parallax/slide).
- Auto-cycling with manual controls (dots/arrows).

### 2. Update `src/routes/index.tsx`
- Replace the current static Hero section with the new `<HeroSlider />`.
- Ensure integration with existing styles and responsive containers.

### 3. Visual Assets & Styles
- Utilize existing platform images (e.g., `/img-sistema-de-leilao/home-premium.png`, `/img-sistema-de-rifas/Fachada Profissional.png`).
- Apply premium cinematic treatments: background meshes, glowing orbs, and glassmorphism.

## Technical Details

- **Animation:** `framer-motion` for slide entries/exits (staggered text, sliding images).
- **Responsive Design:** Split-screen layout for desktop; stacked layout for mobile with optimized font sizes.
- **SEO:** Maintain semantic H1 tags within the active slide (or use a hidden H1 for the page and H2s in the slider for balance, as requested for platform keywords).
- **Data Source:** A local configuration array within the component for easy updates to titles and keywords.

---
**Note:** The current `SystemsCarousel` will remain below the Hero as requested in previous steps, providing a grid view of all solutions.
