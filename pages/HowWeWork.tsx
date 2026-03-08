import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Lightbulb, Zap, Rocket, CheckCircle, ShieldCheck, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO, { StructuredData } from '../components/EnhancedSEO';

const ProcessStep = ({ icon: Icon, title, description, delay, number }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="relative p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-brand-orange/40 transition-colors group"
    >
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-orange text-white rounded-xl flex items-center justify-center font-display font-bold text-xl shadow-lg">
            {number}
        </div>
        <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
            <Icon size={28} />
        </div>
        <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
        <p className="text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
);

const HowWeWork: React.FC = () => {
    return (
        <>
            <EnhancedSEO
                title="Our Process - How We Build The Future"
                description="Learn about the Pixcident methodology. A strategic five-step process combining creative vision with technical precision to deliver high-ROI results."
                keywords={['creative process', '3D workflow', 'software development lifecycle', 'Pixcident methodology', 'project management']}
            />

            <StructuredData
                type="Article"
                data={{
                    headline: "The Pixcident Methodology: From Concept to Immersive Reality",
                    description: "Our proprietary 5-step process for delivering high-end creative tech projects.",
                    author: { "@type": "Organization", name: "Pixcident" }
                }}
            />

            <div className="min-h-screen bg-brand-black text-white pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Hero Section */}
                    <div className="max-w-4xl mx-auto text-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8">
                                The <span className="text-brand-orange">Process</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
                                Great work isn't an accident. It's the result of a disciplined methodology that balances creative freedom with technical precision.
                            </p>
                        </motion.div>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                        <ProcessStep
                            number="01"
                            icon={Search}
                            title="Discovery & Strategy"
                            description="We dive deep into your goals, audience, and technical requirements. We don't just build; we strategize to ensure every asset drives ROI."
                            delay={0}
                        />
                        <ProcessStep
                            number="02"
                            icon={PenTool}
                            title="Conceptual Blocking"
                            description="Rapid prototyping and grey-boxing. We define the scale, composition, and user flow before committing to high-detail production."
                            delay={0.1}
                        />
                        <ProcessStep
                            number="03"
                            icon={Cpu}
                            title="Production & Tech"
                            description="Our specialized team builds custom assets, implements code logic, and creates high-fidelity 3D models using a modern creative stack."
                            delay={0.2}
                        />
                        <ProcessStep
                            number="04"
                            icon={Lightbulb}
                            title="Lighting & Refinement"
                            description="The magic happens here. We apply photorealistic lighting, cinematic VFX, and polish every micro-interaction to perfection."
                            delay={0.3}
                        />
                        <ProcessStep
                            number="05"
                            icon={Rocket}
                            title="Deployment & Growth"
                            description="We deliver high-performance files or deploy web applications. But we don't stop there—we help you integrate them for maximum impact."
                            delay={0.4}
                        />
                        <div className="p-8 rounded-3xl bg-brand-orange/5 border border-brand-orange/20 flex flex-col justify-center items-center text-center">
                            <h3 className="text-2xl font-display font-bold mb-4">Ready to start?</h3>
                            <Link to="/contact" className="px-8 py-3 bg-brand-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">
                                Book a Briefing
                            </Link>
                        </div>
                    </div>

                    {/* Methodology Details */}
                    <div className="max-w-5xl mx-auto space-y-32">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="grid lg:grid-cols-2 gap-20 items-center"
                        >
                            <div>
                                <h2 className="text-4xl font-display font-bold mb-6">Why Our Process Works</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <CheckCircle className="text-green-500 shrink-0" />
                                        <p className="text-zinc-400"><b className="text-white">Transparency:</b> Weekly updates and direct access to the creative team via Slack/Discord.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <ShieldCheck className="text-green-500 shrink-0" />
                                        <p className="text-zinc-400"><b className="text-white">Quality Control:</b> Multiple review phases to ensure the final output exceeds expectations.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <Zap className="text-green-500 shrink-0" />
                                        <p className="text-zinc-400"><b className="text-white">Agility:</b> We pivot quickly based on feedback while maintaining strict project timelines.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aspect-video bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative group">
                                {/* Placeholder for an image of the process/team */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/20 to-transparent flex items-center justify-center">
                                    <Cpu size={100} className="text-brand-orange opacity-20 group-hover:scale-110 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowWeWork;
