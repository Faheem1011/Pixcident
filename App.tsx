import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Legal = lazy(() => import('./pages/Legal'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const StartupLanding = lazy(() => import('./pages/Startup/StartupLanding'));
const Donate = lazy(() => import('./pages/Startup/Donate'));
const Invest = lazy(() => import('./pages/Startup/Invest'));
import PixcidentChat from './components/PixcidentChat';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import PageTransition from './components/PageTransition';

// Preloader Component
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(onComplete, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div 
            className="fixed inset-0 z-[999] bg-brand-black flex items-center justify-center flex-col"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="flex items-center gap-2 mb-4">
                <motion.div 
                    className="w-4 h-4 bg-brand-orange"
                    animate={{ rotate: 360, scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <h1 className="text-4xl font-display font-bold text-white tracking-[0.2em]">PIXCIDENT</h1>
            </div>
            <div className="w-64 h-1 bg-zinc-800 overflow-hidden">
                <motion.div 
                    className="h-full bg-brand-orange"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.2, ease: "circOut" }}
                />
            </div>
        </motion.div>
    );
}

const App: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
          <>
            <CustomCursor />
            <ScrollToTop />
            <ScrollProgress />
            <Layout>
                <AnimatePresence mode="wait">
                    <Suspense fallback={<div className="text-white p-8">Loading...</div>}>
                        <Routes location={location}>
                            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                            <Route path="/privacy-policy" element={<PageTransition><Legal /></PageTransition>} />
                            <Route path="/terms-of-service" element={<PageTransition><Legal /></PageTransition>} />
                            <Route path="/services/:id" element={<PageTransition><ServiceDetail /></PageTransition>} />
                            <Route path="/startup" element={<PageTransition><StartupLanding /></PageTransition>} />
                            <Route path="/startup/donate" element={<PageTransition><Donate /></PageTransition>} />
                            <Route path="/startup/invest" element={<PageTransition><Invest /></PageTransition>} />
                        </Routes>
                    </Suspense>
                </AnimatePresence>
            </Layout>
            <PixcidentChat />
          </>
      )}
    </>
  );
};

export default App;
