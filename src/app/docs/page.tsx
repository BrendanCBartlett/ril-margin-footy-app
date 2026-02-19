import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function DocsIntroductionPage() {
  return (
    <div className="space-y-8">
      {/* Page title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Introduction</h1>
        <p className="text-sm text-muted-foreground">
          A modern, production-ready admin dashboard built with the latest web
          technologies.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What is Apex Dashboard?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Apex Dashboard is a feature-rich admin template designed for building
          internal tools, SaaS applications, and back-office dashboards. It
          provides a solid foundation with pre-built components, pages, and
          patterns so you can focus on shipping your product instead of building
          boilerplate UI.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Features</h2>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Next.js 16 + React 19</strong>{" "}
              &mdash; App Router with server and client components
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Tailwind CSS v4</strong>{" "}
              &mdash; Utility-first styling with OKLCh color tokens
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">shadcn/ui Components</strong>{" "}
              &mdash; Vendored, accessible, and fully customizable primitives
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Dark / Light / System Theme</strong>{" "}
              &mdash; Seamless theme switching with persistent preference
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Command Palette (Cmd+K)</strong>{" "}
              &mdash; Quick navigation across all pages
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Full CRUD Examples</strong>{" "}
              &mdash; Orders, products, and customer management pages
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Auth Page Templates</strong>{" "}
              &mdash; Sign-in and sign-up pages with form validation
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Responsive Design</strong>{" "}
              &mdash; Collapsible sidebar and mobile-first layout
            </span>
          </li>
        </ul>
      </section>

      {/* Quick Start */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Quick Start</h2>
        <p className="text-sm text-muted-foreground">
          Get up and running in under a minute:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>{`git clone https://github.com/colorlib/apex-dashboard.git
cd apex-dashboard
npm install
npm run dev`}</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          Then open{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            http://localhost:3000
          </code>{" "}
          in your browser.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Next.js 16</Badge>
          <Badge variant="secondary">React 19</Badge>
          <Badge variant="secondary">TypeScript 5</Badge>
          <Badge variant="secondary">Tailwind CSS v4</Badge>
          <Badge variant="secondary">Recharts</Badge>
          <Badge variant="secondary">Lucide Icons</Badge>
          <Badge variant="secondary">Radix UI</Badge>
          <Badge variant="secondary">React Hook Form</Badge>
          <Badge variant="secondary">Zod</Badge>
          <Badge variant="secondary">cmdk</Badge>
        </div>
      </section>

      {/* Next steps */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Next Steps</h2>
        <p className="text-sm text-muted-foreground">
          Ready to dive in? Continue with the{" "}
          <Link
            href="/docs/getting-started"
            className="font-medium text-primary hover:underline"
          >
            Installation Guide
          </Link>{" "}
          for detailed setup instructions, or explore the{" "}
          <Link
            href="/docs/folder-structure"
            className="font-medium text-primary hover:underline"
          >
            Folder Structure
          </Link>{" "}
          to understand the project layout.
        </p>
      </section>
    </div>
  );
}
