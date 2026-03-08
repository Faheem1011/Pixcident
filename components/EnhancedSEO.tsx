import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'profile';
    twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
    keywords?: string[];
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    noindex?: boolean;
}

const DEFAULT_SEO = {
    title: 'Pixcident | Design. Tech. Future.',
    description: 'Premium 3D visualization, web development, AI automation, and virtual environments. Transforming ideas into immersive digital experiences.',
    ogImage: 'https://pixcident.com/og-image.jpg',
    keywords: ['3D visualization', '3D animation', 'web development', 'AI automation', 'Unreal Engine', 'architectural visualization', 'product rendering', 'game development', 'SaaS development', 'creative studio'],
    author: 'Pixcident Creative Studio',
    canonical: 'https://pixcident.com'
};

export default function EnhancedSEO({
    title,
    description = DEFAULT_SEO.description,
    canonical,
    ogImage = DEFAULT_SEO.ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    keywords = DEFAULT_SEO.keywords,
    author = DEFAULT_SEO.author,
    publishedTime,
    modifiedTime,
    noindex = false
}: SEOProps) {
    const fullTitle = title ? `${title} | Pixcident` : DEFAULT_SEO.title;
    const url = canonical || DEFAULT_SEO.canonical;

    return (
        <Helmet prioritizeSeoTags>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
            <meta name="author" content={author} />
            <link rel="canonical" href={url} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Pixcident" />
            <meta property="og:locale" content="en_US" />

            {/* Article specific */}
            {ogType === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {ogType === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {ogType === 'article' && (
                <>
                    <meta property="article:author" content={author} />
                    <meta property="article:section" content="Technology" />
                    {keywords.map((keyword, index) => (
                        <meta key={index} property="article:tag" content={keyword} />
                    ))}
                </>
            )}

            {/* Twitter */}
            <meta property="twitter:card" content={twitterCard} />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />
            <meta property="twitter:creator" content="@pixcident" />

            {/* Additional SEO */}
            <meta name="theme-color" content="#030303" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </Helmet>
    );
}

// Structured Data Component
interface StructuredDataProps {
    type: 'Organization' | 'WebSite' | 'Service' | 'CreativeWork' | 'Article' | 'LocalBusiness' | 'SoftwareApplication' | 'FAQPage';
    data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
    const baseSchema = {
        '@context': 'https://schema.org',
        '@type': type,
        ...data
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(baseSchema)}
            </script>
        </Helmet>
    );
}

// Predefined structured data for Pixcident
export const PIXCIDENT_ORGANIZATION_SCHEMA = {
    name: 'Pixcident',
    alternateName: 'Pixcident Creative Studio',
    url: 'https://pixcident.com',
    logo: 'https://pixcident.com/logo.png',
    description: 'Premium 3D visualization, web development, AI automation, and virtual environments studio.',
    foundingDate: '2020',
    email: 'hello@pixcident.com',
    sameAs: [
        'https://twitter.com/pixcident',
        'https://linkedin.com/company/pixcident',
        'https://github.com/pixcident'
    ],
    contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'hello@pixcident.com',
        availableLanguage: ['English']
    }
};

export const PIXCIDENT_WEBSITE_SCHEMA = {
    url: 'https://pixcident.com',
    name: 'Pixcident',
    description: 'Premium creative studio specializing in 3D visualization and digital experiences',
    publisher: {
        '@type': 'Organization',
        name: 'Pixcident'
    },
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://pixcident.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
    }
};
