# Plan: Premium Cinematic Homepage Redesign

I will redesign the homepage to reflect the "Premium Digital / Strategy" design system, using deep dark backgrounds, electric blue glows, and floating 3D-style objects.

## User Review Required

> [!IMPORTANT]
> - I will use the colors and typography defined in your `design-system-lovable.md` (Ink, Navy, Electric Blue, Cyan).
> - The new hero section will feature a cinematic layout with floating technological elements.
> - I will ensure all system LPs are prominently showcased with high-converting CTAs.

## Proposed Changes

### Design & Assets
- **Floating Objects:** Create a new component `FloatingObject.tsx` using `framer-motion` to handle floating 3D-style visuals.
- **Section Redesign:** 
  - **Hero:** A more immersive, high-contrast intro with the "Planet" or "Globe" tech vibe from your references.
  - **Solutions:** Reorganize into premium cards with high-fidelity glows.
  - **Stats:** Update to the "Digital Excellence" style (150+ Projects, etc.).
- **Styles:** Update `src/styles.css` to add specific glow gradients and floating animations.

### Homepage (`src/routes/index.tsx`)
- **Structure:** Replace the current hero and solutions grid with a more editorial, high-end layout.
- **Content:** Update copy to focus on keywords for each system (Leilão, Rifas, Classificados, etc.) within the homepage flow.
- **Mega Menu:** Ensure the "Sistemas" and "Serviços" separation remains clean and modern.

### Technical Details
- Maintain SEO metadata and JSON-LD structure.
- Use `lovable-assets` pointers for any reference images used.
- Ensure SSG compatibility for the new interactive elements.

## Next Steps
1. Create `FloatingObject.tsx`.
2. Update global CSS with new design system tokens.
3. Refactor the homepage layout.
4. Verify hydration and SSG build.