import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Humane Trapping",
    description: "Our chipmunk removal brooksville fl experts use specialized, humane live-trapping systems to safely relocate chipmunks away from your property."
  },
  {
    icon: Search,
    title: "Wildlife Exclusion",
    description: "Advanced exclusion techniques designed to seal entry points and prevent chipmunks and squirrels from entering your Brooksville home or attic."
  },
  {
    icon: ShieldCheck,
    title: "Property Protection",
    description: "Strategic solutions for protecting your landscaping, pool decks, and foundations from the destructive burrowing habits of chipmunks."
  },
  {
    icon: Activity,
    title: "Habitat Modification",
    description: "Expert advice and practical changes to your property's exterior that make it less attractive to wildlife, ensuring long-term results."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">chipmunk removal brooksville fl</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Comprehensive wildlife solutions designed for Brooksville's unique properties. We reclaim your home's integrity and safety.
          </p>
        </div>





        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-indigo-900/20 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
