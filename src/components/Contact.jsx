import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsSent(true);
            setTimeout(() => setIsSent(false), 3000);
        }, 1500);
    };

    return (
        <section className="w-full flex justify-center px-6 md:px-12 lg:px-24 py-20 bg-black font-inter">
            <div className="w-full max-w-[1400px] flex flex-col items-center">
                
                <div className="w-full mb-16 text-center">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[var(--color-brand-red-light)] text-xs font-black tracking-widest uppercase"
                    >
                        GET IN TOUCH
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4"
                    >
                        START YOUR LEGACY.
                    </motion.h2>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="w-full border border-white/10 rounded-[30px] lg:rounded-[60px] p-6 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 overflow-hidden bg-white/[0.01]"
                >
                    
                    {/* Form Side */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-12">
                        <div className="flex flex-col border-b border-white/20 pb-3 md:pb-4 focus-within:border-[var(--color-brand-red)] transition-colors">
                            <label className="text-[10px] font-black text-white/40 mb-2 md:mb-3 uppercase tracking-widest">Full Name</label>
                            <input 
                                required
                                type="text" 
                                placeholder="Your Name"
                                className="bg-transparent outline-none text-white font-bold text-base md:text-xl placeholder:text-white/20" 
                            />
                        </div>
                        <div className="flex flex-col border-b border-white/20 pb-3 md:pb-4 focus-within:border-[var(--color-brand-red)] transition-colors">
                            <label className="text-[10px] font-black text-white/40 mb-2 md:mb-3 uppercase tracking-widest">Email Address</label>
                            <input 
                                required
                                type="email" 
                                placeholder="name@example.com"
                                className="bg-transparent outline-none text-white font-bold text-base md:text-xl placeholder:text-white/20" 
                            />
                        </div>
                        <div className="flex flex-col border-b border-white/20 pb-3 md:pb-4 focus-within:border-[var(--color-brand-red)] transition-colors">
                            <label className="text-[10px] font-black text-white/40 mb-2 md:mb-3 uppercase tracking-widest">Message</label>
                            <textarea 
                                required
                                rows={2}
                                placeholder="How can we help?"
                                className="bg-transparent outline-none text-white font-bold text-base md:text-xl placeholder:text-white/20 resize-none" 
                            />
                        </div>
                        
                        <div className="flex items-center gap-8">
                            <button 
                                disabled={loading}
                                type="submit"
                                className="w-full md:w-auto bg-[var(--color-brand-red)] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(124,18,18,0.3)]"
                            >
                                {loading ? 'Sending...' : 'Send Message ↗'}
                            </button>
                            
                            {isSent && (
                                <motion.span 
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-[var(--color-brand-red-light)] font-black text-xs uppercase"
                                >
                                    Sent Successfully!
                                </motion.span>
                            )}
                        </div>
                    </form>
                    
                    {/* Contact Info Side */}
                    <div className="flex flex-col justify-center gap-12 md:gap-16 lg:pl-10">
                        
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2 md:mb-4">Direct Contact</span>
                            <a href="mailto:join@pulseflex.com" className="text-base md:text-3xl font-black text-white hover:text-[var(--color-brand-red)] transition-all">join@pulseflex.com</a>
                            <a href="tel:5554123456" className="text-base md:text-3xl font-black text-white hover:text-[var(--color-brand-red)] transition-all mt-1 md:mt-4">555-412-3456</a>
                        </div>
                        
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2 md:mb-4">The HQ</span>
                            <p className="text-base md:text-3xl font-black text-white/80 leading-tight italic">
                                456 Iron Street,<br />Toronto, M5V 2H1
                            </p>
                        </div>
                        
                        <div className="flex gap-6">
                            {[
                                { icon: <Instagram size={18} strokeWidth={2.5}/>, label: 'Instagram' },
                                { icon: <Facebook size={18} strokeWidth={2.5}/>, label: 'Facebook' },
                                { icon: <Twitter size={18} strokeWidth={2.5}/>, label: 'Twitter' }
                            ].map((social, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 cursor-pointer hover:bg-white hover:text-black hover:border-white transition-all font-black text-xs italic" aria-label={social.label}>
                                    {social.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
