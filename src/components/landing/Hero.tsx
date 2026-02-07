import { Button } from "@/components/ui/button";
import { Phone, Truck, Shield, Settings, Droplets } from "lucide-react";
import React from "react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Septic tank pumping Bismarck ND
      <span className="block text-emerald-400 mt-2">Bismarck Septic Experts: Reliable Pumping & Maintenance</span>
    </>
  ),
  subtitle = "Professional septic tank pumping, cleaning, and inspection services in Bismarck, North Dakota. We provide rapid response for residential and commercial systems throughout Burleigh County. Licensed experts ensuring your system runs smoothly.",
  image = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Septic Tank Pumping Bismarck"
          className="w-full h-full object-cover"
        />
        {/* Unique Image Overlay as requested */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1541888941257-2283e390c29f?auto=format&fit=crop&q=80"
            alt="Industrial Concrete Pattern"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-emerald-900/80" />
      </div>

      {/* Simple Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-emerald-700/60 border border-emerald-400/50 rounded-full text-emerald-50 font-bold text-sm mb-6 backdrop-blur-md">
              Bismarck's Top-Rated Septic Service
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight drop-shadow-2xl">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fade-in-delay-1 leading-relaxed font-medium drop-shadow-lg">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-emerald-900/40" asChild>
              <a href="tel:8777921410" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (877) 792-1410
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white animate-fade-in-delay-3 drop-shadow-md">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="font-bold">Licensed Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-emerald-400" />
              <span className="font-bold">Fast Pumping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">
                ND
              </div>
              <span className="font-bold">Bismarck</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-emerald-400" />
              <span className="font-bold">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

