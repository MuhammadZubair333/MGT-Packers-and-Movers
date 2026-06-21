import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { SITE, telHref } from "@/lib/site";

export function Location() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            Find Us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
            Visit Our Office
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            We're based in Korangi, Karachi. Come visit us or get in touch — we're available 7 days a week.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_2fr]">
          {/* Info card */}
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-red/10">
                  <MapPin className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Address</p>
                  <p className="mt-1 text-sm font-medium text-navy-deep leading-relaxed">
                    Plot # D-425, Sec 31-E, Lucknow Co-operative Housing Society,
                    UMDC Road, Korangi, Karachi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-red/10">
                  <Phone className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</p>
                  <a
                    href={telHref(SITE.phoneCall)}
                    className="mt-1 block text-sm font-semibold text-navy-deep hover:text-brand-red transition-colors"
                  >
                    {SITE.phoneCall}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-red/10">
                  <Mail className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-sm font-semibold text-navy-deep hover:text-brand-red transition-colors break-all"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/mgtpackersmovers/@24.8252,67.1232,17z"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-deep px-5 py-3 text-sm font-semibold text-white shadow-glow-navy transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              src="https://maps.google.com/maps?q=24.8252,67.1232&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MGT Packers & Movers Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
