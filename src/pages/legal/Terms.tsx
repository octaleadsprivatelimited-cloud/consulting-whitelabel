import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Terms of Service"
        description="Terms and conditions for using our services"
        label="LEGAL"
        breadcrumbs={[{ label: "Terms of Service" }]}
        backgroundImage="/hero-background-image.jpeg"
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

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using the Octaleads website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Services Description</h2>
            <p className="text-muted-foreground mb-6">
              Octaleads provides SAP consulting, implementation, workshop, and support services. Our services include but are not limited to SAP S/4HANA implementation, migration services, corporate workshop, and ongoing maintenance and support.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. User Obligations</h2>
            <p className="text-muted-foreground mb-4">By using our services, you agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All content, trademarks, and intellectual property on our website are owned by Octaleads or its licensors. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Service Agreements</h2>
            <p className="text-muted-foreground mb-6">
              Specific services may be governed by separate service agreements or statements of work. In case of conflict between these Terms and a specific service agreement, the service agreement shall prevail.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Payment Terms</h2>
            <p className="text-muted-foreground mb-6">
              Payment terms for our services will be specified in the relevant service agreement or invoice. All fees are non-refundable unless otherwise stated in writing.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Confidentiality</h2>
            <p className="text-muted-foreground mb-6">
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information exchanged during the course of our business relationship.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              To the maximum extent permitted by law, Octaleads shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground mb-6">
              You agree to indemnify and hold harmless Octaleads and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Termination</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to suspend or terminate your access to our services at any time for any reason, including violation of these Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We may modify these Terms at any time. Continued use of our services after any changes constitutes acceptance of the modified Terms.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              For questions about these Terms, please contact us at:<br />
              <strong>Email:</strong> legal@octaleads.com<br />
              <strong>Address:</strong> Octaleads Technologies, India
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;