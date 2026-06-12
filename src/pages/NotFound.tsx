import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 error for analytics/monitoring
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Send to analytics if available
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "404", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Page Not Found - 404 | Octaleads Technologies"
        description="The page you are looking for does not exist. Return to our homepage or browse our products and services."
        keywords="404, page not found, octaleads"
        noindex={true}
      />
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl sm:text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link to="/products">
                <Search className="w-4 h-4 mr-2" />
                Browse Products
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Popular Pages:</p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link to="/products" className="text-primary hover:underline">Products</Link>
              <Link to="/services" className="text-primary hover:underline">Services</Link>
              <Link to="/industries" className="text-primary hover:underline">Industries</Link>
              <Link to="/resources" className="text-primary hover:underline">Resources</Link>
              <Link to="/about" className="text-primary hover:underline">About</Link>
              <Link to="/contact" className="text-primary hover:underline">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
