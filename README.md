# Apex Dashboard

A modern, production-ready admin dashboard template built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Dashboard Overview** — Stats cards, revenue chart, traffic breakdown, goals progress, recent orders, and activity feed
- **Analytics** — Detailed chart pages with time-period tabs (7d / 30d / 90d / 1y)
- **Full CRUD** — Orders and Products with list, detail, create, edit, and delete flows
- **Customer Management** — Searchable, sortable customer table with status filters
- **Billing & Invoices** — Plan management, payment history, usage meters, invoice status tabs
- **Notifications Center** — Tabbed view (All / Unread / Read) with mark-as-read
- **Settings** — Profile, preferences, and appearance tabs with theme selector
- **Command Palette** — Cmd+K (Ctrl+K) fuzzy search across all pages and actions
- **Auth Pages** — Login, Register, and Forgot Password (UI templates, no backend)
- **Documentation Site** — Built-in `/docs` with installation, theming, components, and deployment guides
- **Dark Mode** — Dark, light, and system themes with localStorage persistence
- **Fully Responsive** — Collapsible sidebar, mobile overlay menu, responsive grids
- **Accessible** — Skip-to-content link, ARIA attributes, focus management, semantic HTML
- **25+ UI Components** — Vendored shadcn/ui primitives you own and can customize

## Tech Stack

| Category        | Technology                  |
| --------------- | --------------------------- |
| Framework       | Next.js 16 (App Router)     |
| UI Library      | React 19                    |
| Language        | TypeScript 5 (strict mode)  |
| Styling         | Tailwind CSS v4             |
| Components      | shadcn/ui (vendored source) |
| Charts          | Recharts                    |
| Icons           | Lucide React                |
| Forms           | React Hook Form + Zod       |
| UI Primitives   | Radix UI                    |
| Command Palette | cmdk                        |
| Toasts          | Sonner                      |

## Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd apex-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start dev server with hot reload  |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint                        |

## Project Structure

```
src/
├── app/
│   ├── (auth)/             # Auth layout (login, register, forgot-password)
│   ├── (dashboard)/        # Dashboard layout with sidebar + header
│   │   ├── analytics/
│   │   ├── billing/
│   │   ├── customers/
│   │   ├── invoices/
│   │   ├── notifications/
│   │   ├── orders/         # Full CRUD (list, [id], new, [id]/edit)
│   │   ├── products/       # Full CRUD (list, [id], new, [id]/edit)
│   │   ├── settings/
│   │   └── support/
│   ├── docs/               # Documentation site (8 pages)
│   └── layout.tsx          # Root layout with ThemeProvider
├── components/
│   ├── dashboard/          # Sidebar, Header, Shell, Charts, Widgets
│   ├── shared/             # DataTable, PageHeader, ConfirmDialog, EmptyState
│   └── ui/                 # 25+ shadcn/ui primitives
├── lib/
│   ├── data/               # Mock data layer with CRUD helpers
│   ├── navigation.ts       # Centralized route definitions
│   ├── docs-navigation.ts  # Docs sidebar structure
│   └── utils.ts            # cn() utility
```

## Customization

### Theming

Colors use **OKLCh** format defined as CSS custom properties in `src/app/globals.css`. To change the primary color, update the hue value:

```css
/* src/app/globals.css */
:root {
  --primary: oklch(0.55 0.19 160);   /* Change 160 to your desired hue */
}
```

Semantic tokens available: `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--success`, `--warning`, plus `--chart-1` through `--chart-5`.

### Adding Pages

1. Create a file in `src/app/(dashboard)/your-page/page.tsx`
2. Add a navigation entry in `src/lib/navigation.ts`
3. The sidebar and command palette update automatically

### Adding Components

```bash
npx shadcn@latest add accordion
```

This scaffolds the component source in `src/components/ui/` — you own the code.

## Deployment

### Vercel (Recommended)

Push to GitHub and import the repository on [vercel.com](https://vercel.com). Zero configuration needed.

### Self-Hosted

```bash
npm run build
npm run start
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
```

## Documentation

Visit `/docs` in the running app for comprehensive documentation covering:

- Getting Started & Installation
- Folder Structure
- Theming & Color System
- Component Reference (25+ components)
- Adding New Pages
- Deployment Options
- Changelog

## License

MIT
