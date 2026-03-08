import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Monitor, Code, Zap, Globe, Cpu, Database, Cloud } from 'lucide-react';
import EnhancedSEO, { StructuredData } from '../components/EnhancedSEO';

const TechCard = ({ icon: Icon, title, description, category, tags, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="p-8 rounded-[2rem] bg-zinc-900/30 border border-zinc-800 hover:border-brand-orange/40 transition-all group lg:hover:-translate-y-2"
    >
        <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <Icon size={24} />
            </div>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{category}</span>
        </div>
        <h3 className="text-2xl font-display font-bold mb-3">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
                <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md bg-zinc-800 text-zinc-500 font-mono">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

const TechStack: React.FC = () => {
    return (
        <>
            <EnhancedSEO
                title="Technology Stack - Our Creative Engine"
                description="Explore the advanced technology powers Pixcident. From Unreal Engine 5 for 3D visualization to React and AI for modern web applications."
                keywords={['Unreal Engine 5', 'Blender', 'React', 'TypeScript', 'Substance Painter', 'creative tech stack']}
            />

            <StructuredData
                type="CreativeWork"
                data={{
                    name: "Pixcident Technology Stack",
                    description: "Technical specifications and tools used by Pixcident Creative Studio.",
                    keywords: "Unreal Engine 5, Blender, React, TypeScript, Node.js, AI, Substance Suite"
                }}
            />

            <div className="min-h-screen bg-brand-black text-white pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-4xl mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8">
                                The <span className="text-brand-orange">Stack</span>
                            </h1>
                            <p className="text-xl text-zinc-400">
                                We use the world's most powerful creative and engineering tools to build high-performance digital experiences. No compromises.
                            </p>
                        </motion.div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TechCard
                            category="3D & Visualization"
                            icon={Monitor}
                            title="Unreal Engine 5"
                            description="The world's most open and advanced real-time 3D creation tool. We use Lumen and Nanite for cinematic architectural and product viz."
                            tags={['Real-time Rendering', 'Blueprints', 'C++', 'Niagara VFX']}
                            delay={0}
                        />
                        <TechCard
                            category="3D & Visualization"
                            icon={Layers}
                            title="Blender & Substance"
                            description="Our primary tools for poly-modeling, UV unwrapping, and photorealistic PBR texturing with industry-standard Substance Suite."
                            tags={['Modeling', 'Texturing', 'UV Mapping', 'PBR Workflow']}
                            delay={0.1}
                        />
                        <TechCard
                            category="Frontend Mastery"
                            icon={Code}
                            title="React & Next.js"
                            description="Building modern, lightning-fast web applications with clean architecture, server-side rendering, and interactive UI components."
                            tags={['TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite']}
                            delay={0.2}
                        />
                        <TechCard
                            category="Intelligence"
                            icon={Cpu}
                            title="Custom AI Agents"
                            description="Internal agents built for research, automated asset optimization, and scaling creative delivery with LLM-driven workflows."
                            tags={['Gemini API', 'LangChain', 'Python', 'Agentic Workflows']}
                            delay={0.3}
                        />
                        <TechCard
                            category="Backend & Data"
                            icon={Database}
                            title="Modern Backend"
                            description="Reliable, scalable infrastructure using Node.js, Express, and high-performance databases for complex web ecosystems."
                            tags={['PostgreSQL', 'Redis', 'WebSockets', 'REST/GraphQL']}
                            delay={0.4}
                        />
                        <TechCard
                            category="Deployment"
                            icon={Cloud}
                            title="Cloud Native"
                            description="Global delivery optimized for performance with Vercel, AWS, and CDN edge caching to ensure sub-second load times."
                            tags={['GitOps', 'CI/CD', 'Edge Functions', 'AWS S3']}
                            delay={0.5}
                        />
                    </div>

                    {/* Performance Promise */}
                    <div className="mt-32 p-12 rounded-[3rem] bg-brand-orange text-white overflow-hidden relative group">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Zap size={300} />
                        </div>
                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Built for Performance</h2>
                            <p className="text-xl opacity-90 leading-relaxed mb-8">
                                Our stack is chosen for one reason: **Speed**. Faster rendering, faster loading, and faster ROI. We don't just use these tools; we master them to give your brand a technological edge.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold">100</span>
                                    <span className="text-sm font-bold opacity-70 uppercase">Lighthouse Score</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold">&lt;2s</span>
                                    <span className="text-sm font-bold opacity-70 uppercase">Avg. Load Time</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold">UE5</span>
                                    <span className="text-sm font-bold opacity-70 uppercase">Core Production Engine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TechStack;
