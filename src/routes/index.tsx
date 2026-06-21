import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Fleet } from "@/components/site/Fleet";
import { Trust } from "@/components/site/Trust";
import { TruckScene } from "@/components/site/TruckScene";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

const TITLE = "MGT Packers & Movers in Karachi | House Shifting, Cargo & Truck Rental";
const DESCRIPTION =
  "MGT Packers & Movers: professional house shifting, office relocation, packing, warehouse storage, goods transport, cargo, truck rental and car carrier services across Karachi and all of Pakistan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          name: "MGT Packers & Movers",
          alternateName: "Majid Goods Transport Company",
          telephone: "+92-300-1899303",
          email: "mgtpackersmovers@gmail.com",
          url: "https://www.mgtpackersmovers.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot # D-425, Sec 31-E, Lucknow Co-operative Housing Society, UMDC Road, Korangi",
            addressLocality: "Karachi",
            addressCountry: "PK",
          },
          areaServed: "Pakistan",
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Trust />
        <TruckScene />
        <QuoteForm />
        <Services />
        <WhyUs />
        <About />
        <Process />
        <Fleet />
        <Gallery />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
