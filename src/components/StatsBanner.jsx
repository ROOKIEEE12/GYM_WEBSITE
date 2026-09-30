import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });
    const count = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const numericValue = parseFloat(value);
            const controls = animate(count, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => {
                    // Control decimal places based on value
                    if (value.includes('.')) {
                        setDisplayValue(latest.toFixed(1));
                    } else {
                        setDisplayValue(Math.floor(latest));
                    }
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value, count]);

    return (
        <span ref={ref}>
            {displayValue}{suffix}
        </span>
    );
};

const StatsBanner = () => {
    const stats = [
        { label: "Elite Members", value: "1.2", suffix: "K+" },
        { label: "Pro Coaches", value: "15", suffix: "+" },
        { label: "Gym Space", value: "25", suffix: "K FT²" },
        { label: "Success Rate", value: "98", suffix: "%" }
    ];

    return (
        <section className="w-full bg-black py-20 border-y border-white/5 flex justify-center px-6">
            <div className="w-full max-w-[1400px] grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
                {stats.map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center text-center"
                    >
                        <span className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--color-brand-red)] tracking-tighter italic leading-none mb-4">
                            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                        </span>
                        <span className="text-[10px] md:text-xs font-black text-white/30 uppercase tracking-[0.3em]">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default StatsBanner;
