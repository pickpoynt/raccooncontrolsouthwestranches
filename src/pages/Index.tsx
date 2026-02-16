import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import DalhartPlumbingInfo from "@/components/landing/DalhartPlumbingInfo";
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
        <title>plumber dalhart tx Location</title>
        <meta name="description" content="plumber dalhart tx Location - Specialized plumbing solutions, leak detection & residential infrastructure services in Dalhart, TX. Call (877) 792-1410 for local experts." />
        <meta name="keywords" content="plumber dalhart tx, Dalhart plumber, plumbing repair Dalhart, emergency plumber Dalhart, Dallam County plumbing, Hartley County plumbing" />
        <link rel="canonical" href="https://dalhart-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dalhart Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dalhart",
              "addressRegion": "TX",
              "postalCode": "79022",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.0595",
              "longitude": "-102.5133"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Dalhart, TX"
            },
            "priceRange": "$$",
            "description": "Professional residential plumbing services in Dalhart, Texas. Specialized in technical diagnostics, infrastructure restoration, and master-licensed care for High Plains property owners."
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
              "name": "Dalhart Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Dalhart, Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dalhart Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "High Plains Leak Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Dallam-Hartley Pipe Restoration"
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
        <meta property="og:title" content="plumber dalhart tx Location - Dalhart Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing solutions in Dalhart, Texas. Technical restoration and infrastructure maintenance for High Plains residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dalhart-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber dalhart tx Location
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Dalhart Plumbing Pros</span>
            </>
          }
          subtitle="Dalhart's trusted authority for resilient home infrastructure in the Texas Panhandle. We provide precision diagnostics, technical restoration, and master-licensed support for Dallam and Hartley County property owners. High Plains Engineering Excellence."
          image="https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=2000"
          badge="DALHART AUTHORIZED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <DalhartPlumbingInfo />
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
