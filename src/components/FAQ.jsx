import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = ({ type = 'general' }) => {
    const [activeIndex, setActiveIndex] = useState(-1);

    // Reset active index when type changes (page navigation)
    useEffect(() => {
        setActiveIndex(-1);
    }, [type]);

    const faqData = {
        general: [
            { q: "What are your operating hours?", a: "We are open 24/7. Excellence doesn't sleep, and neither do we. Members have round-the-clock access with their biometric key." },
            { q: "Do you offer personal training?", a: "Yes. Our trainers are certified professionals specializing in bodybuilding, powerlifting, and athletic performance. You can book a consultation via the app." },
            { q: "Are there long-term contracts?", a: "No. We believe in performance-based loyalty. You can choose our Warrior month-to-month plan and cancel anytime with 30 days notice." },
            { q: "Do you have parking facilities?", a: "Yes, we have 50+ dedicated parking spots for members, including EV charging stations, monitored 24/7." }
        ],
        programs: [
            { q: "Which program is best for beginners?", a: "We recommend our 'Strength Basics' or 'Functional Fit' modules. Our coaches will assess your level and guide you on day one." },
            { q: "Are group classes included in the membership?", a: "Most group classes like HIIT and Yoga are included. Specialized Pro-workshops may require a premium add-on." },
            { q: "Can I switch programs later?", a: "Absolutely. Your fitness journey is dynamic. You can rotate through our diverse training modules as your goals evolve." },
            { q: "What should I bring to my first class?", a: "Hydration, comfortable athletic wear, and a high-performance mindset. We provide towels and elite showers." }
        ],
        membership: [
            { q: "How do I sign up for a membership?", a: "You can sign up online through our portal or visit us in person. The biometric setup takes less than 5 minutes." },
            { q: "Can I freeze my membership?", a: "Yes. You can freeze your membership for up to 3 months per year for travel or medical reasons with no extra cost." },
            { q: "Is there a student or corporate discount?", a: "We offer exclusive 15% discounts for verified students and organizations with 10+ active members." },
            { q: "Can I bring a guest for free?", a: "Warrior and Pro plan members get 2 free guest passes per month. Guests must be registered at the reception." }
        ],
        contact: [
            { q: "Where exactly are you located?", a: "We are in the heart of the Iron District, 456 Iron Street, Toronto. Look for the PulseFlex sign." },
            { q: "How can I contact my trainer directly?", a: "Once assigned, you can communicate with your coach 24/7 via the dedicated PulseFlex mobile app messaging system." },
            { q: "Do you offer corporate wellness partnerships?", a: "Yes. We work with leading tech and finance firms to provide custom wellness packages. Contact our HQ for a quote." },
            { q: "How do I report a technical issue inside the gym?", a: "Use the QR codes located on every machine or alert the 24/7 security staff immediately." }
        ]
    };

    const currentQuestions = faqData[type] || faqData.general;

    return (
        <section className="w-full flex justify-center px-6 md:px-12 lg:px-24 py-20 bg-black font-inter">
            <div className="w-full max-w-[1400px]">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    
                    <div>
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[var(--color-brand-red-light)] text-xs font-black tracking-widest uppercase"
                        >
                            {type === 'general' ? 'ENQUIRIES' : `${type.toUpperCase()} FAQ`}
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4 leading-none"
                        >
                            HAVE SOME<br/>QUESTIONS?
                        </motion.h2>
                        <p className="text-white/50 font-medium mt-6 md:mt-8 text-sm md:text-lg max-w-sm leading-relaxed">
                            Everything you need to know about joining the ultimate fitness community in the city.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {currentQuestions.map((item, i) => (
                            <div key={i} className="border-b border-white/10 last:border-0 pb-6">
                                <button 
                                    onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                                    className="w-full flex justify-between items-center text-left py-4 group"
                                >
                                    <span className={`text-lg md:text-xl font-black transition-colors ${activeIndex === i ? 'text-[var(--color-brand-red)]' : 'text-white hover:text-[var(--color-brand-red)]'}`}>
                                        {item.q}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all ${activeIndex === i ? 'bg-[var(--color-brand-red)] text-white rotate-0' : 'bg-white/5 text-white rotate-90'}`}>
                                        {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-white/50 font-medium text-sm md:text-base leading-relaxed mt-2 pb-4">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FAQ;
