import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, Globe, Cpu, Layers, Zap, ArrowRight, BarChart3, Terminal } from 'lucide-react';

const SYSTEM_LOGS = [
    "Initializing Core Protocol...",
    "Connecting to Neural Grid...",
    "Loading Dataset: ARCH_VIZ_V4...",
    "Optimizing Mesh Topology...",
    "Baking Lightmaps (4k)... [OK]",
    "Generating Assets: 142 items...",
    "User Session #4921 Active...",
    "Rendering Preview Frame...",
    "Physics Simulation: Stable...",
    "Deploying to Cloud Node US-EAST..."
];

const StartupLanding: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fake Terminal Logic
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
        setLogs(prev => {
            const newLogs = [...prev, SYSTEM_LOGS[index % SYSTEM_LOGS.length]];
            if (newLogs.length > 8) newLogs.shift();
            return newLogs;
        });
        index++;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-black min-h-screen pt-24 relative overflow-hidden">
      
      {/* Moving Cyber Grid Background */}
      <div className="absolute inset-0 z-0 perspective-1000 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black z-10" />
          <div className="w-[200%] h-[200%] absolute -left-[50%] -top-[50%] bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 transform rotate-x-60 animate-grid-flow" />
      </div>

      {/* Startup Hero */}
      <section className="relative py-32 px-6 border-b border-blue-900/30 overflow-hidden">
        {/* Glowing Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
            >
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                Pixcident Core v1.0
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tighter">
                The Engine for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Infinite Worlds</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light">
                We are productizing our internal 3D pipeline. "Pixcident Core" is a generative infrastructure layer allowing brands to create studio-quality 3D assets at scale, instantly.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link to="/startup/invest" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] uppercase tracking-wide">
                    View Pitch Deck
                </Link>
                <Link to="/startup/donate" className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white px-10 py-4 rounded font-bold text-lg transition-all uppercase tracking-wide">
                    Support R&D
                </Link>
            </div>
        </div>
      </section>

      {/* Live System Status - THE "WOW" FACTOR */}
      <section className="py-12 bg-zinc-950/80 border-b border-zinc-900">
         <div className="container mx-auto px-6 max-w-4xl">
            <div className="bg-black border border-zinc-800 rounded-lg overflow-hidden font-mono text-xs md:text-sm shadow-2xl">
                <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-zinc-500">system_status.log - bash</span>
                </div>
                <div className="p-6 h-48 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 text-green-500 opacity-20">
                         <Terminal size={48} />
                    </div>
                    <div className="space-y-2 text-zinc-400">
                        {logs.map((log, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex gap-3"
                            >
                                <span className="text-blue-500">[{new Date().toLocaleTimeString()}]</span>
                                <span className={log.includes("OK") ? "text-green-400" : "text-zinc-300"}>{log}</span>
                            </motion.div>
                        ))}
                        <motion.div 
                            animate={{ opacity: [0, 1, 0] }} 
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2 h-4 bg-blue-500 inline-block align-middle"
                        />
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* The Pitch - Problem/Solution */}
      <section className="py-24 relative z-10 bg-zinc-950/50">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
                <div className="flex-1">
                    <h2 className="text-blue-500 font-mono text-sm mb-4 tracking-widest">THE BOTTLENECK</h2>
                    <h3 className="text-4xl font-display font-bold text-white mb-6">3D Creation is Unscalable.</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        The Metaverse, AR/VR, and Gaming industries are exploding, demanding millions of 3D assets. Yet, the current workflow is manual, expensive, and requires senior talent.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-white"><span className="text-red-500 font-mono">X</span> Average Cost: $2,000 per complex asset</li>
                        <li className="flex items-center gap-3 text-white"><span className="text-red-500 font-mono">X</span> Average Time: 4-5 days per asset</li>
                        <li className="flex items-center gap-3 text-white"><span className="text-red-500 font-mono">X</span> Talent Shortage: 200k+ unfulfilled jobs</li>
                    </ul>
                </div>
                <div className="flex-1 bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative">
                    <div className="absolute -top-4 -right-4 bg-blue-600 text-white font-bold px-4 py-2 rounded uppercase text-sm">Traditional Workflow</div>
                    <div className="space-y-4 opacity-50">
                        <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
                        <div className="h-4 bg-zinc-700 rounded w-1/2"></div>
                        <div className="h-32 bg-zinc-800 rounded w-full flex items-center justify-center border-2 border-dashed border-zinc-700">Manual Modeling...</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                <div className="flex-1">
                    <h2 className="text-green-500 font-mono text-sm mb-4 tracking-widest">THE SOLUTION</h2>
                    <h3 className="text-4xl font-display font-bold text-white mb-6">Pixcident Core.</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        A proprietary Text-to-Mesh engine trained on our studio's high-fidelity dataset. We automate the geometry, UV mapping, and texturing process.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-white"><span className="text-green-500 font-mono">✓</span> Cost: $0.50 per asset</li>
                        <li className="flex items-center gap-3 text-white"><span className="text-green-500 font-mono">✓</span> Time: 20 seconds generation</li>
                        <li className="flex items-center gap-3 text-white"><span className="text-green-500 font-mono">✓</span> Topology: Game-ready Quad mesh</li>
                    </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-blue-900/20 to-zinc-900 border border-blue-500/50 p-8 rounded-2xl relative overflow-hidden">
                     <div className="absolute inset-0 bg-blue-500/5 z-0 animate-pulse"></div>
                     <div className="relative z-10 text-center">
                        <Cpu size={64} className="text-blue-400 mx-auto mb-6" />
                        <h4 className="text-2xl font-bold text-white mb-2">Generative Engine</h4>
                        <p className="text-blue-200 text-sm">Processing...</p>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 border-t border-zinc-900">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-display font-bold text-center text-white mb-16">Deployment Roadmap</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                      { title: 'Phase 1: Alpha', date: 'Q1 2025', desc: 'Internal tool validation with current studio clients.' },
                      { title: 'Phase 2: Closed Beta', date: 'Q3 2025', desc: 'SaaS rollout to 50 partner agencies.' },
                      { title: 'Phase 3: Public API', date: 'Q1 2026', desc: 'Open API for game developers and platforms.' },
                      { title: 'Phase 4: Marketplace', date: 'Q4 2026', desc: 'Peer-to-peer asset training and trading.' },
                  ].map((phase, i) => (
                      <div key={i} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 relative group hover:border-blue-500 transition-colors">
                          <div className="text-blue-500 font-mono text-xs mb-2">{phase.date}</div>
                          <h4 className="text-white font-bold text-lg mb-2">{phase.title}</h4>
                          <p className="text-zinc-500 text-sm">{phase.desc}</p>
                          {i < 3 && <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-zinc-700"><ArrowRight /></div>}
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Business Model */}
      <section className="py-24 bg-blue-950/20">
          <div className="container mx-auto px-6 text-center">
               <h2 className="text-4xl font-display font-bold text-white mb-12">Business Model</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-xl">
                        <Layers className="mx-auto text-blue-400 mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">SaaS Subscription</h3>
                        <p className="text-zinc-400">$49/mo for pro creators for unlimited standard generations.</p>
                    </div>
                    <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-xl">
                        <Zap className="mx-auto text-yellow-400 mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">Compute Credits</h3>
                        <p className="text-zinc-400">Pay-as-you-go for high-fidelity 4K texture baking and rigging.</p>
                    </div>
                    <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-xl">
                        <BarChart3 className="mx-auto text-green-400 mb-4" size={32} />
                        <h3 className="text-xl font-bold text-white mb-2">Enterprise API</h3>
                        <p className="text-zinc-400">Custom model training on brand IP for large studios.</p>
                    </div>
               </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-8 uppercase tracking-widest">
                Join the Revolution
            </h2>
            <Link to="/startup/invest" className="inline-block bg-white text-black px-12 py-4 rounded font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors">
                Invest Now
            </Link>
        </div>
      </section>
    </div>
  );
};

export default StartupLanding;