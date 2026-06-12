import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Building2, Factory, Warehouse, MapPin } from "lucide-react";

const Facilities = () => {
  const facilities = [
    { icon: Building2, title: "Office Buildings", description: "Modern office spaces are equipped with state-of-the-art facilities that foster productivity, collaboration, and a professional work environment.", color: "bg-blue-500", link: "/contact" },
    { icon: Factory, title: "Development Centers", description: "Dedicated development centers are equipped to support software engineering, SAP consulting, and end-to-end solution delivery with efficiency and scalability.", color: "bg-orange-500", link: "/contact" },
    { icon: Warehouse, title: "Data Centers", description: "Secure data centers provide reliable hosting and robust infrastructure services, ensuring high availability, data protection, and operational continuity for our clients.", color: "bg-green-500", link: "/contact" },
    { icon: MapPin, title: "Global Presence", description: "Strategic locations across multiple regions ensure seamless client accessibility, efficient collaboration, and timely delivery of solutions worldwide.", color: "bg-purple-500", link: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Office Buildings, Factories, Warehouses"
        description="Explore our physical infrastructure supporting our operations and service delivery."
        label="PHYSICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Facilities" }]}
        ctaText="Visit Us"
        ctaHref="/contact"
        backgroundImage="/hero-background.jpg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <facility.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {facility.title}
                </h3>
                <div className={`w-12 h-1 ${facility.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;