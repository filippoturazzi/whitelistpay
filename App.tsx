
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import DashboardPreview from './components/DashboardPreview';
import Pricing from './components/Pricing';
import CitiesSection from './components/CitiesSection';
import RevenueProjection from './components/RevenueProjection';
import RewardsPage from './components/RewardsPage';
import HowItWorksPage from './components/HowItWorksPage';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    // Escuta mudanças de estado manuais
    window.addEventListener('pushstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pushstate', handleLocationChange);
    };
  }, []);

  const renderContent = () => {
    if (currentPath === '/premios') {
      return <RewardsPage />;
    }

    if (currentPath === '/como-funciona') {
      return <HowItWorksPage />;
    }

    return (
      <>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <CitiesSection />
        <RevenueProjection />
        <DashboardPreview />
        <FAQ />
        <CallToAction />
      </>
    );
  };

  return (
    <div className="min-h-screen text-zinc-100 overflow-x-hidden selection:bg-white/20">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="blob-gradient bg-blue-900/10 w-[600px] h-[600px] top-[-200px] left-[-200px]" />
        <div className="blob-gradient bg-emerald-900/5 w-[500px] h-[500px] bottom-0 right-[-100px]" />
      </div>

      <Navbar currentPath={currentPath} />
      
      <main>
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}
