import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
    const [phase, setPhase] = useState('loading'); // loading, transitioning
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Phase 1: Brand Loading Sequence
        const timer1 = setTimeout(() => {
            setPhase('transitioning');
        }, 1800);

        // Phase 2: Signal App to show site
        const timer2 = setTimeout(() => {
            onComplete();
        }, 2800);

        return () => {
            window.removeEventListener('resize', checkMobile);
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[2000] bg-black flex items-center justify-center font-inter overflow-hidden pointer-events-none"
        >
            <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Migration Logo - Perfectly synced with Navbar across resolutions */}
                <motion.div 
                    className="z-[2001] absolute flex items-center justify-center"
                    initial={{ y: 0, scale: 1 }}
                    animate={phase === 'transitioning' ? {
                        y: isMobile ? "calc(-50vh + 48px)" : "calc(-50vh + 58px)",
                        scale: isMobile ? 0.6 : 0.281, 
                        transition: { 
                            duration: 1, 
                            ease: [0.6, 0.01, -0.05, 0.95] 
                        }
                    } : { y: -8 }}
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center justify-center"
                    >
                        <span className="text-5xl md:text-9xl font-[900] tracking-[-0.05em] text-white uppercase italic leading-none whitespace-nowrap block">
                            PULSE<span className="text-[var(--color-brand-red)]">FLEX</span>
                        </span>
                    </motion.div>
                </motion.div>

                {/* Sub-loading Elements */}
                <AnimatePresence>
                    {phase === 'loading' && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                            className="absolute mt-[18rem] md:mt-[22rem] flex flex-col items-center w-full"
                        >
                            <span className="text-[9px] font-black text-[var(--color-brand-red-light)] tracking-[0.8em] uppercase opacity-40 block mb-6">
                                INITIALIZING ELITE PROTOCOL
                            </span>
                            <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden">
                                <motion.div 
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 1.6, ease: "linear" }}
                                    className="absolute inset-0 bg-[var(--color-brand-red)]"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CRT/Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(30deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </motion.div>
    );
};

export default Preloader;
