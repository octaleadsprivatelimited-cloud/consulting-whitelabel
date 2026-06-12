import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, CheckCircle, Palette, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "Permanent Candidate Sourcing",
  "Technical Pre-Screening & Coding Tasks",
  "Detailed Reference & Background Checks",
  "Salary Negotiation & Offer Advisory",
  "Risk-Free 90-Day Placement Guarantee",
  "Targeted Executive Tech Headhunting",
  "CTO & VP Sourcing pipelines",
  "Frontend & UI/UX Engineers",
  "Backend & System Architects",
  "Data Science & AI Specialists",
  "DevOps & SRE Professionals",
  "Product Managers & Scrum Masters",
  "QA Engineers & SDET Sourcing",
  "Custom Employer Branding Sourcing",
  "Fast Placement & Low Retention Risk",
];

const SapFiori = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="Direct Hire Placement"
        description="Permanent recruitment services to find, vet, and place top-tier, full-time IT professionals in key organizational roles."
        label="TALENT SOLUTIONS"
        breadcrumbs={[{ label: "Solutions", href: "/products" }, { label: "Direct Hire" }]}
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
                Direct Hire & Permanent Placement
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Direct Hire Placement (Permanent Staffing) is a premium recruiting service tailored to source, pre-screen, and place high-caliber technology professionals directly into full-time roles in your engineering department.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our recruiting team utilizes database matching, active developer sourcing, and rigorous tech screenings to verify candidates before they even sit down to interview with your hiring managers.
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
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-card rounded-xl p-6 border border-border">
                <Smartphone className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Pre-Screened</h3>
                <p className="text-sm text-muted-foreground">Rigorous technical & coding checks</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Palette className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Talent Fit</h3>
                <p className="text-sm text-muted-foreground">Matched for cultural and soft skills</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Globe className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Global Pool</h3>
                <p className="text-sm text-muted-foreground">Sourcing both local and remote developers</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Zap className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Low Risk</h3>
                <p className="text-sm text-muted-foreground">Replacement guarantee up to 90 days</p>
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
              Permanent Recruitment Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our direct-hire processes ensure every developer or tech leader meets standard core qualifications.
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
              Ready to Hire Permanent Tech Talent?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact our tech recruitment experts to discuss your direct hire needs and start interviewing pre-vetted candidates.
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

export default SapFiori;
