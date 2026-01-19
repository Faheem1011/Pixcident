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
    description: 'Launching a product? Show customers exactly what they get with photorealistic 3D renders that sell before you manufacture.',
    longDescription: 'Your customers cannot buy what they cannot visualize. We create photorealistic 3D product renders that eliminate imagination gaps and drive pre-orders. From e-commerce product showcases to investor pitch materials, our broadcast-quality 3D visuals make your products tangible before they exist. Stop losing sales. Show them exactly what they get.',
    tags: ['Product Visualization', 'E-commerce Renders', 'Marketing Assets', 'Investor Pitches'],
    iconName: 'Box',
    route: '/services/3d-anim',
    projects: [
      { id: '1', title: 'Product Reveal', type: 'video', src: '/assets/projects/3d-anim/product-reveal-animation.mp4', width: 'md:col-span-2 md:row-span-2' },
      { id: '2', title: 'Magnesium Supplement', type: 'image', src: '/assets/projects/3d-anim/magnesium-supplement-render.jpg' },
      { id: '3', title: 'Abstract Cube', type: 'image', src: '/assets/projects/3d-anim/abstract-cube-render.png' },
      { id: '4', title: 'Creatine Render', type: 'image', src: '/assets/projects/3d-anim/creatine-product-render.png', width: 'md:col-span-2 md:row-span-2' },
      { id: '5', title: 'Vitamin Bottle', type: 'image', src: '/assets/projects/3d-anim/vitamin-bottle-render.png' },
      { id: '6', title: 'Robotic Mech', type: 'image', src: '/assets/projects/3d-anim/robotic-mech.png' },
      { id: '7', title: 'Product Headphones', type: 'image', src: '/assets/projects/3d-anim/product-headphones.jpg' }
    ]
  },
  {
    id: 'arch-viz',
    title: 'Architectural Visualization',
    description: 'Sell properties before construction starts. Photorealistic renders and VR walkthroughs that close deals and win investor confidence.',
    longDescription: 'Buyers will not invest in blueprints. Investors need to see the finished vision. We create photorealistic architectural renders that sell properties before the first brick is laid. Real estate agents close deals faster. Developers secure funding easier. Clients experience spaces through immersive VR walkthroughs. Stop losing opportunities. Show them the future, today.',
    tags: ['Pre-Sale Marketing', 'Investor Presentations', 'VR Experiences', 'Luxury Interiors'],
    iconName: 'Building',
    route: '/services/arch-viz',
    projects: [
      { id: '1', title: 'Modern Kitchen', type: 'image', src: '/assets/projects/arch-viz/modern-kitchen-interior.jpg', width: 'md:col-span-2 md:row-span-2' },
      { id: '2', title: 'Interior/Exterior', type: 'image', src: '/assets/projects/arch-viz/interior-exterior-architectural-concept.png' },
      { id: '3', title: 'Hill House Exterior', type: 'image', src: '/assets/projects/arch-viz/modern-hill-house-exterior.jpg' },
      { id: '4', title: 'Luxury Bedroom', type: 'image', src: '/assets/projects/arch-viz/luxury-bedroom-design.jpg', width: 'md:col-span-2 md:row-span-2' },
      { id: '5', title: 'Corporate Office', type: 'image', src: '/assets/projects/arch-viz/corporate-office-exterior.jpg' },
      { id: '6', title: 'Luxury Interior', type: 'image', src: '/assets/projects/arch-viz/luxury-interior.png' }
    ]
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Need immersive experiences that captivate users? Unreal Engine 5 game environments and interactive simulations that engage and convert.',
    longDescription: 'Static presentations do not engage modern audiences. We build photorealistic game environments and interactive experiences using Unreal Engine 5 that immerse users in your world. Perfect for product configurators, training simulations, virtual showrooms, and browser-based experiences via pixel streaming. Your audience stays engaged longer. Your message sticks. Stop competing for attention with boring PDFs. Give them an experience to remember.',
    tags: ['Unreal Engine 5', 'Interactive Experiences', 'Product Configurators', 'Virtual Showrooms', 'Training Simulations', 'Web Deployment'],
    iconName: 'Gamepad2',
    route: '/services/game-dev',
    projects: [
      { id: '1', title: 'Unreal Environment', type: 'image', src: '/assets/projects/game-dev/unreal-engine-environment.jpg', width: 'md:col-span-2 md:row-span-2' },
      { id: '2', title: 'Silver Rider', type: 'image', src: '/assets/projects/game-dev/silver-rider-character.png' },
      { id: '3', title: 'Ghost Character', type: 'image', src: '/assets/projects/game-dev/ghost-character-model.png' },
      { id: '4', title: 'Auto Configurator', type: 'image', src: '/assets/projects/game-dev/automotive-configurator-demo.png', width: 'md:col-span-2 md:row-span-2' },
      { id: '5', title: 'Ferrari Vis', type: 'image', src: '/assets/projects/game-dev/ferrari-automotive-visualization.jpg' }
    ]
  },
  {
    id: 'motion-vfx',
    title: 'Motion Graphics & VFX',
    description: 'Your social content gets lost in the scroll. Eye-catching motion graphics and VFX that stop thumbs and drive engagement.',
    longDescription: 'Static posts get ignored. Boring videos get skipped. We create scroll-stopping motion graphics and visual effects that capture attention in the first 3 seconds. Your brand campaigns stand out. Your product launches go viral. Your social engagement multiplies. From dynamic logo reveals to seamless VFX compositing, we make content that people actually watch. Stop blending in with generic content. Demand attention.',
    tags: ['Social Media Content', 'Brand Campaigns', 'Product Launches', 'Viral Marketing'],
    iconName: 'Zap',
    route: '/services/motion-vfx',
    projects: [
      { id: '1', title: 'VFX Compositing', type: 'image', src: '/assets/projects/motion-vfx/vfx-compositing-split.png', width: 'md:col-span-2 md:row-span-2' },
      { id: '2', title: 'Motion Title', type: 'image', src: '/assets/projects/motion-vfx/motion-graphics-title.png' },
      { id: '3', title: 'Logo Animation', type: 'image', src: '/assets/projects/motion-vfx/logo-animation-3d.png' },
      { id: '4', title: 'Social Content', type: 'image', src: '/assets/projects/motion-vfx/social-content-vfx.png', width: 'md:col-span-2 md:row-span-2' }
    ]
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Automation',
    description: 'Drowning in manual tasks? AI agents and automation that scale your creative output 10x without hiring more people.',
    longDescription: 'Manual work keeps you from scaling. Repetitive tasks waste creative talent. We build custom AI agents that automate research, content generation, and workflow operations—so your team focuses on strategy, not busywork. Scale output without scaling headcount. Maintain quality while moving faster. From autonomous content pipelines to privacy-first local AI setups, we give you the leverage to compete with teams 10x your size. Stop trading time for output. Scale intelligently.',
    tags: ['Workflow Automation', 'AI Agents', 'Content Generation', 'Process Optimization', 'Privacy-First AI', 'Team Scaling'],
    iconName: 'Bot',
    route: '/services/ai-solutions',
    projects: [
      { id: '1', title: 'AI Dashboard', type: 'image', src: '/assets/projects/ai-solutions/ai-dashboard-ui.png', width: 'md:col-span-2 md:row-span-2' },
      { id: '2', title: 'Workflow Automation', type: 'image', src: '/assets/projects/ai-solutions/automation-workflow.png' },
      { id: '3', title: 'AI Chatbot', type: 'image', src: '/assets/projects/ai-solutions/ai-chatbot-ui.png' },
      { id: '4', title: 'Data Pipeline', type: 'image', src: '/assets/projects/ai-solutions/data-pipeline-viz.png' }
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Your website loads slow. Visitors bounce. Sales tank. Lightning-fast websites built to convert visitors into paying customers.',
    longDescription: 'A slow website costs you revenue every second. We build lightning-fast, conversion-optimized websites that load in under 2 seconds, rank higher in search results, and turn visitors into customers. Your bounce rate drops. Your sales increase. Your search rankings improve. Built with React, Next.js, and modern SEO best practices from day one. Stop losing customers to loading screens. Get a site that sells while you sleep.',
    tags: ['High Performance', 'SEO Optimized', 'Conversion-Focused', 'Modern Stack', 'Mobile-First', 'Lightning Fast'],
    iconName: 'Globe',
    route: '/services/web-dev',
    projects: [
      { id: '1', title: 'Landing Page', type: 'image', src: '/assets/projects/web-dev/landing-page-mockup.png', width: 'md:col-span-2 md:row-span-2' },
      { id: '2', title: 'E-commerce', type: 'image', src: '/assets/projects/web-dev/ecommerce-product-page.png' },
      { id: '3', title: 'SaaS Dashboard', type: 'image', src: '/assets/projects/web-dev/saas-dashboard.png' },
      { id: '4', title: 'Responsive Design', type: 'image', src: '/assets/projects/web-dev/responsive-design.png' }
    ]
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding',
    description: 'Generic websites do not build brands. Emotion-driven digital art that makes people feel something and remember you forever.',
    longDescription: 'Your portfolio looks like everyone else. Your brand experience is forgettable. We create experimental digital experiences where code becomes art with parallax storytelling, kinetic typography, glitch aesthetics, and generative visuals that evoke emotion. Your visitors feel something. Your brand becomes unforgettable. Perfect for creative agencies, artists, and brands that refuse to blend in. Stop being generic. Be memorable.',
    tags: ['Experimental Design', 'Brand Emotion', 'Digital Art', 'Creative Portfolios', 'Kinetic UI', 'Unforgettable'],
    iconName: 'Terminal',
    route: '/services/vibe-coding',
    projects: [
      { id: '1', title: 'Generative Art', type: 'image', src: '/assets/projects/vibe-coding/generative-art-01.png', width: 'md:col-span-2 md:row-span-2' },
      { id: '2', title: 'Particle System', type: 'image', src: '/assets/projects/vibe-coding/particle-system.png' },
      { id: '3', title: 'Creative Waves', type: 'image', src: '/assets/projects/vibe-coding/creative-waves.png' },
      { id: '4', title: 'Geometry Art', type: 'image', src: '/assets/projects/vibe-coding/geometry-art.png' },
      { id: '5', title: 'Glitch Art', type: 'image', src: '/assets/projects/vibe-coding/glitch-art.png' }
    ]
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
