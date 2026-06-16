import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import houseShifting from "@/assets/services/house-shifting.png";
import office from "@/assets/services/office-relocation.png";
import packing from "@/assets/services/packing.png";
import loading from "@/assets/services/loading.png";
import warehouse from "@/assets/services/warehouse.png";
import cargo from "@/assets/services/cargo.png";
import goods from "@/assets/services/goods-transport-icon.png";
import truckRent from "@/assets/services/truck-rent.png";
import carCarrier from "@/assets/services/car-carrier.png";

const SERVICES = [
  { slug: "house-shifting", title: "House Shifting", desc: "Door-to-door home relocation in Karachi and across Pakistan, handled with care.", img: houseShifting },
  { slug: "office-relocation", title: "Office Relocation", desc: "Fast, organized office moves with zero downtime for your team.", img: office },
  { slug: "packing", title: "Packing Services", desc: "Premium packing materials and trained packers protect every item.", img: packing },
  { slug: "loading-unloading", title: "Loading & Unloading", desc: "Skilled labour for safe loading, unloading and furniture handling.", img: loading },
  { slug: "warehouse", title: "Warehouse Storage", desc: "Secure short and long-term storage for household and commercial goods.", img: warehouse },
  { slug: "cargo", title: "Cargo Services", desc: "Reliable domestic cargo movement with full tracking and care.", img: cargo },
  { slug: "goods-transport", title: "Goods Transport", desc: "Nationwide goods transport with the right vehicle for any load.", img: goods },
  { slug: "truck-on-rent", title: "Truck on Rent", desc: "Suzuki to 40 ft trailers. Book the perfect truck for your move.", img: truckRent },
  { slug: "car-carrier", title: "Car Carrier", desc: "Safe city-to-city vehicle transport on covered and open carriers.", img: carCarrier },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
            Complete Relocation &amp; Transport Solutions
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From homes and offices to industrial goods and vehicles, MGT handles every move with
            professional packing, safe loading and on-time delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-red opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-28 w-28 place-items-center rounded-2xl bg-gradient-to-br from-accent to-white">
                <img
                  src={s.img}
                  alt={`${s.title} icon`}
                  width={112}
                  height={112}
                  loading="lazy"
                  className="h-24 w-24 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red"
              >
                Explore Service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
