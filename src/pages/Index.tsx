import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import FrankenmuthGopherControlInfo from "@/components/landing/FrankenmuthGopherControlInfo";
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
        <title>Gopher control Frankenmuth MI - Frankenmuth Gopher Control Pros</title>
        <meta name="description" content="Gopher control Frankenmuth MI - Professional gopher removal and landscape protection in Frankenmuth. Specialized pest experts providing humane removal and property securing." />
        <meta name="keywords" content="Gopher control Frankenmuth MI, gopher removal Frankenmuth, landscape protection Frankenmuth, garden pest control Saginaw County, wildlife management Frankenmuth MI" />
        <link rel="canonical" href="https://gophercontrolfrankenmuthmi.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Frankenmuth Gopher Control Pros",
            "image": "/1.jpeg",
            "@id": "https://gophercontrolfrankenmuthmi.vercel.app/",
            "url": "https://gophercontrolfrankenmuthmi.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "635 S Main St",
              "addressLocality": "Frankenmuth",
              "addressRegion": "MI",
              "postalCode": "48734",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "43.3323",
              "longitude": "-83.7383"
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
            "serviceType": "Gopher Control & Landscape Protection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Frankenmuth Gopher Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Frankenmuth, MI"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Gopher Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Underground Tunnel Mitigation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sub-surface Gopher Removal" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landscape Restoration & Hardening" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="Gopher control Frankenmuth MI - Frankenmuth Gopher Control Pros" />
        <meta property="og:description" content="Gopher control Frankenmuth MI - Expert gopher removal and landscape protection services in Frankenmuth, MI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gophercontrolfrankenmuthmi.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Gopher control <br />
              <span className="text-white drop-shadow-sm uppercase">Frankenmuth MI</span>
            </>
          }
          subtitle="Frankenmuth's specialized experts in professional gopher control and landscape asset protection. We provide rapid-response pest mitigation, sub-surface tracking, and property securing to safeguard your lawn and garden from destructive gophers. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="FRANKENMUTH GOPHER PROS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <FrankenmuthGopherControlInfo />
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
