import Programs from '../components/Programs';
import FAQ from '../components/FAQ';

const ProgramsPage = () => {
    return (
        <main className="bg-black min-h-screen font-inter overflow-x-hidden selection:bg-[var(--color-brand-red)] selection:text-white">
            <div className="pt-20">
                <Programs />
                <FAQ type="programs" />
            </div>
        </main>
    );
};

export default ProgramsPage;
