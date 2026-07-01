import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, Globe, Phone, Mail, MapPin, MessageCircle, User, Sparkles, Briefcase, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useData } from "@/context/DataContext";

const navItems = [
  { label: "Services", href: "/services", hasDropdown: false },
  { label: "Industries", href: "/industries", hasDropdown: false },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Careers", href: "/careers", hasDropdown: false },
  { label: "Partners", href: "/partners", hasDropdown: false },
  { label: "Who We Are", href: "/who-we-are", hasDropdown: false },
  { label: "Solutions", href: "/products", hasDropdown: false },
];

const resourceCategories = [
  {
    id: "human",
    label: "Talent & Sourcing",
    items: [
      { label: "Recruiters and Management Team", href: "/resources/employees" },
      { label: "Vetted Skills, Expertise, and Tech Stacks", href: "/resources/skills" },
      { label: "Leadership and Organizational Structure", href: "/resources/leadership" },
    ],
  },
  {
    id: "physical",
    label: "Offices & Presence",
    items: [
      { label: "Office Buildings & Headquarters", href: "/resources/facilities" },
      { label: "Equipment and Technical Infrastructure", href: "/resources/equipment" },
    ],
  },
  {
    id: "financial",
    label: "Financial Stability",
    items: [
      { label: "Capital and Investments", href: "/resources/capital" },
      { label: "Revenue and Performance", href: "/resources/revenue" },
    ],
  },
  {
    id: "technological",
    label: "Technology & Tools",
    items: [
      { label: "Sourcing Software and ATS Systems", href: "/resources/software" },
      { label: "Patents and Proprietary Vetting Tools", href: "/resources/patents" },
      { label: "Research & Development Capabilities", href: "/resources/research" },
    ],
  },
  {
    id: "intellectual",
    label: "Brand & Reputation",
    items: [
      { label: "Brand Name and Industry Reputation", href: "/resources/brand" },
      { label: "Trademarks and Copyrights", href: "/resources/trademarks" },
      { label: "Business Processes and Vetting Checklists", href: "/resources/processes" },
    ],
  },
  {
    id: "operational",
    label: "Vendor Management",
    items: [
      { label: "Supply Chain & VMS Network", href: "/resources/supply-chain" },
      { label: "Distribution Channels", href: "/resources/distribution" },
      { label: "Quality Control Systems", href: "/resources/quality-control" },
    ],
  },
];

const locations: { city: string; address: string; email: string; phone?: string; }[] = [
  {
    city: "Dover, USA",
    address: "8 The Green, Suite B, Dover, DE 19901",
    email: "info@procyonsol.com"
  },
  {
    city: "Hyderabad, India",
    address: "Hyderabad, Telangana, India",
    email: "info@procyonsol.com"
  }
];

export const Navbar = () => {
  const { content } = useData();
  const customPages = content?.customPages || [];

  const companyName = content?.branding?.companyName || "Procyon Solutions";
  const brandName = content?.branding?.brandName || "Procyon Solutions";
  const logoUrl = content?.branding?.logoUrl || "/logo.png";
  const brandEmail = content?.branding?.email || "info@procyonsol.com";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCustomPagesOpen, setIsCustomPagesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("human");
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCustomPagesOpen, setMobileCustomPagesOpen] = useState(false);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const dynamicNavItems = [
    { label: "Services", href: "/services", hasDropdown: false },
    { label: "Industries", href: "/industries", hasDropdown: false },
    { label: "Resources", href: "/resources", hasDropdown: true },
    ...(customPages.length > 0 ? [{ label: "Custom Pages", href: "#", hasDropdown: true, isCustomPages: true }] : []),
    { label: "Careers", href: "/careers", hasDropdown: false },
    { label: "Partners", href: "/partners", hasDropdown: false },
    { label: "Who We Are", href: "/who-we-are", hasDropdown: false },
    { label: "Solutions", href: "/products", hasDropdown: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "#") return false;
    return location.pathname === href;
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/resources?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const currentCategory = resourceCategories.find((cat) => cat.id === activeCategory);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e5e5e5] font-sans antialiased text-black">
      {/* Top Tier: Logo, Search, Utilities */}
      <div className={cn(
        "container mx-auto px-4 lg:px-8 transition-all duration-300",
        isScrolled ? "md:h-0 md:opacity-0 md:pointer-events-none overflow-hidden" : "h-14 md:h-16 opacity-100"
      )}>
        <div className={cn(
          "flex items-center justify-between border-b border-[#f5f5f5] transition-all duration-300",
          isScrolled ? "h-14 md:h-0 border-transparent overflow-hidden" : "h-14 md:h-16"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 z-10">
            <span className="text-lg md:text-xl font-bold tracking-tight text-[#0076d6]">
              {companyName}
            </span>
          </Link>

          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${companyName}`}
                className="w-full bg-[#f4f6f8] border border-gray-300 rounded-full py-1.5 pl-4 pr-10 text-xs text-[#1d1d1d] focus:outline-none focus:border-[#0076d6] focus:bg-white transition-all"
              />
              <button type="submit" className="absolute right-3 top-2 text-gray-500 hover:text-[#0076d6]">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Utilities links */}
          <div className="flex items-center gap-2 md:gap-4 text-xs font-normal text-black">

            
            <Link to="/admin" className="hidden md:flex items-center gap-1.5 hover:text-[#0076d6] transition-colors py-2">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Link>

            <a href={`mailto:${brandEmail}`} className="hidden sm:flex items-center gap-1.5 hover:text-[#0076d6] transition-colors py-2">
              <Mail className="w-4 h-4" />
              <span>{brandEmail}</span>
            </a>

            <div 
              className="relative"
              onMouseEnter={() => setIsLocationsOpen(true)}
              onMouseLeave={() => setIsLocationsOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#0076d6] transition-colors py-2">
                <Globe className="w-4 h-4" />
                <span>US/EN</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              <AnimatePresence>
                {isLocationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full w-80 bg-white rounded-none shadow-xl border border-[#d2d2d2] overflow-hidden z-50"
                  >
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-[#1d1d1d] mb-3">Our Locations</h3>
                      <div className="space-y-4">
                        {locations.map((loc, index) => (
                          <div key={index} className="border-b border-[#e5e5e5] last:border-0 pb-3 last:pb-0">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-[#0076d6] mt-1 flex-shrink-0" />
                              <div className="flex-1 text-left">
                                <h4 className="text-xs font-semibold text-[#1d1d1d] mb-1">{loc.city}</h4>
                                <p className="text-[11px] text-[#555555] leading-relaxed mb-2 whitespace-pre-line">{loc.address}</p>
                                  <div className="space-y-0.5 text-[11px]">
                                    {loc.phone && (
                                      <a href={`tel:${loc.phone}`} className="flex items-center gap-1.5 text-[#0076d6] hover:underline">
                                        <Phone className="w-3 h-3" />
                                        {loc.phone}
                                      </a>
                                    )}
                                    <a href={`mailto:${loc.email}`} className="flex items-center gap-1.5 text-[#0076d6] hover:underline">
                                      <Mail className="w-3 h-3" />
                                      {loc.email}
                                    </a>
                                  </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>



            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-black hover:text-[#0076d6] focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Tier: Main Nav Categories (Desktop only) */}
      <div className="hidden md:block bg-white border-b border-[#e5e5e5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-11">
            <div className="flex items-center">
              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center mr-4 shrink-0"
                  >
                    <Link to="/" className="flex items-center z-10">
                      <span className="text-md font-bold tracking-tight text-[#0076d6]">
                        {companyName}
                      </span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              <nav className="flex items-center gap-1">
                {dynamicNavItems.map((item) => {
                  if (item.hasDropdown) {
                    if ((item as any).isCustomPages) {
                      return (
                        <div
                          key={item.label}
                          className="relative"
                          onMouseEnter={() => setIsCustomPagesOpen(true)}
                          onMouseLeave={() => setIsCustomPagesOpen(false)}
                        >
                          <button
                            className={cn(
                              "flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-none",
                              isCustomPagesOpen
                                ? "text-[#0076d6]"
                                : "text-black hover:text-[#0076d6]"
                            )}
                          >
                            {item.label}
                            <ChevronDown className="w-3 h-3" />
                          </button>

                          <AnimatePresence>
                            {isCustomPagesOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.15 }}
                                className="absolute left-0 top-full w-56 bg-white shadow-2xl border border-[#d2d2d2] z-50 rounded-none p-4 text-left"
                              >
                                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1d] mb-3 pb-2 border-b border-[#f5f5f5]">
                                  Custom Pages
                                </h4>
                                <div className="flex flex-col gap-2.5">
                                  {customPages.map((page) => (
                                    <Link
                                      key={page.slug}
                                      to={`/p/${page.slug}`}
                                      onClick={() => setIsCustomPagesOpen(false)}
                                      className="text-xs text-[#555555] hover:text-[#0076d6] hover:underline transition-colors"
                                    >
                                      {page.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => setIsResourcesOpen(true)}
                        onMouseLeave={() => setIsResourcesOpen(false)}
                      >
                        <button
                          className={cn(
                            "flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-none",
                            isActive(item.href) || isResourcesOpen
                              ? "text-[#0076d6]"
                              : "text-black hover:text-[#0076d6]"
                          )}
                        >
                          {item.label}
                          <ChevronDown className="w-3 h-3" />
                        </button>

                        {/* Mega Menu Dropdown */}
                        <AnimatePresence>
                          {isResourcesOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-0 top-full w-[640px] bg-white shadow-2xl border border-[#d2d2d2] z-50 rounded-none"
                            >
                              <div className="grid grid-cols-12 gap-0">
                                {/* Left category list */}
                                <div className="col-span-4 border-r border-[#e5e5e5] bg-[#f8f9fa] py-4">
                                  {resourceCategories.map((category) => (
                                    <button
                                      key={category.id}
                                      onMouseEnter={() => setActiveCategory(category.id)}
                                      className={cn(
                                        "w-full flex items-center justify-between px-4 py-2.5 text-left text-xs font-semibold transition-all rounded-none border-l-2",
                                        activeCategory === category.id
                                          ? "text-[#0076d6] bg-white border-l-[#0076d6]"
                                          : "text-[#555555] hover:text-[#1d1d1d] border-l-transparent"
                                      )}
                                    >
                                      {category.label}
                                      <ChevronRight className="w-3 h-3" />
                                    </button>
                                  ))}
                                </div>
                                {/* Right items */}
                                <div className="col-span-8 p-6 text-left">
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1d] mb-4 pb-2 border-b border-[#f5f5f5]">
                                    {resourceCategories.find(c => c.id === activeCategory)?.label}
                                  </h4>
                                  <div className="grid grid-cols-1 gap-y-3">
                                    {currentCategory?.items.map((subItem) => (
                                      <Link
                                        key={subItem.label}
                                        to={subItem.href}
                                        onClick={() => setIsResourcesOpen(false)}
                                        className="text-xs text-[#555555] hover:text-[#0076d6] hover:underline transition-colors"
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors rounded-none",
                        isActive(item.href)
                          ? "text-[#0076d6]"
                          : "text-black hover:text-[#0076d6]"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right side promo button */}
            <div className="flex items-center">
              <Link to="/contact">
                <span className="text-xs font-semibold text-[#0076d6] hover:text-[#005ba3] hover:underline cursor-pointer transition-colors uppercase tracking-wider">
                  Reach Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#e5e5e5] shadow-2xl overflow-y-auto max-h-[85vh] text-left"
          >
            {/* Search bar inside mobile drawer */}
            <div className="p-4 border-b border-[#e5e5e5]">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Procyon Solutions"
                  className="w-full bg-[#f4f6f8] border border-gray-300 rounded-none py-2 pl-4 pr-10 text-xs text-[#1d1d1d] focus:outline-none"
                />
                <button type="submit" className="absolute right-3 top-2.5 text-gray-500">
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="p-4 space-y-2">
              {dynamicNavItems.map((item) => {
                if (item.hasDropdown) {
                  if ((item as any).isCustomPages) {
                    return (
                      <div key={item.label} className="border-b border-[#f5f5f5] pb-2">
                        <button
                          onClick={() => setMobileCustomPagesOpen(!mobileCustomPagesOpen)}
                          className="flex items-center justify-between w-full py-2.5 text-xs font-bold uppercase tracking-wider text-black"
                        >
                          {item.label}
                          <ChevronDown className={cn("w-4 h-4 transition-transform", mobileCustomPagesOpen && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                          {mobileCustomPagesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-3 py-1 space-y-2.5 border-l border-[#e5e5e5]"
                            >
                              {customPages.map((page) => (
                                <Link
                                  key={page.slug}
                                  to={`/p/${page.slug}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block text-xs text-[#555555] hover:text-[#0076d6] py-1"
                                >
                                  {page.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <div key={item.label} className="border-b border-[#f5f5f5] pb-2">
                      <button
                        onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                        className="flex items-center justify-between w-full py-2.5 text-xs font-bold uppercase tracking-wider text-black"
                      >
                        {item.label}
                        <ChevronDown className={cn("w-4 h-4 transition-transform", mobileResourcesOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {mobileResourcesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 py-1 space-y-3"
                          >
                            {resourceCategories.map((cat) => (
                              <div key={cat.id} className="space-y-1.5">
                                <button
                                  onClick={() => setMobileExpandedCategory(mobileExpandedCategory === cat.id ? null : cat.id)}
                                  className="flex items-center justify-between w-full text-[11px] font-semibold text-[#555555] py-1"
                                >
                                  {cat.label}
                                  <ChevronRight className={cn("w-3.5 h-3.5 transition-transform", mobileExpandedCategory === cat.id && "rotate-90")} />
                                </button>
                                
                                {mobileExpandedCategory === cat.id && (
                                  <div className="pl-3 space-y-2 border-l border-[#e5e5e5]">
                                    {cat.items.map((subItem) => (
                                      <Link
                                        key={subItem.label}
                                        to={subItem.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-[11px] text-[#555555] hover:text-[#0076d6]"
                                      >
                                        {subItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 text-xs font-bold uppercase tracking-wider text-black border-b border-[#f5f5f5]"
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Utility shortcuts in mobile menu */}
              <div className="pt-4 space-y-3 text-xs text-[#555555]">

                <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Sign In / Admin Panel</span>
                </Link>
                <a href={`mailto:${brandEmail}`} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{brandEmail} (Contact Us)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};