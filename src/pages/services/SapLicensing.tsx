import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, DollarSign, Shield, FileText, TrendingDown, Users, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: FileText, title: "SAP S/4HANA Subscription", desc: "Flexible subscription models for S/4HANA cloud and on-premises" },
  { icon: Users, title: "Module-Based Licensing", desc: "Pay only for the modules your business needs" },
  { icon: TrendingDown, title: "Cost Optimization Guidance", desc: "Expert advice to minimize licensing costs" },
  { icon: BarChart3, title: "License Audit Support", desc: "Prepare for and manage SAP license audits" },
  { icon: Shield, title: "Compliance Management", desc: "Ensure license compliance across your organization" },
  { icon: DollarSign, title: "True-Up Planning", desc: "Strategic planning for license renewals and true-ups" },
];

const benefits = [
  "Reduce unnecessary licensing costs by up to 30%",
  "Ensure full compliance with SAP licensing terms",
  "Optimize user types and access levels",
  "Navigate complex SAP licensing models",
  "Prepare for indirect access requirements",
  "Plan for future growth and scaling",
];

const SapLicensing = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP Licensing & Software"
        backgroundImage="/SAP LISENCING & SOFTWARE.jpg"
        description="Comprehensive SAP licensing solutions optimized for your business needs and budget. Navigate complex licensing models with expert guidance."
        label="SAP SERVICES"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "SAP Licensing & Software" }
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
                Optimize Your <span className="text-accent">SAP Investment</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SAP licensing can be complex and costly if not managed properly. Our licensing experts help you navigate the complexities of SAP licensing to ensure you're getting the best value for your investment.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                From initial license procurement to ongoing optimization and audit support, we provide comprehensive licensing services that align with your business objectives.
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
                  src="/SAP LISENCING & SOFTWARE.jpg" 
                  alt="SAP Licensing & Software"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-6 bg-card rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
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
              Licensing <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive licensing support throughout your SAP journey
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Optimize Your SAP Licensing
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Get expert guidance on SAP licensing and reduce your total cost of ownership.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Licensing Advice <ArrowRight className="ml-2 w-4 h-4" />
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

export default SapLicensing;
