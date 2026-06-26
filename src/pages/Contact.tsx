import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import * as Icons from "lucide-react";
import { useData } from "@/context/DataContext";
import { Link } from "react-router-dom";

const Contact = () => {
  const seo = useSEO();
  const { toast } = useToast();
  const { content } = useData();

  const contactText = content.pageTexts?.contact || {};
  const methods = content.contactMethods || [];

  const heroLabel = contactText.heroLabel || "GET IN TOUCH";
  const heroTitle = contactText.heroTitle || "Contact Us";
  const heroDescription = contactText.heroDescription || "Get in touch with our team to discuss how we can help transform your business.";
  
  const sectionTitle = contactText.sectionTitle || "Contact Us";
  const sectionDescription = contactText.sectionDescription || "Fill out the form below and we'll get back to you within 24 hours.";
  
  const addressTitle = contactText.ctaTitle || "Where to find us";
  const addressDescription = contactText.ctaDescription || "Hyderabad, Telangana, India";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    jobTitle: "",
    country: "",
    interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formspreeId = content?.formspreeId || "";
    let savedLocally = false;

    // 1. Submit to local Express backend for Admin Panel visibility
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          source: "Contact Form",
          message: `${formData.message}\nJob Title: ${formData.jobTitle || 'N/A'}\nCountry: ${formData.country || 'N/A'}\nInterest: ${formData.interest || 'N/A'}`
        }),
      });
      if (response.ok) {
        savedLocally = true;
      }
    } catch (error) {
      console.warn("Failed to save lead in local backend database:", error);
    }

    // 2. Submit to Formspree for email forwarding
    try {
      const fsResponse = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Contact Form Submission - Procyon Solutions",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          jobTitle: formData.jobTitle,
          country: formData.country,
          interest: formData.interest,
          message: formData.message,
        }),
      });

      if (fsResponse.ok || savedLocally) {
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          jobTitle: "",
          country: "",
          interest: "",
          message: "",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const getIconComponent = (iconName: string) => {
    return (Icons as any)[iconName] || Icons.Mail;
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-neutral-900 selection:bg-[#0067b8] selection:text-white">
      <SEO {...seo} />
      <Navbar />

      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={heroTitle}
        description={heroDescription}
        label={heroLabel}
        breadcrumbs={[
          { label: "Contact" }
        ]}
        backgroundImage="/Procyon Solutions-sap.jpg"
        fullBackground={true}
        textBgWhite={true}
        extraPadding={true}
      />

      {/* Corporate Contact Methods Grid */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {methods.map((method, index) => {
              const IconComponent = getIconComponent(method.iconName);
              return (
                <div 
                  key={method.title || index}
                  className="border border-neutral-200 bg-white p-6 flex flex-col justify-between min-h-[220px] rounded-none"
                >
                  <div className="space-y-4">
                    <div className="text-[#0076d6] w-8 h-8 flex items-center justify-center bg-neutral-100 rounded-none">
                      <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">{method.title}</h3>
                      <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col gap-1">
                    <span className="text-xs font-semibold text-neutral-950">{method.contact}</span>
                    <a 
                      href={method.link || "#"}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0076d6] hover:text-[#005ba3] hover:underline uppercase tracking-wider mt-1 group"
                    >
                      {method.action || "Get support"}
                      <span className="inline-block transform transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form & Address Split Section */}
      <section className="py-12 md:py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
            
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="text-2xl font-light text-neutral-900 tracking-tight">{sectionTitle}</h2>
                <p className="text-xs text-neutral-650 mt-2">{sectionDescription}</p>
              </div>
              
              <form
                onSubmit={handleSubmit}
                action={`https://formspree.io/f/${content?.formspreeId || ""}`}
                method="POST"
                className="bg-white border border-neutral-200 p-6 md:p-8 space-y-6 shadow-sm rounded-none"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-semibold text-neutral-800">
                    Full name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-none border-neutral-300 h-10 text-neutral-900 focus-visible:ring-[#0076d6] focus-visible:border-[#0076d6] focus-visible:ring-1"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-semibold text-neutral-800">
                    Business email <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-none border-neutral-300 h-10 text-neutral-900 focus-visible:ring-[#0076d6] focus-visible:border-[#0076d6] focus-visible:ring-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-xs font-semibold text-neutral-800">
                      Company <span className="text-red-600">*</span>
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                      className="rounded-none border-neutral-300 h-10 text-neutral-900 focus-visible:ring-[#0076d6] focus-visible:border-[#0076d6] focus-visible:ring-1"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-xs font-semibold text-neutral-800">
                      Job title
                    </Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="rounded-none border-neutral-300 h-10 text-neutral-900 focus-visible:ring-[#0076d6] focus-visible:border-[#0076d6] focus-visible:ring-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-xs font-semibold text-neutral-800">
                      Country/Region <span className="text-red-600">*</span>
                    </Label>
                    <Select
                      value={formData.country}
                      onValueChange={(value) => setFormData({ ...formData, country: value })}
                    >
                      <SelectTrigger className="rounded-none border-neutral-300 h-10 text-neutral-900 focus:ring-[#0076d6]">
                        <SelectValue placeholder="Select country/region" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest" className="text-xs font-semibold text-neutral-800">
                      Area of interest
                    </Label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                    >
                      <SelectTrigger className="rounded-none border-neutral-300 h-10 text-neutral-900 focus:ring-[#0076d6]">
                        <SelectValue placeholder="Select interest area" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="rollout">ROLL-OUT</SelectItem>
                        <SelectItem value="hypercare">HyperCare Support</SelectItem>
                        <SelectItem value="support">AMS</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-semibold text-neutral-800">
                    Tell us about your requirements <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="Provide details about your project, timeline, or support request..."
                    className="rounded-none border-neutral-300 text-neutral-900 focus-visible:ring-[#0076d6] focus-visible:border-[#0076d6] focus-visible:ring-1 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="rounded-none w-full h-11 bg-[#1d1d1d] hover:bg-[#333333] text-white font-bold uppercase tracking-wider text-xs transition-colors duration-150"
                >
                  Submit request
                </Button>
              </form>
            </div>

            {/* Right Column: Office Card & Resources */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Address Card */}
              <div className="bg-white border border-neutral-200 p-6 md:p-8 space-y-4 shadow-sm rounded-none">
                <h3 className="text-sm font-semibold text-neutral-900">{addressTitle}</h3>
                <div className="border-t border-neutral-100 pt-4 space-y-2">
                  <h4 className="text-xs font-semibold text-neutral-800">Corporate headquarters</h4>
                  <p className="text-xs text-neutral-900 font-bold">Procyon Solutions</p>
                  <address className="not-italic text-xs text-neutral-600 leading-relaxed space-y-1">
                    {addressDescription.split("\n").map((line, lidx) => (
                      <span key={lidx} className="block">{line.trim()}</span>
                    ))}
                  </address>
                </div>
                <div className="pt-2">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressDescription)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0076d6] hover:text-[#005ba3] hover:underline uppercase tracking-wider"
                  >
                    <span>Get directions</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Resource Portal Card */}
              <div className="bg-white border border-neutral-200 p-6 md:p-8 space-y-4 shadow-sm rounded-none">
                <h3 className="text-sm font-semibold text-neutral-900">Looking for support?</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  If you are an existing customer needing immediate assistance, please log in to our customer service portal or contact your account manager directly.
                </p>
                <div>
                  <Link 
                    to="/careers" 
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0076d6] hover:text-[#005ba3] hover:underline uppercase tracking-wider"
                  >
                    <span>Explore career opportunities</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
