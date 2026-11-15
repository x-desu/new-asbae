# ASBAE design and interaction update

The Inference page was reviewed as a design reference only. Its paid template and section source were not installed or copied. ASBAE retains its own services, industries, delivery approach, mission, vision, values, engagement models, contact details, and approved mountain image.

## Live homepage

- The mountain hero uses a small spring-driven pointer translation with overscan to prevent exposed edges. Pointer movement does not rerender the page.
- The MLA Connect / Vidhayak Connect showcase uses representative Today, Intake queue, and Cases screens with sample data. The frame pins for the sequence and releases afterward.
- Capability tabs, the connectable workflow, and document outlines demonstrate ASBAE's services. They do not access live operational records.
- The site does not invent customer logos, client metrics, certifications, or service prices.
- The homepage no longer uses sticker or handwritten-lettering components.

## Supplied Parallax Hero Images component

Installed using `npx shadcn@latest add @aceternity/parallax-hero-images-demo --yes`.

The CLI installed `motion` and created both requested files. The existing `cn` helper and the original exported names are retained.

The source demo is available at `/components-preview/parallax`. It keeps the six original asset URLs and the source utility classes, positions, depths, normal-motion delays, easing, and spring settings.

### Every deliberate difference from the supplied source

1. **Reduced motion:** the supplied source did not include reduced-motion handling. A live media-query listener now disables pointer movement and entrance duration/delay when requested. A data attribute and reduced-motion CSS guard also keep images visible and stationary before hydration. Normal-motion styling and timings are unchanged.
2. **Tailwind compatibility:** the existing Tailwind v3 installation was retained. A `4/3` aspect-ratio token supports the source's `aspect-4/3` class unchanged. Class-based dark mode now matches the existing `next-themes` provider. The shared radius token resolves `rounded-lg` to 8px.
3. **Preview wrapper:** a light/dark toolbar wraps the unchanged demo component. Its button state waits for hydration to avoid server/client attribute mismatches.
4. **Live hero:** following the user's correction to keep the approved mountain image, the floating-image collage is demonstrated separately. The live homepage applies restrained parallax to the mountain rather than covering it with gallery images.
5. **Image loading:** the source uses plain `img`, so the demo does not require a Next Image remote-host allowlist. The live mountain is an optimized local Next Image asset.

## Motion safeguards

- Transform-based movement instead of changing layout dimensions.
- Stable capability panel sizes; inactive panels reserve no blank space.
- One smooth-scroll controller that responds to live reduced-motion changes.
- A normal tabbed project preview instead of pinning under reduced motion.
- No animated workflow traces under reduced motion.
- Compact mobile project screens and a stacked, touch-accessible workflow.

## Checks

- TypeScript checks passed during implementation.
- The original demo was verified in light and dark mode; all six images load.
- Image dimensions remained 320 by 208 during pointer movement.
- Reduced-motion rendering remained fully visible with no blur or transform after pointer movement.
- Keyboard capability navigation and stable desktop panel heights were verified.
- The final delivery message records production-build and mobile-check results.

Reference: [Aceternity Inference page](https://ui.aceternity.com/pages/inference-landing-page).
