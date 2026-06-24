# mCash — Rewards Dashboard

A pixel-close rebuild of the mCash rewards dashboard, built with the Next.js App Router. All data is local mock data — no backend required.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (design tokens in `tailwind.config.ts`)
- **lucide-react** icons
- Responsive desktop-first layout

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:3000`).

## Routes

| Route          | Screen                                            |
| -------------- | ------------------------------------------------- |
| `/`            | All Offers dashboard (promo, finance & compact)   |
| `/login`       | Auth modal (Sign Up)                              |
| `/leaderboard` | Top earners leaderboard                           |
| `/payout`      | Balance, payout methods & transaction history     |

## Project structure

```
app/
  layout.tsx          Root layout + Inter font
  globals.css         Tailwind + base styles
  page.tsx            All Offers
  login/page.tsx      Auth modal
  leaderboard/page.tsx
  payout/page.tsx
components/            Reusable UI (Sidebar, Topbar, cards, table, ...)
lib/mock-data.ts       All mock content + types
```

## Design tokens

- Brand: `#5B5CFF` with a purple-blue gradient (`bg-brand-gradient`)
- Sidebar width `260px`, top bar height `76px`, main padding `~36px`
- White cards, light gray borders, rounded corners, soft shadows

> Banners and offer artwork use gradient placeholders; avatars use remote
> Unsplash images rendered via `next/image` with `unoptimized`.
# Mcash
