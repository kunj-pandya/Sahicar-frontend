# SahiCar — Buy Verified Used Cars in India

A used car marketplace built for the Indian pre-owned car ecosystem. Browse, filter, compare, and inspect verified cars — all without a page reload.

**Live Demo → [sahicar.vercel.app](https://sahicar.vercel.app)**

**Video Walkthrough (long - 25 mins) → [Click to watch](https://www.loom.com/share/13149cf6a0ba4cd3bab6b314eaa1d9fc)**

**Video Walkthrough (short - 5 mins) → [Click to watch](https://www.loom.com/share/4e7b16c3f0d74e5081029ac26c29317f)**

## Tech Stack

| Technology | Purpose | Selection Rationale |
| :--- | :--- | :--- |
| **Next.js (App Router)** | Core framework & Router | Provides Server Components, built-in layout routing, and static page generation (SSG) for fast rendering. |
| **Zustand** | Global State Management | Lightweight, fast, external state store that avoids React Context re-render performance bottlenecks. |
| **TypeScript** | Static Typing | Eliminates runtime type errors, improves developer ergonomics, and enforces strict compiler validation. |
| **Tailwind CSS** | Styling System | Utility-first styling with inline performance, customizable tokens, and ease of responsive layout development. |
| **Radix UI** | Accessible Primitives | Provides highly accessible, unstyled foundation primitives (Dialog, Slider, Checkbox) to style custom elements. |
| **Lucide Icons** | Visual Assets | A clean and consistent modern vector icon pack. |


## Project Architecture

```text
car-listing-frontend/
├── public/                 # Static assets & public robots.txt
├── src/
│   ├── app/                # Next.js App Router (RSC-by-default)
│   │   ├── cars/
│   │   │   ├── [slug]/
│   │   │   │   ├── loading.tsx     # Skeleton shimmer for details page
│   │   │   │   └── page.tsx        # Car details page (Static Site Generation)
│   │   │   └── page.tsx            # Live listing page with filter/sort system
│   │   ├── error.tsx               # Root error boundary page
│   │   ├── globals.css             # Tailwind imports & custom CSS slider rules
│   │   ├── layout.tsx              # Root HTML & structural layout wrapper
│   │   ├── not-found.tsx           # Global 404 page
│   │   ├── page.tsx                # Homepage redirecting to listings
│   │   └── sitemap.ts              # Dynamic sitemap index generator
│   ├── components/         # Component Layer
│   │   ├── cars/               # Car components (Grid, Card, Search, Filter Sidebar)
│   │   ├── common/             # Layout structure (Header, Footer)
│   │   └── ui/                 # Accessible Radix primitives
│   ├── data/
│   │   └── cars.ts             # Hardcoded static inventory source records
│   ├── hooks/              # Custom React Hooks
│   │   ├── use-debounce.ts        # Input debounce hook
│   │   ├── use-filtered-cars.ts   # Pure computing filter sync hook
│   │   └── use-infinite-scroll.ts # Callback ref IntersectionObserver
│   │   └── use-url-filters.ts 
│   │   └── use-share-car.ts   
│   ├── lib/                # Utility modules & helpers
│   │   ├── car-utils.ts           # Pure filter functions & default constants
│   │   ├── formatters.ts          # Price, km, and EMI formatting rules
│   │   └── utils.ts               # Tailind merges helper (cn)
│   └── types/
│       └── car-types.ts        # Strict TypeScript domain interfaces
├── tsconfig.json           # Compiler rules
└── package.json            # Target dependencies
```

## Architecture Overview

SahiCar follows a layered architecture where UI components remain focused on presentation, hooks coordinate application behavior, Zustand manages global state, and utility modules contain pure business logic.

### Flow

```text
User Interaction
       │
       ▼
React Components
       │
       ▼
Custom Hooks
       │
       ▼
Zustand Store
       │
       ▼
Filtering / Sorting Utilities
       │
       ▼
Rendered Car Results
```

### Rendering Strategy

| Route | Strategy | Purpose |
|---------|---------|---------|
| `/cars` | CSR | Interactive filtering and sorting |
| `/cars/[slug]` | SSG | SEO and fast page loads |
| `/404` | Static | Error handling |

### State Flow

```text
URL Parameters
      ▲
      │
      ▼
useUrlFilters
      │
      ▼
Zustand Store
      │
      ▼
useFilteredCars
      │
      ▼
Car Grid
```

## Key Decisions
 
**Zustand over Context API** — Filter state changes on every checkbox click and slider move. React Context would re-render the entire tree on each update. Zustand's selector pattern lets each component subscribe to only what it needs.
 
**URL-based filter state** — Filters live in the Zustand store and the URL simultaneously. On mount, the URL is read into the store. On filter change, the URL is silently updated. This makes filters persist on refresh and shareable via link without routing.
 
**Pure filter function** — All filtering and sorting logic lives in `lib/filterAndSortCars.ts` as a pure function. No side effects, no React dependency. Easy to unit test, easy to replace with an API call later.
 
**Pagination over infinite scroll** — Used car browsing is intentional. Buyers compare options, go back, re-read specs. Pagination keeps your place. It also maps cleanly to URL-based state (`?page=2`). Infinite scroll makes the URL meaningless.
 
**Dual-layer skeletons** — On first load, both the sidebar and grid show skeletons. On subsequent filter changes, only the grid shimmers. The sidebar stays interactive so users can keep adjusting without interruption.
 
**SSG for detail pages** — Each car detail page is pre-rendered at build time. Instant load, CDN-cacheable, good for SEO. `dynamicParams = false` returns a 404 for unknown slugs.
 

## Folder Conventions
 
- `components/ui/` — no domain knowledge, no store imports
- `components/cars/` — domain components, can read from store
- `lib/` — pure functions only
- `hooks/` — side effects and store coordination
- `store/` — Zustand slices

## Performance & SEO

* **SSG Static Pre-rendering**: Individual car detail pages use `generateStaticParams` to build HTML pages at build time, improving Largest Contentful Paint (LCP) speeds.
* **Image Optimization**: Native layout handling reduces layout shifts (CLS) and matches responsive sizes.
* **SEO Metadata**: Strict dynamic metadata generation via `generateMetadata()` dynamically indexes page titles, descriptions, keywords, and OpenGraph values.


## Git Workflow

main → staging → dev → feat/feature-name

Commit convention: [type]: message