// PIXCIDENT AI SaaS Platform - Startup Constants
// All data for investor materials, product information, and financial projections

export interface SaaSProduct {
    id: string;
    name: string;
    tagline: string;
    description: string;
    problem: string;
    solution: string;
    keyFeatures: string[];
    targetMarket: string[];
    pricing: {
        tier: string;
        price: string;
        model: string;
    }[];
    revenueModel: string;
    iconName: string;
    color: string; // Tailwind color class
}

export interface FinancialYear {
    year: number;
    customers: number;
    arpu: number;
    annualRevenue: number;
    expenses: number;
    net: number;
    description: string;
}

export interface RoadmapPhase {
    phase: string;
    title: string;
    timeframe: string;
    description: string;
    milestones: string[];
}

export interface FundingInfo {
    seeking: string;
    useOfFunds: {
        category: string;
        percentage: number;
        description: string;
    }[];
    exitStrategy: string[];
}

export interface MarketMetrics {
    tam: string;
    sam: string;
    som: string;
    growthRate: string;
}

// ============================================
// PRODUCT SUITE
// ============================================

export const SAAS_PRODUCTS: SaaSProduct[] = [
    {
        id: 'inventory-ai',
        name: 'AI Inventory Management',
        tagline: 'Predict Demand. Optimize Stock. Maximize Profit.',
        description: 'AI-driven inventory platform that learns from sales velocity, seasonality, supplier lead times, and demand signals to eliminate overstock and understock.',
        problem: 'Stores and online sellers rely on static spreadsheets and manual forecasting, leading to overstock, understock, and capital lockup.',
        solution: 'Machine learning models that predict exactly what to stock, when to reorder, and how much inventory to carry.',
        keyFeatures: [
            'AI demand forecasting with 95% accuracy',
            'Auto restock recommendations',
            'Multi-store & warehouse sync',
            'POS, Shopify, WooCommerce integration',
            'Dead stock & slow-moving alerts',
            'Profit-margin-based stock prioritization'
        ],
        targetMarket: ['Retail chains', 'E-commerce stores', 'Wholesalers', 'Multi-location businesses'],
        pricing: [
            { tier: 'Starter', price: '$29', model: '/month' },
            { tier: 'Pro', price: '$79', model: '/month' },
            { tier: 'Enterprise', price: 'Custom', model: 'pricing' }
        ],
        revenueModel: 'Recurring SaaS subscriptions',
        iconName: 'Package',
        color: 'blue'
    },
    {
        id: 'trading-vision',
        name: 'Vision Trading AI',
        tagline: 'AI That Sees Charts Like Pro Traders Do.',
        description: 'Computer-vision-based AI that analyzes price charts, volume behavior, and market structure visually to identify high-probability trade setups.',
        problem: 'Retail traders rely on lagging indicators and emotional decision-making, leading to inconsistent results.',
        solution: 'Neural networks trained on millions of chart patterns to recognize setups with quantified win probability.',
        keyFeatures: [
            'AI chart pattern recognition',
            'Probability-based trade setups',
            'Risk-reward scoring system',
            'Multi-market support (Crypto, Forex, Indices)',
            'Strategy backtesting engine',
            'Real-time alerts and notifications'
        ],
        targetMarket: ['Retail traders', 'Trading groups', 'Hedge fund analysts', 'Crypto traders'],
        pricing: [
            { tier: 'Basic', price: '$49', model: '/month' },
            { tier: 'Advanced', price: '$129', model: '/month' },
            { tier: 'API Access', price: 'Custom', model: 'for funds' }
        ],
        revenueModel: 'Subscription + API licensing',
        iconName: 'TrendingUp',
        color: 'green'
    },
    {
        id: 'tiktok-bulk',
        name: 'TikTok Shop Uploader',
        tagline: 'From Excel to Live Products in Minutes.',
        description: 'Automation tool that converts Excel inventory sheets into TikTok Shop-ready listings, validates compliance, and uploads automatically.',
        problem: 'TikTok Shop sellers struggle with bulk product uploads, compliance fields, and frequent listing errors.',
        solution: 'Intelligent mapping engine that handles bulk uploads with zero-error compliance validation.',
        keyFeatures: [
            'Excel-to-TikTok mapping engine',
            'AI compliance validation',
            'Bulk image & SKU handling',
            'Error detection before upload',
            'Multi-account support',
            'Template library for different categories'
        ],
        targetMarket: ['TikTok Shop sellers', 'E-commerce agencies', 'Dropshippers', 'Brand managers'],
        pricing: [
            { tier: 'Pay-per-upload', price: '$0.10', model: '/product' },
            { tier: 'Monthly 1000', price: '$49', model: '/month' },
            { tier: 'Unlimited', price: '$199', model: '/month' }
        ],
        revenueModel: 'Pay-per-use + Monthly plans',
        iconName: 'Upload',
        color: 'purple'
    },
    {
        id: 'demand-scanner',
        name: 'AI Demand Scanner',
        tagline: 'See Trends Before They Peak.',
        description: 'AI system that scans TikTok, Instagram, Google Trends, and marketplaces to detect emerging product demand with velocity scoring.',
        problem: 'Businesses miss trending opportunities because manual research is too slow and unreliable.',
        solution: 'Real-time trend detection with predictive signals showing what will sell next.',
        keyFeatures: [
            'Trend velocity scoring',
            'Geo-based demand signals',
            'Competitor saturation analysis',
            'Export to inventory system',
            'Custom alert triggers',
            'Historical trend tracking'
        ],
        targetMarket: ['Product sourcers', 'E-commerce brands', 'Market researchers', 'Investors'],
        pricing: [
            { tier: 'Explorer', price: '$39', model: '/month' },
            { tier: 'Professional', price: '$99', model: '/month' },
            { tier: 'Enterprise', price: '$299', model: '/month' }
        ],
        revenueModel: 'Tiered SaaS subscriptions',
        iconName: 'Radar',
        color: 'orange'
    },
    {
        id: 'operations-ai',
        name: 'Operations Automation',
        tagline: 'No-Code AI That Connects Everything.',
        description: 'No-code automation layer that connects inventory, orders, suppliers, and accounting with intelligent workflows.',
        problem: 'Businesses waste hours on repetitive tasks between disconnected systems.',
        solution: 'Visual workflow builder with AI-powered automation that works 24/7.',
        keyFeatures: [
            'Auto email suppliers at stock threshold',
            'Generate purchase orders automatically',
            'Sync inventory with accounting tools',
            'Order fulfillment automation',
            'Custom workflow builder',
            'Integration marketplace'
        ],
        targetMarket: ['Operations managers', 'Small businesses', 'E-commerce companies', 'Retail chains'],
        pricing: [
            { tier: 'Starter', price: '$59', model: '/month' },
            { tier: 'Business', price: '$149', model: '/month' },
            { tier: 'Enterprise', price: 'Custom', model: 'pricing' }
        ],
        revenueModel: 'Usage-based + Subscriptions',
        iconName: 'Workflow',
        color: 'cyan'
    }
];

// ============================================
// FINANCIAL PROJECTIONS
// ============================================

export const FINANCIAL_PROJECTIONS: FinancialYear[] = [
    {
        year: 1,
        customers: 500,
        arpu: 60,
        annualRevenue: 360000,
        expenses: 420000,
        net: -60000,
        description: 'Investment phase - Building product suite and initial customer acquisition'
    },
    {
        year: 2,
        customers: 2000,
        arpu: 85,
        annualRevenue: 2040000,
        expenses: 1200000,
        net: 840000,
        description: 'Growth phase - Scaling sales and expanding product features'
    },
    {
        year: 3,
        customers: 6000,
        arpu: 110,
        annualRevenue: 7920000,
        expenses: 3500000,
        net: 4420000,
        description: 'Scale phase - Market leadership and profitability'
    }
];

// ============================================
// GO-TO-MARKET ROADMAP
// ============================================

export const GTM_ROADMAP: RoadmapPhase[] = [
    {
        phase: '1',
        title: 'Early Adoption',
        timeframe: 'Q1-Q2 2026',
        description: 'Launch MVP and validate product-market fit',
        milestones: [
            'Launch Inventory AI beta',
            'Acquire first 100 customers',
            'Achieve $10k MRR',
            'Founder-led sales'
        ]
    },
    {
        phase: '2',
        title: 'Scale & Expand',
        timeframe: 'Q3-Q4 2026',
        description: 'Expand product suite and accelerate growth',
        milestones: [
            'Launch Trading Vision AI',
            'Launch TikTok Uploader',
            'Reach 500 customers',
            'Build sales team'
        ]
    },
    {
        phase: '3',
        title: 'Market Leadership',
        timeframe: 'Q1-Q2 2027',
        description: 'Achieve category leadership and profitability',
        milestones: [
            'Launch remaining products',
            'Enterprise partnerships',
            'Reach profitability',
            'International expansion'
        ]
    }
];

// ============================================
// FUNDING INFORMATION
// ============================================

export const FUNDING: FundingInfo = {
    seeking: '$750,000 - $1,200,000',
    useOfFunds: [
        {
            category: 'Product Development',
            percentage: 40,
            description: 'Engineering team expansion, product features, infrastructure'
        },
        {
            category: 'Marketing & Sales',
            percentage: 25,
            description: 'Customer acquisition, brand building, sales team'
        },
        {
            category: 'AI Research & Data',
            percentage: 20,
            description: 'Model training, data acquisition, ML infrastructure'
        },
        {
            category: 'Operations & Legal',
            percentage: 15,
            description: 'Administrative, legal, compliance, accounting'
        }
    ],
    exitStrategy: [
        'Acquisition by SaaS giants (Shopify, Salesforce, Microsoft)',
        'Strategic buyout by industry players',
        'Long-term profitable growth with dividend potential'
    ]
};

// ============================================
// MARKET OPPORTUNITY
// ============================================

export const MARKET: MarketMetrics = {
    tam: '$280B',
    sam: '$28B',
    som: '$2.8B',
    growthRate: '22.5% CAGR'
};

// ============================================
// COMPANY VISION & MISSION
// ============================================

export const VISION = 'To become a globally trusted AI SaaS infrastructure provider for commerce, automation, and financial intelligence.';

export const MISSION_PILLARS = [
    {
        title: 'Predict Demand',
        description: 'Eliminate guesswork with AI-powered forecasting',
        icon: 'Brain'
    },
    {
        title: 'Optimize Operations',
        description: 'Automate repetitive tasks and workflows',
        icon: 'Settings'
    },
    {
        title: 'Reduce Errors',
        description: 'Remove human error from critical processes',
        icon: 'ShieldCheck'
    },
    {
        title: 'Increase Profitability',
        description: 'Maximize margins through intelligent decisions',
        icon: 'TrendingUp'
    },
    {
        title: 'Scale Globally',
        description: 'Built for international commerce from day one',
        icon: 'Globe'
    }
];

// ============================================
// WHY PIXCIDENT WINS
// ============================================

export const COMPETITIVE_ADVANTAGES = [
    {
        title: 'Multiple Revenue Engines',
        description: '5 independent products with cross-selling synergy',
        icon: 'Layers'
    },
    {
        title: 'High Switching Costs',
        description: 'Deep integrations create customer lock-in',
        icon: 'Lock'
    },
    {
        title: 'AI-First Architecture',
        description: 'Built on modern ML infrastructure, not retrofitted',
        icon: 'Cpu'
    },
    {
        title: 'Product Synergy',
        description: 'Products work together to create ecosystem value',
        icon: 'Link'
    },
    {
        title: 'Global Scalability',
        description: 'Cloud-native, multi-currency, multi-language ready',
        icon: 'Zap'
    }
];

// ============================================
// UPDATED DONATION TIERS
// ============================================

export const DONATION_TIERS_UPDATED = [
    {
        name: 'Supporter',
        amount: 25,
        perks: [
            'Name in supporters list',
            'Early access to open-source tools',
            'Monthly AI research newsletter'
        ]
    },
    {
        name: 'Contributor',
        amount: 100,
        perks: [
            'All Supporter perks',
            'Beta access to experimental features',
            'Quarterly AI education webinars',
            'Community Discord access'
        ],
        popular: true
    },
    {
        name: 'Visionary',
        amount: 500,
        perks: [
            'All Contributor perks',
            '1-on-1 technical consultation',
            'Early access to research papers',
            'Custom AI tool request'
        ]
    },
    {
        name: 'Research Partner',
        amount: 1000,
        perks: [
            'All Visionary perks',
            'Named recognition in publications',
            'Advisory board consideration',
            'White-label tool licensing'
        ]
    }
];

export const DONATION_PURPOSE = {
    title: 'Support the Future of Ethical, Accessible AI',
    description: 'Your contributions fund open-source AI tools, privacy-first research, and AI education for underserved communities.',
    impactAreas: [
        {
            title: 'Open-Source Tools',
            description: 'Build and release AI tools that anyone can use',
            icon: 'Code'
        },
        {
            title: 'AI Education',
            description: 'Free courses and workshops for aspiring AI developers',
            icon: 'GraduationCap'
        },
        {
            title: 'Privacy-First AI',
            description: 'Research into local, privacy-preserving AI systems',
            icon: 'Shield'
        },
        {
            title: 'Accessible AI',
            description: 'Make AI tools work for small businesses, not just enterprises',
            icon: 'Heart'
        }
    ]
};
