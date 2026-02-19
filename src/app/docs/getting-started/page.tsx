import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <div className="space-y-8">
      {/* Page title */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <p className="text-sm text-muted-foreground">
          Step-by-step guide to getting Apex Dashboard running on your local
          machine.
        </p>
      </div>

      {/* Prerequisites */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Prerequisites</h2>
        <p className="text-sm text-muted-foreground">
          Before you begin, make sure you have the following installed:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Node.js 18+</strong> &mdash;{" "}
            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Download Node.js
            </a>
          </li>
          <li>
            <strong className="text-foreground">npm</strong>,{" "}
            <strong className="text-foreground">yarn</strong>, or{" "}
            <strong className="text-foreground">pnpm</strong> &mdash; npm ships
            with Node.js; yarn and pnpm are optional alternatives
          </li>
          <li>
            <strong className="text-foreground">Git</strong> &mdash; for cloning
            the repository
          </li>
        </ul>
      </section>

      {/* Step 1: Clone */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Step 1: Clone the Repository</h2>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>{`git clone https://github.com/colorlib/apex-dashboard.git
cd apex-dashboard`}</code>
        </pre>
      </section>

      {/* Step 2: Install dependencies */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Step 2: Install Dependencies</h2>
        <p className="text-sm text-muted-foreground">
          Use your preferred package manager:
        </p>

        <h3 className="text-sm font-medium">npm</h3>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>npm install</code>
        </pre>

        <h3 className="text-sm font-medium">yarn</h3>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>yarn</code>
        </pre>

        <h3 className="text-sm font-medium">pnpm</h3>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>pnpm install</code>
        </pre>
      </section>

      {/* Step 3: Run dev server */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Step 3: Run the Dev Server</h2>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>npm run dev</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          The development server starts at{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            http://localhost:3000
          </code>
          . Next.js hot-reloads your changes automatically so you can see
          updates in real time.
        </p>
      </section>

      {/* Step 4: Build for production */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">
          Step 4: Build for Production
        </h2>
        <p className="text-sm text-muted-foreground">
          When you are ready to deploy, create an optimized production build:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          <code>{`npm run build
npm run start`}</code>
        </pre>
        <p className="text-sm text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            npm run build
          </code>{" "}
          compiles and optimizes the application.{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">
            npm run start
          </code>{" "}
          serves the built output on port 3000.
        </p>
      </section>

      {/* Available scripts */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Available Scripts</h2>
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-2 text-left font-medium">Command</th>
                <th className="px-4 py-2 text-left font-medium">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">
                  <code className="text-xs font-mono">npm run dev</code>
                </td>
                <td className="px-4 py-2 text-muted-foreground">
                  Start development server with hot reload
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">
                  <code className="text-xs font-mono">npm run build</code>
                </td>
                <td className="px-4 py-2 text-muted-foreground">
                  Create optimized production build
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">
                  <code className="text-xs font-mono">npm run start</code>
                </td>
                <td className="px-4 py-2 text-muted-foreground">
                  Serve the production build
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  <code className="text-xs font-mono">npm run lint</code>
                </td>
                <td className="px-4 py-2 text-muted-foreground">
                  Run ESLint across the project
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Next steps */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Next Steps</h2>
        <p className="text-sm text-muted-foreground">
          Now that you have the project running, explore the{" "}
          <Link
            href="/docs/folder-structure"
            className="font-medium text-primary hover:underline"
          >
            Folder Structure
          </Link>{" "}
          to understand how the codebase is organized.
        </p>
      </section>
    </div>
  );
}
