import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";

export const FeaturesSection = () => {
  const { content } = useData();
  
  const sectionTitle = content.pageTexts?.home?.sectionTitle || "Delivering Recruitment Excellence Across the Tech Ecosystem.";
  const featuresList = content.homeFeatures || [];

  return (
    <section 
      className="relative py-16 md:py-24 bg-[#08121d] text-white font-sans antialiased"
      style={{
        backgroundImage: 'linear-gradient(rgba(8, 18, 29, 0.88), rgba(8, 18, 29, 0.88)), url("/procyn-consulting.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-left border-b border-white/10 pb-6">
          <span className="text-[11px] font-semibold text-[#0076d6] uppercase tracking-widest block mb-2">
            Procyon Solutions Showcase
          </span>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Features Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresList.map((feature, index) => {
            const IconComponent = (Icons as any)[feature.iconName] || Icons.Award;
            return (
              <motion.div
                key={feature.id || feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative flex flex-col justify-between bg-[#e3e8ed] text-[#1d1d1d] rounded-none p-6 pt-12 min-h-[260px] border border-[#d2d2d2] hover:shadow-xl transition-all"
              >
                {/* Dell-inspired Top-Left Tag Label */}
                <div className="absolute top-0 left-0 bg-[#1d1d1d] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-none z-10">
                  {feature.title.split(" ")[0]}
                </div>

                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-white/60 border border-[#d2d2d2] flex items-center justify-center rounded-none mb-2">
                    <IconComponent className="w-5 h-5 text-[#0076d6]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#1d1d1d]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Explore link */}
                <div className="pt-4 border-t border-gray-300 mt-4">
                  <Link
                    to={feature.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0076d6] hover:text-[#005ba3] hover:underline uppercase tracking-wider"
                  >
                    <span>{feature.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
