import { ServiceItem, PortfolioItem, DonationTier } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export const SERVICE_LINKS = [
  { label: '3D & Animation', href: '/services/3d-anim' },
  { label: 'ArchViz', href: '/services/arch-viz' },
  { label: 'Unreal Engine', href: '/services/unreal-dev' },
  { label: 'Game Dev', href: '/services/game-dev' },
  { label: 'VFX', href: '/services/motion-vfx' },
  { label: 'AI Content', href: '/services/ai-content' },
  { label: 'Web Development', href: '/services/web-dev' },
  { label: 'Vibe Coding', href: '/services/vibe-coding' },
  { label: 'AI Agents & Automations', href: '/services/ai-agents' },
  { label: 'Virtual Environments', href: '/services/virtual-envs' },
];

export const STARTUP_LINKS = [
  { label: 'Vision', href: '/startup' },
  { label: 'Invest', href: '/startup/invest' },
  { label: 'Donate', href: '/startup/donate' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: '3d-anim',
    title: '3D Design & Animation',
    description: 'High-quality 3D content for commercial, architectural, and entertainment purposes.',
    longDescription: 'We craft immersive 3D narratives that blur the line between reality and digital art. From high-fidelity product renders to cinematic character animation, our pipeline is optimized for visual impact.',
    tags: ['Product Modeling', 'Cinematics', 'Advertising', 'Character Rigging'],
    iconName: 'Box',
    route: '/services/3d-anim'
  },
  {
    id: 'arch-viz',
    title: 'Architectural Visualization',
    description: 'Interior and exterior visualization with real-world accuracy.',
    longDescription: 'Transforming blueprints into photorealistic experiences. We specialize in luxury interior walkthroughs, exterior environment rendering, and VR-ready architectural tours using Ray-Tracing technology.',
    tags: ['Real Estate', 'VR Walkthroughs', 'Exterior Renders', 'Interior Design'],
    iconName: 'Building',
    route: '/services/arch-viz'
  },
  {
    id: 'unreal-dev',
    title: 'Unreal Engine Development',
    description: 'Real-time architectural visualization, virtual production for film/ads, and interactive experiences.',
    longDescription: 'Leveraging the power of Unreal Engine 5 to build real-time applications, virtual production sets for film, and interactive pixel-streaming experiences for the web.',
    tags: ['Virtual Production', 'Real-time', 'Interactive', 'Pixel Streaming'],
    iconName: 'Cpu',
    route: '/services/unreal-dev'
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Environment design, game-ready assets, level concepts, and interactive simulations.',
    longDescription: 'From concept art to playable prototypes. We design immersive game environments, optimized assets, and mechanics that drive engagement in the gaming industry.',
    tags: ['Level Design', 'Assets', 'Prototypes', 'Unity/Unreal'],
    iconName: 'Gamepad2',
    route: '/services/game-dev'
  },
  {
    id: 'motion-vfx',
    title: 'Motion Graphics & VFX',
    description: 'Dynamic visual content for brands, social media, and digital campaigns.',
    longDescription: 'High-energy motion graphics and invisible VFX. We create title sequences, compositing for film, and social media content that stops the scroll.',
    tags: ['VFX', 'Social Media', 'Branding', 'Compositing'],
    iconName: 'Zap',
    route: '/services/motion-vfx'
  },
  {
    id: 'ai-content',
    title: 'AI-Driven Content',
    description: 'Integrating AI for image/video generation, design concepts, and music.',
    longDescription: 'Pixcident is at the forefront of the Generative AI revolution. We train custom models and utilize stable diffusion pipelines to accelerate concepting and asset generation.',
    tags: ['GenAI', 'Automation', 'R&D', 'Custom Models'],
    iconName: 'Bot',
    route: '/services/ai-content'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'High-performance websites and webapps with modern UX and effects.',
    longDescription: 'End-to-end web development: responsive UI/UX, modular architecture, performance budgets, accessibility-first, and production-grade deployments. We build landing pages, SaaS dashboards, marketing sites, and interactive experiences.',
    tags: ['React', 'Vite', 'Tailwind', 'SSR', 'SEO', 'Performance'],
    iconName: 'Globe',
    route: '/services/web-dev'
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding',
    description: 'Expressive, aesthetic-driven coding for immersive digital experiences.',
    longDescription: 'We craft playful, experimental, and visually rich apps and sites—where code meets art. Expect glitch, parallax, kinetic layouts, and ambient motion with real-time interactions.',
    tags: ['Experiments', 'Motion', 'Parallax', 'Kinetic UI'],
    iconName: 'Terminal',
    route: '/services/vibe-coding'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Automations',
    description: 'Local AI agents, agentic workflows, and automation pipelines.',
    longDescription: 'We design and run local AI agents, build agentic automations, and integrate tool-use for content ops, research, and dev workflows. Privacy-first local setups and production orchestration.',
    tags: ['Agents', 'Tool-use', 'Workflows', 'Local-first'],
    iconName: 'Bot',
    route: '/services/ai-agents'
  },
  {
    id: 'virtual-envs',
    title: 'Virtual Environments',
    description: 'Interactive virtual spaces and simulations for web and desktop.',
    longDescription: 'From interactive showrooms to virtual stages, we build environments that blend 3D, web tech, and realtime rendering. Deployed to the browser or native runtimes.',
    tags: ['3D', 'Realtime', 'Simulation', 'Showrooms'],
    iconName: 'Box',
    route: '/services/virtual-envs'
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alex V.",
    role: "Founder & Creative Director",
    bio: "Ex-ILM VFX artist with 15 years in procedural generation.",
    image: "/assets/pixcident owner.png"
  },
  {
    id: 2,
    name: "Sarah K.",
    role: "CTO / Lead Engine Dev",
    bio: "Unreal Engine specialist focusing on real-time rendering pipelines.",
    image: "https://placehold.co/400x400/111/FFF?text=Sarah"
  },
  {
    id: 3,
    name: "Marcus J.",
    role: "Head of AI R&D",
    bio: "Machine learning engineer bridging the gap between diffusion models and 3D mesh.",
    image: "https://placehold.co/400x400/111/FFF?text=Marcus"
  },
  {
    id: 4,
    name: "Elena R.",
    role: "Art Director",
    bio: "Award-winning designer with a focus on futuristic UI/UX and motion.",
    image: "https://placehold.co/400x400/111/FFF?text=Elena"
  }
];

export const DONATION_TIERS: DonationTier[] = [
  {
    name: 'Supporter',
    amount: 25,
    perks: ['Name in Credits', 'Digital Wallpaper Pack']
  },
  {
    name: 'Contributor',
    amount: 100,
    perks: ['Name in Credits', 'Digital Wallpaper Pack', 'Early Access to Tools'],
    popular: true
  },
  {
    name: 'Visionary',
    amount: 500,
    perks: ['All Previous Perks', 'Private Discord Access', '1-on-1 Consultation', 'Merch Pack']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Neon Cybernetics',
    category: '3D Animation',
    image: '/assets/creatine product render.png',
    description: 'A futuristic product reveal for next-gen robotics.'
  },
  {
    id: 'p2',
    title: 'Ethereal Interiors',
    category: 'ArchViz',
    image: '/assets/office interior scene.png',
    description: 'Real-time VR walkthrough of a luxury penthouse.'
  },
  {
    id: 'p3',
    title: 'Void Runner',
    category: 'Game Dev',
    image: '/assets/exterior scene with Car.jpg',
    description: 'Environment design for an infinite runner concept.'
  },
  {
    id: 'p4',
    title: 'Brand Kinetic',
    category: 'Motion Graphics',
    image: '/assets/vitamin product image.png',
    description: 'Dynamic rebranding campaign for a fintech startup.'
  },
  {
    id: 'p5',
    title: 'Synthetic Flora',
    category: 'Experimental',
    image: '/assets/product A+ content image.jpg',
    description: 'Procedural generation of alien plant life.'
  },
  {
    id: 'p6',
    title: 'Auto Showroom',
    category: 'Unreal Engine',
    image: '/assets/MASOOD-HEIGHT-OFFICE-SPACE-RENDER-scaled.jpg',
    description: 'Pixel-streaming enabled automotive configurator.'
  },
  {
    id: 'p7',
    title: 'Studio Website',
    category: 'Web Development',
    image: '/assets/pixcident font image.png',
    description: 'Responsive marketing site with modern UX, effects, and SEO.',
    url: 'https://example.com/studio'
  },
  {
    id: 'p8',
    title: 'Vibe Portfolio',
    category: 'Vibe Coding',
    image: '/assets/red sneakers render.png',
    description: 'Aesthetic-driven interactive portfolio with parallax and glitch.',
    url: 'https://example.com/vibe'
  },
  {
    id: 'p9',
    title: 'Agentic Automation',
    category: 'AI Agents',
    image: '/assets/pixcident owner.png',
    description: 'Local agent workflows for research, content ops, and dev tasks.',
    url: 'https://example.com/agents'
  },
  {
    id: 'p10',
    title: 'Virtual Showroom',
    category: 'Virtual Environments',
    image: '/assets/INDOOR-POOL-RENDER.jpg',
    description: 'Interactive 3D showroom with realtime lighting and navigation.',
    url: 'https://example.com/showroom'
  },
];

export const SYSTEM_PROMPT = `
You are the AI Assistant for Pixcident, a multidisciplinary creative studio and startup platform.
Your goal is to answer questions about Pixcident's services, identity, and startup investment opportunities.
Core Domains: 3D Design, ArchViz, Unreal Engine Dev, Game Dev, Motion Graphics, AI Content, Simulations.
Startup Info: Pixcident is raising funds to build a next-gen creative asset platform "Pixcident Core".
Tone: Professional, futuristic, creative, and concise.
Theme: Orange, White, Black.
`;
