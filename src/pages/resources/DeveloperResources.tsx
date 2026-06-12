import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Book, Terminal, GitBranch, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";

const developerResources = [
  {
    title: "API Documentation",
    icon: Code,
    description: "Comprehensive API documentation for integrating with our services",
    items: [
      { name: "REST API Reference", link: "#", type: "Documentation" },
      { name: "GraphQL API Guide", link: "#", type: "Documentation" },
      { name: "Webhook Documentation", link: "#", type: "Documentation" },
      { name: "API Authentication", link: "#", type: "Guide" },
    ],
  },
  {
    title: "SDKs & Libraries",
    icon: Terminal,
    description: "Software development kits and libraries for popular programming languages",
    items: [
      { name: "JavaScript SDK", link: "#", type: "NPM Package" },
      { name: "Python SDK", link: "#", type: "PyPI Package" },
      { name: "Java SDK", link: "#", type: "Maven Package" },
      { name: "PHP SDK", link: "#", type: "Composer Package" },
    ],
  },
  {
    title: "Code Examples",
    icon: Book,
    description: "Sample code and integration examples to get you started quickly",
    items: [
      { name: "Basic Integration Example", link: "#", type: "Code Sample" },
      { name: "Authentication Flow", link: "#", type: "Tutorial" },
      { name: "Error Handling Guide", link: "#", type: "Guide" },
      { name: "Best Practices", link: "#", type: "Documentation" },
    ],
  },
  {
    title: "Developer Tools",
    icon: GitBranch,
    description: "Tools and utilities to streamline your development process",
    items: [
      { name: "API Testing Tool", link: "#", type: "Tool" },
      { name: "CLI Tool", link: "#", type: "CLI" },
      { name: "Postman Collection", link: "#", type: "Collection" },
      { name: "Development Sandbox", link: "#", type: "Environment" },
    ],
  },
];

const DeveloperResources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Developer Resources"
        description="Resources for developers including APIs, SDKs, and integration guides."
        label="DEVELOPER PORTAL"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Developer Resources" }]}
      />

      {/* Developer Resources */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {developerResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-sap-light-purple flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {resource.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {resource.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {item.type}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Quick Start Guide
            </h2>
            <div className="bg-card rounded-xl p-6 border border-border space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Get Your API Key</h3>
                  <p className="text-sm text-muted-foreground">
                    Sign up and obtain your API key from the developer dashboard.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Install SDK</h3>
                  <p className="text-sm text-muted-foreground">
                    Install the SDK for your preferred programming language.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Start Building</h3>
                  <p className="text-sm text-muted-foreground">
                    Follow our code examples and documentation to integrate our services.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-primary-foreground"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Developer Support?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Our developer support team is here to help you integrate our services successfully.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Contact Developer Support
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="hero-outline" size="lg">
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

export default DeveloperResources;

