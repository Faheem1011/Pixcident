import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SaaSProduct } from '../startup-constants';

interface ProductShowcaseProps {
    products: SaaSProduct[];
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ products }) => {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const getIcon = (iconName: string) => {
        const Icon = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;
        return Icon ? <Icon size={32} /> : null;
    };

    const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
        blue: { bg: 'bg-blue-900/20', border: 'border-blue-500/30', text: 'text-blue-400', gradient: 'from-blue-500 to-cyan-400' },
        green: { bg: 'bg-green-900/20', border: 'border-green-500/30', text: 'text-green-400', gradient: 'from-green-500 to-emerald-400' },
        purple: { bg: 'bg-purple-900/20', border: 'border-purple-500/30', text: 'text-purple-400', gradient: 'from-purple-500 to-pink-400' },
        orange: { bg: 'bg-orange-900/20', border: 'border-orange-500/30', text: 'text-orange-400', gradient: 'from-orange-500 to-amber-400' },
        cyan: { bg: 'bg-cyan-900/20', border: 'border-cyan-500/30', text: 'text-cyan-400', gradient: 'from-cyan-500 to-blue-400' }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => {
                const isExpanded = expandedId === product.id;
                const colors = colorMap[product.color] || colorMap.blue;

                return (
                    <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative bg-zinc-950 border ${colors.border} rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''
                            }`}
                        onClick={() => setExpandedId(isExpanded ? null : product.id)}
                    >
                        {/* Product Illustration */}
                        {!isExpanded && (
                            <div className="mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 p-4">
                                <img
                                    src={`/assets/products/${product.id}.png`}
                                    alt={product.name}
                                    className="w-full h-32 object-contain"
                                />
                            </div>
                        )}

                        {/* Icon & Title */}
                        <div className="flex items-start gap-4 mb-4">
                            <div className={`${colors.bg} ${colors.text} p-3 rounded-lg`}>
                                {getIcon(product.iconName)}
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                                    {product.name}
                                </h3>
                                <p className="text-zinc-400 text-sm mt-1">{product.tagline}</p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-300 text-sm mb-4">{product.description}</p>

                        {/* Pricing */}
                        <div className="flex gap-2 mb-4 flex-wrap">
                            {product.pricing.map((price) => (
                                <span key={price.tier} className="text-xs font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                                    {price.tier}: <span className={colors.text}>{price.price}{price.model}</span>
                                </span>
                            ))}
                        </div>

                        {/* Expand Indicator */}
                        <div className={`text-xs ${colors.text} font-mono mt-2`}>
                            {isExpanded ? '▼ Click to collapse' : '▶ Click to expand'}
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-6 pt-6 border-t border-zinc-800"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Problem/Solution */}
                                        <div>
                                            <h4 className="text-red-400 font-bold mb-2 uppercase text-sm">The Problem</h4>
                                            <p className="text-zinc-400 mb-4">{product.problem}</p>

                                            <h4 className="text-green-400 font-bold mb-2 uppercase text-sm">The Solution</h4>
                                            <p className="text-zinc-400">{product.solution}</p>
                                        </div>

                                        {/* Features & Target Market */}
                                        <div>
                                            <h4 className={`${colors.text} font-bold mb-2 uppercase text-sm`}>Key Features</h4>
                                            <ul className="space-y-2 mb-4">
                                                {product.keyFeatures.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                                                        <span className={colors.text}>✓</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <h4 className={`${colors.text} font-bold mb-2 uppercase text-sm`}>Target Market</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {product.targetMarket.map((market, i) => (
                                                    <span key={i} className="text-xs bg-zinc-900 px-2 py-1 rounded text-zinc-400">
                                                        {market}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ProductShowcase;
