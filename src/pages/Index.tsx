import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BrooksvilleChipmunkInfo from "@/components/landing/BrooksvilleChipmunkInfo";
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
        <title>chipmunk removal brooksville fl - Brooksville Chipmunk Removal Pros</title>
        <meta name="description" content="Looking for chipmunk removal brooksville fl? Professional wildlife control, humane trapping, and exclusion services for Brooksville properties. Call 3238801224 today!" />
        <meta name="keywords" content="chipmunk removal brooksville fl, Brooksville wildlife control, humane chipmunk trapping Brooksville, squirrel control Brooksville FL, pest control Brooksville" />
        <link rel="canonical" href="https://chipmunkremovalbrooksvillefl.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Brooksville Chipmunk Removal Pros",
            "image": "/1.jpeg",
            "@id": "https://chipmunkremovalbrooksvillefl.vercel.app/",
            "url": "https://chipmunkremovalbrooksvillefl.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main St",
              "addressLocality": "Brooksville",
              "addressRegion": "FL",
              "postalCode": "34601",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5553",
              "longitude": "-82.3879"
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
            "serviceType": "Wildlife Control & Chipmunk Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Brooksville Chipmunk Removal Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Brooksville, FL"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Chipmunk Removal Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Humane Trapping" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wildlife Exclusion" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Property Protection" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Attic Sanitization" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="chipmunk removal brooksville fl - Brooksville Chipmunk Removal Pros" />
        <meta property="og:description" content="Expert chipmunk removal services in Brooksville, FL. Humane trapping and long-term exclusion solutions to protect your home." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chipmunkremovalbrooksvillefl.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Chipmunk <br />
              <span className="text-white drop-shadow-sm uppercase">Removal in Brooksville FL</span>
            </>
          }
          subtitle="Brooksville's premier specialists in professional chipmunk removal brooksville fl. We provide humane trapping, advanced exclusion techniques, and comprehensive property protection to keep your landscape wildlife-free. Dedicated to Brooksville's safety and peace of mind. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="BROOKSVILLE CHIPMUNK REMOVAL PROS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <BrooksvilleChipmunkInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Local Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Earwig Exterminator Denver</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Rodent Control Corvallis Oregon</a>
              <a href="https://leakingpiperepairinmodesto.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Leaking Pipe Repair Modesto</a>
            </div>
          </div>
        </section>

        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;





