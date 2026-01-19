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
        <source src="/assets/backgrounds/0119.mp4" type="video/mp4" />
      </video>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-brand-black/80 to-brand-black opacity-90 z-0" />



      {/* 3D Floor Grid */}
      <div className="absolute bottom-0 left-[-50%] w-[200%] h-[50%] bg-[linear-gradient(to_right,#FF5500_1px,transparent_1px),linear-gradient(to_bottom,#FF5500_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] [mask-image:linear-gradient(to_bottom,transparent,black)] origin-bottom z-0 [transform:rotateX(60deg)_translateZ(0)]"
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
        <motion.div style={{ y: y1 }} className="mb-6">
          <span className="inline-block py-2 px-4 border border-brand-orange/30 rounded-full text-brand-orange text-xs md:text-sm tracking-[0.2em] font-medium backdrop-blur-md bg-black/30 shadow-[0_0_15px_rgba(255,85,0,0.3)]">
            CREATIVE PRODUCTION STUDIO
          </span>
        </motion.div>

        <motion.h1
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.1]"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Your Vision Deserves <br className="hidden md:block" />
          <span className="text-brand-orange">To Be Seen</span>
        </motion.h1>

        <motion.p
          style={{ y: y2 }}
          className="text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Stop losing clients to poor visuals. We transform your ideas into <span className="text-white font-medium">photorealistic 3D renders</span>, <span className="text-white font-medium">immersive experiences</span>, and <span className="text-white font-medium">digital products that sell</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-brand-orange text-white font-bold text-lg uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:bg-white hover:text-brand-black hover:scale-105 shadow-[0_0_30px_rgba(255,85,0,0.3)] hover:shadow-[0_0_40px_rgba(255,85,0,0.5)]"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border-2 border-white/20 text-white font-bold text-lg uppercase tracking-wider rounded-sm backdrop-blur-md hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300"
          >
            See Our Work
          </a>
        </motion.div>
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