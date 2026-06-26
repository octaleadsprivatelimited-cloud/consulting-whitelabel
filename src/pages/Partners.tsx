import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useData } from "@/context/DataContext";
import { Link } from "react-router-dom";

const Partners = () => {
  const seo = useSEO();
  const { content } = useData();
  const partnerBenefits = content.partnerBenefits || [];
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.partners || {
    heroTitle: "Partners",
    heroDescription: "Join our partner network and grow your business with Procyon Solutions.",
    heroLabel: "PARTNER PROGRAM",
    ctaButtonText: "Become a Partner",
    sectionTag: "Partnership Opportunities",
    sectionTitle: "Grow Your Business With Us",
    sectionDescription: "Join our partner network and unlock new opportunities for growth and success."
  };
  
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-neutral-900 selection:bg-[#0067b8] selection:text-white">
      <SEO {...seo} />
      <Navbar />

      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.heroLabel}
        breadcrumbs={[
          { label: "Partners" }
        ]}
        backgroundImage="/sangrinyx_partners.jpeg"
        backgroundPosition="90% center"
        backgroundSize="auto 100%"
        mobileBackgroundPosition="center"
        mobileBackgroundSize="cover"
      />

      {/* Partnership Opportunities Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="border-b border-neutral-200 pb-4 mb-12 text-left">
            {textContent.sectionTag && (
              <span className="text-xs font-bold tracking-wider text-[#0076d6] uppercase block mb-1">
                {textContent.sectionTag}
              </span>
            )}
            <h2 className="text-xl md:text-2xl font-light text-neutral-900 tracking-tight">
              {textContent.sectionTitle}
            </h2>
            {textContent.sectionDescription && (
              <p className="text-xs md:text-sm text-neutral-600 mt-1 leading-relaxed">
                {textContent.sectionDescription}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {partnerBenefits.slice(0, 4).map((benefit, index) => {
              const Icon = (LucideIcons as any)[benefit.iconName] || LucideIcons.Handshake;
              return (
                <div
                  key={benefit.title}
                  className="group flex flex-col justify-between p-6 border border-neutral-200 bg-white hover:border-neutral-350 hover:shadow-md transition-all rounded-none"
                >
                  <div className="space-y-4">
                    {/* Icon container */}
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-[#0076d6] rounded-none">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;