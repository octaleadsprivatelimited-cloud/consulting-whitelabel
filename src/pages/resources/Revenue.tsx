import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { LineChart, Wallet, Target, Award } from "lucide-react";

const Revenue = () => {
  const features = [
    { icon: LineChart, title: "Revenue Growth", description: "Consistent revenue growth driven by quality services and client satisfaction.", color: "bg-blue-500", link: "/solutions" },
    { icon: Wallet, title: "Profit Margins", description: "Healthy profit margins enabling reinvestment and continuous improvement.", color: "bg-orange-500", link: "/solutions" },
    { icon: Target, title: "Revenue Streams", description: "Diversified revenue streams across consulting, implementation, and support services.", color: "bg-green-500", link: "/solutions" },
    { icon: Award, title: "Financial Performance", description: "Strong financial performance reflecting operational excellence.", color: "bg-purple-500", link: "/solutions" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Revenue and Profits"
        description="Explore our financial performance and sustainable business model."
        label="FINANCIAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Revenue" }]}
        ctaText="Our Services"
        ctaHref="/solutions"
        backgroundImage="/hero-background-image.jpeg"
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

export default Revenue;