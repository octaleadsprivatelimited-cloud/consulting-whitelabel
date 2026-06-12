import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Download, Calendar, User, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const whitepapers = [
  {
    title: "IT Infrastructure Best Practices for Modern Businesses",
    description: "A comprehensive guide to setting up and maintaining robust IT infrastructure for growing businesses.",
    category: "IT Support",
    date: "2024-01-15",
    author: "Octaleads Team",
    downloadLink: "#",
  },
  {
    title: "Software Engineering Onboarding: A Complete Guide",
    description: "Learn how to successfully onboard remote software developers into your organization with proven strategies.",
    category: "Talent Sourcing",
    date: "2024-02-20",
    author: "Octaleads Team",
    downloadLink: "#",
  },
  {
    title: "Cloud Services Migration: Step-by-Step Approach",
    description: "Essential insights for migrating your business operations to the cloud safely and efficiently.",
    category: "IT Support",
    date: "2024-03-10",
    author: "Octaleads Team",
    downloadLink: "#",
  },
  {
    title: "Custom Software Development: ROI and Best Practices",
    description: "Understand the return on investment and best practices for custom software development projects.",
    category: "Software Solutions",
    date: "2024-04-05",
    author: "Octaleads Team",
    downloadLink: "#",
  },
  {
    title: "Developer Retention Strategies: Corporate Talent Programs",
    description: "A detailed overview of effective developer retention and motivation programs for corporate teams.",
    category: "Talent Sourcing",
    date: "2024-05-12",
    author: "Octaleads Team",
    downloadLink: "#",
  },
  {
    title: "Mobile App Development: Trends and Strategies",
    description: "Explore the latest trends and strategies in mobile application development.",
    category: "Software Solutions",
    date: "2024-06-18",
    author: "Octaleads Team",
    downloadLink: "#",
  },
];

const Whitepapers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Whitepapers"
        description="In-depth whitepapers on IT best practices and technical recruitment strategies."
        label="INSIGHTS & RESEARCH"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Whitepapers" }]}
        backgroundImage="/hero-background.jpg"
      />

      {/* Whitepapers List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              In-depth Research & Insights
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {whitepapers.map((paper, index) => {
              const colors = ["bg-accent", "bg-sprinklr-green", "bg-sprinklr-purple"];
              return (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <FileText className="w-12 h-12 text-foreground" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title with colored underline */}
                    <div className="mb-4">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {paper.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mt-1 mb-2">
                        {paper.title}
                      </h3>
                      <div className={`w-12 h-1 rounded-full ${colors[index % colors.length]}`}></div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 min-h-[60px]">
                      {paper.description}
                    </p>

                    {/* Meta */}
                    <p className="text-muted-foreground text-xs mb-4">
                      {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • {paper.author}
                    </p>
                    
                    {/* Download Link */}
                    <a 
                      href={paper.downloadLink}
                      className="inline-flex items-center gap-2 text-foreground font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
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
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to receive new whitepapers and insights directly to your inbox.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="cta" size="lg" className="group">
                Subscribe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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

export default Whitepapers;

