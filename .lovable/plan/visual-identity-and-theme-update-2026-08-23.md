# Visual Identity and Theme Update

Updating the visual identity to a deeper dark palette (black) based on the logo's aesthetics and refining primary colors (blue/cyan) to match the logo's blue, while ensuring consistent UI across all components.

## Proposed Changes

### Global Styles & Theme
- Update `src/styles.css` color tokens:
    - Change `--background` and `.dark` background to a deeper black (`#000000` or `#050505`).
    - Adjust primary blue colors (`--primary`, `--ring`, `--primary-glow`) to match the logo's specific blue (sampled as approximately `#0047FF` or similar).
    - Refine surface and card colors to maintain depth and contrast against the new black background.
    - Enhance glow shadows to match the updated primary blue.

### Hero & Components
- Update `HeroSlider.tsx`:
    - Ensure the background color matches the new global background.
    - Refine the text gradients to use the updated primary blue.
- Update `SocialProofBlock.tsx`:
    - Adjust the avatar borders to match the new background color.
- Update `SecuritySeals.tsx`:
    - Adjust the icon container backgrounds and hover effects to use the new primary blue.

### Technical Details
- Background: `#050505` (Deep Black)
- Primary Blue: `#0047FF` (Logo Blue)
- Secondary/Accent: Refined to complement the new palette.
- Transparency layers: Updated to ensure readability on pure black.

## User Review Required
> [!NOTE]
> The background will be changed to a deep black like the logo. Are there any specific sections where you'd prefer to keep a hint of navy, or should it be a global transition to black?
