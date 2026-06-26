import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Users, Star, Headphones, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";

const Services = () => {
  const seo = useSEO();
  const location = useLocation();
  const { content } = useData();
  const recruitingOfferings = content.services || [];
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.services || {
    heroTitle: "IT Recruiting Solutions Designed for Real Project Outcomes",
    heroDescription: "We deliver industry-aligned and tech-driven recruitment services that help businesses build robust engineering and software teams.",
    heroLabel: "RECRUITING SERVICES",
    sectionTitle: "Comprehensive Staffing Solutions",
    sectionDescription: "From temporary contractors to full-time hires, we provide end-to-end recruitment services to support your scaling needs.",
    stats: [
      { value: "500+", label: "Talents Placed" },
      { value: "10+", label: "Years of experience" },
      { value: "15k+", label: "Vetted Candidates" },
      { value: "98%", label: "Client retention" }
    ]
  };

  // Fix canonical for /solutions route - should point to /services
  const seoWithCanonical = location.pathname === '/solutions'
    ? { ...seo, canonical: 'https://procyonsol.com/services' }
    : seo;

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#1d1d1d] selection:bg-[#0067b8] selection:text-white">
      <SEO {...seoWithCanonical} />
      <Navbar />

      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.heroLabel}
        breadcrumbs={[
          { label: "Services" }
        ]}
        backgroundImage="/services-background.webp"
        blueBackground={true}
      />

      {/* Corporate Stats Banner */}
      {textContent.stats && textContent.stats.length > 0 && (
        <section className="py-8 bg-neutral-50 border-b border-neutral-200">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-neutral-200">
              {textContent.stats.map((stat, index) => (
                <div key={stat.label} className={index === 0 ? "" : "pl-4"}>
                  <div className="text-2xl md:text-3xl font-light text-neutral-900">{stat.value}</div>
                  <div className="text-xs text-neutral-650 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recruiting Offerings Grid */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="mb-12 border-b border-neutral-200 pb-4 text-left">
            <h2 className="text-xl md:text-2xl font-light text-neutral-950">
              {textContent.sectionTitle}
            </h2>
            {textContent.sectionDescription && (
              <p className="text-xs text-neutral-650 mt-2">
                {textContent.sectionDescription}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto text-left">
            {recruitingOfferings.map((offering) => {
              const Icon = (LucideIcons as any)[offering.iconName] || LucideIcons.Settings;
              return (
                <div 
                  key={offering.title}
                  className="group border border-neutral-200 bg-white flex flex-col justify-between rounded-none hover:border-neutral-350 hover:shadow-md transition-all"
                >
                  <Link to={offering.href} className="flex flex-col h-full">
                    {/* Optional Image */}
                    {offering.image && (
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200 bg-neutral-100 rounded-none">
                        <img
                          src={offering.image}
                          alt={offering.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] rounded-none"
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        <div className="text-[#0076d6] w-9 h-9 flex items-center justify-center bg-neutral-100 shrink-0 rounded-none">
                          <Icon className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
                          {offering.title}
                        </h3>
                        <p className="text-xs text-neutral-650 leading-relaxed line-clamp-3">
                          {offering.description}
                        </p>
                      </div>
                      
                      <div className="pt-2 flex items-center gap-1 text-xs font-bold text-[#0076d6] group-hover:underline uppercase tracking-wider">
                        <span>Learn more</span>
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

      {/* Why Choose Us - Corporate Style */}
      <section className="py-16 md:py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
            
            {/* Left Column: Text & Features Grid */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-wider text-[#0076d6] uppercase">
                  Why Choose Us
                </span>
                <h2 className="text-2xl md:text-3xl font-light text-neutral-950 tracking-tight leading-tight">
                  Your Trusted Tech Staffing Partner
                </h2>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl">
                  With over 10 years of IT recruitment experience, we deliver end-to-end talent solutions that scale teams and drive engineering growth.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Users, title: "Expert Recruiters", desc: "Dedicated sourcing partners" },
                  { icon: Star, title: "Proven Track Record", desc: "500+ successful placements" },
                  { icon: Headphones, title: "Custom Screenings", desc: "Deep technical vetting" },
                  { icon: CheckCircle2, title: "Quality Assured", desc: "98% client retention rate" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-neutral-200 p-5 flex gap-4 items-start shadow-sm rounded-none"
                  >
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-[#0076d6] shrink-0 rounded-none">
                      <item.icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-neutral-950 text-xs">{item.title}</h4>
                      <p className="text-[11px] text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image Framed */}
            <div className="lg:col-span-5">
              <div className="relative border border-neutral-300 bg-white p-8 flex items-center justify-center shadow-sm rounded-none aspect-[4/3]">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold tracking-tight text-[#0076d6] uppercase">Procyon Solutions</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-widest">Enterprise Solutions</div>
                </div>
                <div className="absolute bottom-0 left-0 bg-[#0076d6] p-4 text-white rounded-none">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs text-neutral-100 font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
