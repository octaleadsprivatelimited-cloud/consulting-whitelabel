import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from "firebase/auth";
import { toast } from "sonner";

interface AuthContextType {
  user: User | MockUser | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
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
        setUser(firebaseUser);
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      // LocalStorage fallback for Mock Auth
      const storedUser = localStorage.getItem("octaleads_admin_user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          localStorage.removeItem("octaleads_admin_user");
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
        // A short delay to mimic oauth handshake
        await new Promise((resolve) => setTimeout(resolve, 1200));
        
        const mockAdmin: MockUser = {
          uid: "mock-admin-uid-12345",
          displayName: "Octaleads Administrator",
          email: "admin@octaleads.com",
          photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
        };
        
        localStorage.setItem("octaleads_admin_user", JSON.stringify(mockAdmin));
        setUser(mockAdmin);
        toast.success("Successfully logged in via Simulated Google OAuth!");
      } catch (error) {
        toast.error("Failed mock Google OAuth authentication");
      } finally {
        setLoading(false);
      }
    }
  };

  const logout = async () => {
    setLoading(true);
    if (auth) {
      try {
        await signOut(auth);
        setUser(null);
        toast.success("Logged out successfully");
      } catch (error) {
        toast.error("Failed to sign out");
      } finally {
        setLoading(false);
      }
    } else {
      localStorage.removeItem("octaleads_admin_user");
      setUser(null);
      toast.success("Logged out from administrative session");
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
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
