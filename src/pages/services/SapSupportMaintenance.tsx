import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, Wrench, Activity, Shield, Clock, Users, FileSearch, Zap, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Headphones, title: "Functional Support", desc: "Business process support across all SAP modules" },
  { icon: Wrench, title: "Technical Support", desc: "BASIS, ABAP, and infrastructure support" },
  { icon: Activity, title: "Performance Tuning", desc: "System optimization and performance improvements" },
  { icon: FileSearch, title: "Monthly Health Checks", desc: "Proactive system monitoring and recommendations" },
  { icon: Shield, title: "Security Management", desc: "Security patches, audits, and compliance" },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock support for critical issues" },
  { icon: Users, title: "Dedicated Support Team", desc: "Named resources familiar with your system" },
  { icon: Zap, title: "Incident Management", desc: "Rapid response and resolution for issues" },
];

const supportLevels = [
  { 
    title: "Basic Support", 
    features: ["Business hours support", "48-hour response SLA", "Monthly health checks", "Ticket-based support"]
  },
  { 
    title: "Standard Support", 
    features: ["Extended hours support", "24-hour response SLA", "Bi-weekly health checks", "Dedicated support team", "Performance monitoring"]
  },
  { 
    title: "Premium Support", 
    features: ["24/7 support", "4-hour response SLA", "Weekly health checks", "Named support resources", "Proactive monitoring", "On-site support option"]
  },
];

const SapSupportMaintenance = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP Support & Maintenance"
        description="24/7 ongoing SAP support and maintenance for uninterrupted business operations. Keep your SAP systems running at peak performance."
        label="SAP SERVICES"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "SAP Support & Maintenance" }
        ]}
        backgroundImage="/services hero background.jpg"
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
                Keep Your SAP <span className="text-accent">Running Smoothly</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your SAP system is critical to your business operations. Our support and maintenance services ensure maximum uptime, optimal performance, and rapid issue resolution so you can focus on your business.
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
                  src="/services hero background.jpg" 
                  alt="SAP Support & Maintenance"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Support <span className="text-accent">Levels</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the support level that fits your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportLevels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-8 border border-border/50"
              >
                <h3 className="text-xl font-bold text-foreground mb-6">{level.title}</h3>
                <ul className="space-y-3">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Support <span className="text-accent">Services</span>
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
              Need SAP Support?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Get reliable, expert SAP support to keep your business running smoothly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Support Quote <ArrowRight className="ml-2 w-4 h-4" />
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

export default SapSupportMaintenance;
