import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const gymHeroImg = "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070";

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden font-inter bg-black">
      
      {/* Background with accurate dimming */}
      <div className="absolute inset-0 z-0">
        <img 
          src={gymHeroImg} 
          alt="PulseFlex Luxury Gym" 
          className="w-full h-full object-cover grayscale-0 brightness-[0.3] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1100px] px-6 text-center text-white pt-20">
        
        {/* Red Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[var(--color-brand-red-light)] text-[11px] md:text-[13px] font-black tracking-[0.4em] mb-6 md:mb-8 uppercase"
        >
          ELITE TRAINING PROTOCOL // EST. 2026
        </motion.p>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-[100px] font-[900] leading-[0.9] mb-12 lg:mb-16 tracking-[-0.05em] md:tracking-[-0.07em] max-w-[950px] mx-auto text-white italic uppercase"
        >
          FOR THE DRIVEN.<br/>FOR THE ELITE.
        </motion.h1>

        {/* Precise Red Pill Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link to="/memberships">
            <button className="bg-[var(--color-brand-red)] text-white flex items-center rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(124,18,18,0.3)] group overflow-hidden">
              <span className="py-4 md:py-5 pl-10 pr-6 font-black text-[13px] md:text-[15px] tracking-widest leading-none uppercase">JOIN NOW</span>
              <div className="py-4 md:py-5 pr-10 border-l border-white/10 flex items-center justify-center">
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          </Link>
        </motion.div>

      </div>

      {/* Static Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
      
    </section>
  );
};

export default Hero;
