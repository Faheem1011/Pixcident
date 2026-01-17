import { ServiceItem, PortfolioItem, DonationTier } from './types';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
];

export const SERVICE_LINKS = [
  { label: '3D & Animation', href: '/services/3d-anim' },
  { label: 'ArchViz', href: '/services/arch-viz' },
  { label: 'Game Development', href: '/services/game-dev' },
  { label: 'VFX', href: '/services/motion-vfx' },
  { label: 'AI Solutions', href: '/services/ai-solutions' },
  { label: 'Web Development', href: '/services/web-dev' },
  { label: 'Vibe Coding', href: '/services/vibe-coding' },
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
    description: 'Premium 3D modeling, product visualization, and character animation for commercial, architectural, and entertainment projects.',
    longDescription: 'Transform your vision into photorealistic 3D reality. We create stunning product renders for e-commerce and marketing, cinematic character animations for storytelling, and high-fidelity 3D assets for any commercial purpose. Our pipeline delivers broadcast-quality visuals optimized for your specific platform—whether it\'s social media, television, or print advertising.',
    tags: ['Product Rendering', 'Character Animation', 'Commercial CGI', 'Asset Creation'],
    iconName: 'Box',
    route: '/services/3d-anim'
  },
  {
    id: 'arch-viz',
    title: 'Architectural Visualization',
    description: 'Photorealistic interior and exterior renders, VR walkthroughs, and architectural presentations for real estate and developers.',
    longDescription: 'Bring architectural visions to life before they\'re built. We specialize in creating stunning photorealistic renders for real estate marketing, developer presentations, and investor pitches. Our services include luxury interior visualizations, dramatic exterior renders with lifelike lighting, and fully immersive VR walkthroughs that let clients experience spaces before construction begins. Built with ray-tracing technology for unmatched realism.',
    tags: ['Real Estate Marketing', 'VR Walkthroughs', 'Photorealistic Renders', 'Developer Presentations'],
    iconName: 'Building',
    route: '/services/arch-viz'
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Professional game development powered by Unreal Engine 5. Immersive environments, real-time visualization, interactive experiences, and virtual production.',
    longDescription: 'We specialize in game development using Unreal Engine 5, the industry-leading platform for creating stunning real-time experiences. From photorealistic game environments and interactive simulations to virtual production for film and advertising, we deliver pixel-perfect execution. Our expertise spans level design, game-ready asset creation, real-time rendering, interactive mechanics, and pixel-streaming experiences for web deployment.',
    tags: ['Unreal Engine 5', 'Level Design', 'Game Assets', 'Real-time Rendering', 'Virtual Production', 'Interactive Experiences', 'Pixel Streaming'],
    iconName: 'Gamepad2',
    route: '/services/game-dev'
  },
  {
    id: 'motion-vfx',
    title: 'Motion Graphics & VFX',
    description: 'Eye-catching motion graphics and visual effects for brand campaigns, social media content, and commercial video production.',
    longDescription: 'Create content that stops the scroll and captivates audiences. From dynamic logo animations and brand identity motion to seamless VFX compositing for commercials, we craft visuals that elevate your brand story. Perfect for social media campaigns, product launches, title sequences, and post-production enhancement. Our motion work combines technical precision with creative storytelling to deliver maximum impact.',
    tags: ['Brand Animation', 'Social Media Content', 'Commercial VFX', 'Title Sequences'],
    iconName: 'Zap',
    route: '/services/motion-vfx'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Automation',
    description: 'Intelligent automation and AI-powered creative workflows. Scale your production with custom AI agents and generative asset pipelines.',
    longDescription: 'Leverage the power of artificial intelligence to revolutionize your creative and business operations. We build custom AI agents for workflow automation, research, and data processing, alongside generative AI pipelines for rapid concepting and asset creation. Our solutions bridge the gap between creative mastery and technical efficiency, allowing you to scale output without compromising on quality. From local privacy-first AI setups to autonomous content operations, we deliver the future of intelligent production.',
    tags: ['AI Agents', 'Workflow Automation', 'Generative AI', 'Content Operations', 'Custom AI Models', 'Privacy-First'],
    iconName: 'Bot',
    route: '/services/ai-solutions'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Modern, high-performance websites and web applications. From landing pages to SaaS platforms, built for conversion and user experience.',
    longDescription: 'Build digital experiences that convert visitors into customers. We create lightning-fast, responsive websites and web applications using modern frameworks like React, Next.js, and Vite. Our expertise includes conversion-optimized landing pages, feature-rich SaaS dashboards, e-commerce platforms, and interactive brand experiences. Every project is built with SEO best practices, accessibility standards, and performance optimization from day one.',
    tags: ['React', 'Next.js', 'SEO Optimized', 'SaaS Development', 'Landing Pages', 'Performance'],
    iconName: 'Globe',
    route: '/services/web-dev'
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding',
    description: 'Experimental, emotion-driven digital experiences. Where code becomes art through motion, interaction, and atmosphere.',
    longDescription: 'Push beyond conventional web design into the realm of digital art. Vibe Coding is our approach to creating experimental, aesthetically-driven experiences that prioritize emotion and atmosphere. Think parallax storytelling, glitch aesthetics, kinetic typography, generative visuals, and ambient interactions. Perfect for creative portfolios, art installations, experimental brand campaigns, and projects where the experience itself is the message.',
    tags: ['Experimental Design', 'Motion Design', 'Parallax', 'Kinetic UI', 'Digital Art'],
    iconName: 'Terminal',
    route: '/services/vibe-coding'
  },


];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Faheem Fiaz",
    role: "Founder & Creative Technologist",
    bio: "Multi-disciplinary artist and engineer specializing in 3D production, Unreal Engine development, and AI-driven workflows. Building the future of creative ecosystems at Pixcident.",
    image: "/assets/pixcident owner.png"
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
    category: 'AI Solutions',
    image: '/assets/pixcident owner.png',
    description: 'Local agent workflows for research, content ops, and dev tasks.',
    url: 'https://example.com/agents'
  },
];

export const SYSTEM_PROMPT = `
You are the AI Assistant for Pixcident, a multidisciplinary creative studio and startup platform founded by Faheem Fiaz.
Your goal is to answer questions about Pixcident's services, identity, and startup investment opportunities.
Core Services: 3D Design & Animation, Architectural Visualization, Game Development (Unreal Engine), Motion Graphics & VFX, AI Solutions & Automation, Web Development, Vibe Coding.
Startup Info: Pixcident is raising funds to build a next-gen creative asset platform "Pixcident Core".
Tone: Professional, futuristic, creative, and concise.
Theme: Orange, White, Black.
`;
