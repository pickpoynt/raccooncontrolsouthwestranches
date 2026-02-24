import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import JosephineWaterDamageInfo from "@/components/landing/JosephineWaterDamageInfo";
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
        <title>water damage restoration josephine tx - Josephine Water Damage Pros</title>
        <meta name="description" content="water damage restoration josephine tx - Professional water damage restoration, emergency flood cleanup, and mold remediation in Josephine. Expert technicians available 24/7." />
        <meta name="keywords" content="water damage restoration josephine tx, emergency water removal Josephine, flood cleanup Josephine TX, mold remediation Josephine, water extraction Josephine" />
        <link rel="canonical" href="https://waterdamagerestorationjosephinetx.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Josephine Water Damage Pros",
            "image": "/1.jpeg",
            "@id": "https://waterdamagerestorationjosephinetx.vercel.app/",
            "url": "https://waterdamagerestorationjosephinetx.vercel.app/",
            "telephone": "+13802660944",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main St",
              "addressLocality": "Josephine",
              "addressRegion": "TX",
              "postalCode": "75164",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.0612",
              "longitude": "-96.3150"
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
            "serviceType": "Water Damage Restoration & Flood Cleanup",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Josephine Water Damage Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Josephine, TX"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Water Damage Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Water Extraction" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flood Damage Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mold Mitigation" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="water damage restoration josephine tx - Josephine Water Damage Pros" />
        <meta property="og:description" content="water damage restoration josephine tx - Expert water damage restoration and emergency flood cleanup services in Josephine, TX." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://waterdamagerestorationjosephinetx.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Water Damage <br />
              <span className="text-white drop-shadow-sm uppercase">Restoration in Josephine TX</span>
            </>
          }
          subtitle="Josephine's specialized experts in professional water damage restoration and emergency structural drying. We provide rapid-response flood cleanup, mold remediation, and property protection to safeguard your home after plumbing failures or storms. Available 24/7."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="JOSEPHINE WATER DAMAGE PROS"
          phone="3802660944"
        />
        <Services />
        <WhyUs />
        <JosephineWaterDamageInfo />
        <Contact />
        <FAQ />

        <section className="bg-white py-12 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Our Network of Service Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="https://earwigexterminatordenver.vercel.app/" className="text-blue-600 hover:underline">Earwig Exterminator Denver</a>
              <a href="https://centipederepellenthawaii.vercel.app/" className="text-blue-600 hover:underline">Centipede Repellent Hawaii</a>
              <a href="https://pestcontrolsouthpointohio.vercel.app/" className="text-blue-600 hover:underline">Pest Control South Point Ohio</a>
              <a href="https://rodentcontrolcorvallisoregon.vercel.app/" className="text-blue-600 hover:underline">Rodent Control Corvallis Oregon</a>
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

