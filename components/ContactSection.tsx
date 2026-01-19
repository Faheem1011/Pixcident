import React, { useState } from 'react';
import { Mail, MapPin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      projectType: formData.get('projectType'),
      message: formData.get('message'),
      website: formData.get('website') // Honeypot field
    };

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
        e.currentTarget.reset();
      } else {
        setFormState('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Network error. Please try again or email us directly at Contact@pixcident.com');
    }
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
                  <p className="text-zinc-400">Contact@pixcident.com</p>
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
              ) : formState === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-[400px] text-center"
                >
                  <div className="w-20 h-20 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-6">
                    <AlertCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h3>
                  <p className="text-zinc-400 mb-4 max-w-md">{errorMessage}</p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="mt-6 px-6 py-3 bg-brand-orange text-white font-bold rounded hover:bg-orange-600 transition-colors uppercase tracking wider"
                  >
                    Try Again
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
                      <input required type="text" name="name" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email</label>
                      <input required type="email" name="email" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-6">
                    <label htmlFor="project-type" className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Project Type</label>
                    <select id="project-type" name="projectType" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors">
                      <option>3D Animation</option>
                      <option>Architectural Viz</option>
                      <option>Unreal Engine Dev</option>
                      <option>Game Assets</option>
                      <option>AI Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Honeypot field - hidden from users, catches bots */}
                  <input type="text" name="website" className="absolute left-[-9999px]" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty" />

                  <div className="flex flex-col gap-2 mb-8">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Message</label>
                    <textarea required rows={4} name="message" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded focus:outline-none focus:border-brand-orange transition-colors" placeholder="Tell us about your project..." />
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
                    ) : formState === 'error' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center h-[400px] text-center"
                      >
                        <div className="w-20 h-20 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-6">
                          <AlertCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h3>
                        <p className="text-zinc-400 mb-4">{errorMessage}</p>
                        <button
                          onClick={() => setFormState('idle')}
                          className="mt-6 px-6 py-3 bg-brand-orange text-white font-bold rounded hover:bg-orange-600 transition-colors"
                        >
                          Try Again
                        </button>
                      </motion.div>
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