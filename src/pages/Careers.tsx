import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import * as LucideIcons from "lucide-react";
import { useData } from "@/context/DataContext";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const seo = useSEO();
  const { content } = useData();
  const { toast } = useToast();
  const benefits = content.benefits || [];
  const pageTexts = content.pageTexts;
  const textContent = pageTexts?.careers || {
    heroTitle: "Join Our Team",
    heroDescription: "Build your career with Octaleads and help transform businesses through innovative SAP solutions. We're looking for talented individuals who share our passion for excellence.",
    heroLabel: "CAREERS",
    sectionTag: "Why Join Us",
    sectionTitle: "Why Work at Octaleads?",
    sectionDescription: "We offer more than just a job – we offer a career path filled with growth opportunities, meaningful work, and a supportive environment.",
    cultureTitle: "Our Culture",
    cultureDescription: "Step into a workplace defined by warmth, positivity, and collaboration. At Octaleads, we balance focused work with moments to connect whether it's over a cup of coffee, a team activity, or shared successes. Our open-door and inclusive culture encourages ideas, teamwork, and continuous growth.",
    principlesTitle: "Our Principles",
    principlesDescription: "Octaleads Technologies is proud to be an equal employment opportunity employer. We provide fair and equal opportunities to all individuals, regardless of race, religion, gender, age, national origin, disability, marital status, or any other characteristic protected by law."
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    region: "",
    resume: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

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
          company: formData.location ? `Location: ${formData.location}` : "N/A",
          source: "Careers Form",
          message: `Phone: ${formData.phone || 'N/A'}\nRegion: ${formData.region || 'N/A'}\nResume File: ${formData.resume ? formData.resume.name : 'N/A'}`
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
      const formDataToSend = new FormData();
      formDataToSend.append("_subject", "Job Application - Octaleads");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("region", formData.region);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok || savedLocally) {
        toast({
          title: "Application Submitted",
          description: "Thank you for applying. We will review your application and get back to you soon.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          region: "",
          resume: null,
        });
        setIsDialogOpen(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-neutral-900 selection:bg-[#0067b8] selection:text-white">
      <SEO {...seo} />
      <Navbar />

      {/* Dell-inspired Page Hero Section */}
      <PageHero 
        title={textContent.heroTitle}
        description={textContent.heroDescription}
        label={textContent.heroLabel}
        breadcrumbs={[
          { label: "Careers" }
        ]}
        backgroundImage="/octaleads_careers.jpg"
        backgroundPosition="center 25%"
        mobileBackgroundPosition="center 85%"
        mobileBackgroundSize="auto 120%"
      />

      {/* Why Work With Us Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="border-b border-neutral-200 pb-4 mb-12 text-left">
            {textContent.sectionTag && (
              <span className="text-xs font-bold tracking-wider text-[#0076d6] uppercase block mb-1">
                {textContent.sectionTag}
              </span>
            )}
            <h2 className="text-xl md:text-2xl font-light text-neutral-900 tracking-tight">
              {textContent.sectionTitle}
            </h2>
            <p className="text-xs md:text-sm text-neutral-650 max-w-2xl mt-1 leading-relaxed">
              {textContent.sectionDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {benefits.map((benefit, index) => {
              const Icon = (LucideIcons as any)[benefit.iconName] || LucideIcons.Zap;
              return (
                <div
                  key={benefit.title}
                  className="group flex flex-col justify-between p-6 border border-neutral-200 bg-white hover:border-neutral-350 hover:shadow-md transition-all rounded-none"
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-10 h-10 bg-neutral-100 flex items-center justify-center text-[#0076d6] rounded-none">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="openings" className="py-16 md:py-20 bg-[#f5f5f5] border-t border-b border-neutral-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold tracking-wider text-[#0076d6] uppercase block">
              Open Positions
            </span>
            <h2 className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">
              Current Opportunities
            </h2>
            <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Explore our open positions and find the role that matches your skills and career goals.
            </p>
            <div className="pt-2">
              <Button 
                onClick={() => setIsDialogOpen(true)}
                className="bg-[#1d1d1d] text-white hover:bg-[#333333] px-6 py-3 h-auto text-xs font-bold uppercase tracking-wider rounded-none"
              >
                APPLY JOB
              </Button>
            </div>
          </div>

          {/* Our Culture & Our Principles Section */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {/* Our Culture Card */}
            <div className="p-6 border border-neutral-200 bg-white rounded-none">
              <h3 className="text-sm font-semibold text-neutral-900 mb-3 border-b border-neutral-150 pb-2">
                {textContent.cultureTitle || "Our Culture"}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {textContent.cultureDescription}
              </p>
            </div>

            {/* Our Principles Card */}
            <div className="p-6 border border-neutral-200 bg-white rounded-none">
              <h3 className="text-sm font-semibold text-neutral-900 mb-3 border-b border-neutral-150 pb-2">
                {textContent.principlesTitle || "Our Principles"}
              </h3>
              <div className="space-y-3 text-xs text-neutral-600">
                <p className="leading-relaxed">
                  {textContent.principlesDescription}
                </p>
                <p className="leading-relaxed">
                  Since our inception, we have grown organically by hiring the best talent and fostering a culture of excellence. We are always looking for skilled professionals to join our team. If you have relevant experience, we would love to hear from you. Please send your details to – <a href="mailto:careers@octaleads.com" className="text-[#0076d6] hover:underline font-semibold">careers@octaleads.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Submission Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-none">
          <DialogHeader>
            <DialogTitle className="text-xl font-light text-[#1d1d1d] border-b border-[#e5e5e5] pb-3 text-left">
              SUBMIT RESUME
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} action={`https://formspree.io/f/${content?.formspreeId || "maqwrdrv"}`} method="POST" encType="multipart/form-data" className="mt-6 space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-xs font-semibold text-[#555555]">
                  Your Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 rounded-none"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-xs font-semibold text-[#555555]">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 rounded-none"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-xs font-semibold text-[#555555]">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-2 rounded-none"
                />
              </div>

              <div>
                <Label htmlFor="location" className="text-xs font-semibold text-[#555555]">
                  Preferred Job Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Preferred Job Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="mt-2 rounded-none"
                />
              </div>

              <div>
                <Label htmlFor="region" className="text-xs font-semibold text-[#555555]">
                  Select Region/Country <span className="text-red-500">*</span>
                </Label>
                <Select required value={formData.region} onValueChange={(value) => setFormData(prev => ({ ...prev, region: value }))}>
                  <SelectTrigger className="mt-2 rounded-none">
                    <SelectValue placeholder="Select Region/Country" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="resume" className="text-xs font-semibold text-[#555555]">
                  Upload Your Resume <span className="text-red-500">*</span>
                </Label>
                <div className="mt-2 flex gap-2">
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="flex-1 rounded-none file:rounded-none file:border-0 file:bg-[#e3e8ed] file:text-xs file:font-semibold"
                  />
                </div>
                {formData.resume && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Selected: {formData.resume.name}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox id="consent" required className="mt-1 rounded-none" />
              <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                By filling this form you authorize us to contact you via Email, Phone or any other mode of communication for processing your application.
              </Label>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="rounded-none"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#0076d6] hover:bg-[#005ba3] text-white rounded-none"
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Careers;
