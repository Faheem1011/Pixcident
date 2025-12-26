import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';
import ContactSection from '../components/ContactSection';

const About: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen">

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
              Pixcident is a multidisciplinary creative studio and digital production brand positioned at the intersection of design, animation, technology, and emerging media.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              Founded in 2025, we operate with a decentralized team of elite artists and engineers. We don't just use tools; we build them. Our mission is to eliminate the repetitive tasks in digital creation to unlock pure artistic expression.
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

      {/* The Team */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-16 uppercase">The Squad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden mb-6 rounded-sm bg-zinc-900 border border-zinc-800 group-hover:border-brand-orange/50 transition-colors">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-zinc-500 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-brand-dark px-6">
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