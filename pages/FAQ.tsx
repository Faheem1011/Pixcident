import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO, { StructuredData } from '../components/EnhancedSEO';
import { trackEvent } from '../components/Analytics';

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        category: 'Services',
        question: 'What industries do you specialize in?',
        answer: 'While we work across many sectors, we have deep expertise in E-commerce (3D product renders), Real Estate (Architectural Visualization), and Gaming (Unreal Engine environments and character design).'
    },
    {
        category: 'Services',
        question: 'Do you offer custom web development?',
        answer: 'Yes! We build high-performance, SEO-optimized websites using modern stacks like React, Next.js, and Vite. We focus on "Creative Tech" - meaning we combine stunning visuals with robust functionality.'
    },
    {
        category: 'Pricing',
        question: 'How do you structure your project pricing?',
        answer: 'We offer both fixed-price project contracts and retainer-based models. Pricing depends on complexity, technical requirements, and timeline. Contact us for a custom quote within 24 hours.'
    },
    {
        category: 'Process',
        question: 'What is the typical timeline for a 3D render project?',
        answer: 'A single high-quality product render typically takes 3-5 business days. Larger architectural visualization or animation projects usually range from 2-6 weeks depending on requirements.'
    },
    {
        category: 'Process',
        question: 'How many revisions are included in a project?',
        answer: 'Most projects include two rounds of major revisions. We focus on clear communication during the blocking and lighting phases to ensure the final result perfectly matches your vision.'
    },
    {
        category: 'Technical',
        question: 'What software do you use for 3D and VFX?',
        answer: 'Our core stack includes Unreal Engine 5, Blender, Substance Suite, and Houdini for complex simulations. For web projects, we primarily use React and TypeScript.'
    }
];

const FAQ: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const categories = ['All', ...new Set(FAQ_DATA.map(item => item.category))];

    const filteredFaqs = FAQ_DATA.filter(item => {
        const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const handleToggle = (index: number) => {
        const newIndex = openIndex === index ? null : index;
        setOpenIndex(newIndex);
        if (newIndex !== null) {
            trackEvent('faq_opened', { question: filteredFaqs[index].question });
        }
    };

    return (
        <>
            <EnhancedSEO
                title="Frequently Asked Questions"
                description="Find answers to common questions about 3D visualization, web development timelines, project pricing, and our creative process."
                keywords={['FAQ', '3D render pricing', 'web development timeline', 'Pixcident process', 'visualization services']}
            />

            {/* Google Rich Results: FAQ Schema */}
            <StructuredData
                type="FAQPage"
                data={{
                    "mainEntity": FAQ_DATA.map(item => ({
                        "@type": "Question",
                        "name": item.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.answer
                        }
                    }))
                }}
            />

            <div className="min-h-screen bg-brand-black text-white pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">FAQ</h1>
                        <p className="text-xl text-zinc-400">
                            Everything you need to know about working with Pixcident.
                        </p>
                    </motion.div>

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row gap-6 mb-12">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
                            <input
                                type="text"
                                placeholder="Search questions..."
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange transition-colors"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full border whitespace-nowrap transition-all ${activeCategory === cat
                                        ? 'bg-brand-orange border-brand-orange text-white'
                                        : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        <AnimatePresence mode="popLayout">
                            {filteredFaqs.map((faq, index) => (
                                <motion.div
                                    key={faq.question}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-800/20 transition-colors"
                                    >
                                        <span className="text-lg font-semibold pr-8">{faq.question}</span>
                                        <div className="flex-shrink-0">
                                            {openIndex === index ? (
                                                <Minus className="text-brand-orange" size={20} />
                                            ) : (
                                                <Plus className="text-zinc-500" size={20} />
                                            )}
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-20 bg-zinc-900/20 rounded-3xl border border-dashed border-zinc-800">
                                <HelpCircle className="mx-auto text-zinc-700 mb-4" size={48} />
                                <p className="text-zinc-500">No questions found matching your search.</p>
                            </div>
                        )}
                    </div>

                    {/* Help CTA */}
                    <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-brand-orange/10 to-transparent border border-brand-orange/30 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                            <p className="text-zinc-400">Our team is ready to help you with your specific project needs.</p>
                        </div>
                        <div className="flex gap-4">
                            <Link
                                to="/contact"
                                className="px-8 py-3 bg-brand-orange text-white font-bold rounded-xl hover:bg-orange-600 transition-colors flex items-center gap-2"
                                onClick={() => trackEvent('faq_cta_contact')}
                            >
                                <MessageCircle size={20} /> Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
