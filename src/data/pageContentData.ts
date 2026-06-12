// Page Content Persistence Layer for IT Staffing & Recruiting
// This module defines the schemas and initial datasets for managing page content dynamically.

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
}

export interface IndustryItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
  slug: string;
  image: string;
  features?: string[];
}

export interface ResourceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

export interface BenefitItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface PartnerBenefitItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  color: string;
  link: string;
}

export interface LeadershipItem {
  id: string;
  name: string;
  role: string;
  description: string;
}

export interface PageTextConfig {
  heroTitle: string;
  heroDescription: string;
  heroLabel?: string;
  sectionTag?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  storyTitle?: string;
  storyParagraphs?: string[];
  cultureTitle?: string;
  cultureDescription?: string;
  principlesTitle?: string;
  principlesDescription?: string;
  stats?: { value: string; label: string }[];
}

export interface WebsiteContent {
  services: ServiceItem[];
  industries: IndustryItem[];
  resources: ResourceItem[];
  benefits: BenefitItem[];
  partnerBenefits: PartnerBenefitItem[];
  leadership: LeadershipItem[];
  formspreeId?: string;
  seoData?: Record<string, { title: string; description: string; keywords: string; canonical?: string; structuredData?: object }>;
  products?: {
    id: string;
    iconName: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    color: string;
    image: string;
    link: string;
  }[];
  homeFeatures?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
    underlineColor: string;
  }[];
  homeReasons?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
  }[];
  servicesWhyChoose?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
  }[];
  contactMethods?: {
    id: string;
    iconName: string;
    title: string;
    description: string;
    contact: string;
    action: string;
    link: string;
    color: string;
  }[];
  customPages?: {
    id?: string;
    slug: string;
    title: string;
    description: string;
    sections: {
      id?: string;
      type: string;
      title?: string;
      subtitle?: string;
      content?: string;
      items?: { title: string; description: string; iconName?: string; link?: string }[];
    }[];
  }[];
  pageTexts: {
    services: PageTextConfig;
    industries: PageTextConfig;
    resources: PageTextConfig;
    careers: PageTextConfig;
    partners: PageTextConfig;
    whoWeAre: PageTextConfig;
    home?: {
      heroLabel?: string;
      heroTitle?: string;
      heroDescription?: string;
      sectionTitle?: string;
      whyChooseTitle?: string;
      whyChooseDescription?: string;
      ctaTitle?: string;
      ctaDescription?: string;
      ctaButtonText?: string;
    };
    productsPage?: {
      heroLabel?: string;
      heroTitle?: string;
      heroDescription?: string;
      ctaTitle?: string;
      ctaDescription?: string;
      ctaButtonText?: string;
    };
    contact?: {
      heroLabel?: string;
      heroTitle?: string;
      heroDescription?: string;
      sectionTitle?: string;
      sectionDescription?: string;
      ctaTitle?: string;
      ctaDescription?: string;
    };
  };
  branding?: {
    companyName: string;
    brandName: string;
    domain: string;
    twitterHandle?: string;
    logoUrl?: string;
  };
}

export const initialServices: ServiceItem[] = [
  {
    id: "ser-1",
    iconName: "Briefcase",
    title: "Contract IT Staffing",
    description: "Flexible, short-term, or project-based technical staffing solutions to meet immediate project demands and scale teams quickly.",
    features: [
      "On-Demand Tech Scaling",
      "Project-Specific Experts",
      "Immediate Onboarding",
      "Flexible Contract Terms",
      "Full Payroll & Compliance",
      "Rapid Backfill Support"
    ],
    image: "/contract-staffing.jpg",
    href: "/services/contract-staffing"
  },
  {
    id: "ser-2",
    iconName: "Users",
    title: "Direct Hire Placement",
    description: "Permanent recruitment services to find, vet, and place top-tier, full-time IT professionals in key organizational roles.",
    features: [
      "Targeted Executive Search",
      "Deep Technical Vetting",
      "Cultural Alignment Checks",
      "Salary Benchmark Mapping",
      "Placement Guarantee Periods"
    ],
    image: "/direct-hire.jpg",
    href: "/services/direct-hire"
  },
  {
    id: "ser-3",
    iconName: "Search",
    title: "Executive Tech Search",
    description: "Retained headhunting services targeting elite technology leaders, including CTOs, VPs of Engineering, and IT Directors.",
    features: [
      "Confidential Sourcing",
      "Leadership Assessment",
      "Comprehensive Vetting",
      "Compensation Consulting",
      "Onboarding Advisory"
    ],
    image: "/executive-search.jpg",
    href: "/services/executive-search"
  },
  {
    id: "ser-4",
    iconName: "Award",
    title: "Recruitment Process Outsourcing",
    description: "End-to-end management of your company's tech recruiting pipeline, from sourcing and interviewing to onboarding.",
    features: [
      "Dedicated Recruiting Teams",
      "ATS Optimization",
      "Employer Branding Support",
      "SLA-Driven Deliverables",
      "Scalable Hiring Capacity"
    ],
    image: "/rpo-recruitment.jpg",
    href: "/services/rpo-recruitment"
  },
  {
    id: "ser-5",
    iconName: "UserCheck",
    title: "Contract-to-Hire Solutions",
    description: "Evaluate a candidate's technical skills and cultural fit on the job before committing to a permanent employment offer.",
    features: [
      "Risk-Free Evaluation Period",
      "Seamless Transition Path",
      "Flexible Trial Periods",
      "Reduced Bad Hire Risk"
    ],
    image: "/contract-to-hire.jpg",
    href: "/services/contract-to-hire"
  },
  {
    id: "ser-6",
    iconName: "Layers",
    title: "Dedicated Development Squads",
    description: "Assembling fully-managed, cross-functional squads of engineers, designers, and managers tailored to your software projects.",
    features: [
      "Agile Team Composition",
      "Product Managers & QAs Included",
      "Cohesive Team Workflows",
      "Rapid Mobilization"
    ],
    image: "/development-squads.jpg",
    href: "/services/dedicated-squads"
  },
  {
    id: "ser-7",
    iconName: "Code",
    title: "Tech Vetting & Assessment",
    description: "Specialized coding challenges, architectural design reviews, and engineering interviews led by senior domain experts.",
    features: [
      "Developer-Led Screenings",
      "Custom Coding Tasks",
      "Soft Skill Evaluations",
      "Standardized Scoring Reports"
    ],
    image: "/tech-vetting.jpg",
    href: "/services/tech-vetting"
  },
  {
    id: "ser-8",
    iconName: "Globe",
    title: "Offshore Development Staffing",
    description: "Access global engineering talent pools and scale your development capacities with certified remote professionals.",
    features: [
      "Cost-Efficient Scaling",
      "Overlapping Working Hours",
      "Global Engineering Centers",
      "Dedicated Security Infrastructure"
    ],
    image: "/offshore-staffing.jpg",
    href: "/services/offshore-staffing"
  },
  {
    id: "ser-9",
    iconName: "Shield",
    title: "Global Employer of Record (EOR)",
    description: "Compliant onboarding, payroll administration, and benefits management for remote developers based worldwide.",
    features: [
      "100% Legal Compliance",
      "Localized Contracts",
      "Global Payroll Processing",
      "Multi-Currency Payments"
    ],
    image: "/global-eor.jpg",
    href: "/services/global-eor"
  },
  {
    id: "ser-10",
    iconName: "TrendingUp",
    title: "Talent Mapping & Analytics",
    description: "Market intelligence reports offering insights into software developer availability, compensation standards, and hiring trends.",
    features: [
      "Competitor Hiring Research",
      "Salary Benchmark Reports",
      "Location Feasibility Studies",
      "Skillset Density Mapping"
    ],
    image: "/talent-analytics.jpg",
    href: "/services/talent-mapping"
  },
  {
    id: "ser-11",
    iconName: "Terminal",
    title: "Software Engineer Recruitment",
    description: "Targeted sourcing of full-stack, backend, frontend, and mobile engineers proficient in modern tech stacks.",
    features: [
      "Full-Stack JS/TS Sourcing",
      "Java, Go, & Python Specialists",
      "React, Angular & Vue Experts",
      "iOS & Android Developers"
    ],
    image: "/software-recruitment.jpg",
    href: "/services/software-recruitment"
  },
  {
    id: "ser-12",
    iconName: "Cloud",
    title: "Cloud & DevOps Recruiting",
    description: "Placing experienced infrastructure, platform, and DevOps engineers skilled in cloud ecosystems and CI/CD pipelines.",
    features: [
      "AWS, Azure & GCP Specialists",
      "Kubernetes & Docker Experts",
      "Terraform & IaC Professionals",
      "Site Reliability Engineers (SRE)"
    ],
    image: "/devops-recruiting.jpg",
    href: "/services/devops-recruiting"
  }
];

export const initialIndustries: IndustryItem[] = [
  {
    id: "ind-1",
    title: "Software Development & SaaS",
    description: "Sourcing high-impact software developers, product managers, and UI/UX designers to build state-of-the-art SaaS applications.",
    iconName: "Code",
    color: "bg-accent",
    slug: "software-saas",
    image: "/industry-saas.svg",
    features: [
      "Agile Product Development Teams",
      "SaaS Architecture Experts",
      "Scalable Cloud Infrastructure Staff",
      "Mobile App Engineering Talents"
    ]
  },
  {
    id: "ind-2",
    title: "Fintech & Blockchain Systems",
    description: "Recruiting specialized developers for high-frequency trading platforms, secure payment gateways, and decentralized integrations.",
    iconName: "DollarSign",
    color: "bg-sprinklr-purple",
    slug: "fintech-blockchain",
    image: "/industry-fintech.svg",
    features: [
      "High-Throughput Sourcing",
      "Crypto & Smart Contract Developers",
      "PCI-DSS Compliance IT Staff",
      "Quantitative Engineering Talents"
    ]
  },
  {
    id: "ind-3",
    title: "Healthcare & Biotech IT",
    description: "Placing certified health tech professionals, bioinformatics engineers, and HIPAA-compliant software development experts.",
    iconName: "Heart",
    color: "bg-sprinklr-green",
    slug: "healthcare-biotech",
    image: "/industry-healthcare.svg",
    features: [
      "HIPAA/GDPR Compliance Tech Talent",
      "Bioinformatics & ML Engineers",
      "EHR & Medical System Integrators",
      "Digital Health Software Architects"
    ]
  }
];

export const initialResources: ResourceItem[] = [
  {
    id: "res-1",
    iconName: "Book",
    title: "Documentation",
    description: "Comprehensive guides and documentation for our services and solutions.",
    link: "/resources/documentation",
    color: "bg-accent",
  },
  {
    id: "res-2",
    iconName: "Video",
    title: "Video Tutorials",
    description: "Step-by-step video tutorials to help you get started with our services.",
    link: "/resources/video-tutorials",
    color: "bg-sprinklr-green",
  },
  {
    id: "res-3",
    iconName: "FileText",
    title: "Whitepapers",
    description: "In-depth whitepapers on IT best practices and SAP implementation strategies.",
    link: "/resources/whitepapers",
    color: "bg-sprinklr-purple",
  },
  {
    id: "res-4",
    iconName: "Download",
    title: "Downloads",
    description: "Download resources, templates, and tools to support your projects.",
    link: "/resources/downloads",
    color: "bg-accent",
  },
  {
    id: "res-5",
    iconName: "HelpCircle",
    title: "FAQ",
    description: "Frequently asked questions about our services and how we can help you.",
    link: "/resources/faq",
    color: "bg-sprinklr-green",
  },
  {
    id: "res-6",
    iconName: "Code",
    title: "Developer Resources",
    description: "Resources for developers including APIs, SDKs, and integration guides.",
    link: "/resources/developer-resources",
    color: "bg-sprinklr-purple",
  },
  {
    id: "res-7",
    iconName: "GraduationCap",
    title: "Workshop Materials",
    description: "Workshop materials and resources for SAP modules and IT services.",
    link: "/resources/training-materials",
    color: "bg-accent",
  },
  {
    id: "res-8",
    iconName: "Users",
    title: "Workshop Classes",
    description: "Join our comprehensive SAP workshop classes led by industry experts.",
    link: "/resources/training-classes",
    color: "bg-sprinklr-green",
  },
];

export const initialBenefits: BenefitItem[] = [
  {
    id: "ben-1",
    iconName: "Calendar",
    title: "Flexible Work Culture",
    description: "Hybrid and remote working options that allow you to balance productivity with your personal life.",
  },
  {
    id: "ben-2",
    iconName: "Globe",
    title: "High-Impact Clients",
    description: "Work with fast-growing SaaS startups, established unicorn enterprises, and Fortune 500 tech leaders.",
  },
  {
    id: "ben-3",
    iconName: "TrendingUp",
    title: "Career Growth",
    description: "Structured career paths, commission structures, and ongoing training to fast-track your path to leadership.",
  },
];

export const initialPartnerBenefits: PartnerBenefitItem[] = [
  {
    id: "pb-1",
    iconName: "Handshake",
    title: "Vendor Managed Services (VMS)",
    description: "Partner with Octaleads to streamline talent workflows, payroll integration, and candidate submittals.",
    color: "bg-blue-500",
    link: "/contact"
  },
  {
    id: "pb-2",
    iconName: "GraduationCap",
    title: "On-Demand Talent Scaling",
    description: "Equip your agency or company with quick access to thoroughly vetted developer pipelines.",
    color: "bg-orange-500",
    link: "/services"
  },
  {
    id: "pb-3",
    iconName: "Zap",
    title: "Co-Sourced Recruiting",
    description: "Leverage our recruiters and technical assessments team to deliver niche candidates for your complex projects.",
    color: "bg-green-500",
    link: "/services"
  }
];

export const initialLeadership: LeadershipItem[] = [
  {
    id: "lead-1",
    name: "Prasad Rao",
    role: "Founder & Managing Director",
    description: "Over 20 years of IT recruitment and staffing industry experience, guiding global brands through complex talent acquisitions."
  },
  {
    id: "lead-2",
    name: "Srinivas Goud",
    role: "Director - Tech Recruitment",
    description: "Certified technical sourcing specialist with deep expertise in vetting developers, cloud engineers, and technical leaders."
  }
];

export const initialPageTexts: {
  services: PageTextConfig;
  industries: PageTextConfig;
  resources: PageTextConfig;
  careers: PageTextConfig;
  partners: PageTextConfig;
  whoWeAre: PageTextConfig;
  home?: {
    heroLabel?: string;
    heroTitle?: string;
    heroDescription?: string;
    sectionTitle?: string;
    whyChooseTitle?: string;
    whyChooseDescription?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
  };
  productsPage?: {
    heroLabel?: string;
    heroTitle?: string;
    heroDescription?: string;
    ctaTitle?: string;
    ctaDescription?: string;
    ctaButtonText?: string;
  };
  contact?: {
    heroLabel?: string;
    heroTitle?: string;
    heroDescription?: string;
    sectionTitle?: string;
    sectionDescription?: string;
    ctaTitle?: string;
    ctaDescription?: string;
  };
} = {
  services: {
    heroTitle: "IT Recruiting Solutions Designed for Real Project Outcomes",
    heroDescription: "We deliver industry-aligned and tech-driven recruitment services that help businesses build robust engineering and software teams.",
    heroLabel: "RECRUITING SERVICES",
    sectionTitle: "Comprehensive Staffing Solutions",
    sectionDescription: "From temporary contractors to full-time hires, we provide end-to-end recruitment services to support your scaling needs.",
    stats: [
      { value: "500+", label: "Talents Placed" },
      { value: "10+", label: "Years of experience" },
      { value: "15k+", label: "Vetted Candidates" },
      { value: "98%", label: "Client retention" }
    ]
  },
  industries: {
    heroTitle: "Specialized Sourcing for Niche Industry Domains",
    heroDescription: "We recruit and vet candidates tailored to the distinct workflows and compliance needs of various sectors.",
    sectionTag: "Industries We Serve",
    sectionTitle: "Three Niche Sectors. One Comprehensive Talent Pool."
  },
  resources: {
    heroTitle: "Resources",
    heroDescription: "Access helpful resources, documentation, and materials to support your business journey.",
    heroLabel: "RESOURCE CENTER",
    ctaButtonText: "Explore Resources",
    sectionTitle: "Everything You Need. One Resource Hub.",
    ctaTitle: "Need More Help?",
    ctaDescription: "Can't find what you're looking for? Contact our team for personalized assistance."
  },
  careers: {
    heroTitle: "Join Octaleads Technologies",
    heroDescription: "Become part of an elite team shaping the future of technical recruitment and staffing solutions.",
    heroLabel: "CAREERS",
    sectionTag: "Why Octaleads?",
    sectionTitle: "Why Work at Octaleads?",
    sectionDescription: "Flexible Work Culture | High-Impact Clients | Career Growth",
    cultureTitle: "Open Opportunities",
    cultureDescription: "We are seeking skilled recruiters, sourcers, account managers, and tech vetting engineers to expand our recruitment practice.",
    principlesTitle: "Learning & Culture",
    principlesDescription: "At Octaleads, we foster a learning-driven culture where you can work on complex international accounts, grow your career path organically, and enjoy excellent work-life balance."
  },
  partners: {
    heroTitle: "Partners",
    heroDescription: "Join our partner network and grow your business with Octaleads.",
    heroLabel: "PARTNER PROGRAM",
    ctaButtonText: "Become a Partner",
    sectionTag: "Partnership Opportunities",
    sectionTitle: "Grow Your Business With Us",
    sectionDescription: "Join our partner network and unlock new opportunities for growth and success."
  },
  whoWeAre: {
    heroTitle: "Who We Are",
    heroDescription: "Octaleads Technologies is a premier IT recruitment and staffing agency dedicated to helping organizations build high-performing technical teams.",
    heroLabel: "ABOUT US",
    sectionTag: "About Octaleads",
    storyTitle: "Our Mission & Vision",
    storyParagraphs: [
      "Octaleads Technologies is a global IT recruitment partner focused on helping organizations solve software engineering bottlenecks and scale tech departments. Our recruiters combine tech backgrounds with industry networks to deliver precise, vetted hires.",
      "Our Mission: Bridge the global developer talent gap by matching companies with verified technical experts.",
      "Our Vision: Become the most trusted tech staffing and talent acquisition agency globally."
    ],
    sectionTitle: "Our Core Values",
    sectionDescription: "The principles that guide our recruitment and vetting standards",
    stats: [
      { value: "10+", label: "Years of Excellence" }
    ]
  },
  home: {
    heroLabel: "",
    heroTitle: "Scale Your Tech Teams with Vetted IT Talent",
    heroDescription: "Octaleads Technologies Pvt Ltd is a premier IT recruitment and staffing agency, connecting elite software engineers, DevOps experts, data architects, and technology leaders with high-growth enterprises globally.",
    sectionTitle: "We deliver intelligent, scalable, and future-ready IT staffing solutions that drive operational excellence, technology innovation, and business growth.",
    whyChooseTitle: "Your Trusted Partner for Tech Recruitment Excellence",
    whyChooseDescription: "We combine deep technical vetting, a global network of pre-screened developers, and a client-first mindset to help organizations scale their tech teams with speed and precision.",
    ctaTitle: "Ready to scale your tech organization?",
    ctaDescription: "Partner with Octaleads to access top-tier tech talent and accelerate your engineering roadmap with our flexible hiring models.",
    ctaButtonText: "Hire Tech Talent Now"
  },
  productsPage: {
    heroLabel: "TALENT SOLUTIONS",
    heroTitle: "Our Hiring Solutions",
    heroDescription: "Flexible staffing and talent acquisition models designed to fit your project scope, budget, and timeline.",
    ctaTitle: "Ready to Get Started?",
    ctaDescription: "Contact our tech recruitment experts to discuss your staffing requirements and get a personalized solution.",
    ctaButtonText: "Talk to Recruitment Experts"
  },
  contact: {
    heroLabel: "GET IN TOUCH",
    heroTitle: "Let's Scale Your Tech Organization Together",
    heroDescription: "Whether you are looking for contract software engineers, permanent team members, or specialized technical vetting, Octaleads is ready to deliver.",
    sectionTitle: "Get Started Today",
    sectionDescription: "Schedule a free consultation with our recruitment experts and discover how Octaleads can accelerate your hiring pipeline.",
    ctaTitle: "Contact Information",
    ctaDescription: "7-1-619/A/37, 101\nRevathi Apartments, Srinivas nagar\nAmeerpet, Hyderabad, Telangana\n500038"
  }
};

const CONTENT_STORAGE_KEY = "octaleads_website_content";

export const getWebsiteContent = (): WebsiteContent => {
  try {
    const raw = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (!raw) {
      const defaultContent: WebsiteContent = {
        services: initialServices,
        industries: initialIndustries,
        resources: initialResources,
        benefits: initialBenefits,
        partnerBenefits: initialPartnerBenefits,
        leadership: initialLeadership,
        pageTexts: initialPageTexts,
        formspreeId: "maqwrdrv"
      };
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(defaultContent));
      return defaultContent;
    }
    const parsed = JSON.parse(raw);
    let dirty = false;

    // Migrate old .svg images to new .jpg images
    if (parsed.services) {
      parsed.services = parsed.services.map((s: any) => {
        if (s.image && s.image.endsWith('.svg')) {
          s.image = s.image.replace('.svg', '.jpg');
          dirty = true;
        }
        return s;
      });
    }
    if (parsed.products) {
      parsed.products = parsed.products.map((p: any) => {
        if (p.image && p.image.endsWith('.svg')) {
          p.image = p.image.replace('.svg', '.jpg');
          dirty = true;
        }
        return p;
      });
    }

    // Backward compatibility merge for pageTexts
    if (!parsed.pageTexts) {
      parsed.pageTexts = initialPageTexts;
      dirty = true;
    }
    if (!parsed.formspreeId) {
      parsed.formspreeId = "maqwrdrv";
      dirty = true;
    }
    if (dirty) {
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(parsed));
    }
    return parsed;
  } catch (e) {
    console.error("Failed to parse website content from localStorage", e);
    return {
      services: initialServices,
      industries: initialIndustries,
      resources: initialResources,
      benefits: initialBenefits,
      partnerBenefits: initialPartnerBenefits,
      leadership: initialLeadership,
      pageTexts: initialPageTexts
    };
  }
};

export const saveWebsiteContent = (content: WebsiteContent): void => {
  try {
    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
  } catch (e) {
    console.error("Failed to save website content to localStorage", e);
  }
};
