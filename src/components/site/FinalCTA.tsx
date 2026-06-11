import { ArrowRight, Phone } from "lucide-react";
import { SITE, telHref, waHref } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-red p-8 text-white shadow-glow-red sm:p-12 lg:p-16">
          <div className="absolute inset-0 -z-0 bg-gradient-mesh opacity-30" />
          <div className="relative grid items-center gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Planning a Move? Let MGT Handle It Safely.
              </h2>
              <p className="mt-4 max-w-xl text-white/90 sm:text-lg">
                Trained team, professional packing and the right truck for every job — anywhere
                in Pakistan.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-2 lg:flex-col">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-red shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={waHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.55_0.17_145)] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
              >
                WhatsApp Now
              </a>
              <a
                href={telHref(SITE.phonePrimary)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
