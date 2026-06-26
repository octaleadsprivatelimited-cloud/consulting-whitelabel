export const seoData: Record<string, {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  structuredData?: object;
}> = {
  // Homepage
  "/": {
    title: "Procyon Solutions – IT Recruiting & Tech Staffing Solutions Agency",
    description: "Procyon Solutions provides premier IT recruiting, contract staffing, direct hire, and dedicated software team solutions. Expert technical vetting for software engineers, DevOps, data science, and tech leadership.",
    keywords: "Procyon Solutions, Procyon Solutions, IT recruiting, tech staffing, contract staffing, direct hire, remote software engineers, developer recruitment, tech headhunters, software developer hiring, engineering recruiting, best of in the industry",
    canonical: "https://procyonsol.com",
  },

  // Products / Solutions
  "/products": {
    title: "IT Staffing Solutions & Hiring Models – Procyon Solutions",
    description: "Explore flexible IT hiring models including contract staffing, direct placement, and dedicated development teams. Scale your tech organizations with vetted software developers and architects.",
    keywords: "IT staffing models, tech recruiting products, contract staffing solutions, permanent placement, direct hire tech, dedicated dev teams, tech talent pools, software developer staffing",
    canonical: "https://procyonsol.com/products",
  },

  "/products/contract-staffing": {
    title: "Contract IT Staffing Solutions – Scale Tech Teams Quickly",
    description: "Access experienced software developers, DevOps engineers, and QAs on-demand with our flexible contract staffing solutions. Fast placement, full compliance, and zero payroll hassle.",
    keywords: "contract IT staffing, contract developers, tech contractors, remote developer hiring, scale development team, temporary software engineering",
    canonical: "https://procyonsol.com/products/contract-staffing",
  },

  "/products/direct-hire": {
    title: "Direct Hire & Permanent Placement Tech Recruiting – Procyon Solutions",
    description: "Secure the top 5% of technical professionals for full-time employee positions. In-depth technical screening, soft skills evaluation, and replacement guarantee.",
    keywords: "direct hire tech, permanent placement tech, tech recruitment permanent, software engineer recruiting permanent, hire full-time developers",
    canonical: "https://procyonsol.com/products/direct-hire",
  },

  "/products/executive-search": {
    title: "Executive Tech Search & Headhunting – Procyon Solutions Leadership Recruiting",
    description: "Retained executive search services for tech companies. Sourcing and vetting CTOs, VPs of Engineering, Directors of IT, and Principal Architects.",
    keywords: "executive tech search, tech headhunting, CTO recruitment, VP Engineering recruiting, IT director headhunters, technical leadership recruitment",
    canonical: "https://procyonsol.com/products/executive-search",
  },

  // Services
  "/services": {
    title: "IT Staffing & Tech Recruitment Services – Procyon Solutions Solutions",
    description: "Comprehensive tech staffing services: contract staffing, direct hire, executive search, RPO, and dedicated development teams. Scale your tech teams with speed and precision.",
    keywords: "tech staffing services, IT recruitment services, hiring developers, RPO services, executive search IT, developer sourcing, contract-to-hire tech",
    canonical: "https://procyonsol.com/services",
  },

  "/solutions": {
    title: "IT Staffing & Tech Recruitment Services – Procyon Solutions Solutions",
    description: "Comprehensive tech staffing services: contract staffing, direct hire, executive search, RPO, and dedicated development teams. Scale your tech teams with speed and precision.",
    keywords: "tech staffing services, IT recruitment services, hiring developers, RPO services, executive search IT, developer sourcing, contract-to-hire tech",
    canonical: "https://procyonsol.com/services",
  },

  // Industries
  "/industries": {
    title: "Tech Sourcing & Recruitment by Industry Vertical – Procyon Solutions",
    description: "Specialized tech recruiting vertical solutions for SaaS & Software Development, Fintech & Blockchain, and Healthcare & Biotech IT. Domain-focused recruiters.",
    keywords: "industry tech recruiting, SaaS recruiting, fintech developer sourcing, healthtech software developers, domain-specific recruiting, compliance tech talent",
    canonical: "https://procyonsol.com/industries",
  },

  "/industries/software-saas": {
    title: "SaaS & Software Development Sourcing Services",
    description: "Recruit top-tier full-stack developers, mobile engineers, product managers, and UI/UX designers specialized in SaaS and software products.",
    keywords: "SaaS recruiting, software product recruiting, UI/UX designer sourcing, mobile developer recruitment, full-stack engineer hiring",
    canonical: "https://procyonsol.com/industries/software-saas",
  },

  "/industries/fintech-blockchain": {
    title: "Fintech & Blockchain Developer Sourcing – Specialized Recruits",
    description: "Placing experienced developers for high-frequency trading platforms, secure payment gateways, smart contract engineering, and quantitative modeling.",
    keywords: "fintech developer recruiting, blockchain sourcing, smart contract developer hiring, crypto recruiting, banking software engineer recruitment",
    canonical: "https://procyonsol.com/industries/fintech-blockchain",
  },

  "/industries/healthcare-biotech": {
    title: "Healthcare & Biotech IT Sourcing – HIPAA-Compliant Talents",
    description: "Targeted recruitment of HIPAA-compliant healthcare software developers, bioinformatics engineers, and medical systems integration experts.",
    keywords: "healthtech recruiting, biotech engineer sourcing, HIPAA compliance developer hiring, bioinformatics recruitment, medical systems IT",
    canonical: "https://procyonsol.com/industries/healthcare-biotech",
  },

  "/resources": {
    title: "IT Recruitment & Sourcing Resources – Procyon Solutions Hub",
    description: "Access guides, documentation, salary reports, hiring tips, and FAQ for technical recruitment and staffing practices.",
    keywords: "tech hiring resources, staffing guide, hiring software developers, developer onboarding tips, developer salary surveys, recruiting FAQ",
    canonical: "https://procyonsol.com/resources",
  },

  "/resources/faq": {
    title: "IT Recruiting FAQ – Technical Staffing Frequently Asked Questions",
    description: "Get answers to frequently asked questions about tech staffing, remote developer vetting, replacement guarantees, and RPO compliance.",
    keywords: "IT recruiting FAQ, tech staffing questions, hiring developers FAQ, software placement support",
    canonical: "https://procyonsol.com/resources/faq",
  },

  "/resources/employees": {
    title: "Talent Team & Sourcing Specialists – Procyon Solutions",
    description: "Meet our dedicated technical recruiters, sourcers, account managers, and domain vetting experts at Procyon Solutions.",
    keywords: "tech recruiters team, sourcing team, technical vetters, recruiting experts, talent acquisition team",
    canonical: "https://procyonsol.com/resources/employees",
  },

  "/resources/skills": {
    title: "Vetted Skill Sets & Tech Stacks – Elite Candidate Profiles",
    description: "Explore the range of technical skill sets we vet: JavaScript/TypeScript, Java, Python, Go, DevOps pipelines, AWS, Azure, and data science ecosystems.",
    keywords: "vetted tech skills, developer skill sets, tech stack screening, software engineer competencies",
    canonical: "https://procyonsol.com/resources/skills",
  },

  "/resources/capital": {
    title: "Capital & Investments – Financial Stability for Client Staffing",
    description: "Understanding the solid financial foundation supporting our candidate payroll operations and global contractor payroll administration.",
    keywords: "staffing financial stability, payroll funding, hiring backing",
    canonical: "https://procyonsol.com/resources/capital",
  },

  "/resources/placements": {
    title: "Developer Placements & Success Records – Procyon Solutions",
    description: "Read our success metrics for software developers placed in top enterprises. 98% retention rates and fast onboarding times.",
    keywords: "developer placement success, candidate placement track record, tech hire results",
    canonical: "https://procyonsol.com/resources/placements",
  },

  // Partners
  "/partners": {
    title: "Talent & Staffing Agency Partner Program – Procyon Solutions",
    description: "Partner with Procyon Solutions to extend candidate delivery, collaborate on high-niche technical searches, and utilize shared developer pools.",
    keywords: "staffing agency partnership, recruiter network, shared talent pool, developer sourcing partner",
    canonical: "https://procyonsol.com/partners",
  },

  // About
  "/about": {
    title: "About Procyon Solutions – IT Staffing Agency",
    description: "Discover our story, mission, and dedication to bridging the global engineering gap with vetted IT staffing and direct hire solutions.",
    keywords: "about Procyon Solutions, IT staffing agency story, technical recruiters about, hiring agency mission",
    canonical: "https://procyonsol.com/about",
  },

  "/who-we-are": {
    title: "Who We Are – Technical Sourcing Specialists",
    description: "Meet our team of tech recruiters and developers committed to vetting, hiring, and onboarding top software engineers for our clients.",
    keywords: "Who we are Procyon Solutions, technical sourcing team, software recruitment team",
    canonical: "https://procyonsol.com/who-we-are",
  },

  // Contact
  "/contact": {
    title: "Contact Tech Recruiting Specialists – Procyon Solutions Staffing",
    description: "Contact Procyon Solutions to discuss your software developer sourcing, temporary contractor payroll, or executive recruitment needs.",
    keywords: "contact tech recruiters, hire developers inquiry, staffing agency contact, tech staffing phone",
    canonical: "https://procyonsol.com/contact",
  },

  // Careers
  "/careers": {
    title: "Careers at Procyon Solutions – Join Our Tech Staffing Team",
    description: "Explore career opportunities inside our agency. Sourcing roles, Technical Recruiter positions, and Account Executive openings.",
    keywords: "recruiting agency careers, hire recruiter jobs, tech recruiter jobs, staffing agency employment",
    canonical: "https://procyonsol.com/careers",
  },

  // Legal Pages
  "/privacy": {
    title: "Privacy Policy – Procyon Solutions",
    description: "Read Procyon Solutions privacy policy to understand how we collect, use, and protect your personal information and data.",
    keywords: "privacy policy, Procyon Solutions privacy, data protection, privacy statement",
    canonical: "https://procyonsol.com/privacy",
  },

  "/terms": {
    title: "Terms of Service – Procyon Solutions",
    description: "Review Procyon Solutions terms of service and conditions for using our website and services.",
    keywords: "terms of service, terms and conditions, Procyon Solutions terms, service terms",
    canonical: "https://procyonsol.com/terms",
  },

  "/legal": {
    title: "Legal Information – Procyon Solutions",
    description: "Legal information, policies, and terms for Procyon Solutions website and services.",
    keywords: "legal information, legal policies, Procyon Solutions legal, legal terms",
    canonical: "https://procyonsol.com/legal",
  },

  "/cookies": {
    title: "Cookie Policy – Procyon Solutions",
    description: "Learn about how Procyon Solutions uses cookies on our website and how to manage your cookie preferences.",
    keywords: "cookie policy, cookies, cookie management, Procyon Solutions cookies",
    canonical: "https://procyonsol.com/cookies",
  },
};
