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
import international from "@/assets/services/international-shipment.png";

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
  { slug: "international-shipment", title: "International Shipment", desc: "Air freight, sea cargo and door-to-port delivery to destinations worldwide.", img: international },
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

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card xl:p-5${
                i === SERVICES.length - 1 ? " md:col-start-2 xl:col-start-auto" : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-red opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-20 w-20 place-items-center rounded-xl bg-gradient-to-br from-accent to-white xl:h-24 xl:w-24">
                <img
                  src={s.img}
                  alt={`${s.title} icon`}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110 xl:h-20 xl:w-20"
                />
              </div>
              <h3 className="mt-3 text-sm font-bold text-navy-deep xl:mt-4 xl:text-base">{s.title}</h3>
              <p className="mt-1.5 flex-1 text-xs text-muted-foreground leading-relaxed xl:text-sm">{s.desc}</p>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-red xl:mt-4 xl:text-sm"
              >
                Explore
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 xl:h-4 xl:w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
