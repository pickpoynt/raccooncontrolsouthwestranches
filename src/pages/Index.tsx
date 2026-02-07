import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SepticTankPumpingInfo from "@/components/landing/SepticTankPumpingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Septic tank pumping Bismarck ND | Bismarck Septic Pumping Service</title>
        <meta name="description" content="Professional septic tank pumping and cleaning in Bismarck, ND. Expert septic inspections, maintenance, and emergency service in Burleigh County. Call (877) 792-1410 today!" />
        <meta name="keywords" content="septic tank pumping Bismarck ND, septic cleaning Bismarck, septic service Bismarck ND, Bismarck septic pumping, septic tank repair Bismarck" />
        <link rel="canonical" href="https://septic-tank-pumping-bismarck-nd.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bismarck Septic Pumping Service",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bismarck",
              "addressRegion": "ND",
              "postalCode": "58501",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "46.8083",
              "longitude": "-100.7837"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Bismarck, North Dakota"
            },
            "priceRange": "$$",
            "description": "Professional septic tank pumping, cleaning, and maintenance services in Bismarck, North Dakota. Licensed experts for residential and commercial systems."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Septic Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Bismarck Septic Pumping Service",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Bismarck, North Dakota"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Septic System Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Septic Tank Pumping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Septic Tank Cleaning"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Septic System Inspection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Drain Field Maintenance"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Septic tank pumping Bismarck ND | Bismarck Septic Pumping Service" />
        <meta property="og:description" content="Expert septic tank pumping and cleaning in Bismarck, ND. Licensed professionals for safe and efficient septic maintenance. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://septic-tank-pumping-bismarck-nd.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Septic tank pumping Bismarck ND | Bismarck Septic Pumping Service" />
        <meta name="twitter:description" content="Professional septic tank pumping in Bismarck. Safe and reliable septic system maintenance." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <SepticTankPumpingInfo />
      <FAQ />
      <Contact />
      <RandomLinks />
      <Footer />
    </div>
  );
};

export default Index;

