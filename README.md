# Apex Dashboard

A modern, production-ready admin dashboard template built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**. Over 50 pages, 10 chart types, full CRUD, drag-and-drop, and a live theme customizer -- everything you need to ship a real admin panel.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Features at a Glance

- 5 dashboard variants (Overview, Analytics, eCommerce, CRM, SaaS)
- 6 app pages (Chat, Mail, File Manager, Kanban, Calendar, Wizard)
- Full CRUD for Orders, Products, and Customers
- Invoices, Billing, Pricing, Profile, Support, Notifications, and Settings pages
- 8 auth/utility pages (Sign In, Sign Up, Forgot/Reset Password, 2FA, Email Verification, Lock Screen, and more)
- 10 Recharts chart types on a dedicated Charts page
- Live theme customizer with 6 color presets, 3 density levels, and RTL support
- 3 layout options: sidebar, horizontal top-nav, and boxed container
- Dark / Light / System themes with localStorage persistence
- Command Palette (Cmd+K / Ctrl+K) with fuzzy search across all pages
- Fully responsive with collapsible sidebar and mobile overlay menu
- Accessible: skip-to-content link, ARIA attributes, focus management, semantic HTML
- Unit tests (Vitest) and E2E tests (Playwright) included
- Built-in `/docs` documentation site

---

## Dashboard Pages

### Main Dashboard

Stats cards with sparkline charts, revenue chart (area/bar tab switching), traffic sources pie chart, goals progress bars, recent orders table, and activity feed timeline.

### Analytics

Line and bar charts with time-period filters (7d / 30d / 90d / 1y), date range picker, top pages ranking, and geographic traffic table.

### eCommerce

Sales statistics cards, daily sales chart, order status donut chart, top products list with sparkline trends, and category breakdown bars.

### CRM

Pipeline value overview, deal stages donut chart, lead sources breakdown, and a filterable deals table.

### SaaS

MRR/ARR growth metrics, subscription plans donut chart, user growth trends, and churn rate tracking.

---

## App Pages

### Chat

Real-time messaging UI with a scrollable conversation list, message bubbles, emoji picker, and file attachment support.

### Mail / Email

Inbox view with folder navigation (Inbox, Sent, Drafts, Trash), compose dialog, and search functionality.

### File Manager

Grid and list view modes, file upload dialog with drag-and-drop, and storage usage statistics.

### Kanban Board

Drag-and-drop task management powered by `@hello-pangea/dnd` with configurable columns and task cards.

### Calendar

Monthly calendar view with event creation, editing, and deletion.

### Wizard

Multi-step form with per-step validation using React Hook Form and Zod.

---

## Commerce Pages

### Orders

Full CRUD with TanStack Table -- sorting, filtering, pagination, CSV export, and responsive mobile card view. List, detail, create, and edit routes.

### Products

Product catalog with grid and list views, plus full create/edit/delete operations. List, detail, create, and edit routes.

### Customers

Searchable, sortable customer table with status filters and expandable detail panels.

### Invoices

Status-based invoice listing with tab navigation (All, Paid, Pending, Overdue).

---

## Other Pages

| Page | Description |
| --- | --- |
| **Billing** | Plan management, payment method cards, payment history, and usage meters |
| **Notifications** | Tabbed view (All / Unread / Read) with mark-as-read and bulk actions |
| **Settings** | Profile editing, preferences, and appearance tabs with theme selector |
| **Profile** | User profile page with overview, activity timeline, and connections tabs |
| **Support** | Help center with searchable FAQ accordion |
| **Pricing** | Plan comparison cards with feature lists and CTA buttons |
| **Forms** | Form elements and validation patterns |

---

## Auth & Utility Pages

All auth pages are standalone UI templates (no backend required):

- **Sign In** -- Email/password login form
- **Sign Up** -- Registration form with validation
- **Forgot Password** -- Password recovery request
- **Reset Password** -- New password entry with token
- **Two-Factor Authentication** -- OTP input with `input-otp`
- **Email Verification** -- Verification code entry
- **Lock Screen** -- Session lock with avatar and password
- **500 Error** -- Server error page
- **403 Forbidden** -- Access denied page
- **Coming Soon** -- Pre-launch placeholder with countdown
- **Maintenance** -- Scheduled downtime page

---

## Charts Page

A dedicated charts showcase featuring 10 Recharts chart types -- no additional charting dependencies needed:

- Area Chart
- Bar Chart
- Line Chart
- Pie / Donut Chart
- Radar Chart
- Radial Bar / Gauge Chart
- Treemap Chart
- Scatter Chart
- Composed / Mixed Chart
- Sparkline Charts (used across dashboard cards)

---

## Theme Customizer

A slide-out drawer panel for live theme configuration:

- **6 Color Presets** -- Default/Teal, Ocean, Sunset, Forest, Berry, Slate
- **3 Density Options** -- Compact, Default, Comfortable
- **Theme Mode** -- Dark, Light, System (auto-detects OS preference)
- **RTL Toggle** -- Switch to right-to-left layout instantly
- **Reset to Defaults** -- One-click restore

All changes apply instantly and persist via localStorage.

---

## Layout Options

- **Sidebar Layout** (default) -- Fixed left navigation, collapsible with icon-only mode
- **Horizontal Top-Nav Layout** -- Navigation bar across the top of the page
- **Fluid Container** -- Full-width content area
- **Boxed Container** -- Max-width constrained content area

Switch between layouts from the Theme Customizer or programmatically.

---

## RTL Support

Full right-to-left layout support built in:

- Toggle RTL from the Theme Customizer
- All components use CSS logical properties (`margin-inline-start` instead of `margin-left`, etc.)
- Layout, navigation, and content all mirror correctly

---

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router, static export) |
| UI Library | React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 with OKLCh color tokens |
| Components | shadcn/ui (33 vendored primitives) |
| Charts | Recharts 3 (10 chart types) |
| Data Tables | TanStack Table |
| Forms | React Hook Form + Zod |
| Drag & Drop | @hello-pangea/dnd |
| Animations | Framer Motion |
| Icons | Lucide React |
| Command Palette | cmdk |
| Toasts | Sonner |
| Date Utilities | date-fns, react-day-picker |
| UI Primitives | Radix UI |
| Color Picker | react-colorful |
| File Upload | react-dropzone |
| Phone Input | libphonenumber-js |
| Unit Testing | Vitest + Testing Library |
| E2E Testing | Playwright |

---

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

Open [http://localhost:3737](http://localhost:3737) to see the dashboard.

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server (port 3737) |
| `npm run build` | Production build (static export to `out/`) |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint (flat config, v9) |
| `npm run test` | Vitest in watch mode |
| `npm run test:run` | Vitest single run |
| `npm run test:e2e` | Playwright E2E tests |
| `npm run test:e2e:ui` | Playwright UI mode |

---

## Testing

### Unit Tests (Vitest)

14 tests across 3 files covering utility functions and component rendering:

```bash
npm run test        # Watch mode
npm run test:run    # Single run (CI-friendly)
```

### E2E Tests (Playwright)

4 smoke tests validating page loads, navigation, and critical user flows:

```bash
npm run test:e2e      # Headless run
npm run test:e2e:ui   # Interactive UI mode
```

---

## Project Structure

```text
apex-dashboard/
├── e2e/                          # Playwright E2E tests
│   ├── smoke.spec.ts
│   └── setup.ts
├── public/                       # Static assets
├── src/
│   ├── app/
│   │   ├── (auth)/               # Auth layout group
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── forgot-password/
│   │   │   ├── reset-password/
│   │   │   ├── two-factor/
│   │   │   ├── verify-email/
│   │   │   └── lock-screen/
│   │   ├── (dashboard)/          # Dashboard layout with sidebar + header
│   │   │   ├── page.tsx          # Main dashboard
│   │   │   ├── analytics/
│   │   │   ├── ecommerce/
│   │   │   ├── crm/
│   │   │   ├── saas/
│   │   │   ├── charts/
│   │   │   ├── chat/
│   │   │   ├── mail/
│   │   │   ├── files/
│   │   │   ├── kanban/
│   │   │   ├── calendar/
│   │   │   ├── wizard/
│   │   │   ├── forms/
│   │   │   ├── orders/           # CRUD: list, [id], new, [id]/edit
│   │   │   ├── products/         # CRUD: list, [id], new, [id]/edit
│   │   │   ├── customers/
│   │   │   ├── invoices/
│   │   │   ├── billing/
│   │   │   ├── notifications/
│   │   │   ├── settings/
│   │   │   ├── profile/
│   │   │   ├── pricing/
│   │   │   └── support/
│   │   ├── 403/                  # Forbidden error page
│   │   ├── 500/                  # Server error page
│   │   ├── coming-soon/
│   │   ├── maintenance/
│   │   ├── docs/                 # Built-in documentation (7 sections)
│   │   │   ├── getting-started/
│   │   │   ├── folder-structure/
│   │   │   ├── theming/
│   │   │   ├── components/
│   │   │   ├── adding-pages/
│   │   │   ├── deployment/
│   │   │   └── changelog/
│   │   ├── globals.css           # OKLCh color tokens, light/dark themes
│   │   └── layout.tsx            # Root layout with ThemeProvider
│   ├── components/
│   │   ├── dashboard/            # Sidebar, Header, TopNav, ThemeCustomizer,
│   │   │                         # Shell, Charts, Stats, Widgets
│   │   ├── shared/               # DataTable, PageHeader, ConfirmDialog,
│   │   │                         # EmptyState, DateRangePicker
│   │   └── ui/                   # 33 shadcn/ui primitives
│   ├── lib/
│   │   ├── data/                 # Mock data layer with CRUD helpers
│   │   ├── navigation.ts         # Centralized route definitions
│   │   ├── docs-navigation.ts    # Docs sidebar structure
│   │   └── utils.ts              # cn() utility (clsx + tailwind-merge)
│   └── test/                     # Vitest setup
│       └── vitest.d.ts
├── vitest.config.ts
├── playwright.config.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── components.json               # shadcn/ui config
└── package.json
```

---

## Customization

### Theming

Colors use **OKLCh** format defined as CSS custom properties in `src/app/globals.css`. To change the primary color, update the hue value:

```css
/* src/app/globals.css */
:root {
  --primary: oklch(0.55 0.19 160);   /* Change 160 to your desired hue */
}
```

Semantic tokens available: `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--success`, `--warning`, plus `--chart-1` through `--chart-5` and `--sidebar-*` tokens.

Or use the built-in Theme Customizer (gear icon in the header) to switch between the 6 color presets without editing CSS.

### Adding Pages

1. Create a file in `src/app/(dashboard)/your-page/page.tsx`
2. Add a navigation entry in `src/lib/navigation.ts`
3. The sidebar, top-nav, and command palette update automatically

### Adding Components

```bash
npx shadcn@latest add accordion
```

This scaffolds the component source in `src/components/ui/` -- you own the code and can modify it freely.

---

## Deployment

### Static Export (Cloudflare Pages, Netlify, etc.)

The project is configured for static export (`output: "export"` in `next.config.ts`). Build and deploy the `out/` directory:

```bash
npm run build
# Deploy the out/ directory to any static host
```

### Vercel

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

---

## Documentation

Visit `/docs` in the running app for comprehensive documentation covering:

- Getting Started and Installation
- Folder Structure
- Theming and Color System
- Component Reference (33 components)
- Adding New Pages
- Deployment Options
- Changelog

---

## License

MIT
