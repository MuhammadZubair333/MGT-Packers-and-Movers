import { Phone } from "lucide-react";
import { SITE, telHref, waHref } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-2.5 sm:bottom-6 sm:left-6">
      <a
        href={waHref()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.55_0.17_145)] text-white shadow-glow-navy transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-white" aria-hidden="true">
          <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2.1 7.7L.5 31.5l8-2c2.2 1.2 4.8 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm7.3 19.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.4 1.6-.3.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.3.3-.5.4-.8.1-.3 0-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.7-.7-.6-1-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 4 1.7 4.2c.2.3 2.9 4.4 7 6.2 1 .4 1.7.6 2.3.8.9.3 1.8.2 2.5.1.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.1-.4-.2-.8-.4z"/>
        </svg>
      </a>
      <a
        href={telHref(SITE.phonePrimary)}
        aria-label="Call"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-red text-white shadow-glow-red transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
