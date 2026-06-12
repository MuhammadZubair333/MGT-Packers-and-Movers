import logoAsset from "@/assets/mgt-logo.png.asset.json";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  void variant;
  return (
    <a
      href="#top"
      className="flex items-center gap-2 group"
      aria-label="MGT Packers & Movers home"
    >
      <img
        src={logoAsset.url}
        alt="MGT Packers & Movers"
        className="h-12 w-auto sm:h-14 object-contain"
        loading="eager"
        decoding="async"
      />
    </a>
  );
}
