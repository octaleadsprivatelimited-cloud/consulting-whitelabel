import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Monitor, Server, Cpu, Wrench } from "lucide-react";

const Equipment = () => {
  const equipment = [
    { icon: Monitor, title: "Computing Equipment", description: "Development and consulting teams are equipped with high-performance workstations and laptops, enabling efficient software development, SAP consulting, and solution delivery.", color: "bg-blue-500", link: "/solutions" },
    { icon: Server, title: "Server Infrastructure", description: "Enterprise-grade servers support critical business applications and services, ensuring high availability, reliability, and seamless performance for all client operations.", color: "bg-orange-500", link: "/solutions" },
    { icon: Cpu, title: "Hardware Resources", description: "Advanced hardware components ensure optimal system performance, supporting efficient development, consulting, and enterprise solution delivery.", color: "bg-green-500", link: "/solutions" },
    { icon: Wrench, title: "Specialized Tools", description: "We use industry-specific tools and equipment to ensure precise testing, seamless deployment, and high-quality solution delivery.", color: "bg-purple-500", link: "/solutions" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Machinery, Equipment, Tools"
        description="Discover the equipment and tools powering our technical capabilities."
        label="PHYSICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Equipment" }]}
        ctaText="Our Solutions"
        ctaHref="/solutions"
        backgroundImage="/hero-background.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
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

export default Equipment;