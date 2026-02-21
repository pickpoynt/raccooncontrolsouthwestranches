import { ShieldCheck, MapPin, Activity, Locate, ClipboardCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Oldham County Spider Control Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Why La Grange Trusts <span className="text-indigo-600">Our Spider Pros</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-bold italic">
              When brown recluse spiders invade your La Grange home, our licensed spider control specialists deliver the specialized solution for Oldham County properties.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Activity, title: "Same-Day Response", description: "We dispatch same-day for venomous spider sightings in La Grange and surrounding Oldham County communities — stopping infestations safely." },
                { icon: Locate, title: "Oldham County Local", description: "Stationed locally in La Grange, KY for rapid response anywhere across the region — from Crestwood to Buckner and Pewee Valley." },
                { icon: ClipboardCheck, title: "Licensed & Certified", description: "Our technicians are Kentucky state-licensed structural pest control professionals following strict brown recluse treatment protocols." },
                { icon: Sparkles, title: "Advanced Treatment", description: "We use micro-encapsulated treatments and exclusion-first methods that prioritize family safety and long-term spider elimination." }
              ].map((feature, index) => (
                <div key={index} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600 border border-slate-100 shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm">{feature.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed italic font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-500/20 shadow-2xl relative group">
              <img
                src="/2.jpeg"
                alt="Spider Exclusion Equipment La Grange"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden border-4 border-indigo-500/20 shadow-2xl relative group mt-8 md:mt-16">
              <img
                src="/3.jpeg"
                alt="Professional Brown Recluse Control La Grange Kentucky"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-2">Spiders Active?</p>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Call La Grange's Best</h4>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-10 px-6 rounded-xl uppercase tracking-widest text-[10px] w-full" asChild>
                  <a href="tel:3238801224">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
