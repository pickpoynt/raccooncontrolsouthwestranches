import { ArrowRight, Search, ShieldCheck, Target, Activity, Home, Shovel, Sprout } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">Gopher control Frankenmuth MI</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Frankenmuth homeowners and property managers trust our specialized team for strategic gopher removal, landscape defense, and property securing. We manage burrowing threats with precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Sprout,
              title: "Landscape Defense",
              description: "Specialized gopher management plans for gardens, lawns, and flower beds in Frankenmuth — ensuring your landscape remains safe from destructive tunneling.",
            },
            {
              icon: Search,
              title: "Runway Mapping",
              description: "Advanced subterranean detection using specialized probes to track gopher runway patterns and identify nesting sites near your property foundation.",
            },
            {
              icon: ShieldCheck,
              title: "Property Securing",
              description: "Installation of underground gopher mesh, root guards, and perimeter hardening techniques to discourage gophers from invading your green spaces.",
            },
            {
              icon: Activity,
              title: "Burrow Neutralization",
              description: "Professional, licensed removal of problem colonies using precision-targeted subterranean methods that are safe for your soil and landscape.",
            }
          ].map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
              <a href="tel:3238801224">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Call Now <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
