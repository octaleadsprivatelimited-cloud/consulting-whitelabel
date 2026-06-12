import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Laptop, Cloud, Database, Settings } from "lucide-react";

const Software = () => {
  const features = [
    { icon: Laptop, title: "Enterprise Software", description: "Licensed enterprise software including SAP, Microsoft, and other industry-leading platforms.", color: "bg-blue-500", link: "/solutions" },
    { icon: Cloud, title: "Cloud Platforms", description: "Cloud infrastructure on AWS, Azure, and Google Cloud for scalable solutions.", color: "bg-orange-500", link: "/solutions" },
    { icon: Database, title: "IT Systems", description: "Comprehensive IT systems supporting business operations and client services.", color: "bg-green-500", link: "/solutions" },
    { icon: Settings, title: "Custom Applications", description: "Proprietary applications developed for specific business needs.", color: "bg-purple-500", link: "/solutions" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Software and IT Systems"
        description="Explore our technology stack powering enterprise solutions."
        label="TECHNOLOGICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Software" }]}
        ctaText="Our Solutions"
        ctaHref="/solutions"
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

export default Software;