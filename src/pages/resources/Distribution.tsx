import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Route, Send, MapPin, Truck } from "lucide-react";

const Distribution = () => {
  const features = [
    { icon: Route, title: "Distribution Channels", description: "Multiple channels for service delivery and solution distribution.", color: "bg-blue-500", link: "/contact" },
    { icon: Send, title: "Service Delivery", description: "Efficient delivery mechanisms ensuring timely project completion.", color: "bg-orange-500", link: "/contact" },
    { icon: MapPin, title: "Regional Coverage", description: "Comprehensive regional coverage for local support and services.", color: "bg-green-500", link: "/contact" },
    { icon: Truck, title: "Logistics", description: "Streamlined logistics for hardware and equipment deployment.", color: "bg-purple-500", link: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Distribution Channels"
        description="Understanding our service distribution and delivery networks."
        label="OPERATIONAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Distribution" }]}
        ctaText="Contact Us"
        ctaHref="/contact"
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

export default Distribution;