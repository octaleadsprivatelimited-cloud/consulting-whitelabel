import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";

const Resources = () => {
  const seo = useSEO();
  const { content } = useData();
  const resources = content.resources || [];
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.resources || {
    heroTitle: "Resources",
    heroDescription: "Access helpful resources, documentation, and materials to support your business journey.",
    heroLabel: "RESOURCE CENTER",
    ctaButtonText: "Explore Resources",
    sectionTitle: "Everything You Need. One Resource Hub.",
    ctaTitle: "Need More Help?",
    ctaDescription: "Can't find what you're looking for? Contact our team for personalized assistance."
  };
  
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-neutral-900 selection:bg-[#0067b8] selection:text-white">
      <SEO {...seo} />
      <Navbar />
      
      {/* Page Hero Section */}
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.heroLabel}
        breadcrumbs={[
          { label: "Resources" }
        ]}
      />

      {/* Resources Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-white" id="resources">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Section Header */}
          <div className="border-b border-neutral-200 pb-4 mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 tracking-tight">
              {textContent.sectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = (LucideIcons as any)[resource.iconName] || LucideIcons.Book;
              return (
                <div
                  key={resource.title}
                  className="group flex flex-col justify-between p-6 border border-neutral-200 bg-white hover:border-neutral-300 transition-colors"
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-neutral-700">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-semibold text-neutral-900">
                      {resource.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs md:text-sm text-neutral-600 leading-relaxed min-h-[60px]">
                      {resource.description}
                    </p>
                  </div>
                  
                  {/* Explore Link */}
                  <div className="pt-6">
                    <Link 
                      to={resource.link} 
                      className="inline-flex items-center text-xs font-semibold text-[#0067b8] hover:text-[#005a9e] transition-colors"
                    >
                      Explore {resource.title}
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="py-16 md:py-20 bg-[#f2f2f2] border-t border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
              {textContent.ctaTitle}
            </h2>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              {textContent.ctaDescription}
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button className="bg-[#0067b8] text-white hover:bg-[#005a9e] px-6 py-2 text-sm font-semibold rounded-none">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
