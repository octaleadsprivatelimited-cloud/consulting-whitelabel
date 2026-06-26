import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Play, Clock, User, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const tutorialCategories = [
  {
    title: "Getting Started",
    videos: [
      { title: "Introduction to Procyon Solutions Services", duration: "5:23", views: "1.2K", thumbnail: "🎥" },
      { title: "Setting Up Your Account", duration: "8:15", views: "890", thumbnail: "🎥" },
      { title: "Navigating the Platform", duration: "6:42", views: "1.5K", thumbnail: "🎥" },
    ],
  },
  {
    title: "IT Support Services",
    videos: [
      { title: "Infrastructure Setup Basics", duration: "12:30", views: "2.1K", thumbnail: "🎥" },
      { title: "Cloud Services Configuration", duration: "15:45", views: "1.8K", thumbnail: "🎥" },
      { title: "System Maintenance Best Practices", duration: "10:20", views: "1.3K", thumbnail: "🎥" },
    ],
  },
  {
    title: "Talent Acquisition & Interviewing",
    videos: [
      { title: "Technical Sourcing Strategies", duration: "15:10", views: "3.1K", thumbnail: "🎥" },
      { title: "Conducting Coding Challenges", duration: "12:45", views: "2.5K", thumbnail: "🎥" },
      { title: "Assessing Soft Skills & Culture Fit", duration: "14:20", views: "2.9K", thumbnail: "🎥" },
      { title: "Structuring Developer Offer Proposals", duration: "11:30", views: "1.8K", thumbnail: "🎥" },
    ],
  },
  {
    title: "Software Development",
    videos: [
      { title: "Custom Software Development Process", duration: "14:25", views: "1.9K", thumbnail: "🎥" },
      { title: "Mobile App Development Tutorial", duration: "16:50", views: "2.3K", thumbnail: "🎥" },
      { title: "Web Application Development", duration: "13:15", views: "2.0K", thumbnail: "🎥" },
    ],
  },
];

const VideoTutorials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <PageHero 
        title="Video Tutorials"
        description="Step-by-step video tutorials to help you get started with our services."
        label="LEARNING CENTER"
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Video Tutorials" }]}
        backgroundImage="/hero-background-image.jpeg"
      />

      {/* Video Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {tutorialCategories.map((category, categoryIndex) => {
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
                    <div className="mb-4">
                      <Video className="w-12 h-12 text-foreground" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {category.title}
                    </h2>
                    <div className={`w-16 h-1 rounded-full ${colors[categoryIndex % colors.length]}`}></div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {category.videos.map((video, videoIndex) => (
                      <motion.div
                        key={video.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (videoIndex * 0.05) }}
                        className="group cursor-pointer"
                      >
                        <div className="flex flex-col">
                          {/* Icon */}
                          <div className="mb-4">
                            <Play className="w-10 h-10 text-foreground" strokeWidth={1.5} />
                          </div>
                          
                          {/* Title with colored underline */}
                          <div className="mb-3">
                            <h3 className="text-base font-bold text-foreground mb-2">
                              {video.title}
                            </h3>
                            <div className={`w-10 h-1 rounded-full ${colors[videoIndex % colors.length]}`}></div>
                          </div>
                          
                          {/* Info */}
                          <p className="text-muted-foreground text-sm mb-4">
                            {video.duration} • {video.views} views
                          </p>
                          
                          {/* Watch Link */}
                          <button 
                            className="inline-flex items-center gap-2 text-foreground font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                          >
                            <ArrowRight className="w-4 h-4" />
                            <span>Watch Video</span>
                          </button>
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
              Need More Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Can't find the tutorial you're looking for? Contact our team for personalized assistance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="group">
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

export default VideoTutorials;

