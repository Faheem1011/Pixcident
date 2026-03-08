import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';
import EnhancedSEO, { StructuredData } from '../components/EnhancedSEO';
import { getAssetUrl } from '../cdn-utils';

const CaseStudies: React.FC = () => {
    const caseStudies = [
        {
            id: '3d-product-launch',
            title: 'E-commerce Product Launch: From Concept to 1000 Pre-Orders',
            client: 'NutriTech Supplements',
            industry: 'E-commerce / Health & Wellness',
            challenge: 'NutriTech needed to launch a new creatine supplement line but had not manufactured a single unit. Traditional photography was impossible, and generic stock images would not cut it for a premium brand.',
            solution: 'We created photorealistic 3D product renders showing the supplement in various lifestyle contexts - gym settings, kitchen counters, and close-up detail shots. These renders were used across their Shopify store, social media, and Amazon listing before manufacturing began.',
            results: [
                '1,247 pre-orders in the first 2 weeks',
                '32% increase in landing page conversion rate',
                '$127,000 in validated revenue before manufacturing costs',
                '4.8/5 customer satisfaction with product visuals'
            ],
            technologies: ['Blender 3D', 'Unreal Engine 5', 'Substance Painter', 'Adobe After Effects'],
            timeline: '3 weeks from brief to final delivery',
            image: getAssetUrl('/assets/creatine product render.png'),
            testimonial: {
                text: 'Pixcident did not just save our launch timeline. They proved our product would sell before we spent a dime on manufacturing. The ROI was immediate.',
                author: 'Sarah Chen',
                role: 'Founder, NutriTech'
            }
        },
        {
            id: 'archviz-real-estate',
            title: 'Luxury Real Estate: Selling Apartments Before Construction',
            client: 'Skyline Properties',
            industry: 'Real Estate Development',
            challenge: 'Skyline needed to secure buyers for a $15M luxury apartment complex 18 months before construction completion. Floor plans and technical drawings were not generating interest from high-net-worth buyers.',
            solution: 'We developed immersive architectural visualizations showing every unit with customizable finishes, lighting scenarios (day/dusk/night), and 360 virtual walkthroughs. Buyers could see their exact view from each balcony and visualize furniture placement.',
            results: [
                '68% of units pre-sold in 90 days',
                '$10.2M in committed sales before foundation was poured',
                '89% reduction in customer objections',
                'Featured in ArchDaily for visualization quality'
            ],
            technologies: ['Unreal Engine 5', 'Twinmotion', '3ds Max', 'Corona Renderer'],
            timeline: '6 weeks for full complex visualization',
            image: getAssetUrl('/assets/projects/arch-viz/corporate-office-exterior.jpg'),
            testimonial: {
                text: 'Our previous projects took 6-9 months to reach 50% pre-sales. With these visualizations, we hit 68% in 3 months. Game-changing.',
                author: 'Michael Torres',
                role: 'Development Director, Skyline Properties'
            }
        },
        {
            id: 'game-prototype-funding',
            title: 'Indie Game Prototype: From Napkin Sketch to $250K Funding',
            client: 'Arcane Studios (Indie Game Team)',
            industry: 'Gaming / Entertainment',
            challenge: 'A 3-person indie team had a compelling game concept but zero visual assets to pitch to investors. They needed a professional vertical slice that proved their vision could work.',
            solution: 'We built a playable vertical slice in Unreal Engine 5 featuring one core gameplay loop, three environment concepts, and a cinematic trailer. This included custom character models, VFX, and polished UI.',
            results: [
                '$250,000 seed funding secured from 2 investors',
                'Accepted into a prestigious indie accelerator program',
                '50,000+ wishlists on Steam within 2 weeks of announcement',
                'Publisher interest from 7 companies (3 active negotiations)'
            ],
            technologies: ['Unreal Engine 5', 'Blender', 'Houdini (VFX)', 'Substance Designer'],
            timeline: '8 weeks from concept to playable demo',
            image: getAssetUrl('/assets/projects/game-dev/unreal-engine-environment.jpg'),
            testimonial: {
                text: 'Pixcident turned our Google Doc into an investor-ready demo. We went from idea to funding in 8 weeks.',
                author: 'Alex Rivera',
                role: 'Creative Director, Arcane Studios'
            }
        }
    ];

    return (
        <>
            <EnhancedSEO
                title="Case Studies - Real Results"
                description="See how Pixcident helped clients generate over $10M in sales with 3D visualization, architectural rendering, and game development. Real projects, real ROI."
                keywords={['case studies', '3D visualization results', 'architectural visualization ROI', 'game development portfolio', 'client success stories']}
            />

            <StructuredData
                type="Article"
                data={{
                    headline: 'Pixcident Case Studies: Real Client Results',
                    description: 'Detailed case studies showing how 3D visualization drives real business results',
                    datePublished: '2026-01-01',
                    author: {
                        '@type': 'Organization',
                        name: 'Pixcident'
                    }
                }}
            />

            <div className="min-h-screen bg-brand-black text-white pt-32 pb-20">
                {/* Header */}
                <div className="container mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-brand-orange font-mono text-sm uppercase tracking-wider">Proof of Work</span>
                            <div className="flex-1 h-px bg-zinc-800" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
                            Case Studies
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                            Real clients. Real challenges. Real results. See how we have helped businesses generate{' '}
                            <span className="text-brand-orange font-bold">$10M+ in validated revenue</span> through strategic visual storytelling.
                        </p>
                    </motion.div>
                </div>

                {/* Case Studies */}
                <div className="container mx-auto px-6 space-y-32">
                    {caseStudies.map((study, index) => (
                        <motion.article
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="border-l-4 border-brand-orange pl-8"
                        >
                            {/* Title */}
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="font-mono text-xs text-zinc-500 uppercase">{study.industry}</span>
                                    <div className="flex items-center gap-2 text-zinc-500 text-sm">
                                        <Clock size={14} />
                                        <span>{study.timeline}</span>
                                    </div>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                                    {study.title}
                                </h2>
                                <p className="text-zinc-400 text-lg">
                                    Client: <span className="text-white font-semibold">{study.client}</span>
                                </p>
                            </div>

                            {/* Image */}
                            <div className="mb-10 rounded-lg overflow-hidden border border-zinc-800">
                                <img
                                    src={study.image}
                                    alt={`${study.client} case study - ${study.title}`}
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            {/* Challenge & Solution */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-brand-dark/50 border border-zinc-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-red-400">The Challenge</h3>
                                    <p className="text-zinc-300 leading-relaxed">{study.challenge}</p>
                                </div>
                                <div className="bg-brand-dark/50 border border-zinc-800 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-green-400">Our Solution</h3>
                                    <p className="text-zinc-300 leading-relaxed">{study.solution}</p>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="bg-gradient-to-br from-brand-orange/10 to-transparent border border-brand-orange/30 p-8 rounded-lg mb-8">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="text-brand-orange" size={24} />
                                    Measurable Results
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {study.results.map((result, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                            <span className="text-zinc-200 font-medium">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="mb-8">
                                <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {study.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-brand-dark border border-zinc-700 rounded text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div className="bg-zinc-950 border-l-4 border-brand-orange p-8 rounded-r-lg">
                                <p className="text-xl text-zinc-200 italic mb-4 leading-relaxed">
                                    "{study.testimonial.text}"
                                </p>
                                <div>
                                    <p className="font-bold text-white">{study.testimonial.author}</p>
                                    <p className="text-zinc-500 text-sm">{study.testimonial.role}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* CTA */}
                <div className="container mx-auto px-6 mt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-brand-orange/20 to-transparent border border-brand-orange/30 p-12 rounded-2xl text-center"
                    >
                        <h2 className="text-4xl font-display font-bold mb-4">
                            Ready to Write Your Success Story?
                        </h2>
                        <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                            These results are not luck - they are the outcome of strategic visual storytelling. Let us create your case study.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
                        >
                            Start Your Project <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default CaseStudies;
