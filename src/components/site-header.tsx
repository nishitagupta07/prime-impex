import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Prime_Impex_Stones_Logo.jpg";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Products", to: "/products" as const },
  { label: "About Us", to: "/about" as const },
  { label: "Contact Us", to: "/contact" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-hero-foreground/15 bg-overlay/90 text-hero-foreground backdrop-blur-md">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">

        {/* Logo */}
    {/* Logo + Company Name */}
<Link
  to="/"
  className="flex min-w-0 items-center gap-3"
  onClick={() => setOpen(false)}
  aria-label="Prime Impex Stones home"
>
  {/* Logo Image */}
  <img
    src={logo}
    alt="Prime Impex Stones Logo"
    className="h-14 w-14 shrink-0 rounded-full object-cover border-2 border-hero-foreground/20"
  />

  {/* Company Name */}
  <div className="hidden sm:flex flex-col leading-tight">
    <span className="font-display text-lg font-semibold tracking-wide text-hero-foreground">
      PRIME IMPEX STONES
    </span>
    <span className="text-[9px] uppercase tracking-[0.22em] text-hero-foreground/60">
      Natural Stone
    </span>
  </div>
</Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-7"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="text-xs uppercase tracking-[0.12em] text-hero-foreground/75 transition-colors hover:text-hero-foreground"
                activeProps={{ className: "text-bronze" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button asChild variant="bronze">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="min-h-[calc(100vh-5rem)] border-t border-hero-foreground/15 bg-overlay px-5 py-12 lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-xl flex-col"
          >
            {links.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-hero-foreground/15 py-5 font-display text-4xl text-hero-foreground/85"
                activeProps={{ className: "text-bronze" }}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              size="lg"
              variant="bronze"
              className="mt-8"
            >
              <Link to="/contact" onClick={() => setOpen(false)}>
                Enquire Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}