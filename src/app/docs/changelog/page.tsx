import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ChangelogPage() {
  return (
    <div className="space-y-8">
      {/* Page title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Changelog</h1>
        <p className="text-sm text-muted-foreground">
          A record of all notable changes to Apex Dashboard.
        </p>
      </div>

      {/* v1.0.0 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">v1.0.0</h2>
          <Badge variant="default">Latest</Badge>
          <span className="text-sm text-muted-foreground">
            February 2026
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          Initial release of Apex Dashboard.
        </p>

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Dashboard</h3>
          <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
            <li>Overview page with stats cards, revenue chart, traffic pie chart, and goals progress</li>
            <li>Analytics page with detailed chart breakdowns</li>
            <li>Collapsible sidebar with icon-only mode</li>
            <li>Responsive header with search, notifications, and user menu</li>
          </ul>

          <h3 className="text-sm font-medium">Pages</h3>
          <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
            <li>Orders page with data table, sorting, filtering, and CRUD operations</li>
            <li>Products catalog with grid and list views</li>
            <li>Customers management with detail panels</li>
            <li>Billing page with plan selection and payment history</li>
            <li>Invoices list with status badges</li>
            <li>Notifications center with read/unread states</li>
            <li>Settings page with profile, appearance, and notification preferences</li>
            <li>Help and support page</li>
          </ul>

          <h3 className="text-sm font-medium">Authentication</h3>
          <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
            <li>Sign-in page with email/password form and social login buttons</li>
            <li>Sign-up page with form validation using React Hook Form and Zod</li>
          </ul>

          <h3 className="text-sm font-medium">UI Components</h3>
          <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
            <li>25+ vendored shadcn/ui components (Button, Card, Dialog, Table, Tabs, etc.)</li>
            <li>Command palette (Cmd+K) for quick navigation</li>
            <li>Toast notifications via Sonner</li>
            <li>Confirm dialog for destructive actions</li>
          </ul>

          <h3 className="text-sm font-medium">Theming</h3>
          <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
            <li>Dark, light, and system theme modes</li>
            <li>OKLCh color tokens for perceptually uniform colors</li>
            <li>Semantic color system (primary, success, warning, destructive)</li>
            <li>5-color chart palette</li>
            <li>Custom dark sidebar in both light and dark modes</li>
          </ul>

          <h3 className="text-sm font-medium">Tech Stack</h3>
          <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
            <li>Next.js 16 with App Router</li>
            <li>React 19</li>
            <li>TypeScript 5 with strict mode</li>
            <li>Tailwind CSS v4</li>
            <li>Recharts for data visualization</li>
            <li>Lucide React icons</li>
            <li>React Hook Form + Zod for form validation</li>
            <li>Radix UI primitives</li>
          </ul>

          <h3 className="text-sm font-medium">Documentation</h3>
          <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
            <li>Built-in documentation site at /docs</li>
            <li>Installation guide, folder structure, theming, components, and deployment docs</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <section className="space-y-3 border-t pt-6">
        <p className="text-sm text-muted-foreground">
          Back to the{" "}
          <Link
            href="/docs"
            className="font-medium text-primary hover:underline"
          >
            Introduction
          </Link>{" "}
          or view the{" "}
          <Link
            href="/docs/deployment"
            className="font-medium text-primary hover:underline"
          >
            Deployment Guide
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
