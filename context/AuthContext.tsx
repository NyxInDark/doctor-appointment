"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  phone: string;
  login: (phone: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  phone: "",
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  // چک کن آیا کوکی توکن داره یا نه
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/user/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setIsLoggedIn(true);
          setPhone(data.phone);
        }
      } catch {
        // لاگین نیست
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = (phone: string) => {
    setIsLoggedIn(true);
    setPhone(phone);
  };

  const logout = async () => {
    await fetch("/api/user/logout", {
      method: "POST",
      credentials: "include",
    });
    setIsLoggedIn(false);
    setPhone("");
  };

  if (loading) return null;

  return (
    <AuthContext.Provider value={{ isLoggedIn, phone, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);