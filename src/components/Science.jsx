import { motion } from 'framer-motion';
import { Activity, BarChart3, Smartphone, Cpu } from 'lucide-react';

const Science = () => {
    return (
        <section className="hidden md:block w-full bg-black py-40 font-inter overflow-hidden border-t border-white/5">
            <div className="w-full px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
                
                <div className="relative">
                    {/* Background Massive Text - Non Card Aesthetic */}
                    <div className="absolute -top-20 md:-top-32 left-0 opacity-[0.03] select-none pointer-events-none">
                        <h2 className="text-[120px] md:text-[300px] lg:text-[400px] font-black italic uppercase leading-none text-white tracking-tighter">TECH</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-24 items-start relative z-10">
                        {/* Left: Interactive Blueprint Info */}
                        <div className="flex-1 space-y-20">
                            <div>
                                <motion.span 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="text-[var(--color-brand-red-light)] text-xs font-black tracking-[0.5em] uppercase pb-2 inline-block border-b-2 border-[var(--color-brand-red)]"
                                >
                                    PULSE EXPERTISE
                                </motion.span>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-5xl md:text-8xl font-black text-white tracking-tighter mt-10 leading-[0.85] uppercase italic"
                                >
                                    THE SCIENCE<br/>OF <span className="text-[var(--color-brand-red)]">IRON.</span>
                                </motion.h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                                {[
                                    { title: "BIOMETRICS", icon: <Activity />, desc: "Real-time sync between your pulse and our hub." },
                                    { title: "AI COACH", icon: <Smartphone />, desc: "Algorithm-driven training tailored to your DNS." },
                                    { title: "IOC GEAR", icon: <Cpu />, desc: "Specialized resistance profiling in every plate." },
                                    { title: "ANALYSIS", icon: <BarChart3 />, desc: "Monthly physiological evolution reports." }
                                ].map((item, i) => (
                                    <motion.div 
                                        key={i} 
                                        className="flex flex-col gap-4 group"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="text-[var(--color-brand-red-light)] mb-2 group-hover:scale-110 transition-transform origin-left">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-white font-black uppercase text-xl tracking-tighter italic">{item.title}</h4>
                                        <p className="text-white/30 text-xs font-bold leading-relaxed uppercase tracking-wider max-w-[200px]">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Layered Visuals (No Box Grid) */}
                        <div className="flex-1 relative w-full lg:w-auto h-[400px] md:h-[600px] lg:h-[700px] mt-10 lg:mt-0">
                            {/* Primary Image Overlay */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[40px] md:rounded-[100px] overflow-hidden border border-white/10 shadow-2xl z-20"
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069" 
                                    className="w-full h-full object-cover brightness-100" 
                                    alt="Science of Fit" 
                                />
                            </motion.div>
                            
                            {/* Secondary Layered Photo */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50, y: 50 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-[30px] md:rounded-[60px] overflow-hidden border border-[var(--color-brand-red)]/20 shadow-2xl z-30"
                            >
                                <img 
                                    src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070" 
                                    className="w-full h-full object-cover grayscale brightness-50" 
                                    alt="Pro Gear" 
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Science;
