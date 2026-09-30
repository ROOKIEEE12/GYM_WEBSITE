import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

const GalleryPage = () => {
    return (
        <main className="bg-black min-h-screen font-inter overflow-x-hidden selection:bg-[var(--color-brand-red)] selection:text-white">
            <div className="pt-20">
                <Gallery />
                <Testimonials />
            </div>
        </main>
    );
};

export default GalleryPage;
