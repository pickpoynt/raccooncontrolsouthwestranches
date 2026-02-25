import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import RaccoonControlInfo from "@/components/landing/RaccoonControlInfo";
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
        <title>Raccoon control Southwest Ranches | Southwest Ranches Raccoon Pros</title>
        <meta name="description" content="Looking for Raccoon control Southwest Ranches? Professional raccoon removal, damage repair, and humane exclusion services for Southwest Ranches properties. Call 3238801224 today!" />
        <meta name="keywords" content="Raccoon control Southwest Ranches, Southwest Ranches wildlife removal, raccoon trapping Southwest Ranches, wildlife exclusion Southwest Ranches FL, pest control Southwest Ranches" />
        <link rel="canonical" href="https://raccooncontrolsouthwestranches.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Southwest Ranches Raccoon Pros",
            "image": "/1.jpeg",
            "@id": "https://raccooncontrolsouthwestranches.vercel.app/",
            "url": "https://raccooncontrolsouthwestranches.vercel.app/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "N Flamingo Rd",
              "addressLocality": "Southwest Ranches",
              "addressRegion": "FL",
              "postalCode": "33330",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "26.0465",
              "longitude": "-80.3662"
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
            "serviceType": "Wildlife Control & Raccoon Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Southwest Ranches Raccoon Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Southwest Ranches, FL"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Raccoon Removal Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Raccoon Trapping" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wildlife Exclusion" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Attic Decontamination" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Damage Repair" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="Raccoon control Southwest Ranches | Southwest Ranches Raccoon Pros" />
        <meta property="og:description" content="Expert raccoon removal services in Southwest Ranches, FL. Protect your home and family with professional trapping and humane exclusion." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raccooncontrolsouthwestranches.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Raccoon <br />
              <span className="text-white drop-shadow-sm uppercase">Control in Southwest Ranches</span>
            </>
          }
          subtitle="Southwest Ranches' premier specialists in professional raccoon control. We provide advanced trapping, humane exclusion techniques, and comprehensive property protection to keep your home wildlife-free. Dedicated to Southwest Ranches' safety and peace of mind. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="SOUTHWEST RANCHES RACCOON PROS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <RaccoonControlInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 uppercase tracking-tight">Our Local Resource Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Earwig Exterminator Denver</a>
              <a href="https://centipederepellenthawaii.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Centipede Repellent Hawaii</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-indigo-600 hover:text-indigo-800 font-bold transition-colors">Rodent Control Corvallis Oregon</a>
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






