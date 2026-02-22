import { Button } from "@/components/ui/button";
import { Locate, Phone, ShieldCheck, MapPin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 mb-6 font-bold uppercase tracking-wider text-sm shadow-sm">
            <Locate className="w-4 h-4" />
            CHESAPEAKE REPIPING PROS
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight uppercase tracking-tight">
            Modernize <span className="text-indigo-600">home repiping chesapeake va</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium italic">
            Protect your Chesapeake property from catastrophic pipe failures. Our master plumbing team provides whole-home repiping, PEX conversions, and high-performance copper systems across Chesapeake and the Hampton Roads region.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-5 group border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">REPIPE HOTLINE</p>
                <a href="tel:8777921410" className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition-colors uppercase tracking-tight">
                  (877) 792-1410
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 border border-slate-100">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">MASTER LICENSED</p>
                <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">Virginia Master Plumbing Specialists</p>
              </div>
            </div>

            <div className="flex items-start gap-5 border-b border-slate-100 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-indigo-600 border border-slate-100">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-1">NAP</p>
                <p className="text-xl font-bold text-slate-900 uppercase tracking-tight">Chesapeake Repiping Pros</p>
                <p className="text-slate-500 font-medium text-sm">1215 Volvo Pkwy, Chesapeake, VA 23320</p>
                <p className="text-slate-500 font-medium text-sm">(877) 792-1410</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-indigo-900/10 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-widest">Request Estimate</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Name</label>
                <input type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium" placeholder="Property Owner" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone</label>
                <input type="tel" className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium" placeholder="(877) 792-1410" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Service Needed</label>
              <select className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium">
                <option>Whole-Home Repiping (PEX/Copper)</option>
                <option>Galvanized Pipe Replacement</option>
                <option>Main Water Line Repair</option>
                <option>Slab Leak Solution</option>
                <option>Polybutylene Conversion</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Plumbing Details</label>
              <textarea rows={4} className="w-full bg-slate-50 border-slate-200 rounded-xl p-6 focus:ring-2 focus:ring-indigo-500 transition-all outline-none font-medium" placeholder="Describe your current plumbing issues or the age of your home..."></textarea>
            </div>
            <div className="space-y-4">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-16 rounded-xl text-lg font-bold shadow-lg shadow-indigo-900/20 uppercase tracking-widest transition-all">
                Request Free Estimate
              </Button>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-slate-500 text-xs text-center mb-2 font-bold uppercase tracking-widest">Leasing Opportunity</p>
                <p className="text-slate-600 text-[10px] text-center italic leading-tight">
                  Are you a local Chesapeake plumber? Replace this phone number with yours for only $19/month.
                  <a href="mailto:bankonmanish@gmail.com" className="text-indigo-600 font-bold ml-1">Email bankonmanish@gmail.com</a>
                </p>
              </div>
            </div>
            <p className="text-center text-slate-500 text-sm italic font-medium">
              *Estimates available across Chesapeake, Portsmouth, and the Southside area.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
