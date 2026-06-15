import logo from "@/assets/mgt-logo.png";

export function Logo() {
  return (
    <a
      href="/"
      className="flex items-center group"
      aria-label="MGT Packers & Movers home"
    >
      <span className="block rounded-lg bg-white px-1.5 py-1 shadow-sm ring-1 ring-black/8 transition-shadow group-hover:shadow-md">
        <img
          src={logo}
          alt="MGT Packers & Movers"
          className="h-9 w-auto sm:h-10 object-contain"
          loading="eager"
          decoding="async"
        />
      </span>
    </a>
  );
}
