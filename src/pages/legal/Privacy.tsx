import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information"
        label="LEGAL"
        breadcrumbs={[{ label: "Privacy Policy" }]}
        backgroundImage="/hero-background.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert"
          >
            <p className="text-muted-foreground mb-8">
              <strong>Last Updated:</strong> December 26, 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-6">
              Procyon Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
            <p className="text-muted-foreground mb-4">We may collect personal information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Company name and job title</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-4">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the collected information to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process transactions and send related information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell your personal information. We may share your information with trusted third parties who assist us in operating our website, conducting business, or servicing you, provided they agree to keep this information confidential.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have questions about this Privacy Policy, please contact us at:
              <br /><br />
              <strong>Email:</strong> info@procyonsol.com<br />
              <strong>Address:</strong> Procyon Solutions, India
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;