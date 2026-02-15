import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TulsaPlumbingInfo from "@/components/landing/TulsaPlumbingInfo";
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
        <title>plumber tulsa ok Tulsa OK</title>
        <meta name="description" content="plumber tulsa ok Tulsa OK. Expert repair, leak detection & master drain services in Tulsa. 24/7 emergency response & precision diagnostics. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber tulsa ok, Tulsa plumbers, emergency plumber Tulsa, drain cleaning Tulsa, plumbing repair OK, Green Country plumbing" />
        <link rel="canonical" href="https://tulsa-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tulsa Plumbing Pros",
            "image": "input_file_0.png",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tulsa",
              "addressRegion": "OK",
              "postalCode": "74103",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.1540",
              "longitude": "-95.9928"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Tulsa, OK"
            },
            "priceRange": "$$",
            "description": "Professional residential and commercial plumbing services in Tulsa, OK. We specialize in rapid emergency response, slab leak detection, and technical drain restoration across Green Country."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Professional Plumbing & Mechanical Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Tulsa Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Tulsa, OK"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Maintenance & Repair",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency Pipe Burst Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "High-Performance Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Green Country Drain Analytics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Professional Infrastructure Installation"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber tulsa ok - Tulsa's Technical Plumbing Authority" />
        <meta property="og:description" content="Expert plumbing and mechanical services in Tulsa. Rapid 24/7 response for Green Country homeowners. Mechanical Excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tulsa-plumbing-pros.com/" />
        <meta property="og:image" content="input_file_1.png" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber tulsa ok Tulsa OK
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Tulsa Plumbing Pros</span>
            </>
          }
          subtitle="Tulsa's trusted authority for high-performance infrastructure. We provide advanced slab leak detection, master drain restoration, and precision emergency repair. Mechanical Precision Mastercraft."
          image="input_file_0.png"
          overlayImage="input_file_1.png"
          badge="TULSA MASTER PLUMBERS"
        />
        <Services />
        <WhyUs />
        <TulsaPlumbingInfo />
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
