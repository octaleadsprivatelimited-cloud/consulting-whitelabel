import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cleanMarkdown(text: string | undefined): string {
  if (!text) return "";
  return text
    .replace(/###\s+/g, "") // Remove headers (### )
    .replace(/###/g, "")    // Remove headers (###)
    .replace(/\*\*/g, "")   // Remove bold markers (**)
    .replace(/\*/g, "");    // Remove italic markers (*)
}
