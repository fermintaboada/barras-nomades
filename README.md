# Barras Nómades — Landing Page

Professional landing page for a real bartending service based in Buenos Aires, Argentina. Built for fast delivery, strong visual impact, and production-ready quality.

**Live site:** [barras-nomades.vercel.app](https://barras-nomades.vercel.app)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Playfair Display + Inter via `next/font` |
| Images | `next/image` (WebP, lazy loading, priority on hero) |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

---

## Features

- **Scroll-reveal animations** — custom `FadeIn` component built with `IntersectionObserver` (no libraries). Supports directional slides (up / left / right) and staggered delays.
- **Hero entrance animations** — CSS keyframe animations with staggered delays, no JavaScript required.
- **Dynamic OG image** — generated at runtime with `next/og` and Playfair Display font, served at `/opengraph-image`. Renders correctly when the link is shared on WhatsApp, Instagram and other platforms.
- **Full SEO** — expanded metadata, Open Graph, Twitter card, JSON-LD `LocalBusiness` schema for Google.
- **Auto-generated `robots.txt` and `sitemap.xml`** — via Next.js App Router file conventions.
- **Vercel Analytics** — pageview and device tracking with zero configuration.

---

## Architecture decisions

**Server components by default.** Only `FadeIn` is a client component (`'use client'`), since it requires `IntersectionObserver`. Everything else — including sections that render `FadeIn` — stays on the server.

**No animation library.** Scroll reveals are handled by a 40-line custom component using the native `IntersectionObserver` API. This keeps the bundle small and avoids runtime overhead.

**Single `SITE_URL` source of truth.** Defined in `lib/constants.ts`, resolves from `NEXT_PUBLIC_SITE_URL` → `VERCEL_URL` → `localhost`. Used by metadata, robots, sitemap and JSON-LD — no duplication.

**CSS-only hero animation.** The hero entrance uses `@keyframes` + `animation-delay` inline styles, which means it works without hydration and avoids layout shift.

---

## Project structure

```
app/
  layout.tsx          # Metadata, JSON-LD, Analytics
  page.tsx            # Section composition
  globals.css         # Tailwind theme, scroll-reveal classes, hero keyframes
  opengraph-image.tsx # Dynamic OG image (next/og)
  robots.ts           # Auto-generated robots.txt
  sitemap.ts          # Auto-generated sitemap.xml

components/
  Hero.tsx            # Full-screen hero with CSS entrance animations
  Navbar.tsx          # Fixed header with WhatsApp CTA
  ValueProp.tsx       # Stats + description
  About.tsx           # Brand story + photo
  Services.tsx        # What's included
  Drinks.tsx          # Menu + brands
  Upgrades.tsx        # Customization options
  Gallery.tsx         # Photo grid
  CTA.tsx             # Final call to action
  ui/
    FadeIn.tsx        # Scroll-reveal wrapper (client component)
    WhatsAppIcon.tsx  # SVG icon

lib/
  constants.ts        # SITE_URL, WhatsApp link, all content arrays
```

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production URL (set in Vercel → Settings → Environment Variables) |

If not set, falls back to `VERCEL_URL` (set automatically by Vercel) or `http://localhost:3000`.
