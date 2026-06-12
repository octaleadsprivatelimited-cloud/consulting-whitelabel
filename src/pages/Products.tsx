import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";

const Products = () => {
  const seo = useSEO();
  const { content } = useData();

  const productsPageText = content.pageTexts?.productsPage || {};
  const productsList = content.products || [];

  const heroLabel = productsPageText.heroLabel || "TALENT SOLUTIONS";
  const heroTitle = productsPageText.heroTitle || "Our Talent Solutions";
  const heroDescription = productsPageText.heroDescription || "Explore our suite of industry-leading tech staffing, direct hiring, and executive recruitment solutions.";
  
  const ctaTitle = productsPageText.ctaTitle || "Ready to Get Started?";
  const ctaDescription = productsPageText.ctaDescription || "Contact our technical recruiting experts to discuss your staffing requirements.";
  const ctaButtonText = productsPageText.ctaButtonText || "Contact Recruiting Team";

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-neutral-900 selection:bg-[#0067b8] selection:text-white">
      <SEO {...seo} />
      <Navbar />

      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={heroTitle}
        description={heroDescription}
        label={heroLabel}
        breadcrumbs={[
          { label: "Products" }
        ]}
        blueBackground={true}
      />

      {/* Products Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="space-y-16 md:space-y-24">
            {productsList.map((product, index) => {
              // Map icon component if specified, default to CheckCircle
              const IconComponent = (Icons as any)[product.iconName] || Icons.CheckCircle;
              return (
                <div
                  key={product.id || product.title}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center border-b border-neutral-100 pb-16 last:border-0 last:pb-0 text-left"
                >
                  <div className={`lg:col-span-7 space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-neutral-100 flex items-center justify-center text-[#0076d6] rounded-none">
                        <IconComponent className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <p className="text-[#0076d6] font-bold text-xs uppercase tracking-wider">{product.subtitle}</p>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-light text-[#1d1d1d] tracking-tight">
                      {product.title}
                    </h2>
                    
                    <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
                      {product.description}
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features?.map((feature: string) => (
                        <li key={feature} className="flex items-center gap-3 text-[#555555] text-xs">
                          <CheckCircle className="w-4 h-4 text-[#0076d6] shrink-0 rounded-none" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-2">
                      <Link 
                        to={product.link || "/solutions"}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0076d6] hover:text-[#005ba3] hover:underline uppercase tracking-wider"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[16/10] overflow-hidden border border-neutral-350 bg-neutral-250 p-2 shadow-md rounded-none">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover object-center rounded-none"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="py-16 md:py-20 bg-[#f5f5f5] border-t border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">
              {ctaTitle}
            </h2>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              {ctaDescription}
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button className="bg-[#1d1d1d] text-white hover:bg-[#333333] px-6 py-3 h-auto text-xs font-semibold rounded-none uppercase tracking-wider">
                  {ctaButtonText}
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

export default Products;
