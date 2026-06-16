import suzuki from "@/assets/fleet/suzuki.png";
import shahzore from "@/assets/fleet/shahzore.png";
import mazdaOpen from "@/assets/fleet/mazda-open.png";
import mazdaC from "@/assets/fleet/mazda-container.png";
import t17 from "@/assets/fleet/truck-17.png";
import t32 from "@/assets/fleet/truck-32.png";
import flatbed from "@/assets/fleet/flatbed.jpeg";

const FLEET = [
  { name: "Suzuki Pickup", desc: "Ideal for small moves & deliveries", img: suzuki },
  { name: "Shahzore", desc: "Perfect for 1 BHK city shifts", img: shahzore },
  { name: "Mazda Open Truck", desc: "Flexible flatbed for large items", img: mazdaOpen },
  { name: "17 Feet Container", desc: "", img: mazdaC },
  { name: "20 Feet Container", desc: "", img: t17 },
  { name: "40 Feet Container", desc: "", img: t32 },
  { name: "40 Feet Flatbed", desc: "", img: flatbed },
];

export function Fleet() {
  return (
    <section id="fleet" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            Our Fleet
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
            The Right Truck for Every Move
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From a single-room shift to nationwide cargo, pick from a wide range of trucks and
            containers, all maintained and driven by trained professionals.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET.map((f) => (
            <div
              key={f.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-white">
                <img
                  src={f.img}
                  alt={`${f.name} for hire`}
                  width={768}
                  height={512}
                  loading="lazy"
                  className="max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-navy-deep">{f.name}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
                <a
                  href="#quote"
                  className="shrink-0 rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-white shadow-glow-navy"
                >
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
