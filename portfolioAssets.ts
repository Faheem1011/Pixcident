export interface PortfolioAsset {
    id: string;
    title: string;
    category: string;
    type: 'image' | 'video';
    src: string;
    thumbnail?: string;
    description?: string;
    tags?: string[];
}

export const ALL_PORTFOLIO_ASSETS: PortfolioAsset[] = [
    // 3D & Animation
    { id: '3d-1', title: 'Product Reveal Animation', category: '3D Animation', type: 'video', src: '/assets/projects/3d-anim/product-reveal-animation.mp4', description: 'Dynamic product reveal showcasing advanced motion graphics' },
    { id: '3d-2', title: 'Magnesium Supplement Render', category: '3D Animation', type: 'image', src: '/assets/projects/3d-anim/magnesium-supplement-render.jpg', description: 'Photorealistic supplement product render' },
    { id: '3d-3', title: 'Abstract Cube', category: '3D Animation', type: 'image', src: '/assets/projects/3d-anim/abstract-cube-render.png', description: 'Abstract geometric 3D render' },
    { id: '3d-4', title: 'Creatine Product', category: '3D Animation', type: 'image', src: '/assets/projects/3d-anim/creatine-product-render.png', description: 'Professional product visualization for supplements' },
    { id: '3d-5', title: 'Vitamin Bottle', category: '3D Animation', type: 'image', src: '/assets/projects/3d-anim/vitamin-bottle-render.png', description: 'Clean vitamin bottle render' },
    { id: '3d-6', title: 'Robotic Mech', category: '3D Animation', type: 'image', src: '/assets/projects/3d-anim/robotic-mech.png', description: 'Sci-fi robotic character design' },
    { id: '3d-7', title: 'Product Headphones', category: '3D Animation', type: 'image', src: '/assets/projects/3d-anim/product-headphones.jpg', description: 'High-end headphones product shot' },

    // Architectural Visualization
    { id: 'arch-1', title: 'Modern Kitchen', category: 'Architectural Visualization', type: 'image', src: '/assets/projects/arch-viz/modern-kitchen-interior.jpg', description: 'Contemporary kitchen interior design' },
    { id: 'arch-2', title: 'Architectural Concept', category: 'Architectural Visualization', type: 'image', src: '/assets/projects/arch-viz/interior-exterior-architectural-concept.png', description: 'Interior and exterior architectural visualization' },
    { id: 'arch-3', title: 'Hill House Exterior', category: 'Architectural Visualization', type: 'image', src: '/assets/projects/arch-viz/modern-hill-house-exterior.jpg', description: 'Modern luxury hillside residence' },
    { id: 'arch-4', title: 'Luxury Bedroom', category: 'Architectural Visualization', type: 'image', src: '/assets/projects/arch-viz/luxury-bedroom-design.jpg', description: 'High-end bedroom interior' },
    { id: 'arch-5', title: 'Corporate Office', category: 'Architectural Visualization', type: 'image', src: '/assets/projects/arch-viz/corporate-office-exterior.jpg', description: 'Commercial office building exterior' },
    { id: 'arch-6', title: 'Luxury Interior', category: 'Architectural Visualization', type: 'image', src: '/assets/projects/arch-viz/luxury-interior.png', description: 'Premium residential interior' },

    // AI Solutions
    { id: 'ai-1', title: 'AI Dashboard', category: 'AI Solutions', type: 'image', src: '/assets/projects/ai-solutions/ai-dashboard-ui.png', description: 'AI-powered analytics dashboard interface' },
    { id: 'ai-2', title: 'Workflow Automation', category: 'AI Solutions', type: 'image', src: '/assets/projects/ai-solutions/automation-workflow.png', description: 'Automated workflow visualization' },
    { id: 'ai-3', title: 'AI Chatbot Interface', category: 'AI Solutions', type: 'image', src: '/assets/projects/ai-solutions/ai-chatbot-ui.png', description: 'Conversational AI chatbot UI' },
    { id: 'ai-4', title: 'Data Pipeline', category: 'AI Solutions', type: 'image', src: '/assets/projects/ai-solutions/data-pipeline-viz.png', description: 'Data processing pipeline visualization' },

    // E-Commerce
    { id: 'ecom-1', title: 'A+ Content Showcase', category: 'E-Commerce', type: 'image', src: '/assets/projects/ecommerce/aplus-content-showcase.png', description: 'Amazon A+ enhanced brand content' },
    { id: 'ecom-2', title: '3D Product Mockup', category: 'E-Commerce', type: 'image', src: '/assets/projects/ecommerce/product-mockup-3d.png', description: 'Photorealistic product mockup' },
    { id: 'ecom-3', title: 'Product Page Design', category: 'E-Commerce', type: 'image', src: '/assets/projects/ecommerce/product-page-design.png', description: 'Responsive e-commerce product page' },
    { id: 'ecom-4', title: 'Product Animation', category: 'E-Commerce', type: 'image', src: '/assets/projects/ecommerce/product-animation.png', description: 'Dynamic product animation frame' },
    { id: 'ecom-5', title: 'Packaging Design Suite', category: 'E-Commerce', type: 'image', src: '/assets/projects/ecommerce/packaging-design-suite.png', description: 'Complete product packaging design' },
    { id: 'ecom-6', title: 'Product Catalog', category: 'E-Commerce', type: 'image', src: '/assets/projects/ecommerce/product-catalog-grid.png', description: 'Multi-product catalog layout' },

    // Game Development
    { id: 'game-1', title: 'Unreal Engine Environment', category: 'Game Development', type: 'image', src: '/assets/projects/game-dev/unreal-engine-environment.jpg', description: 'Photorealistic UE5 environment' },
    { id: 'game-2', title: 'Silver Rider Character', category: 'Game Development', type: 'image', src: '/assets/projects/game-dev/silver-rider-character.png', description: 'Character design and modeling' },
    { id: 'game-3', title: 'Ghost Character', category: 'Game Development', type: 'image', src: '/assets/projects/game-dev/ghost-character-model.png', description: 'Stylized character model' },
    { id: 'game-4', title: 'Automotive Configurator', category: 'Game Development', type: 'image', src: '/assets/projects/game-dev/automotive-configurator-demo.png', description: 'Interactive car configurator demo' },
    { id: 'game-5', title: 'Ferrari Visualization', category: 'Game Development', type: 'image', src: '/assets/projects/game-dev/ferrari-automotive-visualization.jpg', description: 'Luxury automotive real-time rendering' },

    // Motion Graphics & VFX
    { id: 'vfx-1', title: 'VFX Compositing Split', category: 'Motion Graphics & VFX', type: 'image', src: '/assets/projects/motion-vfx/vfx-compositing-split.png', description: 'Before/after VFX compositing' },
    { id: 'vfx-2', title: 'Motion Graphics Title', category: 'Motion Graphics & VFX', type: 'image', src: '/assets/projects/motion-vfx/motion-graphics-title.png', description: 'Animated title sequence' },
    { id: 'vfx-3', title: 'Logo Animation 3D', category: 'Motion Graphics & VFX', type: 'image', src: '/assets/projects/motion-vfx/logo-animation-3d.png', description: '3D logo reveal animation' },
    { id: 'vfx-4', title: 'Social Content VFX', category: 'Motion Graphics & VFX', type: 'image', src: '/assets/projects/motion-vfx/social-content-vfx.png', description: 'Social media VFX content' },
    { id: 'vfx-5', title: 'VFX Compositing Breakdown', category: 'Motion Graphics & VFX', type: 'image', src: '/assets/projects/motion-vfx/vfx-compositing-breakdown.png', description: 'VFX breakdown layers' },
    { id: 'vfx-6', title: 'Liquid Splash', category: 'Motion Graphics & VFX', type: 'image', src: '/assets/projects/motion-vfx/liquid-splash.jpg', description: 'Simulated liquid effects' },
    { id: 'vfx-7', title: 'Cinematic VFX Shot', category: 'Motion Graphics & VFX', type: 'video', src: '/assets/projects/motion-vfx/cinematic-vfx-shot.mp4', description: 'Cinematic visual effects showcase' },
    { id: 'vfx-8', title: 'Music Video VFX', category: 'Motion Graphics & VFX', type: 'video', src: '/assets/projects/motion-vfx/flora-karengee-music-video-vfx.mp4', description: 'Music video visual effects' },
    { id: 'vfx-9', title: 'Motion Graphics Showreel', category: 'Motion Graphics & VFX', type: 'video', src: '/assets/projects/motion-vfx/motion-graphics-showreel.mp4', description: 'Motion graphics compilation' },

    // Vibe Coding (AI-Assisted Development)
    { id: 'vibe-1', title: 'AI Coding Assistant', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/ai-coding-assistant.png', description: 'AI-powered code assistant interface' },
    { id: 'vibe-2', title: 'No-Code Builder', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/nocode-app-builder.png', description: 'Drag-and-drop app builder' },
    { id: 'vibe-3', title: 'Code Generation Visualization', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/code-generation-viz.png', description: 'AI code generation flow' },
    { id: 'vibe-4', title: 'Low-Code Platform', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/lowcode-platform-dashboard.png', description: 'Low-code development platform' },
    { id: 'vibe-5', title: 'Visual Programming', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/visual-programming-interface.png', description: 'Node-based visual programming' },
    { id: 'vibe-6', title: 'Generative Art', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/generative-art-01.png', description: 'Generative visual art' },
    { id: 'vibe-7', title: 'Particle System', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/particle-system.png', description: 'Interactive particle effects' },
    { id: 'vibe-8', title: 'Creative Waves', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/creative-waves.png', description: 'Procedural wave generation' },
    { id: 'vibe-9', title: 'Geometry Art', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/geometry-art.png', description: 'Geometric abstract art' },
    { id: 'vibe-10', title: 'Glitch Art', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/glitch-art.png', description: 'Digital glitch aesthetics' },
    { id: 'vibe-11', title: 'Abstract Glitch', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/abstract-glitch-art.png', description: 'Experimental glitch effects' },
    { id: 'vibe-12', title: 'Metallic Flow', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/abstract-metallic-flow.jpg', description: 'Abstract metallic visuals' },
    { id: 'vibe-13', title: 'Generative Visuals', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/generative-visuals-experiment.png', description: 'Experimental generative art' },
    { id: 'vibe-14', title: 'Interactive Installation', category: 'Vibe Coding', type: 'image', src: '/assets/projects/vibe-coding/interactive-installation.png', description: 'Interactive digital installation' },

    // Web Development
    { id: 'web-1', title: 'Landing Page Mockup', category: 'Web Development', type: 'image', src: '/assets/projects/web-dev/landing-page-mockup.png', description: 'Modern landing page design' },
    { id: 'web-2', title: 'E-Commerce Platform', category: 'Web Development', type: 'image', src: '/assets/projects/web-dev/ecommerce-platform-ui.png', description: 'Full e-commerce platform UI' },
    { id: 'web-3', title: 'SaaS Dashboard', category: 'Web Development', type: 'image', src: '/assets/projects/web-dev/saas-dashboard.png', description: 'SaaS application dashboard' },
    { id: 'web-4', title: 'Responsive Design', category: 'Web Development', type: 'image', src: '/assets/projects/web-dev/responsive-design.png', description: 'Responsive web design showcase' },
    { id: 'web-5', title: 'E-Commerce Product Page', category: 'Web Development', type: 'image', src: '/assets/projects/web-dev/e commerce-product-page.png', description: 'Product detail page design' },
    { id: 'web-6', title: 'SaaS Dashboard Interface', category: 'Web Development', type: 'image', src: '/assets/projects/web-dev/saas-dashboard-interface.png', description: 'Modern SaaS UI/UX' },
    { id: 'web-7', title: 'Responsive Web Mockup', category: 'Web Development', type: 'image', src: '/assets/projects/web-dev/responsive-web-design-mockup.jpg', description: 'Multi-device responsive preview' },

    // Portfolio (Legacy/General)
    { id: 'port-1', title: 'Abstract Concept 1', category: 'Experimental', type: 'image', src: '/assets/portfolio/abstract-1.jpg', description: 'Abstract visual exploration' },
    { id: 'port-2', title: 'Abstract Concept 2', category: 'Experimental', type: 'image', src: '/assets/portfolio/abstract-2.jpg', description: 'Abstract design study' },
    { id: 'port-3', title: 'Abstract Concept 3', category: 'Experimental', type: 'image', src: '/assets/portfolio/abstract-3.png', description: 'Abstract composition' },
    { id: 'port-4', title: 'ArchViz Project 1', category: 'Architectural Visualization', type: 'image', src: '/assets/portfolio/archviz-1.jpg', description: 'Architectural visualization project' },
    { id: 'port-5', title: 'ArchViz Project 2', category: 'Architectural Visualization', type: 'image', src: '/assets/portfolio/archviz-2.png', description: 'Interior rendering project' },
    { id: 'port-6', title: 'Automotive Design 1', category: 'Game Development', type: 'image', src: '/assets/portfolio/automotive-1.png', description: 'Automotive visualization' },
    { id: 'port-7', title: 'Automotive Design 2', category: 'Game Development', type: 'image', src: '/assets/portfolio/automotive-2.jpg', description: 'Car rendering project' },
    { id: 'port-8', title: 'Automotive Design 3', category: 'Game Development', type: 'image', src: '/assets/portfolio/automotive-3.png', description: 'Vehicle visualization' },
    { id: 'port-9', title: 'Character Design', category: 'Game Development', type: 'image', src: '/assets/portfolio/character-1.png', description: '3D character modeling' },
    { id: 'port-10', title: 'Product Render 1', category: '3D Animation', type: 'image', src: '/assets/portfolio/product-1.png', description: 'Product visualization' },
    { id: 'port-11', title: 'Product Render 2', category: '3D Animation', type: 'image', src: '/assets/portfolio/product-2.png', description: 'Commercial product shot' },
    { id: 'port-12', title: 'Product Render 3', category: '3D Animation', type: 'image', src: '/assets/portfolio/product-3.png', description: 'Product rendering' },
    { id: 'port-13', title: 'Product Render 4', category: '3D Animation', type: 'image', src: '/assets/portfolio/product-4.png', description: '3D product showcase' },
    { id: 'port-14', title: 'VFX Project 1', category: 'Motion Graphics & VFX', type: 'image', src: '/assets/portfolio/vfx-1.png', description: 'Visual effects work' },
    { id: 'port-15', title: 'VFX Project 2', category: 'Motion Graphics & VFX', type: 'image', src: '/assets/portfolio/vfx-2.png', description: 'VFX compositing project' },

    // Products/Additional
    { id: 'prod-1', title: 'Demand Scanner Tool', category: 'AI Solutions', type: 'image', src: '/assets/products/demand-scanner.png', description: 'Market demand analysis tool' },
    { id: 'prod-2', title: 'Inventory AI', category: 'AI Solutions', type: 'image', src: '/assets/products/inventory-ai.png', description: 'AI-powered inventory management' },
    { id: 'prod-3', title: 'Operations AI', category: 'AI Solutions', type: 'image', src: '/assets/products/operations-ai.png', description: 'Operational automation platform' },
    { id: 'prod-4', title: 'TikTok Bulk Tool', category: 'AI Solutions', type: 'image', src: '/assets/products/tiktok-bulk.png', description: 'Bulk content management tool' },
    { id: 'prod-5', title: 'Trading Vision', category: 'AI Solutions', type: 'image', src: '/assets/products/trading-vision.png', description: 'Trading analytics dashboard' },
];

export const CATEGORIES = [
    'All',
    '3D Animation',
    'Architectural Visualization',
    'Game Development',
    'Motion Graphics & VFX',
    'AI Solutions',
    'Web Development',
    'E-Commerce',
    'Vibe Coding',
    'Experimental'
];
