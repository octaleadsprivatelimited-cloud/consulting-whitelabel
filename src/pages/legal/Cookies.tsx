import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { motion } from "framer-motion";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        title="Cookie Policy"
        description="How we use cookies and similar technologies"
        label="LEGAL"
        breadcrumbs={[{ label: "Cookie Policy" }]}
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

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground mb-4">We use the following types of cookies:</p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Essential Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Analytics Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's structure and content.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Marketing Cookies</h3>
            <p className="text-muted-foreground mb-6">
              These cookies are used to track visitors across websites. They are intended to display ads that are relevant and engaging for individual users, making them more valuable for publishers and third-party advertisers.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Cookies We Use</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-border rounded-lg">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-foreground font-semibold">Cookie Name</th>
                    <th className="px-4 py-3 text-left text-foreground font-semibold">Type</th>
                    <th className="px-4 py-3 text-left text-foreground font-semibold">Purpose</th>
                    <th className="px-4 py-3 text-left text-foreground font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">cookie-consent</td>
                    <td className="px-4 py-3">Essential</td>
                    <td className="px-4 py-3">Stores your cookie preferences</td>
                    <td className="px-4 py-3">1 year</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">_ga</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">Google Analytics - distinguishes unique users by assigning a randomly generated number</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">_ga_*</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">Google Analytics 4 - used to persist session state</td>
                    <td className="px-4 py-3">2 years</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">_gid</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">Google Analytics - distinguishes users for 24-hour period</td>
                    <td className="px-4 py-3">24 hours</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-3">_gat</td>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">Google Analytics - used to throttle request rate</td>
                    <td className="px-4 py-3">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Google Analytics</h2>
            <p className="text-muted-foreground mb-4">
              We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information about:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Pages you visit and how long you spend on each page</li>
              <li>How you arrived at our website (e.g., search engine, direct link, referral)</li>
              <li>Your general geographic location (country/city level)</li>
              <li>Your device type, browser, and operating system</li>
              <li>Interactions with website features and content</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              This data is collected anonymously and aggregated. We have configured Google Analytics to anonymize IP addresses, ensuring your exact location cannot be identified. You can opt out of Google Analytics tracking by selecting "Essential Only" in our cookie consent banner, or by installing the{" "}
              <a 
                href="https://tools.google.com/dlpage/gaoptout" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Use our cookie consent banner to accept or reject non-essential cookies</li>
              <li>Adjust your browser settings to block or delete cookies</li>
              <li>Use browser extensions to manage cookies</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Please note that disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Some cookies are placed by third-party services that appear on our pages. We do not control the dissemination of these cookies. You should check the third-party websites for more information about their cookies.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Updates to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about our use of cookies, please contact us at:<br />
              <strong>Email:</strong> privacy@octaleads.com
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;