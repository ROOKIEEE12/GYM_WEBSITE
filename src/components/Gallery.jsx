import { motion } from 'framer-motion';

const Gallery = () => {
    const images = [
        { 
            src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop", 
            span: "col-span-1 md:col-span-7 lg:col-span-8", 
            title: "Power Rack" 
        },
        { 
            src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop", 
            span: "col-span-1 md:col-span-5 lg:col-span-4", 
            title: "Cardio Zone" 
        },
        { 
            src: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            span: "col-span-1 md:col-span-5 lg:col-span-4", 
            title: "Boxing Studio" 
        },
        { 
            src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", 
            span: "col-span-1 md:col-span-7 lg:col-span-8", 
            title: "Strength Lab" 
        }
    ];

    return (
        <section className="w-full flex justify-center px-6 md:px-12 lg:px-24 py-20 bg-black font-inter">
            <div className="w-full max-w-[1400px]">
                
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="flex-1">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[var(--color-brand-red-light)] text-xs font-black tracking-widest uppercase"
                        >
                            INSIDE THE LAB
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-[900] tracking-tighter mt-4 text-white uppercase italic"
                        >
                            PULSEFLEX GALLERY.
                        </motion.h2>
                    </div>
                    <p className="flex-1 text-white/50 font-medium text-sm md:text-lg max-w-sm md:text-right leading-relaxed uppercase italic tracking-tight">
                        Experience the atmosphere where legends are built and transformations happen every single day.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-6">
                    {images.map((img, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`${img.span} h-[150px] sm:h-[200px] md:h-[450px] rounded-[20px] md:rounded-[50px] overflow-hidden relative border border-white/5`}
                        >
                            <img 
                                src={img.src} 
                                alt={img.title} 
                                className="w-full h-full object-cover" 
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Gallery;
