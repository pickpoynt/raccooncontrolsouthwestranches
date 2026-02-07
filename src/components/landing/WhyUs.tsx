import { Shield, Truck, Clock, MapPin, Award, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Licensed Experts",
    description: "Our team consists of fully licensed and insured septic service professionals in North Dakota. We follow all environmental and safety protocols."
  },
  {
    icon: Truck,
    title: "High-Capacity Trucks",
    description: "We use modern, high-capacity vacuum trucks to ensure efficient pumping and thorough cleaning of residential and commercial septic systems."
  },
  {
    icon: MapPin,
    title: "Bismarck Locals",
    description: "We are locally owned and operated. From downtown Bismarck to rural Burleigh County, we know the local soil conditions and regulations."
  },
  {
    icon: Award,
    title: "System Preservation",
    description: "Regular pumping is key to preserving your drain field. We provide professional advice and inspections to help extend the life of your system."
  },
  {
    icon: DollarSign,
    title: "No Hidden Fees",
    description: "Honest, upfront pricing for every job. We provide clear quotes including disposal fees, so you know exactly what to expect."
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Septic issues can't wait. We offer flexible scheduling and emergency response to ensure your system is back in order as quickly as possible."
  }
];

const stats = [
  { number: "1000+", label: "Tanks Pumped" },
  { number: "100%", label: "Burleigh Compliant" },
  { number: "5-Star", label: "Local Service" },
  { number: "Local", label: "Bismarck, ND" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Bismarck's Trusted Septic Pumping Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Providing reliable, professional, and rapid septic cleaning services throughout Bismarck and the surrounding North Dakota communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white border border-slate-100 rounded-xl p-8 shadow-sm">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-emerald-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

