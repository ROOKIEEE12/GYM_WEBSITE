import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldCheck } from 'lucide-react';

const About = () => {
    // High-Resolution Cinematic Media
    const gymInteriorPhoto = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070";
    const founderPhoto = "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974";

    const achievements = [
        { title: "Best Performance Gym 2022", icon: <Trophy className="text-[var(--color-brand-red)]" /> },
        { title: "Top Rated Coaches in Toronto", icon: <Star className="text-[var(--color-brand-red)]" /> },
        { title: "Elite Community Award", icon: <Award className="text-[var(--color-brand-red)]" /> },
        { title: "Health Excellence Certified", icon: <ShieldCheck className="text-[var(--color-brand-red)]" /> }
    ];

    return (
        <section className="w-full flex justify-center px-6 md:px-12 lg:px-24 pt-20 pb-10 bg-black font-inter overflow-hidden">
            <div className="w-full max-w-[1400px]">

                {/* Section 1: Our Origin (Focus: Facility/Gym) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative rounded-[60px] overflow-hidden group shadow-2xl h-[400px] md:h-[600px] border border-white/5 order-2 lg:order-1"
                    >
                        <img
                            src={gymInteriorPhoto}
                            alt="PulseFlex Elite Interior"
                            className="w-full h-full object-cover grayscale-0 brightness-100 group-hover:brightness-50 group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-10 left-10">
                            <span className="text-[var(--color-brand-red-light)] text-[10px] font-black tracking-[0.3em] uppercase mb-4 block italic">THE GENESIS</span>
                            <h3 className="text-white text-3xl font-black uppercase tracking-tighter leading-none italic">BEYOND GYM.<br />A PERFORMANCE LAB.</h3>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-10 order-1 lg:order-2">
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-[var(--color-brand-red-light)] text-xs font-black tracking-widest uppercase"
                            >
                                ESTABLISHED 2005
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4 leading-none"
                            >
                                BORN IN THE IRON,<br />DRIVEN BY DATA.
                            </motion.h2>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-8 text-white/50 text-sm md:text-lg font-medium leading-relaxed">
                            <p>
                                <span className="text-white font-bold italic text-base md:text-xl">PulseFlex</span> was founded in 2005 to eradicate mediocre training. What started as a basement 'Iron Lab' is now a 25,000 sq. ft. high-performance ecosystem.
                            </p>
                            <p className="hidden md:block">
                                We don't just provide equipment; we provide an environment where biomechanics meets discipline. Our facility is engineered for those who demand 100% ROI on their sweat and time.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="flex flex-col border-l-2 border-[var(--color-brand-red)] pl-4">
                                <span className="text-2xl font-black text-white leading-none tracking-tighter uppercase italic">18YRS</span>
                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-2">Legacy</span>
                            </div>
                            <div className="flex flex-col border-l-2 border-[var(--color-brand-red)] pl-4">
                                <span className="text-2xl font-black text-white leading-none tracking-tighter uppercase italic">25K+</span>
                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-2">Sq. Ft.</span>
                            </div>
                            <div className="flex flex-col border-l-2 border-[var(--color-brand-red)] pl-4">
                                <span className="text-2xl font-black text-white leading-none tracking-tighter uppercase italic">50+</span>
                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest mt-2">Athletic Gear</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: The Founders (Focus: People) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-20 md:mb-32">

                    <div className="flex flex-col gap-10">
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-[var(--color-brand-red-light)] text-xs font-black tracking-widest uppercase"
                            >
                                THE ARCHITECTS
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4 leading-none"
                            >
                                FOUNDED BY<br />ATHLETES.
                            </motion.h2>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-8 text-white/50 text-sm md:text-lg font-medium leading-relaxed">
                            <p>
                                Founders <span className="text-white font-bold italic text-base md:text-xl">Marcus</span> & <span className="text-white font-bold italic text-base md:text-xl">Sarah Thorne</span> are not just owners—they are elite practitioners. Marcus is a <span className="text-[var(--color-brand-red-light)]">NASM Certified Performance Specialist</span>, while Sarah is a <span className="text-[var(--color-brand-red-light)]">Precision Nutrition L2 Coach</span>.
                            </p>
                            <p className="hidden md:block">
                                Their combined expertise ensures that PulseFlex remains at the intersection of strength science and elite nutrition. Every piece of equipment in the facility is personally vetted by them for maximum biomechanical efficiency.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {['NASM-CPT', 'PN-L2', 'CSCS', 'IKFF'].map(cert => (
                                <div key={cert} className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black text-white/40 tracking-[0.2em] transform transition-all hover:bg-[var(--color-brand-red)] hover:text-white hover:border-[var(--color-brand-red)] cursor-default">
                                    {cert}
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative rounded-[60px] overflow-hidden group shadow-2xl h-[400px] md:h-[600px] border border-white/5"
                    >
                        <img
                            src={founderPhoto}
                            alt="The Founders"
                            className="w-full h-full object-cover grayscale-0 brightness-100 group-hover:brightness-75 group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-10 left-10">
                            <p className="text-white/40 font-bold uppercase tracking-widest text-[10px] mb-2">Message from the Founders</p>
                            <h3 className="text-white text-2xl font-black uppercase tracking-tighter leading-tight italic">"YOUR POTENTIAL IS OUR PASSION. JOIN THE EVOLUTION."</h3>
                        </div>
                    </motion.div>
                </div>

                {/* Section 3: Hall of Fame */}
                <div className="pt-20 md:pt-32 pb-4 border-t border-white/5">
                    <div className="mb-12 md:mb-16 text-left">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[var(--color-brand-red-light)] text-xs font-black tracking-widest uppercase"
                        >
                            RECOGNITION
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4 leading-none"
                        >
                            HALL OF FAME.
                        </motion.h2>
                        <p className="text-white/30 text-[9px] md:text-xs font-black uppercase tracking-[0.3em] max-w-[400px] leading-loose mt-4 md:mt-6">
                            CONTINUOUSLY SETTING THE GLOBAL STANDARD FOR ELITE PHYSICAL PERFORMANCE.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pb-6 md:pb-0">
                        {achievements.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative bg-white/[0.01] border border-white/5 rounded-[20px] md:rounded-[50px] p-4 md:p-12 flex flex-col justify-between group overflow-hidden hover:bg-white/[0.03] hover:border-[var(--color-brand-red)]/50 transition-all duration-700 h-[180px] xs:h-[200px] md:h-[320px]"
                            >
                                <div className="absolute -top-4 -right-2 md:-top-10 md:-right-6 text-[70px] xs:text-[90px] md:text-[160px] font-black text-white/[0.02] italic select-none group-hover:text-[var(--color-brand-red)]/5 transition-all duration-1000 leading-none">
                                    0{i + 1}
                                </div>
                                <div className="z-10 bg-black shadow-2xl w-10 h-10 xs:w-12 xs:h-12 md:w-16 md:h-16 rounded-[12px] md:rounded-[20px] flex items-center justify-center text-[var(--color-brand-red)] border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <div className="scale-75 xs:scale-100 md:scale-125">{item.icon}</div>
                                </div>
                                <div className="relative z-10 pt-4">
                                    <h4 className="text-white text-xs xs:text-sm md:text-2xl font-black uppercase tracking-tighter leading-none italic mb-2 md:mb-4 w-full">
                                        {item.title}
                                    </h4>
                                    <div className="w-6 xs:w-8 md:w-10 h-[2px] md:h-[3px] bg-[var(--color-brand-red)] group-hover:w-full transition-all duration-700 rounded-full" />
                                </div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--color-brand-red),transparent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
