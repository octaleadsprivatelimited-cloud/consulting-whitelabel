import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Brain, Code, Database, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Skills = () => {
  const seo = useSEO();
  const skills = [
    { icon: Brain, title: "Technical Expertise", description: "Deep knowledge in SAP modules, cloud technologies, and enterprise solutions.", color: "bg-blue-500", link: "/solutions" },
    { icon: Code, title: "Development Skills", description: "Proficiency in ABAP, Fiori, UI5, and modern programming languages.", color: "bg-orange-500", link: "/solutions" },
    { icon: Database, title: "Data Management", description: "Expert capabilities in database administration and data analytics.", color: "bg-green-500", link: "/solutions" },
    { icon: Settings, title: "System Integration", description: "Experience integrating complex enterprise systems and workflows.", color: "bg-purple-500", link: "/solutions" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      <PageHero 
        title="Skills, Expertise, and Experience"
        description="Discover the comprehensive skill sets and expertise that power our solutions."
        label="HUMAN RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Skills" }]}
        ctaText="Work With Us"
        ctaHref="/contact"
        backgroundImage="/hero-background-image.jpeg"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <skill.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {skill.title}
                </h3>
                <div className={`w-12 h-1 ${skill.color} mb-4`}></div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{skill.description}</p>
                <Link 
                  to={skill.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {skill.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Skills;