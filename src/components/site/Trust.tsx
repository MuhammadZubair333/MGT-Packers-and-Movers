const CLIENTS = [
  "Naushad Imdad",
  "Bonanza Satrangi",
  "Naveena Group",
  "Orient Textile",
  "Six Sigma Films",
];

export function Trust() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by businesses and families across Pakistan
        </p>
        <div className="mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-4 sm:gap-6">
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
              <div
                key={i}
                className="grid h-16 min-w-[180px] place-items-center rounded-xl border border-border bg-white px-6 font-display text-sm font-bold uppercase tracking-wider text-navy/70 shadow-soft sm:min-w-[220px] sm:text-base"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
