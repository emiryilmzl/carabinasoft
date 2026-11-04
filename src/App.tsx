import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AIMenu } from './components/AIMenu';
import { Services } from './components/Services';
import { B2BSolutions } from './components/B2BSolutions';
import { Industries } from './components/Industries';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-gray-300 font-sans selection:bg-brand selection:text-white">
      {/* Dynamic Animated background with Grid Overlay and Blurs */}
      <AnimatedBackground />

      {/* Global Responsive Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10 w-full overflow-x-hidden">
        {/* Hero Landing Area */}
        <Hero />
        <AIMenu />

        {/* Core Services Section */}
        <Services />

        {/* Specialized B2B Portal & Otomasyon Solutions */}
        <B2BSolutions />

        {/* Sectors Served Section */}
        <Industries />

        {/* Step-by-Step Workflow Process */}
        <Process />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Interactive Contact & Inquiry Form */}
        <Contact />
      </main>

      {/* Footer Area with navigational linkages */}
      <Footer />
    </div>
  );
}

export default App;
