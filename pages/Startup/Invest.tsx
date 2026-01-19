import React from 'react';
import SEO from '../../components/SEO';
import { Download, Lock, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FinancialChart from '../../components/FinancialChart';
import UseOfFundsChart from '../../components/UseOfFundsChart';
import {
    FINANCIAL_PROJECTIONS,
    FUNDING,
    GTM_ROADMAP,
    SAAS_PRODUCTS,
    VISION
} from '../../startup-constants';

const Invest: React.FC = () => {
    return (
        <div className="bg-brand-black min-h-screen pt-24 pb-24 px-6">
            <SEO
                title="Investor Portal - PIXCIDENT"
                description="Investment opportunity in PIXCIDENT's multi-product AI SaaS platform. View pitch deck, financial projections, and growth strategy."
            />
            <div className="container mx-auto max-w-7xl">

                {/* Header */}
                <header className="mb-20 border-b border-zinc-800 pb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <div className="text-blue-500 font-mono text-sm mb-2 uppercase tracking-widest">Investor Relations</div>
                            <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tight">Investment Opportunity</h1>
                            <p className="text-xl text-zinc-400 mt-4 max-w-2xl">
                                Join us in building the AI infrastructure for commerce and automation
                            </p>
                        </div>
                        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-8 py-4 rounded-lg transition-all group shadow-lg">
                            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                            Download Pitch Deck (PDF)
                        </button>
                    </div>
                </header>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {[
                        { label: 'Seeking', value: FUNDING.seeking },
                        { label: 'Valuation Cap', value: '$12M' },
                        { label: 'Minimum Ticket', value: '$25k' },
                        { label: 'Year 3 Revenue', value: '$7.9M' },
                    ].map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors"
                        >
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">{metric.label}</p>
                            <p className="text-3xl font-bold text-white">{metric.value}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Executive Summary */}
                <section className="mb-20">
                    <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                        Executive Summary
                    </h2>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 space-y-6 text-zinc-300 leading-relaxed">
                        <p className="text-lg">
                            <span className="text-white font-bold">PIXCIDENT</span> is a multi-product AI SaaS company targeting high-friction operational areas in retail, e-commerce, trading, and social commerce automation.
                        </p>
                        <p>
                            Our core philosophy is <span className="italic text-blue-400">"AI that replaces manual systems, not people."</span> We build practical, revenue-generating tools that remove spreadsheets, guesswork, and repetitive operations.
                        </p>
                        <p>
                            <span className="text-white font-bold">Vision:</span> {VISION}
                        </p>
                        <div className="bg-blue-900/10 border border-blue-500/30 p-6 rounded-lg">
                            <p className="text-blue-300 font-bold mb-2">Why Now?</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                                    <span>AI infrastructure costs have dropped 90% in 3 years</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                                    <span>SMBs are actively seeking AI tools that actually work</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                                    <span>Multi-product SaaS companies command 3x higher valuations</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Product Overview */}
                <section className="mb-20">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Product Suite</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SAAS_PRODUCTS.map((product, i) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-green-500/50 transition-colors"
                            >
                                <h3 className="text-white font-bold text-lg mb-2">{product.name}</h3>
                                <p className="text-sm text-zinc-400 mb-4">{product.tagline}</p>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-zinc-500">Revenue Model</span>
                                        <span className="text-zinc-300">{product.revenueModel}</span>
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        {product.pricing.slice(0, 2).map(p => (
                                            <span key={p.tier} className="text-xs bg-zinc-900 px-2 py-1 rounded text-green-400">
                                                {p.tier}: {p.price}{p.model}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <Link to="/startup" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2 group">
                            View Full Product Details
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>

                {/* Financial Projections */}
                <section className="mb-20">
                    <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Financial Projections
                    </h2>
                    <FinancialChart projections={FINANCIAL_PROJECTIONS} />
                </section>

                {/* Use of Funds */}
                <section className="mb-20">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Use of Funds</h2>
                    <p className="text-zinc-400 mb-8">
                        We are seeking <span className="text-white font-bold">{FUNDING.seeking}</span> to accelerate product development, expand our team, and scale customer acquisition.
                    </p>
                    <UseOfFundsChart funding={FUNDING} />
                </section>

                {/* Go-to-Market Strategy */}
                <section className="mb-20">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Go-to-Market Roadmap</h2>
                    <div className="space-y-6">
                        {GTM_ROADMAP.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-green-500/50 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                                            <span className="text-3xl font-bold text-white">Phase {phase.phase}</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                                            <span className="text-blue-400 font-mono text-sm">{phase.timeframe}</span>
                                        </div>
                                        <p className="text-zinc-400 mb-4">{phase.description}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {phase.milestones.map((milestone, j) => (
                                                <div key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                                                    <Check size={16} className="text-green-400 flex-shrink-0" />
                                                    {milestone}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Exit Strategy */}
                <section className="mb-20">
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Exit Strategy</h2>
                    <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-xl p-8">
                        <p className="text-zinc-400 mb-6">
                            PIXCIDENT is positioned for multiple exit scenarios, providing flexibility and optionality for investors:
                        </p>
                        <div className="space-y-4">
                            {FUNDING.exitStrategy.map((strategy, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800"
                                >
                                    <div className="w-8 h-8 bg-blue-900/30 text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                        {i + 1}
                                    </div>
                                    <p className="text-zinc-300">{strategy}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Data Room CTA */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 border-2 border-blue-500/30 p-12 rounded-2xl text-center relative overflow-hidden group cursor-pointer hover:border-green-500/50 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Lock className="text-blue-500 w-16 h-16 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-white font-bold text-3xl mb-4">Secure Data Room Access</h3>
                        <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                            Request access to detailed financials, cap table, legal documents, customer metrics, and technical due diligence materials.
                        </p>
                        <button className="bg-white text-black px-10 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors text-lg">
                            Request Data Room Access
                        </button>
                        <p className="mt-6 text-xs text-zinc-500">Qualified investors only. NDA required.</p>
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 text-center">
                        <h3 className="text-white font-bold text-2xl mb-4">Questions About This Opportunity?</h3>
                        <p className="text-zinc-400 mb-6">
                            Our team is available to discuss partnership opportunities and answer any questions.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <a href="mailto:invest@pixcident.com" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                                Contact Investor Relations
                            </a>
                            <Link to="/" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                                Return to Home
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Invest;