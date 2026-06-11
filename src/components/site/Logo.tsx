import { Truck } from "lucide-react";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const sub = variant === "light" ? "text-navy" : "text-white/80";
  return (
    <a href="#top" className="flex items-center gap-2.5 group" aria-label="MGT Packers & Movers home">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-red shadow-glow-red">
        <Truck className="h-5 w-5 text-white" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight text-brand-red">
          MGT
        </span>
        <span className={`text-[10px] font-semibold tracking-[0.18em] ${sub}`}>
          PACKERS &amp; MOVERS
        </span>
      </span>
    </a>
  );
}
