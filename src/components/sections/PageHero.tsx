import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  label?: string;
  breadcrumbs?: { label: string; href?: string }[];
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  compact?: boolean;
  fullBackground?: boolean;
  textBgWhite?: boolean;
  extraPadding?: boolean;
  blueBackground?: boolean;
  industryBackground?: boolean;
  backgroundPosition?: string;
  mobileBackgroundPosition?: string;
  mobileBackgroundSize?: string;
  backgroundSize?: string;
}

export const PageHero = ({ 
  title, 
  description, 
  label,
  breadcrumbs = [],
  ctaText,
  ctaHref = "/contact",
  backgroundImage,
  compact = false,
  fullBackground = true,
  textBgWhite = true,
  extraPadding = true,
  blueBackground = false,
  industryBackground = false,
  backgroundPosition = "center",
  mobileBackgroundPosition,
  mobileBackgroundSize = "cover",
  backgroundSize = "cover"
}: PageHeroProps) => {
  const location = useLocation();
  const isResourcePage = location.pathname.startsWith("/resources");
  const isDarkText = !fullBackground || textBgWhite;
  const showBgImage = fullBackground && backgroundImage && !blueBackground && !industryBackground && !isResourcePage;

  return (
    <section 
      className={cn(
        "relative border-b border-[#e5e5e5] overflow-hidden text-left",
        showBgImage && "hero-bg-custom",
        compact 
          ? "pt-24 pb-8 md:pt-28 md:pb-10" 
          : extraPadding 
            ? "pt-32 pb-20 md:pt-44 md:pb-28"
            : "pt-24 pb-12 md:pt-32 md:pb-16",
        fullBackground && !textBgWhite && "text-white"
      )}
      style={
        isResourcePage
          ? {
              backgroundImage: 'radial-gradient(circle at 75% 30%, rgba(220, 38, 38, 0.35) 0%, transparent 65%), linear-gradient(135deg, #1e0505 0%, #0076d6 100%)'
            }
          : industryBackground
          ? {
              backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #0076d6 50%, #ffffff 100%)'
            }
          : blueBackground
          ? {
              backgroundImage: 'linear-gradient(135deg, #005aa3 0%, #f0f7ff 50%, #0076d6 100%)'
            }
          : showBgImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${backgroundImage})`,
              backgroundColor: '#020710',
              '--bg-pos-desktop': backgroundPosition,
              '--bg-pos-mobile': mobileBackgroundPosition || backgroundPosition,
              '--bg-size-desktop': backgroundSize,
              '--bg-size-mobile': mobileBackgroundSize
            } as React.CSSProperties
          : {
              backgroundColor: '#f4f6f8'
            }
      }
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Breadcrumbs outside the white box if textBgWhite is false */}
        {breadcrumbs.length > 0 && !textBgWhite && (
          <motion.nav
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "mb-6 flex items-center gap-1.5 text-xs",
              isDarkText ? "text-[#555555]" : "text-gray-300"
            )}
          >
            <Link to="/" className={cn("transition-colors flex items-center", isDarkText ? "hover:text-[#0076d6]" : "hover:text-white")}>
              <Home className="w-3.5 h-3.5" />
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                {crumb.href ? (
                  <Link 
                    to={crumb.href}
                    className={cn("transition-colors", isDarkText ? "hover:text-[#0076d6]" : "hover:text-white")}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={cn("font-semibold", isDarkText ? "text-[#1d1d1d]" : "text-white")}>{crumb.label}</span>
                )}
              </div>
            ))}
          </motion.nav>
        )}

        {/* Layout split: 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side Content Column */}
          <div className={cn(
            "space-y-4",
            (backgroundImage && !fullBackground) ? "lg:col-span-7" : "lg:col-span-12"
          )}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "space-y-4",
                textBgWhite && "bg-white/95 backdrop-blur-sm p-5 sm:p-8 md:p-12 shadow-2xl border border-neutral-200/50 max-w-2xl text-[#1d1d1d] relative z-10"
              )}
            >
              {/* Breadcrumbs inside the white box if textBgWhite is true */}
              {breadcrumbs.length > 0 && textBgWhite && (
                <div className="mb-4 flex items-center gap-1.5 text-xs text-[#555555]">
                  <Link to="/" className="hover:text-[#0076d6] transition-colors flex items-center">
                    <Home className="w-3.5 h-3.5" />
                  </Link>
                  {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                      {crumb.href ? (
                        <Link 
                          to={crumb.href}
                          className="hover:text-[#0076d6] transition-colors"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span className="text-[#1d1d1d] font-semibold">{crumb.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Category tag label */}
              {label && (
                <span className={cn(
                  "text-[10px] font-bold tracking-widest uppercase block",
                  isDarkText ? "text-[#0076d6]" : "text-blue-400"
                )}>
                  {label}
                </span>
              )}

              {/* Title: Clean sans-serif light typography */}
              <h1 className={cn(
                "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight break-words",
                isDarkText ? "text-[#1d1d1d]" : "text-white"
              )}>
                {title}
              </h1>

              {/* Description */}
              {description && (
                <p className={cn(
                  "text-xs md:text-sm leading-relaxed max-w-2xl",
                  isDarkText ? "text-[#555555]" : "text-gray-200"
                )}>
                  {description}
                </p>
              )}

              {/* CTA Button */}
              {ctaText && (
                <div className="pt-2">
                  <Link to={ctaHref}>
                    <Button 
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-none transition-colors",
                        isDarkText 
                          ? "bg-[#1d1d1d] hover:bg-[#333333] text-white"
                          : "bg-white hover:bg-gray-200 text-[#1d1d1d]"
                      )}
                    >
                      {ctaText}
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Side Image Column (Only if backgroundImage is provided and not full background) */}
          {(backgroundImage && !fullBackground) && (
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-md border border-[#d2d2d2] rounded-none overflow-hidden bg-white p-2 shadow-md"
              >
                <img 
                  src={backgroundImage} 
                  alt={title} 
                  className="w-full h-48 md:h-64 object-cover rounded-none"
                />
              </motion.div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
