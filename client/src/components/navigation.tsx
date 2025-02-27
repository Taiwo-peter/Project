import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/">
            <a className="text-2xl font-bold text-primary">TyledeCloud</a>
          </Link>
        </div>
        
        <div className="flex items-center space-x-6 text-sm font-medium">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  location === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="ml-auto">
          <Button asChild variant="outline" className="mr-4">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
