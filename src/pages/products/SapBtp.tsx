import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, CheckCircle, Code, Database, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Confidential Sourcing Protocols",
  "CTO Sourcing & Placement",
  "VP of Engineering Placement",
  "Director of IT Placement",
  "Principal Tech Architect Placement",
  "Leadership Assessments",
  "Custom Compensation Mapping",
  "Onboarding Advisory Support",
  "Candidate Competency Auditing",
  "Soft Skills Vetting",
  "Interim Leadership Staffing",
  "Diversity & Inclusion Hiring Sourcing",
  "Global Tech Network Reach",
  "Niche Tech Stack Leadership Sourcing",
  "Advisory for Equity & Bonus Structure",
];

const SapBtp = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="Executive Tech Search"
        description="Retained headhunting services targeting elite technology leaders, including CTOs, VPs of Engineering, and IT Directors."
        label="TALENT SOLUTIONS"
        breadcrumbs={[{ label: "Solutions", href: "/products" }, { label: "Executive Search" }]}
        blueBackground={true}
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Executive Tech Leadership Search
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Finding top leadership for your engineering department requires absolute confidentiality, a deep understanding of technological requirements, and a high-touch sourcing approach.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We act as your dedicated executive search partners, managing discrete conversations and verifying functional competencies so you get a leader who can scale your engineering roadmap.
              </p>
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="border border-neutral-350 bg-white p-8 flex items-center justify-center shadow-md rounded-none aspect-[16/10] md:aspect-[4/3] w-full">
                <img 
                  src="/executive-search.svg" 
                  alt="Executive Search Services" 
                  className="max-w-[90%] max-h-[90%] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Executive Search Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our methods are structured to guarantee alignment on leadership capabilities, culture fit, and strategic alignment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border"
              >
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Executive Tech Leadership?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact our executive search partners to discuss confidential headhunting for your senior engineering roles.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto text-base font-semibold group">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SapBtp;
