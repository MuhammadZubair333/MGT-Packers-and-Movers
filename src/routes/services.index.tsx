import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SERVICES, getServiceIcon } from "@/lib/services";
import { SITE, telHref, waHref } from "@/lib/site";

const TITLE = "Our Services | MGT Packers & Movers Karachi & Pakistan";
const DESCRIPTION =
  "Explore all MGT Packers & Movers services: house shifting, office relocation, packing, loading, warehouse storage, cargo, goods transport, truck on rent and car carrier across Karachi and Pakistan.";
const URL = "https://mgtpam.lovable.app/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://mgtpam.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Services", item: URL },
          ],
        }),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Header darkBackground />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-navy pt-32 pb-20 text-white sm:pt-40 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/70" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">Services</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
              What We Do
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Complete Packers, Movers &amp;{" "}
              <span className="bg-gradient-red bg-clip-text text-transparent">Transport</span>{" "}
              Services
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
              Nine specialised services, one trusted team. From a single-room shift to a full
              industrial cargo move. MGT has the people, packing and right-sized vehicle for the job.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-red px-5 py-3 text-sm font-semibold text-white shadow-glow-red"
              >
                Get Free Quote on WhatsApp
              </a>
              <a
                href={telHref(SITE.phonePrimary)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur"
              >
                <Phone className="h-4 w-4" /> {SITE.phonePrimary}
              </a>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-red opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="grid h-28 w-28 place-items-center rounded-2xl bg-gradient-to-br from-accent to-white">
                    <img
                      src={getServiceIcon(s.icon)}
                      alt={`${s.title} icon`}
                      width={112}
                      height={112}
                      loading="lazy"
                      className="h-24 w-24 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-navy-deep">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                    View Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative overflow-hidden bg-gradient-navy py-20 sm:py-28 text-white">
          <div className="absolute inset-0 bg-gradient-mesh opacity-25" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* Heading */}
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                See Us In Action
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Watch Our Team Work
              </h2>
              <p className="mt-4 text-base text-white/75 sm:text-lg">
                5,000+ successful moves across Pakistan. One trusted, trained team handling
                everything from packing to door-step delivery, with care every step of the way.
              </p>
            </div>

            {/* Video card */}
            <div className="relative mx-auto mt-12 max-w-4xl">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-red opacity-20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-video w-full object-cover"
                  aria-label="MGT Packers and Movers team working"
                >
                  <source src="/mgt-service.mp4" type="video/mp4" />
                </video>
                {/* Bottom gradient + label */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-brand-red" />
                  <p className="text-xs font-semibold text-white">MGT Packers &amp; Movers · Live Team</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["5,000+", "Moves Done"],
                ["15+",    "Years Active"],
                ["20+",    "Cities Covered"],
                ["100%",   "Safe Delivery"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <p className="text-3xl font-extrabold text-white sm:text-4xl">{n}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/55">{l}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
