import Link from "next/link";

interface ComponentEntry {
  name: string;
  description: string;
  importPath: string;
}

interface ComponentGroup {
  title: string;
  items: ComponentEntry[];
}

const componentGroups: ComponentGroup[] = [
  {
    title: "Layout",
    items: [
      {
        name: "Card",
        description:
          "Container with header, content, and footer slots. Used for stats, forms, and data panels.",
        importPath: "@/components/ui/card",
      },
      {
        name: "Separator",
        description: "Horizontal or vertical divider line between sections.",
        importPath: "@/components/ui/separator",
      },
      {
        name: "Tabs",
        description:
          "Tabbed interface for switching between content panels. Supports controlled and uncontrolled modes.",
        importPath: "@/components/ui/tabs",
      },
      {
        name: "Sheet",
        description:
          "Slide-out panel from any edge. Used for mobile menus and detail views.",
        importPath: "@/components/ui/sheet",
      },
    ],
  },
  {
    title: "Form",
    items: [
      {
        name: "Input",
        description:
          "Text input field with consistent border and focus ring styling.",
        importPath: "@/components/ui/input",
      },
      {
        name: "Select",
        description:
          "Dropdown select menu built on Radix UI Select primitive.",
        importPath: "@/components/ui/select",
      },
      {
        name: "Textarea",
        description: "Multi-line text input with auto-sizing support.",
        importPath: "@/components/ui/textarea",
      },
      {
        name: "Checkbox",
        description:
          "Boolean toggle with checkmark indicator. Supports indeterminate state.",
        importPath: "@/components/ui/checkbox",
      },
      {
        name: "Switch",
        description: "Toggle switch for on/off boolean states.",
        importPath: "@/components/ui/switch",
      },
      {
        name: "Label",
        description:
          "Accessible label element that pairs with form inputs.",
        importPath: "@/components/ui/label",
      },
      {
        name: "Radio Group",
        description:
          "Group of radio buttons for single-select from multiple options.",
        importPath: "@/components/ui/radio-group",
      },
      {
        name: "Form",
        description:
          "React Hook Form integration with Zod validation and accessible error messages.",
        importPath: "@/components/ui/form",
      },
    ],
  },
  {
    title: "Data Display",
    items: [
      {
        name: "Badge",
        description:
          "Small status label with color variants: default, secondary, destructive, success, warning, outline.",
        importPath: "@/components/ui/badge",
      },
      {
        name: "Table",
        description:
          "HTML table primitives (Table, TableHeader, TableBody, TableRow, TableCell) with consistent styling.",
        importPath: "@/components/ui/table",
      },
      {
        name: "Avatar",
        description:
          "User avatar with image and fallback initials support.",
        importPath: "@/components/ui/avatar",
      },
      {
        name: "Progress",
        description: "Horizontal progress bar with animated fill.",
        importPath: "@/components/ui/progress",
      },
      {
        name: "Skeleton",
        description:
          "Loading placeholder with pulse animation for content that is still loading.",
        importPath: "@/components/ui/skeleton",
      },
    ],
  },
  {
    title: "Feedback",
    items: [
      {
        name: "Dialog",
        description:
          "Modal dialog with overlay, title, description, and action buttons.",
        importPath: "@/components/ui/dialog",
      },
      {
        name: "Tooltip",
        description:
          "Popup hint that appears on hover or focus. Positioned automatically.",
        importPath: "@/components/ui/tooltip",
      },
      {
        name: "Sonner (Toast)",
        description:
          "Toast notification system. Trigger with toast() from the sonner package.",
        importPath: "@/components/ui/sonner",
      },
      {
        name: "Popover",
        description:
          "Floating content panel triggered by a button click. Used for filters and mini-forms.",
        importPath: "@/components/ui/popover",
      },
    ],
  },
  {
    title: "Navigation",
    items: [
      {
        name: "Breadcrumb",
        description:
          "Trail of links showing the current page hierarchy.",
        importPath: "@/components/ui/breadcrumb",
      },
      {
        name: "Dropdown Menu",
        description:
          "Context menu with items, separators, and keyboard navigation.",
        importPath: "@/components/ui/dropdown-menu",
      },
      {
        name: "Command",
        description:
          "Command palette (Cmd+K) with searchable list of actions and pages.",
        importPath: "@/components/ui/command",
      },
      {
        name: "Button",
        description:
          "Primary action trigger with variants: default, destructive, outline, secondary, ghost, link. Multiple sizes available.",
        importPath: "@/components/ui/button",
      },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      {/* Page title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-sm text-muted-foreground">
          A reference of all available UI components, grouped by category. Each
          component is vendored source code that you own and can customize.
        </p>
      </div>

      {/* Adding new components */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Adding New Components</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The project includes a{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            components.json
          </code>{" "}
          configuration file, so you can scaffold new shadcn/ui components
          using the CLI:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>npx shadcn@latest add accordion</code>
        </pre>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This generates the component source file in{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            src/components/ui/
          </code>{" "}
          with all dependencies resolved.
        </p>
      </section>

      {/* Component groups */}
      {componentGroups.map((group) => (
        <section key={group.title} className="space-y-4">
          <h2 className="text-lg font-semibold">{group.title}</h2>
          <div className="space-y-3">
            {group.items.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <code className="text-xs font-mono text-muted-foreground">
                    import {"{ ... }"} from &quot;{item.importPath}&quot;
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Usage pattern */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Common Usage Pattern</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All components follow the same pattern: import the named export, pass
          props and children, and use the{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            className
          </code>{" "}
          prop to extend styles:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>{`import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Orders <Badge variant="secondary">12</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardContent>
    </Card>
  );
}`}</code>
        </pre>
      </section>

      {/* Next steps */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Next Steps</h2>
        <p className="text-sm text-muted-foreground">
          Learn about{" "}
          <Link
            href="/docs/theming"
            className="font-medium text-primary hover:underline"
          >
            Theming
          </Link>{" "}
          to customize component colors, or see the{" "}
          <Link
            href="/docs/deployment"
            className="font-medium text-primary hover:underline"
          >
            Deployment
          </Link>{" "}
          guide when you are ready to ship.
        </p>
      </section>
    </div>
  );
}
