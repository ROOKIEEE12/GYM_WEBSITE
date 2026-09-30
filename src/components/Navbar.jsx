import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../App';

const Navbar = () => {
  const { isLoaded } = useContext(AppContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Body Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const leftLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROGRAMS', path: '/programs' },
  ];

  const rightLinks = [
    { name: 'MEMBERSHIP', path: '/memberships' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const NavLink = ({ link }) => {
    const isActive = location.pathname === link.path;
    return (
      <motion.div variants={itemVariants} className="relative group">
        <Link
          to={link.path}
          className={`text-[11px] md:text-[13px] font-[900] transition-all tracking-[0.1em] uppercase italic ${isActive ? 'text-[var(--color-brand-red-light)]' : 'text-white/70 hover:text-white'}`}
        >
          {link.name}
        </Link>
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--color-brand-red)] rounded-full"
          />
        )}
      </motion.div>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[1000] px-6 md:px-12 lg:px-24 py-6 md:py-10 flex items-center justify-between transition-all duration-500 font-inter ${scrolled ? 'bg-black/90 backdrop-blur-md py-4 md:py-6 shadow-2xl' : 'bg-transparent'}`}
    >

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-[1001] text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Left Links - Desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="hidden md:flex gap-8 lg:gap-14"
      >
        {leftLinks.map((link) => (
          <NavLink key={link.name} link={link} />
        ))}
      </motion.div>

      {/* Center Brand Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
        <Link to="/">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="text-3xl md:text-4xl font-[900] tracking-[-0.05em] text-white uppercase italic leading-none inline-block whitespace-nowrap"
          >
            PULSE<span className="text-[var(--color-brand-red)]">FLEX</span>
          </motion.span>
        </Link>
      </div>

      {/* Right Links - Desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        className="hidden md:flex gap-8 lg:gap-14 text-right"
      >
        {rightLinks.map((link) => (
          <NavLink key={link.name} link={link} />
        ))}
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#000000] z-[9999] flex flex-col p-8 md:hidden"
          >
            {/* Overlay Header with Close Button */}
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-[900] tracking-[-0.05em] text-white uppercase italic leading-none">
                PULSE<span className="text-[var(--color-brand-red)]">FLEX</span>
              </span>
              <button 
                className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-8 flex-1">
              <span className="text-[11px] font-black text-[var(--color-brand-red)] tracking-[0.4em] uppercase">NAVIGATION</span>
              
              <div className="flex flex-col gap-6">
                {[...leftLinks, ...rightLinks].map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-4xl xs:text-5xl font-[900] uppercase tracking-tighter italic leading-none transition-colors duration-300 ${location.pathname === link.path ? 'text-[var(--color-brand-red)]' : 'text-white hover:text-[var(--color-brand-red-light)]'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pb-8 flex flex-col gap-4">
              <span className="text-[10px] font-black text-white/20 tracking-[0.4em] uppercase">JOIN THE TRIBE</span>
              <p className="text-white/40 text-sm font-bold leading-tight uppercase italic max-w-[200px]">
                ENGINEERING A MINDSET THAT DEFIES PHYSICAL LIMITS.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;
