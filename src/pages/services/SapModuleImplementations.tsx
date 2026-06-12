import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Package, ShoppingCart, Factory, CheckSquare, Wrench, Code, Database, Smartphone, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";

const functionalModules = [
  { icon: DollarSign, title: "FI (Financial Accounting)", desc: "General ledger, accounts payable/receivable, asset accounting" },
  { icon: DollarSign, title: "CO (Controlling)", desc: "Cost center accounting, profit center accounting, internal orders" },
  { icon: Package, title: "MM (Materials Management)", desc: "Procurement, inventory management, invoice verification" },
  { icon: ShoppingCart, title: "SD (Sales & Distribution)", desc: "Sales orders, pricing, billing, shipping" },
  { icon: Factory, title: "PP (Production Planning)", desc: "Demand management, MRP, capacity planning, shop floor control" },
  { icon: CheckSquare, title: "QM (Quality Management)", desc: "Quality planning, inspection, control, certificates" },
  { icon: Wrench, title: "PM (Plant Maintenance)", desc: "Preventive maintenance, work orders, equipment management" },
  { icon: Warehouse, title: "WM/EWM (Warehouse Management)", desc: "Warehouse operations, inventory management, optimization" },
];

const technicalModules = [
  { icon: Code, title: "ABAP Development", desc: "Custom reports, enhancements, interfaces, and forms" },
  { icon: Database, title: "BASIS Administration", desc: "System administration, transport management, performance tuning" },
  { icon: Database, title: "SAP HANA", desc: "In-memory database administration and optimization" },
  { icon: Smartphone, title: "Fiori/UI5", desc: "Modern user interface development and customization" },
];

const SapModuleImplementations = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero 
        title="SAP Module Implementations"
        backgroundImage="/SAP MODULE IMPLEMENTATION.png"
        description="Expert implementation of all major SAP functional and technical modules to meet your specific business requirements."
        label="SAP SERVICES"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "SAP Module Implementations" }
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
                Complete <span className="text-accent">Module Coverage</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our certified consultants have deep expertise across all SAP modules. Whether you need a single module implementation or a full ERP rollout, we deliver solutions that drive business value.
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
                  src="/SAP MODULE IMPLEMENTATION.png" 
                  alt="SAP Module Implementation"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Functional Modules */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Functional <span className="text-accent">Modules</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core business process modules for finance, logistics, and operations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {functionalModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-6 border border-border/50 hover:border-accent/50 transition-colors"
              >
                <module.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground">{module.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Modules */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-accent">Modules</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technical expertise for development, administration, and modern UX
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technicalModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-lg p-6 border border-border/50 hover:border-accent/50 transition-colors"
              >
                <module.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground">{module.desc}</p>
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
              Need Module Implementation?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Our experts will help you implement the right modules for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Discuss Requirements <ArrowRight className="ml-2 w-4 h-4" />
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

export default SapModuleImplementations;
