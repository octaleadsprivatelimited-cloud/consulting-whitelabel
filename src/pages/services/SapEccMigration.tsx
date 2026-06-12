import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Database, Code, TestTube, Shield, Users, Wrench, FileSearch, RefreshCw, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: FileSearch, title: "Assessment & Planning", desc: "Comprehensive readiness assessment and migration roadmap" },
  { icon: Database, title: "Technical Migration Services", desc: "Database migration, system conversion, and landscape transformation" },
  { icon: Code, title: "Custom Code & Development", desc: "Custom code analysis, remediation, and optimization" },
  { icon: RefreshCw, title: "Functional Migration & Optimization", desc: "Business process optimization and simplification" },
  { icon: Database, title: "Data Management", desc: "Data cleansing, archiving, and migration validation" },
  { icon: TestTube, title: "Testing & Quality Assurance", desc: "Comprehensive testing strategy and execution" },
  { icon: Shield, title: "Security & Authorizations", desc: "Role migration and security optimization" },
  { icon: Users, title: "Change Management & Training", desc: "User adoption and organizational readiness" },
  { icon: CheckCircle2, title: "Go-Live & Post Go-Live Support", desc: "Hypercare support and stabilization" },
  { icon: Wrench, title: "AMS & Managed Services", desc: "Ongoing support and continuous improvement" },
];

const migrationPaths = [
  { title: "System Conversion", desc: "Convert your existing ECC system to S/4HANA" },
  { title: "New Implementation", desc: "Fresh S/4HANA implementation with data migration" },
  { title: "Selective Data Transition", desc: "Move selected data to a new S/4HANA system" },
];

const SapEccMigration = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP ECC to S/4HANA Migration"
        backgroundImage="/SAP ECC TO S4 HANA MIGRANATION.png"
        description="Seamless migration from ECC to S/4HANA with minimal downtime, comprehensive data integrity, and optimized business processes."
        label="SAP SERVICES"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "ECC to S/4HANA Migration" }
        ]}
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Migrate to <span className="text-accent">S/4HANA</span> with Confidence
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With SAP ECC mainstream maintenance ending, now is the time to migrate to S/4HANA. Our proven migration methodology ensures a smooth transition with minimal business disruption.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We help you choose the right migration path based on your business requirements, timeline, and budget—whether it's system conversion, new implementation, or selective data transition.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/SAP ECC TO S4 HANA MIGRANATION.png" 
                  alt="SAP ECC to S/4HANA Migration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration Paths */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Migration <span className="text-accent">Paths</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the migration approach that best fits your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {migrationPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border/50 text-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{path.title}</h3>
                <p className="text-sm text-muted-foreground">{path.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Migration <span className="text-accent">Services</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-6 border border-border/50 hover:border-accent/50 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
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
              Start Your Migration Journey
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Get a free migration assessment and discover the best path for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Free Assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View All Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SapEccMigration;
