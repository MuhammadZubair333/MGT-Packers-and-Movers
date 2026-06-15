import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { QuoteForm } from "@/components/site/QuoteForm";
import { getService, getServiceIcon, SERVICE_PHOTOS, SERVICES } from "@/lib/services";
import { SITE, telHref, waHref } from "@/lib/site";

import type { Service } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    const s = loaderData?.service;
    const url = `https://mgtpam.lovable.app/services/${params.slug}`;
    if (!s) return { meta: [{ title: "Service Not Found" }] };
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { name: "keywords", content: s.keywords.join(", ") },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.metaDescription,
            provider: {
              "@type": "MovingCompany",
              name: "MGT Packers & Movers",
              telephone: "+92-300-1699303",
              areaServed: "Pakistan",
            },
            areaServed: "Pakistan",
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://mgtpam.lovable.app/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://mgtpam.lovable.app/services" },
              { "@type": "ListItem", position: 3, name: s.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-navy-deep">Service not found</h1>
        <p className="mt-2 text-muted-foreground">This service doesn't exist.</p>
        <Link
          to="/services"
          className="mt-6 inline-flex rounded-full bg-gradient-red px-5 py-2.5 text-sm font-semibold text-white"
        >
          View all services
        </Link>
      </div>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const waMsg = `Hi MGT, I'd like a quote for ${service.title}.`;
  const photos = SERVICE_PHOTOS[service.slug];

  return (
    <div className="min-h-screen bg-background">
      <Header darkBackground />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-navy pt-32 pb-16 text-white sm:pt-40 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav
              className="mb-6 flex items-center gap-1.5 text-xs text-white/70"
              aria-label="Breadcrumb"
            >
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/services" className="hover:text-white">Services</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">{service.title}</span>
            </nav>
            <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                  MGT Service
                </p>
                <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg text-white/80">{service.tagline}</p>
                <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">{service.intro}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={waHref(waMsg)}
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
              <div className="relative mx-auto w-full max-w-sm">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-red opacity-30 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3]">
                  {photos ? (
                    <img
                      src={photos.heroImage}
                      alt={service.title}
                      width={900}
                      height={675}
                      className="h-full w-full object-cover"
                      fetchPriority="high"
                    />
                  ) : (
                    <div className="glass-dark grid h-full place-items-center p-8">
                      <img
                        src={getServiceIcon(service.icon)}
                        alt={`${service.title} icon`}
                        width={280}
                        height={280}
                        className="h-full w-full max-w-[280px] object-contain animate-float"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 glass-dark rounded-2xl p-3">
                    <img
                      src={getServiceIcon(service.icon)}
                      alt={`${service.title} icon`}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                What's Included
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl">
                Everything you need from {service.title.toLowerCase()}
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {service.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-red text-white shadow-glow-red">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-deep">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        {photos && (
          <section className="py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Our Work
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-navy-deep sm:text-3xl">
                  See it in action
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {photos.gallery.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-2xl aspect-[4/3]">
                    <img
                      src={src}
                      alt={`${service.title} – photo ${i + 1}`}
                      loading="lazy"
                      width={700}
                      height={525}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        <section className="bg-accent py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                How It Works
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl">
                A simple 4-step process
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((p, i) => (
                <div
                  key={p.step}
                  className="relative rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-navy text-white shadow-glow-navy">
                    <span className="text-sm font-extrabold">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-deep">{p.step}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl">
                Common questions about {service.title.toLowerCase()}
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {service.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-border bg-card p-5 shadow-soft open:shadow-card"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-navy-deep list-none">
                    {f.q}
                    <ChevronRight className="h-5 w-5 shrink-0 text-brand-red transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <QuoteForm />

        {/* Related */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Explore More
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl">
                  Related Services
                </h2>
              </div>
              <Link
                to="/services"
                className="hidden items-center gap-1.5 text-sm font-semibold text-brand-red sm:inline-flex"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-red opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gradient-to-br from-accent to-white">
                    <img
                      src={getServiceIcon(s.icon)}
                      alt={`${s.title} icon`}
                      width={96}
                      height={96}
                      loading="lazy"
                      className="h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-deep">{s.title}</h3>
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
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
