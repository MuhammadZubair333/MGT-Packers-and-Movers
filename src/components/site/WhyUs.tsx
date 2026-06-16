import {
  BadgeCheck,
  Clock,
  DoorOpen,
  HeartHandshake,
  MapPinned,
  PackageCheck,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

const ITEMS = [
  { icon: Users, title: "Experienced Team", desc: "Trained movers with years of on-ground experience." },
  { icon: ShieldCheck, title: "Safe & Secure Handling", desc: "Padded wraps, sturdy boxes, careful handling." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your schedule. Moves arrive on time." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent quotes, no hidden charges." },
  { icon: DoorOpen, title: "Door-to-Door Service", desc: "Pickup, transport and setup at the new place." },
  { icon: PackageCheck, title: "Professional Packing", desc: "Premium materials for fragile, electronics & more." },
  { icon: MapPinned, title: "Nationwide Transport", desc: "Karachi, Lahore, Islamabad, Multan, Faisalabad and across Pakistan." },
  { icon: HeartHandshake, title: "Customer-Focused", desc: "Friendly support before, during and after the move." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden bg-gradient-navy py-20 text-white sm:py-28">
      <div className="absolute inset-0 -z-0 bg-gradient-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Why Choose MGT
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Safe. Reliable.{" "}
              <span className="bg-gradient-red bg-clip-text text-transparent">On Time.</span>{" "}
              Every Time.
            </h2>
          </div>
          <p className="text-white/80 lg:text-lg">
            We treat every client&apos;s belongings with the same care as our own, because your
            trust is our success.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="glass-dark group rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-red shadow-glow-red">
                <it.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-base font-bold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-white/75">{it.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur sm:grid-cols-4 sm:p-8">
          {[
            ["10+", "Years Experience"],
            ["5,000+", "Happy Customers"],
            ["20+", "Cities Covered"],
            ["100%", "Safe Delivery"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="flex items-center justify-center gap-1.5 text-3xl font-extrabold sm:text-4xl">
                <BadgeCheck className="h-5 w-5 text-brand-red sm:h-6 sm:w-6" />
                {n}
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/70 sm:text-sm">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
