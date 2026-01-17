import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <Hero />
      <div className="py-24 bg-brand-black text-center px-6">
        <div className="container mx-auto">
          <p className="text-2xl md:text-4xl font-display font-light leading-normal max-w-4xl mx-auto text-zinc-200">
            "Pixcident is where <span className="text-brand-orange">creative vision meets technical excellence</span>. We're a full-spectrum creative studio delivering photorealistic 3D visualization, cutting-edge game development, and future-ready digital experiences. From concept to deployment, we transform ambitious ideas into <span className="text-brand-orange">stunning reality</span>."
          </p>
        </div>
      </div>
      <ServicesSection />

      {/* Featured Works Masonry Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12 border-b border-zinc-800 pb-6">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter">Featured Works</h2>
            <div className="text-right hidden md:block">
              <p className="text-zinc-500 font-mono text-sm">SELECTED_OUTPUTS_V1</p>
              <p className="text-brand-orange font-mono text-xs">RENDER_QUEUE: COMPLETE</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">
            {/* 1. Hero / Large Item */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden border border-zinc-800 rounded bg-zinc-900">
              <img
                src="/assets/portfolio/automotive-2.jpg"
                alt="Automotive Ferrari"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                <span className="text-brand-orange font-mono text-xs mb-1 block">AUTOMOTIVE // CGI</span>
                <h3 className="text-2xl font-bold text-white">Ferrari CGI</h3>
              </div>
            </div>

            {/* 2. Abstract */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-zinc-800 rounded bg-zinc-900">
              <img
                src="/assets/portfolio/vfx-1.png"
                alt="VFX Abstract"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 3. Product */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-zinc-800 rounded bg-zinc-900">
              <img
                src="/assets/portfolio/product-3.png"
                alt="Product Tap"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <span className="text-white font-bold uppercase tracking-widest">Product</span>
              </div>
            </div>

            {/* 4. Character - Tall */}
            <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden border border-zinc-800 rounded bg-zinc-900">
              <img
                src="/assets/portfolio/character-1.png"
                alt="Character Design"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-lg font-bold text-white text-right">Character</h3>
              </div>
            </div>

            {/* 5. ArchViz */}
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden border border-zinc-800 rounded bg-zinc-900">
              <img
                src="/assets/portfolio/archviz-1.jpg"
                alt="ArchViz Kitchen"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 6. Abstract */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden border border-zinc-800 rounded bg-zinc-900">
              <img
                src="/assets/portfolio/abstract-3.png"
                alt="Cube Abstract"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                loading="lazy"
                decoding="async"
              />
            </div>

          </div>
        </div>
      </section>

      {/* <PortfolioSection />  Replaced by the new grid above */}
      <ContactSection />
    </>
  );
};

export default Home;