# Changelog

All notable changes to Apex Dashboard are documented here.

## v1.0.0 — February 2026

Initial release.

### Dashboard

- Overview page with stats cards, revenue chart (area/bar tabs), traffic pie chart, goals progress bars, recent orders table, and activity feed
- Analytics page with line and bar charts, time-period tabs (7d / 30d / 90d / 1y)
- Collapsible sidebar with icon-only mode and mobile overlay
- Header with command palette trigger, theme toggle, notifications dropdown, and user menu

### CRUD Pages

- **Orders** — List with status filter tabs, DataTable (search, sort, pagination), detail view, create form, edit form, delete confirmation
- **Products** — List with status + category filters, DataTable, detail view with pricing/inventory cards, create/edit forms, delete confirmation
- **Customers** — Read-only list with status filters, searchable DataTable with avatar initials

### Additional Pages

- **Billing** — Current plan card, payment method, usage meters (API calls, storage, team members), billing history table
- **Invoices** — DataTable with status tabs (All / Paid / Pending / Overdue), download actions
- **Notifications** — Tabbed view (All / Unread / Read), mark-as-read, mark-all-as-read, empty states
- **Settings** — Profile form, notification preferences (switches), appearance tab with theme selector
- **Support** — FAQ accordion, contact form

### Authentication

- Login page with email/password, social login buttons (Google, GitHub), remember me
- Register page with form validation (React Hook Form + Zod), terms checkbox
- Forgot Password page with email input

### Command Palette

- Cmd+K (Ctrl+K) fuzzy search via cmdk
- Pages, Actions (new order, toggle theme), and Quick Links groups
- Integrated with header search button

### Documentation Site (`/docs`)

- Dedicated layout with top nav and sidebar
- 8 pages: Introduction, Getting Started, Folder Structure, Theming, Adding Pages, Components (25+ referenced), Deployment, Changelog

### UI Components

- 25+ vendored shadcn/ui components: Button, Card, Dialog, Table, Tabs, Badge, Input, Select, Textarea, Checkbox, Switch, Label, Radio Group, Form, Separator, Skeleton, Sheet, Tooltip, Popover, Breadcrumb, Dropdown Menu, Command, Avatar, Progress, Sonner (toast)
- Shared components: DataTable, PageHeader, ConfirmDialog, EmptyState

### Theming

- Dark, light, and system modes with localStorage persistence
- OKLCh color tokens for perceptually uniform colors
- Semantic token system: primary, secondary, muted, accent, destructive, success, warning
- 5-color chart palette
- Dark sidebar variant in both light and dark modes

### Quality

- Loading skeletons for dashboard, orders, and products routes
- Error boundaries at dashboard and global levels
- Skip-to-content accessibility link
- ARIA attributes on navigation elements
- Zero ESLint errors and warnings
- Clean production build (26 routes)
