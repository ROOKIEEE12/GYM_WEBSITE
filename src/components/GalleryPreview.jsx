import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GalleryPreview = () => {
    // High-quality real gym interior photos
    const interiorImages = [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", // Heavy equipment
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop", // Weights/bench area
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", // Modern workout studio
        "https://images.unsplash.com/photo-1646656130630-07af3a262a9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Cardio zone
    ];

    return (
        <section className="w-full flex justify-center px-6 md:px-12 lg:px-24 pt-24 pb-8 md:pb-12 bg-black font-inter">
            <div className="w-full max-w-[1400px]">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-8 text-center md:text-left">
                    <div className="flex-1">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[var(--color-brand-red-light)] text-xs font-black tracking-widest uppercase"
                        >
                            VISUAL TOUR
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter mt-4 leading-none uppercase italic"
                        >
                            INSIDE THE HUB.
                        </motion.h2>
                    </div>
                    <Link to="/gallery" className="text-[var(--color-brand-red-light)] font-black text-[10px] md:text-xs tracking-[0.2em] uppercase hover:text-white transition-colors border-b border-[var(--color-brand-red-light)] pb-2">
                        View Full Gallery ↗
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {interiorImages.map((imgUrl, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="h-[180px] xs:h-[220px] md:h-[400px] rounded-[30px] md:rounded-[50px] overflow-hidden group border border-white/5 relative"
                        >
                            <img
                                src={imgUrl}
                                alt={`PulseFlex Gym Interior ${i + 1}`}
                                className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700 brightness-75 hover:brightness-90"
                            />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GalleryPreview;
