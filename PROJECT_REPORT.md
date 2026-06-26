# Project Report

## 1. Executive Summary

**BeyondDev** is a marketing/landing page website for a Filipino software development agency that builds simple business systems (order trackers, booking systems, inventory trackers, customer databases, admin dashboards) for local Filipino businesses.

The project is in **early-stage development** — roughly **25–30% complete**. It currently functions as a single-page landing site with a hero section, pain points section, process section, logo cloud, contact stub, and footer. The site is not yet feature-complete: there are no subpages, no contact form, no backend integration, and several components exist but are not wired into the page.

**Major functionality currently present:**
- Responsive header with mobile hamburger menu
- Hero section with CTA
- Logo cloud marquee
- Pain points grid
- 4-step process showcase
- Contact section (heading only — no form)
- Footer with link groups and social links

---

## 2. Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| Language | TypeScript 5.x |
| React | React 19.2.4 |
| Styling | Tailwind CSS v4, CSS Modules |
| UI Icons | lucide-react ^1.21.0 |
| Fonts | Inter, JetBrains Mono, Outfit (via `next/font/google`) |
| Build Tool | Turbopack (Next.js default) |
| Linting | ESLint 9 with `eslint-config-next` |
| PostCSS | `@tailwindcss/postcss` |
| Package Manager | npm (lock file present) |
| Deployment | Vercel-ready (default Next.js config, Vercel SVG in public/) |
| Database | None |
| Authentication | None |
| State Management | Local React state only (`useState`, `useEffect`) |
| API / Backend | None |

---

## 3. Folder Structure

```
beyond-dev-new/
├── .git/
├── .gitignore
├── AGENTS.md              — Agent configuration (Next.js breaking changes warning)
├── CLAUDE.md              — References AGENTS.md
├── README.md              — Default create-next-app README
├── eslint.config.mjs      — ESLint flat config
├── next-env.d.ts          — Next.js TypeScript declarations
├── next.config.ts          — Next.js config (remote image patterns)
├── package.json
├── postcss.config.mjs      — Tailwind CSS PostCSS plugin
├── tsconfig.json
├── public/                 — Static assets (default SVGs from create-next-app)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src/
    ├── app/                — Next.js App Router directory
    │   ├── favicon.ico
    │   ├── globals.css     — Global styles, CSS variables, design tokens
    │   ├── layout.tsx      — Root layout (fonts, Header, metadata)
    │   └── page.tsx        — Home page (assembles all sections)
    ├── assets/
    │   └── beyod-dev-logo.svg  — SVG logo (typo in filename: "beyod" vs "beyond")
    ├── components/
    │   ├── layout/         — Structural components
    │   │   ├── footer.tsx
    │   │   ├── header.tsx
    │   │   ├── header.module.css
    │   │   ├── logo.tsx
    │   │   └── section-header.module.css   ← UNUSED
    │   ├── sections/       — Page section components
    │   │   ├── contact.tsx
    │   │   ├── cta.tsx     ← NOT IMPORTED in page.tsx
    │   │   ├── hero.tsx
    │   │   ├── logo-cloud.tsx
    │   │   ├── pain-points.tsx
    │   │   ├── process.tsx
    │   │   └── testimonials.tsx  ← NOT IMPORTED in page.tsx
    │   └── ui/             — Reusable UI primitives
    │       ├── button.tsx   ← NOT USED anywhere
    │       ├── container.tsx
    │       └── section-heading.tsx
    └── lib/
        └── utils.ts        — cn() utility for class merging
```

---

## 4. Routing / Pages

| Route | Page | Purpose | Status |
|-------|------|---------|--------|
| `/` | `src/app/page.tsx` | Landing page (hero, logo cloud, pain points, process, contact) | Partial (no form in contact) |
| `/product/` | — | Linked in header nav | **Missing** |
| `/customers/` | — | Linked in header nav | **Missing** |
| `/templates/` | — | Linked in header nav | **Missing** |
| `/pricing/` | — | Linked in header nav | **Missing** |

**Only one route exists.** The header navigation links to four pages that do not exist in the codebase.

---

## 5. Detailed Page Breakdown

### Home Page (`/`)

**Purpose:** Main landing page for BeyondDev, designed to convert visitors into leads via a "Book Your Free Business Process Checkup" CTA.

**Sections (in order):**

| # | Section | Component | Status |
|---|---------|-----------|--------|
| 1 | Header | `components/layout/header.tsx` | Complete |
| 2 | Hero | `components/sections/hero.tsx` | Partial — placeholder image area |
| 3 | Logo Cloud | `components/sections/logo-cloud.tsx` | Complete |
| 4 | Pain Points | `components/sections/pain-points.tsx` | Complete |
| 5 | Process | `components/sections/process.tsx` | Complete |
| 6 | Contact | `components/sections/contact.tsx` | Stub — heading only, no form |
| 7 | Footer | `components/layout/footer.tsx` | Complete |

**Components used:**
- `Header` (from root layout)
- `Hero`
- `LogoCloud`
- `PainPoints`
- `Process`
- `Contact`
- `Footer`

**Data fetched:** None. All content is hardcoded.

**API calls:** None.

**User interactions:**
- Header: scroll-aware frosted glass effect, mobile hamburger menu toggle
- Hero: CTA link to `#contact`
- Logo Cloud: CSS marquee animation (pauses on hover)
- Pain Points: hover effect on cards
- Process: visual illustrations with static UI mockups
- Contact: no interactive elements (heading only)

**Responsive behavior:** Fully responsive. Header switches to hamburger at `≤1024px`. Grid layouts collapse from 3→2→1 columns. Font sizes scale up at `1441px` breakpoint.

**Current completion:** ~60% for the landing page itself.

---

## 6. Components

### Layout Components

| Component | File | Purpose | Used? |
|-----------|------|---------|-------|
| `Header` | `src/components/layout/header.tsx` | Fixed header with logo, nav links, "Get Started" CTA, mobile menu. Uses CSS Modules. Client component. | Yes |
| `Footer` | `src/components/layout/footer.tsx` | 4-column footer with logo, link groups (Systems, Company, Resources, Contact), social links, legal links, copyright. | Yes |
| `Logo` | `src/components/layout/logo.tsx` | SVG text-based logo rendering "beyond.dev" using the Outfit font. | Yes |

### Section Components

| Component | File | Purpose | Used? |
|-----------|------|---------|-------|
| `Hero` | `src/components/sections/hero.tsx` | Landing hero with headline, 14-Day Starter badge, CTA button, trust signal, and placeholder image area. | Yes |
| `LogoCloud` | `src/components/sections/logo-cloud.tsx` | Infinite scrolling marquee of 12 client/partner logos loaded from Storyblok CDN. | Yes |
| `PainPoints` | `src/components/sections/pain-points.tsx` | 6-card grid showing common pain points of local businesses (paper, spreadsheets, Messenger, screenshots, wasted time, mistakes). | Yes |
| `Process` | `src/components/sections/process.tsx` | 4-step process cards with inline SVG visual illustrations (checkup → blueprint → 14-day build → support). | Yes |
| `Contact` | `src/components/sections/contact.tsx` | Heading-only section with "Book Your Free Business Process Checkup" title. **No form implemented.** | Yes |
| `Cta` | `src/components/sections/cta.tsx` | Full CTA section with hexagon SVG illustration, "Get Your First System Built in 14 Days" headline, and two buttons. | **No** |
| `Testimonials` | `src/components/sections/testimonials.tsx` | Marquee-animated testimonial cards with stats (3h saved, 10x faster, zero conflicts). Client component. Includes 4th gradient CTA card. | **No** |

### UI Components

| Component | File | Purpose | Used? |
|-----------|------|---------|-------|
| `Button` | `src/components/ui/button.tsx` | Reusable button with 5 variants (primary, secondary, outline, ghost, accent) and 3 sizes. | **No** |
| `Container` | `src/components/ui/container.tsx` | Responsive container with 4 size options and optional 12-column grid mode. | Yes (by PainPoints, Process, Contact) |
| `SectionHeading` | `src/components/ui/section-heading.tsx` | Reusable section header with optional badge (default or pill variant), title, and description. | Yes (by PainPoints, Process, Contact, Testimonials) |

### Unused Files

| File | Notes |
|------|-------|
| `src/components/sections/cta.tsx` | Defined but never imported |
| `src/components/sections/testimonials.tsx` | Defined but never imported |
| `src/components/ui/button.tsx` | Defined but never imported |
| `src/components/layout/section-header.module.css` | CSS module defined but never imported |
| `src/assets/beyod-dev-logo.svg` | SVG asset with typo in filename, never imported |
| `public/file.svg`, `public/globe.svg`, `public/window.svg` | Default create-next-app assets, unused |

---

## 7. Features

| Feature | Status | Notes |
|---------|--------|-------|
| Responsive Layout | **Complete** | Mobile-first, breakpoints at 640px, 1024px, 1441px |
| Header with Navigation | **Complete** | Fixed position, scroll-aware glass effect, mobile hamburger |
| Hero Section | **Partial** | Text and CTA present; hero image is a placeholder `<div>` |
| Logo Cloud Marquee | **Complete** | Infinite scroll with 12 logos from Storyblok CDN |
| Pain Points Section | **Complete** | 6-card grid with Lucide icons |
| Process Section | **Complete** | 4-step cards with inline SVG illustrations |
| Contact Form | **Stub** | Section exists with heading, but no form fields |
| CTA Section | **Stub** | Component exists (`cta.tsx`) but is not rendered |
| Testimonials Section | **Stub** | Component exists (`testimonials.tsx`) but is not rendered |
| Footer | **Complete** | 4-column layout with links, socials, legal |
| SEO Metadata | **Complete** | OpenGraph, keywords, title template in `layout.tsx` |
| Authentication | **Not Started** | No auth system |
| Dashboard | **Not Started** | No dashboard |
| Subpages | **Not Started** | 4 nav links point to nonexistent routes |
| Dark Mode | **Not Started** | Light mode only; CSS variables suggest dark mode was considered |
| Contact Form Submission | **Not Started** | No form, no API route, no backend |
| Blog | **Not Started** | Footer links to `#` for Blog |
| Case Studies | **Not Started** | Footer links to `#` for Case Studies |
| FAQ | **Not Started** | Footer links to `#` for FAQ |

---

## 8. API Integration

**None.** The project has:
- No API routes (`src/app/api/` does not exist)
- No external API calls
- No fetch/axios/tanstack-query usage
- No backend services
- No server actions

The only external resource is images loaded from `a.storyblok.com` CDN (configured in `next.config.ts` remote patterns).

---

## 9. State Management

**Minimal.** The project uses only local React state:

| Component | State | Purpose |
|-----------|-------|---------|
| `Header` (`header.tsx`) | `isScrolled` (boolean) | Tracks scroll position for frosted glass effect |
| `Header` | `mobileOpen` (boolean) | Toggles mobile menu visibility |
| `Header` | `animateIn` (boolean) | Triggers slide-in animation on mount |
| `Testimonials` (`testimonials.tsx`) | `isPaused` (boolean) | Pauses/plays marquee animation |

No global state management (no Context, Redux, Zustand, Jotai, etc.). No server state management (no React Query / TanStack Query).

---

## 10. Authentication

**None.** No authentication system exists. No login, registration, session handling, JWT, OAuth, middleware, or role-based access control.

---

## 11. Database

**None.** No database, ORM, models, schemas, or migrations exist.

---

## 12. Reusable Utilities

| Utility | File | Purpose |
|---------|------|---------|
| `cn()` | `src/lib/utils.ts` | Concatenates class names, filtering out falsy values. A simplified version of `clsx`/`classnames`. |

No hooks, validators, constants, or service modules exist beyond this single utility.

---

## 13. Styling System

**Approach:** Hybrid Tailwind CSS v4 + CSS Modules

### Tailwind CSS v4
- Configured via `@import "tailwindcss"` in `globals.css` (v4 syntax, no `tailwind.config.js`)
- PostCSS plugin: `@tailwindcss/postcss`
- Extensive custom theme defined inline in `globals.css` using `@theme inline {}`

### CSS Variables / Design Tokens
The `globals.css` file (409 lines) defines a comprehensive design token system:

**Color palette:**
- Blue scale: 100–800 (including non-standard 450)
- Black scale: 0–900
- White scale: 100–900
- Green: 500, 600
- Red: 500, 600
- Yellow: 500, 600

**Semantic tokens:**
- `--color-primary`, `--color-secondary`, `--color-accent`, `--color-muted`, `--color-surface`, `--color-border`, `--color-success`, `--color-danger`
- Internal color mappings (background, foreground, stroke variants)

**Typography:**
- `--font-sans` → Inter
- `--font-display` → Outfit
- `--font-mono` → JetBrains Mono

**Button styles:** Pre-defined CSS classes for ghost, outline, and primary button variants in `globals.css` (separate from the `Button` component which uses Tailwind classes).

**Spacing:** Custom `--spacing: 0.25rem` and container size scale.

### CSS Modules
- `header.module.css` — 480 lines, comprehensive header styling with responsive breakpoints, animations, scroll states
- `section-header.module.css` — 32 lines, grid layout for section headers (appears unused)

### Color scheme
Light mode only. `color-scheme: light` is set in `:root`. The internal color variable naming suggests dark mode support was planned but not implemented.

---

## 14. Assets

| Asset | Location | Notes |
|-------|----------|-------|
| `beyod-dev-logo.svg` | `src/assets/` | SVG logo file. **Typo in filename** ("beyod" instead of "beyond"). Never imported — the `Logo` component renders an inline SVG instead. |
| `file.svg` | `public/` | Default create-next-app asset. Unused. |
| `globe.svg` | `public/` | Default create-next-app asset. Unused. |
| `next.svg` | `public/` | Default create-next-app asset. Unused. |
| `vercel.svg` | `public/` | Default create-next-app asset. Unused. |
| `window.svg` | `public/` | Default create-next-app asset. Unused. |
| `favicon.ico` | `src/app/` | Default Next.js favicon. |
| Storyblok logos (12) | External CDN | Client/partner logos loaded from `a.storyblok.com` (Granola, Wispr Flow, Listen Labs, Obvious, Modal, USV, Replicate, Railway, Taskrabbit, Public, Wordsmith, Passionfroot). |

No custom images, icons (beyond Lucide), fonts (loaded from Google Fonts CDN), or animations exist as local assets.

---

## 15. User Flow

```
Visitor arrives at /
    │
    ├── Header (fixed): Logo, Nav [Product, Customers, Templates, Pricing], "Get Started" CTA
    │       │
    │       ├── Nav links → /product/, /customers/, /templates/, /pricing/ (ALL 404)
    │       └── "Get Started" → #contact (scrolls to Contact section)
    │
    ├── Hero: "Simple systems for your business" + "Book Your Free Checkup" CTA → #contact
    │
    ├── Logo Cloud: Scrolling marquee of logos
    │
    ├── Pain Points: "Sound Familiar?" — 6 problem cards
    │
    ├── Process: "From Messy to Managed in 4 Steps" — 4 process cards
    │
    ├── Contact: "Book Your Free Business Process Checkup" — heading only (NO FORM)
    │
    └── Footer: Links (Systems, Company, Resources, Contact, Socials, Legal)
            │
            ├── Resource links (Blog, Case Studies, FAQ) → # (nowhere)
            ├── Social links (Facebook, Instagram, LinkedIn, GitHub) → # (nowhere)
            └── Legal links (Privacy Policy, Terms of Service) → # (nowhere)
```

**The intended flow is:** Land → Understand the problem → See the process → Book a checkup. However, the booking mechanism (contact form) is not implemented, making the conversion funnel broken.

---

## 16. Architecture Overview

### Application Architecture
- **Next.js 16 App Router** with React Server Components by default
- **Single-page application** — only the root route `/` exists
- **No backend** — pure frontend with static content
- **Server/Client boundary:** Most components are server components. Only `Header` (scroll detection, mobile menu) and `Testimonials` (marquee pause) are client components (`"use client"`).

### Folder Organization
- `src/app/` — Next.js App Router (layout + single page)
- `src/components/layout/` — Structural components (header, footer, logo)
- `src/components/sections/` — Page section components (hero, pain points, etc.)
- `src/components/ui/` — Reusable UI primitives (button, container, section heading)
- `src/lib/` — Utility functions
- `src/assets/` — Static assets (unused logo SVG)

### Rendering Strategy
- All pages are **server-rendered** by default (RSC)
- Client components are minimized to interactive elements only
- Images use Next.js `Image` component with remote patterns for Storyblok CDN
- Fonts are optimized via `next/font/google` with CSS variable injection

### Reusable Patterns
- `Container` component for consistent max-width and padding
- `SectionHeading` component for consistent section headers with badges
- `cn()` utility for conditional class names
- CSS variables for theming (extensible to dark mode)
- CSS Modules for complex component-specific styles (header)

---

## 17. Current Project Status

### Overall Completion: ~25–30%

### Completed Areas
- ✅ Project scaffolding (Next.js 16, TypeScript, Tailwind v4)
- ✅ Responsive header with mobile menu
- ✅ Logo component
- ✅ Hero section (content, not image)
- ✅ Logo cloud marquee
- ✅ Pain points section
- ✅ Process section with visual illustrations
- ✅ Footer with link groups
- ✅ SEO metadata
- ✅ Design token system (CSS variables)
- ✅ Responsive layouts across all breakpoints

### Incomplete Areas
- ❌ Hero image/illustration (placeholder `<div>`)
- ❌ Contact form (heading only)
- ❌ CTA section component (exists but not rendered)
- ❌ Testimonials section component (exists but not rendered)
- ❌ All subpages (/product, /customers, /templates, /pricing)
- ❌ Footer link destinations (all `#`)
- ❌ Social media links (all `#`)
- ❌ Legal pages (Privacy Policy, Terms of Service)
- ❌ Blog, Case Studies, FAQ pages
- ❌ Any backend integration
- ❌ Dark mode (CSS variables suggest it was planned)

### Placeholder / Stub Items
- `Contact` section — heading with no form
- Hero image area — `<div>` with `bg-black/[0.04]` background
- All footer `href="#"` links
- All social media `href="#"` links

### Dead Code / Unused Files
- `src/components/sections/cta.tsx` — fully implemented but never imported
- `src/components/sections/testimonials.tsx` — fully implemented but never imported
- `src/components/ui/button.tsx` — fully implemented but never imported
- `src/components/layout/section-header.module.css` — defined but never imported
- `src/assets/beyod-dev-logo.svg` — asset with typo, never used
- `public/file.svg`, `public/globe.svg`, `public/window.svg` — unused defaults

### TODOs
- No `TODO`, `FIXME`, `HACK`, or `XXX` comments found in source code.

---

## 18. Recommendations

### Architecture
1. **Wire up unused components** — `Cta` and `Testimonials` sections are fully built but not rendered in `page.tsx`. Import them to complete the landing page.
2. **Use the `Button` component** — The `Button` UI primitive exists but all buttons are built with raw `<Link>` elements and inline/CSS-module classes. Migrating to the `Button` component would improve consistency.
3. **Remove dead code** — Delete or integrate unused files (`section-header.module.css`, `beyod-dev-logo.svg`, default public SVGs).

### Performance
4. **Hero placeholder** — Replace the empty `<div>` with an actual hero image or illustration to avoid layout shift and improve visual impact.
5. **Font loading** — Three Google Fonts are loaded (Inter, JetBrains Mono, Outfit). JetBrains Mono appears unused in any visible text. Consider removing it to reduce font payload.

### Maintainability
6. **Consistent styling approach** — The project mixes three styling approaches: Tailwind utility classes, CSS Modules, and global CSS classes (e.g., `button-primary`, `section-heading-title`). Standardize on one or two approaches.
7. **Content management** — All content is hardcoded. Consider a CMS (Storyblok is already used for logos) or at minimum extract content to JSON/constant files.

### Accessibility
8. **Header `aria` attributes** — The header uses `role="menubar"` and `role="menuitem"` correctly, but the mobile menu lacks focus trapping.
9. **Color contrast** — The `--color-blue-500: #202124` is effectively black, which may cause confusion in the codebase. Verify all text/background contrast ratios meet WCAG AA.

### Security
10. **No `.env` files** — No environment variables are used. If API integrations are added, ensure `.env*` is in `.gitignore` (it already is).

### Developer Experience
11. **Fix filename typo** — `beyod-dev-logo.svg` should be `beyond-dev-logo.svg`.
12. **Add lint scripts** — The `lint` script runs bare `eslint` without path arguments. Consider `next lint` for better integration.
13. **Add type checking script** — No `typecheck` script exists. Consider adding `"typecheck": "tsc --noEmit"`.

---

## 19. Missing Features

### Unimplemented Navigation Destinations
- `/product/` — Header nav link, page does not exist
- `/customers/` — Header nav link, page does not exist
- `/templates/` — Header nav link, page does not exist
- `/pricing/` — Header nav link, page does not exist

### Stub Sections
- **Contact form** (`src/components/sections/contact.tsx`) — Only renders `SectionHeading`, no form fields, no submission handling
- **Hero image** (`src/components/sections/hero.tsx:58`) — Empty `<div>` with background color as placeholder

### Unlinked Footer Items
- Blog → `href="#"`
- Case Studies → `href="#"`
- FAQ → `href="#"`
- Facebook → `href="#"`
- Instagram → `href="#"`
- LinkedIn → `href="#"`
- GitHub → `href="#"`
- Privacy Policy → `href="#"`
- Terms of Service → `href="#"`

### Components Built but Not Rendered
- `Cta` component (`src/components/sections/cta.tsx`) — 248 lines of fully implemented CTA section with hexagon SVG illustration
- `Testimonials` component (`src/components/sections/testimonials.tsx`) — 227 lines with animated marquee, 3 testimonial cards, play/pause control
- `Button` component (`src/components/ui/button.tsx`) — 48 lines with 5 variants and 3 sizes

### No Backend / Integration
- No API routes
- No contact form submission endpoint
- No analytics integration
- No CMS integration (despite Storyblok being used for logos)
- No email service integration
- No database

---

## 20. Conclusion

BeyondDev is an **early-stage Next.js 16 landing page** for a Filipino software development agency. The foundation is solid — clean TypeScript code, well-organized component structure, comprehensive design tokens, and responsive layouts. However, the project is approximately **25–30% complete** as a marketing site.

**Key issues:**
1. The conversion funnel is broken — the contact form (the primary CTA target) is not implemented.
2. Four header navigation links lead to nonexistent pages (404).
3. Two substantial section components (`Cta`, `Testimonials`) are fully built but never rendered.
4. All footer links are placeholder `href="#"`.

**Recommended next development priorities:**
1. Render the existing `Cta` and `Testimonials` components in `page.tsx`
2. Implement the contact form in the `Contact` section
3. Replace the hero placeholder with an actual image/illustration
4. Create the 4 subpages (`/product`, `/customers`, `/templates`, `/pricing`) or update nav links to anchor sections
5. Clean up unused files and fix the logo filename typo
