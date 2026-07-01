import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";

export const CTASection = () => {
  const { content } = useData();
  const homeText = content.pageTexts?.home || {};
  
  const ctaTitle = homeText.ctaTitle || "Ready to scale your tech team?";
  const ctaDescription = homeText.ctaDescription || "Connect with Procyon Solutions to discover how our IT recruiting & staffing services can help you scale your engineering team and drive software growth.";
  const ctaButtonText = homeText.ctaButtonText || "Contact Us Now";

  return (
    <section 
      className="relative py-16 md:py-24 bg-[#0076d6] text-white font-sans antialiased"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 118, 214, 0.88), rgba(0, 118, 214, 0.88)), url("/procyn-consulting.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '25px 25px',
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              {ctaTitle}
            </h2>

            <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-xl">
              {ctaDescription}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact">
                <Button
                  className="bg-[#1d1d1d] text-white hover:bg-[#333333] px-6 py-5 h-auto text-xs font-bold uppercase tracking-wider rounded-none transition-all"
                >
                  <span>{ctaButtonText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  className="bg-transparent border border-white text-white hover:bg-white/15 px-6 py-5 h-auto text-xs font-bold uppercase tracking-wider rounded-none transition-all"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Dell Styled Flat Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative bg-white text-[#1d1d1d] rounded-none p-6 md:p-8 border border-white/20 shadow-2xl text-left">
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e3e8ed] flex items-center justify-center rounded-none text-[#0076d6]">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#1d1d1d]">
                    Get Free Recruiting Strategy Session
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
                  Expert guidance for your technical scaling and recruitment needs. Let's discuss your talent pipeline and design a custom recruitment plan.
                </p>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e5e5e5] text-center">
                  <div>
                    <div className="text-lg md:text-xl font-bold text-[#0076d6] mb-1">24/7</div>
                    <div className="text-[10px] text-[#777777] uppercase font-bold tracking-wider">Support</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-[#0076d6] mb-1">100%</div>
                    <div className="text-[10px] text-[#777777] uppercase font-bold tracking-wider">Client Focus</div>
                  </div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-[#0076d6] mb-1">Free</div>
                    <div className="text-[10px] text-[#777777] uppercase font-bold tracking-wider">Consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
