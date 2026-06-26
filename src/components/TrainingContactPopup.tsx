import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";
import { useData } from "@/context/DataContext";

interface TrainingContactPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TrainingContactPopup = ({ open, onOpenChange }: TrainingContactPopupProps) => {
  const { content } = useData();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateName = (value: string) => {
    if (!value.trim()) {
      setNameError("Name is required");
      return false;
    }
    setNameError("");
    return true;
  };

  const validatePhone = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    if (!digitsOnly) {
      setPhoneError("Phone number is required");
      return false;
    }
    if (digitsOnly.length < 10) {
      setPhoneError("Phone number must be 10 digits");
      return false;
    }
    if (digitsOnly.length > 10) {
      setPhoneError("Phone number must be 10 digits");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits after +91
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length <= 10) {
      setPhone(digitsOnly);
    }
    if (phoneError) {
      validatePhone(digitsOnly);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const isNameValid = validateName(name);
    const isPhoneValid = validatePhone(phone);

    if (!isNameValid || !isPhoneValid) {
      return;
    }

    setIsSubmitting(true);
    
    const formspreeId = content?.formspreeId || "";
    let savedLocally = false;

    // 1. Submit to local Express backend for Admin Panel visibility
    try {
      const localResponse = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: "info@procyonsol.com",
          company: `Phone: +91${phone}`,
          source: "Training Popup",
          message: "Inquiry for corporate training workshop details."
        }),
      });
      if (localResponse.ok) {
        savedLocally = true;
      }
    } catch (err) {
      console.warn("Failed to save lead in local backend database:", err);
    }

    // 2. Submit to Formspree for email forwarding
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _subject: "Training Workshop Inquiry - Procyon Solutions",
          name: name,
          phone: `+91${phone}`,
        }),
      });

      if (response.ok || savedLocally) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          onOpenChange(false);
          // Reset form after closing
          setTimeout(() => {
            setName("");
            setPhone("");
            setIsSubmitted(false);
          }, 300);
        }, 2000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting form:", error);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset errors when closing
    setTimeout(() => {
      setNameError("");
      setPhoneError("");
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl">Get Workshop Details</DialogTitle>
              <DialogDescription className="text-sm">
                Enter your details for course information
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground">We'll contact you shortly with workshop details.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} action={`https://formspree.io/f/${content?.formspreeId || ""}`} method="POST" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) validateName(e.target.value);
                }}
                onBlur={() => validateName(name)}
                className={nameError ? "border-red-500 focus-visible:ring-red-500" : ""}
              />
              {nameError && (
                <p className="text-sm text-red-500">{nameError}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <div className="flex">
                <div className="flex items-center px-3 bg-muted border border-r-0 border-input rounded-l-md text-sm text-muted-foreground">
                  +91
                </div>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter 10 digit number"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={() => validatePhone(phone)}
                  className={`rounded-l-none ${phoneError ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  maxLength={10}
                />
              </div>
              {phoneError && (
                <p className="text-sm text-red-500">{phoneError}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By submitting, you agree to receive workshop information via call/SMS.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};