import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Settings, ShieldCheck, TrendingUp, Globe, Layers, Lock, Cpu, Zap, Target } from 'lucide-react';
import ProductShowcase from '../../components/ProductShowcase';
import {
    SAAS_PRODUCTS,
    VISION,
    MISSION_PILLARS,
    COMPETITIVE_ADVANTAGES,
    MARKET
} from '../../startup-constants';

const StartupLanding: React.FC = () => {
    const iconMap: Record<string, React.ComponentType<any>> = {
        Brain, Settings, ShieldCheck, TrendingUp, Globe, Layers, Lock, Cpu, Zap, Target
    };

    return (
        <div className="bg-brand-black min-h-screen pt-24 relative overflow-hidden">
            <SEO
                title="PIXCIDENT - AI SaaS Infrastructure"
                description="AI-Powered SaaS Infrastructure for Commerce, Trading, and Automation. Multiple revenue engines powering the future of intelligent business operations."
                image="/assets/portfolio/vfx-1.png"
            />

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-green-950/20 pointer-events-none" />

            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/10 blur-[150px] rounded-full" />

                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900/30 to-green-900/30 text-blue-400 border border-blue-500/30 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
                    >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Multi-Product AI SaaS Platform
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tighter">
                        AI Systems That <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-300">
                            Run Your Business
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto mb-4 font-light leading-relaxed">
                        PIXCIDENT is a multi-product SaaS company building practical, revenue-generating AI tools for modern digital businesses.
                    </p>

                    <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-12 italic">
                        "AI that replaces manual systems, not people."
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link to="/startup/invest" className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] uppercase tracking-wide flex items-center justify-center gap-2">
                            View Investor Pitch
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <Link to="/startup/donate" className="bg-zinc-900 hover:bg-zinc-800 border-2 border-zinc-700 hover:border-green-500/50 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all uppercase tracking-wide">
                            Support R&D
                        </Link>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 border-t border-zinc-900 bg-zinc-950/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-blue-500 font-mono text-sm mb-4 tracking-widest uppercase">Our Vision</h2>
                        <p className="text-3xl md:text-4xl font-display font-bold text-white leading-relaxed">
                            {VISION}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {MISSION_PILLARS.map((pillar, i) => {
                            const Icon = iconMap[pillar.icon];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-6 rounded-xl hover:border-blue-500/50 transition-colors text-center group"
                                >
                                    <div className="bg-blue-900/20 text-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        {Icon && <Icon size={28} />}
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{pillar.title}</h3>
                                    <p className="text-zinc-400 text-sm">{pillar.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Product Suite */}
            <section className="py-24 border-t border-zinc-900 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-green-500 font-mono text-sm mb-4 tracking-widest uppercase">Core Products</h2>
                        <h3 className="text-5xl font-display font-bold text-white mb-6">
                            Five Tightly Aligned SaaS Products
                        </h3>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                            Each product operates independently while benefiting from shared infrastructure, data intelligence, and cross-selling opportunities.
                        </p>
                    </div>

                    <ProductShowcase products={SAAS_PRODUCTS} />
                </div>
            </section>

            {/* Market Opportunity */}
            <section className="py-24 border-t border-zinc-900 bg-gradient-to-br from-blue-950/10 to-green-950/10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-500 font-mono text-sm mb-4 tracking-widest uppercase">Market Opportunity</h2>
                        <h3 className="text-5xl font-display font-bold text-white mb-6">
                            Massive Addressable Market
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                        {[
                            { label: 'TAM', value: MARKET.tam, desc: 'Total Addressable Market' },
                            { label: 'SAM', value: MARKET.sam, desc: 'Serviceable Available Market' },
                            { label: 'SOM', value: MARKET.som, desc: 'Serviceable Obtainable Market' },
                            { label: 'Growth', value: MARKET.growthRate, desc: 'Industry CAGR' }
                        ].map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-zinc-950 border border-blue-500/30 p-8 rounded-xl text-center"
                            >
                                <p className="text-sm text-zinc-500 uppercase tracking-widest mb-2">{metric.label}</p>
                                <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
                                    {metric.value}
                                </p>
                                <p className="text-xs text-zinc-400">{metric.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                        <h4 className="text-white font-bold mb-4 text-center">Industry Pain Points We Solve</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Manual Forecasting', impact: 'Costs businesses $50B annually in lost revenue' },
                                { title: 'System Inefficiency', impact: '40% of time wasted on repetitive tasks' },
                                { title: 'Poor Decision Making', impact: '70% of traders lose money due to emotion' }
                            ].map((pain, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-red-400 font-bold mb-2">{pain.title}</p>
                                    <p className="text-sm text-zinc-400">{pain.impact}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why PIXCIDENT Wins */}
            <section className="py-24 border-t border-zinc-900">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-green-500 font-mono text-sm mb-4 tracking-widest uppercase">Competitive Advantages</h2>
                        <h3 className="text-5xl font-display font-bold text-white mb-6">
                            Why PIXCIDENT Wins
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {COMPETITIVE_ADVANTAGES.map((advantage, i) => {
                            const Icon = iconMap[advantage.icon];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-green-500/30 p-8 rounded-xl hover:border-green-500 transition-all group"
                                >
                                    <div className="bg-green-900/20 text-green-400 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {Icon && <Icon size={24} />}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3">{advantage.title}</h4>
                                    <p className="text-zinc-400">{advantage.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-2 border-green-500/30 p-12 rounded-2xl">
                        <p className="text-2xl text-white font-bold mb-4">
                            PIXCIDENT is not a single SaaS tool.
                        </p>
                        <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                            It is a modular AI business operating system for the modern digital economy.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-zinc-900 bg-gradient-to-br from-blue-950/20 to-green-950/20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 uppercase tracking-wider">
                        Ready to Scale Your Business?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                        Join the AI revolution. Invest in the future of commerce automation.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link to="/startup/invest" className="bg-white text-black px-12 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors text-lg">
                            View Investment Opportunity
                        </Link>
                        <Link to="/startup/donate" className="bg-green-600 hover:bg-green-500 text-white px-12 py-4 rounded-lg font-bold uppercase tracking-wider transition-colors text-lg">
                            Support Open-Source AI
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartupLanding;