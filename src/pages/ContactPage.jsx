import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const ContactPage = () => {
    return (
        <main className="bg-black min-h-screen font-inter overflow-x-hidden selection:bg-[var(--color-brand-red)] selection:text-white">
            <div className="pt-20">
                <Contact />
                <FAQ type="contact" />
            </div>
        </main>
    );
};

export default ContactPage;
