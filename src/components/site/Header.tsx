import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SITE, telHref, waHref } from "@/lib/site";

type NavItem = { label: string; href?: string; to?: string };
const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Why Us", href: "/#why" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#quote" },
];

export function Header({ darkBackground = false }: { darkBackground?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls =
    !scrolled && darkBackground
      ? "rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
      : "rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) =>
            n.to ? (
              <Link key={n.label} to={n.to} className={linkCls}>
                {n.label}
              </Link>
            ) : (
              <a key={n.label} href={n.href} className={linkCls}>
                {n.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={telHref(SITE.phonePrimary)}
            className="hidden items-center gap-2 rounded-full bg-gradient-red px-4 py-2 text-sm font-semibold text-white shadow-glow-red transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> {SITE.phonePrimary}
          </a>
          <span className="btn-ring btn-ring-green hidden sm:inline-flex">
            <a
              href={waHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-navy transition-colors hover:bg-accent"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-[oklch(0.68_0.17_145)]" aria-hidden="true">
                <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.7L.5 31.5l8-2c2.2 1.2 4.8 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C3.7 20.4 3 18.2 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.5-13 12.5zm7.3-9.4c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.4 1.6-.3.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.2c.2.3 2.9 4.4 7 6.2 1 .4 1.7.6 2.3.8.9.3 1.8.2 2.5.1.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.1-.4-.2-.8-.4z"/>
              </svg>
              WhatsApp
            </a>
          </span>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-white text-navy shadow-soft lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-9 w-9 place-items-center rounded-lg hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            {NAV.map((n) =>
              n.to ? (
                <Link
                  key={n.label}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                >
                  {n.label}
                </Link>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                >
                  {n.label}
                </a>
              ),
            )}
          </nav>
          <div className="space-y-2 border-t border-border p-4">
            <a
              href={telHref(SITE.phonePrimary)}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-red py-3 text-sm font-semibold text-white shadow-glow-red"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phonePrimary}
            </a>
            <a
              href={waHref()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[oklch(0.68_0.17_145)] py-3 text-sm font-semibold text-white"
            >
              WhatsApp Now
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
