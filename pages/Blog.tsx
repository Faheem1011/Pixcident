import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { getAssetUrl } from '../cdn-utils';

const BLOG_POSTS = [
    {
        id: 'future-of-3d-ecommerce',
        title: 'The Future of 3D in E-commerce: Beyond Static Images',
        excerpt: 'How photorealistic 3D renders are replacing traditional photography and increasing conversion rates by 35%.',
        date: 'Feb 5, 2026',
        author: 'Faheem Fiaz',
        readTime: '6 min read',
        image: getAssetUrl('/assets/projects/3d-anim/magnesium-supplement-render.jpg'),
        category: 'Insights'
    },
    {
        id: 'unreal-engine-vs-vray',
        title: 'Unreal Engine 5 vs V-Ray: Why Real-time is Winning',
        excerpt: 'A technical deep-dive into why studios are shifting to real-time rendering engines for architectural visualization.',
        date: 'Jan 28, 2026',
        author: 'Faheem Fiaz',
        readTime: '8 min read',
        image: getAssetUrl('/assets/projects/arch-viz/interior-exterior-architectural-concept.png'),
        category: 'Technical'
    },
    {
        id: 'ai-automation-creative-studios',
        title: 'Scaling Creativity: AI Automation for Modern Studios',
        excerpt: 'Implementing custom AI agents to automate data-heavy creative tasks and 10x studio output.',
        date: 'Jan 15, 2026',
        author: 'Faheem Fiaz',
        readTime: '5 min read',
        image: getAssetUrl('/assets/projects/ai-solutions/automation-workflow.png'),
        category: 'AI'
    },
    {
        id: 'vibe-coding-new-era',
        title: 'Vibe Coding: The New Era of Software Development',
        excerpt: 'How AI-assisted coding is allowing non-developers to build production-grade applications in days.',
        date: 'Jan 10, 2026',
        author: 'Faheem Fiaz',
        readTime: '4 min read',
        image: getAssetUrl('/assets/projects/vibe-coding/code-generation-viz.png'),
        category: 'Tech'
    },
    {
        id: 'ux-design-conversions',
        title: 'Aesthetic vs Analysis: Designing for High Conversions',
        excerpt: 'Why beautiful design isn\'t enough and how to use data to drive user actions in 2026.',
        date: 'Jan 05, 2026',
        author: 'Faheem Fiaz',
        readTime: '7 min read',
        image: getAssetUrl('/assets/projects/web-dev/landing-page-mockup.png'),
        category: 'UI/UX'
    }
];

const Blog: React.FC = () => {
    return (
        <>
            <EnhancedSEO
                title="Blog & Insights - Creative Tech & 3D Visualization"
                description="Expert insights on 3D visualization, Unreal Engine 5, AI automation, and modern web development from the Pixcident team."
            />

            <div className="min-h-screen bg-brand-black text-white pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-4xl mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8">
                                Insights
                            </h1>
                            <p className="text-xl text-zinc-400">
                                Deep dives into the intersection of art, technology, and business growth.
                            </p>
                        </motion.div>
                    </div>

                    {/* Featured Post */}
                    <div className="mb-24">
                        <Link to={`/blog/${BLOG_POSTS[0].id}`} className="group relative block">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="aspect-[16/9] lg:aspect-square rounded-[2rem] overflow-hidden border border-zinc-800">
                                    <img
                                        src={BLOG_POSTS[0].image}
                                        alt={BLOG_POSTS[0].title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-brand-orange font-mono text-xs uppercase tracking-widest">
                                        <span>Featured</span>
                                        <div className="w-12 h-px bg-brand-orange" />
                                        <span>{BLOG_POSTS[0].category}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-display font-bold group-hover:text-brand-orange transition-colors">
                                        {BLOG_POSTS[0].title}
                                    </h2>
                                    <p className="text-zinc-400 text-lg leading-relaxed">
                                        {BLOG_POSTS[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-sm text-zinc-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} /> {BLOG_POSTS[0].date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} /> {BLOG_POSTS[0].readTime}
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <span className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                            Read Article <ArrowRight size={20} className="text-brand-orange" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {BLOG_POSTS.slice(1).map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={`/blog/${post.id}`} className="group block h-full flex flex-col">
                                    <div className="aspect-video rounded-3xl overflow-hidden border border-zinc-800 mb-6 relative">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold text-zinc-300">
                                            {post.category}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-orange transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between text-xs text-zinc-500 font-mono">
                                        <div className="flex items-center gap-2">
                                            <User size={14} /> {post.author}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} /> {post.readTime}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Newsletter Simple CTA */}
                    <div className="mt-32 p-12 rounded-[3.5rem] bg-zinc-900/30 border border-zinc-800 text-center">
                        <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mx-auto mb-6">
                            <BookOpen size={30} />
                        </div>
                        <h2 className="text-3xl font-display font-bold mb-4">Stay Informed</h2>
                        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
                            Get the latest insights on creative technology and automation delivered once a month. No spam, just value.
                        </p>
                        <form className="max-w-md mx-auto flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 bg-black border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-orange"
                                required
                            />
                            <button className="bg-brand-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
