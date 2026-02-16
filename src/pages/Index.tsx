import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BarringtonPlumbingInfo from "@/components/landing/BarringtonPlumbingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>plumber barrington il</title>
        <meta name="description" content="plumber barrington il - Specialized plumbing solutions, leak detection & residential infrastructure services in Barrington, IL. Call (877) 792-1410 for local experts." />
        <meta name="keywords" content="plumber barrington il, Barrington plumber, plumbing repair Barrington, emergency plumber Barrington, Cook County plumbing, Lake County plumbing" />
        <link rel="canonical" href="https://barrington-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Barrington Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1517646288024-aa8efd144ee7?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barrington",
              "addressRegion": "IL",
              "postalCode": "60010",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "42.1539",
              "longitude": "-88.1362"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Barrington, IL"
            },
            "priceRange": "$$",
            "description": "Professional residential plumbing services in Barrington, Illinois. Specialized in technical diagnostics, estate infrastructure restoration, and master-licensed care for property owners."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Residential Plumbing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Barrington Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Barrington, Illinois"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Barrington Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cook & Lake Co. Leak Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Barrington Estate Pipe Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Hard Water Optimization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber barrington il - Barrington Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing solutions in Barrington, Illinois. Technical restoration and infrastructure maintenance for Cook & Lake County residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://barrington-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1517646288024-aa8efd144ee7?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber barrington il
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Barrington Plumbing Pros</span>
            </>
          }
          subtitle="Barrington's trusted authority for resilient home infrastructure in the Northwest Suburbs. We provide precision diagnostics, technical restoration, and master-licensed support for distinguished estate property owners. Illinois Engineering Excellence."
          image="https://images.unsplash.com/photo-1517646288024-aa8efd144ee7?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=2000"
          badge="BARRINGTON AUTHORIZED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <BarringtonPlumbingInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
