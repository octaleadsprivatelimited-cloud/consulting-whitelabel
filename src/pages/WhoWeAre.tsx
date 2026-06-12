import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useData } from "@/context/DataContext";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  const seo = useSEO();
  const { content } = useData();
  const leadershipTeam = content.leadership || [];
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.whoWeAre || {
    heroTitle: "Who We Are",
    heroDescription: "Octaleads Technologies is a premier IT recruitment and staffing agency dedicated to helping organizations build high-performing technical teams.",
    heroLabel: "ABOUT US",
    sectionTag: "About Octaleads",
    storyTitle: "Our Mission & Vision",
    storyParagraphs: [
      "Octaleads Technologies is a global IT recruitment partner focused on helping organizations solve software engineering bottlenecks and scale tech departments. Our recruiters combine tech backgrounds with industry networks to deliver precise, vetted hires.",
      "Our Mission: Bridge the global developer talent gap by matching companies with verified technical experts.",
      "Our Vision: Become the most trusted tech staffing and talent acquisition agency globally."
    ],
    sectionTitle: "Our Core Values",
    sectionDescription: "The principles that guide our recruitment and vetting standards",
    stats: [
      { value: "10+", label: "Years of Excellence" }
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
          { label: "Who We Are" }
        ]}
        backgroundImage="/hero-slide-2.jpg"
        blueBackground={true}
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              {textContent.sectionTag && (
                <span className="text-xs font-bold tracking-wider text-[#0076d6] uppercase block">
                  {textContent.sectionTag}
                </span>
              )}
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight leading-tight">
                {textContent.storyTitle}
              </h2>
              <div className="space-y-4 text-neutral-600 text-xs md:text-sm leading-relaxed">
                {textContent.storyParagraphs && textContent.storyParagraphs.map((para, i) => (
                  <p key={i}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="border border-neutral-300 bg-neutral-250 p-2 overflow-hidden shadow-sm rounded-none">
                <img 
                  src="/whoweare-story.svg" 
                  alt="Octaleads IT Recruitment Story" 
                  className="w-full h-auto object-cover rounded-none"
                />
              </div>
              {textContent.stats && textContent.stats.length > 0 && (
                <div className="absolute -bottom-4 -left-4 bg-[#0076d6] text-white p-4 rounded-none">
                  <div className="text-2xl font-bold">{textContent.stats[0].value}</div>
                  <div className="text-xs font-medium text-neutral-100">{textContent.stats[0].label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-20 bg-[#f5f5f5] border-t border-b border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#0076d6] uppercase block">
              Our Team
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">
              {textContent.sectionTitle}
            </h2>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
              {textContent.sectionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <div
                key={member.name}
                className="flex flex-col justify-between p-6 border border-neutral-200 bg-white hover:border-neutral-350 hover:shadow-md transition-all rounded-none text-left"
              >
                <div className="space-y-4">
                  {/* Icon container */}
                  <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-[#0076d6] rounded-none">
                    <Users className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-bold text-[#0076d6] uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
