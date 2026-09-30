import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section className="w-full bg-black py-20 md:py-40 flex justify-center px-6 overflow-hidden">
            <div className="w-full max-w-[1400px] flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <span className="text-[var(--color-brand-red-light)] text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-12 block">OUR CREED</span>
                    
                    {/* Big Typography Section */}
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl lg:text-[90px] xl:text-[110px] font-black text-white tracking-tighter leading-[0.85] uppercase italic select-none">
                            WE DON'T<br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5">BUILD BODIES.</span>
                        </h2>
                        <h2 className="text-4xl md:text-6xl lg:text-[90px] xl:text-[110px] font-black tracking-tighter leading-[0.85] uppercase italic select-none text-[var(--color-brand-red)]">
                            WE BUILD<br/>
                            <span>LEGENDS.</span>
                        </h2>
                    </div>

                    <p className="mt-16 text-white/20 text-sm md:text-xl font-black uppercase tracking-[0.2em] max-w-2xl mx-auto italic">
                        Pain is temporary. Pride is forever. Discipline is the only currency we accept.
                    </p>

                    {/* Background Decorative Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[120px] w-full max-w-4xl h-64 bg-[var(--color-brand-red)] opacity-10 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default Philosophy;
