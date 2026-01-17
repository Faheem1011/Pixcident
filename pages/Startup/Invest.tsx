import React from 'react';
import SEO from '../../components/SEO';
import { Download, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Invest: React.FC = () => {
    return (
        <div className="bg-brand-black min-h-screen pt-24 pb-24 px-6">
            <SEO
                title="Investor Portal"
                description="Pixcident Series A Investor Information. Access pitch deck, financial metrics, and growth projections."
            />
            <div className="container mx-auto max-w-6xl">

                <header className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-zinc-800 pb-8">
                    <div>
                        <div className="text-blue-500 font-mono text-sm mb-2">RELATIONS // SERIES A</div>
                        <h1 className="text-5xl font-display font-bold text-white uppercase">Investor Portal</h1>
                    </div>
                    <button className="mt-6 md:mt-0 flex items-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-blue-500 text-white px-6 py-3 rounded transition-colors group">
                        <Download size={18} className="group-hover:translate-y-1 transition-transform" /> Download Pitch Deck (PDF)
                    </button>
                </header>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[
                        { label: 'Valuation Cap', value: '$12M' },
                        { label: 'Minimum Ticket', value: '$25k' },
                        { label: 'Runway', value: '18 Mo' },
                        { label: 'YoY Growth', value: '240%' },
                    ].map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-zinc-950 border border-zinc-800 rounded-lg hover:border-blue-500/30 transition-colors"
                        >
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">{metric.label}</p>
                            <p className="text-3xl font-bold text-white">{metric.value}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Col: Narrative */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Executive Summary</h2>
                        <div className="space-y-6 text-zinc-400 leading-relaxed">
                            <p>
                                Pixcident is uniquely positioned to capture the growing demand for real-time 3D assets. By automating the "boring" parts of creation with our proprietary AI, we enable creators to focus on storytelling.
                            </p>
                            <p>
                                We have successfully validated our tech stack with 50+ enterprise clients in 2024 and are now raising capital to productize our internal tools into a SaaS platform.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-bold text-white mb-4">Use of Funds</h3>
                            <div className="space-y-4">
                                <div className="bg-zinc-900 p-4 rounded border border-zinc-800 flex justify-between items-center hover:bg-zinc-800 transition-colors cursor-default">
                                    <span>Engineering & R&D</span>
                                    <span className="font-mono text-blue-400">45%</span>
                                </div>
                                <div className="bg-zinc-900 p-4 rounded border border-zinc-800 flex justify-between items-center hover:bg-zinc-800 transition-colors cursor-default">
                                    <span>Sales & Marketing</span>
                                    <span className="font-mono text-blue-400">30%</span>
                                </div>
                                <div className="bg-zinc-900 p-4 rounded border border-zinc-800 flex justify-between items-center hover:bg-zinc-800 transition-colors cursor-default">
                                    <span>Operations</span>
                                    <span className="font-mono text-blue-400">25%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Charts/Visuals */}
                    <div className="space-y-8">
                        {/* Real SVG Chart */}
                        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 h-80 flex flex-col relative overflow-hidden">
                            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                Projected Revenue (Millions)
                            </h4>

                            <div className="flex-1 w-full relative">
                                <svg className="w-full h-full" viewBox="0 0 400 200">
                                    {/* Grid Lines */}
                                    <line x1="0" y1="50" x2="400" y2="50" stroke="#333" strokeDasharray="4 4" />
                                    <line x1="0" y1="100" x2="400" y2="100" stroke="#333" strokeDasharray="4 4" />
                                    <line x1="0" y1="150" x2="400" y2="150" stroke="#333" strokeDasharray="4 4" />

                                    {/* Chart Line */}
                                    <motion.path
                                        d="M0,180 C50,180 100,160 150,140 C200,120 250,80 300,50 C350,20 400,0 400,0"
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth="3"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />

                                    {/* Area fill (pseudo) */}
                                    <motion.path
                                        d="M0,180 C50,180 100,160 150,140 C200,120 250,80 300,50 C350,20 400,0 400,0 L400,200 L0,200 Z"
                                        fill="url(#gradient)"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 0.3 }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                    />

                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#3b82f6" />
                                            <stop offset="100%" stopColor="transparent" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Data Points */}
                                <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-zinc-500 mt-2 font-mono">
                                    <span>Q1</span>
                                    <span>Q2</span>
                                    <span>Q3</span>
                                    <span>Q4</span>
                                    <span>2026</span>
                                </div>
                            </div>
                        </div>

                        {/* Secure Data Room CTA */}
                        <div className="bg-blue-900/10 border border-blue-500/30 p-8 rounded-xl text-center group hover:bg-blue-900/20 transition-colors cursor-pointer">
                            <Lock className="text-blue-500 w-10 h-10 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white font-bold text-xl mb-2">Data Room Access</h3>
                            <p className="text-zinc-400 text-sm mb-6">Request access to full financials, cap table, and legal documents.</p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold uppercase text-sm transition-colors">
                                Request Access
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invest;