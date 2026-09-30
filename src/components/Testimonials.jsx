import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const MarqueeRow = ({ reviews, speed = 40 }) => {
    // Duplicate reviews for seamless loop
    const duplicatedReviews = [...reviews, ...reviews, ...reviews];

    return (
        <div className="flex overflow-hidden py-10 md:py-24 select-none group/marquee relative">
            {/* Inline CSS for the marquee to handle pause without jumping */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .marquee-inner {
                    display: flex;
                    animation: marquee-scroll ${speed}s linear infinite;
                    will-change: transform;
                }
                .marquee-inner:has(.review-card:hover) {
                    animation-play-state: paused;
                }
            `}} />

            <div className="marquee-inner flex gap-5 md:gap-10 px-4">
                {duplicatedReviews.map((rev, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="review-card w-[200px] xs:w-[240px] md:w-[380px] shrink-0 bg-[#0A0A0A] border border-white/5 p-6 md:p-12 rounded-[30px] md:rounded-[60px] flex flex-col justify-between transition-all duration-500 group relative overflow-hidden"
                    >
                        {/* Background Accent */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-brand-red)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="relative z-10">
                            {/* Quote Icon - Subtle */}
                            <div className="mb-4 md:mb-10 text-[var(--color-brand-red)] opacity-20 group-hover:opacity-40 transition-opacity">
                                <Quote size={20} md:size={32} fill="currentColor" />
                            </div>

                            <p className="text-white/80 text-[12px] md:text-xl font-medium leading-[1.6] md:leading-[1.7] italic mb-8 md:mb-12 tracking-tight">
                                &quot;{rev.text}&quot;
                            </p>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700">
                                        <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-black uppercase text-[12px] md:text-[15px] tracking-tight">{rev.name}</h4>
                                        <p className="text-[var(--color-brand-red)] text-[9px] md:text-[11px] font-black uppercase tracking-[0.1em]">{rev.role}</p>
                                    </div>
                                </div>

                                <div className="space-y-1 pt-4 border-t border-white/5 group-hover:border-[var(--color-brand-red)]/20 transition-colors">
                                    <div className="flex gap-1 text-[var(--color-brand-red)]">
                                        {[...Array(5)].map((_, j) => <Star key={j} size={10} md:size={12} fill="currentColor" />)}
                                    </div>
                                    <span className="text-[9px] md:text-[10px] font-black text-white/10 group-hover:text-white/30 tracking-[0.2em] transition-colors uppercase italic">
                                        Member Since 2024
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const Testimonials = () => {
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    const reviews = [
        { name: "John Wick", role: "Athlete", tier: "TITAN", text: "PulseFlex isn't just a gym. It's where I found the focus to exceed my limits. The environment is unrivaled.", img: "https://i.pravatar.cc/150?u=1" },
        { name: "Sarah Connor", role: "Powerlifter", tier: "ELITE", text: "Best equipment I've ever used. The platforms are solid and the community is incredibly supportive.", img: "https://i.pravatar.cc/150?u=2" },
        { name: "Bruce Wayne", role: "Entrepeneur", tier: "PLATINUM", text: "Luxury meets performance. 24/7 access and elite recovery facilities make it the perfect fit.", img: "https://i.pravatar.cc/150?u=3" },
        { name: "Alex Mercer", role: "Bodybuilder", tier: "TITAN", text: "The biometrics tracking changed everything. This is data-driven fitness at its peak.", img: "https://i.pravatar.cc/150?u=4" },
        { name: "Sonia Blade", role: "Combat Pro", tier: "ELITE", text: "Professional zones that understand the needs of high-performance athletes.", img: "https://i.pravatar.cc/150?u=5" },
        { name: "Leon Kennedy", role: "Tactical Trainer", tier: "TITAN", text: "The atmosphere is pure motivation. No distractions, just pure gains.", img: "https://i.pravatar.cc/150?u=6" }
    ];

    return (
        <section className="w-full py-12 md:py-24 bg-black font-inter overflow-hidden">
            <div className="w-full">

                <div className="mb-4 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="h-[1px] w-12 bg-white/10" />
                        <span className="text-[var(--color-brand-red-light)] text-[11px] font-[900] tracking-[0.5em] uppercase">THE TRIBE</span>
                        <div className="h-[1px] w-12 bg-white/10" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4 leading-none uppercase italic"
                    >
                        THE<br />REVIEWS.
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Premium Gradient Fades - Reduced for mobile to show content */}
                    <div className="absolute inset-y-0 left-0 w-12 md:w-80 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-12 md:w-80 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none" />

                    <MarqueeRow reviews={reviews} speed={isMobile ? 60 : 50} />
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
