import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { CheckCircle, ClipboardCheck, ShieldCheck, BarChart } from "lucide-react";

const QualityControl = () => {
  const features = [
    { icon: CheckCircle, title: "Quality Assurance", description: "Rigorous quality assurance processes ensuring excellence in every deliverable.", color: "bg-blue-500", link: "/about" },
    { icon: ClipboardCheck, title: "Testing Systems", description: "Comprehensive testing frameworks for software and implementations.", color: "bg-orange-500", link: "/about" },
    { icon: ShieldCheck, title: "Compliance", description: "Adherence to industry standards and regulatory requirements.", color: "bg-green-500", link: "/about" },
    { icon: BarChart, title: "Performance Metrics", description: "Continuous monitoring and improvement through performance metrics.", color: "bg-purple-500", link: "/about" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Quality Control Systems"
        description="Learn about our quality control measures ensuring service excellence."
        label="OPERATIONAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Quality Control" }]}
        ctaText="Our Standards"
        ctaHref="/about"
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

export default QualityControl;