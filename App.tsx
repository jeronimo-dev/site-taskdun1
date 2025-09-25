import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ThesisSolutionSection } from './components/FeaturesSection';
import { ApplicationsSection } from './components/HowItWorksSection';
import { RecognitionSection } from './components/RecognitionSection';
import { Footer } from './components/Footer';
import { IconGeneratorSection } from './components/IconGeneratorSection';
import { BlogSection } from './components/BlogSection';
import { ManifestoPage } from './components/ManifestoPage';

const App: React.FC = () => {
  const [showManifesto, setShowManifesto] = useState(false);

  const handleOpenManifesto = () => {
    setShowManifesto(true);
  };
  
  const handleCloseManifesto = () => {
    setShowManifesto(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0E1A] font-sans antialiased">
      {showManifesto && <ManifestoPage onClose={handleCloseManifesto} />}
      <Header onManifestoClick={handleOpenManifesto} />
      <main>
        <HeroSection />
        <ThesisSolutionSection />
        <ApplicationsSection />
        <RecognitionSection />
        <IconGeneratorSection />
        <BlogSection />
      </main>
      <Footer onManifestoClick={handleOpenManifesto} />
    </div>
  );
};

export default App;
