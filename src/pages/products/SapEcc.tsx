import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Settings, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  "On-Demand Developer Scaling",
  "Full Contractor Compliance",
  "Global Remote Developers",
  "Flexible Contract Terms",
  "Dedicated Project Management Sourcing",
  "QA & Testing Specialists",
  "Cloud & DevOps Sourcing",
  "Front-End JS/TS Developers",
  "Back-End Java/Python/Go Engineers",
  "Mobile App Developers (iOS/Android)",
  "Database & Data Science Staffing",
  "Scrum Masters & Agile Leads",
  "Rapid Backfill & Replacement Support",
  "Fully Managed Payroll & Compliance",
  "Time & Material Sourcing Models",
];

const SapEcc = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="Contract IT Staffing"
        description="Flexible, on-demand IT staffing solutions to meet immediate project demands and scale tech teams quickly."
        label="TALENT SOLUTIONS"
        breadcrumbs={[{ label: "Solutions", href: "/products" }, { label: "Contract Staffing" }]}
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
                Contract IT Staffing Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Contract IT Staffing is a flexible, cost-effective talent solution designed to place pre-screened software developers, DevOps engineers, and technical experts into your team for short-term projects or immediate resource backfills.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our staffing services handle everything from initial sourcing and developer vetting to global compliance and payroll management, letting you focus entirely on your product roadmap.
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
                <Briefcase className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Flexible Scaling</h3>
                <p className="text-sm text-muted-foreground">Adjust team sizes dynamically on demand</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Settings className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Vetted Sourcing</h3>
                <p className="text-sm text-muted-foreground">Developers pre-screened by tech architects</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Shield className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Compliance</h3>
                <p className="text-sm text-muted-foreground">Fully compliant local payroll & taxation</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <Users className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Recruitment</h3>
                <p className="text-sm text-muted-foreground">Active candidate pipelines for fast hires</p>
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
              Our Staffing & Sourcing Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Niche technology stacks and agile talent roles ready for quick deployment.
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
              Ready to scale your tech organization?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Contact our tech recruitment experts to discuss your contract staffing requirements and get customized talent profiles.
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

export default SapEcc;
