import { ArrowRight, BadgeCheck, Clock, Phone, ShieldCheck, Wallet } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import { SITE, telHref } from "@/lib/site";

const badges = [
  { icon: ShieldCheck, label: "Safe Handling" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: BadgeCheck, label: "Trained Team" },
  { icon: Wallet, label: "Affordable Pricing" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-70" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:px-8">
        {/* Copy */}
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy shadow-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Trusted Movers in Pakistan
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy-deep sm:text-5xl lg:text-6xl">
            Safe, Reliable &amp;{" "}
            <span className="bg-gradient-red bg-clip-text text-transparent">
              Stress-Free Moving
            </span>{" "}
            Across Pakistan
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Professional packing, loading, relocation, goods transport, truck rental and car
            carrier services handled by an experienced team, from Karachi to anywhere you call
            home.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="rainbow-ring">
              <a
                href="#quote"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-red px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </span>
            <a
              href={telHref(SITE.phonePrimary)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-navy shadow-soft transition-colors hover:bg-accent"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phonePrimary}
            </a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:max-w-lg sm:grid-cols-4">
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-white/70 px-2 py-3 text-center shadow-soft backdrop-blur"
              >
                <b.icon className="h-5 w-5 text-brand-red" />
                <span className="text-[11px] font-semibold text-navy sm:text-xs">{b.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-navy opacity-10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-navy-deep shadow-card">
            <div className="aspect-[16/10] w-full overflow-hidden sm:aspect-[16/11]">
              <img
                src={heroTruck}
                alt="MGT Packers and Movers truck loaded with furniture and boxes for a house shift in Karachi"
                width={1920}
                height={1080}
                className="h-full w-full animate-truck object-cover object-center"
                fetchPriority="high"
              />
            </div>

            {/* Floating quick estimate card */}
            <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5">
              <div className="glass pointer-events-auto rounded-2xl p-3 shadow-card sm:p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-red">
                      Quick Estimate
                    </p>
                    <p className="text-sm font-semibold text-navy-deep sm:text-base">
                      Karachi → Lahore · 2 BHK
                    </p>
                    <p className="text-xs text-muted-foreground">Packing + Transport + Unloading</p>
                  </div>
                  <a
                    href="#quote"
                    className="shrink-0 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white shadow-glow-navy"
                  >
                    Get Price
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute -left-3 top-6 hidden animate-float rounded-2xl bg-white px-3 py-2 shadow-card sm:flex sm:items-center sm:gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[oklch(0.68_0.17_145)]/15 text-[oklch(0.45_0.17_145)]">
              ✓
            </span>
            <div className="text-xs">
              <p className="font-semibold text-navy">5,000+ Moves</p>
              <p className="text-muted-foreground">Completed safely</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
