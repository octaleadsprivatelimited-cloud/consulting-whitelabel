import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Truck, Globe, Wifi, Shield } from "lucide-react";

const Infrastructure = () => {
  const infrastructure = [
    { icon: Truck, title: "Vehicle Fleet", description: "Dedicated vehicles for on-site support and equipment transportation.", color: "bg-blue-500", link: "/contact" },
    { icon: Globe, title: "Network Infrastructure", description: "Robust network connectivity enabling seamless global operations.", color: "bg-orange-500", link: "/contact" },
    { icon: Wifi, title: "Communication Systems", description: "Advanced communication infrastructure for remote and hybrid work.", color: "bg-green-500", link: "/contact" },
    { icon: Shield, title: "Security Infrastructure", description: "Physical and digital security systems protecting our assets.", color: "bg-purple-500", link: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Vehicles and Other Infrastructure"
        description="Learn about the infrastructure supporting our operational excellence."
        label="PHYSICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Infrastructure" }]}
        ctaText="Contact Us"
        ctaHref="/contact"
        backgroundImage="/hero-background.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructure.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <item.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <div className={`w-12 h-1 ${item.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Infrastructure;