import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
    category?: string;
}

interface FAQSectionProps {
    faqs: FAQItem[];
    title?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
    faqs,
    title = 'Frequently Asked Questions'
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="w-full">
            <h2 className="text-3xl font-display font-bold text-white mb-8">{title}</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden hover:border-blue-500/50 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="w-full p-6 text-left flex justify-between items-center gap-4 group"
                            >
                                <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="text-zinc-500 group-hover:text-blue-400" size={24} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-zinc-800 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQSection;
