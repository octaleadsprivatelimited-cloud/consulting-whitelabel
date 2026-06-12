import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Copyright, Stamp, FileCheck, Shield } from "lucide-react";

const Trademarks = () => {
  const features = [
    { icon: Copyright, title: "Copyrights", description: "Protected content, documentation, and training materials.", color: "bg-blue-500", link: "/contact" },
    { icon: Stamp, title: "Trademarks", description: "Registered trademarks protecting our brand and product names.", color: "bg-orange-500", link: "/contact" },
    { icon: FileCheck, title: "Legal Protection", description: "Comprehensive legal protection for all intellectual property.", color: "bg-green-500", link: "/contact" },
    { icon: Shield, title: "Brand Assets", description: "Protected logos, designs, and visual brand elements.", color: "bg-purple-500", link: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Trademarks and Copyrights"
        description="Understanding our protected intellectual property assets."
        label="INTELLECTUAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Trademarks" }]}
        ctaText="Contact Legal"
        backgroundImage="/hero-background.jpg"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <feature.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {feature.title}
                </h3>
                <div className={`w-12 h-1 ${feature.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trademarks;