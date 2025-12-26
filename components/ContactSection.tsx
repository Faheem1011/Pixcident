import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 uppercase">
              Let's Create <br />
              <span className="text-brand-orange">The Future</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md">
              Whether you need high-end ArchViz, game-ready assets, or an AI-driven campaign, Pixcident is ready to bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-brand-orange">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <p className="text-zinc-400">hello@pixcident.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-lg text-brand-orange">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Studio</h4>
                  <p className="text-zinc-400">Global Digital Studio<br />Based in the Cloud</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-black border border-zinc-800 p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-[400px] text-center"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-zinc-400">We'll be in touch shortly.</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-brand-orange text-sm font-bold uppercase hover:underline"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Name</label>
                      <input required type="text" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email</label>
                      <input required type="email" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-6">
                    <label htmlFor="project-type" className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Project Type</label>
                    <select id="project-type" name="project-type" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors">
                      <option>3D Animation</option>
                      <option>Architectural Viz</option>
                      <option>Unreal Engine Dev</option>
                      <option>Game Assets</option>
                      <option>AI Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 mb-8">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Message</label>
                    <textarea required rows={4} className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors" placeholder="Tell us about your project..." />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-brand-orange text-white font-bold py-4 rounded hover:bg-orange-600 transition-colors uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default ContactSection;