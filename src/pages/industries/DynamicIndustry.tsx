import React from "react";
import { useParams, Link } from "react-router-dom";
import { useData } from "@/context/DataContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";
import NotFound from "../NotFound";
import { cleanMarkdown } from "@/lib/utils";

const DynamicIndustry = () => {
  const { slug } = useParams<{ slug: string }>();
  const { content, loading } = useData();

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-[#1d1d1d]">
        <div className="animate-spin rounded-none h-10 w-10 border-t-2 border-b-2 border-[#0076d6]"></div>
      </div>
    );
  }

  // Find industry by slug
  const industry = content.industries?.find(
    (ind) => ind.slug === slug || ind.id === slug
  );

  if (!industry) {
    return <NotFound />;
  }

  const IconComponent = (Icons as any)[industry.iconName] || Icons.Building2;

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1d1d1d] flex flex-col">
      <SEO 
        title={`${cleanMarkdown(industry.title)} Industry Talent | IT Staffing | Octaleads`}
        description={cleanMarkdown(industry.description)}
      />
      <Navbar />

      <main className="flex-grow">
        {/* Dell-inspired Page Hero */}
        <PageHero 
          title={cleanMarkdown(industry.title)}
          description={cleanMarkdown(industry.description)}
          label="INDUSTRY TALENT SOLUTIONS"
          breadcrumbs={[
            { label: "Industries", href: "/industries" },
            { label: cleanMarkdown(industry.title) }
          ]}
          backgroundImage={industry.image || "/industries hero section background.png"}
          industryBackground={true}
        />

        {/* Deliverables Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 text-left">
              
              {/* Left Column: Details & Capabilities */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-[#0076d6] bg-neutral-100 p-2 rounded-none">
                    <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-xs font-bold uppercase tracking-wider">Industry Capabilities</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light text-neutral-900 leading-tight">
                    Core Recruiting Capabilities
                  </h2>
                  <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                    We source and vet candidates tailored to the unique processes and technical requirements of the {cleanMarkdown(industry.title).toLowerCase()} sector. Maximize team output, onboarding speed, and execution control.
                  </p>
                </div>

                {/* Features / Modules checklist */}
                {industry.features && industry.features.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {industry.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="bg-[#f5f5f5] border border-neutral-200 p-4 flex items-start gap-3 rounded-none hover:bg-white hover:shadow-md transition-all duration-150"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#0076d6] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-xs font-semibold text-neutral-800 leading-tight">
                          {cleanMarkdown(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Framed Image & Consultation CTA */}
              <div className="lg:col-span-5 space-y-6">
                {/* Visual Representation */}
                <div className="relative border border-neutral-300 bg-neutral-100 overflow-hidden rounded-none aspect-[16/10] shadow-sm">
                  <img
                    src={industry.image || "/industries hero section background.png"}
                    alt={cleanMarkdown(industry.title)}
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>

                {/* CTA Box */}
                <div className="bg-[#f5f5f5] border border-neutral-200 p-6 md:p-8 space-y-4 rounded-none">
                  <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                    Speak to an Industry Expert
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Transform your team capabilities with vetted tech professionals who optimize productivity and drive operational excellence.
                  </p>
                  <div>
                    <Link to="/contact">
                      <button className="w-full bg-[#1d1d1d] hover:bg-[#333333] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-none transition-colors">
                        Schedule Consultation
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DynamicIndustry;
