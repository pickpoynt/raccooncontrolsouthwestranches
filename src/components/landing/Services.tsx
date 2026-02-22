import { ArrowRight, Search, ShieldCheck, Bug, Droplets, Home } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">home repiping chesapeake va</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Chesapeake homeowners trust us for professional whole-home repiping, specialized PEX conversions, and high-performance copper water line replacements. We restore your home's plumbing to peak efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Leak Inspection",
              description: "Comprehensive diagnostic inspection of your Chesapeake property — identifying corrosion in galvanized pipes and pinhole leaks in older copper systems.",
            },
            {
              icon: ShieldCheck,
              title: "PEX Conversion",
              description: "Modern PEX-a piping installation that is flexible, freeze-resistant, and scale-resistant — ideal for the varied climates of the Hampton Roads area.",
            },
            {
              icon: Bug,
              title: "Copper Repiping",
              description: "Traditional high-quality Type L copper repiping for homeowners who prefer the durability, longevity, and antimicrobial benefits of rigid metal piping.",
            },
            {
              icon: Home,
              title: "Main Water Line",
              description: "Full replacement of your home's main water service line from the meter to the house, tackling low pressure and contaminated water at the source.",
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
                  Get Estimate <ArrowRight className="w-4 h-4" />
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
