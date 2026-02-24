import { ShieldCheck, Search, Activity, Sprout, Home, Zap } from "lucide-react";

const servicesList = [
  {
    icon: Home,
    title: "Water Extraction",
    description: "Our water damage restoration josephine tx experts use industrial-grade pumps to rapidly remove standing water from your property."
  },
  {
    icon: Search,
    title: "Flood Cleanup",
    description: "Detailed cleanup of flood-affected areas, including debris removal and sanitization to prevent secondary damage in Josephine."
  },
  {
    icon: ShieldCheck,
    title: "Structural Drying",
    description: "Creating a long-lasting dry environment using high-velocity air movers and dehumidifiers to protect your home's structure."
  },
  {
    icon: Activity,
    title: "Mold Remediation",
    description: "Safe, rapid-response mold removal and preventative treatments for basements, bathrooms, and crawl spaces in Josephine."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">water damage restoration josephine tx</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
            Comprehensive restoration solutions designed for Josephine's unique residential landscape. We protect your home's structural integrity from emergency water damage.
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
