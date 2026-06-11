import { Star } from "lucide-react";

const T = [
  {
    name: "Ayesha Siddiqui",
    role: "House Shifting · Karachi → Lahore",
    text: "MGT handled our 3 BHK move beautifully. The team packed every fragile item with care and delivered on time. Highly recommended.",
  },
  {
    name: "Bilal Ahmed",
    role: "Office Relocation · Karachi",
    text: "We moved our office of 40 staff in a single weekend. Professional packing, labelled boxes and zero damage. Outstanding service.",
  },
  {
    name: "Fatima Rehman",
    role: "Car Carrier · Islamabad → Karachi",
    text: "I was worried about shipping my car but the MGT team made it stress-free. Clear pricing and safe delivery. Will use them again.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
            Loved by Families &amp; Businesses
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {T.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <div className="flex items-center gap-1 text-brand-red">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-base text-foreground/85">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-navy font-display text-sm font-bold text-white">
                  {t.name.split(" ").map((s) => s[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-bold text-navy-deep">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
