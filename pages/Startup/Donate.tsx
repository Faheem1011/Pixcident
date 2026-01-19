import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { DONATION_TIERS_UPDATED, DONATION_PURPOSE } from '../../startup-constants';
import { Check, Heart, ArrowRight, Code, GraduationCap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Donate: React.FC = () => {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

    const iconMap: Record<string, React.ComponentType<any>> = {
        Code, GraduationCap, Shield, Heart
    };

    return (
        <div className="bg-brand-black min-h-screen pt-24 pb-24 px-6">
            <SEO
                title="Support Ethical AI Research - PIXCIDENT"
                description="Support open-source AI tools, privacy-first research, and AI education for underserved communities. Help build the future of accessible AI."
            />
            <div className="container mx-auto max-w-6xl">

                {/* Hero */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                    >
                        <Heart size={40} fill="currentColor" className="text-white" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 rounded-full blur-xl opacity-50 animate-pulse" />
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
                        {DONATION_PURPOSE.title}
                    </h1>
                    <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        {DONATION_PURPOSE.description}
                    </p>
                </div>

                {/* Impact Areas */}
                <section className="mb-16">
                    <h2 className="text-3xl font-display font-bold text-center text-white mb-12">
                        What Your Support Enables
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {DONATION_PURPOSE.impactAreas.map((area, i) => {
                            const Icon = iconMap[area.icon];
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 p-6 rounded-xl text-center hover:border-green-500/50 transition-colors group"
                                >
                                    <div className="bg-green-900/20 text-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        {Icon && <Icon size={28} />}
                                    </div>
                                    <h3 className="text-white font-bold mb-2">{area.title}</h3>
                                    <p className="text-zinc-400 text-sm">{area.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Progress Tracker */}
                <div className="mb-16 bg-zinc-950 rounded-2xl p-8 border border-zinc-800">
                    <div className="flex justify-between text-sm text-zinc-400 mb-4">
                        <span>Current Funding</span>
                        <span>2026 Goal: $50,000</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-6 overflow-hidden relative">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '32%' }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                            className="bg-gradient-to-r from-blue-600 via-green-500 to-cyan-500 h-full rounded-full flex items-center justify-end pr-4"
                        >
                            <span className="text-white text-xs font-bold">$16,200</span>
                        </motion.div>
                    </div>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'Open-Source Tools Released', value: '12' },
                            { label: 'Developers Supported', value: '340+' },
                            { label: 'Workshop Attendees', value: '1,200+' }
                        ].map((metric, i) => (
                            <div key={i} className="text-center p-4 bg-zinc-900/50 rounded-lg">
                                <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                                    {metric.value}
                                </p>
                                <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Donation Tiers */}
                <section className="mb-16">
                    <h2 className="text-3xl font-display font-bold text-center text-white mb-12">
                        Choose Your Support Level
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {DONATION_TIERS_UPDATED.map((tier) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`relative p-6 rounded-2xl border transition-all cursor-pointer ${selectedAmount === tier.amount
                                        ? 'bg-gradient-to-br from-zinc-900 to-zinc-950 border-green-500 ring-2 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                                        : 'bg-zinc-950 border-zinc-800 hover:border-zinc-600'
                                    }`}
                                onClick={() => setSelectedAmount(tier.amount)}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-green-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                <div className="text-5xl font-display font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-6">
                                    ${tier.amount}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {tier.perks.map((perk, i) => (
                                        <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                                            <Check size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 rounded-lg font-bold uppercase tracking-wider transition-all ${selectedAmount === tier.amount
                                            ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                                        }`}
                                >
                                    {selectedAmount === tier.amount ? 'Selected' : 'Select'}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Custom Amount */}
                <section className="mb-16">
                    <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center">
                        <h3 className="text-white font-bold text-2xl mb-4">Or Choose a Custom Amount</h3>
                        <p className="text-zinc-400 mb-6">Every contribution makes a difference in advancing ethical AI</p>
                        <div className="flex justify-center items-center gap-4 max-w-md mx-auto mb-8">
                            <span className="text-4xl text-zinc-500">$</span>
                            <input
                                type="number"
                                placeholder="0.00"
                                className="bg-transparent border-b-2 border-zinc-700 text-4xl text-white w-full py-3 focus:outline-none focus:border-green-500 text-center transition-colors"
                                onChange={(e) => setSelectedAmount(parseFloat(e.target.value) || null)}
                            />
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-16 py-4 rounded-lg font-bold uppercase text-lg transition-all shadow-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] inline-flex items-center gap-2">
                            Support Now
                            <ArrowRight size={20} />
                        </button>
                        <p className="mt-6 text-xs text-zinc-500">
                            Secure payments via Stripe • Tax deductible where applicable • 100% goes to research
                        </p>
                    </div>
                </section>

                {/* Why Donate Section */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-blue-900/10 to-green-900/10 border-2 border-blue-500/30 rounded-2xl p-10">
                        <h3 className="text-white font-bold text-3xl mb-6 text-center">
                            Why Your Support Matters
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-green-400 font-bold uppercase text-sm">Our Commitment</h4>
                                <ul className="space-y-3 text-zinc-300">
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>100% of donations fund research and development</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>All tools released under permissive open-source licenses</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>Quarterly progress reports to all contributors</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                                        <span>Privacy-first: no data harvesting or tracking</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-blue-400 font-bold uppercase text-sm">The Impact</h4>
                                <p className="text-zinc-300 leading-relaxed">
                                    Your contribution directly funds AI research that prioritizes accessibility over profit. We're building tools that work for small businesses and individuals, not just enterprises with massive budgets.
                                </p>
                                <p className="text-zinc-300 leading-relaxed">
                                    Together, we can democratize AI and ensure it remains a force for good, accessible to everyone regardless of budget or technical expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Footer */}
                <section className="text-center">
                    <p className="text-zinc-400 mb-6">
                        Prefer to contribute through other means?
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="mailto:donate@pixcident.com" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                            Contact Us About Sponsorship
                        </a>
                        <a href="/startup/invest" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                            Interested in Investing?
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Donate;