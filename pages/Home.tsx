import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import NewsletterSection from '../components/NewsletterSection';

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <Hero />
      <div className="py-24 bg-brand-black text-center px-6" id="value-prop">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              You Have <span className="text-brand-orange">World-Changing Ideas</span>.<br />
              But Without Stunning Visuals, They Stay Invisible.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-orange uppercase tracking-wide">The Problem</h3>
                <ul className="text-zinc-300 text-lg leading-relaxed space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">→</span>
                    <span>Customers can't visualize products that don't exist yet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">→</span>
                    <span>Investors need to <em>see</em> your vision to fund it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">→</span>
                    <span>Generic websites blend in with competitors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-orange mt-1">→</span>
                    <span>Manual creative work prevents you from scaling</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">The Solution</h3>
                <p className="text-zinc-300 text-lg leading-relaxed mb-6">
                  We help businesses like yours turn concepts into reality with:
                </p>
                <ul className="text-white text-lg leading-relaxed space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span><strong>3D renders</strong> that sell products before they're manufactured</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span><strong>Game environments</strong> that immerse and engage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span><strong>Web experiences</strong> that convert visitors into customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span><strong>AI automation</strong> that scales creative output</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-2xl md:text-3xl font-light text-zinc-200 italic">
                The result? Your vision finally gets the <span className="text-brand-orange font-bold not-italic">attention it deserves</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <ServicesSection />

      {/* Featured Works Masonry Grid */}
      <section className="py-24 bg-zinc-950" id="portfolio">
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
      <NewsletterSection />
      <ContactSection />
    </>
  );
};

export default Home;