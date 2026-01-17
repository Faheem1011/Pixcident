import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, MotionValue } from 'framer-motion';
import HackerText from './HackerText';

interface ParticleData {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ParticleProps {
  data: ParticleData;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const Particle: React.FC<ParticleProps> = ({
  data,
  mouseX,
  mouseY
}) => {
  const x = useTransform(mouseX, [0, 1], [(data.x - 50) * 0.8, (data.x - 50) * -0.8]);
  const y = useTransform(mouseY, [0, 1], [(data.y - 50) * 0.8, (data.y - 50) * -0.8]);

  return (
    <motion.div
      className="absolute bg-brand-orange/40 rounded-sm pointer-events-none"
      style={{
        left: `${data.x}%`,
        top: `${data.y}%`,
        width: data.size,
        height: data.size,
        x,
        y
      }}
      animate={{
        opacity: [0.1, 0.4, 0.1],
      }}
      transition={{
        duration: data.duration,
        delay: data.delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, smoothOptions);
  const smoothMouseY = useSpring(mouseY, smoothOptions);

  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${useTransform(smoothMouseX, x => x * 100)}% ${useTransform(smoothMouseY, y => y * 100)}%, rgba(255, 85, 0, 0.15), transparent 80%)`;
  const contentX = useTransform(smoothMouseX, [0, 1], [-15, 15]);
  const contentY = useTransform(smoothMouseY, [0, 1], [-15, 15]);

  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    })));
  }, []);

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-black perspective-1000"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: spotlight }}
      />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      >
        <source src="/assets/backgrounds/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-brand-black/80 to-brand-black opacity-90 z-0" />


      {/* 3D Floor Grid */}
      <div className="absolute bottom-0 left-[-50%] w-[200%] h-[50%] bg-[linear-gradient(to_right,#FF5500_1px,transparent_1px),linear-gradient(to_bottom,#FF5500_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] [mask-image:linear-gradient(to_bottom,transparent,black)] origin-bottom z-0"
        style={{ transform: 'rotateX(60deg) translateZ(0)' }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle key={i} data={p} mouseX={smoothMouseX} mouseY={smoothMouseY} />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        style={{ x: contentX, y: contentY }}
      >
        <motion.div style={{ y: y1 }} className="mb-4">
          <span className="inline-block py-1 px-3 border border-brand-orange/30 rounded-full text-brand-orange text-sm tracking-[0.2em] font-medium mb-6 backdrop-blur-md bg-black/30 shadow-[0_0_15px_rgba(255,85,0,0.3)]">
            EST. 2025 // CREATIVE PRODUCTION
          </span>
        </motion.div>

        <motion.h1
          className="font-display font-bold text-7xl md:text-9xl tracking-tighter text-white mb-6 uppercase leading-none"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center gap-0 md:gap-4 flex-wrap">
            <span>Pix</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
              <HackerText text="CIDENT" speed={50} />
            </span>
          </div>
        </motion.h1>

        <motion.p
          style={{ y: y2 }}
          className="text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Intersection of <span className="text-brand-orange font-medium">Design</span>, <span className="text-white font-medium">Animation</span>, and <span className="text-white font-medium">Technology</span>.
        </motion.p>
      </motion.div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden py-4 border-t border-zinc-800 bg-black/50 backdrop-blur-sm z-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-display font-bold text-transparent text-outline uppercase px-8 opacity-30">
              Creative // Future // Digital // Experience //
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;