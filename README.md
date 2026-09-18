# CareerUp Africa — Next.js (TypeScript + Tailwind)

The "Full Page B" landing page, rebuilt as a Next.js 14 app (App Router) in TypeScript, styled with
Tailwind CSS. The hero now uses the **grid formation** icon layout (4×2 grid + cycling caption line
below it) instead of the earlier orbit/headline version.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm run start
```

> `npm run build` needs internet access the first time, since `next/font` fetches and self-hosts the
> Space Grotesk and Inter font files from Google Fonts at build time. After that first successful
> build the fonts are cached locally — the shipped site makes no runtime calls to Google.

## Structure

```
app/
  layout.tsx        — root layout, loads Space Grotesk + Inter via next/font
  page.tsx          — composes all sections in order
  globals.css       — Tailwind directives + a few pseudo-element tricks Tailwind can't express
                       as utilities (the play-button triangle, the FAQ chevron)
components/
  icons.tsx         — shared SVG icon fragments (chart, compass, target, lightbulb, etc.), typed
  SiteNav.tsx       — sticky nav, switches to the blue brand color on scroll ("use client")
  Hero.tsx          — the 4x2 icon grid + cycling caption ("use client")
  FindYourNextMove.tsx
  SignsSection.tsx  — "The 5 Signs You're Stuck" card stack
  FeaturedCourses.tsx
  VoicesQuote.tsx
  FAQSection.tsx    — native <details>/<summary> accordion, no JS needed
  SiteFooter.tsx
public/
  career_up_logo.png
tailwind.config.ts  — brand colors (ink, canvas, line, muted, brand.blue/teal/orange + tints),
                      the font-family variables, and the custom "glossy" box-shadow set used by
                      every 3D icon badge
```

Only `SiteNav` and `Hero` are client components (`'use client'`) — the only two that touch the
browser (`window.scrollY`, the interval that cycles the active icon). Everything else renders as a
React Server Component.

## Tailwind notes

- Brand colors live in `tailwind.config.ts` under `colors.brand` (`blue`, `blue-tint`, `teal`,
  `teal-tint`, `orange`, `orange-tint`), plus `ink`, `canvas`, `line`, and `muted` for the neutral
  palette. Use these (`bg-brand-blue`, `text-muted`, etc.) rather than hardcoding hex values in new
  components.
- The layered "glossy" box-shadow used on every icon badge is defined once in `tailwind.config.ts`
  as `shadow-glossy` / `shadow-glossy-active`, rather than repeated inline.
- `SignsSection.tsx` uses a small array of *complete* class names (e.g. `"rotate-[-1.6deg]"`) rather
  than building the class from a raw number — Tailwind's compiler scans source files as plain text,
  so a dynamically-interpolated arbitrary value would not be found and generated. Keep this pattern
  if you add more per-item rotations elsewhere.
- Responsive breakpoints use Tailwind's defaults (`sm`/`md`/`lg`) rather than the original design's
  exact `860px`/`900px` breakpoints — visually very close, but worth knowing if you're comparing
  pixel-for-pixel against an earlier HTML version.

## Why no ESLint config

This project intentionally ships without `eslint`/`eslint-config-next`, so `next build` won't fail on
stylistic lint rules (like requiring `&apos;` instead of a plain apostrophe in JSX text — both are
valid, but the default Next.js lint config flags the plain version as an error). Add `eslint` +
`eslint-config-next` back in if you want linting in CI.

## Known placeholders to replace before shipping

- Course prices, lesson counts, and instructor/company names in `FeaturedCourses.tsx` are made up.
- The testimonial in `VoicesQuote.tsx` is the real copy you provided (Steven, Health Information
  Manager).
- `career_up_logo.png` is the logo you uploaded earlier in the conversation.
- No analytics, forms, or backend are wired up — all buttons are placeholder `<a href="#">` links.
