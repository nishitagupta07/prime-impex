import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_1fr]">
          <div>
            <p className="font-display text-3xl uppercase">Prime Impex Stones</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-primary-foreground/60">
              Three Decades of Stone. A World of Possibilities.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-bronze">
              Explore
            </p>
            <nav className="grid gap-3 text-sm text-primary-foreground/70">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
          </div>

          <div className="space-y-4 text-sm leading-6 text-primary-foreground/65">
            <p className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-bronze" />
              {company.address}
            </p>

            <p className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-bronze" />
              <span>
                <a href={`tel:+91${company.phones[0]}`}>
                  {company.phones[0]}
                </a>
                <br />
                <a href={`tel:+91${company.phones[1]}`}>
                  {company.phones[1]}
                </a>
              </span>
            </p>

            <a className="flex gap-3" href={`mailto:${company.email}`}>
              <Mail className="mt-1 size-4 shrink-0 text-bronze" />
              {company.email}
            </a>

            <p>{company.instagram}</p>
          </div>
        </div>

        <p className="pt-7 text-xs text-primary-foreground/45">
          © Prime Impex Stones. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}