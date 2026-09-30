import { motion } from 'framer-motion';
import { Target, Zap, Shield, Clock, Coffee, Wind, Monitor, Bath } from 'lucide-react';

const Features = () => {
    const highlights = [
        { title: "24/7 ELITE ACCESS", icon: <Clock /> },
        { title: "PRO-LEVEL GEAR", icon: <Zap /> },
        { title: "GOAL TRACKING", icon: <Target /> },
        { title: "FUEL HUB", icon: <Coffee /> },
        { title: "RECOVERY ZONE", icon: <Wind /> },
        { title: "WARRIOR LOUNGE", icon: <Monitor /> }
    ];

    return (
        <section className="w-full bg-black py-20 md:py-32 font-inter overflow-hidden">
            <div className="w-full px-6 md:px-12 lg:px-24">
                
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Left: Aggressive Imagery */}
                    <div className="flex-1 relative order-2 lg:order-1">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-[80px] overflow-hidden aspect-square lg:aspect-[4/5] h-[500px] md:h-[700px] border border-white/5"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975" 
                                alt="Elite Training" 
                                className="w-full h-full object-cover brightness-75 scale-110 transition-transform duration-[2000ms]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-90 lg:hidden" />
                        </motion.div>
                        

                    </div>

                    {/* Right: Asymmetrical Info List (No Cards) */}
                    <div className="flex-1 space-y-10 md:space-y-16 order-1 lg:order-2">
                        <div>
                            <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-[var(--color-brand-red-light)] text-xs font-black tracking-[0.4em] uppercase"
                            >
                                THE ADVANTAGE
                            </motion.span>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mt-4 leading-[0.9] uppercase italic"
                            >
                                ENGINEERED FOR<br/>
                                <span className="text-[var(--color-brand-red)]">PERFORMANCE.</span>
                            </motion.h2>
                        </div>

                        <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:gap-y-12 md:gap-x-20">
                            {highlights.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-2 md:gap-6 group"
                                >
                                    <div className="mt-1 text-[var(--color-brand-red-light)] scale-75 md:scale-125 group-hover:scale-90 md:group-hover:scale-150 group-hover:rotate-12 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-1 md:space-y-2 w-full">
                                        <h4 className="text-white font-black uppercase text-[9px] md:text-sm tracking-widest leading-normal group-hover:text-[var(--color-brand-red-light)] transition-colors">
                                            {item.title}
                                        </h4>
                                        <div className="w-4 md:w-6 h-[2px] bg-white/10 group-hover:w-full transition-all duration-700" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="w-full md:w-auto bg-white text-black px-6 md:px-12 py-4 md:py-5 rounded-lg md:rounded-full font-black text-[9px] md:text-xs tracking-widest uppercase hover:bg-[var(--color-brand-red)] hover:text-white transition-all shadow-xl md:shadow-2xl">
                            EXPLORE THE FACILITY ↗
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
