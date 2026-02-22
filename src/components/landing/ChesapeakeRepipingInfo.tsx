import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Hammer, Thermometer, Wind, Bath, Wrench } from "lucide-react";

const ChesapeakeRepipingInfo = () => {
    return (
        <section id="chesapeake-repiping-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Chesapeake Virginia Repiping Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">home repiping chesapeake va</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Comprehensive repiping solutions for Chesapeake, VA homes. We replace aging galvanized, polybutylene, and corroded copper pipes with high-durability PEX and modern copper systems to restore your home's water pressure and purity.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    Why Chesapeake Homes Need Repiping
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Aging Infrastructure</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Many homes in Chesapeake and the surrounding Hampton Roads area still feature original galvanized pipes that are now past their life expectancy. Our home repiping chesapeake va specialists identify internal corrosion that restricts flow and taints your water.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Leak Prevention</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Pinhole leaks in old copper or split seams in polybutylene can cause massive water damage. We provide whole-home solutions that eliminate these risks entirely, giving you peace of mind during Virginia's humid summers and freezing winters.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Water Quality & Pressure</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                If you notice brown water or low pressure when running multiple fixtures, your pipes are likely failing. A full repipe restores "like-new" performance to your showers, appliances, and taps.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving Chesapeake & Southside
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Priority home repiping chesapeake va service for these neighborhoods:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Greenbrier",
                                        "Great Bridge",
                                        "Western Branch",
                                        "Deep Creek",
                                        "South Norfolk",
                                        "Hickory",
                                        "Indian River",
                                        "Portsmouth"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <img src="/3.jpeg" alt="Repiping Process" className="absolute bottom-0 right-0 w-40 h-40 object-cover opacity-20 rounded-tl-full" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Modern PEX Advantage</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    We specialize in PEX (cross-linked polyethylene) repiping, which is more flexible, resistant to scale buildup, and faster to install than traditional rigid piping. For Chesapeake homeowners, this means less wall damage during installation and a lifetime of reliable service. Our home repiping chesapeake va team ensures every connection is masterfully crimped or expanded.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-indigo-600">home repiping chesapeake va</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Wrench, title: "Frequent Leaks", desc: "If you've had more than two leaks in the last year, your piping system has reached the end of its structural integrity." },
                                { icon: Droplets, title: "Discolored Water", desc: "Rust-colored or yellow water is a sign of internal pipe oxidation, commonly seen in older Chesapeake galvanized systems." },
                                { icon: Wind, title: "Odor or Taste", desc: "Metallic tastes or unusual odors in your drinking water often stem from pipe degradation and sediment buildup." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technical CTA Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    Worried About Your Home's Water?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't wait for a major flood. Older pipes are a ticking time bomb. Our home repiping chesapeake va team provides no-obligation inspections and flat-rate estimates to modernize your home safely.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Master Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">PEX Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Free Estimates</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">home repiping chesapeake va</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (877) 792-1410
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    home repiping chesapeake va
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChesapeakeRepipingInfo;
