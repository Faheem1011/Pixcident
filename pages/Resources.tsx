import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Clock, ArrowRight, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO, { StructuredData } from '../components/EnhancedSEO';
import { trackEvent } from '../components/Analytics';

const Resources: React.FC = () => {
    // ROI Calculator State
    const [monthlyTraffic, setMonthlyTraffic] = useState(5000);
    const [currentCR, setCurrentCR] = useState(2.0); // %
    const [avgOrderValue, setAvgOrderValue] = useState(150);
    const [renderCost, setRenderCost] = useState(2500);

    // Calculated fields
    const currentRevenue = (monthlyTraffic * (currentCR / 100)) * avgOrderValue;
    const projectCR = currentCR * 1.35; // Assumed 35% lift based on case studies
    const projectedRevenue = (monthlyTraffic * (projectCR / 100)) * avgOrderValue;
    const monthlyLift = projectedRevenue - currentRevenue;
    const yearlyLift = monthlyLift * 12;
    const paybackPeriod = renderCost / monthlyLift;

    // Cost Estimator State
    const [projectType, setProjectType] = useState('product-render');
    const [complexity, setComplexity] = useState('standard');
    const [assetCount, setAssetCount] = useState(1);
    const [estimatedCost, setEstimatedCost] = useState(0);

    useEffect(() => {
        let base = 0;
        switch (projectType) {
            case 'product-render': base = 250; break;
            case 'arch-viz': base = 800; break;
            case 'animation': base = 1500; break;
            case 'game-env': base = 2500; break;
            default: base = 500;
        }

        const complexityMulti = complexity === 'basic' ? 0.8 : complexity === 'standard' ? 1 : 1.8;
        setEstimatedCost(Math.round(base * complexityMulti * assetCount));
    }, [projectType, complexity, assetCount]);

    return (
        <>
            <EnhancedSEO
                title="Resources & Tools - ROI Calculators & Estimators"
                description="Use our free 3D visualization ROI calculator and project cost estimator to plan your next creative tech project with Pixcident."
                keywords={['3D ROI calculator', 'project cost estimator', 'visualization roi', 'creative studio resources', '3D render cost']}
            />

            <StructuredData
                type="SoftwareApplication"
                data={{
                    name: "Pixcident ROI Calculator",
                    applicationCategory: "BusinessApplication",
                    operatingSystem: "Web",
                    offers: {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    description: "Free tool to calculate the return on investment for 3D product visualization."
                }}
            />

            <div className="min-h-screen bg-brand-black text-white pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-4xl mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-brand-orange font-mono text-sm uppercase tracking-wider">Growth Tools</span>
                                <div className="flex-1 h-px bg-zinc-800" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                                Resources
                            </h1>
                            <p className="text-xl text-zinc-400 leading-relaxed">
                                Strategy-first tools designed to help you quantify value, plan budgets, and optimize your creative workflow.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* 3D ROI CALCULATOR */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-brand-dark border border-zinc-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <TrendingUp size={200} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange">
                                        <Calculator size={24} />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold">3D ROI Calculator</h2>
                                </div>

                                <p className="text-zinc-400 mb-8">
                                    Calculate the potential revenue lift from upgrading your product visuals to photorealistic 3D renders.
                                </p>

                                <div className="space-y-8">
                                    {/* Monthly Traffic */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <label className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Monthly Traffic</label>
                                            <span className="text-xl font-bold">{monthlyTraffic.toLocaleString()} visitors</span>
                                        </div>
                                        <input
                                            type="range" min="100" max="100000" step="100"
                                            value={monthlyTraffic}
                                            onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                                            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                                        />
                                    </div>

                                    {/* Current CR */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <label className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Current Conversion Rate</label>
                                            <span className="text-xl font-bold">{currentCR}%</span>
                                        </div>
                                        <input
                                            type="range" min="0.1" max="10" step="0.1"
                                            value={currentCR}
                                            onChange={(e) => setCurrentCR(Number(e.target.value))}
                                            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                                        />
                                    </div>

                                    {/* Avg Order Value */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <label className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Avg. Order Value ($)</label>
                                            <span className="text-xl font-bold">${avgOrderValue}</span>
                                        </div>
                                        <input
                                            type="range" min="10" max="5000" step="10"
                                            value={avgOrderValue}
                                            onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                                            className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                                        />
                                    </div>
                                </div>

                                {/* Results card */}
                                <div className="mt-12 p-8 bg-zinc-950 rounded-2xl border border-brand-orange/30">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-zinc-500 text-xs uppercase mb-1">Monthly Rev lift</p>
                                            <p className="text-3xl font-bold text-green-400">+${monthlyLift.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                        </div>
                                        <div>
                                            <p className="text-zinc-500 text-xs uppercase mb-1">Yearly Rev Lift</p>
                                            <p className="text-3xl font-bold text-green-400">+${yearlyLift.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-zinc-900">
                                        <div className="flex items-center gap-2 text-zinc-400 text-sm italic">
                                            <Info size={14} />
                                            <span>Payback period: <b className="text-white">{paybackPeriod.toFixed(1)} months</b> based on a ${renderCost} investment.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* COST ESTIMATOR */}
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-brand-dark border border-zinc-800 rounded-3xl p-8 lg:p-12"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange">
                                    <DollarSign size={24} />
                                </div>
                                <h2 className="text-3xl font-display font-bold">Project Estimator</h2>
                            </div>

                            <p className="text-zinc-400 mb-8">
                                Get an instant ballpark estimate for your project based on standard industry rates and complexity.
                            </p>

                            <div className="space-y-8">
                                {/* Project Type */}
                                <div>
                                    <label className="text-sm font-medium text-zinc-500 uppercase tracking-wider block mb-4">Project Type</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            { id: 'product-render', label: '3D Render' },
                                            { id: 'arch-viz', label: 'Arch Viz' },
                                            { id: 'animation', label: 'Animation' },
                                            { id: 'game-env', label: 'Unreal Env' }
                                        ].map(type => (
                                            <button
                                                key={type.id}
                                                onClick={() => setProjectType(type.id)}
                                                className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${projectType === type.id
                                                        ? 'bg-brand-orange border-brand-orange text-white'
                                                        : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                                                    }`}
                                            >
                                                {type.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Asset Count */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <label className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Number of Assets / Scenes</label>
                                        <span className="text-xl font-bold">{assetCount}</span>
                                    </div>
                                    <input
                                        type="range" min="1" max="50" step="1"
                                        value={assetCount}
                                        onChange={(e) => setAssetCount(Number(e.target.value))}
                                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                                    />
                                </div>

                                {/* Complexity */}
                                <div>
                                    <label className="text-sm font-medium text-zinc-500 uppercase tracking-wider block mb-4">Complexity Level</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {['Basic', 'Standard', 'Premium'].map(level => (
                                            <button
                                                key={level}
                                                onClick={() => setComplexity(level.toLowerCase())}
                                                className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${complexity === level.toLowerCase()
                                                        ? 'bg-brand-orange border-brand-orange text-white'
                                                        : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                                                    }`}
                                            >
                                                {level}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Final Estimate */}
                                <div className="pt-8 border-t border-zinc-800 flex items-center justify-between">
                                    <div>
                                        <p className="text-zinc-500 text-xs uppercase mb-1">Estimated Range</p>
                                        <p className="text-4xl font-bold">${(estimatedCost * 0.9).toLocaleString()} - ${(estimatedCost * 1.1).toLocaleString()}</p>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                        onClick={() => {
                                            trackEvent('estimator_cta_click', { type: projectType, cost: estimatedCost });
                                        }}
                                    >
                                        <ArrowRight size={24} />
                                    </Link>
                                </div>
                            </div>
                        </motion.section>
                    </div>

                    {/* Additional Content for SEO */}
                    <div className="mt-32 grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <CheckCircle2 className="text-brand-orange" size={20} />
                                Data Driven
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Our calculator is based on industry data showing that high-quality 3D visuals increase consumer trust and conversion rates by an average of 35%.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Clock className="text-brand-orange" size={20} />
                                Fast Delivery
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Most 3D visualization projects are delivered 40% faster than traditional photography shoots due to our agile Unreal Engine workflow.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Info className="text-brand-orange" size={20} />
                                Transparent
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                No hidden fees. Our estimator provides a realistic range based on the scope you define. For a firm quote, please reach out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resources;
