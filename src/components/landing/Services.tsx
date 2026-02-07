import { Truck, Activity, Settings, Shield, AlertTriangle, CheckCircle2, Box, Droplets } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Septic Pumping",
    description: "Complete septic tank pumping for Bismarck homes. We remove sludge and scum to prevent system overflows and maintain healthy drainage.",
    link: "#septic-info"
  },
  {
    icon: Activity,
    title: "Tank Cleaning",
    description: "Professional cleaning of septic tanks using high-vacuum equipment. We ensure your tank is clear of solids and operating at peak efficiency.",
    link: "#septic-info"
  },
  {
    icon: Settings,
    title: "System Inspection",
    description: "Comprehensive visual inspections of baffles, lids, and overall tank health. Included with every pumping service in Bismarck and Mandan.",
    link: "#septic-info"
  },
  {
    icon: Shield,
    title: "Filter Maintenance",
    description: "Cleaning and servicing of effluent filters to protect your leach field from clogging and extend the life of your entire septic system.",
    link: "#septic-info"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Service",
    description: "Rapid response for septic backups and system failures. We identify blockages and pump tanks quickly to prevent domestic sewage issues.",
    link: "#septic-info"
  },
  {
    icon: Box,
    title: "Riser Installation",
    description: "Installing septic tank risers for easier access. No more digging up your yard every time you need a pump or an inspection.",
    link: "#septic-info"
  },
  {
    icon: Droplets,
    title: "Drain Field Care",
    description: "Preventative maintenance for drainage fields. We use eco-friendly treatments to help break down solids and maintain soil absorption.",
    link: "#septic-info"
  },
  {
    icon: CheckCircle2,
    title: "Eco Disposal",
    description: "Safe and responsible disposal of septic waste at approved facilities, strictly following North Dakota environmental regulations.",
    link: "#septic-info"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Bismarck Septic Pumping Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Professional septic maintenance and cleaning services in Bismarck, North Dakota. Licensed experts ensuring safety and environmental compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

