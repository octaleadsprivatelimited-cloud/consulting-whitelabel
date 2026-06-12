import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Cloud, Database, Settings, Code, TestTube, Shield, Users, Rocket, HeartHandshake, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Settings, title: "Implementation Strategy & Planning", desc: "Comprehensive roadmap aligned with your business objectives" },
  { icon: Database, title: "Business Process & Blueprinting", desc: "Detailed documentation of your business processes" },
  { icon: CheckCircle2, title: "Fit–Gap Analysis", desc: "Identify gaps between standard SAP and your requirements" },
  { icon: Cloud, title: "Functional Implementation", desc: "Configure SAP modules to match your business needs" },
  { icon: Code, title: "Technical & System Configuration", desc: "System landscape setup and technical configurations" },
  { icon: Database, title: "SAP BTP Integration", desc: "Leverage SAP Business Technology Platform capabilities" },
  { icon: Database, title: "Data Migration & Management", desc: "Seamless data migration with integrity validation" },
  { icon: Code, title: "Custom Development & Enhancements", desc: "Tailored solutions for unique business requirements" },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Real-time insights and business intelligence" },
  { icon: TestTube, title: "Testing & Quality Assurance", desc: "Comprehensive testing across all scenarios" },
  { icon: Shield, title: "Security & Authorizations", desc: "Role-based access control and data security" },
  { icon: Users, title: "Training & Change Management", desc: "End-user training and organizational readiness" },
  { icon: Rocket, title: "Go-Live & Hypercare", desc: "Smooth transition with dedicated support" },
  { icon: HeartHandshake, title: "Post Go-Live Support (AMC)", desc: "Ongoing maintenance and continuous improvement" },
  { icon: BarChart3, title: "SAP Analytics Cloud Integration", desc: "Advanced analytics and planning capabilities" },
];

const SapS4HanaImplementation = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP S/4HANA Implementation"
        description="Complete implementation services for SAP S/4HANA with cloud, on-premises, or hybrid deployment options tailored to your business needs."
        label="SAP SERVICES"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "SAP S/4HANA Implementation" }
        ]}
        backgroundImage="/sap-s4hana-implementation.webp"
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
                Transform Your Enterprise with <span className="text-accent">S/4HANA</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SAP S/4HANA is the next-generation business suite designed to help you run simple in a digital economy. Our implementation services ensure a smooth transition that maximizes your return on investment.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you choose cloud, on-premises, or hybrid deployment, our certified consultants guide you through every phase—from planning to go-live and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-accent/10 rounded-lg px-4 py-2">
                  <span className="text-accent font-semibold">Cloud</span>
                </div>
                <div className="bg-accent/10 rounded-lg px-4 py-2">
                  <span className="text-accent font-semibold">On-Premises</span>
                </div>
                <div className="bg-accent/10 rounded-lg px-4 py-2">
                  <span className="text-accent font-semibold">Hybrid</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/sap-s4hana-implementation.webp" 
                  alt="SAP S/4HANA Implementation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Implementation <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end implementation services covering every aspect of your S/4HANA journey
            </p>
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
              Ready to Implement S/4HANA?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Let our experts guide you through a successful SAP S/4HANA implementation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
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

export default SapS4HanaImplementation;
