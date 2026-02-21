import { Phone, MapPin, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <ShieldCheck className="w-7 h-7 text-indigo-500" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none tracking-tight text-white uppercase">South Point Pest</span>
                <span className="text-sm font-medium text-indigo-500 uppercase tracking-widest text-[10px]">Control Pros</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium italic">
              South Point Ohio's trusted pest control experts. We provide targeted pest elimination, perimeter barrier treatments, and full property protection across Lawrence County, OH and the Tri-State area.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {["Pest Inspection", "Perimeter Barrier Treatment", "Indoor Pest Elimination", "Rodent Control", "Preventive Exclusion"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-400 hover:text-indigo-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-indigo-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Coverage Area", "Contact Us", "Privacy Policy", "Lease This Number"].map((item) => (
                <li key={item}>
                  <a href={item === "Lease This Number" ? "/lease" : "#"} className="text-slate-400 hover:text-indigo-500 transition-colors font-medium flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-indigo-500/40 group-hover:w-2 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">NAP</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-indigo-500 shrink-0" />
                <address className="text-slate-400 not-italic font-medium leading-relaxed">
                  South Point Pest Control Pros<br />
                  301 Solida Rd<br />
                  South Point, OH 45680
                </address>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-indigo-500 shrink-0" />
                <a href="tel:3238801224" className="text-xl font-bold text-white hover:text-indigo-500 transition-colors">
                  (323) 880-1224
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm font-medium italic">
            © {new Date().getFullYear()} South Point Pest Control Pros. All rights reserved. Professional Pest Control South Point Ohio.
          </p>
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
