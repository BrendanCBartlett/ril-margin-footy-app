"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Sun, Moon, FileText, ShoppingCart } from "lucide-react";
import { navigationItems } from "@/lib/navigation";

// ✅ simple replacement for theme (removes dependency)
const useTheme = () => ({
  theme: "light",
  setTheme: () => {},
});

// ✅ minimal placeholder components to replace missing UI library
const CommandDialog = ({ children }: any) => <div>{children}</div>;
const CommandInput = (props: any) => <input {...props} />;
const CommandList = ({ children }: any) => <div>{children}</div>;
const CommandEmpty = ({ children }: any) => <div>{children}</div>;
const CommandGroup = ({ children }: any) => <div>{children}</div>;
const CommandItem = ({ children, onSelect }: any) => (
  <div onClick={onSelect}>{children}</div>
);
const CommandSeparator = () => <hr />;

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigateTo = React.useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router]
  );

  const toggleTheme = React.useCallback(() => {
    setOpen(false);
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const mainItems = navigationItems.filter((item) => item.group === "main");
  const systemItems = navigationItems.filter((item) => item.group === "system");

  return (
    <CommandDialog>
      <CommandInput placeholder="Type a command or search..." />

      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup>
          {mainItems.map((item) => {
            const Icon = item.icon;
            return (
              <CommandItem
                key={item.href}
                onSelect={() => navigateTo(item.href)}
              >
                <Icon className="me-2 h-4 w-4" />
                <span>{item.label}</span>
              </CommandItem>
            );
          })}

          {systemItems.map((item) => {
            const Icon = item.icon;
            return (
              <CommandItem
                key={item.href}
                onSelect={() => navigateTo(item.href)}
              >
                <Icon className="me-2 h-4 w-4" />
                <span>{item.label}</span>
              </CommandItem>
            );
          })}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup>
          <CommandItem onSelect={() => navigateTo("/orders/new")}>
            <ShoppingCart className="me-2 h-4 w-4" />
            <span>New Order</span>
          </CommandItem>

          <CommandItem onSelect={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="me-2 h-4 w-4" />
            ) : (
              <Moon className="me-2 h-4 w-4" />
            )}
            <span>Toggle Theme</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup>
          <CommandItem onSelect={() => navigateTo("/docs")}>
            <FileText className="me-2 h-4 w-4" />
            <span>Documentation</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
