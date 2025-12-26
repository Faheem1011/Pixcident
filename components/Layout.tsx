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
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-black cursor-none relative">
      <a href="#main" className="sr-only focus:not-sr-only fixed top-2 left-2 bg-black text-white px-3 py-2 z-50">Skip to content</a>
      {/* Global Cinematic Grain */}
      <div className="bg-noise" />

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-lg border-b border-zinc-800 py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center rounded-sm transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_10px_rgba(255,85,0,0.5)]">
              <img
                src="/logo.png"
                alt="Pixcident"
                className="w-full h-full object-contain"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={40}
                height={40}
              />
            </div>
            <div className="font-display font-bold text-2xl text-white tracking-wide group-hover:text-brand-orange transition-colors">
              <GlitchText text="PIXCIDENT" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-zinc-300 hover:text-brand-orange uppercase tracking-widest transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-orange group-hover:w-full transition-all duration-300" />
            </Link>
            <Link to="/about" className="text-sm font-medium text-zinc-300 hover:text-brand-orange uppercase tracking-widest transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-orange group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Services Dropdown */}
            <div className="relative group h-full py-2" onMouseEnter={() => setHoveredLink('services')} onMouseLeave={() => setHoveredLink(null)}>
              <button
                className="flex items-center gap-1 text-sm font-medium text-zinc-300 group-hover:text-brand-orange uppercase tracking-widest transition-colors"
                aria-expanded={hoveredLink === 'services'}
                aria-haspopup="true"
              >
                Services <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-brand-dark/95 backdrop-blur-md border border-zinc-800 p-4 rounded-sm shadow-2xl w-64 flex flex-col gap-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange" />
                  {SERVICE_LINKS.map(link => (
                    <Link key={link.href} to={link.href} className="text-zinc-400 hover:text-white hover:translate-x-2 transition-all duration-300 px-3 py-2 text-sm block border-b border-zinc-900 last:border-none">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Startup Dropdown */}
            <div className="relative group h-full py-2" onMouseEnter={() => setHoveredLink('startup')} onMouseLeave={() => setHoveredLink(null)}>
              <button
                className="flex items-center gap-1 text-sm font-medium text-zinc-300 group-hover:text-brand-blue uppercase tracking-widest transition-colors"
                aria-expanded={hoveredLink === 'startup'}
                aria-haspopup="true"
              >
                Startup <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-brand-dark/95 backdrop-blur-md border border-blue-900/30 p-4 rounded-sm shadow-2xl w-48 flex flex-col gap-2 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-blue" />
                  {STARTUP_LINKS.map(link => (
                    <Link key={link.href} to={link.href} className="text-zinc-400 hover:text-brand-blue hover:translate-x-2 transition-all duration-300 px-3 py-2 text-sm block border-b border-zinc-900 last:border-none">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className="px-6 py-2 bg-white text-black font-bold text-sm uppercase tracking-wide hover:bg-brand-orange hover:text-white transition-colors skew-x-[-10deg] inline-block relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-orange transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="skew-x-[10deg] inline-block relative z-10">Start Project</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-brand-orange transition-colors p-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-30 bg-brand-black flex flex-col p-8 overflow-y-auto md:hidden"
          >
            <div className="flex flex-col gap-6 mt-16">
              <Link to="/" className="text-2xl font-display font-bold text-white uppercase">Home</Link>
              <Link to="/about" className="text-2xl font-display font-bold text-white uppercase">About</Link>

              <div className="space-y-4">
                <p className="text-brand-orange font-bold uppercase text-sm tracking-widest">Services</p>
                {SERVICE_LINKS.map(link => (
                  <Link key={link.href} to={link.href} className="block text-xl font-display text-zinc-400 hover:text-white pl-4">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="space-y-4">
                <p className="text-blue-500 font-bold uppercase text-sm tracking-widest">Startup Platform</p>
                {STARTUP_LINKS.map(link => (
                  <Link key={link.href} to={link.href} className="block text-xl font-display text-zinc-400 hover:text-white pl-4">
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link to="/contact" className="text-2xl font-display font-bold text-white uppercase">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main" className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 border-t border-zinc-900 z-10 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Column 1: Brand & Description */}
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl">Pixcident</h3>
              <div className="flex gap-4 items-start">
                <div className="w-24 h-24 shrink-0 flex items-center justify-center">
                  <img src="/logo.png" alt="Pixcident" className="w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Welcome to Pixcident. Where imagination meets precision.
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h3 className="font-display font-bold text-xl mb-6">Services</h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                {SERVICE_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="hover:text-brand-orange transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-brand-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-display font-bold text-xl mb-6">Contact Us</h3>
              <div className="space-y-4 text-zinc-400 text-sm">
                <div>
                  <p className="text-zinc-500 uppercase font-mono text-xs mb-1">Address:</p>
                  <a
                    href="https://maps.google.com/?q=74%20Summer%20St%20%23366%20Kingston,%20MA%2002364"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    74 Summer St #366<br />Kingston, MA 02364
                  </a>
                </div>
                <div>
                  <p className="text-zinc-500 uppercase font-mono text-xs mb-1">WhatsApp:</p>
                  <div className="flex flex-col">
                    <a href="https://wa.me/17815889205" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      +1 (781) 588-9205
                    </a>
                    <a href="https://wa.me/923041272538" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                      +92 304 1272538
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-zinc-500 uppercase font-mono text-xs mb-1">Email:</p>
                  <a href="mailto:info@pixcident.com" className="hover:text-white">info@pixcident.com</a>
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
              <div className="bg-black/50 p-1 rounded-lg border border-zinc-800 flex items-center mb-4 focus-within:border-brand-orange transition-colors">
                <input
                  type="email"
                  placeholder="email@pixcident.com"
                  className="bg-transparent border-none text-white text-sm px-3 py-2 w-full focus:outline-none placeholder-zinc-600"
                  aria-label="Subscribe to newsletter email"
                />
                <button className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded font-bold text-sm transition-colors">
                  Send
                </button>
              </div>
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
