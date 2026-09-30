import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

const Programs = () => {
    const events = [
        {
            date: "25",
            month: "MAR",
            title: "IRON LIFT CLASSIC",
            type: "COMPETITION",
            time: "09:00 AM",
            location: "Main Platform",
            img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1470&auto=format&fit=crop",
            status: "REGISTERING"
        },
        {
            date: "02",
            month: "APR",
            title: "ZEN & POWER YOGA",
            type: "WORKSHOP",
            time: "07:30 AM",
            location: "Studio A",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1440&auto=format&fit=crop",
            status: "UPCOMING"
        },
        {
            date: "15",
            month: "APR",
            title: "PRO NUTRITION SEMINAR",
            type: "SEMINAR",
            time: "06:00 PM",
            location: "Fuel Hub",
            img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1470&auto=format&fit=crop",
            status: "UPCOMING"
        },
        {
            date: "01",
            month: "MAY",
            title: "CROSSFIT OPEN MEET",
            type: "MATCH",
            time: "01:00 PM",
            location: "CrossFit Zone",
            img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=1470&auto=format&fit=crop",
            status: "PLANNING"
        }
    ];

    return (
        <section className="w-full flex justify-center px-6 md:px-12 lg:px-24 pt-20 pb-10 bg-black text-white font-inter">
            <div className="w-full max-w-[1400px]">
                
                <div className="mb-10 md:mb-16 text-left border-b border-white/5 pb-8 md:pb-12">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[var(--color-brand-red-light)] text-xs font-black tracking-[0.4em] uppercase"
                    >
                        UPCOMING EVENTS
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl xs:text-5xl md:text-7xl font-black tracking-tighter mt-4 leading-none uppercase italic"
                    >
                        PROGRAMS.
                    </motion.h2>
                </div>

                <div className="flex flex-col border-t border-white/5">
                    {events.map((event, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group relative flex flex-col md:flex-row items-start md:items-center p-5 md:py-8 md:px-0 border border-white/5 md:border-0 md:border-b md:border-white/5 hover:bg-white/5 transition-all overflow-hidden cursor-pointer rounded-[24px] md:rounded-none mb-4 md:mb-0"
                        >
                            {/* Date Area */}
                            <div className="flex flex-row md:flex-col items-center justify-start md:justify-center min-w-[120px] gap-3 md:gap-0 border-r-0 md:border-r border-white/5 z-20 mb-3 md:mb-0 md:px-10">
                                <span className="text-4xl md:text-5xl font-black tracking-tighter leading-none italic group-hover:text-[var(--color-brand-red)] transition-colors">{event.date}</span>
                                <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-[var(--color-brand-red-light)] md:text-white/30 uppercase mt-1">{event.month}</span>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 w-full z-20 md:px-12">
                                <div className="flex flex-wrap gap-x-4 gap-y-2 items-center mb-2 md:mb-1">
                                    <span className="text-[9px] md:text-[10px] font-black text-[var(--color-brand-red)] tracking-widest uppercase md:bg-transparent">{event.type}</span>
                                    <div className="flex items-center gap-1.5 md:gap-2 text-white/60 font-bold text-[9px] tracking-widest uppercase italic border-l border-white/10 pl-3">
                                        <Clock size={10} className="hidden md:block"/>
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-1.5 md:gap-2 text-white/60 font-bold text-[9px] tracking-widest uppercase italic border-l border-white/10 pl-3">
                                        <MapPin size={10} className="hidden md:block"/>
                                        {event.location}
                                    </div>
                                </div>
                                <h3 className="text-xl md:text-3xl font-[900] tracking-tight uppercase italic pr-12 md:pr-0 transition-transform duration-500">
                                    {event.title}
                                </h3>
                                {/* Mobile Status Label */}
                                <div className="md:hidden mt-2">
                                    <span className={`text-[8px] font-black tracking-[0.2em] uppercase italic ${event.status === 'REGISTERING' ? 'text-green-500' : 'text-white/40'}`}>
                                        {event.status}
                                    </span>
                                </div>
                            </div>

                            {/* Status & Action */}
                            <div className="absolute top-1/2 right-5 -translate-y-1/2 md:static md:translate-y-0 flex items-center justify-end z-20 md:px-10">
                                <div className="hidden lg:flex flex-col items-end mr-8">
                                    <span className={`text-[10px] font-black tracking-[0.2em] uppercase italic ${event.status === 'REGISTERING' ? 'text-green-500' : 'text-white/20'}`}>
                                        {event.status}
                                    </span>
                                </div>
                                <div className="p-2.5 md:p-4 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all bg-black/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none shadow-xl md:shadow-none">
                                    <ChevronRight size={18} className="md:w-5 md:h-5" />
                                </div>
                            </div>

                            {/* Fixed Background Image Section */}
                            <div className="absolute inset-0 md:inset-y-0 md:left-auto md:right-0 w-full md:w-1/3 z-0 overflow-hidden pointer-events-none rounded-[24px] md:rounded-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30 md:to-transparent z-10" />
                                <img src={event.img} className="w-full h-full object-cover grayscale-0 md:grayscale opacity-40 md:opacity-30 group-hover:grayscale-0 group-hover:opacity-60 md:group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100" alt="" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <button className="text-[var(--color-brand-red-light)] font-black text-[10px] tracking-[0.4em] uppercase hover:text-white transition-colors border-b border-[var(--color-brand-red-light)]/20 pb-2">
                        EXPLORE ALL SESSIONS ↗
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Programs;
