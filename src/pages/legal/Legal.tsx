import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Legal Information"
        description="Important legal notices and disclaimers"
        label="LEGAL"
        breadcrumbs={[{ label: "Legal" }]}
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

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Company Information</h2>
            <p className="text-muted-foreground mb-6">
              <strong>Company Name:</strong> Procyon Solutions<br />
              <strong>Registered Office:</strong> India<br />
              <strong>Email:</strong> info@procyonsol.com
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Disclaimer</h2>
            <p className="text-muted-foreground mb-6">
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              In no event shall Procyon Solutions be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">External Links</h2>
            <p className="text-muted-foreground mb-6">
              Through this website, you may be able to link to other websites which are not under the control of Procyon Solutions. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Procyon Solutions or its content suppliers and is protected by international copyright laws. Unauthorized reproduction or distribution of this content is strictly prohibited.
            </p>



            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of India.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact</h2>
            <p className="text-muted-foreground mb-6">
              For any legal inquiries, please contact us at:<br />
              <strong>Email:</strong> info@procyonsol.com
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;