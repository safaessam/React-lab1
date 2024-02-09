import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import HeroSection from './HeroSection';
import BioSection from './BioSection';
import SkillsSection from './SkillsSection';
import PortfolioSection from './PortfolioSection';
import Footer from './Footer';

function App() {
  return (
    <div>
      <HeroSection />
      <BioSection />
      <SkillsSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default App;