import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Link2, Users, Handshake, Globe } from "lucide-react";

const SupplyChain = () => {
  const features = [
    { icon: Link2, title: "Supply Chain", description: "Efficient supply chain ensuring timely delivery of resources and services.", color: "bg-blue-500", link: "/partners" },
    { icon: Users, title: "Vendor Network", description: "Extensive network of trusted vendors and technology partners.", color: "bg-orange-500", link: "/partners" },
    { icon: Handshake, title: "Strategic Partners", description: "Long-term partnerships with leading technology providers.", color: "bg-green-500", link: "/partners" },
    { icon: Globe, title: "Global Suppliers", description: "Access to global suppliers for diverse technology needs.", color: "bg-purple-500", link: "/partners" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Supply Chain and Vendor Network"
        description="Explore our supply chain and vendor partnerships."
        label="OPERATIONAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Supply Chain" }]}
        ctaText="Our Partners"
        ctaHref="/partners"
        backgroundImage="/hero-background.jpg"
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

export default SupplyChain;