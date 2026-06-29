"use client";
import { createContext, useContext, useState, ReactNode } from "react";

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

  const login = (phone: string) => {
    setIsLoggedIn(true);
    setPhone(phone);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setPhone("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, phone, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);