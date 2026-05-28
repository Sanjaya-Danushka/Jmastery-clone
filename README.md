# JS Mastery Resources

A modern resource discovery platform built with Next.js 16, Sanity CMS, and Tailwind CSS. Browse curated tutorials, cheatsheets, and tools for web development.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **CMS:** Sanity v5 (structured content management)
- **Styling:** Tailwind CSS v4, shadcn/ui, tw-animate-css
- **Language:** TypeScript
- **Testing:** Vitest, Testing Library

## Features

- Browse resources by category (Frontend, Backend, Next 13, Fullstack)
- Full-text search with debounced input
- Category filter with URL-based query params
- Resource detail pages with direct download links
- Sanity CMS for content management
- Responsive dark-mode design
- Loading skeletons for better UX

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Project Structure

```
app/                        # Next.js App Router pages
  (root)/
    (home)/page.tsx         # Homepage with search, filters, playlists
    resource/[id]/page.tsx  # Resource detail page
  layout.tsx                # Root layout with ThemeProvider
  not-found.tsx             # Custom 404 page
components/
  ResourceCard.tsx          # Card component for resources
  SearchForm.tsx            # Debounced search input
  Filters.tsx               # Category filter pills
  StatsBar.tsx              # Platform metrics
  CategoryShowcase.tsx      # Category cards
  CTABanner.tsx             # Call-to-action section
  Navbar.tsx / Footer.tsx   # Layout shell
sanity/
  actions.ts                # Sanity data fetching
  schemas/                  # Sanity document schemas
  lib/                      # Sanity client & image helpers
```

## Testing

```bash
npm test                    # Run all tests
npm run test:watch          # Watch mode
```

## Sanity Studio

Access the CMS at `/studio` route to manage resources and playlists.

## Scripts

| Command            | Description              |
| ------------------ | ------------------------ |
| `npm run dev`      | Start dev server         |
| `npm run build`    | Production build         |
| `npm run start`    | Start production server  |
| `npm run lint`     | Run ESLint               |
| `npm run format`   | Format with Prettier     |
| `npm test`         | Run tests                |
| `npm run typecheck`| TypeScript type checking |
