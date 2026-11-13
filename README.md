# DataOps by Cyces: landing page

Landing page for the Cyces 24/7 DataOps support service.
Design source: Figma file "Cyces-SM", section "Section 11" (desktop frame "DataOps Black Vertion", mobile frame "DataOps LP / Mobile 375 / final").

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4 (tokens live in `src/app/globals.css`, no config file)
- Font: Glacial Indifference, self-hosted in `src/fonts/` via `next/font/local`

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, every page is static
npm run lint
```

## Where things live

```
src/
  app/
    layout.tsx          fonts, metadata, <html>
    page.tsx            the landing page: lists the sections in order
    globals.css         design tokens (colors, font) + base styles
    icon.svg            favicon (apple-icon.png for Apple devices)
  config/site.ts        links (booking, case study, fine print), repeated copy, footer company line
  components/
    sections/           one file per page section, top to bottom
    layout/             Footer
    ui/                 shared pieces: ButtonLink, Eyebrow, SectionTitle, Glow, icons...
  lib/cn.ts             class name helper
public/images/          Intentwise logo
```

## Common edits

- **Change a link** (booking, case study, fine print, cyces.co): `src/config/site.ts`. All external links open in a new tab.
- **Change copy in a section**: open the matching file in `src/components/sections/`. Lists (facts, steps, objections, cost options) are arrays at the top of each file.
- **Change a color**: `src/app/globals.css` under `@theme`. Use the token classes (`bg-ink`, `text-brand`, `bg-surface`, `bg-mist`), not raw hex values.
- **Cost chart**: bar heights are calculated from `amount` in `CostComparison.tsx`, so update the number and the chart stays in proportion.

- **Buttons**: every button with an arrow uses `ButtonLink` and gets the hover arrow-slide animation automatically (`.btn-slide` in `globals.css`).

Note: the dev server doesn't always pick up edits to `globals.css`. If a CSS change doesn't show, restart `npm run dev`.

## Responsive rules

The design has two frames: mobile (375px) and desktop (1440px). Classes without a prefix are the mobile design; `lg:` (1024px and up) is the desktop design. Content is capped at 1200px with 20px side gutters.

The hero is always at least one full screen tall (`min-h-svh`). On short desktop screens it tightens using two custom variants defined in `globals.css`: `short:` (height 820px or less) and `tight:` (660px or less).

## Legal

There are no legal pages in this project. The footer "Fine print" link goes to https://cyces.co/fine-print.
