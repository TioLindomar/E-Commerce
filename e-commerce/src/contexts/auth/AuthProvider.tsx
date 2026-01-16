import { useState, type ReactNode } from "react";
import { AuthContext, type User } from "./AuthContext";
import { api } from "../../services/api";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  //   const [loading, setLoading] = useState(false);

  // * 1. Inicializamos o estado já verificando o localStorage
  const [user, setUser] = useState<User | null>(() => {
    const recoveredUser = localStorage.getItem("@ecommerce:user");
    const token = localStorage.getItem("@ecommerce:token");

    if (recoveredUser && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return JSON.parse(recoveredUser);
    }
    return null;
  });

  const login = (userData: User, token: string) => {
    localStorage.setItem("@ecommerce:user", JSON.stringify(userData));
    localStorage.setItem("@ecommerce:token", token);

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("@ecommerce:user");
    localStorage.removeItem("@ecommerce:token");

    // Forma correta de remover o header
    delete api.defaults.headers.common["Authorization"];

    setUser(null);
  };

  return (
    // "!!" user é um truque para transformar o objeto user em booleano true/false
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout /* loading */ }}
    >
      {children}
    </AuthContext.Provider>
  );
};
