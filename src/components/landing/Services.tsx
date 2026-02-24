import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Vole Trapping",
    description: "Our vole removal brooksville fl specialists use precision trapping along active runways to quickly eliminate vole colonies."
  },
  {
    icon: Search,
    title: "Tunnel Exclusion",
    description: "Advanced underground barriers that are safe for your lawn while providing long-term protection against returning voles in Brooksville."
  },
  {
    icon: Activity,
    title: "Damage Remediation",
    description: "We help collapse and seal old vole tunnel systems to prevent soil erosion and discourage new rodent infestations."
  },
  {
    icon: Zap,
    title: "Emergency Removal",
    description: "Rapid response for active vole damage in Brooksville. We deploy fast-acting, professional-grade control protocols immediately."
  },
  {
    icon: Sprout,
    title: "Landscape Protection",
    description: "Targeted protection for your gardens, sod, and shrubbery root systems using professional-grade wildlife management techniques."
  },
  {
    icon: ShieldCheck,
    title: "Property Shield",
    description: "Seasonal inspections and proactive monitoring to ensure your Brooksville property remains free of vole activity year-round."
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
