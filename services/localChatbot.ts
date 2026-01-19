/**
 * FREE Local Chatbot - No API Required!
 * Smart pattern matching with StoryBrand sales messaging
 */

interface ChatPattern {
    keywords: string[];
    category: string;
    responses: string[];
}

// StoryBrand-focused responses organized by topic
const chatPatterns: ChatPattern[] = [
    // 3D & Product Visualization
    {
        keywords: ['3d', 'render', 'product', 'visualization', 'model', 'cgi', 'mockup', 'prototype'],
        category: '3d',
        responses: [
            "Perfect! Our 3D Product Renders let you **show customers exactly what they're getting before manufacturing**. This eliminates imagination gaps and drives pre-orders. E-commerce clients see 40% fewer returns. Want to see what we can create for your products?",
            "Great question! With our photorealistic 3D renders, you can **sell products before they exist**. No more losing sales to 'I need to see it first.' Plus, combined with our web development, you'll have a store that converts 3x better. Ready to discuss your project?",
            "3D visualization is our specialty! We create broadcast-quality renders for e-commerce, investor pitches, and marketing. **Stop losing sales to competitors with better visuals.** Shall we bring your products to life?"
        ]
    },

    // Website & Web Development
    {
        keywords: ['website', 'web', 'site', 'slow', 'loading', 'seo', 'convert', 'online', 'ecommerce', 'landing'],
        category: 'web',
        responses: [
            "A slow website costs you customers every second! Our sites **load in under 2 seconds and convert 3x better**. Built with React, Next.js, and SEO best practices from day one. Your bounce rate drops, your sales increase. Ready to stop losing revenue to loading screens?",
            "Perfect timing! We build lightning-fast websites that turn visitors into paying customers. **Every second of load time costs you 7% in conversions.** Our sites are optimized for speed, SEO, and conversions. Want to see what a high-performance site can do for you?",
            "Your website should sell while you sleep! We create conversion-optimized sites that **rank higher in search and convert visitors 3x better**. Stop blending in with generic templates. Shall we discuss your web project?"
        ]
    },

    // Architecture & Real Estate
    {
        keywords: ['architecture', 'archviz', 'real estate', 'property', 'building', 'interior', 'vr', 'walkthrough', 'render'],
        category: 'archviz',
        responses: [
            "Excellent! Our Architectural Visualization service lets you **sell properties before construction starts**. Photorealistic renders and VR walkthroughs close deals faster and win investor confidence. Real estate agents see 60% faster sales. Ready to show them the future?",
            "Buyers won't invest in blueprints. Investors need to **see the finished vision**. We create immersive VR walkthroughs and photorealistic renders that make properties tangible. Stop losing opportunities to 'we'll wait until it's built.' Want to explore this?",
            "ArchViz is our expertise! We create luxury interior renders and dramatic exteriors with lifelike lighting. **Developers secure funding easier** with our visuals. Shall we bring your architectural project to life?"
        ]
    },

    // Game Development & Unreal Engine
    {
        keywords: ['game', 'unreal', 'interactive', 'immersive', 'experience', 'simulation', 'configurator', 'virtual'],
        category: 'gamedev',
        responses: [
            "Static presentations don't engage modern audiences! We build **photorealistic game environments using Unreal Engine 5** that immerse users in your world. Perfect for product configurators, training simulations, and virtual showrooms. Your audience stays engaged longer. Ready to create an unforgettable experience?",
            "Unreal Engine 5 is our playground! We create **interactive experiences that captivate and convert**. From pixel-streaming web deployables to full VR experiences, we make your message stick. Stop competing with boring PDFs. Want to give them something to remember?",
            "Immersive experiences are the future! Our game dev expertise includes **product configurators, training sims, and virtual showrooms**. Users engage 10x longer than static content. Shall we discuss your interactive project?"
        ]
    },

    // Motion Graphics & Social Media
    {
        keywords: ['video', 'motion', 'animation', 'social', 'vfx', 'viral', 'instagram', 'tiktok', 'reel', 'content'],
        category: 'motion',
        responses: [
            "Your social content gets lost in the scroll! We create **motion graphics that stop thumbs in the first 3 seconds**. Your brand campaigns stand out, product launches go viral, engagement multiplies. Stop blending in with generic content. Ready to demand attention?",
            "Perfect! Our Motion Graphics capture attention fast. **Static posts get ignored, boring videos get skipped.** We make scroll-stopping VFX and dynamic animations that people actually watch. Want to make your brand unforgettable?",
            "Social media moves fast! Our motion work creates **viral-worthy content** for product launches and brand campaigns. From logo reveals to full VFX compositing, we make content that converts. Shall we discuss your next campaign?"
        ]
    },

    // AI & Automation
    {
        keywords: ['ai', 'automation', 'scale', 'workflow', 'automate', 'efficiency', 'agent', 'manual', 'process'],
        category: 'ai',
        responses: [
            "Drowning in manual tasks? Our AI automation **scales your creative output 10x without hiring more people**. Your team focuses on strategy, not busywork. Maintain quality while moving faster. Every day trading time for output is an opportunity lost. Ready to scale intelligently?",
            "Perfect timing! Manual work keeps you from scaling. We build **custom AI agents that automate research, content generation, and workflows**. Scale output without scaling headcount. Stop letting repetitive tasks waste creative talent. Want to explore automation?",
            "AI is a game-changer! We create **autonomous content pipelines and privacy-first AI setups** that give you leverage to compete with teams 10x your size. Stop trading time for output. Shall we discuss your automation needs?"
        ]
    },

    // Pricing & Cost
    {
        keywords: ['price', 'cost', 'budget', 'expensive', 'cheap', 'afford', 'quote', 'rate', 'fee'],
        category: 'pricing',
        responses: [
            "Great question! **Every project is unique**, so pricing varies based on scope and complexity. The real question is: what's the cost of NOT having professional visuals? Lost sales, missed opportunities, investor rejections. Let's discuss your specific needs and I'll make sure you get maximum ROI. Ready for a free consultation?",
            "Investment in professional visuals **pays for itself in closed deals and conversions**. We offer flexible packages based on your goals. Many clients see 3x ROI within months. Want to discuss your project scope for an accurate quote?",
            "Pricing depends on your needs, but think of it this way: **every day without professional visuals costs you revenue**. Our clients typically see their investment returned within the first few projects. Shall we schedule a free consultation to discuss your budget and goals?"
        ]
    },

    // Timeline & Speed
    {
        keywords: ['timeline', 'fast', 'quick', 'urgent', 'deadline', 'time', 'long', 'duration', 'deliver'],
        category: 'timeline',
        responses: [
            "We move fast! Most projects take **7-14 days from concept to delivery**, depending on complexity. Rush projects available. We understand that **time is opportunity**—the sooner you launch with professional visuals, the sooner you start converting. Want to discuss your deadline?",
            "Speed is our strength! Initial concepts delivered in **3 days**, full projects in 1-2 weeks. We know **every day without professional visuals is revenue left on the table**. Ready to fast-track your project?",
            "Timeline varies by project, but we prioritize speed without compromising quality. Typical turnaround: **3 days for concepts, 10 days for completion**. Have a tight deadline? Let's make it happen. Want to discuss your timeline?"
        ]
    },

    // General Questions
    {
        keywords: ['hello', 'hi', 'hey', 'start', 'help', 'services', 'offer', 'do'],
        category: 'greeting',
        responses: [
            "👋 Hi! I'm here to help you **bring your vision to life**. Whether you need stunning 3D renders, a lightning-fast website, or AI-powered automation—I can show you how Pixcident solves your challenges. What are you looking to achieve?",
            "Welcome! Pixcident specializes in turning ideas into reality. We offer **3D visualization, web development, Unreal Engine experiences, motion graphics, AI automation,** and more. What problem can I help you solve today?",
            "Hey there! Looking to **stop losing sales to poor visuals?** We create photorealistic renders, conversion-optimized websites, and immersive experiences that make your vision impossible to ignore. What's your biggest challenge right now?"
        ]
    },

    // Contact & Next Steps
    {
        keywords: ['contact', 'email', 'call', 'meeting', 'schedule', 'consultation', 'talk', 'discuss', 'reach'],
        category: 'contact',
        responses: [
            "Excellent! Let's make this happen. **Contact us at Contact@pixcident.com** or fill out the contact form on this page. We typically respond within 24 hours with a free consultation. Ready to transform your vision into reality?",
            "Perfect! The best next step is a **free consultation**. Email us at Contact@pixcident.com or use the contact form below. We'll discuss your goals, recommend the right services, and provide a detailed quote. Sound good?",
            "I'd love to connect you with our team! **Email: Contact@pixcident.com** or scroll down to the contact form. We'll schedule a free 30-minute consultation to explore how we can help. Excited to work with you!"
        ]
    }
];

// Fallback responses for when no pattern matches
const fallbackResponses = [
    "That's a great question! While I'm still learning, I can tell you that **Pixcident excels at solving visual and technical challenges**. Whether it's 3D renders, websites, game dev, or AI automation—we position you ahead of competitors. Want to tell me more about what you're trying to achieve?",
    "Interesting! Let me connect you with the right solution. We specialize in **making your vision tangible** through 3D visualization, web development, immersive experiences, and automation. What's your biggest challenge right now?",
    "I want to make sure I give you the best answer! Could you tell me more about your project? Are you looking to **improve conversions, create stunning visuals, automate workflows,** or something else? Then I can recommend the perfect service."
];

// Cross-sell suggestions based on service combinations
const crossSellSuggestions: Record<string, string> = {
    '3d_web': "💡 **Pro Tip**: Combining 3D renders with our web development creates a powerful sales system—stunning visuals on a lightning-fast site that converts 3x better!",
    'web_ai': "💡 **Power Combo**: Pair our web dev with AI automation to scale your content creation while maintaining a high-performance site!",
    'archviz_motion': "💡 **Marketing Boost**: ArchViz + Motion Graphics = property videos that go viral on social media! Perfect for pre-sales.",
    '3d_motion': "💡 **Launch Package**: 3D renders + motion graphics = the ultimate product launch combo for social and web!"
};

/**
 * Smart pattern matching - finds best response based on keywords
 */
function findBestMatch(message: string): { response: string; category: string } {
    const lowerMessage = message.toLowerCase();
    let bestMatch: ChatPattern | null = null;
    let maxScore = 0;

    // Score each pattern based on keyword matches
    chatPatterns.forEach(pattern => {
        const score = pattern.keywords.filter(keyword =>
            lowerMessage.includes(keyword)
        ).length;

        if (score > maxScore) {
            maxScore = score;
            bestMatch = pattern;
        }
    });

    // If we found a good match (at least one keyword)
    if (bestMatch && maxScore > 0) {
        const randomResponse = bestMatch.responses[
            Math.floor(Math.random() * bestMatch.responses.length)
        ];
        return { response: randomResponse, category: bestMatch.category };
    }

    // Fallback response
    const randomFallback = fallbackResponses[
        Math.floor(Math.random() * fallbackResponses.length)
    ];
    return { response: randomFallback, category: 'general' };
}

/**
 * Check for cross-sell opportunities
 */
function getCrossSell(categories: string[]): string | null {
    const sortedCategories = [...new Set(categories)].sort().join('_');
    return crossSellSuggestions[sortedCategories] || null;
}

/**
 * Main function: Generate chatbot response
 */
export async function generateLocalChatResponse(
    userMessage: string,
    conversationHistory: string[] = []
): Promise<string> {
    // Simulate slight delay for natural feel
    await new Promise(resolve => setTimeout(resolve, 500));

    const { response, category } = findBestMatch(userMessage);

    // Check if we should add a cross-sell based on conversation history
    const categories = [category];
    conversationHistory.forEach(msg => {
        const { category: historyCategory } = findBestMatch(msg);
        if (historyCategory !== 'general' && historyCategory !== 'greeting') {
            categories.push(historyCategory);
        }
    });

    const crossSell = getCrossSell(categories);

    // Return response with optional cross-sell
    return crossSell ? `${response}\n\n${crossSell}` : response;
}
