import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useData } from "@/context/DataContext";
import { initialPageTexts } from "@/data/pageContentData";

export const HeroSection = () => {
  const { content } = useData();
  const homeTexts = content?.pageTexts?.home || initialPageTexts.home || {};

  const heroLabel = homeTexts.heroLabel || "IT Recruiting & Technical Staffing";
  const heroTitle = homeTexts.heroTitle || "Smartest Path to Tech Talent Success";
  const heroDescription = homeTexts.heroDescription || "Unlock the full potential of your organization. Procyon Solutions provides industry-leading IT recruitment, contract staffing, executive search, and custom developer sourcing designed to deliver measurable results.";

  return (
    <section className="relative bg-white pt-[75px] md:pt-[127px] pb-2 font-sans antialiased text-[#1d1d1d]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Promo Banner Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#e5e5e5] rounded-none overflow-hidden min-h-[440px]">
          {/* Left Side: Light Gray Promo Information */}
          <div className="lg:col-span-5 bg-[#f4f6f8] p-8 md:p-12 flex flex-col justify-center text-left space-y-6">
            {heroLabel && (
              <span className="text-[11px] font-bold tracking-widest text-[#0076d6] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {heroLabel}
              </span>
            )}
            
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1d1d1d] leading-tight">
              {heroTitle}
            </h2>
            
            <p className="text-xs md:text-sm text-[#555555] leading-relaxed">
              {heroDescription}
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Link to="/products">
                <button className="bg-[#1d1d1d] hover:bg-[#333333] text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-none transition-colors">
                  Hiring Solutions
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-transparent hover:bg-black/5 text-[#1d1d1d] border border-[#1d1d1d] text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-none transition-colors">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side: Dell Blue & Tech Presentation */}
          <div className="lg:col-span-7 bg-[#0076d6] relative flex items-center justify-center min-h-[300px] lg:min-h-auto overflow-hidden">
            {/* Visual background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-blue-900/60 pointer-events-none z-0" />
            
            {/* Tech Plexus Background video inside the promo banner right column */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            >
              <source src="/hero-video-bg.mp4" type="video/mp4" />
            </video>
            
            {/* White overlay border and text tag */}
            <div className="relative z-10 p-8 text-center text-white space-y-3">
              <div className="border-2 border-white/30 backdrop-blur-sm bg-black/20 p-6 md:p-8 max-w-md mx-auto space-y-4">
                <h3 className="text-xl md:text-2xl font-light uppercase tracking-wider">
                  Next-Gen IT Staffing
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Discover how our technical recruiters deliver robust, vetted software developers and tech experts tailored to your workflows.
                </p>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:underline uppercase tracking-wider">
                  <span>View Services Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
