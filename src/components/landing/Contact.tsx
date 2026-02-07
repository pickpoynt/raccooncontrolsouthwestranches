import { Phone, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Bismarck Septic Tank Pumping
            </h2>
            <p className="text-lg text-slate-300">
              Contact us for reliable, professional septic tank cleaning and maintenance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-750 transition-colors">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1">Call Us Now</h3>
                <a href="tel:8777921410" className="text-emerald-400 text-xl font-bold hover:text-emerald-300 transition-colors">
                  (877) 792-1410
                </a>
                <p className="text-slate-400 text-sm mt-1">Licensed Septic Experts</p>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-750 transition-colors">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1">Service Area</h3>
                <p className="text-slate-300">Bismarck, North Dakota</p>
                <p className="text-slate-400 text-sm mt-1">Burleigh County & Surrounding Areas</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-750 transition-colors">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1">Hours</h3>
                <p className="text-slate-300">Mon - Sun: 24/7 Response</p>
                <p className="text-slate-400 text-sm mt-1">Emergency Pumping Available</p>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-2xl p-8 text-center shadow-2xl border border-emerald-600/30">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Need Your Septic Tank Pumped?
            </h3>
            <p className="text-emerald-100 mb-6">
              Don't wait for a backup! Call now to schedule your routine pumping or emergency service. Our Bismarck team is ready to help maintain your system.
            </p>
            <Button size="lg" className="w-full bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-lg h-14 shadow-lg" asChild>
              <a href="tel:8777921410" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                (877) 792-1410
              </a>
            </Button>
            <p className="text-emerald-200 text-sm mt-4">
              100% Reliable • Licensed & Insured • Free Maintenance Estimates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

