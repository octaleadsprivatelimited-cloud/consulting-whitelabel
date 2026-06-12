import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";

const Industries = () => {
  const seo = useSEO();
  const { content } = useData();
  const industries = content.industries || [];
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.industries || {
    heroTitle: "Industry-Focused SAP Solutions That Deliver Business Value",
    heroDescription: "We design and deliver SAP solutions tailored to the unique processes and challenges of different industries.",
    sectionTag: "Industries We Serve",
    sectionTitle: "Seven Industry Verticals. One Unified SAP Platform."
  };
  
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1d1d1d] selection:bg-[#0067b8] selection:text-white">
      <SEO {...seo} />
      <Navbar />

      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.sectionTag}
        breadcrumbs={[
          { label: "Industries" }
        ]}
        backgroundImage="/industries hero section background.png"
        industryBackground={true}
      />

      {/* Industries Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Grid Title */}
          <div className="mb-12 border-b border-neutral-200 pb-4 text-left">
            <h2 className="text-xl md:text-2xl font-light text-neutral-950">
              {textContent.sectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-left">
            {industries.map((industry) => {
              const Icon = (LucideIcons as any)[industry.iconName] || LucideIcons.Building2;
              return (
                <div 
                  key={industry.title}
                  className="group border border-neutral-200 bg-white flex flex-col justify-between rounded-none hover:border-neutral-350 hover:shadow-md transition-all"
                >
                  <Link to={`/industries/${industry.slug}`} className="flex flex-col h-full">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200 bg-neutral-100 rounded-none">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] rounded-none"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="text-[#0076d6] bg-neutral-100 p-1.5 flex items-center justify-center shrink-0 rounded-none">
                            <Icon className="w-4 h-4" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                            {industry.title}
                          </h3>
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                          {industry.description}
                        </p>
                      </div>
                      
                      <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#0076d6] group-hover:underline uppercase tracking-wider">
                        <span>Explore {industry.title.toLowerCase()}</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
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

export default Industries;
