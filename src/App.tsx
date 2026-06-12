import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
import { CookieConsent } from "./components/CookieConsent";
import { DataProvider } from "./context/DataContext";
import Index from "./pages/Index";
import Products from "./pages/Products";
import DynamicPage from "./pages/DynamicPage";
// Product Pages
import SapEcc from "./pages/products/SapEcc";
import SapFiori from "./pages/products/SapFiori";
import SapBtp from "./pages/products/SapBtp";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import Documentation from "./pages/resources/Documentation";
import VideoTutorials from "./pages/resources/VideoTutorials";
import Whitepapers from "./pages/resources/Whitepapers";
import Downloads from "./pages/resources/Downloads";
import FAQ from "./pages/resources/FAQ";
import DeveloperResources from "./pages/resources/DeveloperResources";
import TrainingMaterials from "./pages/resources/TrainingMaterials";
import TrainingClasses from "./pages/resources/TrainingClasses";
// Human Resources
import Employees from "./pages/resources/Employees";
import Skills from "./pages/resources/Skills";
import Leadership from "./pages/resources/Leadership";
// Physical Resources
import Facilities from "./pages/resources/Facilities";
import Equipment from "./pages/resources/Equipment";
// Financial Resources
import Capital from "./pages/resources/Capital";
import Revenue from "./pages/resources/Revenue";
// Technological Resources
import Software from "./pages/resources/Software";
import Patents from "./pages/resources/Patents";
import Research from "./pages/resources/Research";
// Intellectual Resources
import Brand from "./pages/resources/Brand";
import Trademarks from "./pages/resources/Trademarks";
import Processes from "./pages/resources/Processes";
// Operational Resources
import SupplyChain from "./pages/resources/SupplyChain";
import Distribution from "./pages/resources/Distribution";
import QualityControl from "./pages/resources/QualityControl";
// Training & Placements
import Placements from "./pages/resources/Placements";

import Partners from "./pages/Partners";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import WhoWeAre from "./pages/WhoWeAre";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import { AuthProvider } from "./context/AuthContext";
// Legal Pages
import Privacy from "./pages/legal/Privacy";
import Legal from "./pages/legal/Legal";
import Cookies from "./pages/legal/Cookies";
import Terms from "./pages/legal/Terms";

// Dynamic Detail Renderers
import DynamicService from "./pages/services/DynamicService";
import DynamicIndustry from "./pages/industries/DynamicIndustry";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DataProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/contract-staffing" element={<SapEcc />} />
          <Route path="/products/direct-hire" element={<SapFiori />} />
          <Route path="/products/executive-search" element={<SapBtp />} />
          {/* Fallback legacy routes */}
          <Route path="/products/sap-ecc" element={<SapEcc />} />
          <Route path="/products/sap-fiori" element={<SapFiori />} />
          <Route path="/products/sap-btp" element={<SapBtp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/video-tutorials" element={<VideoTutorials />} />
          <Route path="/resources/whitepapers" element={<Whitepapers />} />
          <Route path="/resources/downloads" element={<Downloads />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/resources/developer-resources" element={<DeveloperResources />} />
          <Route path="/resources/training-materials" element={<TrainingMaterials />} />
          <Route path="/resources/training-classes" element={<TrainingClasses />} />
          {/* Human Resources */}
          <Route path="/resources/employees" element={<Employees />} />
          <Route path="/resources/skills" element={<Skills />} />
          <Route path="/resources/leadership" element={<Leadership />} />
          {/* Physical Resources */}
          <Route path="/resources/facilities" element={<Facilities />} />
          <Route path="/resources/equipment" element={<Equipment />} />
          {/* Financial Resources */}
          <Route path="/resources/capital" element={<Capital />} />
          <Route path="/resources/revenue" element={<Revenue />} />
          {/* Technological Resources */}
          <Route path="/resources/software" element={<Software />} />
          <Route path="/resources/patents" element={<Patents />} />
          <Route path="/resources/research" element={<Research />} />
          {/* Intellectual Resources */}
          <Route path="/resources/brand" element={<Brand />} />
          <Route path="/resources/trademarks" element={<Trademarks />} />
          <Route path="/resources/processes" element={<Processes />} />
          {/* Operational Resources */}
          <Route path="/resources/supply-chain" element={<SupplyChain />} />
          <Route path="/resources/distribution" element={<Distribution />} />
          <Route path="/resources/quality-control" element={<QualityControl />} />
          {/* Training & Placements */}
          <Route path="/resources/placements" element={<Placements />} />
          
          <Route path="/services/:slug" element={<DynamicService />} />
          <Route path="/industries/:slug" element={<DynamicIndustry />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/p/:slug" element={<DynamicPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
   </DataProvider>
  </AuthProvider>
 </QueryClientProvider>
 </HelmetProvider>
);

export default App;