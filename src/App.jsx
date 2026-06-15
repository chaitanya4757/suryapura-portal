import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import PillarsGrid from './components/PillarsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Navbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <PillarsGrid />
      </main>

      <Footer />
    </div>
  );
}

export default App;