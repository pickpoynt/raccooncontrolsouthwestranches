import { ShieldCheck, Target, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Bug, Thermometer, Wind, Home, Shield, Volume2, Sparkles, Sprout, Shovel } from "lucide-react";

const FrankenmuthGopherControlInfo = () => {
    return (
        <section id="gopher-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Frankenmuth Michigan Pest Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">Gopher control Frankenmuth MI</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting your lawns, gardens, and landscapes from destructive tunneling and burrowing. Our Frankenmuth-based gopher control specialists deploy sub-surface intervention and advanced removal methods to ensure the pristine condition of your residential or commercial property.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    The Gopher Threat in Saginaw County
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Tunnel Pattern Analysis</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Gophers in Michigan are masters of subterranean engineering. A single gopher can create hundreds of feet of tunnels in a matter of weeks. Our Gopher control Frankenmuth MI team uses specialized probes to map active runways, ensuring our treatments reach the heart of the colony.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Sprout className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Landscape Preservation</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                From historical gardens to modern lawns, we implement non-disruptive removal systems. We focus on neutralizing the threat without destroying your grass or flower beds, using targeted techniques that bypass the need for heavy excavation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Home className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Foundation Protection</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Gophers often tunnel near foundations and under walkways, leading to soil erosion and structural instability. We provide perimeter hardening to prevent gophers from undermining your home's integrity, ensuring your property remains solid and secure.
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
                                    Serving Frankenmuth & Saginaw County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Rapid response for Gopher control Frankenmuth MI in:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Frankenmuth",
                                        "Bridgeport",
                                        "Birch Run",
                                        "Vassar",
                                        "Reese",
                                        "Millington",
                                        "Richville",
                                        "Tuscola"
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
                                <img src="/3.jpeg" alt="Gopher Control Mitigation" className="absolute bottom-0 right-0 w-40 h-40 object-cover opacity-20 rounded-tl-full" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Bavaria Standard</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    In Frankenmuth, we take pride in our community's aesthetic beauty. Our Gopher control Frankenmuth MI experts are deeply familiar with the rich soil of the Cass River Valley. We provide precision-based management plans that maintain the charm of "Little Bavaria" while providing absolute relief from gopher infestations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-indigo-600">Gopher control Frankenmuth MI</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Shovel, title: "Fresh Soil Mounds", desc: "Crescent-shaped mounds of fresh, loose soil are the hallmark of pocket gopher activity. Unlike mole hills, gopher mounds are usually plugged on one side." },
                                { icon: Activity, title: "Chewed Utility Lines", desc: "Gophers have a destructive habit of gnawing on everything they encounter underground, including irrigation lines and electrical cables." },
                                { icon: Sprout, title: "Vanishing Plants", desc: "If your garden plants or saplings are suddenly being pulled underground or dying from root damage, it is a critical sign of a gopher infestation." }
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
                                    Reclaim Your Landscape Today
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't wait for your yard to be tunneled into ruin. Our Frankenmuth gopher control team provides immediate assessment and intervention to remove pests and protect your investment.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Pest Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Soil Safe</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">24/7 Response</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Gopher control Frankenmuth MI</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    Gopher control Frankenmuth MI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrankenmuthGopherControlInfo;
