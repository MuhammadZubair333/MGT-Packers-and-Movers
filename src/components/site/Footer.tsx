import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { SITE, telHref, waHref } from "@/lib/site";

const SERVICES = [
  { label: "House Shifting",     slug: "house-shifting" },
  { label: "Office Relocation",  slug: "office-relocation" },
  { label: "Packing Services",   slug: "packing" },
  { label: "Loading & Unloading",slug: "loading-unloading" },
  { label: "Warehouse Storage",  slug: "warehouse" },
  { label: "Cargo Services",     slug: "cargo" },
  { label: "Goods Transport",    slug: "goods-transport" },
  { label: "Truck on Rent",      slug: "truck-on-rent" },
  { label: "Car Carrier",        slug: "car-carrier" },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="rounded-xl bg-white p-3 shadow-soft inline-block">
            <Logo />
          </div>
          <p className="mt-5 text-sm text-white/75">
            {SITE.legal}. Trusted packers, movers, cargo and goods transport company serving
            Karachi and all of Pakistan since 2010.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href={SITE.social.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-red">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.social.instagram} aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand-red">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SITE.social.tiktok} aria-label="TikTok" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-bold hover:bg-brand-red">
              TT
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-white"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm text-white/85">
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-brand-red"><Phone className="h-4 w-4" /></span>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wider text-white/60">Phone</p>
                <a href={telHref(SITE.phoneCall)} className="font-semibold">{SITE.phoneCall}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-[oklch(0.55_0.17_145)]"><Phone className="h-4 w-4" /></span>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wider text-white/60">WhatsApp</p>
                <a href={waHref()} className="font-semibold">{SITE.phoneWhatsapp}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-white/10"><Mail className="h-4 w-4" /></span>
              <div className="min-w-0">
                <a href={`mailto:${SITE.email}`} className="break-all">{SITE.email}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 mt-0.5 grid h-8 w-8 place-items-center rounded-full bg-white/10"><MapPin className="h-4 w-4" /></span>
              <div className="min-w-0">
                <span className="text-white/80">{SITE.address}</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/80">Quick Help</h3>
          <p className="mt-4 text-sm text-white/75">
            Need a fast price? Send your move details on WhatsApp and our team will reply within
            minutes.
          </p>
          <a
            href={waHref()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.55_0.17_145)] px-5 py-3 text-sm font-semibold text-white shadow-soft"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <a
            href="https://brandwings.online/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            Powered by <span className="font-semibold text-white/80">Brandwings</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
