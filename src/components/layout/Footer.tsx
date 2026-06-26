import { Link } from "react-router-dom";
import { Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useData } from "@/context/DataContext";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

const footerLinks: {
  Products: FooterLink[];
  Solutions: {
    main: FooterLink[];
    Services: FooterLink[];
  };
  Company: FooterLink[];
  Resources: FooterLink[];
} = {
  Products: [
    { label: "Contract IT Staffing", href: "/products/contract-staffing" },
    { label: "Direct Hire Placement", href: "/products/direct-hire" },
    { label: "Executive Tech Search", href: "/products/executive-search" },
  ],
  Solutions: {
    main: [
      { label: "Software & SaaS", href: "/industries/software-saas" },
      { label: "Fintech & Blockchain", href: "/industries/fintech-blockchain" },
      { label: "Healthcare & Biotech", href: "/industries/healthcare-biotech" },
    ],
    Services: [
      { label: "Contract Staffing", href: "/services/contract-staffing" },
      { label: "Direct Hire Sourcing", href: "/services/direct-hire" },
      { label: "Executive Headhunting", href: "/services/executive-search" },
      { label: "Recruitment Outsourcing", href: "/services/recruitment-process-outsourcing" },
    ],
  },
  Company: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Partners", href: "/partners" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  Resources: [
    { label: "Documentation", href: "/resources/documentation" },
    { label: "Video Tutorials", href: "/resources/video-tutorials" },
    { label: "Whitepapers", href: "/resources/whitepapers" },
    { label: "FAQ", href: "/resources/faq" },
  ],
};

const socialLinks = [
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

const legalLinks = [
  { label: "Privacy Statement", href: "/privacy" },
  { label: "Legal & Regulatory", href: "/legal" },
  { label: "Cookie Consent", href: "/cookies" },
  { label: "Terms of Sale", href: "/terms" },
];

export const Footer = () => {
  const { content } = useData();
  const customPages = content?.customPages || [];

  const companyName = content?.branding?.companyName || "Procyon Solutions";
  const brandName = content?.branding?.brandName || "Procyon Solutions";
  const domain = content?.branding?.domain || "procyonsol.com";

  const companyLinks = [
    ...footerLinks.Company,
    ...customPages.map((page) => ({
      label: page.title,
      href: `/p/${page.slug}`,
    })),
  ];
  return (
    <footer className="relative bg-[#f5f5f5] text-[#1d1d1d] font-sans antialiased border-t border-[#d2d2d2] text-xs">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Products Column */}
          <div>
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">Hiring Solutions</h4>
            <ul className="space-y-2.5">
              {footerLinks.Products.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[#555555] hover:text-[#0076d6] hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">Key Verticals</h4>
            <ul className="space-y-2.5">
              {footerLinks.Solutions.main.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[#555555] hover:text-[#0076d6] hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.Solutions.Services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[#555555] hover:text-[#0076d6] hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[#555555] hover:text-[#0076d6] hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-[#1d1d1d] mb-4 uppercase tracking-wider text-[11px]">How can we help?</h4>
            <div className="space-y-4">
              <Link to="/contact">
                <Button className="w-full bg-[#0076d6] hover:bg-[#005ba3] text-white font-bold rounded-none px-4 py-2.5 h-auto text-xs uppercase tracking-wider">
                  Contact Us
                </Button>
              </Link>
              
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <div
                    key={social.label}
                    aria-label={social.label}
                    className="w-8 h-8 border border-[#d2d2d2] flex items-center justify-center bg-white text-[#555555]"
                  >
                    <social.icon className="w-4 h-4" />
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>

        {/* Bottom copyright & legal bar */}
        <div className="border-t border-[#d2d2d2] pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-[11px] text-[#666666]">
            {/* Left copyright info */}
            <div className="flex flex-wrap items-center gap-1 md:gap-2 justify-center lg:justify-start">
              <span className="font-bold text-[#1d1d1d] uppercase tracking-wider mr-2 text-[12px]">{brandName}</span>
              <span>© 2026 {companyName}. All rights reserved.</span>
              <span className="hidden md:inline text-[#d2d2d2]">|</span>
              <a 
                href="https://octaleads.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#0076d6] hover:underline"
              >
                Developed by Octaleads Pvt Ltd
              </a>
            </div>
            
            {/* Right legal links */}
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5">
              {legalLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-3">
                  <Link to={link.href} className="hover:text-[#0076d6] hover:underline">
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-[#d2d2d2]">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};