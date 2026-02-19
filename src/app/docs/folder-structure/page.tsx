import Link from "next/link";

export default function FolderStructurePage() {
  return (
    <div className="space-y-8">
      {/* Page title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Folder Structure</h1>
        <p className="text-sm text-muted-foreground">
          An overview of the project directory layout and what each part is
          responsible for.
        </p>
      </div>

      {/* Directory tree */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Project Tree</h2>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm leading-relaxed">
          <code>{`apex-dashboard/
├── public/                     # Static assets (favicon, images)
├── src/
│   ├── app/
│   │   ├── (auth)/             # Auth pages (sign-in, sign-up)
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── (dashboard)/        # Dashboard routes (inherits sidebar layout)
│   │   │   ├── analytics/
│   │   │   ├── billing/
│   │   │   ├── customers/
│   │   │   ├── invoices/
│   │   │   ├── notifications/
│   │   │   ├── orders/
│   │   │   ├── products/
│   │   │   ├── settings/
│   │   │   ├── support/
│   │   │   ├── layout.tsx      # Dashboard shell (sidebar + header)
│   │   │   └── page.tsx        # Home / overview
│   │   ├── docs/               # Documentation site (this section)
│   │   ├── fonts/              # Local font files (Geist)
│   │   ├── globals.css         # Tailwind config + CSS custom properties
│   │   ├── layout.tsx          # Root layout (ThemeProvider, fonts)
│   │   └── not-found.tsx       # Custom 404 page
│   ├── components/
│   │   ├── dashboard/          # Dashboard-specific components
│   │   │   ├── sidebar.tsx
│   │   │   ├── sidebar-context.tsx
│   │   │   ├── header.tsx
│   │   │   ├── dashboard-shell.tsx
│   │   │   ├── stats-cards.tsx
│   │   │   ├── revenue-chart.tsx
│   │   │   └── ...
│   │   ├── ui/                 # shadcn/ui primitives (vendored)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── table.tsx
│   │   │   └── ...
│   │   └── theme-provider.tsx  # Dark/light/system theme context
│   └── lib/
│       ├── navigation.ts       # Dashboard sidebar nav config
│       ├── docs-navigation.ts  # Docs sidebar nav config
│       └── utils.ts            # cn() helper (clsx + tailwind-merge)
├── components.json             # shadcn/ui CLI configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── package.json`}</code>
        </pre>
      </section>

      {/* Explanation */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Key Directories</h2>

        <h3 className="text-sm font-medium">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            src/app/(dashboard)/
          </code>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All dashboard pages live inside this route group. The parentheses
          tell Next.js this is a grouping folder &mdash; it does not appear in
          the URL. Every page here automatically inherits the dashboard layout
          (sidebar, header, and content shell).
        </p>

        <h3 className="text-sm font-medium">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            src/app/(auth)/
          </code>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Authentication pages (sign-in, sign-up) have their own layout
          without the dashboard chrome. They use a centered card design.
        </p>

        <h3 className="text-sm font-medium">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            src/app/docs/
          </code>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The documentation site (what you are reading now). It lives outside
          the route groups and has its own dedicated layout with a sidebar
          navigation.
        </p>

        <h3 className="text-sm font-medium">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            src/components/ui/
          </code>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Vendored shadcn/ui components. These are not installed from a
          package &mdash; they are source files you own and can customize
          freely. Each component uses CVA for variants and the{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            cn()
          </code>{" "}
          utility for class merging.
        </p>

        <h3 className="text-sm font-medium">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            src/components/dashboard/
          </code>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Higher-level components that compose the dashboard UI: the sidebar,
          header, stats cards, charts, data tables, and activity feeds.
        </p>

        <h3 className="text-sm font-medium">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            src/lib/
          </code>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Shared utilities and configuration. The{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            navigation.ts
          </code>{" "}
          file defines all sidebar links. The{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            utils.ts
          </code>{" "}
          file exports the{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            cn()
          </code>{" "}
          class-merging function used throughout the project.
        </p>
      </section>

      {/* Path aliases */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Path Aliases</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The project uses a single path alias configured in{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            tsconfig.json
          </code>
          :
        </p>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>{`"@/*" → "src/*"

// Usage:
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";`}</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          All imports throughout the project use this alias instead of relative
          paths.
        </p>
      </section>

      {/* Next steps */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Next Steps</h2>
        <p className="text-sm text-muted-foreground">
          Learn how to customize the look and feel in the{" "}
          <Link
            href="/docs/theming"
            className="font-medium text-primary hover:underline"
          >
            Theming
          </Link>{" "}
          guide, or see how to{" "}
          <Link
            href="/docs/adding-pages"
            className="font-medium text-primary hover:underline"
          >
            add new pages
          </Link>{" "}
          to the dashboard.
        </p>
      </section>
    </div>
  );
}
