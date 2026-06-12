import React from "react";
import { useParams, Link } from "react-router-dom";
import { useData } from "@/context/DataContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";
import NotFound from "./NotFound";
import { cleanMarkdown } from "@/lib/utils";

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { content, loading } = useData();

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-[#1d1d1d]">
        <div className="animate-spin rounded-none h-10 w-10 border-t-2 border-b-2 border-[#0076d6]"></div>
      </div>
    );
  }

  // Find the custom page
  const page = content.customPages?.find(p => p.slug === slug);
  if (!page) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1d1d1d] flex flex-col">
      <SEO 
        title={`${page.title} | Octaleads`}
        description={page.description}
      />
      <Navbar />
      
      <main className="flex-grow">
        {(page.sections || []).map((section, idx) => {
          switch (section.type) {
            case "hero":
              return (
                <PageHero
                  key={idx}
                  title={cleanMarkdown(section.title || page.title)}
                  description={cleanMarkdown(section.subtitle || page.description)}
                  label="Enterprise Solutions"
                />
              );

            case "text":
              return (
                <section key={idx} className="py-16 md:py-24 bg-white border-b border-[#e5e5e5]">
                  <div className="container mx-auto px-4 max-w-4xl text-left">
                    {section.title && (
                      <h2 className="text-2xl md:text-3xl font-light text-[#1d1d1d] mb-8">
                        {cleanMarkdown(section.title)}
                      </h2>
                    )}
                    <div className="text-[#555555] leading-relaxed space-y-6 text-xs md:text-sm">
                      {section.content?.split("\n\n").map((para, pidx) => (
                        <p key={pidx}>{cleanMarkdown(para)}</p>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "features":
              return (
                <section key={idx} className="py-16 md:py-24 bg-white border-b border-[#e5e5e5]">
                  <div className="container mx-auto px-4 lg:px-8">
                    {(section.title || section.subtitle) && (
                      <div className="text-left max-w-3xl mb-12">
                        {section.title && (
                          <h2 className="text-2xl md:text-3xl font-light text-[#1d1d1d] mb-4">
                            {cleanMarkdown(section.title)}
                          </h2>
                        )}
                        {section.subtitle && (
                          <p className="text-xs md:text-sm text-[#555555]">
                            {cleanMarkdown(section.subtitle)}
                          </p>
                        )}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto text-left">
                      {section.items?.map((item, iidx) => {
                        const IconComponent = item.iconName ? (Icons as any)[item.iconName] || Icons.CheckCircle2 : Icons.CheckCircle2;
                        return (
                          <motion.div
                            key={iidx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: iidx * 0.08, duration: 0.5 }}
                            className="bg-[#f4f6f8] border border-[#d2d2d2] p-6 transition-all rounded-none hover:bg-white hover:shadow-lg"
                          >
                            <div className="w-10 h-10 rounded-none bg-[#e3e8ed] flex items-center justify-center mb-5 text-[#0076d6]">
                              <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-sm font-semibold text-[#1d1d1d] mb-3">{cleanMarkdown(item.title)}</h3>
                            <p className="text-xs text-[#555555] leading-relaxed mb-4">{cleanMarkdown(item.description)}</p>
                            {item.link && (
                              <Link 
                                to={item.link} 
                                className="inline-flex items-center text-xs font-bold text-[#0076d6] hover:text-[#005ba3] hover:underline uppercase tracking-wider gap-1"
                              >
                                <span>Learn More</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              );

            case "stats":
              return (
                <section key={idx} className="py-16 bg-[#f5f5f5] border-b border-[#e5e5e5]">
                  <div className="container mx-auto px-4 max-w-5xl">
                    {section.title && (
                      <h2 className="text-xl md:text-2xl font-light text-center text-[#1d1d1d] mb-10">
                        {cleanMarkdown(section.title)}
                      </h2>
                    )}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {section.items?.map((item, iidx) => (
                        <div key={iidx} className="text-center">
                          <div className="text-3xl md:text-4xl font-light text-[#0076d6] mb-2">
                            {cleanMarkdown(item.title)}
                          </div>
                          <div className="text-[10px] text-[#777777] uppercase tracking-wider font-bold">
                            {cleanMarkdown(item.description)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );

            case "cta":
              return (
                <section key={idx} className="py-16 md:py-20 bg-[#0076d6] text-white relative overflow-hidden">
                  <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-light mb-6">
                      {cleanMarkdown(section.title || "Ready to get started?")}
                    </h2>
                    <p className="text-xs md:text-sm text-white/90 mb-8 leading-relaxed">
                      {cleanMarkdown(section.subtitle || "Contact us today for a free assessment and consultation.")}
                    </p>
                    <Link to="/contact">
                      <button className="bg-[#1d1d1d] text-white hover:bg-[#333333] px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-none shadow-md transition-all inline-flex items-center gap-2">
                        <span>Get In Touch</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </section>
              );

            default:
              return null;
          }
        })}
      </main>
      
      <Footer />
    </div>
  );
};

export default DynamicPage;
