import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Shield, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { SOFTWARE_PRODUCTS } from '../constants';
import ContactSection from '../components/ContactSection';

const Arsenal: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="bg-brand-black min-h-screen" ref={containerRef}>
            <SEO
                title="Cyber Arsenal | Pixcident"
                description="Premium developer tools, custom software, and system modifications from Pixcident Studio."
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/20 via-brand-black to-brand-black" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full">
                            <Terminal size={16} className="text-brand-orange" />
                            <span className="text-brand-orange font-mono text-sm uppercase tracking-wider">System Access Initiated</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter">
                            Cyber <span className="text-brand-orange">Arsenal</span>
                        </h1>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed">
                            Premium developer tools, system modifications, and automated workflows engineered to bypass limitations and accelerate your potential.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Software Grid */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {SOFTWARE_PRODUCTS.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-brand-orange/50 transition-colors group relative"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-brand-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-sm pointer-events-none" />

                                <div className="relative bg-zinc-900 h-full flex flex-col pt-1">
                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-zinc-300 uppercase tracking-wider">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Thumbnail Cover */}
                                    <div className="relative h-64 overflow-hidden bg-black mt-[-4px]">
                                        <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay z-10" />
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                        />
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8 flex flex-col flex-grow relative z-20">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-orange transition-colors">
                                                {product.title}
                                            </h3>
                                            <div className="text-2xl font-mono text-white">
                                                ${product.price}
                                            </div>
                                        </div>

                                        <p className="text-zinc-400 mb-8 leading-relaxed">
                                            {product.description}
                                        </p>

                                        <div className="space-y-3 mb-8 flex-grow">
                                            {product.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-0.5" />
                                                    <span className="text-zinc-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <a
                                            href={product.paymentLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 hover:bg-brand-orange hover:text-white transition-colors skew-x-[-5deg] relative group/btn"
                                        >
                                            <Download size={18} className="skew-x-[5deg] group-hover/btn:-translate-y-1 transition-transform" />
                                            <span className="skew-x-[5deg]">Unlock Access</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Banner */}
            <section className="py-20 border-y border-zinc-900 bg-[#050505]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 justify-center max-w-4xl mx-auto text-center md:text-left">
                        <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center border border-brand-orange/30 shrink-0">
                            <Shield size={32} className="text-brand-orange" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Verified & Secure</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                All software builds are rigorously tested and manually verified. Your purchase grants immediate access to clean, functional executables without intrusive DRM or telemetry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};

export default Arsenal;
