import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const interviewTopics = [
  "Behavioral Interview Techniques",
  "System Architecture Screenings",
  "Agile Sourcing Methodologies",
  "Salary Negotiation Strategies",
  "Applicant Tracking System (ATS) Flows",
  "Candidate Retention Management",
];

const vettingTopics = [
  "Coding Challenge Evaluation",
  "API Testing & Vetting Standards",
  "Cloud Deployment Assessments",
  "Security Assessment Frameworks",
  "Automation Vetting Pipelines",
];

const recruitmentAnalytics = [
  "Talent Mapping Analytics",
  "Salary Benchmarking Models",
  "Market Feasibility Reporting",
];

const TrainingClasses = () => {
  const modules = [
    {
      icon: BookOpen,
      title: "Recruitment Strategies",
      description: "Learn sourcing frameworks, applicant workflows, and negotiation tactics.",
      color: "bg-blue-500",
      items: interviewTopics,
    },
    {
      icon: Code,
      title: "Vetting & Screenings",
      description: "Understand developer code screening, systems analysis, and coding tests.",
      color: "bg-orange-500",
      items: vettingTopics,
    },
    {
      icon: Cloud,
      title: "Talent Analytics",
      description: "Learn competitor analysis, salary benchmarking, and market density maps.",
      color: "bg-green-500",
      items: recruitmentAnalytics,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero 
        title="Technical Vetting Workshops"
        description="Join our comprehensive technical vetting and recruitment workshops led by industry specialists."
        label="RECRUITMENT WORKSHOPS"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Workshop Classes" }]}
        ctaText="Request Enrollment"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="mb-6">
                  <module.icon className="w-16 h-16 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {module.title}
                </h3>
                <div className={`w-12 h-1 ${module.color} mb-4`}></div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{module.description}</p>
                <ul className="space-y-2 mb-6">
                  {module.items.slice(0, 5).map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">• {item}</li>
                  ))}
                  {module.items.length > 5 && (
                    <li className="text-sm text-muted-foreground">• +{module.items.length - 5} more topics</li>
                  )}
                </ul>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Explore {module.title.split(' ')[0]}
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
              Need Custom Workshop for Your Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer customized corporate workshop programs tailored to your organization's specific recruitment and interviewing needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 group">
                  Request Custom Workshop
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/resources/training-materials">
                <Button variant="outline" size="lg">
                  View Sourcing Materials
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

export default TrainingClasses;