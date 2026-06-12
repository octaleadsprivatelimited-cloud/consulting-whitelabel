import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, FileText, Search, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const documentationCategories = [
  {
    title: "Getting Started",
    description: "Essential guides to help you get started with our services",
    items: [
      { title: "Introduction to IT Support Services", link: "#" },
      { title: "SAP Training Overview", link: "#" },
      { title: "Software Solutions Guide", link: "#" },
      { title: "Quick Start Guide", link: "#" },
    ],
  },
  {
    title: "IT Support Services",
    description: "Documentation for infrastructure setup and cloud services",
    items: [
      { title: "Infrastructure Setup Guide", link: "#" },
      { title: "Cloud Services Configuration", link: "#" },
      { title: "System Maintenance Procedures", link: "#" },
      { title: "Troubleshooting Guide", link: "#" },
    ],
  },
  {
    title: "SAP Training",
    description: "Resources for SAP module training and certification",
    items: [
      { title: "SAP FICO Module Guide", link: "#" },
      { title: "SAP MM Module Documentation", link: "#" },
      { title: "SAP SD Module Training", link: "#" },
      { title: "SAP HCM Module Guide", link: "#" },
    ],
  },
  {
    title: "Software Development",
    description: "Documentation for custom software development",
    items: [
      { title: "API Documentation", link: "#" },
      { title: "Mobile App Development Guide", link: "#" },
      { title: "Web Application Standards", link: "#" },
      { title: "Integration Best Practices", link: "#" },
    ],
  },
];

const Documentation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Documentation"
        description="Comprehensive guides and documentation for our services and solutions."
        label="KNOWLEDGE BASE"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Documentation" }]}
        backgroundImage="/hero-background-image.jpeg"
      />

      {/* Search Bar */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {documentationCategories.map((category, categoryIndex) => {
              const colors = ["bg-accent", "bg-sprinklr-green", "bg-sprinklr-purple", "bg-accent"];
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {category.title}
                    </h2>
                    <div className={`w-16 h-1 rounded-full ${colors[categoryIndex % colors.length]}`}></div>
                    <p className="text-muted-foreground mt-3">{category.description}</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        className="group"
                      >
                        <div className="flex flex-col">
                          {/* Icon */}
                          <div className="mb-4">
                            <FileText className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                          </div>
                          
                          {/* Title with colored underline */}
                          <div className="mb-3">
                            <h3 className="text-base font-bold text-foreground mb-2">
                              {item.title}
                            </h3>
                            <div className={`w-10 h-1 rounded-full ${colors[itemIndex % colors.length]}`}></div>
                          </div>
                          
                          {/* Explore Link */}
                          <a 
                            href={item.link}
                            className="inline-flex items-center gap-2 text-foreground font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-2"
                          >
                            <ArrowRight className="w-4 h-4" />
                            <span>Read Guide</span>
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
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
              Can't find what you're looking for?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our support team for additional assistance with documentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
                  Contact Support
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

export default Documentation;

