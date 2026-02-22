import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import ChesapeakeRepipingInfo from "@/components/landing/ChesapeakeRepipingInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>home repiping chesapeake va - Chesapeake Repiping Pros</title>
        <meta name="description" content="home repiping chesapeake va - Professional whole-home repiping in Chesapeake. Master plumbers providing PEX and copper pipe replacement, galvanized pipe removal, and leak prevention." />
        <meta name="keywords" content="home repiping chesapeake va, whole home repiping Chesapeake, PEX pipe installation Chesapeake, galvanized pipe replacement Chesapeake VA, plumber Chesapeake VA" />
        <link rel="canonical" href="https://homerepipingchesapeakeva.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Chesapeake Repiping Pros",
            "image": "/1.jpeg",
            "@id": "https://homerepipingchesapeakeva.com/",
            "url": "https://homerepipingchesapeakeva.com/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1215 Volvo Pkwy",
              "addressLocality": "Chesapeake",
              "addressRegion": "VA",
              "postalCode": "23320",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.7416",
              "longitude": "-76.2427"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Home Repiping Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Chesapeake Repiping Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Chesapeake, VA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Home Repiping Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PEX Pipe Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Copper Pipe Replacement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Whole-Home Plumbing Modernization" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="home repiping chesapeake va - Chesapeake Repiping Pros" />
        <meta property="og:description" content="home repiping chesapeake va - Expert whole-home repiping and pipe modernization services in Chesapeake, VA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homerepipingchesapeakeva.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              home repiping <br />
              <span className="text-white drop-shadow-sm uppercase">chesapeake va</span>
            </>
          }
          subtitle="Chesapeake's specialized experts in whole-home repiping and pipe modernization. We provide comprehensive inspections, PEX conversions, and high-performance copper systems to protect your home from leaks and water damage. Available 24/7 for emergency service."
          image="/1.jpeg"
          overlayImage="/3.jpeg"
          badge="CHESAPEAKE REPIPING ELITE"
          phone="8777921410"
        />
        <Services />
        <WhyUs />
        <ChesapeakeRepipingInfo />
        <Contact />
        <FAQ />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
