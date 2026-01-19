import React, { useRef } from 'react';
import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, PORTFOLIO } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  if (!service) {
    return (
      <>
        <SEO title="Service Not Found" />
        <div className="min-h-screen bg-brand-black flex items-center justify-center text-white">Service not found</div>
      </>
    );
  }

  const HERO_IMAGES: Record<string, string> = {
    'web-dev': '/assets/services/web-dev.jpg',
    'vibe-coding': '/assets/portfolio/abstract-1.jpg',
    'ai-solutions': '/assets/services/ai-brain.jpg',
    '3d-anim': '/assets/portfolio/product-4.png',
    'arch-viz': '/assets/portfolio/archviz-1.jpg',
    'game-dev': '/assets/services/game-dev.jpg',
    'motion-vfx': '/assets/portfolio/vfx-2.png',
  };
  const heroImage = HERO_IMAGES[service.id] || `https://placehold.co/1920x1080/050505/333?text=${encodeURIComponent(service.title)}+Header`;

  return (
    <div className="bg-brand-black" ref={containerRef}>
      <SEO
        title={service.title}
        description={service.description}
        image={heroImage}
        url={window.location.href}
      />

      {/* Parallax Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroImage}
            alt={`${service.title} service showcase`}
            className="w-full h-full object-cover opacity-40 grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-9xl font-display font-bold text-white mb-6 uppercase tracking-tighter"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl text-zinc-300 max-w-4xl leading-relaxed font-light"
          >
            {service.longDescription}
          </motion.p>

          <div className="flex flex-wrap gap-3 mt-10">
            {service.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white font-mono text-sm uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12 border-b border-zinc-800 pb-6">
            <h2 className="text-4xl font-display font-bold text-white uppercase">Selected Projects</h2>
            <span className="text-zinc-500 font-mono">Real Results</span>
          </div>

          {/* Dynamic Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {PORTFOLIO.filter(p => {
              // Simple mapping or inclusion check
              const normalize = (s: string) => s.toLowerCase().replace(/ /g, '-');
              const pCat = normalize(p.category);
              const sId = service.id;
              // Map service ID to portfolio category keywords
              if (sId === '3d-anim' && pCat.includes('3d')) return true;
              if (sId === 'arch-viz' && pCat.includes('arch')) return true;
              if (sId === 'game-dev' && (pCat.includes('game') || pCat.includes('unreal'))) return true;
              if (sId === 'motion-vfx' && pCat.includes('motion')) return true;
              if (sId === 'web-dev' && pCat.includes('web')) return true;
              if (sId === 'vibe-coding' && (pCat.includes('vibe') || pCat.includes('experimental'))) return true;
              if (sId === 'ai-solutions' && pCat.includes('ai')) return true;
              return false;
            }).concat(PORTFOLIO.slice(0, 3)) // Fallback to show some items if none match exactly
              .slice(0, 6) // Limit to 6
              .map((item, i) => {
                const isLarge = i === 0 || i === 3;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`group relative overflow-hidden bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
                  >
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-2xl font-bold text-white uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                      <p className="text-brand-orange font-mono text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.category}</p>
                      <p className="text-zinc-300 text-xs mt-2 max-w-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-24 bg-brand-black overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-display font-bold text-white mb-12 uppercase leading-none">
                Our <br /><span className="text-brand-orange">Workflow</span>
              </h2>
              <div className="space-y-0 relative border-l border-zinc-800 ml-4">
                {[
                  { title: 'Discovery & Strategy', desc: 'We dig deep into your brand goals. No guesswork, just a clear roadmap to ROI.' },
                  { title: 'Design & Prototyping', desc: 'We visualize the solution. You see exactly what you are getting before we build.' },
                  { title: 'Production & Development', desc: 'We execute with technical precision using industry-standard tools and clean code.' },
                  { title: 'Polish & Delivery', desc: 'We refine every pixel and line of code. You get a market-ready asset that converts.' }
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-12 py-8 group">
                    <div className="absolute -left-[5px] top-10 w-2.5 h-2.5 bg-zinc-800 rounded-full group-hover:bg-brand-orange transition-colors" />
                    <h4 className="text-2xl font-bold text-zinc-500 group-hover:text-white transition-colors mb-2 uppercase">{step.title}</h4>
                    <p className="text-zinc-500 text-sm max-w-sm group-hover:text-zinc-400 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Visual */}
            <div className="bg-zinc-900/30 p-10 border border-zinc-800 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-display font-bold text-white mb-8 uppercase flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Tech Stack
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {['Unreal Engine 5', 'Blender', 'Houdini', 'Maya', 'Adobe Suite', 'Substance', 'React / Three.js', 'Python'].map(tool => (
                  <div key={tool} className="flex items-center gap-3 text-zinc-300 p-4 bg-black/40 rounded border border-zinc-800 hover:border-brand-orange/50 transition-colors group">
                    <CheckCircle2 size={18} className="text-zinc-600 group-hover:text-brand-orange transition-colors" />
                    <span className="font-mono text-sm">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-brand-orange/10 border border-brand-orange/20 rounded-xl">
                <p className="text-brand-orange text-sm font-bold uppercase mb-2">Need something custom?</p>
                <p className="text-zinc-400 text-sm mb-4">We build custom plugins and pipelines for enterprise needs.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold text-sm hover:underline">
                  Discuss R&D <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-display font-bold text-white uppercase">Capabilities</h2>
            <span className="text-zinc-500 font-mono">Detailed</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.tags.map((tag, i) => (
              <div key={i} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-brand-orange/50 transition-colors group">
                <h3 className="text-xl font-bold text-white mb-2 uppercase group-hover:text-brand-orange transition-colors">{tag}</h3>
                <p className="text-zinc-400 text-sm">
                  Specialized workflows designed to deliver high-impact {tag.toLowerCase()} for your brand.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default ServiceDetail;
