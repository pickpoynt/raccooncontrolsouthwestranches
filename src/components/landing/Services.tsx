import { ArrowRight, Search, ShieldCheck, Bug, Droplets, Home } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">Brown recluse spider control La Grange</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            La Grange residents trust us for precision brown recluse elimination, deep-structure exclusion, and long-term spider prevention. We target every spider harborage site found in Oldham County homes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Spider Inspection",
              description: "Comprehensive inspection of your La Grange property — identifying spider harborage sites in wall voids, attics, and cluttered storage areas unique to Kentucky homes.",
            },
            {
              icon: ShieldCheck,
              title: "Structure Exclusion",
              description: "Professional-grade exclusion including sealing cracks, crevices, and utility penetrations to block spider entry points into your living spaces and bedrooms.",
            },
            {
              icon: Bug,
              title: "Targeted Elimination",
              description: "Clinical-grade spider treatments and deep-structure fogging to rapidly eliminate brown recluse populations already established inside your La Grange home.",
            },
            {
              icon: Home,
              title: "Clutter Management",
              description: "Spiders thrive in clutter. We provide detailed habitat modification plans and exterior perimeter barriers to keep venomous spiders away from your family.",
            }
          ].map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
              <a href="#contact">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Get Service <ArrowRight className="w-4 h-4" />
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
