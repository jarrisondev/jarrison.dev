# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
```

No test or lint scripts are configured.

## Architecture

This is an **Astro 6.x** static site (jarrison.dev personal site), using file-based routing with TypeScript in strict mode.

**Routing:** Files in `src/pages/` map directly to URL routes. `index.astro` → `/`.

**Astro component pattern:**
```astro
---
// Frontmatter: imports, JS logic
import Layout from '../layouts/Layout.astro';
---
<!-- Template: HTML with components -->
<Layout>
  <slot />
</Layout>
```

**Key directories:**
- `src/pages/` — Route pages (file-based routing)
- `src/layouts/` — Page shell templates (use `<slot />` for content injection)
- `src/components/` — Reusable `.astro` components
- `src/assets/` — Optimized images/SVGs (imported into components)
- `public/` — Static assets served as-is (favicon, etc.)

**Stack:** Vanilla Astro only — no React/Vue/Svelte, no Tailwind, no CMS. Node >=22.12.0 required.
