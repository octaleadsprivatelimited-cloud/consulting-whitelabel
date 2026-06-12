import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General Questions",
    questions: [
      {
        question: "What services does Octaleads offer?",
        answer: "Octaleads offers comprehensive IT support services, SAP workshop for all major modules, and custom software development including mobile apps and web applications. We provide end-to-end digital solutions to help transform your business.",
      },
      {
        question: "How do I get started with Octaleads?",
        answer: "You can get started by contacting us at contact@octaleads.com or filling out our contact form. Our team will get back to you within 24 hours to discuss your needs and provide a customized solution.",
      },
      {
        question: "Where is Octaleads located?",
        answer: "Octaleads is a modern IT and SAP service company. For specific location details and to discuss your requirements, please contact us at contact@octaleads.com.",
      },
    ],
  },
  {
    title: "IT Support Services",
    questions: [
      {
        question: "What IT support services do you provide?",
        answer: "We offer comprehensive IT support including infrastructure setup, cloud services configuration, system maintenance, and ongoing technical assistance. Our team helps you build and maintain a robust IT infrastructure.",
      },
      {
        question: "Do you provide 24/7 IT support?",
        answer: "Yes, we offer 24/7 support for our premium customers. Contact us to learn more about our support packages and availability options.",
      },
      {
        question: "Can you help with cloud migration?",
        answer: "Absolutely! We specialize in cloud services and can help you migrate your infrastructure to the cloud safely and efficiently. Our team provides step-by-step guidance throughout the migration process.",
      },
    ],
  },
  {
    title: "Software Solutions",
    questions: [
      {
        question: "What types of software do you develop?",
        answer: "We develop custom software solutions including mobile applications (iOS and Android), web applications, and enterprise software. Our solutions are tailored to meet your specific business requirements.",
      },
      {
        question: "What is the typical development timeline?",
        answer: "Development timelines vary based on project scope and complexity. We provide detailed project timelines during the initial consultation phase. Contact us to discuss your specific project requirements.",
      },
      {
        question: "Do you provide maintenance and support after development?",
        answer: "Yes, we offer ongoing maintenance and support services for all software solutions we develop. We ensure your applications remain up-to-date and continue to meet your business needs.",
      },
    ],
  },
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services and how we can help you."
        label="FAQ"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "FAQ" }]}
        backgroundImage="/hero-background.jpg"
      />

      {/* Search Bar */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`} className="border-border">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the answer you're looking for? Contact our team and we'll be happy to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group text-black">
                  Contact Us
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

export default FAQ;

