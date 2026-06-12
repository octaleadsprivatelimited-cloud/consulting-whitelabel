import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const initializeAnalytics = () => {
    // Trigger storage event for GA initialization
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'cookie-consent',
      newValue: localStorage.getItem('cookie-consent')
    }));
    
    // Also try to initialize GA directly for same-tab updates
    if (typeof window !== 'undefined' && (window as any).initGA) {
      (window as any).initGA();
    }
  };

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ 
      accepted: true, 
      preferences: { essential: true, analytics: true, marketing: true },
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
    initializeAnalytics();
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ 
      accepted: true, 
      preferences: { essential: true, analytics: false, marketing: false },
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const dismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-3 sm:p-4 md:p-6"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-border rounded-xl shadow-2xl p-4 sm:p-5 md:p-6 relative">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 items-start md:items-center pr-8 sm:pr-10 md:pr-0">
                {/* Icon and content */}
                <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">
                      We value your privacy
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                      By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                      <Link to="/cookies" className="text-primary hover:underline">
                        Cookie Policy
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      for more information.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full md:w-auto">
                  <Button
                    variant="outline"
                    onClick={acceptEssential}
                    className="text-xs sm:text-sm w-full sm:w-auto"
                  >
                    Essential Only
                  </Button>
                  <Button
                    onClick={acceptAll}
                    className="text-xs sm:text-sm w-full sm:w-auto"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};