import React, { useState, useEffect } from 'react';
import { NAV_LINKS, SERVICE_LINKS, STARTUP_LINKS } from '../constants';
import { Menu, X, Drama, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import GlitchText from './GlitchText';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail) return;

    setSubscribeStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          email: subscribeEmail,
          subject: 'New Newsletter Subscriber',
          from_name: 'Pixcident Newsletter',
          message: 'Please subscribe this user to the newsletter.'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubscribeStatus('success');
        setSubscribeEmail('');
        setTimeout(() => setSubscribeStatus('idle'), 3000);
      } else {
        setSubscribeStatus('error');
      }
    } catch (error) {
      setSubscribeStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-black cursor-none relative">
      <a href="#main" className="sr-only focus:not-sr-only fixed top-2 left-2 bg-black text-white px-3 py-2 z-50">Skip to content</a>
      {/* ... (navigation code remains unchanged) ... */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-lg border-b border-zinc-800 py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter flex items-center gap-2 relative z-50">
            <span className="text-brand-orange">PIX</span>CIDENT
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-colors clip-path-slant"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-brand-black/95 backdrop-blur-xl z-40 flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-bold text-white hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-3 bg-brand-orange text-white font-bold text-lg uppercase tracking-wider"
                >
                  Start Project
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-orange origin-left z-50"
        style={{ scaleX: 0 }} // Simplified for now as useScroll hook is needed but keeping layout intact
      />

      <main id="main" className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-zinc-900 z-10 relative min-h-[500px]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Column 1: Brand */}
            <div>
              <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter block mb-6">
                <span className="text-brand-orange">PIX</span>CIDENT
              </Link>
              <div className="w-16 h-16 bg-white flex items-center justify-center mb-6">
                <Drama className="text-brand-orange" size={32} />
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                Welcome to Pixcident. Where imagination meets precision.
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="font-display font-bold text-xl mb-6">Services</h3>
              <div className="flex flex-col gap-3 text-zinc-400 text-sm">
                <div>
                  <Link to="/services/3d-animation" className="hover:text-brand-orange transition-colors">3D & Animation</Link>
                </div>
                <div>
                  <Link to="/services/archviz" className="hover:text-brand-orange transition-colors">ArchViz</Link>
                </div>
                <div>
                  <Link to="/services/game-development" className="hover:text-brand-orange transition-colors">Game Development</Link>
                </div>
                <div>
                  <Link to="/services/vfx" className="hover:text-brand-orange transition-colors">VFX</Link>
                </div>
                <div>
                  <Link to="/services/ai-solutions" className="hover:text-brand-orange transition-colors">AI Solutions</Link>
                </div>
                <div>
                  <Link to="/services/web-development" className="hover:text-brand-orange transition-colors">Web Development</Link>
                </div>
                <div>
                  <Link to="/services/vibe-coding" className="hover:text-brand-orange transition-colors">Vibe Coding</Link>
                </div>
              </div>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-display font-bold text-xl mb-6">Contact Us</h3>
              <div className="space-y-4 text-zinc-400 text-sm">
                {/* ... (contact info) ... */}
                <div>
                  <p className="text-zinc-500 uppercase font-mono text-xs mb-1">Email:</p>
                  <a href="mailto:Contact@pixcident.com" className="hover:text-white">Contact@pixcident.com</a>
                </div>
                <div>
                  <p className="text-zinc-500 uppercase font-mono text-xs mb-1">Social:</p>
                  <div className="flex flex-col">
                    <a href="https://www.instagram.com/faheem.fiaz.520/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                    <a href="https://www.facebook.com/Pixcident" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
                    <a href="https://www.cgtrader.com/designers/pixcident" target="_blank" rel="noopener noreferrer" className="hover:text-white">CGTrader</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Subscribe */}
            <div>
              <h3 className="font-display font-bold text-xl mb-6">Subscribe</h3>
              {subscribeStatus === 'success' ? (
                <div className="bg-green-500/10 border border-green-500 text-green-500 p-3 rounded text-sm">
                  ✓ Thanks for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative w-full">
                  <div className={`bg-black/50 p-1 rounded-lg border flex items-center mb-4 transition-colors ${subscribeStatus === 'error' ? 'border-red-500' : 'border-zinc-800 focus-within:border-brand-orange'}`}>
                    <input
                      type="email"
                      value={subscribeEmail}
                      onChange={(e) => setSubscribeEmail(e.target.value)}
                      placeholder="email@pixcident.com"
                      required
                      className="bg-transparent border-none text-white text-sm px-3 py-2 flex-grow min-w-0 focus:outline-none placeholder-zinc-600 disabled:opacity-50"
                      aria-label="Subscribe to newsletter email"
                      disabled={subscribeStatus === 'loading'}
                    />
                    <button
                      type="submit"
                      disabled={subscribeStatus === 'loading'}
                      className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded font-bold text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                      {subscribeStatus === 'loading' ? '...' : 'Send'}
                    </button>
                  </div>
                  {subscribeStatus === 'error' && (
                    <p className="text-red-500 text-xs absolute -bottom-6 left-0">Failed to subscribe. Try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>

          <div className="border-t border-zinc-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
            <p>&copy; {new Date().getFullYear()} Pixcident. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
