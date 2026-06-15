import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Play, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { ALL_PORTFOLIO_ASSETS, CATEGORIES, PortfolioAsset } from '../portfolioAssets';
import EnhancedSEO, { StructuredData } from '../components/EnhancedSEO';

// Lazy Loading Image Component with Responsive Support
const LazyImage: React.FC<{
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
    priority?: boolean;
}> = ({ src, alt, className, onClick, priority = false }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (priority) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '300px' } // Preload 300px before viewport
        );

        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, [priority]);

    return (
        <div ref={imgRef} className={`relative ${className}`} onClick={onClick}>
            {/* Blur placeholder */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
            )}
            {isInView && (
                <picture>
                    <img
                        src={src}
                        alt={alt}
                        loading={priority ? "eager" : "lazy"}
                        decoding="async"
                        onLoad={() => setIsLoaded(true)}
                        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </picture>
            )}
        </div>
    );
};

// Lazy Loading Video Component
const LazyVideo: React.FC<{
    src: string;
    thumbnail?: string;
    onClick?: () => void;
}> = ({ src, thumbnail, onClick }) => {
    const [shouldLoad, setShouldLoad] = useState(false);

    return (
        <div className="relative group cursor-pointer" onClick={onClick}>
            {!shouldLoad ? (
                <>
                    <LazyImage
                        src={thumbnail || '/assets/video-placeholder.jpg'}
                        alt="Video thumbnail"
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play size={28} fill="white" className="text-white ml-1" />
                        </div>
                    </div>
                </>
            ) : (
                <video
                    src={src}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    );
};

const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAsset, setSelectedAsset] = useState<PortfolioAsset | null>(null);
    const [showFilters, setShowFilters] = useState(false);

    // Filter assets
    const filteredAssets = ALL_PORTFOLIO_ASSETS.filter((asset) => {
        const matchesCategory = selectedCategory === 'All' || asset.category === selectedCategory;
        const matchesSearch =
            asset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            asset.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            asset.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Lightbox navigation
    const currentIndex = selectedAsset
        ? filteredAssets.findIndex((a) => a.id === selectedAsset.id)
        : -1;

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setSelectedAsset(filteredAssets[currentIndex - 1]);
        }
    };

    const handleNext = () => {
        if (currentIndex < filteredAssets.length - 1) {
            setSelectedAsset(filteredAssets[currentIndex + 1]);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (!selectedAsset) return;
            if (e.key === 'Escape') setSelectedAsset(null);
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedAsset, currentIndex]);

    return (
        <>
            <EnhancedSEO
                title="Portfolio - Creative Showcase"
                description="Explore our complete portfolio of 3D animation, architectural visualization, game development, VFX, AI solutions, and premium web development projects."
                keywords={['portfolio', '3D animation', 'archviz', 'game development', 'VFX', 'AI solutions', 'web development']}
            />

            <StructuredData
                type="CreativeWork"
                data={{
                    name: "Pixcident Portfolio",
                    description: "Showcase of 3D visualization and creative technology projects",
                    author: { "@type": "Organization", "name": "Pixcident" }
                }}
            />

            <div className="min-h-screen bg-brand-black pt-32 pb-20">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 uppercase">
                            Full <span className="text-brand-orange">Portfolio</span>
                        </h1>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto">
                            A comprehensive showcase of our work across 3D animation, architectural
                            visualization, game development, VFX, AI solutions, web development, and
                            e-commerce.
                        </p>
                        <div className="mt-6 text-brand-orange font-bold text-sm tracking-wider">
                            {filteredAssets.length} PROJECT{filteredAssets.length !== 1 ? 'S' : ''}
                        </div>
                    </motion.div>

                    {/* Search & Filter */}
                    <div className="mb-12">
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <Search
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-zinc-900 border border-zinc-800 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        aria-label="Clear search"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center justify-center mb-4">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                aria-label="Toggle category filters"
                                className="md:hidden flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white hover:border-brand-orange transition-colors"
                            >
                                <Filter size={16} />
                                Filter ({selectedCategory})
                            </button>
                        </div>

                        <div
                            className={`${showFilters ? 'flex' : 'hidden md:flex'
                                } flex-wrap items-center justify-center gap-3`}
                        >
                            {CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setShowFilters(false);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${selectedCategory === category
                                        ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                                        : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-brand-orange hover:text-white'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Masonry Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {filteredAssets.map((asset, index) => (
                            <motion.div
                                key={asset.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className="break-inside-avoid group relative overflow-hidden rounded-lg border border-zinc-800 hover:border-brand-orange/50 transition-all cursor-pointer bg-zinc-900"
                                onClick={() => setSelectedAsset(asset)}
                            >
                                <div className="relative aspect-[4/3]">
                                    {asset.type === 'image' ? (
                                        <LazyImage src={asset.src} alt={asset.title} className="w-full h-full" />
                                    ) : (
                                        <LazyVideo src={asset.src} thumbnail={asset.thumbnail} />
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-2">
                                            {asset.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-1 font-display uppercase">
                                            {asset.title}
                                        </h3>
                                        {asset.description && (
                                            <p className="text-zinc-300 text-sm line-clamp-2">
                                                {asset.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredAssets.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-zinc-500 text-lg">
                                No projects found matching your criteria.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('All');
                                }}
                                className="mt-4 text-brand-orange hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedAsset && (
                    <PortfolioLightbox
                        asset={selectedAsset}
                        onClose={() => setSelectedAsset(null)}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        hasPrevious={currentIndex > 0}
                        hasNext={currentIndex < filteredAssets.length - 1}
                        currentIndex={currentIndex + 1}
                        totalCount={filteredAssets.length}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

// Portfolio Lightbox Component for better organization and accessibility
const PortfolioLightbox: React.FC<{
    asset: PortfolioAsset;
    onClose: () => void;
    onPrevious: () => void;
    onNext: () => void;
    hasPrevious: boolean;
    hasNext: boolean;
    currentIndex: number;
    totalCount: number;
}> = ({ asset, onClose, onPrevious, onNext, hasPrevious, hasNext, currentIndex, totalCount }) => {
    const lightboxRef = useRef<HTMLDivElement>(null);
    const lastFocusedElement = useRef<HTMLElement | null>(null);

    // Focus trap and accessibility
    useEffect(() => {
        lastFocusedElement.current = document.activeElement as HTMLElement;
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
            lastFocusedElement.current?.focus();
        };
    }, [onClose]);

    return (
        <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Viewing ${asset.title}`}
        >
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 z-10 p-3 bg-black/70 rounded-full text-white hover:bg-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
                onClick={onClose}
                aria-label="Close portfolio viewer"
            >
                <X size={24} />
            </button>

            {/* Navigation Arrows */}
            {hasPrevious && (
                <button
                    className="absolute left-4 z-10 p-3 bg-black/70 rounded-full text-white hover:bg-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrevious();
                    }}
                    aria-label="Previous project"
                >
                    <ChevronLeft size={24} />
                </button>
            )}
            {hasNext && (
                <button
                    className="absolute right-4 z-10 p-3 bg-black/70 rounded-full text-white hover:bg-brand-orange transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                    aria-label="Next project"
                >
                    <ChevronRight size={24} />
                </button>
            )}

            {/* Content */}
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="max-w-7xl w-full max-h-[90vh] flex flex-col lg:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Media Side */}
                <div className="w-full lg:w-2/3 bg-black flex items-center justify-center p-4 md:p-8 min-h-[50vh]">
                    {asset.type === 'image' ? (
                        <picture>
                            <img
                                src={asset.src}
                                alt={asset.title}
                                className="max-w-full max-h-[75vh] object-contain rounded-lg"
                                loading="eager"
                            />
                        </picture>
                    ) : (
                        <video
                            src={asset.src}
                            controls
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="max-w-full max-h-[75vh] rounded-lg"
                        />
                    )}
                </div>

                {/* Info Side */}
                <div className="w-full lg:w-1/3 p-6 md:p-8 overflow-y-auto">
                    <div className="mb-4">
                        <span className="text-brand-orange text-xs font-bold uppercase tracking-widest">
                            {asset.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 uppercase">
                            {asset.title}
                        </h2>
                    </div>
                    {asset.description && (
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            {asset.description}
                        </p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-zinc-500 pt-4 border-t border-zinc-800">
                        <span>
                            {currentIndex} / {totalCount}
                        </span>
                        <span className="uppercase bg-zinc-800 px-3 py-1 rounded-full text-zinc-300">
                            {asset.type}
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Portfolio;
