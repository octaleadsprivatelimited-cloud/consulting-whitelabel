import { useLocation } from "react-router-dom";
import { useData } from "@/context/DataContext";
import { seoData as staticSeoData } from "@/data/seoData";

export const useSEO = () => {
  const location = useLocation();
  const { content } = useData();
  const pathname = location.pathname;
  
  // Get SEO data from backend context if available, otherwise static fallback
  const activeSeoData = content?.seoData || staticSeoData;
  const seo = activeSeoData[pathname] || activeSeoData["/"] || staticSeoData[pathname] || staticSeoData["/"];
  
  return seo;
};

