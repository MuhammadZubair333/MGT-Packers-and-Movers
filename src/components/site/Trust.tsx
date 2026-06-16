const CLIENTS: { name: string; logo: string }[] = [
  {
    name: "VIZ Six Sigma Plus",
    logo: "/photos/viz-six-sigma-plus.png",
  },
  {
    name: "Naushad Imdad",
    logo: "https://naushadimdad.pk/cdn/shop/files/logoN_160x.png?v=1690391675",
  },
  {
    name: "Bonanza Satrangi",
    logo: "https://cdn.shopify.com/s/files/1/0619/9695/7785/files/Group_11.svg?v=1738152855",
  },
  {
    name: "Naveena Group",
    logo: "https://naveenagroup.com/wp-content/themes/twentytwenty-child/assets/img/logo.png",
  },
  {
    name: "Orient Textile",
    logo: "https://shopatorient.com/image/orient-logo-new.png",
  },
  {
    name: "Sapphire Fibres",
    logo: "https://sapphire.com.pk/cdn/shop/files/sapphire-logo-black.svg?v=1708082765",
  },
];

const TRACK = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export function Trust() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by businesses and families across Pakistan
        </p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-5">
            {TRACK.map((c, i) => (
              <div
                key={i}
                data-trust-card
                className="flex h-20 min-w-[180px] flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-white px-6 shadow-soft transition-shadow hover:shadow-card sm:min-w-[210px]"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  className="h-9 w-auto max-w-[140px] object-contain opacity-85 transition-all duration-300 hover:opacity-100"
                  onError={(e) => {
                    const card = e.currentTarget.parentElement;
                    if (card) card.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
