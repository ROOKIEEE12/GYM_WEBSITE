import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, createContext, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import MembershipsPage from './pages/MembershipsPage';
import ContactPage from './pages/ContactPage';
import ProgramsPage from './pages/ProgramsPage';
import GalleryPage from './pages/GalleryPage';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import ScrollTopButton from './components/ScrollTopButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const AppContext = createContext();

// Separate component for the app content to use useLocation
const AppContent = ({ isLoaded, setIsLoaded }) => {
  const location = useLocation();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Only show preloader if on home page and not yet loaded in this session
    if (location.pathname === '/' && !isLoaded) {
      setShowPreloader(true);
    } else {
      setIsLoaded(true); // Mark as loaded for other pages to skip preloader
    }
  }, [location.pathname, isLoaded, setIsLoaded]);

  return (
    <>
      <ScrollToTop />
      <ScrollTopButton />
      <AnimatePresence mode="wait">
        {showPreloader && !isLoaded && (
          <Preloader key="preloader" onComplete={() => {
            setIsLoaded(true);
            setShowPreloader(false);
          }} />
        )}
      </AnimatePresence>
      
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/memberships" element={<MembershipsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AppContext.Provider value={{ isLoaded }}>
      <Router>
        <AppContent isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
