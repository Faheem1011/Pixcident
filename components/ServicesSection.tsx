import React, { useRef } from 'react';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';
import { Box, Building, Cpu, Gamepad2, Zap, Bot, Globe, Terminal } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

// Component for 3D Tilt Card
const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
    Box,
    Building,
    Cpu,
    Gamepad2,
    Zap,
    Bot,
    Globe,
    Terminal,
};

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
    const IconComponent = ICON_MAP[service.iconName] || Box;
    
    // Tilt Logic
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <Link to={service.route} className="block perspective-1000">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full p-8 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:border-brand-orange/50 transition-colors duration-300 relative overflow-hidden rounded-xl"
            >
                {/* 3D Depth Elements */}
                <div style={{ transform: "translateZ(50px)" }}>
                    <div className="w-14 h-14 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center mb-6 text-white group-hover:text-brand-orange group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <IconComponent size={28} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 font-display uppercase tracking-wide">
                        {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag: string) => (
                            <span key={tag} className="text-xs font-mono text-zinc-500 border border-zinc-800 bg-black/50 px-2 py-1 rounded">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ transform: "translateZ(0px)" }} />
            </motion.div>
        </Link>
    );
};


const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 uppercase leading-none">
                Our <span className="text-brand-orange">Expertise</span>
              </h2>
              <p className="text-zinc-400 text-lg">
                We bridge the gap between creative imagination and deployable digital solutions.
              </p>
          </div>
          <div className="h-px bg-zinc-800 flex-grow ml-8 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
