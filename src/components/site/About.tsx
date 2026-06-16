import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-red opacity-10 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-card">
            <img
              src="/photos/mgt-team-truck.jpeg"
              alt="MGT Packers & Movers team ready for a move"
              width={800}
              height={800}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden max-w-xs rounded-2xl bg-white p-5 shadow-card sm:block lg:-right-8">
            <p className="text-3xl font-extrabold text-brand-red">Since 2010</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Trusted across Pakistan for safe, professional moving services.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
            About MGT
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-navy-deep sm:text-4xl lg:text-5xl">
            Honest, Careful &amp; Professional Moving.
          </h2>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            MGT Packers &amp; Movers is a trusted name in the relocation industry, providing safe,
            fast and affordable moving solutions across the country. Our professional team handles
            every move, from homes and offices to industrial goods and vehicles, with complete
            care and commitment.
          </p>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            We specialize in packing, loading, transportation and unloading. Our goal is simple:
            deliver your belongings on time, in perfect condition, and make your move easy and
            hassle-free.
          </p>

          <figure className="mt-8 rounded-2xl border border-border bg-accent/50 p-6">
            <Quote className="h-6 w-6 text-brand-red" />
            <blockquote className="mt-3 text-base italic text-navy-deep sm:text-lg">
              &ldquo;When I started MGT in 2010, my vision was a service people could rely on:
              honest, careful and professional. Today our team treats every client&apos;s
              belongings with the same care as our own.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-navy">
              Haji Abdul Majid Ali ·{" "}
              <span className="font-normal text-muted-foreground">Founder &amp; CEO</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
