import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { DollarSign, PiggyBank, TrendingUp, BarChart3 } from "lucide-react";

const Capital = () => {
  const seo = useSEO();
  const features = [
    { icon: DollarSign, title: "Capital Reserves", description: "Strong capital base ensuring financial stability and growth opportunities.", color: "bg-blue-500", link: "/partners" },
    { icon: PiggyBank, title: "Investment Portfolio", description: "Diversified investments supporting long-term business sustainability.", color: "bg-orange-500", link: "/partners" },
    { icon: TrendingUp, title: "Growth Capital", description: "Dedicated funds for expansion, innovation, and strategic initiatives.", color: "bg-green-500", link: "/partners" },
    { icon: BarChart3, title: "Asset Management", description: "Professional management of financial assets maximizing returns.", color: "bg-purple-500", link: "/partners" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      <PageHero 
        title="Capital and Investments"
        description="Understanding our financial foundation and investment strategies."
        label="FINANCIAL RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Capital" }]}
        ctaText="Partner With Us"
        ctaHref="/partners"
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

export default Capital;