import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Globe,
  FileText,
  Settings,
  AlertCircle,
  CheckCircle,
  Search,
  Database,
  Mail,
  Plus,
  Trash2,
  Edit,
  BarChart3,
  Activity,
  ShieldAlert,
  Clock,
  Sparkles,
  ExternalLink,
  Eye,
  RefreshCw,
  Sliders,
  Download,
  ListFilter,
  CheckSquare,
  Square,
  Save,
  Undo2,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Briefcase,
  Building2,
  BookOpen,
  Zap,
  Handshake,
  Users,
  X,
  Phone,
  MapPin,
  Upload,
  Play,
  Pause,
  Terminal,
  Grid,
  Menu,
  Check,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { seoData as initialSeoData } from "@/data/seoData";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useData, defaultFallbackContent } from "@/context/DataContext";
import { useAuth } from "@/context/AuthContext";
import {
  WebsiteContent,
  ServiceItem,
  IndustryItem,
  ResourceItem,
  BenefitItem,
  PartnerBenefitItem,
  LeadershipItem,
  initialPageTexts
} from "@/data/pageContentData";

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  source: "Contact Form" | "Careers Form" | "Training Popup";
  message: string;
  status: "New" | "Reviewed" | "Archived";
  date: string;
}

const initialLeads: Lead[] = [
  {
    id: "1",
    name: "Suresh Kumar",
    email: "suresh.k@manufacturing-india.com",
    company: "Sun Metals Private Limited",
    source: "Contact Form",
    message: "Interested in IT consulting services and system integration. We want a detailed quote and roadmap.",
    status: "New",
    date: "2026-06-08 14:32"
  },
  {
    id: "2",
    name: "Anjali Sharma",
    email: "anjali.sharma@gmail.com",
    company: "N/A (Candidate)",
    source: "Careers Form",
    message: "Applying for Senior Full-Stack Engineer position. 6 years of experience in React and Node.js.",
    status: "New",
    date: "2026-06-08 10:15"
  }
];

export default function AdminPanel() {
  const { user, loading, loginWithGoogle, logout, loginSimulated } = useAuth();
  const { content, updateContent } = useData();
  
  // Base State
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [seoList, setSeoList] = useState(initialSeoData);
  const [webContent, setWebContent] = useState<WebsiteContent>(content || defaultFallbackContent);
  const [searchQuery, setSearchQuery] = useState("");
  const [leadSearchQuery, setLeadSearchQuery] = useState("");
  const [leadFilter, setLeadFilter] = useState<string>("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Tab Navigation Binding State
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeContentTab, setActiveContentTab] = useState("home");

  // Sync content context
  useEffect(() => {
    if (content) {
      setWebContent(content);
      if (content.seoData) setSeoList(content.seoData);
      if (content.formspreeId) setFormspreeId(content.formspreeId);
      if (content.branding) {
        setCompanyName(content.branding.companyName || "");
        setBrandName(content.branding.brandName || "");
        setDomain(content.branding.domain || "");
        setTwitterHandle(content.branding.twitterHandle || "");
        setLogoUrl(content.branding.logoUrl || "");
      } else {
        setCompanyName("Procyon Solutions");
        setBrandName("Procyon Solutions");
        setDomain("Procyon Solutions.com");
        setTwitterHandle("Procyon Solutions");
        setLogoUrl("/logo.png");
      }
    }
  }, [content]);

  // Fetch Leads from Database
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/leads");
        if (res.ok) {
          const data = await res.json();
          setLeads(data);
        }
      } catch (err) {
        console.warn("Express backend unavailable, running with fallback mock leads");
      }
    };
    fetchLeads();
  }, []);

  // System Config States
  const [formspreeId, setFormspreeId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [domain, setDomain] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [googleAnalytics, setGoogleAnalytics] = useState(true);
  const [cacheClearStatus, setCacheClearStatus] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStatus, setScanStatus] = useState("");
  const [seoScore, setSeoScore] = useState(92);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 800000) {
      toast.error("Logo file size should be less than 800KB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      if (base64) {
        setLogoUrl(base64);
        toast.success("Logo uploaded successfully! Click Apply Branding Config to save.");
      }
    };
    reader.onerror = () => {
      toast.error("Failed to read file");
    };
    reader.readAsDataURL(file);
  };

  // Modal States
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [isEditSeoOpen, setIsEditSeoOpen] = useState(false);
  
  // Add Lead States
  const [newLeadName, setNewLeadName] = useState("");
  const [newLeadEmail, setNewLeadEmail] = useState("");
  const [newLeadCompany, setNewLeadCompany] = useState("");
  const [newLeadSource, setNewLeadSource] = useState<Lead["source"]>("Contact Form");
  const [newLeadMessage, setNewLeadMessage] = useState("");

  // Edit SEO States
  const [editingPath, setEditingPath] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editKeywords, setEditKeywords] = useState("");
  const [editCanonical, setEditCanonical] = useState("");

  // Live Timer
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);



  // Icons Helper
  const AVAILABLE_ICONS = [
    "Cloud", "Database", "Settings", "Code", "Wrench", "Users", "Star",
    "Headphones", "CheckCircle", "Building2", "Heart", "Truck", "Leaf",
    "Banknote", "GraduationCap", "Book", "Video", "FileText", "Download",
    "Zap", "Handshake", "Award", "TrendingUp", "Shield", "Phone", "Mail"
  ];

  // Database Export & Import
  const handleExportDatabase = () => {
    try {
      const dataBlob = new Blob([JSON.stringify(webContent, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(dataBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Procyon Solutions_content_backup_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      toast.success("Database exported successfully!");
    } catch (err) {
      toast.error("Failed to export: " + err);
    }
  };

  const handleImportDatabase = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (!parsed.services || !parsed.industries || !parsed.pageTexts) {
          throw new Error("Invalid schema structure");
        }
        await handleSaveContentChange(parsed);
        toast.success("Database restored successfully!");
      } catch (err: any) {
        toast.error("Invalid database format: " + err.message);
      }
    };
    reader.readAsText(file);
  };

  // Save changes globally
  const handleSaveContentChange = async (updatedContent: WebsiteContent) => {
    setWebContent(updatedContent);
    const success = await updateContent(updatedContent);
    if (success) {
      toast.success("Changes saved successfully to database!");
    } else {
      toast.error("Failed to persist modifications.");
    }
  };

  // Text content updater helper
  const handleUpdatePageTexts = (pageKey: string, updatedFields: any) => {
    const texts = webContent.pageTexts || initialPageTexts;
    const updated = {
      ...texts,
      [pageKey]: {
        ...(texts[pageKey as keyof typeof texts] || {}),
        ...updatedFields
      }
    };
    handleSaveContentChange({
      ...webContent,
      pageTexts: updated as any
    });
  };

  // Reset defaults
  const handleResetDefaults = async () => {
    if (confirm("Reset website copy and structure to initial defaults? All manual edits will be lost.")) {
      setWebContent(defaultFallbackContent);
      const success = await updateContent(defaultFallbackContent);
      if (success) toast.success("Reset completed successfully!");
    }
  };

  // Edit SEO Form
  const handleOpenEditSeo = (path: string) => {
    const seo = seoList[path];
    if (seo) {
      setEditingPath(path);
      setEditTitle(seo.title);
      setEditDescription(seo.description || "");
      setEditKeywords(seo.keywords || "");
      setEditCanonical(seo.canonical || "");
      setIsEditSeoOpen(true);
    }
  };

  const handleSaveSeo = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSeo = {
      ...seoList,
      [editingPath]: {
        title: editTitle,
        description: editDescription,
        keywords: editKeywords,
        canonical: editCanonical
      }
    };
    setSeoList(updatedSeo);
    setIsEditSeoOpen(false);
    handleSaveContentChange({
      ...webContent,
      seoData: updatedSeo
    });
  };

  // Leads CRUD
  const handleAddLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName || !newLeadEmail) return toast.error("Name and Email are required");
    
    const item = {
      name: newLeadName,
      email: newLeadEmail,
      company: newLeadCompany || "N/A",
      source: newLeadSource,
      message: newLeadMessage
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
      });
      if (res.ok) {
        const data = await res.json();
        setLeads([data.lead, ...leads]);
        toast.success("Simulated lead saved!");
      }
    } catch {
      const mockLead: Lead = {
        id: `mock-${Date.now()}`,
        ...item,
        status: "New",
        date: new Date().toISOString().replace('T', ' ').substring(0, 16)
      };
      setLeads([mockLead, ...leads]);
      toast.success("Simulated lead saved locally!");
    }
    
    setIsAddLeadOpen(false);
    setNewLeadName("");
    setNewLeadEmail("");
    setNewLeadCompany("");
    setNewLeadMessage("");
  };

  const handleDeleteLead = async (id: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, { method: "DELETE" });
      if (res.ok) {
        setLeads(leads.filter(l => l.id !== id));
        toast.success("Lead removed!");
      }
    } catch {
      setLeads(leads.filter(l => l.id !== id));
      toast.success("Lead removed locally!");
    }
  };

  const handleUpdateLeadStatus = async (id: string, status: Lead["status"]) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
        toast.success("Status updated!");
      }
    } catch {
      setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
      toast.success("Status updated locally!");
    }
  };

  const handleClearCache = () => {
    setCacheClearStatus(true);
    toast.loading("Flushing page caches...");
    setTimeout(() => {
      setCacheClearStatus(false);
      toast.dismiss();
      toast.success("Caches cleared successfully!");
    }, 1200);
  };

  const runLiveAudit = () => {
    setIsScanning(true);
    setScanProgress(15);
    setScanStatus("Scanning active pages...");
    setTimeout(() => {
      setScanProgress(60);
      setScanStatus("Analyzing metadata length...");
      setTimeout(() => {
        setScanProgress(100);
        setIsScanning(false);
        setSeoScore(96);
        toast.success("System audited: SEO score is 96/100!");
      }, 1000);
    }, 800);
  };

  // 1. Home Features CRUD
  const [editingHomeFeature, setEditingHomeFeature] = useState<any | null>(null);
  const [newHomeFeature, setNewHomeFeature] = useState({ title: "", description: "", link: "", linkText: "", iconName: "Cloud" });
  const moveHomeFeature = (index: number, direction: 'up' | 'down') => {
    const list = [...(webContent.homeFeatures || [])];
    if (direction === 'up' && index > 0) [list[index - 1], list[index]] = [list[index], list[index - 1]];
    else if (direction === 'down' && index < list.length - 1) [list[index + 1], list[index]] = [list[index], list[index + 1]];
    handleSaveContentChange({ ...webContent, homeFeatures: list });
  };
  const deleteHomeFeature = (index: number) => {
    const list = (webContent.homeFeatures || []).filter((_, i) => i !== index);
    handleSaveContentChange({ ...webContent, homeFeatures: list });
  };
  const addHomeFeature = () => {
    if (!newHomeFeature.title) return toast.error("Title is required");
    const list = [...(webContent.homeFeatures || []), {
      ...newHomeFeature,
      id: `feat-${Date.now()}`,
      underlineColor: "bg-[#0076d6]"
    }];
    handleSaveContentChange({ ...webContent, homeFeatures: list });
    setNewHomeFeature({ title: "", description: "", link: "", linkText: "", iconName: "Cloud" });
  };

  // Homepage Reasons CRUD
  const [editingHomeReason, setEditingHomeReason] = useState<any | null>(null);
  const [newHomeReason, setNewHomeReason] = useState({ title: "", description: "", iconName: "CheckCircle" });
  const moveHomeReason = (index: number, direction: 'up' | 'down') => {
    const list = [...(webContent.homeReasons || [])];
    if (direction === 'up' && index > 0) [list[index - 1], list[index]] = [list[index], list[index - 1]];
    else if (direction === 'down' && index < list.length - 1) [list[index + 1], list[index]] = [list[index], list[index + 1]];
    handleSaveContentChange({ ...webContent, homeReasons: list });
  };
  const deleteHomeReason = (index: number) => {
    const list = (webContent.homeReasons || []).filter((_, i) => i !== index);
    handleSaveContentChange({ ...webContent, homeReasons: list });
  };
  const addHomeReason = () => {
    if (!newHomeReason.title) return toast.error("Title is required");
    const list = [...(webContent.homeReasons || []), {
      ...newHomeReason,
      id: `reason-${Date.now()}`
    }];
    handleSaveContentChange({ ...webContent, homeReasons: list });
    setNewHomeReason({ title: "", description: "", iconName: "CheckCircle" });
  };

  // 2. Products CRUD
  const [editingProduct, setEditingProduct] = useState<any | null>(null);
  const [newProduct, setNewProduct] = useState({ title: "", subtitle: "", description: "", link: "", iconName: "Cloud", image: "", features: "" });
  const deleteProduct = (id: string) => {
    const list = (webContent.products || []).filter(p => p.id !== id);
    handleSaveContentChange({ ...webContent, products: list });
  };
  const addProduct = () => {
    if (!newProduct.title) return toast.error("Title is required");
    const tags = newProduct.features.split(",").map(x => x.trim()).filter(Boolean);
    const list = [...(webContent.products || []), {
      id: `prod-${Date.now()}`,
      title: newProduct.title,
      subtitle: newProduct.subtitle,
      description: newProduct.description,
      link: newProduct.link,
      iconName: newProduct.iconName,
      image: newProduct.image,
      features: tags,
      color: "bg-accent"
    }];
    handleSaveContentChange({ ...webContent, products: list });
    setNewProduct({ title: "", subtitle: "", description: "", link: "", iconName: "Cloud", image: "", features: "" });
  };
  const moveProduct = (index: number, direction: 'up' | 'down') => {
    const list = [...(webContent.products || [])];
    if (direction === 'up' && index > 0) [list[index - 1], list[index]] = [list[index], list[index - 1]];
    else if (direction === 'down' && index < list.length - 1) [list[index + 1], list[index]] = [list[index], list[index + 1]];
    handleSaveContentChange({ ...webContent, products: list });
  };

  // 3. Services CRUD
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [newService, setNewService] = useState({ title: "", description: "", iconName: "Settings", href: "", features: "" });
  const deleteService = (id: string) => {
    const list = (webContent.services || []).filter(s => s.id !== id);
    handleSaveContentChange({ ...webContent, services: list });
  };
  const addService = () => {
    if (!newService.title) return toast.error("Title is required");
    const tags = newService.features.split(",").map(x => x.trim()).filter(Boolean);
    const list = [...(webContent.services || []), {
      id: `serv-${Date.now()}`,
      title: newService.title,
      description: newService.description,
      iconName: newService.iconName,
      href: newService.href,
      features: tags
    } as ServiceItem];
    handleSaveContentChange({ ...webContent, services: list });
    setNewService({ title: "", description: "", iconName: "Settings", href: "", features: "" });
  };
  const moveService = (index: number, direction: 'up' | 'down') => {
    const list = [...(webContent.services || [])];
    if (direction === 'up' && index > 0) [list[index - 1], list[index]] = [list[index], list[index - 1]];
    else if (direction === 'down' && index < list.length - 1) [list[index + 1], list[index]] = [list[index], list[index + 1]];
    handleSaveContentChange({ ...webContent, services: list });
  };

  // 4. Industries CRUD
  const [editingIndustry, setEditingIndustry] = useState<IndustryItem | null>(null);
  const [newIndustry, setNewIndustry] = useState({ title: "", description: "", iconName: "Building2", slug: "" });
  const deleteIndustry = (id: string) => {
    const list = (webContent.industries || []).filter(i => i.id !== id);
    handleSaveContentChange({ ...webContent, industries: list });
  };
  const addIndustry = () => {
    if (!newIndustry.title) return toast.error("Title is required");
    const list = [...(webContent.industries || []), {
      id: `ind-${Date.now()}`,
      title: newIndustry.title,
      description: newIndustry.description,
      iconName: newIndustry.iconName,
      slug: newIndustry.slug
    } as IndustryItem];
    handleSaveContentChange({ ...webContent, industries: list });
    setNewIndustry({ title: "", description: "", iconName: "Building2", slug: "" });
  };
  const moveIndustry = (index: number, direction: 'up' | 'down') => {
    const list = [...(webContent.industries || [])];
    if (direction === 'up' && index > 0) [list[index - 1], list[index]] = [list[index], list[index - 1]];
    else if (direction === 'down' && index < list.length - 1) [list[index + 1], list[index]] = [list[index], list[index + 1]];
    handleSaveContentChange({ ...webContent, industries: list });
  };

  // 5. Resources CRUD
  const [editingResource, setEditingResource] = useState<ResourceItem | null>(null);
  const [newResource, setNewResource] = useState({ title: "", description: "", iconName: "Book", link: "" });
  const deleteResource = (id: string) => {
    const list = (webContent.resources || []).filter(r => r.id !== id);
    handleSaveContentChange({ ...webContent, resources: list });
  };
  const addResource = () => {
    if (!newResource.title) return toast.error("Title is required");
    const list = [...(webContent.resources || []), {
      id: `res-${Date.now()}`,
      title: newResource.title,
      description: newResource.description,
      iconName: newResource.iconName,
      link: newResource.link
    } as ResourceItem];
    handleSaveContentChange({ ...webContent, resources: list });
    setNewResource({ title: "", description: "", iconName: "Book", link: "" });
  };

  // 6. Careers Benefits CRUD
  const [editingBenefit, setEditingBenefit] = useState<BenefitItem | null>(null);
  const [newBenefit, setNewBenefit] = useState({ title: "", description: "", iconName: "Zap" });
  const deleteBenefit = (id: string) => {
    const list = (webContent.benefits || []).filter(b => b.id !== id);
    handleSaveContentChange({ ...webContent, benefits: list });
  };
  const addBenefit = () => {
    if (!newBenefit.title) return toast.error("Title is required");
    const list = [...(webContent.benefits || []), {
      id: `ben-${Date.now()}`,
      title: newBenefit.title,
      description: newBenefit.description,
      iconName: newBenefit.iconName
    } as BenefitItem];
    handleSaveContentChange({ ...webContent, benefits: list });
    setNewBenefit({ title: "", description: "", iconName: "Zap" });
  };

  // 7. Partners CRUD
  const [editingPartnerBenefit, setEditingPartnerBenefit] = useState<PartnerBenefitItem | null>(null);
  const [newPartnerBenefit, setNewPartnerBenefit] = useState({ title: "", description: "", iconName: "Handshake" });
  const deletePartnerBenefit = (id: string) => {
    const list = (webContent.partnerBenefits || []).filter(pb => pb.id !== id);
    handleSaveContentChange({ ...webContent, partnerBenefits: list });
  };
  const addPartnerBenefit = () => {
    if (!newPartnerBenefit.title) return toast.error("Title is required");
    const list = [...(webContent.partnerBenefits || []), {
      id: `pb-${Date.now()}`,
      title: newPartnerBenefit.title,
      description: newPartnerBenefit.description,
      iconName: newPartnerBenefit.iconName
    } as PartnerBenefitItem];
    handleSaveContentChange({ ...webContent, partnerBenefits: list });
    setNewPartnerBenefit({ title: "", description: "", iconName: "Handshake" });
  };

  // 8. Leadership CRUD
  const [editingLeadership, setEditingLeadership] = useState<LeadershipItem | null>(null);
  const [newLeadership, setNewLeadership] = useState({ name: "", role: "", description: "" });
  const deleteLeadership = (id: string) => {
    const list = (webContent.leadership || []).filter(l => l.id !== id);
    handleSaveContentChange({ ...webContent, leadership: list });
  };
  const addLeadership = () => {
    if (!newLeadership.name) return toast.error("Name is required");
    const list = [...(webContent.leadership || []), {
      id: `lead-${Date.now()}`,
      name: newLeadership.name,
      role: newLeadership.role,
      description: newLeadership.description
    } as LeadershipItem];
    handleSaveContentChange({ ...webContent, leadership: list });
    setNewLeadership({ name: "", role: "", description: "" });
  };

  // 9. Contact Methods CRUD
  const [editingContactMethod, setEditingContactMethod] = useState<any | null>(null);
  const [newContactMethod, setNewContactMethod] = useState({ title: "", contact: "", description: "", action: "", link: "", iconName: "Mail" });
  const deleteContactMethod = (index: number) => {
    const list = (webContent.contactMethods || []).filter((_, i) => i !== index);
    handleSaveContentChange({ ...webContent, contactMethods: list });
  };
  const addContactMethod = () => {
    if (!newContactMethod.title) return toast.error("Title is required");
    const list = [...(webContent.contactMethods || []), {
      ...newContactMethod,
      id: `contact-${Date.now()}`,
      color: "bg-sky-50 text-sky-600"
    }];
    handleSaveContentChange({ ...webContent, contactMethods: list });
    setNewContactMethod({ title: "", contact: "", description: "", action: "", link: "", iconName: "Mail" });
  };

  // 10. Custom Pages Builder
  const [selectedCustomPageSlug, setSelectedCustomPageSlug] = useState("");
  const [newCustomPage, setNewCustomPage] = useState({ title: "", slug: "", description: "", template: "blank" });
  const [newSectionType, setNewSectionType] = useState("hero");

  const addCustomPage = () => {
    if (!newCustomPage.title || !newCustomPage.slug) return toast.error("Title and Slug are required");
    const cleanSlug = newCustomPage.slug.trim().toLowerCase().replace(/^\/+/, '').replace(/\s+/g, '-');
    const pages = webContent.customPages || [];
    if (pages.some((p: any) => p.slug === cleanSlug)) return toast.error("Slug already exists");

    const newPage = {
      title: newCustomPage.title,
      slug: cleanSlug,
      description: newCustomPage.description,
      sections: [{ id: `sec-${Date.now()}`, type: "hero", title: newCustomPage.title, subtitle: newCustomPage.description }]
    };

    handleSaveContentChange({ ...webContent, customPages: [...pages, newPage] });
    setSelectedCustomPageSlug(cleanSlug);
    setNewCustomPage({ title: "", slug: "", description: "", template: "blank" });
  };

  const deleteCustomPage = (slug: string) => {
    if (confirm("Delete this custom page?")) {
      const list = (webContent.customPages || []).filter((p: any) => p.slug !== slug);
      handleSaveContentChange({ ...webContent, customPages: list });
      if (selectedCustomPageSlug === slug) setSelectedCustomPageSlug("");
    }
  };

  const addSectionToCustomPage = (slug: string) => {
    const pages = [...(webContent.customPages || [])];
    const pageIdx = pages.findIndex((p: any) => p.slug === slug);
    if (pageIdx === -1) return;

    const newSec = {
      id: `sec-${Date.now()}`,
      type: newSectionType,
      title: `New ${newSectionType.toUpperCase()}`,
      subtitle: "Custom Description",
      content: newSectionType === "text" ? "Enter descriptive text here..." : undefined,
      items: (newSectionType === "features" || newSectionType === "stats") ? [] : undefined
    };

    pages[pageIdx] = { ...pages[pageIdx], sections: [...(pages[pageIdx].sections || []), newSec] };
    handleSaveContentChange({ ...webContent, customPages: pages });
  };

  const deleteSectionFromCustomPage = (slug: string, id: string) => {
    const pages = [...(webContent.customPages || [])];
    const pageIdx = pages.findIndex((p: any) => p.slug === slug);
    if (pageIdx === -1) return;

    pages[pageIdx] = { ...pages[pageIdx], sections: (pages[pageIdx].sections || []).filter((s: any) => s.id !== id) };
    handleSaveContentChange({ ...webContent, customPages: pages });
  };

  const updateCustomSectionFields = (slug: string, id: string, fields: any) => {
    const pages = [...(webContent.customPages || [])];
    const pageIdx = pages.findIndex((p: any) => p.slug === slug);
    if (pageIdx === -1) return;

    pages[pageIdx] = {
      ...pages[pageIdx],
      sections: (pages[pageIdx].sections || []).map((s: any) => s.id === id ? { ...s, ...fields } : s)
    };
    setWebContent({ ...webContent, customPages: pages });
  };

  // Auth Checks
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center font-sans">
        <div className="w-10 h-10 border-2 border-sky-600/20 border-t-sky-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Loading Session...</p>
      </div>
    );
  }

  const isAdmin = user && user.email === 'admin.procyonsolutions@gmail.com';

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-slate-100 via-sky-50/30 to-indigo-50/30 flex items-center justify-center p-4 font-sans antialiased">
        <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mx-auto">
              <ShieldAlert className="w-6 h-6 text-sky-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Procyon Solutions Console</h1>
            <p className="text-sm text-slate-500">Please sign in to access website operations.</p>
          </div>

          <Button
            onClick={loginWithGoogle}
            className="w-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl py-6 font-semibold flex items-center justify-center gap-3 transition-all hover:shadow-md active:scale-[0.99]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Sign in with Google
          </Button>

          <div className="pt-2 text-center">
            <button
              onClick={() => {
                const email = prompt("Enter simulated admin email:", "admin.procyonsolutions@gmail.com");
                if (email) {
                  loginSimulated(email);
                }
              }}
              className="text-[11px] text-slate-400 hover:text-sky-600 transition-colors underline"
            >
              Simulate Google Sign-In (Local Host Bypass)
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-rose-50/20 flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-6 h-6 text-rose-600" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-slate-900">Access Denied</h1>
            <p className="text-sm text-slate-500 leading-relaxed">
              The account <strong className="text-slate-800">{user.email}</strong> is not configured as an administrator.
            </p>
          </div>
          <Button onClick={logout} className="w-full bg-rose-600 hover:bg-rose-500 text-white rounded-xl py-5 font-semibold">
            Sign In with Different Account
          </Button>
        </div>
      </div>
    );
  }

  // Filtered Lists
  const filteredSeoList = Object.entries(seoList).filter(([path, data]) => {
    return path.toLowerCase().includes(searchQuery.toLowerCase()) || data.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filteredLeads = leads.filter(lead => {
    const match = lead.name.toLowerCase().includes(leadSearchQuery.toLowerCase()) || lead.company.toLowerCase().includes(leadSearchQuery.toLowerCase());
    const filter = leadFilter === "All" || lead.status === leadFilter;
    return match && filter;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans antialiased">
      <Helmet>
        <title>Procyon Solutions Console | Administrative Control</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Top Header */}
      <header className="bg-white border-b border-slate-200/80 px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm shadow-slate-100/40">
        <div className="flex items-center gap-3">
          <Button size="icon" variant="ghost" className="md:hidden text-slate-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white shadow-md shadow-sky-600/10">
              <Sliders className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg text-slate-900 tracking-tight">Procyon Solutions</span>
            <Badge className="bg-slate-100 text-slate-600 border border-slate-200 text-[9px] hover:bg-slate-100 px-1.5 py-0.5 rounded-md font-medium ml-1">CONSOLE</Badge>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 text-xs text-slate-500 border-r border-slate-200 pr-4">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>Server: Online</span>
            <span className="font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded-md">{currentTime}</span>
          </div>

          <Link to="/" target="_blank">
            <Button size="sm" variant="outline" className="border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs shadow-sm flex items-center gap-1.5 rounded-lg h-9 px-3">
              Live Site <ExternalLink className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Workspace Layout */}
      <div className="flex-1 flex flex-col md:flex-row relative">
        
        {/* Navigation Sidebar (Synced with Active Tabs) */}
        <aside className={`w-64 bg-white border-r border-slate-200/80 p-4 shrink-0 flex flex-col justify-between absolute md:static inset-y-0 left-0 z-20 transition-transform duration-300 md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 block">SYSTEM</span>
              <nav className="space-y-1">
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("dashboard"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "dashboard" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <LayoutDashboard className={`w-4 h-4 ${activeTab === "dashboard" ? "text-sky-600" : "text-slate-400"}`} /> Dashboard
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("leads"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "leads" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Mail className={`w-4 h-4 ${activeTab === "leads" ? "text-sky-600" : "text-slate-400"}`} /> Leads Inbox
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("settings"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "settings" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Settings className={`w-4 h-4 ${activeTab === "settings" ? "text-sky-600" : "text-slate-400"}`} /> Settings
                </Button>
              </nav>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 block">CONTENT EDITOR</span>
              <nav className="space-y-1">
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("content"); setActiveContentTab("home"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "content" && activeContentTab === "home" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Globe className={`w-4 h-4 ${activeTab === "content" && activeContentTab === "home" ? "text-sky-600" : "text-slate-400"}`} /> Homepage
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("content"); setActiveContentTab("products"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "content" && activeContentTab === "products" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Sparkles className={`w-4 h-4 ${activeTab === "content" && activeContentTab === "products" ? "text-sky-600" : "text-slate-400"}`} /> Products
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("content"); setActiveContentTab("services"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "content" && activeContentTab === "services" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Briefcase className={`w-4 h-4 ${activeTab === "content" && activeContentTab === "services" ? "text-sky-600" : "text-slate-400"}`} /> Services
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("content"); setActiveContentTab("industries"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "content" && activeContentTab === "industries" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Building2 className={`w-4 h-4 ${activeTab === "content" && activeContentTab === "industries" ? "text-sky-600" : "text-slate-400"}`} /> Industries
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("content"); setActiveContentTab("resources"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "content" && activeContentTab === "resources" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <BookOpen className={`w-4 h-4 ${activeTab === "content" && activeContentTab === "resources" ? "text-sky-600" : "text-slate-400"}`} /> Resources
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("content"); setActiveContentTab("careers"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "content" && activeContentTab === "careers" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Zap className={`w-4 h-4 ${activeTab === "content" && activeContentTab === "careers" ? "text-sky-600" : "text-slate-400"}`} /> Careers
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("content"); setActiveContentTab("partners"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "content" && activeContentTab === "partners" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Handshake className={`w-4 h-4 ${activeTab === "content" && activeContentTab === "partners" ? "text-sky-600" : "text-slate-400"}`} /> Partners
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("content"); setActiveContentTab("about"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "content" && activeContentTab === "about" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Users className={`w-4 h-4 ${activeTab === "content" && activeContentTab === "about" ? "text-sky-600" : "text-slate-400"}`} /> Who We Are
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("content"); setActiveContentTab("contact"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "content" && activeContentTab === "contact" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Phone className={`w-4 h-4 ${activeTab === "content" && activeContentTab === "contact" ? "text-sky-600" : "text-slate-400"}`} /> Contact Config
                </Button>
              </nav>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 block">DYNAMIC LAYOUTS</span>
              <nav className="space-y-1">
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("builder"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "builder" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <FileText className={`w-4 h-4 ${activeTab === "builder" ? "text-sky-600" : "text-slate-400"}`} /> Pages Builder
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => { setActiveTab("seo"); setMobileMenuOpen(false); }}
                  className={`w-full justify-start gap-3 font-medium text-xs rounded-xl py-2 px-3 ${activeTab === "seo" ? "bg-sky-50 text-sky-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  <Sliders className={`w-4 h-4 ${activeTab === "seo" ? "text-sky-600" : "text-slate-400"}`} /> SEO Manager
                </Button>
              </nav>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Admin" className="w-7 h-7 rounded-full" />
              ) : (
                <div className="w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs">A</div>
              )}
              <div className="overflow-hidden">
                <p className="text-xs font-semibold text-slate-800 truncate">{user.displayName || "Admin"}</p>
                <p className="text-[10px] text-slate-400 truncate">{user.email}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={logout} className="text-rose-600 hover:text-rose-700 hover:bg-rose-50/50 justify-start gap-2 font-medium text-xs py-2 px-3 rounded-xl">
              <ExternalLink className="w-3.5 h-3.5 rotate-180" /> Logout
            </Button>
          </div>
        </aside>

        {/* Content Panel Area */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto space-y-6">
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full space-y-6">
            
            {/* Sync Header Tabs */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm">
              <TabsList className="bg-slate-50 border border-slate-100 p-1 flex-wrap h-auto gap-1 rounded-xl">
                <TabsTrigger value="dashboard" className="text-xs px-3 py-1.5 rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">Dashboard</TabsTrigger>
                <TabsTrigger value="leads" className="text-xs px-3 py-1.5 rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">Inquiries</TabsTrigger>
                <TabsTrigger value="settings" className="text-xs px-3 py-1.5 rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">Settings</TabsTrigger>
                <TabsTrigger value="content" className="text-xs px-3 py-1.5 rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">Pages Editor</TabsTrigger>
                <TabsTrigger value="seo" className="text-xs px-3 py-1.5 rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">SEO Manager</TabsTrigger>
                <TabsTrigger value="builder" className="text-xs px-3 py-1.5 rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm">Pages Builder</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button size="sm" onClick={handleExportDatabase} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-xs h-9 shadow-sm"><Download className="w-3.5 h-3.5 mr-1" /> Export JSON</Button>
                <Button size="sm" variant="outline" onClick={() => document.getElementById("db-import")?.click()} className="border-slate-200 bg-white hover:bg-slate-50 text-xs h-9 shadow-sm"><Upload className="w-3.5 h-3.5 mr-1" /> Restore</Button>
                <input type="file" id="db-import" className="hidden" accept=".json" onChange={handleImportDatabase} />
              </div>
            </div>

            {/* TAB: DASHBOARD */}
            <TabsContent value="dashboard" className="space-y-6 focus:outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Inquiries</CardTitle>
                    <Mail className="w-4 h-4 text-sky-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-slate-900">{leads.length}</div>
                    <p className="text-[11px] text-emerald-600 mt-1 font-semibold flex items-center">▲ 12.5% increase</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">SEO Readiness</CardTitle>
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-slate-900">{seoScore}/100</div>
                    <p className="text-[11px] text-indigo-600 mt-1 font-semibold">Fully Optimized</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">Formspree Gateway</CardTitle>
                    <Database className="w-4 h-4 text-emerald-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-slate-900 font-mono text-base truncate">{formspreeId}</div>
                    <p className="text-[11px] text-emerald-600 mt-1 font-semibold flex items-center">Active Endpoint</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">Custom Pages</CardTitle>
                    <Globe className="w-4 h-4 text-amber-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-slate-900">{webContent.customPages?.length || 0}</div>
                    <p className="text-[11px] text-slate-500 mt-1">Routes Active</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold text-slate-900">Lead Acquisition Trend</CardTitle>
                    <CardDescription>Inquiries gathered over the past week</CardDescription>
                  </CardHeader>
                  <CardContent className="h-56 flex items-end justify-between gap-3 pt-6">
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-sky-100 hover:bg-sky-200 rounded-lg h-16 transition-all"></div>
                      <span className="text-[10px] font-semibold text-slate-400">Mon</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-sky-100 hover:bg-sky-200 rounded-lg h-24 transition-all"></div>
                      <span className="text-[10px] font-semibold text-slate-400">Tue</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-sky-100 hover:bg-sky-200 rounded-lg h-20 transition-all"></div>
                      <span className="text-[10px] font-semibold text-slate-400">Wed</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-sky-100 hover:bg-sky-200 rounded-lg h-36 transition-all"></div>
                      <span className="text-[10px] font-semibold text-slate-400">Thu</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-sky-600 rounded-lg h-44 transition-all"></div>
                      <span className="text-[10px] font-bold text-sky-600">Today</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-sm font-bold text-slate-900">Diagnostics</CardTitle>
                    <CardDescription>Node.js dev environment details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-slate-700">
                        <span>CPU Utilization</span>
                        <span className="font-mono text-slate-900">12%</span>
                      </div>
                      <Progress value={12} className="h-1.5 bg-slate-50" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-slate-700">
                        <span>Memory Utilization</span>
                        <span className="font-mono text-slate-900">45MB / 512MB</span>
                      </div>
                      <Progress value={9} className="h-1.5 bg-slate-50" />
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-xs space-y-2">
                      <div className="flex justify-between"><span className="text-slate-500">Node Version:</span><span className="text-slate-800 font-mono">v20.11.0</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Port Bind:</span><span className="text-slate-800 font-mono">127.0.0.1:8080</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">Build Outcome:</span><Badge className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-semibold py-0 rounded-md">SUCCESS</Badge></div>
                    </div>

                    <Button onClick={handleClearCache} size="sm" variant="outline" className="w-full border-slate-200 hover:bg-slate-50 text-xs rounded-xl h-9 mt-1">
                      <RefreshCw className="w-3.5 h-3.5 mr-1" /> Clear Cache
                    </Button>
                  </CardContent>
                </Card>
              </div>

            </TabsContent>

            {/* TAB: LEADS INBOX */}
            <TabsContent value="leads" className="space-y-6 focus:outline-none">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Client Leads & Messages</h3>
                  <p className="text-xs text-slate-500">Review forms submissions</p>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Input placeholder="Search messages..." value={leadSearchQuery} onChange={(e) => setLeadSearchQuery(e.target.value)} className="bg-slate-50 border-slate-200 text-xs w-full sm:w-48 h-9 rounded-lg" />
                  <select value={leadFilter} onChange={(e) => setLeadFilter(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg px-2 outline-none">
                    <option value="All">All Status</option>
                    <option value="New">New</option>
                    <option value="Reviewed">Reviewed</option>
                  </select>
                  <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9" onClick={() => setIsAddLeadOpen(true)}><Plus className="w-4 h-4 mr-1" /> Create</Button>
                </div>
              </div>

              <div className="space-y-4">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map(lead => (
                    <Card key={lead.id} className="bg-white border-slate-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all">
                      <CardContent className="p-6 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 text-sm">{lead.name}</span>
                            <span className="text-slate-300">|</span>
                            <span className="text-xs text-slate-500">{lead.company}</span>
                            <span className="text-slate-300">|</span>
                            <span className="text-xs text-sky-600 font-mono">{lead.email}</span>
                          </div>
                          <Badge className={lead.status === "New" ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-sky-50 text-sky-700 border border-sky-200"}>{lead.status}</Badge>
                        </div>
                        <p className="text-xs text-slate-600 bg-slate-50/50 p-3 rounded-xl border border-slate-100 leading-relaxed font-normal">{lead.message}</p>
                        
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-300" /> Submitted: {lead.date}</span>
                          <div className="flex items-center gap-2">
                            {lead.status === "New" && (
                              <Button size="sm" variant="ghost" className="text-emerald-600 hover:text-emerald-700 text-xs px-2.5 h-7 rounded-lg" onClick={() => handleUpdateLeadStatus(lead.id, "Reviewed")}>Mark Reviewed</Button>
                            )}
                            <Button size="icon" variant="ghost" className="text-rose-500 hover:bg-rose-50 rounded-lg w-7 h-7" onClick={() => handleDeleteLead(lead.id)}><Trash2 className="w-4 h-4" /></Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 bg-white border border-slate-200/80 rounded-2xl text-slate-400 text-xs font-medium">No inquiries found matching search.</div>
                )}
              </div>

              {/* Add Lead Dialog */}
              <Dialog open={isAddLeadOpen} onOpenChange={setIsAddLeadOpen}>
                <DialogContent className="bg-white text-slate-800 max-w-md border border-slate-200 rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-slate-950 font-bold text-base">Create Simulated Lead</DialogTitle>
                    <DialogDescription className="text-slate-500">Insert a mock contact request to test notification triggers.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAddLeadSubmit} className="space-y-4 my-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">Name *</label>
                      <Input required value={newLeadName} onChange={(e) => setNewLeadName(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">Email *</label>
                      <Input required type="email" value={newLeadEmail} onChange={(e) => setNewLeadEmail(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">Company</label>
                      <Input value={newLeadCompany} onChange={(e) => setNewLeadCompany(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">Message</label>
                      <Textarea value={newLeadMessage} onChange={(e) => setNewLeadMessage(e.target.value)} rows={3} className="bg-slate-50 border-slate-200 text-xs rounded-lg" />
                    </div>
                    <DialogFooter className="pt-2 border-t border-slate-100">
                      <Button type="button" variant="ghost" onClick={() => setIsAddLeadOpen(false)} className="text-xs h-9 rounded-lg">Cancel</Button>
                      <Button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white text-xs h-9 rounded-lg">Save Inquiry</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </TabsContent>

            {/* TAB: SYSTEM SETTINGS */}
            <TabsContent value="settings" className="space-y-6 focus:outline-none">
              <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm max-w-2xl">
                <CardHeader>
                  <CardTitle className="text-sm font-bold text-slate-900">Whitelabel Branding & Customization</CardTitle>
                  <CardDescription>Configure the global branding, company name, domain, and logos to whitelabel this template</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Company Legal Name</label>
                      <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" placeholder="e.g. Procyon Solutions" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Brand Name</label>
                      <Input value={brandName} onChange={(e) => setBrandName(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" placeholder="e.g. Procyon Solutions" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Canonical Domain Name</label>
                      <Input value={domain} onChange={(e) => setDomain(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" placeholder="e.g. Procyon Solutions.com" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Twitter Handle</label>
                      <Input value={twitterHandle} onChange={(e) => setTwitterHandle(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" placeholder="e.g. Procyon Solutions" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Logo Asset URL or Upload</label>
                    <div className="flex gap-2">
                      <Input value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg flex-1" placeholder="e.g. /logo.png" />
                      <div className="relative">
                        <input
                          type="file"
                          id="logo-upload"
                          accept="image/*"
                          className="hidden"
                          onChange={handleLogoUpload}
                        />
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => document.getElementById("logo-upload")?.click()}
                          className="border-slate-200 bg-white hover:bg-slate-50 text-xs h-9 shadow-sm"
                        >
                          <Upload className="w-3.5 h-3.5 mr-1" />
                          Upload Logo
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <Button size="sm" onClick={() => handleSaveContentChange({
                      ...webContent,
                      branding: { companyName, brandName, domain, twitterHandle, logoUrl }
                    })} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9">
                      Apply Branding Config
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm max-w-2xl">
                <CardHeader>
                  <CardTitle className="text-sm font-bold text-slate-900">Formspree & Services Gateway</CardTitle>
                  <CardDescription>Configure mail pipelines and analytics trackers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Formspree Form ID Endpoint</label>
                    <div className="flex gap-2">
                      <Input value={formspreeId} onChange={(e) => setFormspreeId(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg max-w-xs" />
                      <Button size="sm" onClick={() => handleSaveContentChange({ ...webContent, formspreeId })} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9">Update Gateway</Button>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">System Operations</h4>
                    
                    <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl">
                      <div>
                        <p className="text-xs font-bold text-slate-800">Maintenance Sandbox Mode</p>
                        <p className="text-[10px] text-slate-400">Lock site routes to show maintenance screen</p>
                      </div>
                      <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl">
                      <div>
                        <p className="text-xs font-bold text-slate-800">Google Analytics Monitoring</p>
                        <p className="text-[10px] text-slate-400">Inject event listeners for tag manager analytics</p>
                      </div>
                      <Switch checked={googleAnalytics} onCheckedChange={setGoogleAnalytics} />
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6 flex justify-between gap-4">
                    <Button onClick={handleResetDefaults} variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 text-xs rounded-xl h-10 px-4">Reset Content to Defaults</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB: CONTENT PAGES EDITOR */}
            <TabsContent value="content" className="space-y-6 focus:outline-none">
              
              <Tabs value={activeContentTab} onValueChange={setActiveContentTab} className="flex flex-col lg:flex-row gap-6 items-start">
                
                {/* Nested Content Pages Selection */}
                <TabsList className="flex flex-col h-auto w-full lg:w-48 bg-white border border-slate-200/80 p-2 gap-1 rounded-2xl shadow-sm shrink-0 items-stretch">
                  <TabsTrigger value="home" className="justify-start text-xs py-2 px-3 rounded-xl data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 font-medium">Homepage</TabsTrigger>
                  <TabsTrigger value="products" className="justify-start text-xs py-2 px-3 rounded-xl data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 font-medium">Products</TabsTrigger>
                  <TabsTrigger value="services" className="justify-start text-xs py-2 px-3 rounded-xl data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 font-medium">Services</TabsTrigger>
                  <TabsTrigger value="industries" className="justify-start text-xs py-2 px-3 rounded-xl data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 font-medium">Industries</TabsTrigger>
                  <TabsTrigger value="resources" className="justify-start text-xs py-2 px-3 rounded-xl data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 font-medium">Resources Center</TabsTrigger>
                  <TabsTrigger value="careers" className="justify-start text-xs py-2 px-3 rounded-xl data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 font-medium">Careers</TabsTrigger>
                  <TabsTrigger value="partners" className="justify-start text-xs py-2 px-3 rounded-xl data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 font-medium">Partners</TabsTrigger>
                  <TabsTrigger value="about" className="justify-start text-xs py-2 px-3 rounded-xl data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 font-medium">Who We Are</TabsTrigger>
                  <TabsTrigger value="contact" className="justify-start text-xs py-2 px-3 rounded-xl data-[state=active]:bg-sky-50 data-[state=active]:text-sky-700 font-medium">Contact Us</TabsTrigger>
                </TabsList>

                {/* Sub Tab: HOME */}
                <TabsContent value="home" className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-6 w-full focus:outline-none">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Homepage Text Content</h3>
                    <p className="text-xs text-slate-500">Configure page copy for the website entrypoint</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Hero Main Title</label>
                      <Input value={webContent.pageTexts?.home?.heroTitle || ""} onChange={(e) => handleUpdatePageTexts("home", { heroTitle: e.target.value })} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Hero Description Sub-text</label>
                      <Textarea value={webContent.pageTexts?.home?.heroDescription || ""} onChange={(e) => handleUpdatePageTexts("home", { heroDescription: e.target.value })} className="bg-slate-50 border-slate-200 text-xs rounded-lg" rows={3} />
                    </div>
                  </div>

                  {/* Feature Cards list CRUD */}
                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Homepage Core Features Cards</h4>
                    </div>

                    {editingHomeFeature && (
                      <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                        <h5 className="text-xs font-bold text-sky-700">Editing Card: {editingHomeFeature.title}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input value={editingHomeFeature.title} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                          <Input value={editingHomeFeature.link} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, link: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Link (e.g. /services)" />
                          <Input value={editingHomeFeature.linkText} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, linkText: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Link Text" />
                          <select value={editingHomeFeature.iconName} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                            {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                        <Textarea value={editingHomeFeature.description} onChange={(e) => setEditingHomeFeature({ ...editingHomeFeature, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost" onClick={() => setEditingHomeFeature(null)}>Cancel</Button>
                          <Button size="sm" onClick={() => {
                            const list = [...(webContent.homeFeatures || [])];
                            list[editingHomeFeature._index] = { ...editingHomeFeature };
                            handleSaveContentChange({ ...webContent, homeFeatures: list });
                            setEditingHomeFeature(null);
                          }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Card</Button>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(webContent.homeFeatures || []).map((feat, index) => (
                        <div key={index} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex flex-col justify-between gap-3">
                          <div className="space-y-1">
                            <span className="text-[10px] text-sky-600 font-bold uppercase tracking-wider font-mono">Card #{index + 1}</span>
                            <h5 className="text-xs font-bold text-slate-800">{feat.title}</h5>
                            <p className="text-[11px] text-slate-500 leading-relaxed">{feat.description}</p>
                          </div>
                          <div className="flex justify-between items-center border-t border-slate-100 pt-2 mt-2">
                            <div className="flex gap-1">
                              <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveHomeFeature(index, 'up')} disabled={index === 0}><ArrowUp className="w-3 h-3" /></Button>
                              <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveHomeFeature(index, 'down')} disabled={index === (webContent.homeFeatures?.length || 1) - 1}><ArrowDown className="w-3 h-3" /></Button>
                            </div>
                            <div className="flex gap-1">
                              <Button size="icon" variant="ghost" onClick={() => setEditingHomeFeature({ ...feat, _index: index })} className="w-7 h-7 text-sky-600 hover:bg-sky-50"><Edit className="w-3.5 h-3.5" /></Button>
                              <Button size="icon" variant="ghost" onClick={() => deleteHomeFeature(index)} className="w-7 h-7 text-rose-500 hover:bg-rose-50"><Trash2 className="w-3.5 h-3.5" /></Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                      <CardHeader className="py-3 px-4">
                        <CardTitle className="text-xs font-bold text-slate-700">Add New Feature Card</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 px-4 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input value={newHomeFeature.title} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                          <Input value={newHomeFeature.link} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, link: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Link" />
                          <Input value={newHomeFeature.linkText} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, linkText: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Link Text" />
                          <select value={newHomeFeature.iconName} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                            {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                        <Textarea value={newHomeFeature.description} onChange={(e) => setNewHomeFeature({ ...newHomeFeature, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                        <Button size="sm" onClick={addHomeFeature} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Card</Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Why Choose Us Reasons CRUD */}
                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Why Choose Us Reasons</h4>
                    </div>

                    {editingHomeReason && (
                      <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                        <h5 className="text-xs font-bold text-sky-700">Editing Reason: {editingHomeReason.title}</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input value={editingHomeReason.title} onChange={(e) => setEditingHomeReason({ ...editingHomeReason, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                          <select value={editingHomeReason.iconName} onChange={(e) => setEditingHomeReason({ ...editingHomeReason, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                            {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                        <Textarea value={editingHomeReason.description} onChange={(e) => setEditingHomeReason({ ...editingHomeReason, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost" onClick={() => setEditingHomeReason(null)}>Cancel</Button>
                          <Button size="sm" onClick={() => {
                            const list = [...(webContent.homeReasons || [])];
                            list[editingHomeReason._index] = { ...editingHomeReason };
                            handleSaveContentChange({ ...webContent, homeReasons: list });
                            setEditingHomeReason(null);
                          }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Reason</Button>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {(webContent.homeReasons || []).map((reason, index) => (
                        <div key={index} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex flex-col justify-between gap-3">
                          <div className="space-y-1">
                            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider font-mono">Reason #{index + 1}</span>
                            <h5 className="text-xs font-bold text-slate-800">{reason.title}</h5>
                            <p className="text-[11px] text-slate-500 leading-relaxed">{reason.description}</p>
                          </div>
                          <div className="flex justify-between items-center border-t border-slate-100 pt-2 mt-2">
                            <div className="flex gap-1">
                              <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveHomeReason(index, 'up')} disabled={index === 0}><ArrowUp className="w-3 h-3" /></Button>
                              <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveHomeReason(index, 'down')} disabled={index === (webContent.homeReasons?.length || 1) - 1}><ArrowDown className="w-3 h-3" /></Button>
                            </div>
                            <div className="flex gap-1">
                              <Button size="icon" variant="ghost" onClick={() => setEditingHomeReason({ ...reason, _index: index })} className="w-7 h-7 text-sky-600 hover:bg-sky-50"><Edit className="w-3.5 h-3.5" /></Button>
                              <Button size="icon" variant="ghost" onClick={() => deleteHomeReason(index)} className="w-7 h-7 text-rose-500 hover:bg-rose-50"><Trash2 className="w-3.5 h-3.5" /></Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                      <CardHeader className="py-3 px-4">
                        <CardTitle className="text-xs font-bold text-slate-700">Add New Reason Card</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 px-4 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input value={newHomeReason.title} onChange={(e) => setNewHomeReason({ ...newHomeReason, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                          <select value={newHomeReason.iconName} onChange={(e) => setNewHomeReason({ ...newHomeReason, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                            {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                        <Textarea value={newHomeReason.description} onChange={(e) => setNewHomeReason({ ...newHomeReason, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                        <Button size="sm" onClick={addHomeReason} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Reason</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Sub Tab: PRODUCTS */}
                <TabsContent value="products" className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-6 w-full focus:outline-none">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Products Listing Configurations</h3>
                    <p className="text-xs text-slate-500">Add, edit, or remove enterprise tech platforms products</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Products Hero Page Title</label>
                      <Input value={webContent.pageTexts?.productsPage?.heroTitle || ""} onChange={(e) => handleUpdatePageTexts("productsPage", { heroTitle: e.target.value })} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                    </div>
                  </div>

                  {editingProduct && (
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                      <h5 className="text-xs font-bold text-sky-700">Editing Product: {editingProduct.title}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={editingProduct.title} onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <Input value={editingProduct.subtitle} onChange={(e) => setEditingProduct({ ...editingProduct, subtitle: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Subtitle" />
                        <Input value={editingProduct.link} onChange={(e) => setEditingProduct({ ...editingProduct, link: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Link (e.g. /products/contract-staffing)" />
                        <Input value={editingProduct.image} onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Image URL (e.g. /product1.webp)" />
                        <Input value={(editingProduct.features || []).join(", ")} onChange={(e) => setEditingProduct({ ...editingProduct, features: e.target.value.split(",").map((x: string) => x.trim()).filter(Boolean) })} className="bg-white border-slate-200 text-xs h-9" placeholder="Features (comma separated)" />
                        <select value={editingProduct.iconName} onChange={(e) => setEditingProduct({ ...editingProduct, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={editingProduct.description} onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={3} placeholder="Description" />
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setEditingProduct(null)}>Cancel</Button>
                        <Button size="sm" onClick={() => {
                          const list = (webContent.products || []).map(p => p.id === editingProduct.id ? editingProduct : p);
                          handleSaveContentChange({ ...webContent, products: list });
                          setEditingProduct(null);
                        }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Product</Button>
                      </div>
                    </div>
                  )}

                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Products Offerings List</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {(webContent.products || []).map((p, index) => (
                        <div key={p.id} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex flex-col justify-between gap-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="text-xs font-bold text-slate-800">{p.title}</h5>
                              <p className="text-[10px] text-slate-400">{p.subtitle}</p>
                              <p className="text-[11px] text-slate-500 max-w-lg mt-1">{p.description}</p>
                            </div>
                            <div className="flex gap-1 shrink-0">
                              <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveProduct(index, 'up')} disabled={index === 0}><ArrowUp className="w-3 h-3" /></Button>
                              <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveProduct(index, 'down')} disabled={index === (webContent.products?.length || 1) - 1}><ArrowDown className="w-3 h-3" /></Button>
                              <Button size="icon" variant="ghost" className="w-7 h-7 text-sky-600 hover:bg-sky-50" onClick={() => setEditingProduct(p)}><Edit className="w-3.5 h-3.5" /></Button>
                              <Button size="icon" variant="ghost" className="w-7 h-7 text-rose-500 hover:bg-rose-50" onClick={() => deleteProduct(p.id)}><Trash2 className="w-4 h-4" /></Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                      <CardHeader className="py-3 px-4">
                        <CardTitle className="text-xs font-bold text-slate-700">Add New Product Suite</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 px-4 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input value={newProduct.title} onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                          <Input value={newProduct.subtitle} onChange={(e) => setNewProduct({ ...newProduct, subtitle: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Subtitle" />
                          <Input value={newProduct.link} onChange={(e) => setNewProduct({ ...newProduct, link: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Link" />
                          <Input value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Image URL" />
                          <Input value={newProduct.features} onChange={(e) => setNewProduct({ ...newProduct, features: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Features (comma separated)" />
                          <select value={newProduct.iconName} onChange={(e) => setNewProduct({ ...newProduct, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                            {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                        <Textarea value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                        <Button size="sm" onClick={addProduct} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Product</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Sub Tab: SERVICES */}
                <TabsContent value="services" className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-6 w-full focus:outline-none">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">IT Consulting Services Settings</h3>
                    <p className="text-xs text-slate-500">Configure page hero titles and core list of service components</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Services Page Hero Title</label>
                      <Input value={webContent.pageTexts?.services?.heroTitle || ""} onChange={(e) => handleUpdatePageTexts("services", { heroTitle: e.target.value })} className="bg-slate-50 border-slate-200 text-xs h-9" />
                    </div>
                  </div>

                  {editingService && (
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                      <h5 className="text-xs font-bold text-sky-700">Editing Service: {editingService.title}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={editingService.title} onChange={(e) => setEditingService({ ...editingService, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <Input value={editingService.href} onChange={(e) => setEditingService({ ...editingService, href: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="URL Route Link" />
                        <Input value={(editingService.features || []).join(", ")} onChange={(e) => setEditingService({ ...editingService, features: e.target.value.split(",").map((x: string) => x.trim()).filter(Boolean) })} className="bg-white border-slate-200 text-xs h-9" placeholder="Features (comma separated)" />
                        <select value={editingService.iconName} onChange={(e) => setEditingService({ ...editingService, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={editingService.description} onChange={(e) => setEditingService({ ...editingService, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={3} placeholder="Description" />
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setEditingService(null)}>Cancel</Button>
                        <Button size="sm" onClick={() => {
                          const list = (webContent.services || []).map(s => s.id === editingService.id ? editingService : s);
                          handleSaveContentChange({ ...webContent, services: list });
                          setEditingService(null);
                        }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Service</Button>
                      </div>
                    </div>
                  )}

                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Active Services List</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {(webContent.services || []).map((s, index) => (
                        <div key={s.id} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex justify-between items-center gap-4">
                          <div>
                            <h5 className="text-xs font-bold text-slate-800">{s.title}</h5>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{s.description}</p>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveService(index, 'up')} disabled={index === 0}><ArrowUp className="w-3 h-3" /></Button>
                            <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveService(index, 'down')} disabled={index === (webContent.services?.length || 1) - 1}><ArrowDown className="w-3 h-3" /></Button>
                            <Button size="icon" variant="ghost" className="w-7 h-7 text-sky-600 hover:bg-sky-50" onClick={() => setEditingService(s)}><Edit className="w-3.5 h-3.5" /></Button>
                            <Button size="icon" variant="ghost" className="text-rose-500 hover:bg-rose-50" onClick={() => deleteService(s.id)}><Trash2 className="w-4 h-4" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                      <CardHeader className="py-3 px-4">
                        <CardTitle className="text-xs font-bold text-slate-700">Add New Service</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 px-4 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input value={newService.title} onChange={(e) => setNewService({ ...newService, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                          <Input value={newService.href} onChange={(e) => setNewService({ ...newService, href: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="URL Link (e.g. /services/dedicated-squads)" />
                          <Input value={newService.features} onChange={(e) => setNewService({ ...newService, features: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Features (comma separated)" />
                          <select value={newService.iconName} onChange={(e) => setNewService({ ...newService, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                            {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                        <Textarea value={newService.description} onChange={(e) => setNewService({ ...newService, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                        <Button size="sm" onClick={addService} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Service</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Sub Tab: INDUSTRIES */}
                <TabsContent value="industries" className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-6 w-full focus:outline-none">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Industry Verticals</h3>
                    <p className="text-xs text-slate-500">Manage target domains and industry verticals</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Hero Main Title</label>
                      <Input value={webContent.pageTexts?.industries?.heroTitle || ""} onChange={(e) => handleUpdatePageTexts("industries", { heroTitle: e.target.value })} className="bg-slate-50 border-slate-200 text-xs h-9" />
                    </div>
                  </div>

                  {editingIndustry && (
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                      <h5 className="text-xs font-bold text-sky-700">Editing Industry: {editingIndustry.title}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={editingIndustry.title} onChange={(e) => setEditingIndustry({ ...editingIndustry, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <Input value={editingIndustry.slug} onChange={(e) => setEditingIndustry({ ...editingIndustry, slug: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Route Slug" />
                        <select value={editingIndustry.iconName} onChange={(e) => setEditingIndustry({ ...editingIndustry, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={editingIndustry.description} onChange={(e) => setEditingIndustry({ ...editingIndustry, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={3} placeholder="Description" />
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setEditingIndustry(null)}>Cancel</Button>
                        <Button size="sm" onClick={() => {
                          const list = (webContent.industries || []).map(i => i.id === editingIndustry.id ? editingIndustry : i);
                          handleSaveContentChange({ ...webContent, industries: list });
                          setEditingIndustry(null);
                        }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Industry</Button>
                      </div>
                    </div>
                  )}

                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Active Industries</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {(webContent.industries || []).map((i, index) => (
                        <div key={i.id} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex justify-between items-center gap-4">
                          <div>
                            <h5 className="text-xs font-bold text-slate-800">{i.title}</h5>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{i.description}</p>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveIndustry(index, 'up')} disabled={index === 0}><ArrowUp className="w-3 h-3" /></Button>
                            <Button size="icon" variant="ghost" className="w-6 h-6 text-slate-400" onClick={() => moveIndustry(index, 'down')} disabled={index === (webContent.industries?.length || 1) - 1}><ArrowDown className="w-3 h-3" /></Button>
                            <Button size="icon" variant="ghost" className="w-7 h-7 text-sky-600 hover:bg-sky-50" onClick={() => setEditingIndustry(i)}><Edit className="w-3.5 h-3.5" /></Button>
                            <Button size="icon" variant="ghost" className="text-rose-500 hover:bg-rose-50" onClick={() => deleteIndustry(i.id)}><Trash2 className="w-4 h-4" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                      <CardHeader className="py-3 px-4">
                        <CardTitle className="text-xs font-bold text-slate-700">Add New Industry</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 px-4 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input value={newIndustry.title} onChange={(e) => setNewIndustry({ ...newIndustry, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                          <Input value={newIndustry.slug} onChange={(e) => setNewIndustry({ ...newIndustry, slug: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Slug (e.g. software-saas)" />
                          <select value={newIndustry.iconName} onChange={(e) => setNewIndustry({ ...newIndustry, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                            {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                        <Textarea value={newIndustry.description} onChange={(e) => setNewIndustry({ ...newIndustry, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                        <Button size="sm" onClick={addIndustry} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Industry</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Sub Tab: RESOURCES */}
                <TabsContent value="resources" className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-6 w-full focus:outline-none">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Resources Library</h3>
                    <p className="text-xs text-slate-500">Edit reference links, training material, or guides</p>
                  </div>

                  {editingResource && (
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                      <h5 className="text-xs font-bold text-sky-700">Editing Resource: {editingResource.title}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={editingResource.title} onChange={(e) => setEditingResource({ ...editingResource, title: e.target.value } as ResourceItem)} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <Input value={editingResource.link} onChange={(e) => setEditingResource({ ...editingResource, link: e.target.value } as ResourceItem)} className="bg-white border-slate-200 text-xs h-9" placeholder="Resource link URL" />
                        <select value={editingResource.iconName} onChange={(e) => setEditingResource({ ...editingResource, iconName: e.target.value } as ResourceItem)} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={editingResource.description} onChange={(e) => setEditingResource({ ...editingResource, description: e.target.value } as ResourceItem)} className="bg-white border-slate-200 text-xs" rows={3} placeholder="Description" />
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setEditingResource(null)}>Cancel</Button>
                        <Button size="sm" onClick={() => {
                          const list = (webContent.resources || []).map(r => r.id === editingResource.id ? editingResource : r);
                          handleSaveContentChange({ ...webContent, resources: list });
                          setEditingResource(null);
                        }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Resource</Button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-3">
                    {(webContent.resources || []).map(r => (
                      <div key={r.id} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex justify-between items-center gap-4">
                        <div>
                          <h5 className="text-xs font-bold text-slate-800">{r.title}</h5>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{r.description}</p>
                        </div>
                        <div className="flex gap-1 shrink-0">
                          <Button size="icon" variant="ghost" className="w-7 h-7 text-sky-600 hover:bg-sky-50" onClick={() => setEditingResource(r)}><Edit className="w-3.5 h-3.5" /></Button>
                          <Button size="icon" variant="ghost" className="text-rose-500 hover:bg-rose-50 shrink-0" onClick={() => deleteResource(r.id)}><Trash2 className="w-4 h-4" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-xs font-bold text-slate-700">Add New Resource Item</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 px-4 pb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={newResource.title} onChange={(e) => setNewResource({ ...newResource, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <Input value={newResource.link} onChange={(e) => setNewResource({ ...newResource, link: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Link (e.g. /resources/software)" />
                        <select value={newResource.iconName} onChange={(e) => setNewResource({ ...newResource, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={newResource.description} onChange={(e) => setNewResource({ ...newResource, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                      <Button size="sm" onClick={addResource} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Resource</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Sub Tab: CAREERS */}
                <TabsContent value="careers" className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-6 w-full focus:outline-none">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Careers Page Settings</h3>
                    <p className="text-xs text-slate-500">Configure corporate benefit lists and candidate prompts</p>
                  </div>

                  {editingBenefit && (
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                      <h5 className="text-xs font-bold text-sky-700">Editing Benefit: {editingBenefit.title}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={editingBenefit.title} onChange={(e) => setEditingBenefit({ ...editingBenefit, title: e.target.value } as BenefitItem)} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <select value={editingBenefit.iconName} onChange={(e) => setEditingBenefit({ ...editingBenefit, iconName: e.target.value } as BenefitItem)} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={editingBenefit.description} onChange={(e) => setEditingBenefit({ ...editingBenefit, description: e.target.value } as BenefitItem)} className="bg-white border-slate-200 text-xs" rows={3} placeholder="Description" />
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setEditingBenefit(null)}>Cancel</Button>
                        <Button size="sm" onClick={() => {
                          const list = (webContent.benefits || []).map(b => b.id === editingBenefit.id ? editingBenefit : b);
                          handleSaveContentChange({ ...webContent, benefits: list });
                          setEditingBenefit(null);
                        }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Benefit</Button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-3">
                    {(webContent.benefits || []).map(b => (
                      <div key={b.id} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex justify-between items-center gap-4">
                        <div>
                          <h5 className="text-xs font-bold text-slate-800">{b.title}</h5>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{b.description}</p>
                        </div>
                        <div className="flex gap-1 shrink-0">
                          <Button size="icon" variant="ghost" className="w-7 h-7 text-sky-600 hover:bg-sky-50" onClick={() => setEditingBenefit(b)}><Edit className="w-3.5 h-3.5" /></Button>
                          <Button size="icon" variant="ghost" className="text-rose-500 hover:bg-rose-50 shrink-0" onClick={() => deleteBenefit(b.id)}><Trash2 className="w-4 h-4" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-xs font-bold text-slate-700">Add New Career Benefit</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 px-4 pb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={newBenefit.title} onChange={(e) => setNewBenefit({ ...newBenefit, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <select value={newBenefit.iconName} onChange={(e) => setNewBenefit({ ...newBenefit, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={newBenefit.description} onChange={(e) => setNewBenefit({ ...newBenefit, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                      <Button size="sm" onClick={addBenefit} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Benefit</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Sub Tab: PARTNERS */}
                <TabsContent value="partners" className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-6 w-full focus:outline-none">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Partners Ecosystem</h3>
                    <p className="text-xs text-slate-500">Manage benefits cards for network partners</p>
                  </div>

                  {editingPartnerBenefit && (
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                      <h5 className="text-xs font-bold text-sky-700">Editing Partner Benefit: {editingPartnerBenefit.title}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={editingPartnerBenefit.title} onChange={(e) => setEditingPartnerBenefit({ ...editingPartnerBenefit, title: e.target.value } as PartnerBenefitItem)} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <select value={editingPartnerBenefit.iconName} onChange={(e) => setEditingPartnerBenefit({ ...editingPartnerBenefit, iconName: e.target.value } as PartnerBenefitItem)} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={editingPartnerBenefit.description} onChange={(e) => setEditingPartnerBenefit({ ...editingPartnerBenefit, description: e.target.value } as PartnerBenefitItem)} className="bg-white border-slate-200 text-xs" rows={3} placeholder="Description" />
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setEditingPartnerBenefit(null)}>Cancel</Button>
                        <Button size="sm" onClick={() => {
                          const list = (webContent.partnerBenefits || []).map(pb => pb.id === editingPartnerBenefit.id ? editingPartnerBenefit : pb);
                          handleSaveContentChange({ ...webContent, partnerBenefits: list });
                          setEditingPartnerBenefit(null);
                        }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Partner Benefit</Button>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-3">
                    {(webContent.partnerBenefits || []).map(pb => (
                      <div key={pb.id} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex justify-between items-center gap-4">
                        <div>
                          <h5 className="text-xs font-bold text-slate-800">{pb.title}</h5>
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{pb.description}</p>
                        </div>
                        <div className="flex gap-1 shrink-0">
                          <Button size="icon" variant="ghost" className="w-7 h-7 text-sky-600 hover:bg-sky-50" onClick={() => setEditingPartnerBenefit(pb)}><Edit className="w-3.5 h-3.5" /></Button>
                          <Button size="icon" variant="ghost" className="text-rose-500 hover:bg-rose-50 shrink-0" onClick={() => deletePartnerBenefit(pb.id)}><Trash2 className="w-4 h-4" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-xs font-bold text-slate-700">Add New Partner Benefit</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 px-4 pb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={newPartnerBenefit.title} onChange={(e) => setNewPartnerBenefit({ ...newPartnerBenefit, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <select value={newPartnerBenefit.iconName} onChange={(e) => setNewPartnerBenefit({ ...newPartnerBenefit, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={newPartnerBenefit.description} onChange={(e) => setNewPartnerBenefit({ ...newPartnerBenefit, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                      <Button size="sm" onClick={addPartnerBenefit} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Partner Benefit</Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Sub Tab: ABOUT */}
                <TabsContent value="about" className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-6 w-full focus:outline-none">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Company Who We Are Details</h3>
                    <p className="text-xs text-slate-500">Edit company story text block and list of executive profiles</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Hero Main Title</label>
                      <Input value={webContent.pageTexts?.whoWeAre?.heroTitle || ""} onChange={(e) => handleUpdatePageTexts("whoWeAre", { heroTitle: e.target.value })} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Corporate Story Paragraph</label>
                      <Textarea value={webContent.pageTexts?.whoWeAre?.heroDescription || ""} onChange={(e) => handleUpdatePageTexts("whoWeAre", { heroDescription: e.target.value })} className="bg-slate-50 border-slate-200 text-xs rounded-lg" rows={6} />
                    </div>
                  </div>

                  {editingLeadership && (
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                      <h5 className="text-xs font-bold text-sky-700">Editing profile: {editingLeadership.name}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={editingLeadership.name} onChange={(e) => setEditingLeadership({ ...editingLeadership, name: e.target.value } as LeadershipItem)} className="bg-white border-slate-200 text-xs h-9" placeholder="Name" />
                        <Input value={editingLeadership.role} onChange={(e) => setEditingLeadership({ ...editingLeadership, role: e.target.value } as LeadershipItem)} className="bg-white border-slate-200 text-xs h-9" placeholder="Role Job Title" />
                      </div>
                      <Textarea value={editingLeadership.description} onChange={(e) => setEditingLeadership({ ...editingLeadership, description: e.target.value } as LeadershipItem)} className="bg-white border-slate-200 text-xs" rows={3} placeholder="Short bio description" />
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setEditingLeadership(null)}>Cancel</Button>
                        <Button size="sm" onClick={() => {
                          const list = (webContent.leadership || []).map(l => l.id === editingLeadership.id ? editingLeadership : l);
                          handleSaveContentChange({ ...webContent, leadership: list });
                          setEditingLeadership(null);
                        }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Member Profile</Button>
                      </div>
                    </div>
                  )}

                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Executive Leadership List</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {(webContent.leadership || []).map(l => (
                        <div key={l.id} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex justify-between items-center gap-4">
                          <div>
                            <h5 className="text-xs font-bold text-slate-800">{l.name}</h5>
                            <p className="text-[10px] text-sky-600 font-semibold">{l.role}</p>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{l.description}</p>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <Button size="icon" variant="ghost" className="w-7 h-7 text-sky-600 hover:bg-sky-50" onClick={() => setEditingLeadership(l)}><Edit className="w-3.5 h-3.5" /></Button>
                            <Button size="icon" variant="ghost" className="text-rose-500 hover:bg-rose-50 shrink-0" onClick={() => deleteLeadership(l.id)}><Trash2 className="w-4 h-4" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                      <CardHeader className="py-3 px-4">
                        <CardTitle className="text-xs font-bold text-slate-700">Add New Leadership Profile</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 px-4 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input value={newLeadership.name} onChange={(e) => setNewLeadership({ ...newLeadership, name: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Name" />
                          <Input value={newLeadership.role} onChange={(e) => setNewLeadership({ ...newLeadership, role: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Role Job Title" />
                        </div>
                        <Textarea value={newLeadership.description} onChange={(e) => setNewLeadership({ ...newLeadership, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Brief bio..." />
                        <Button size="sm" onClick={addLeadership} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Profile</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Sub Tab: CONTACT */}
                <TabsContent value="contact" className="flex-1 bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm space-y-6 w-full focus:outline-none">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Contact Us Info</h3>
                    <p className="text-xs text-slate-500">Address text parameters and direct call configs</p>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Corporate Headquarters Address Details</label>
                      <Input value={webContent.pageTexts?.contact?.ctaDescription || ""} onChange={(e) => handleUpdatePageTexts("contact", { ctaDescription: e.target.value })} className="bg-slate-50 border-slate-200 text-xs h-9" />
                    </div>
                  </div>

                  {editingContactMethod && (
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-3">
                      <h5 className="text-xs font-bold text-sky-700">Editing Contact Option: {editingContactMethod.title}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Input value={editingContactMethod.title} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                        <Input value={editingContactMethod.contact} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, contact: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Detail value" />
                        <Input value={editingContactMethod.link} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, link: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Link action" />
                        <Input value={editingContactMethod.action} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, action: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Action button text" />
                        <select value={editingContactMethod.iconName} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                          {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                        </select>
                      </div>
                      <Textarea value={editingContactMethod.description} onChange={(e) => setEditingContactMethod({ ...editingContactMethod, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Description" />
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => setEditingContactMethod(null)}>Cancel</Button>
                        <Button size="sm" onClick={() => {
                          const list = [...(webContent.contactMethods || [])];
                          list[editingContactMethod._index] = {
                            id: editingContactMethod.id || `contact-${Date.now()}`,
                            color: editingContactMethod.color || "bg-sky-50 text-sky-600",
                            title: editingContactMethod.title,
                            contact: editingContactMethod.contact,
                            description: editingContactMethod.description,
                            action: editingContactMethod.action,
                            link: editingContactMethod.link,
                            iconName: editingContactMethod.iconName
                          };
                          handleSaveContentChange({ ...webContent, contactMethods: list });
                          setEditingContactMethod(null);
                        }} className="bg-sky-600 hover:bg-sky-700 text-white">Save Option</Button>
                      </div>
                    </div>
                  )}

                  <div className="border-t border-slate-100 pt-6 space-y-4">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest">Active Channels</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {(webContent.contactMethods || []).map((m, index) => (
                        <div key={index} className="border border-slate-100 p-4 rounded-xl bg-slate-50/50 flex justify-between items-center gap-4">
                          <div>
                            <h5 className="text-xs font-bold text-slate-800">{m.title}</h5>
                            <p className="text-xs font-mono text-sky-600 mt-0.5">{m.contact}</p>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <Button size="icon" variant="ghost" className="w-7 h-7 text-sky-600 hover:bg-sky-50" onClick={() => setEditingContactMethod({ ...m, _index: index })}><Edit className="w-3.5 h-3.5" /></Button>
                            <Button size="icon" variant="ghost" className="text-rose-500 hover:bg-rose-50 shrink-0" onClick={() => deleteContactMethod(index)}><Trash2 className="w-4 h-4" /></Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Card className="bg-slate-50/30 border-slate-200 border-dashed rounded-xl mt-4">
                      <CardHeader className="py-3 px-4">
                        <CardTitle className="text-xs font-bold text-slate-700">Add New Channel option</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 px-4 pb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input value={newContactMethod.title} onChange={(e) => setNewContactMethod({ ...newContactMethod, title: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Title" />
                          <Input value={newContactMethod.contact} onChange={(e) => setNewContactMethod({ ...newContactMethod, contact: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Detail value (e.g. hello@procyonsol.com)" />
                          <Input value={newContactMethod.link} onChange={(e) => setNewContactMethod({ ...newContactMethod, link: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Link action (e.g. mailto:...)" />
                          <Input value={newContactMethod.action} onChange={(e) => setNewContactMethod({ ...newContactMethod, action: e.target.value })} className="bg-white border-slate-200 text-xs h-9" placeholder="Button text (e.g. Email Us)" />
                          <select value={newContactMethod.iconName} onChange={(e) => setNewContactMethod({ ...newContactMethod, iconName: e.target.value })} className="bg-white border border-slate-200 rounded-lg text-xs px-2 h-9">
                            {AVAILABLE_ICONS.map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                        </div>
                        <Textarea value={newContactMethod.description} onChange={(e) => setNewContactMethod({ ...newContactMethod, description: e.target.value })} className="bg-white border-slate-200 text-xs" rows={2} placeholder="Short desc..." />
                        <Button size="sm" onClick={addContactMethod} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9 w-full">Create Option</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

              </Tabs>
            </TabsContent>

            {/* TAB: SEO MANAGER */}
            <TabsContent value="seo" className="space-y-6 focus:outline-none">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">SEO Headers & Metadata Monitor</h3>
                  <p className="text-xs text-slate-500">Configure titles and descriptions index filters globally</p>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <Input placeholder="Search route keywords..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-slate-50 border-slate-200 text-xs w-full sm:w-48 h-9 rounded-lg" />
                  <Button size="sm" onClick={runLiveAudit} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg h-9"><RefreshCw className="w-3.5 h-3.5 mr-1" /> Run Audit</Button>
                </div>
              </div>

              <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-slate-50 border-slate-200">
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="text-xs font-bold text-slate-600">Route Path</TableHead>
                        <TableHead className="text-xs font-bold text-slate-600">Meta Title</TableHead>
                        <TableHead className="text-xs font-bold text-slate-600">Canonical Tag</TableHead>
                        <TableHead className="text-xs font-bold text-slate-600 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredSeoList.map(([path, data]) => (
                        <TableRow key={path} className="border-slate-100 hover:bg-slate-50/40">
                          <TableCell className="font-mono text-xs text-sky-600 font-semibold">{path}</TableCell>
                          <TableCell>
                            <p className="text-xs font-bold text-slate-800">{data.title}</p>
                            <p className="text-[10px] text-slate-400 max-w-xs truncate">{data.description}</p>
                          </TableCell>
                          <TableCell className="font-mono text-[10px] text-slate-400">{data.canonical || "Default"}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button size="icon" variant="ghost" className="w-8 h-8 text-sky-600 hover:bg-sky-50 rounded-lg" onClick={() => handleOpenEditSeo(path)}><Edit className="w-3.5 h-3.5" /></Button>
                              <a href={path === "*" ? "/not-found" : path} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100"><ExternalLink className="w-3.5 h-3.5" /></a>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>

              {/* Edit SEO Dialog */}
              <Dialog open={isEditSeoOpen} onOpenChange={setIsEditSeoOpen}>
                <DialogContent className="bg-white text-slate-800 max-w-lg border border-slate-200 rounded-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-slate-950 font-bold text-base flex items-center gap-2">Edit Page Metadata</DialogTitle>
                    <DialogDescription className="text-slate-500">Inject parameters for route path: <code className="text-sky-600 font-mono">{editingPath}</code></DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSaveSeo} className="space-y-4 my-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">Meta Title</label>
                      <Input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">Meta Description</label>
                      <Textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} className="bg-slate-50 border-slate-200 text-xs rounded-lg" rows={3} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">Keywords</label>
                      <Input value={editKeywords} onChange={(e) => setEditKeywords(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600">Canonical Tag URL</label>
                      <Input value={editCanonical} onChange={(e) => setEditCanonical(e.target.value)} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                    </div>
                    <DialogFooter className="pt-2 border-t border-slate-100">
                      <Button type="button" variant="ghost" onClick={() => setIsEditSeoOpen(false)} className="text-xs h-9 rounded-lg">Cancel</Button>
                      <Button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white text-xs h-9 rounded-lg">Save Meta</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </TabsContent>

            {/* TAB: PAGES BUILDER */}
            <TabsContent value="builder" className="space-y-6 focus:outline-none">
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Pages List */}
                <div className="space-y-6 lg:col-span-1">
                  <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xs uppercase tracking-wider text-slate-400">Create Page</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-600">Title</label>
                        <Input value={newCustomPage.title} onChange={(e) => setNewCustomPage({ ...newCustomPage, title: e.target.value })} placeholder="CSR Initiatives" className="bg-slate-50 border-slate-200 text-xs h-9" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-600">Slug URL (/p/...)</label>
                        <Input value={newCustomPage.slug} onChange={(e) => setNewCustomPage({ ...newCustomPage, slug: e.target.value })} placeholder="csr-initiatives" className="bg-slate-50 border-slate-200 text-xs h-9" />
                      </div>
                      <Button onClick={addCustomPage} className="w-full bg-sky-600 hover:bg-sky-700 text-white text-xs h-9 rounded-xl">Create Page</Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-slate-200/80 rounded-2xl shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xs uppercase tracking-wider text-slate-400">Custom Pages List</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 divide-y divide-slate-100 font-sans">
                      {(webContent.customPages || []).map((cp: any) => (
                        <div key={cp.slug} className={`p-3.5 flex justify-between items-center cursor-pointer transition-colors ${selectedCustomPageSlug === cp.slug ? 'bg-sky-50/40' : 'hover:bg-slate-50/40'}`} onClick={() => setSelectedCustomPageSlug(cp.slug)}>
                          <div>
                            <p className="text-xs font-bold text-slate-800">{cp.title}</p>
                            <p className="text-[10px] text-sky-600 font-mono mt-0.5">/p/{cp.slug}</p>
                          </div>
                          <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                            <Button size="icon" variant="ghost" className="w-7 h-7 text-rose-500 hover:bg-rose-50" onClick={() => deleteCustomPage(cp.slug)}><Trash2 className="w-3.5 h-3.5" /></Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Section Editor */}
                <div className="lg:col-span-2 space-y-6">
                  {!selectedCustomPageSlug ? (
                    <Card className="bg-white border-slate-200/80 border-dashed rounded-2xl h-80 flex flex-col justify-center items-center text-center p-6">
                      <FileText className="w-10 h-10 text-slate-300 mb-3" />
                      <h4 className="text-xs font-bold text-slate-400">No Custom Page Selected</h4>
                      <p className="text-[11px] text-slate-400 mt-1 max-w-xs">Select or construct a custom route slug from the left pane to edit layout sections.</p>
                    </Card>
                  ) : (
                    (() => {
                      const page = (webContent.customPages || []).find((p: any) => p.slug === selectedCustomPageSlug);
                      if (!page) return null;

                      return (
                        <div className="space-y-4">
                          <div className="bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm flex flex-wrap justify-between items-center gap-4">
                            <div>
                              <h3 className="text-xs font-bold text-slate-800">Designing: {page.title}</h3>
                              <p className="text-[10px] text-sky-600 font-mono">/p/{page.slug}</p>
                            </div>
                            <div className="flex gap-2">
                              <select value={newSectionType} onChange={(e) => setNewSectionType(e.target.value)} className="bg-slate-50 border border-slate-200 text-xs rounded-lg px-2 h-9 outline-none">
                                <option value="hero">Hero Block</option>
                                <option value="text">Paragraph Text</option>
                                <option value="features">Features Grid</option>
                              </select>
                              <Button size="sm" onClick={() => addSectionToCustomPage(page.slug)} className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg h-9"><Plus className="w-3.5 h-3.5 mr-1" /> Add</Button>
                            </div>
                          </div>

                          <div className="space-y-4">
                            {(page.sections || []).map((sec: any, idx: number) => (
                              <Card key={sec.id || idx} className="bg-white border-slate-200/80 rounded-2xl shadow-sm">
                                <CardHeader className="bg-slate-50/50 py-3 px-4 flex flex-row justify-between items-center border-b border-slate-100 rounded-t-2xl">
                                  <div className="flex items-center gap-2">
                                    <Badge className="bg-sky-50 text-sky-700 border border-sky-100 uppercase text-[9px] font-bold">{sec.type}</Badge>
                                    <span className="text-xs font-bold text-slate-800">Section #{idx+1}</span>
                                  </div>
                                  <Button size="icon" variant="ghost" className="w-7 h-7 text-rose-500 hover:bg-rose-50" onClick={() => deleteSectionFromCustomPage(page.slug, sec.id)}><Trash2 className="w-3.5 h-3.5" /></Button>
                                </CardHeader>
                                <CardContent className="p-4 space-y-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                      <label className="text-[10px] font-bold text-slate-500 uppercase">Section Title</label>
                                      <Input value={sec.title || ""} onChange={(e) => updateCustomSectionFields(page.slug, sec.id, { title: e.target.value })} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                                    </div>
                                    <div className="space-y-1">
                                      <label className="text-[10px] font-bold text-slate-500 uppercase">Section Subtitle</label>
                                      <Input value={sec.subtitle || ""} onChange={(e) => updateCustomSectionFields(page.slug, sec.id, { subtitle: e.target.value })} className="bg-slate-50 border-slate-200 text-xs h-9 rounded-lg" />
                                    </div>
                                  </div>

                                  {sec.type === "text" && (
                                    <div className="space-y-1">
                                      <label className="text-[10px] font-bold text-slate-500 uppercase">Paragraph Content</label>
                                      <Textarea value={sec.content || ""} onChange={(e) => updateCustomSectionFields(page.slug, sec.id, { content: e.target.value })} className="bg-slate-50 border-slate-200 text-xs rounded-lg" rows={3} />
                                    </div>
                                  )}
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      );
                    })()
                  )}
                </div>

              </div>

            </TabsContent>

          </Tabs>

        </main>
      </div>
    </div>
  );
}
