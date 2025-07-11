"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { User } from "../types";
import { login as loginRequest } from "../services/authService"; // usa a função real

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const data = await loginRequest(email, password); // faz chamada real
    const newUser: User = {
  id: data.user_id,
  name: data.name,
  email: data.email,
  role: data.role,
  department: data.department,
  campus: data.campus,
  memberSince: data.memberSince,
}
;
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); // persiste
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Carrega user ao abrir o app
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
