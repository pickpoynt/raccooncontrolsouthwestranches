import { ShieldCheck, Clock, Award, Hammer } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Rapid Habitat Assessment",
    description: "Wildlife intrusions require quick action. Our Brooksville team provides fast assessments and exclusion paths to secure your property 24/7."
  },
  {
    icon: Hammer,
    title: "Exclusion Mastery",
    description: "We are wildlife experts. Our technicians use premium shielding materials and precision methods to ensure chipmunks stay out permanently."
  },
  {
    icon: Award,
    title: "Brooksville Certified",
    description: "Fully licensed and insured specifically for residential wildlife control in Florida. We follow strict safety protocols for all removal services."
  },
  {
    icon: ShieldCheck,
    title: "Humane Removal Promise",
    description: "Our focus is on humane practices. We use live-trapping and relocation methods to safely manage Brooksville's local wildlife populations."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            <img
              src="/2.jpeg"
              alt="Professional Vole Control in Brooksville"
              className="rounded-[3rem] shadow-2xl relative z-10 border border-white"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl z-20 border border-slate-100 max-w-[240px]">
              <p className="text-3xl font-bold text-indigo-600 mb-1">100%</p>
              <p className="text-sm font-bold text-slate-900 uppercase tracking-tight leading-tight">Removal Rate in Brooksville FL</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 uppercase tracking-tight">
              Premium <span className="text-indigo-600 border-b-4 border-indigo-600/20">Vole Removal</span> <br />
              Experts in Brooksville
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] blur-3xl" />
                <img
                  src="/2.jpeg"
                  alt="Professional Vole Control in Brooksville"
                  className="rounded-[3rem] shadow-2xl relative z-10 border border-slate-100"
                />
              </div>
              <div className="order-1 md:order-2 space-y-8">
                {[
                  {
                    title: "Landscape Preservation",
                    desc: "Our methods stop underground tunneling immediately, saving your sod, flower beds, and expensive root systems from destruction."
                  },
                  {
                    title: "Localized Brooksville Expertise",
                    desc: "We understand the specific behavior of Florida voles and how they interact with Hernando County's unique soil and plant life."
                  },
                  {
                    title: "Precision Underground Control",
                    desc: "Using advanced subsurface control methods, we eliminate the source of the infestation without damaging your lawn's aesthetics."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-900/20 group-hover:rotate-6 transition-transform">
                      <ShieldCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Ready to reclaim your home?</p>
                  <h4 className="text-2xl font-bold text-slate-900 uppercase tracking-tight leading-none">Call Brooksville's Best</h4>
                </div>
                <a
                  href="tel:3238801224"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-lg shadow-indigo-900/20 hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  (323) 880-1224
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};




export default WhyUs;
