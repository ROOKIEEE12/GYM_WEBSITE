import Hero from '../components/Hero';
import StatsBanner from '../components/StatsBanner';
import Science from '../components/Science';
import Features from '../components/Features';
import GalleryPreview from '../components/GalleryPreview';
import Philosophy from '../components/Philosophy';
import HomeCTA from '../components/HomeCTA';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <main className="bg-black min-h-screen font-inter overflow-x-hidden selection:bg-[var(--color-brand-red)] selection:text-white">
      <Hero />
      <StatsBanner />
      <Science />
      <div className="space-y-0">
        <Features />
        <GalleryPreview />
        <Philosophy />
        <HomeCTA />
        <Testimonials />
        <FAQ />
      </div>
    </main>
  );
};

export default Home;
