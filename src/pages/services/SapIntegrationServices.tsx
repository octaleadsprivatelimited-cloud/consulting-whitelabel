import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Link2, Database, Cloud, Workflow, Globe, Layers, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Link2, title: "SAP ↔ ERP Integration", desc: "Connect SAP with other ERP systems seamlessly" },
  { icon: Globe, title: "API / Middleware Integrations", desc: "REST, SOAP, and middleware-based integrations" },
  { icon: Layers, title: "Third-Party App Connections", desc: "Integrate with CRM, HR, e-commerce, and more" },
  { icon: Cloud, title: "SAP BTP Integration", desc: "Leverage SAP Business Technology Platform" },
  { icon: Workflow, title: "SAP PI/PO", desc: "Process orchestration and enterprise integration" },
  { icon: Cloud, title: "SAP CPI", desc: "Cloud Platform Integration for hybrid landscapes" },
  { icon: Database, title: "EDI Integration", desc: "Electronic data interchange with partners" },
  { icon: Shield, title: "Secure Data Exchange", desc: "Encrypted and compliant data transfers" },
];

const integrationTypes = [
  { title: "Real-Time Integration", desc: "Instant data synchronization between systems", icon: Zap },
  { title: "Batch Integration", desc: "Scheduled data transfers for bulk operations", icon: Database },
  { title: "Event-Driven Integration", desc: "Trigger-based integrations for dynamic workflows", icon: Workflow },
];

const SapIntegrationServices = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP Integration Services"
        backgroundImage="/SAP INTEGRATION SERVICES.png"
        description="Seamless SAP integration with your existing enterprise systems and applications. Connect your business ecosystem."
        label="SAP SERVICES"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "SAP Integration Services" }
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
                Connect Your <span className="text-accent">Enterprise Ecosystem</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                In today's connected world, your SAP system needs to communicate seamlessly with other applications, partners, and cloud services. Our integration services ensure smooth data flow across your entire technology landscape.
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
                  src="/SAP INTEGRATION SERVICES.png" 
                  alt="SAP Integration Services"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Integration <span className="text-accent">Approaches</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the right integration pattern for your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {integrationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border/50 text-center"
              >
                <type.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Integration <span className="text-accent">Services</span>
            </h2>
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
              Need Integration Help?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let our experts design and implement the right integration solution for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Discuss Integration <ArrowRight className="ml-2 w-4 h-4" />
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

export default SapIntegrationServices;
