import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeCTA = () => {
    return (
        <section className="w-full flex justify-center px-6 md:px-12 lg:px-24 py-8 md:py-20 bg-black font-inter overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-[1400px] bg-[var(--color-brand-red)] rounded-[40px] md:rounded-[60px] p-10 md:p-16 lg:p-20 flex flex-col items-center text-center relative overflow-hidden group shadow-[0_0_80px_rgba(124,18,18,0.2)]"
            >
                {/* Background Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
                    <h2 className="text-[120px] md:text-[200px] lg:text-[250px] font-black italic uppercase leading-none">PULSE</h2>
                </div>

                <div className="relative z-10 max-w-3xl">
                    <span className="text-white/60 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase mb-4 md:mb-6 block italic">READY FOR THE NEXT LEVEL?</span>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] md:leading-[0.9] uppercase italic mb-6 md:mb-8">
                        STOP WAITING.<br />START DOMINATING.
                    </h2>
                    <p className="text-white/80 text-sm md:text-lg lg:text-xl font-semibold mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto">
                        Join Toronto's most elite iron community and transform your physique with state-of-the-art biometrics and elite coaching.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/contact" className="bg-white text-black px-10 md:px-12 py-4 md:py-5 rounded-full font-black text-[10px] md:text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all shadow-2xl">
                            VIEW PLANS ↗
                        </Link>
                    </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 blur-3xl -ml-16 -mb-16" />
            </motion.div>
        </section>
    );
};

export default HomeCTA;
