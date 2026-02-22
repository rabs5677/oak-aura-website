import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/", scrollTo: "hero" },
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Contact", to: "/", scrollTo: "contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="section-padding flex h-16 items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          state={{ scrollTo: "hero" }}
          className="font-heading text-xl font-semibold tracking-tight text-foreground"
        >
          Oak &amp; Aura
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                state={item.scrollTo ? { scrollTo: item.scrollTo } : undefined}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call button */}
        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="tel:9076072584">
              <Phone className="mr-2 h-3.5 w-3.5" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  state={item.scrollTo ? { scrollTo: item.scrollTo } : undefined}
                  className="text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li>
              <Button asChild size="sm" className="w-full">
                <a href="tel:9076072584">
                  <Phone className="mr-2 h-3.5 w-3.5" />
                  Call Now
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;