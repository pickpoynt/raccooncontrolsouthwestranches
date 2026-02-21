import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import LaGrangeSpiderControlInfo from "@/components/landing/LaGrangeSpiderControlInfo";
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
        <title>Brown recluse spider control La Grange - La Grange Brown Recluse Pros</title>
        <meta name="description" content="Brown recluse spider control La Grange - Professional brown recluse spider control in La Grange. Licensed exterminators providing targeted elimination, exclusion, and spider prevention." />
        <meta name="keywords" content="Brown recluse spider control La Grange, spider exterminator La Grange, La Grange brown recluse removal, pest control La Grange KY" />
        <link rel="canonical" href="https://brownreclusespidercontrollagrange.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "La Grange Brown Recluse Pros",
            "image": "/1.jpeg",
            "@id": "https://brownreclusespidercontrollagrange.com/",
            "url": "https://brownreclusespidercontrollagrange.com/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "100 E Main St",
              "addressLocality": "La Grange",
              "addressRegion": "KY",
              "postalCode": "40031",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "38.4074",
              "longitude": "-85.3802"
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
            "serviceType": "Brown Recluse Spider Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": "La Grange Brown Recluse Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "La Grange, KY"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Brown Recluse Spider Control Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Detailed Spider Inspection" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brown Recluse Elimination" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Exclusion & Sealing" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="Brown recluse spider control La Grange - La Grange Brown Recluse Pros" />
        <meta property="og:description" content="Brown recluse spider control La Grange - Expert spider elimination and prevention services in La Grange, KY." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brownreclusespidercontrollagrange.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Brown recluse spider control <br />
              <span className="text-white drop-shadow-sm uppercase">La Grange</span>
            </>
          }
          subtitle="La Grange's specialized experts in brown recluse spider elimination. We provide comprehensive inspections, targeted treatments, and long-term exclusion to keep your home safe from venomous spiders. Available 24/7 for emergency spider control."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="LA GRANGE SPIDER CONTROL ELITE"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <LaGrangeSpiderControlInfo />
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
