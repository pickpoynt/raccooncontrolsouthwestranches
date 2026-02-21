import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Bug, Thermometer, Wind } from "lucide-react";

const LaGrangeSpiderControlInfo = () => {
    return (
        <section id="lagrange-spider-control-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>La Grange Kentucky Spider Control Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">Brown recluse spider control La Grange</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Specialized brown recluse elimination for La Grange, KY homes. We deploy clinical-grade spider treatments, deep-structure fogging, and comprehensive exclusion to eliminate the reclusive threat and protect your family from venomous bites.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    The Brown Recluse Threat in Kentucky
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Stealthy Infestations</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Brown recluse spiders are notoriously difficult to detect. They hide in wall voids, attics, and cluttered storage areas. Our Brown recluse spider control La Grange specialists use advanced flushing agents to move these spiders out of their hiding spots for effective elimination.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Residual Barrier Protection</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We apply specialized micro-encapsulated insecticides that provide a long-lasting barrier. These treatments are specifically designed to stick to the legs of spiders as they crawl, ensuring the toxin is absorbed even when the spider isn't directly sprayed.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Clutter Management & Exclusion</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Spiders thrive in clutter. We provide detailed recommendations for reducing harborage sites and seal small cracks and crevices that act as entry points into your living spaces, effectively "locking out" future generations of spiders.
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
                                    Serving La Grange & Oldham County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Rapid Brown recluse spider control La Grange service for these areas:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "La Grange",
                                        "Crestwood",
                                        "Buckner",
                                        "Goshen",
                                        "Pewee Valley",
                                        "Westport",
                                        "Ballardsville",
                                        "Oldham County"
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
                                <img src="/3.jpeg" alt="Brown Recluse Control" className="absolute bottom-0 right-0 w-40 h-40 object-cover opacity-20 rounded-tl-full" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The "Fiddle" Back Warning</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    Identified by the dark violin-shaped mark on their back, the brown recluse is one of the few medically significant spiders in Kentucky. A bite can cause necrotic skin lesions and systemic illness. In La Grange, these spiders are common in older homes and outbuildings. Our Brown recluse spider control La Grange team is specifically trained to handle these high-risk infestations safely and thoroughly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-indigo-600">Brown recluse spider control La Grange</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Bug, title: "Shed Skins", desc: "Finding translucent spider molts in dark corners or storage bins is a clear sign that spiders are maturing and reproducing within your home." },
                                { icon: Droplets, title: "Irregular Webs", desc: "Unlike common house spiders, brown recluses build messy, irregular webs in baseboards or corners primarily for hiding, not for catching prey." },
                                { icon: Wind, title: "Night Sightings", desc: "If you see a medium-sized brown spider scurrying across the floor at night, it's likely searching for food. Immediate Brown recluse spider control La Grange is recommended." }
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
                                    Found a Spider with a Violin Mark?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't risk a bite. Brown recluses are defensive and can be found in shoes, bedding, and closets. Our Brown recluse spider control La Grange team provides immediate, same-day intervention to secure your home.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">KY State Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Venomous Specialist</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Same-Day Service</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Brown recluse spider control La Grange</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    Brown recluse spider control La Grange
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LaGrangeSpiderControlInfo;
