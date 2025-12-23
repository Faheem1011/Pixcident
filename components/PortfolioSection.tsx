import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';
import { PortfolioItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Maximize2, Layers, Calendar, User } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <section id="work" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 uppercase">
              Selected <span className="text-brand-orange">Works</span>
            </h2>
            <p className="text-zinc-400 max-w-lg">
              A showcase of professional and experimental work demonstrating our technical precision and creative artistry.
            </p>
          </div>
          <button className="text-white border-b border-brand-orange pb-1 hover:text-brand-orange transition-colors uppercase tracking-widest text-sm font-bold flex items-center gap-2 group">
            View All Projects <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((project, index) => {
            const imgUrl = project.image || `https://placehold.co/800x600/1a1a1a/FFF?text=${encodeURIComponent(project.title)}`;
            
            return (
                <motion.div
                  key={project.id}
                  layoutId={`project-${project.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative aspect-[4/3] overflow-hidden bg-zinc-900 cursor-pointer border border-zinc-800 hover:border-brand-orange/50 rounded-lg"
                  onClick={() => setSelectedProject(project)}
                >
                  <motion.img 
                    layoutId={`img-${project.id}`}
                    src={imgUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 font-display uppercase">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-zinc-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                        <span>View Case Study</span>
                        <Maximize2 size={14} />
                    </div>
                  </div>
                </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              layoutId={`project-${selectedProject.id}`}
              className="bg-zinc-900 w-full max-w-5xl overflow-hidden rounded-xl border border-zinc-800 shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
                <button 
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-brand-orange transition-colors"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                >
                  <X size={20} />
                </button>

                {/* Image Side */}
                <div className="w-full md:w-2/3 h-64 md:h-auto relative bg-black">
                     <motion.img 
                        layoutId={`img-${selectedProject.id}`}
                        src={selectedProject.image || `https://placehold.co/1200x800/1a1a1a/FFF?text=${encodeURIComponent(selectedProject.title)}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                     />
                     <div className="absolute bottom-4 left-4 flex gap-2">
                        {['Concept', '3D', 'Render'].map(tag => (
                            <span key={tag} className="px-2 py-1 bg-black/70 border border-zinc-700 text-xs text-zinc-300 uppercase tracking-wider rounded">
                                {tag}
                            </span>
                        ))}
                     </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/3 p-8 flex flex-col bg-zinc-900">
                    <span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">{selectedProject.category}</span>
                    <h2 className="text-3xl font-display font-bold text-white mb-6 uppercase leading-none">{selectedProject.title}</h2>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                        {selectedProject.description} This project challenged our team to push the boundaries of real-time rendering. We utilized custom shaders and procedural generation to achieve this look.
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-sm text-zinc-300 border-b border-zinc-800 pb-2">
                            <User size={16} className="text-brand-orange" />
                            <span>Client: Confidential</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300 border-b border-zinc-800 pb-2">
                            <Calendar size={16} className="text-brand-orange" />
                            <span>Year: 2024</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-zinc-300 border-b border-zinc-800 pb-2">
                            <Layers size={16} className="text-brand-orange" />
                            <span>Role: Art Direction, CGI</span>
                        </div>
                    </div>

                    <div className="mt-auto">
                        {selectedProject.url ? (
                          <a 
                            href={selectedProject.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full block text-center py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors"
                          >
                            Visit Site
                          </a>
                        ) : (
                          <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors">
                            Launch Project
                          </button>
                        )}
                    </div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
