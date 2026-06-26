import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useData } from "@/context/DataContext";

export const WhyChooseUsSection = () => {
  const { content } = useData();
  
  const homeText = content.pageTexts?.home || {};
  const whyChooseTitle = homeText.whyChooseTitle || "Your Trusted Partner for Tech Recruitment Excellence";
  const whyChooseDescription = homeText.whyChooseDescription || "We combine deep technical vetting, a global network of pre-screened developers, and a client-first mindset to help organizations scale their tech teams with speed and precision.";
  const reasonsList = content.homeReasons || [];

  return (
    <section className="relative py-16 md:py-24 bg-white border-t border-[#e5e5e5] font-sans antialiased text-[#1d1d1d]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <span className="text-[11px] font-bold text-[#0076d6] uppercase tracking-widest block">
              Why Choose Procyon Solutions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1d1d1d] leading-tight">
              {whyChooseTitle}
            </h2>
            <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
              {whyChooseDescription}
            </p>
          </motion.div>

          {/* Right Content - Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasonsList.map((reason, index) => {
              const IconComponent = (Icons as any)[reason.iconName] || Icons.Trophy;
              return (
                <motion.div
                  key={reason.id || reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="bg-[#f4f6f8] p-6 rounded-none border border-[#d2d2d2] hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-[#e3e8ed] flex items-center justify-center rounded-none mb-4 text-[#0076d6]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1d1d1d] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
