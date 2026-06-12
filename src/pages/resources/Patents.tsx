import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { FileKey, Lock, ScrollText, Lightbulb } from "lucide-react";

const Patents = () => {
  const features = [
    { icon: FileKey, title: "Patents", description: "Patented technologies and innovations protecting our unique solutions.", color: "bg-blue-500", link: "/about" },
    { icon: Lock, title: "Licenses", description: "Software licenses and partnerships with leading technology providers.", color: "bg-orange-500", link: "/about" },
    { icon: ScrollText, title: "Proprietary Technology", description: "Exclusive technologies developed in-house for competitive advantage.", color: "bg-green-500", link: "/about" },
    { icon: Lightbulb, title: "Innovation Portfolio", description: "Growing portfolio of intellectual property from ongoing R&D efforts.", color: "bg-purple-500", link: "/about" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero 
        title="Patents, Licenses, and Proprietary Technology"
        description="Discover our protected technologies and innovation portfolio."
        label="TECHNOLOGICAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Patents" }]}
        ctaText="Learn More"
        ctaHref="/about"
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

export default Patents;