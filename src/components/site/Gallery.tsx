const ITEMS = [
  { img: "/photos/mgt-loading-furniture.jpeg", label: "Loading & Transport" },
  { img: "/photos/mgt-wrapping-sofa.jpeg", label: "Furniture Wrapping" },
  { img: "/photos/mgt-packing-house.jpeg", label: "Professional Packing" },
  { img: "/photos/mgt-packed-boxes.jpeg", label: "Ready for Delivery" },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            Our Work
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
            Real Moves. Real Care.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <figure
              key={it.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <img
                src={it.img}
                alt={it.label}
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 text-sm font-semibold text-white">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
