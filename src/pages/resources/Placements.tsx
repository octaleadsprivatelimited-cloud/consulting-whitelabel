import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, TrendingUp, Users, Building2, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const placementFeatures = [
  {
    icon: TrendingUp,
    title: "95% Placement Rate",
    description: "Industry-leading placement success rate with top companies.",
    color: "bg-blue-500",
    link: "/contact",
  },
  {
    icon: Building2,
    title: "200+ Hiring Partners",
    description: "Strong network of hiring partners across IT industry.",
    color: "bg-orange-500",
    link: "/contact",
  },
  {
    icon: Users,
    title: "500+ Candidates Placed",
    description: "Successful placement of candidates in leading organizations.",
    color: "bg-green-500",
    link: "/contact",
  },
  {
    icon: Briefcase,
    title: "₹8 LPA Average Package",
    description: "Competitive salary packages for our workshop professionals.",
    color: "bg-purple-500",
    link: "/contact",
  },
];

const hiringPartners = [
  "TCS", "Infosys", "Wipro", "Accenture", "Deloitte", "IBM", "Capgemini", "HCL", "Tech Mahindra", "Cognizant"
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "Infosys",
    testimonial: "The workshop was excellent and the placement support helped me land my dream job at Infosys.",
  },
  {
    name: "Priya Patel",
    role: "DevOps Engineer",
    company: "TCS",
    testimonial: "Great learning experience with real-time projects. Got placed within 2 weeks of completion.",
  },
  {
    name: "Amit Kumar",
    role: "React Developer",
    company: "Accenture",
    testimonial: "The mock interviews prepared me well. Now working as a React Developer at Accenture.",
  },
];

const Placements = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      
      <PageHero
        title="Placement Assistance"
        description="Your gateway to a successful tech career with dedicated placement support"
        label="WORKSHOP & PLACEMENTS"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Placements" },
        ]}
        ctaText="Apply Now"
        ctaHref="/contact"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementFeatures.map((feature, index) => (
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
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-foreground font-medium hover:gap-3 transition-all gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Hiring Partners
            </h2>
            <p className="text-muted-foreground text-lg">
              We have tie-ups with leading IT companies for direct placements
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {hiringPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-background border border-border rounded-full text-foreground font-medium"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from our alumni who have successfully launched their IT careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.testimonial}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Launch Your Tech Career?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join our workshop program and get dedicated placement assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/resources/training-classes">
              <Button size="lg" variant="outline" className="font-semibold bg-transparent text-white border-white hover:bg-white hover:text-primary">
                View Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Placements;