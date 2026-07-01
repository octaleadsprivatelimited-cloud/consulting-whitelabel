import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  WebsiteContent, 
  getWebsiteContent, 
  saveWebsiteContent,
  initialServices,
  initialIndustries,
  initialResources,
  initialBenefits,
  initialPartnerBenefits,
  initialLeadership,
  initialPageTexts
} from "@/data/pageContentData";
import { seoData as initialSeoData } from "@/data/seoData";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// Define default initial fallback state
export const defaultFallbackContent: WebsiteContent = {
  services: initialServices,
  industries: initialIndustries,
  resources: initialResources,
  benefits: initialBenefits,
  partnerBenefits: initialPartnerBenefits,
  leadership: initialLeadership,
  products: [
    {
      id: "prod-1",
      iconName: "Briefcase",
      title: "Contract Staffing Solutions",
      subtitle: "FLEXIBLE IT TALENT",
      description: "Scale your technical capacity with on-demand contract developers, QA specialists, and system administrators on flexible project terms.",
      features: [
        "Access to niche developers",
        "Compliant payroll management",
        "Flexible scale-up & scale-down",
        "Fully managed HR compliance"
      ],
      color: "bg-accent",
      image: "/contract-staffing.png",
      link: "/products/contract-staffing"
    },
    {
      id: "prod-2",
      iconName: "Users",
      title: "Direct Hire Placement",
      subtitle: "PERMANENT TALENT ACQUISITION",
      description: "Secure the top 5% of technical professionals for full-time employee positions through our extensive sourcing and rigorous screening pipeline.",
      features: [
        "In-depth technical vetting",
        "Dedicated sourcing pipelines",
        "Cultural fit alignment checks",
        "Risk-free hiring guarantee"
      ],
      color: "bg-sprinklr-purple",
      image: "/direct-hire.png",
      link: "/products/direct-hire"
    },
    {
      id: "prod-3",
      iconName: "Layers",
      title: "Dedicated Tech Squads",
      subtitle: "COHESIVE ENGINEERING TEAMS",
      description: "Deploy fully functional, cross-functional engineering teams consisting of developers, product managers, and testers to execute your roadmap.",
      features: [
        "Agile team synchronization",
        "Senior tech lead oversight",
        "Fast integration with workflows",
        "Established development practices"
      ],
      color: "bg-sprinklr-green",
      image: "/development-squads.png",
      link: "/products/executive-search"
    }
  ],
  homeFeatures: [
    {
      id: "hf-1",
      iconName: "Briefcase",
      title: "Contract IT Staffing",
      description: "Flexible On-Demand Talents. Onboard skilled software developers and systems engineers quickly under customizable contracts to hit target launch dates.",
      link: "/services/contract-staffing",
      linkText: "Explore Contract Staffing",
      underlineColor: "bg-sprinklr-blue"
    },
    {
      id: "hf-2",
      iconName: "Users",
      title: "Direct Hire Placement",
      description: "Secure Permanent Tech Leaders. Target, interview, and onboard elite full-stack engineers and DevOps leads directly to your internal staff.",
      link: "/services/direct-hire",
      linkText: "Explore Permanent Hire",
      underlineColor: "bg-sprinklr-green"
    },
    {
      id: "hf-3",
      iconName: "Search",
      title: "Executive Tech Search",
      description: "Niche Headhunting Services. Find experienced CTOs, Engineering VPs, and Technical Architects who align with company expansion strategies.",
      link: "/services/executive-search",
      linkText: "Explore Executive Search",
      underlineColor: "bg-sprinklr-purple"
    },
    {
      id: "hf-4",
      iconName: "Award",
      title: "Recruitment Process Outsourcing",
      description: "Complete Recruiting Management. Optimize candidate sourcing pipelines, leverage modern ATS tooling, and optimize overall hiring cycles.",
      link: "/services/recruitment-process-outsourcing",
      linkText: "Explore RPO Solutions",
      underlineColor: "bg-accent"
    },
    {
      id: "hf-5",
      iconName: "Layers",
      title: "Dedicated Tech Squads",
      description: "Deploy Agile Project Teams. Fast-track complex software initiatives by placing cohesive squads of developers, QA, and product managers.",
      link: "/services/dedicated-squads",
      linkText: "Explore Dedicated Squads",
      underlineColor: "bg-[#0076d6]"
    }
  ],
  homeReasons: [
    {
      id: "hr-1",
      iconName: "Trophy",
      title: "Elite Tech Network",
      description: "Our network comprises highly skilled tech professionals vetted by experienced software engineering architects."
    },
    {
      id: "hr-2",
      iconName: "Building2",
      title: "Deep Industry Knowledge",
      description: "We understand complex tech stacks, allowing us to find candidates who can contribute code on day one."
    },
    {
      id: "hr-3",
      iconName: "Users",
      title: "Tailored Candidate Vetting",
      description: "Every candidate undergoes technical challenges and behavioral interviews designed for your job profiles."
    },
    {
      id: "hr-4",
      iconName: "Zap",
      title: "Accelerated Hiring Cycle",
      description: "Our pre-screened developer pipelines reduce time-to-hire by up to 50%, saving operational time."
    }
  ],
  servicesWhyChoose: [
    {
      id: "wc-1",
      iconName: "CheckCircle",
      title: "Proven Matching Algorithm",
      description: "We map candidate portfolios directly to team requirements, assuring accurate fit ratios and retention."
    },
    {
      id: "wc-2",
      iconName: "Clock",
      title: "Fast Placement Cycle",
      description: "Receive qualified candidate profiles within 48 hours, keeping your engineering plans on schedule."
    },
    {
      id: "wc-3",
      iconName: "ShieldCheck",
      title: "Risk-Free Hiring Guarantee",
      description: "Every placement includes a replacement guarantee period, ensuring minimal hire risk for your team."
    }
  ],
  contactMethods: [

    {
      id: "cm-2",
      iconName: "Mail",
      title: "Email support",
      description: "Send us your queries any time.",
      contact: "info@procyonsol.com",
      action: "Email us",
      link: "mailto:info@procyonsol.com",
      color: "bg-[#0076d6]/10 text-[#0076d6]"
    },
    {
      id: "cm-3",
      iconName: "MapPin",
      title: "Visit office",
      description: "Our doors are open Monday to Friday.",
      contact: "Ameerpet, Hyderabad",
      action: "Directions",
      link: "https://maps.google.com",
      color: "bg-[#0076d6]/10 text-[#0076d6]"
    }
  ],
  pageTexts: initialPageTexts,
  customPages: [],
  seoData: initialSeoData,
  formspreeId: "",
  branding: {
    companyName: "Procyon Solutions",
    brandName: "Procyon Solutions",
    domain: "procyonsol.com",
    twitterHandle: "Procyon Solutions",
    logoUrl: "/logo.png"
  }
};

interface DataContextType {
  content: WebsiteContent;
  loading: boolean;
  error: string | null;
  isFirebase: boolean;
  updateContent: (newContent: WebsiteContent) => Promise<boolean>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WebsiteContent>(defaultFallbackContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize and fetch content
  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Try calling the Express Backend API first
        try {
          const apiRes = await fetch("/api/content");
          if (apiRes.ok) {
            const apiData = await apiRes.json();
            const merged = { ...defaultFallbackContent, ...apiData };
            setContent(merged);
            setLoading(false);
            console.log("Website content loaded successfully from Express Backend API.");
            return;
          }
        } catch (apiErr) {
          console.warn("Express Backend API not available, trying Firebase/LocalStorage fallback...", apiErr);
        }

        if (isFirebaseConfigured) {
          const docRef = doc(db, "content", "website_data");
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data() as WebsiteContent;
            const merged = { ...defaultFallbackContent, ...data };
            setContent(merged);
          } else {
            await setDoc(docRef, defaultFallbackContent);
            setContent(defaultFallbackContent);
          }
        } else {
          // Fall back to LocalStorage
          const localData = getWebsiteContent();
          const merged = { 
            ...defaultFallbackContent, 
            ...localData,
            pageTexts: {
              ...defaultFallbackContent.pageTexts,
              ...(localData?.pageTexts || {})
            }
          };
          setContent(merged);
        }
      } catch (err: any) {
        console.error("Error fetching content:", err);
        setError(err.message || "Failed to fetch website content.");
        setContent(defaultFallbackContent);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const updateContent = async (newContent: WebsiteContent): Promise<boolean> => {
    try {
      let backendSuccess = false;
      // Try updating via Express Backend API
      try {
        const apiRes = await fetch("/api/content", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newContent),
        });
        if (apiRes.ok) {
          backendSuccess = true;
        }
      } catch (apiErr) {
        console.warn("Failed to update via Express Backend API:", apiErr);
      }

      // Also persist to Firebase/LocalStorage as secondary
      if (isFirebaseConfigured) {
        try {
          const docRef = doc(db, "content", "website_data");
          await setDoc(docRef, newContent);
        } catch (firebaseErr: any) {
          console.warn("Failed to persist to Firestore:", firebaseErr);
          // If the Express backend succeeded (local server development), allow it to pass
          if (!backendSuccess) {
            throw firebaseErr;
          }
        }
      } else {
        saveWebsiteContent(newContent);
      }

      setContent(newContent);
      return true;
    } catch (err: any) {
      console.error("Error updating content:", err);
      return false;
    }
  };

  return (
    <DataContext.Provider value={{ content, loading, error, isFirebase: isFirebaseConfigured, updateContent }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
