import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useData } from "@/context/DataContext";

const values = [
  { icon: Target, title: "Excellence", description: "We strive for excellence in every project we deliver." },
  { icon: Users, title: "Collaboration", description: "We believe in the power of teamwork and collaboration." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace innovation to solve complex business challenges." },
  { icon: Shield, title: "Integrity", description: "We operate with honesty, transparency, and ethical standards." },
];

const milestones = [
  { year: "SAP S/4HANA", event: "Complete SAP S/4HANA implementation with cloud, on-prem, or hybrid setup." },
  { year: "ECC Migration", event: "Seamless migration from ECC to S/4HANA with readiness check and training." },
  { year: "SAP Training", event: "Functional and technical SAP training for all major modules." },
  { year: "SAP AMS", event: "Ongoing SAP support with SLA-backed incident management." },
  { year: "SAP Development", event: "Custom ABAP, Fiori, and integration development services." },
];

const About = () => {
  const seo = useSEO();
  const { content } = useData();
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.whoWeAre || {
    heroTitle: "Who We Are",
    heroDescription: "Octaleads is a leading provider of IT services and SAP solutions, helping businesses transform and grow.",
    heroLabel: "ABOUT US",
    sectionTag: "Our Journey",
    storyTitle: "Building the Future of Enterprise Solutions",
    storyParagraphs: [
      "At Octaleads, we are committed to delivering exceptional IT services and SAP solutions that drive business transformation. Our team of experts combines deep technical knowledge with industry experience to help organizations achieve their digital goals.",
      "We believe in building long-term partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that create lasting value."
    ],
    sectionTitle: "Our Values",
    sectionDescription: "The principles that guide everything we do",
    stats: [
      { value: "10+", label: "Years" }
    ]
  };
  
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-neutral-900 selection:bg-[#0067b8] selection:text-white">
      <SEO {...seo} />
      <Navbar />
      
      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.heroLabel}
        breadcrumbs={[
          { label: "About" }
        ]}
        backgroundImage="/hero-background.jpg"
      />

      {/* Mission Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              {textContent.sectionTag && (
                <span className="text-xs font-bold tracking-wider text-[#0076d6] uppercase block">
                  {textContent.sectionTag}
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">
                {textContent.storyTitle}
              </h2>
              <div className="space-y-4 text-neutral-600 text-xs md:text-sm leading-relaxed">
                {(textContent.storyParagraphs || []).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="border border-neutral-300 bg-white p-8 flex items-center justify-center shadow-sm rounded-none aspect-[4/3]">
                <img 
                  src="/logo.png" 
                  alt="About Octaleads" 
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </div>
              {textContent.stats && textContent.stats.length > 0 && (
                <div className="absolute -bottom-4 -right-4 bg-[#0076d6] p-4 text-white rounded-none">
                  <div className="text-2xl font-bold">{textContent.stats[0].value}</div>
                  <div className="text-xs text-neutral-100 font-medium">{textContent.stats[0].label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-neutral-50 border-t border-b border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">
              {textContent.sectionTitle}
            </h2>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
              {textContent.sectionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 border border-neutral-200 bg-white hover:border-neutral-300 transition-colors rounded-none"
              >
                <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-[#0076d6] mb-4 rounded-none">
                  <value.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">{value.title}</h3>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Timeline Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">
              Our SAP Services
            </h2>
            <p className="text-xs md:text-sm text-neutral-600 mt-1">
              Complete SAP solutions for business transformation
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex items-start gap-4"
              >
                {/* Dell-inspired square bullet */}
                <div className="w-3 h-3 bg-[#0076d6] shrink-0 mt-2 rounded-none" />
                <div className="p-6 border border-neutral-200 bg-white flex-1 hover:border-neutral-300 transition-colors rounded-none">
                  <div className="text-sm font-semibold text-[#0076d6] mb-2">{milestone.year}</div>
                  <div className="text-xs md:text-sm text-neutral-600 leading-relaxed">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="py-16 md:py-20 bg-[#f5f5f5] border-t border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how our SAP solutions can help you achieve your business goals.
            </p>
            <div className="pt-4">
              <Link to="/contact">
                <Button className="bg-[#1d1d1d] text-white hover:bg-[#333333] px-6 py-3 h-auto text-xs font-semibold rounded-none uppercase tracking-wider">
                  Contact Us Today
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

export default About;
