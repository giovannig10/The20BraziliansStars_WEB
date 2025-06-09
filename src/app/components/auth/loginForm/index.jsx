"use client";
// components/auth/LoginForm.jsx

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext.jsx";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.email || !formData.password) {
      setError("Preencha todos os campos");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://tbs-back.coolify.fps92.dev/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });
      const data = await response.json();
      if (response.ok) {
        router.push("/pages/home"); 
        setError("");
        setIsLoading(false);
      } else {
        setError(
          data.error ||
            data.message ||
            "Falha ao fazer login. Verifique suas credenciais."
        );
        setIsLoading(false);
      }
    } catch (err) {
      return { success: false, message: "Erro de conexão com o servidor." };
    }

    // try {
    //   const result = await login(formData.email, formData.password);

    //   if (result.success) {
    //     // Redirecionamento tratado internamente pelo AuthContext
    //   } else {
    //     setError(
    //       result.message || "Falha ao fazer login. Verifique suas credenciais."
    //     );
    //   }
    // } catch (err) {
    //   console.error("Erro ao fazer login:", err);
    //   setError("Ocorreu um erro no servidor. Tente novamente mais tarde.");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className={styles.container}>
      {error && (
        <div className={styles.errorMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
          >
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                disabled={isLoading}
              />
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Sua senha"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className={styles.loadingSpinner}></span>
            ) : (
              "Entrar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
