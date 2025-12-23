import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="py-24 bg-brand-black text-center px-6">
        <div className="container mx-auto">
          <p className="text-2xl md:text-4xl font-display font-light leading-normal max-w-4xl mx-auto text-zinc-200">
            "Pixcident is a creative production ecosystem. We are built to serve brands and creators who require <span className="text-brand-orange">premium visual storytelling</span>, technical execution, and <span className="text-brand-orange">future-ready</span> digital assets."
          </p>
        </div>
      </div>
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default Home;