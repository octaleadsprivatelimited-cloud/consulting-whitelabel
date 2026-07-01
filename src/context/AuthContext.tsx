import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from "firebase/auth";
import { toast } from "sonner";

interface AuthContextType {
  user: User | MockUser | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  loginSimulated: (email: string) => void;
}

export interface MockUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | MockUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth) {
      // Use real Firebase auth listener
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          setUser(firebaseUser);
          setLoading(false);
        } else {
          // Fallback to simulated user in local storage for local testing/bypass convenience
          const storedUser = localStorage.getItem("Procyon Solutions_admin_user");
          if (storedUser) {
            try {
              setUser(JSON.parse(storedUser));
            } catch (e) {
              localStorage.removeItem("Procyon Solutions_admin_user");
            }
          } else {
            setUser(null);
          }
          setLoading(false);
        }
      });
      return () => unsubscribe();
    } else {
      // LocalStorage fallback for Mock Auth
      const storedUser = localStorage.getItem("Procyon Solutions_admin_user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          localStorage.removeItem("Procyon Solutions_admin_user");
        }
      }
      setLoading(false);
    }
  }, []);

  const loginWithGoogle = async () => {
    setLoading(true);
    if (auth) {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        toast.success(`Welcome back, ${result.user.displayName}!`);
      } catch (error: any) {
        console.error("Google OAuth failed:", error);
        toast.error(error.message || "Failed to authenticate via Google OAuth");
      } finally {
        setLoading(false);
      }
    } else {
      // Simulate Google OAuth popup behavior
      try {
        const simulatedEmail = prompt(
          "Enter your Google Email address for simulated OAuth Sign-in:", 
          "admin.procyonsolutions@gmail.com"
        );
        if (simulatedEmail === null) {
          setLoading(false);
          return;
        }
        loginSimulated(simulatedEmail);
      } catch (error) {
        toast.error("Failed mock Google OAuth authentication");
        setLoading(false);
      }
    }
  };

  const loginSimulated = (email: string) => {
    setLoading(true);
    const mockUser: MockUser = {
      uid: "mock-uid-" + Math.random().toString(36).substring(2, 9),
      displayName: email.split("@")[0] || "Simulated User",
      email: email.trim(),
      photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
    };
    localStorage.setItem("Procyon Solutions_admin_user", JSON.stringify(mockUser));
    setUser(mockUser);
    toast.success(`Logged in as simulated user ${mockUser.email}!`);
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    localStorage.removeItem("Procyon Solutions_admin_user");
    if (auth) {
      try {
        await signOut(auth);
      } catch (error) {
        toast.error("Failed to sign out");
      }
    }
    setUser(null);
    toast.success("Logged out successfully");
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout, loginSimulated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
