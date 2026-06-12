import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, FileText, Smartphone, Database, Layers, Workflow, Puzzle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Code, title: "ABAP Reports & Enhancements", desc: "Custom reports, user exits, BADIs, and enhancement implementations" },
  { icon: FileText, title: "SmartForms / Adobe Forms", desc: "Professional document output design and development" },
  { icon: Smartphone, title: "Fiori UI Apps", desc: "Modern, responsive SAP Fiori applications" },
  { icon: Database, title: "HANA Development", desc: "Native HANA procedures, CDS views, and AMDP" },
  { icon: Workflow, title: "Workflow Development", desc: "Custom workflows for business process automation" },
  { icon: Layers, title: "Interface Development", desc: "IDocs, RFC, BAPI, and web service development" },
  { icon: Puzzle, title: "Integration Solutions", desc: "SAP PI/PO, CPI, and middleware integrations" },
  { icon: Zap, title: "Performance Optimization", desc: "Code optimization and performance tuning" },
];

const technologies = [
  "ABAP", "ABAP on HANA", "Fiori/UI5", "SAP Gateway", "OData Services", 
  "CDS Views", "AMDP", "SAP BTP", "RAP", "CAP"
];

const SapCustomDevelopment = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP Custom Development"
        description="Tailored SAP development and enhancements to meet your unique business requirements with modern technologies."
        label="SAP SERVICES"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "SAP Custom Development" }
        ]}
        backgroundImage="/SAP CUSTOM DEVELOPMENT.jpg"
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
                Custom Solutions for <span className="text-accent">Your Business</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When standard SAP functionality doesn't meet your specific requirements, our development team creates tailored solutions that extend and enhance your SAP system.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From simple reports to complex integrations, we leverage the latest SAP technologies to deliver solutions that are maintainable, performant, and upgrade-safe.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
                <img 
                  src="/SAP CUSTOM DEVELOPMENT.jpg" 
                  alt="SAP Custom Development"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Development <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive custom development services for all your SAP needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-6 border border-border/50 hover:border-accent/50 transition-colors"
              >
                <service.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
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
              Have a Development Need?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create custom solutions for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start a Project <ArrowRight className="ml-2 w-4 h-4" />
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

export default SapCustomDevelopment;
