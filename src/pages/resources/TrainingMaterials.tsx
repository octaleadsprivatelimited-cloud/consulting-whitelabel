import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const sourcingProfiles = [
  "Full-Stack Software Engineers",
  "Frontend Developers (React/Angular/Vue)",
  "Backend Engineers (Node/Go/Python/Java)",
  "Mobile App Developers (iOS/Android)",
  "UI/UX Designers & Product Designers",
  "Product Managers & Owners",
  "Scrum Masters & Agile Coaches",
  "QA Engineers & Automation Testers",
];

const infraCloudProfiles = [
  "DevOps Engineers & Pipelines Developers",
  "Cloud Architects (AWS/Azure/GCP)",
  "Kubernetes & Container Specialists",
  "Site Reliability Engineers (SRE)",
  "System & Database Administrators",
  "Network & Cyber Security Engineers",
];

const dataScienceProfiles = [
  "Data Engineers & Data Architects",
  "Machine Learning & AI Engineers",
  "Database Administrators (SQL/NoSQL)",
  "Data Analysts & BI Experts",
];

const TrainingMaterials = () => {
  const materials = [
    {
      icon: BookOpen,
      title: "Software Sourcing",
      description: "Recruitment standards and coding vetting guides for core application developers.",
      color: "bg-blue-500",
      items: sourcingProfiles,
    },
    {
      icon: Code,
      title: "Cloud & DevOps Sourcing",
      description: "Screening architectures and operational guides for infrastructure engineers.",
      color: "bg-orange-500",
      items: infraCloudProfiles,
    },
    {
      icon: Cloud,
      title: "Data Science & AI",
      description: "Technical assessments and data profiles for analytical specialists.",
      color: "bg-green-500",
      items: dataScienceProfiles,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Sourcing Resources"
        description="Sourcing materials, technical vetting checklists, and placement guidelines for IT professionals."
        label="RECRUITMENT RESOURCES"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Sourcing Resources" }]}
        ctaText="Request Resources"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {materials.map((material, index) => (
              <motion.div
                key={material.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <material.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {material.title}
                </h3>
                <div className={`w-12 h-1 ${material.color} mb-4`}></div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{material.description}</p>
                <ul className="space-y-2 mb-6">
                  {material.items.slice(0, 5).map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                  ))}
                  {material.items.length > 5 && (
                    <li className="text-sm text-muted-foreground">• +{material.items.length - 5} more</li>
                  )}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Access {material.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Custom Vetting Checklists?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to request custom technical screening challenges or coding assessment templates tailored to your tech stack.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                  Contact Sourcing Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" size="lg">
                  Back to Resources
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrainingMaterials;