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
      const result = await login(formData.email, formData.password);

      if (result.success) {
        // Redirecionamento tratado internamente pelo AuthContext
      } else {
        setError(
          result.message || "Falha ao fazer login. Verifique suas credenciais."
        );
      }
    } catch (err) {
      console.error("Erro ao fazer login:", err);
      setError("Ocorreu um erro no servidor. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
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

      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
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
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Senha
          </label>
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

        <div className={styles.rememberForgot}>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="remember" className={styles.checkbox} />
            <label htmlFor="remember" className={styles.checkboxLabel}>
              Lembrar-me
            </label>
          </div>
          <a href="#" className={styles.forgotLink}>
            Esqueceu a senha?
          </a>
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

      {/* <div className={styles.socialLogin}>
        <p className={styles.orText}>Ou entre com</p>
        <div className={styles.socialButtons}>
          <button className={`${styles.socialButton} ${styles.googleButton}`}>
            <svg
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className={`${styles.socialButton} ${styles.twitterButton}`}>
            <svg
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className={`${styles.socialButton} ${styles.githubButton}`}>
            <svg
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default LoginForm;