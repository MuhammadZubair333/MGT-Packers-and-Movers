import { ClipboardList, MapPinned, PackageCheck, Truck } from "lucide-react";

const STEPS = [
  { n: "01", icon: ClipboardList, title: "Request a Free Quote", desc: "Share your move details — we respond fast with a clear price." },
  { n: "02", icon: MapPinned, title: "Get a Moving Plan", desc: "We schedule, assign the right truck and team for your move." },
  { n: "03", icon: PackageCheck, title: "Packing & Loading", desc: "Trained crew packs, wraps and safely loads everything." },
  { n: "04", icon: Truck, title: "Safe Delivery", desc: "On-time delivery, careful unloading and setup at the new place." },
];

export function Process() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
            A Stress-Free Move in 4 Simple Steps
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-navy text-white shadow-glow-navy">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-3xl font-extrabold text-accent-foreground/15">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <span className="absolute right-[-10px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-border lg:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
