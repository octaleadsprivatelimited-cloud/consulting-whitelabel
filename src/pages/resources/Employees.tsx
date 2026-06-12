import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Users, Award, Briefcase, Target } from "lucide-react";

const Employees = () => {
  const seo = useSEO();
  const features = [
    { icon: Users, title: "Dedicated Teams", description: "Our employees are organized into specialized, project-focused teams that deliver consistent quality and measurable results. Each team brings deep domain expertise, clear ownership, and seamless collaboration to ensure timely, scalable, and client-centric solutions for every engagement.", color: "bg-blue-500", link: "/careers" },
    { icon: Award, title: "Expert Professionals", description: "Our certified SAP and IT professionals work in dedicated, project-focused teams, combining deep technical expertise, strong domain knowledge, and clear accountability to deliver reliable, scalable, and high-quality solutions that align with our clients' business goals.", color: "bg-orange-500", link: "/careers" },
    { icon: Briefcase, title: "Management Excellence", description: "Our experienced management team drives strategic vision and operational excellence, ensuring efficient execution, strong governance, and consistent value delivery across all engagements.", color: "bg-green-500", link: "/careers" },
    { icon: Target, title: "Goal-Oriented", description: "Every team member is aligned with organizational objectives and client success, ensuring focused execution, measurable outcomes, and long-term value delivery.", color: "bg-purple-500", link: "/careers" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      <PageHero 
        title="Employees and Management Team"
        description="Meet our dedicated workforce and experienced management team driving innovation and success."
        label="HUMAN RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Employees" }]}
        ctaText="Join Our Team"
        ctaHref="/careers"
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

export default Employees;