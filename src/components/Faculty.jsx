import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Award, Target, Zap, Instagram, Twitter } from 'lucide-react';

const TrainerModal = ({ trainer, isOpen, onClose }) => {
    if (!trainer) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative w-[90%] xs:w-full max-w-4xl bg-[#0A0A0A] border border-white/10 rounded-[24px] md:rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl max-h-[90vh]"
                    >
                        {/* Close Button - Highly visible and fixed to top right */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            className="absolute top-3 right-3 md:top-5 md:right-5 z-[210] w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--color-brand-red)] transition-all cursor-pointer border border-white/20 shadow-lg"
                        >
                            <X size={16} />
                        </button>

                        {/* Left: Image Side - Compact on mobile */}
                        <div className="w-full md:w-5/12 h-[140px] xs:h-[180px] md:h-auto flex-shrink-0 relative overflow-hidden bg-white/5">
                            <img
                                src={trainer.img}
                                alt={trainer.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] from-5% via-[#0A0A0A]/70 to-transparent flex flex-col justify-end p-4 md:p-8">
                                <span className="text-[var(--color-brand-red-light)] text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase mb-1 md:mb-2">{trainer.role}</span>
                                <h2 className="text-white text-xl xs:text-2xl md:text-4xl font-black uppercase italic leading-none">{trainer.name}</h2>
                            </div>
                        </div>

                        {/* Right: Info Side - Tight spacing for mobile */}
                        <div className="w-full md:w-7/12 p-4 xs:p-5 md:p-12 overflow-y-auto bg-[#0A0A0A] flex flex-col justify-center">
                            <div className="space-y-4 md:space-y-8">
                                {/* Philosophy - Hidden on very small screens to fit */}
                                <div className="hidden xs:block md:block">
                                    <span className="text-white/20 text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase mb-1.5 md:mb-3 block">PHILOSOPHY</span>
                                    <p className="text-white text-sm md:text-lg font-bold italic leading-snug tracking-tight">
                                        &quot;Engineering a mindset that defies physical limits through scientific intensity.&quot;
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-3 md:gap-6 pt-0 xs:pt-3 md:pt-4 border-t-0 xs:border-t border-white/5">
                                    <div className="flex flex-col gap-0.5 md:gap-1">
                                        <div className="flex items-center gap-1.5 md:gap-2 text-[var(--color-brand-red)]">
                                            <Award size={12} className="md:w-4 md:h-4" />
                                            <span className="text-[7px] md:text-[9px] font-black tracking-widest uppercase text-white/40">EXPERIENCE</span>
                                        </div>
                                        <span className="text-white font-black italic text-sm md:text-lg leading-none">15+ YEARS</span>
                                    </div>
                                    <div className="flex flex-col gap-0.5 md:gap-1">
                                        <div className="flex items-center gap-1.5 md:gap-2 text-[var(--color-brand-red)]">
                                            <Zap size={12} className="md:w-4 md:h-4" />
                                            <span className="text-[7px] md:text-[9px] font-black tracking-widest uppercase text-white/40">SPECIALTY</span>
                                        </div>
                                        <span className="text-white font-black italic text-sm md:text-lg leading-none uppercase tracking-tighter">{trainer.specialty}</span>
                                    </div>
                                </div>

                                {/* Bio */}
                                <div>
                                    <span className="text-white/20 text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase mb-1.5 md:mb-3 block">BACKGROUND</span>
                                    <p className="text-white/60 text-[10px] xs:text-xs md:text-sm font-medium leading-tight md:leading-relaxed">
                                        {trainer.bio}
                                    </p>
                                </div>

                                {/* Socials */}
                                <div className="flex gap-2.5 pt-3 md:pt-4 border-t border-white/5 pb-2 md:pb-0">
                                    <button className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-[var(--color-brand-red)] hover:bg-white/10 transition-all">
                                        <Instagram size={14} className="md:w-4 md:h-4" />
                                    </button>
                                    <button className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-[var(--color-brand-red)] hover:bg-white/10 transition-all">
                                        <Twitter size={14} className="md:w-4 md:h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Faculty = () => {
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const trainers = [
        {
            name: "Marcus Thorne",
            role: "Head Strength Coach",
            specialty: "Powerlifting",
            bio: "Marcus is an industry leader in periodization and absolute strength development. He has coached over 50 competitive lifters to international success.",
            img: "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Sarah Jenkins",
            role: "CrossFit Specialist",
            specialty: "Functional",
            bio: "Certified L3 CrossFit Coach with a focus on core stability and explosiveness. Sarah's training sessions are legendary for their intensity.",
            img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "David 'Vulkan' Rossi",
            role: "Bodybuilding Pro",
            specialty: "Hypertrophy",
            bio: "IFBB Pro with a scientific approach to muscle engineering. David specializes in contest prep and advanced nutritional partitioning.",
            img: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    const openProfile = (trainer) => {
        setSelectedTrainer(trainer);
        setIsModalOpen(true);
    };

    return (
        <section className="w-full flex justify-center px-6 md:px-12 lg:px-24 py-12 bg-black font-inter">
            <div className="w-full max-w-[1400px]">

                <div className="mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[var(--color-brand-red-light)] text-xs font-black tracking-widest uppercase"
                    >
                        THE BEST IN THE BUSINESS
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-[900] text-white tracking-tighter mt-4 leading-none uppercase italic"
                    >
                        ELITE FACULTY.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 pb-8 md:pb-0">
                    {trainers.map((trainer, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="relative rounded-[20px] md:rounded-[50px] overflow-hidden group border border-white/5 h-[300px] xs:h-[360px] md:h-[520px]"
                        >
                            <img
                                src={trainer.img}
                                alt={trainer.name}
                                className="w-full h-full object-cover brightness-75 md:brightness-90 group-hover:brightness-50 transition-all duration-700 md:group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-4 md:p-10 flex flex-col justify-end transform md:translate-y-16 md:group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-[var(--color-brand-red-light)] text-[7px] md:text-[9px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase mb-1 md:mb-3 block">
                                    {trainer.role}
                                </span>
                                <h3 className="text-white text-base xs:text-xl md:text-3xl font-black uppercase tracking-tighter leading-[0.9] italic mb-3 md:mb-6">
                                    {trainer.name}
                                </h3>

                                <div className="space-y-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:delay-100 pb-1 md:pb-0">
                                    <button
                                        onClick={() => openProfile(trainer)}
                                        className="px-4 py-2 md:px-6 md:py-3.5 bg-white text-black rounded-lg md:rounded-full text-[8px] md:text-[10px] font-black tracking-widest md:tracking-[0.2em] uppercase hover:bg-[var(--color-brand-red)] hover:text-white transition-all shadow-xl w-full md:w-fit"
                                    >
                                        View Profile ↗
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <TrainerModal
                    trainer={selectedTrainer}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />

            </div>
        </section>
    );
};

export default Faculty;
