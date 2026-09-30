import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full flex justify-center px-6 md:px-12 lg:px-24 pt-10 md:pt-14 pb-10 md:pb-12 font-inter bg-black text-white overflow-hidden border-t border-white/10">
            <div className="w-full max-w-[1400px]">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-24 text-center md:text-left">

                    {/* Branding Side - Column 1-4 */}
                    <div className="md:col-span-4 flex flex-col">
                        <Link to="/" className="flex items-center justify-center md:justify-start mb-8">
                            <span className="text-3xl font-[900] tracking-[-0.05em] uppercase italic leading-none">
                                PULSE<span className="text-[var(--color-brand-red)]">FLEX</span>
                            </span>
                        </Link>
                        <p className="text-white/40 font-semibold text-sm md:text-base leading-relaxed mb-6 md:mb-10 max-w-[280px] md:max-w-xs mx-auto md:mx-0">
                            The ultimate destination for serious athletes. We provide the elite equipment and environment you need to excel.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            {[
                                { icon: <Instagram size={18} />, label: 'Instagram' },
                                { icon: <Facebook size={18} />, label: 'Facebook' },
                                { icon: <Twitter size={18} />, label: 'Twitter' }
                            ].map((social, i) => (
                                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/30 cursor-pointer hover:bg-[var(--color-brand-red)] hover:text-white hover:border-[var(--color-brand-red)] transition-all">
                                    {social.icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links & Location - Column 5-12 */}
                    <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 md:gap-12">

                        <div className="flex flex-col gap-6 items-start text-left">
                            <span className="text-[10px] font-black text-[var(--color-brand-red-light)] uppercase tracking-[0.3em]">EXPLORE</span>
                            <div className="flex flex-col gap-4 items-start text-left">
                                <Link to="/" className="group relative w-fit block">
                                    <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors duration-300">Home</span>
                                    <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-red-light)] group-hover:w-full transition-all duration-300"></div>
                                </Link>
                                <Link to="/about" className="group relative w-fit block">
                                    <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors duration-300">About Us</span>
                                    <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-red-light)] group-hover:w-full transition-all duration-300"></div>
                                </Link>
                                <Link to="/programs" className="group relative w-fit block">
                                    <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors duration-300">Programs</span>
                                    <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-red-light)] group-hover:w-full transition-all duration-300"></div>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 items-end md:items-start text-right md:text-left">
                            <span className="text-[10px] font-black text-[var(--color-brand-red-light)] uppercase tracking-[0.3em]">TRIBE</span>
                            <div className="flex flex-col gap-4 items-end md:items-start text-right md:text-left">
                                <Link to="/memberships" className="group relative w-fit block">
                                    <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors duration-300">Memberships</span>
                                    <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-red-light)] group-hover:w-full transition-all duration-300"></div>
                                </Link>
                                <Link to="/gallery" className="group relative w-fit block">
                                    <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors duration-300">Gallery</span>
                                    <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-red-light)] group-hover:w-full transition-all duration-300"></div>
                                </Link>
                                <Link to="/contact" className="group relative w-fit block">
                                    <span className="text-sm font-bold text-white/50 group-hover:text-white transition-colors duration-300">Join Now</span>
                                    <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-brand-red-light)] group-hover:w-full transition-all duration-300"></div>
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 col-span-2 lg:col-span-1 items-center md:items-start text-center md:text-left">
                            <span className="text-[10px] font-black text-[var(--color-brand-red-light)] uppercase tracking-[0.3em]">LOCATION</span>
                            <div className="flex flex-col items-center md:items-start gap-5">
                                <div className="flex items-center md:items-start gap-3 group text-center md:text-left">
                                    <MapPin size={16} className="text-[var(--color-brand-red)] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm font-bold text-white/60 leading-tight">
                                        456 Iron Street,<br />Toronto, M5V 2H1
                                    </p>
                                </div>
                                <div className="flex items-center md:items-start gap-3 group text-center md:text-left">
                                    <Phone size={16} className="text-[var(--color-brand-red)] shrink-0 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm font-bold text-white/60 whitespace-nowrap">+1 (416) 555-0123</p>
                                </div>
                                <div className="flex items-center md:items-start gap-3 group text-center md:text-left">
                                    <Mail size={16} className="text-[var(--color-brand-red)] shrink-0 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm font-bold text-white/60 underline decoration-[var(--color-brand-red)] decoration-2 underline-offset-4">hq@pulseflex.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="border-t border-white/5 mt-10 md:mt-20 pt-6 md:pt-10 flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8">
                    <p className="text-[8px] md:text-[9px] font-black text-white/20 tracking-[0.2em] md:tracking-[0.4em] uppercase whitespace-nowrap">© 2026 PULSEFLEX. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-6 md:gap-10">
                        <a href="#" className="whitespace-nowrap text-[9px] md:text-[10px] font-black text-white/20 hover:text-white transition-colors tracking-widest uppercase">Privacy Policy</a>
                        <a href="#" className="whitespace-nowrap text-[9px] md:text-[10px] font-black text-white/20 hover:text-white transition-colors tracking-widest uppercase">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
