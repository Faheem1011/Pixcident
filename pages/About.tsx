import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';
import ContactSection from '../components/ContactSection';

const About: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen">
      <SEO
        title="About Us"
        description="Pixcident is a full-spectrum creative studio delivering photorealistic 3D visualization, Unreal Engine game development, architectural renders, motion graphics, and AI-powered creative workflows. Excellence in every pixel."
      />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-display font-bold text-white mb-8 uppercase"
          >
            <span className="sr-only">About Pixcident</span>
            We Are <span className="text-brand-orange">Pixcident</span>
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-xl text-zinc-300 leading-relaxed">
              Pixcident is a full-spectrum creative studio specializing in photorealistic 3D visualization, game development with Unreal Engine, motion graphics, and cutting-edge AI-powered workflows. We transform complex creative visions into tangible, high-impact digital experiences.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Founded in 2025, our team combines artistic mastery with technical precision. From architectural visualizations that sell properties before they're built, to immersive game environments and brand campaigns that captivate audiences—we deliver excellence at every pixel. Our mission: push the boundaries of what's possible in digital creation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-zinc-900 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Projects Shipped', value: '150+' },
              { label: 'Years Combined Exp', value: '45' },
              { label: 'Industry Awards', value: '12' },
              { label: 'Global Partners', value: '25' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Founder */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-brand-orange/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-sm bg-zinc-900 border border-zinc-800 transition-all duration-500 shadow-2xl">
                <img
                  src={TEAM_MEMBERS[0].image}
                  alt={TEAM_MEMBERS[0].name}
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange/10 border border-brand-orange/20 backdrop-blur-xl rounded-full flex items-center justify-center animate-pulse">
                <div className="text-brand-orange font-mono text-xs text-center leading-tight">
                  EST. 2025<br />STUDIO
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-brand-orange text-sm font-bold uppercase tracking-[0.3em] mb-4">Founder & Lead Artist</h2>
                <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tight">
                  {TEAM_MEMBERS[0].name}
                </h3>
                <div className="w-20 h-1 bg-brand-orange mb-8" />
              </div>

              <div className="space-y-6 text-xl text-zinc-400 leading-relaxed font-light">
                <p>
                  {TEAM_MEMBERS[0].bio}
                </p>
                <p>
                  With a background spanning 3D production, real-time engines, and automation, Faheem leads every project at Pixcident. He combines artistic intuition with deep technical knowledge to deliver results that don't just meet expectations—they redefine them.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {['Unreal Engine 5', '3D Animation', 'AI Automation', 'Web Tech'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-500 font-mono text-xs uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stakes - What Success Looks Like */}
      <section className="py-20 bg-zinc-950 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
                What <span className="text-brand-orange">Success</span> Looks Like
              </h2>
              <p className="text-lg text-zinc-400 mb-8">
                When you partner with Pixcident, you get more than visuals. You get results that transform your business.
              </p>
            </div>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
              >
                <div className="text-green-500 text-2xl font-bold">✓</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Your Product Renders Drive Pre-Orders</h4>
                  <p className="text-zinc-400 text-sm">Sell before you manufacture. Customers see exactly what they get.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
              >
                <div className="text-green-500 text-2xl font-bold">✓</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Investors Fund Your Vision</h4>
                  <p className="text-zinc-400 text-sm">Pitch decks that show, not tell. Close deals faster with tangible visuals.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
              >
                <div className="text-green-500 text-2xl font-bold">✓</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Your Website Converts 3x Better</h4>
                  <p className="text-zinc-400 text-sm">Fast, beautiful sites that turn visitors into paying customers.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
              >
                <div className="text-green-500 text-2xl font-bold">✓</div>
                <div>
                  <h4 className="text-white font-bold mb-1">You Scale Without Scaling Headcount</h4>
                  <p className="text-zinc-400 text-sm">AI automation multiplies your output while you focus on strategy.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Failure Stakes - Subtle Warning */}
      <section className="py-20 bg-brand-dark px-6 border-y border-zinc-800">
        <div className="container mx-auto max-w-5xl text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
            Without Professional Visuals...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <div className="text-brand-orange text-3xl mb-3">→</div>
              <p className="text-zinc-400 text-sm">Customers cannot visualize your product</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <div className="text-brand-orange text-3xl mb-3">→</div>
              <p className="text-zinc-400 text-sm">You lose sales to better-looking competitors</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <div className="text-brand-orange text-3xl mb-3">→</div>
              <p className="text-zinc-400 text-sm">Your pitch deck falls flat with investors</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <div className="text-brand-orange text-3xl mb-3">→</div>
              <p className="text-zinc-400 text-sm">Manual work keeps you from scaling</p>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-brand-orange text-white font-bold uppercase tracking-wider rounded-sm hover:bg-white hover:text-brand-black transition-all duration-300 shadow-[0_0_30px_rgba(255,85,0,0.3)]"
            >
              Let's Fix That
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-brand-black px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-8">OUR PHILOSOPHY</h2>
          <p className="text-2xl text-zinc-400 font-light italic">
            "Technology should be invisible. The impact should be undeniable. We strive for the 'Happy Accident'—that moment where code and creativity collide to create something unplanned and beautiful."
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default About;