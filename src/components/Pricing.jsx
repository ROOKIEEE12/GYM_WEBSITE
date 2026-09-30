import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
   return (
      <section className="w-full flex justify-center px-3 md:px-12 lg:px-24 pt-20 pb-10 bg-black font-inter overflow-hidden">
          <div className="w-full max-w-[1400px] flex flex-col">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 lg:mb-24">
                 <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                 >
                    <span className="text-[var(--color-brand-red-light)] text-xs font-black tracking-widest uppercase">MEMBERSHIP</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4 max-w-xl leading-none">
                        SELECT YOUR<br />STRENGTH LEVEL.
                    </h2>
                 </motion.div>
                 <motion.p 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-white/40 font-semibold mt-4 md:mt-0 text-sm md:text-base max-w-xs md:text-right leading-relaxed"
                 >
                    High-performance training requiring high-performance commitment. No hidden fees.
                 </motion.p>
              </div>
              
              <div className="grid grid-cols-3 gap-2 md:gap-8 pt-6 md:pt-0">
                 
                 {/* Card 1 */}
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-2.5 md:p-10 border border-white/10 rounded-[16px] md:rounded-[40px] flex flex-col h-full bg-white/[0.02] hover:border-[var(--color-brand-red)]/50 shadow-2xl transition-all group"
                 >
                     <div className="flex flex-col md:flex-row items-start md:items-baseline gap-0 md:gap-2 mb-3 md:mb-8">
                         <span className="text-xl md:text-5xl font-black text-white leading-none">$15</span>
                         <span className="text-[7px] md:text-sm font-bold text-white/40 uppercase mt-1 md:mt-0">/ Day</span>
                     </div>
                     <h4 className="text-[9px] md:text-xl font-black text-white mb-3 md:mb-8 uppercase tracking-tight leading-none">Recruit Pass</h4>
                     <ul className="space-y-2 md:space-y-4 mb-4 md:mb-10 flex-1">
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/60 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-[var(--color-brand-red)] shrink-0 mt-px md:mt-0.5"/> <span>Single day access</span></li>
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/60 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-[var(--color-brand-red)] shrink-0 mt-px md:mt-0.5"/> <span>All equipment access</span></li>
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/60 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-[var(--color-brand-red)] shrink-0 mt-px md:mt-0.5"/> <span>Shower & Recovery</span></li>
                     </ul>
                     <button className="w-full py-2 px-1 md:py-4 rounded-lg md:rounded-full font-black text-[6.5px] md:text-xs tracking-widest uppercase border border-white/20 text-white hover:bg-white hover:text-black transition-all">Get Pass</button>
                 </motion.div>
                 
                 {/* Card 2 (Highlight) */}
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[var(--color-brand-red)] p-2.5 md:p-12 rounded-[16px] md:rounded-[40px] flex flex-col h-full shadow-[0_0_60px_rgba(124,18,18,0.25)] scale-105 z-10 border border-[var(--color-brand-red)] relative md:-top-3"
                 >
                     <div className="flex flex-col md:flex-row items-start md:items-baseline gap-0 md:gap-2 mb-3 md:mb-8">
                         <span className="text-2xl md:text-6xl font-black text-white leading-none">$50</span>
                         <span className="text-[7px] md:text-sm font-bold text-white/60 uppercase mt-1 md:mt-0">/ Month</span>
                     </div>
                     <h4 className="text-[9px] md:text-xl font-black text-white mb-3 md:mb-8 uppercase tracking-tight leading-none">Warrior Plan</h4>
                     <ul className="space-y-2 md:space-y-4 mb-4 md:mb-10 flex-1">
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/90 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-white shrink-0 mt-px md:mt-0.5"/> <span>24/7 Unlimited Access</span></li>
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/90 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-white shrink-0 mt-px md:mt-0.5"/> <span>All classes included</span></li>
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/90 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-white shrink-0 mt-px md:mt-0.5"/> <span>Free guest pass (1/mo)</span></li>
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/90 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-white shrink-0 mt-px md:mt-0.5"/> <span>Fitness coaching consult</span></li>
                     </ul>
                     <button className="w-full bg-white text-black py-2 px-1 md:py-4 rounded-lg md:rounded-full font-black text-[6.5px] md:text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-all text-center">Join Tribe</button>
                 </motion.div>
                 
                 {/* Card 3 */}
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-2.5 md:p-10 border border-white/10 rounded-[16px] md:rounded-[40px] flex flex-col h-full bg-white/[0.02] hover:border-[var(--color-brand-red)]/50 transition-all group"
                 >
                     <div className="flex flex-col md:flex-row items-start md:items-baseline gap-0 md:gap-2 mb-3 md:mb-8">
                         <span className="text-xl md:text-5xl font-black text-white leading-none">$90</span>
                         <span className="text-[7px] md:text-sm font-bold text-white/40 uppercase mt-1 md:mt-0">/ Month</span>
                     </div>
                     <h4 className="text-[9px] md:text-xl font-black text-white mb-3 md:mb-8 uppercase tracking-tight leading-none">Elite Tier</h4>
                     <ul className="space-y-2 md:space-y-4 mb-4 md:mb-10 flex-1">
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/60 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-[var(--color-brand-red)] shrink-0 mt-px md:mt-0.5"/> <span>Everything in Warrior</span></li>
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/60 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-[var(--color-brand-red)] shrink-0 mt-px md:mt-0.5"/> <span>2 Personal Sessions/mo</span></li>
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/60 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-[var(--color-brand-red)] shrink-0 mt-px md:mt-0.5"/> <span>Nutrition coaching</span></li>
                        <li className="flex items-start gap-1.5 md:gap-3 text-[6.5px] md:text-sm font-semibold text-white/60 leading-tight"><CheckCircle2 strokeWidth={2.5} className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] text-[var(--color-brand-red)] shrink-0 mt-px md:mt-0.5"/> <span>VIP Locker & Laundry</span></li>
                     </ul>
                     <button className="w-full py-2 px-1 md:py-4 rounded-lg md:rounded-full font-black text-[6.5px] md:text-xs tracking-[0.05em] md:tracking-widest uppercase border border-white/20 text-white hover:bg-white hover:text-black transition-all text-center">Elite Access</button>
                 </motion.div>

              </div>
          </div>
      </section>
   );
};

export default Pricing;
