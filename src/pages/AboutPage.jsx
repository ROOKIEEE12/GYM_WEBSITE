import About from '../components/About';
import Faculty from '../components/Faculty';

const AboutPage = () => {
    return (
        <main className="bg-black min-h-screen font-inter overflow-x-hidden selection:bg-[var(--color-brand-red)] selection:text-white">
            <div className="pt-20">
                <About />
                <Faculty />
            </div>
        </main>
    );
};

export default AboutPage;
