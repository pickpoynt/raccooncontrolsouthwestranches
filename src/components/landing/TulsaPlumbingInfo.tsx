import { Droplets, ShieldCheck, Zap, Home, CheckCircle2 } from "lucide-react";

const tulsaFactors = [
    {
        icon: Home,
        title: "Art Deco Era Preservation",
        description: "Tulsa's rich architectural heritage, especially in districts like Maple Ridge, requires specialized plumbing care. We specialize in maintaining the integrity of vintage infrastructure while integrating modern technical solutions."
    },
    {
        icon: Droplets,
        title: "Hard Water Management",
        description: "Oklahoma's groundwater can be tough on pipes and appliances. We provide advanced softening and filtration systems specifically calibrated for the mineral profile of Tulsa's municipal water supply."
    },
    {
        icon: Zap,
        title: "Arkansas River Basin Ready",
        description: "Living near the river means unique drainage challenges. Our teams are experts in high-performance sump pump systems and foundation drain restoration to protect your Green Country home from seasonal fluctuations."
    },
    {
        icon: ShieldCheck,
        title: "Oklahoma Code Compliance",
        description: "We strictly adhere to Tulsa mechanical and plumbing codes, ensuring every project—from Brookside to Jenks—meets the highest safety and infrastructure standards."
    }
];

const plumbingBenefits = [
    {
        title: "Licensed Master Technicians",
        description: "Our plumbers are Oklahoma-licensed masters with decades of combined experience in high-performance infrastructure."
    },
    {
        title: "Sonic Leak Detection",
        description: "We use advanced ultrasonic technology to pinpoint hidden leaks under Tulsa slabs without unnecessary excavation."
    },
    {
        title: "Flat-Rated Diagnostics",
        description: "No hidden fees. You get a transparent project breakdown and fixed-rate pricing for all restoration services before any work begins."
    },
    {
        title: "24/7 Priority Emergency",
        description: "Tulsa weather and plumbing issues don't follow a schedule. Our rapid response teams are on standby 365 days a year."
    }
];

const TulsaPlumbingInfo = () => {
    return (
        <section id="tulsa-plumbing-info" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('input_file_0.png')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-4 backdrop-blur-sm uppercase tracking-widest">
                        Green Country's Infrastructure Authority
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 italic text-indigo-100">
                        Professional Technical Restoration in Tulsa, OK
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Tulsa is more than just a skyline; it's a community built on technical innovation and history. From the bustling streets of downtown to the family homes in South Tulsa,
                        we provide the technical expertise required to maintain the vital systems that power our city.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {tulsaFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-indigo-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-indigo-400">
                                Global-Standard Infrastructure Care
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                We believe in permanent solutions, not patches. Our Tulsa-based teams use global-standard diagnostic tools
                                to restore your plumbing systems to peak performance, ensuring long-term reliability for your property.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {plumbingBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="input_file_1.png"
                                alt="Tulsa Oklahoma Infrastructure"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg italic uppercase tracking-wider text-sm">Mechanical Precision Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strategic Service Network */}
                <div className="mt-20">
                    <h4 className="text-center text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8">
                        Our Regional Service Network
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "Dallas Plumber", link: "https://dallasplumber.vercel.app" },
                            { name: "San Antonio Plumbing", link: "https://sanantonioplumbing.vercel.app" },
                            { name: "Plumber San Francisco CA", link: "https://plumbersanfranciscoca.vercel.app/" },
                            { name: "Plumber Charlotte NC", link: "https://plumbercharlottenc.vercel.app/" }
                        ].map((site) => (
                            <a
                                key={site.name}
                                href={site.link}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold text-sm uppercase tracking-widest hover:border-indigo-500/50 shadow-xl"
                            >
                                {site.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TulsaPlumbingInfo;
