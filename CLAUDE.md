# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Architecture

Next.js 14 App Router site for KINGWOOD (金华达), a battery manufacturer. The site is bilingual (Chinese/English) using **next-intl**.

### Routing & i18n

All pages live under `src/app/[locale]/` — the `[locale]` segment is either `cn` (default) or `en`. The middleware in `src/middleware.ts` intercepts all non-static routes and redirects to the appropriate locale prefix.

- Locale config: `src/i18n/routing.ts`
- Message loading: `src/i18n/request.ts` → loads `messages/cn.json` or `messages/en.json`
- **Always use `Link` from `@/i18n/routing`** (not `next/link`) for internal navigation — this preserves the active locale in URLs.
- All user-visible text lives in the messages JSON files. Components call `useTranslations('namespace')` (client) or `getTranslations` (server).

### Component structure

Components are colocated by page feature under `src/components/<feature>/`. Each page in `src/app/[locale]/<route>/page.tsx` composes its own set of section components. There is no shared state management — data flows via translations and props only.

`src/components/layout/` — `Header`, `Footer`, `Logo`, `LocaleSwitcher` (shared across all pages via the locale layout).

`src/components/ui/Reveal.tsx` — Framer Motion scroll-reveal wrapper. Wrap any section content with `<Reveal delay={n}>` to get a viewport-triggered fade-in animation. Supports `direction` prop (`'up'` | `'left'` | `'right'` | `'none'`).

### Layout & spacing conventions

The Header is `fixed` with height `h-16` on mobile and `h-20` on desktop. Hero sections compensate with `pt-32 lg:pt-40` — do not add extra padding-top in the locale layout.

Use the CSS utility classes defined in `src/app/globals.css`:
- `.container-content` — max-width 1200px, responsive horizontal padding
- `.section-padding` — responsive vertical section padding (96px → 160px)
- `.eyebrow` — small uppercase tracking label
- `.btn-primary` / `.btn-secondary` / `.btn-ghost-dark` — button variants
- `.vertical-watermark` — vertical writing-mode decorative text
- `.bg-grid-faint` — subtle teal grid background for hero sections

### Tailwind design tokens

Custom tokens extend the default theme in `tailwind.config.ts`:
- **Colors**: `teal` (primary, `#14B8B0`), `navy` (dark backgrounds, `#0A2540`), `ink` (neutrals, `#0A0E14`)
- **Font sizes**: `display-1`, `display-2`, `display-3` (clamp-based responsive headlines); `eyebrow` (0.75rem + wide tracking)
- **Spacing**: `section` (7.5rem / 120px), `section-lg` (10rem / 160px)
- **Fonts**: `font-serif` (Cormorant Garamond + Noto Serif SC), `font-sans` (Inter + Noto Sans SC), `font-mono` (JetBrains Mono)

### Adding or editing content

Product specs, navigation labels, page copy, and application descriptions are all in `messages/cn.json` and `messages/en.json`. Update both files when changing any text. The JSON namespace structure mirrors the page/component hierarchy (e.g., `home.hero`, `evtol.spec`, `products.cells`).
