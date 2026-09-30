import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const MembershipsPage = () => {
    return (
        <main className="bg-black min-h-screen font-inter overflow-x-hidden selection:bg-[var(--color-brand-red)] selection:text-white">
            <div className="pt-20">
                <Pricing />
                <FAQ type="membership" />
            </div>
        </main>
    );
};

export default MembershipsPage;
