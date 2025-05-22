"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

// Componente para proteger rotas que exigem autenticação
export default function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Se não estiver carregando e não houver usuário, redirecionar para login
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  // Enquanto carrega, exibe um indicador de carregamento
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          background: "#0a0a0a",
          color: "#f5f5f5",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            border: "4px solid rgba(90, 200, 250, 0.2)",
            borderRadius: "50%",
            borderTopColor: "#5ac8fa",
            animation: "spin 1s linear infinite",
            marginBottom: "1rem",
          }}
        ></div>
        <p>Carregando...</p>
        <style jsx>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  // Se não houver usuário, não renderiza nada enquanto redireciona
  if (!user) {
    return null;
  }

  // Se houver usuário autenticado, renderiza o conteúdo protegido
  return children;
}