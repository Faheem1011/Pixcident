import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Pixcident - Creative Studio",
  description = "Full-spectrum creative studio: Photorealistic 3D visualization, Unreal Engine game development, architectural rendering, motion graphics & VFX, AI-powered workflows. Excellence in every pixel.",
  image = "/assets/pixcident owner.png",
  url = "https://pixcident.com",
  type = "website"
}) => {
  const siteTitle = title === "Pixcident - Creative Studio" ? title : `${title} | Pixcident`;
  const fullUrl = url.startsWith('http') ? url : `https://pixcident.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://pixcident.com${image}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Pixcident" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO;
