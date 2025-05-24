"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { login, register, logout } from "../services/authService";

// Criação do contexto de autenticação
const AuthContext = createContext({});

// Provider que envolverá a aplicação
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Verificar autenticação no carregamento inicial
  useEffect(() => {
    // Verifica o localStorage e cookies
    const savedUser = localStorage.getItem("user");
    const token = Cookies.get("token");

    if (savedUser && token) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (e) {
        console.error("Falha ao parsear usuário do localStorage:", e);
        handleLogout();
      }
    }
    setLoading(false);
  }, []);

  // Função para fazer login
  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const { success, data, message } = await login(email, password);

      console.log("Login response:", { success, data, message });

      if (success && data.token && data.userExists) {
        // Armazenar token e usuário
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.userExists));
        Cookies.set("token", data.token, { expires: 1, path: "/" });
        setUser(data.userExists);

        // Redirecionar para dashboard
        router.push("/dashboard");
        return { success: true };
      } else {
        return {
          success: false,
          message: message || "Credenciais inválidas. Tente novamente.",
        };
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return {
        success: false,
        message:
          error.message || "Erro ao fazer login. Tente novamente mais tarde.",
      };
    } finally {
      setLoading(false);
    }
  };

  // Função para registrar novo usuário
  const handleRegister = async (userData) => {
    try {
      setLoading(true);
      const { success, data, message } = await register(userData);

      if (success) {
        return { success: true, data };
      } else {
        return {
          success: false,
          message: message || "Erro ao cadastrar. Tente novamente.",
        };
      }
    } catch (error) {
      console.error("Erro ao registrar:", error);
      return {
        success: false,
        message:
          error.message || "Erro ao cadastrar. Tente novamente mais tarde.",
      };
    } finally {
      setLoading(false);
    }
  };

  // Função para fazer logout
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    Cookies.remove("token", { path: "/" });
    setUser(null);
    router.push("/");
  };

  // Valores exportados pelo contexto
  const value = {
    user,
    loading,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado para acessar o contexto
export function useAuth() {
  return useContext(AuthContext);
}