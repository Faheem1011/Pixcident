import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Building2, Rocket, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO, { StructuredData } from '../components/EnhancedSEO';
import { trackEvent } from '../components/Analytics';

const PricingCard = ({
    title,
    price,
    description,
    features,
    icon: Icon,
    popular,
    ctaLink = "/contact",
    delay = 0
}: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={`relative group h-full flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${popular
                ? 'bg-zinc-900/50 border-brand-orange/40 shadow-[0_0_50px_rgba(255,85,0,0.1)]'
                : 'bg-zinc-900/20 border-zinc-800 hover:border-zinc-700'
            }`}
    >
        {popular && (
            <div className="absolute top-0 right-0 py-2 px-6 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded-bl-2xl">
                Most Popular
            </div>
        )}

        {/* Glassmorphism gradient effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-orange/10 blur-[100px] group-hover:bg-brand-orange/20 transition-all duration-700" />

        <div className="relative z-10 flex-grow pt-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${popular ? 'bg-brand-orange text-white' : 'bg-zinc-800 text-brand-orange'
                }`}>
                <Icon size={28} />
            </div>

            <h3 className="text-3xl font-display font-bold mb-2">{title}</h3>
            <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold">From ${price}</span>
                <span className="text-zinc-500 text-sm">/project</span>
            </div>
            <p className="text-zinc-400 text-sm mb-8 line-clamp-2">{description}</p>

            <div className="space-y-4 mb-10">
                {features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 shrink-0 ${popular ? 'text-brand-orange' : 'text-zinc-500'}`}>
                            <Check size={16} />
                        </div>
                        <span className="text-zinc-300 text-sm leading-tight">{feature}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="relative z-10 mt-auto">
            <Link
                to={ctaLink}
                onClick={() => trackEvent('pricing_tier_selected', { tier: title })}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all ${popular
                        ? 'bg-brand-orange text-white hover:bg-orange-600 hover:shadow-lg'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
            >
                Select {title} <ArrowRight size={18} />
            </Link>
        </div>
    </motion.div>
);

const Pricing: React.FC = () => {
    return (
        <>
            <EnhancedSEO
                title="Pricing - Flexible 3D & Tech Solutions"
                description="Explore our transparent pricing tiers for 3D visualization, web development, and AI automation. Solutions designed for startups and established enterprises."
                keywords={['3D render pricing', 'web development cost', 'visualization packages', 'creative studio rates']}
            />

            {/* Pricing Schema */}
            <StructuredData
                type="CreativeWork"
                data={{
                    name: "Pixcident Service Packages",
                    description: "Tiered pricing for creative technology and visualization services.",
                    offers: [
                        { "@type": "Offer", name: "Startup Launch", price: "950", priceCurrency: "USD" },
                        { "@type": "Offer", name: "Professional Studio", price: "3500", priceCurrency: "USD" },
                        { "@type": "Offer", name: "Enterprise Systems", price: "Custom", priceCurrency: "USD" }
                    ]
                }}
            />

            <div className="min-h-screen bg-brand-black text-white pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8">
                                Value <span className="text-brand-orange">Tiers</span>
                            </h1>
                            <p className="text-xl text-zinc-400">
                                Transparent pricing built on value, not just hours. Choose the depth that fits your current growth phase.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
                        <PricingCard
                            title="Startup"
                            price="950"
                            icon={Rocket}
                            description="Ideal for early-stage ventures looking to visualize MVP products or simple landing pages."
                            features={[
                                "2x Photorealistic 3D Renders",
                                "Conversion Optimized Landing Page",
                                "Basic SEO Setup",
                                "Fast 5-Day Delivery",
                                "Email Support"
                            ]}
                            delay={0}
                        />

                        <PricingCard
                            title="Professional"
                            price="3,500"
                            popular={true}
                            icon={Sparkles}
                            description="A complete solution for established brands ready to upgrade their digital experience and scale operations."
                            features={[
                                "5x High-Detail 3D Product Renders",
                                "15s Product Launch Animation",
                                "Full Custom Web Ecosystem (React)",
                                "Advanced GA4 & SEO Integration",
                                "AI Workflow Automation (Basic)",
                                "Priority Support (WhatsApp/Slack)"
                            ]}
                            delay={0.1}
                        />

                        <PricingCard
                            title="Enterprise"
                            price="Custom"
                            icon={Building2}
                            description="High-performance systems for demanding projects requiring Unreal Engine simulators or custom AI agents."
                            features={[
                                "Full Unreal Engine 5 Environments",
                                "Interactive Product Configurators",
                                "Bespoke AI Agent Integration",
                                "Pixel Streaming & Cloud Deployment",
                                "Ongoing Strategic Retainer",
                                "Dedicated Solutions Architect"
                            ]}
                            delay={0.2}
                        />
                    </div>

                    {/* Trust Section */}
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="p-8 lg:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800">
                            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4">The Pixcident Guarantee</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                We don't settle for "good enough." Every project is governed by strict quality gates. If the final output doesn't meet the technical specs defined in our Discovery phase, we work until it does—at no extra cost.
                            </p>
                            <ul className="space-y-2 text-xs text-zinc-500 font-mono uppercase">
                                <li>• No hidden server fees</li>
                                <li>• Full source code ownership</li>
                                <li>• Optimized for sustainability</li>
                            </ul>
                        </div>

                        <div className="text-center md:text-left space-y-6">
                            <h3 className="text-3xl font-display font-bold">Custom Requirements?</h3>
                            <p className="text-zinc-400">
                                Not every project fits into a box. We frequently design custom retainers and project scopes tailored to specific technical needs.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-4 transition-all">
                                Get a Custom Quote <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
