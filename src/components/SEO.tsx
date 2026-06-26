import { Helmet } from "react-helmet-async";
import { useData } from "@/context/DataContext";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const { content } = useData();

  // Branding configuration resolving with fallback to defaults
  const companyName = content?.branding?.companyName || "Procyon Solutions";
  const brandName = content?.branding?.brandName || "Procyon Solutions";
  const domain = content?.branding?.domain || "procyonsol.com";
  const twitterHandle = content?.branding?.twitterHandle || "Procyon Solutions";
  const logoUrl = content?.branding?.logoUrl || "/logo.png";

  const resolvedOgImage = ogImage || `https://${domain}${logoUrl}`;

  // Replace default branding names in metadata dynamically to make it whitelabel
  const rawTitle = title || "";
  const rawDesc = description || "";
  const rawKeywords = keywords || "";

  const finalTitle = rawTitle
    .replace(/Procyon Solutions/gi, companyName)
    .replace(/Procyon Solutions/gi, brandName);

  const finalDesc = rawDesc
    .replace(/Procyon Solutions/gi, companyName)
    .replace(/Procyon Solutions/gi, brandName);

  const finalKeywords = rawKeywords
    .replace(/Procyon Solutions/gi, companyName)
    .replace(/Procyon Solutions/gi, brandName);

  const fullTitle = finalTitle.includes(brandName) ? finalTitle : `${finalTitle} | ${companyName}`;

  // Ensure canonical URL is always absolute and reflects the active domain
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const canonicalUrl = canonical 
    ? canonical.replace(/procyonsol\.com/gi, domain) 
    : `https://${domain}${currentPath}`;
  const ogUrl = `https://${domain}${currentPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={companyName} />
      <meta name="pagename" content={finalTitle} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.svg" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:secure_url" content={resolvedOgImage} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={brandName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image:alt" content={`${finalTitle} - ${companyName}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:image:alt" content={`${finalTitle} - ${companyName}`} />
      <meta name="twitter:site" content={`@${twitterHandle}`} />
      <meta name="twitter:creator" content={`@${twitterHandle}`} />
      
      {/* Additional SEO Meta Tags */}
      {finalKeywords && <meta name="subject" content={finalKeywords.split(", ").slice(0, 5).join(", ")} />}
      <meta name="classification" content="Business, Technology, Software, Recruitment, Staffing, Sourcing Services" />
      <meta name="category" content="Technology, Recruiting, Staffing, Sourcing" />
      <meta name="topic" content={finalTitle} />
      <meta name="summary" content={finalDesc} />
      <meta name="abstract" content={finalDesc} />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

