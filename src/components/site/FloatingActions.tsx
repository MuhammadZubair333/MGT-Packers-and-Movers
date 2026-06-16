import { Phone } from "lucide-react";
import { SITE, telHref } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 left-4 z-40 sm:bottom-6 sm:left-6">
      <a
        href={telHref(SITE.phoneCall)}
        aria-label="Call"
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-red text-white shadow-glow-red transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
