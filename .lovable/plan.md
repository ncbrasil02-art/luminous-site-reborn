# Plan: Modernize Home Hero with 3D Effects and Particles

The user wants a more "premium" and "modern" visual impact for the Hero section, mentioning 3D effects, particles, and laser beams to enhance transitions and word impact. I will implement these effects while maintaining the dark navy/blue theme.

## User Review Required

> [!IMPORTANT]
> I am adding a particle system and a laser scan effect to the Hero section to increase visual impact as requested.

## Proposed Changes

### Styles
#### [src/styles.css](src/styles.css)
- Add animation for "laser" scan effect.
- Add utility classes for the particle system.
- Refine background glows for more depth.

### Components
#### [src/components/HeroSlider.tsx](src/components/HeroSlider.tsx)
- Integrate a simple particle system (floating dots/sparkles).
- Add a "laser" scan effect that sweeps across the text on transition.
- Enhance the 3D-like depth by layering background elements with different parallax-like motion speeds.
- Add "electric" glow effects to the highlighted text.

## Technical Details

- **Particles:** Will use a small array of absolute-positioned `motion.div` elements with random positions and float animations to simulate dust or digital particles.
- **Laser Effect:** A thin, high-brightness gradient line that moves horizontally or vertically across the container when a slide changes.
- **3D Impact:** Using `perspective` and `rotateX/Y` on text elements via Framer Motion to give a subtle 3D tilt effect on hover or entry.
