"use client";
// components/auth/RegisterForm.jsx

import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext.jsx";
import styles from "./registerForm.module.css";

const RegisterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.email || !formData.password) {
      setError("Preencha todos os campos obrigatórios");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (formData.password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }

    setIsLoading(true);

    try {
      // Removendo confirmPassword antes de enviar para o backend
      const { confirmPassword, ...userData } = formData;
      const result = await register(userData);

      if (result.success) {
        setSuccess("Conta criada com sucesso! Agora você pode fazer login.");
        setTimeout(() => {
          if (onSuccess) onSuccess();
        }, 2000);
      } else {
        setError(result.message || "Falha ao criar conta. Tente novamente.");
      }
    } catch (err) {
      console.error("Erro ao registrar:", err);
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

      {success && (
        <div className={styles.successMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
          >
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
          </svg>
          <span>{success}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Nome Completo <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
            <svg
              className={styles.inputIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.23325 19.3334 9.80229 20 11.5222 20C13.4006 20 15.1023 19.2023 16.3522 17.9211C15.0887 16.7535 13.2586 16 12.1597 16ZM12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4Z" />
            </svg>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="nickname" className={styles.label}>
            Nickname <span className={styles.optional}>(opcional)</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="nickname"
              name="nickname"
              placeholder="Como você quer ser chamado(a)"
              value={formData.nickname}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
            <svg
              className={styles.inputIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z" />
            </svg>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="reg-email" className={styles.label}>
            Email <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              id="reg-email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
            <svg
              className={styles.inputIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z" />
            </svg>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="reg-password" className={styles.label}>
            Senha <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              id="reg-password"
              name="password"
              placeholder="Mínimo 6 caracteres"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
            <svg
              className={styles.inputIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z" />
            </svg>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirmar Senha <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
            <svg
              className={styles.inputIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z" />
            </svg>
          </div>
        </div>

        <div className={styles.termsGroup}>
          <input type="checkbox" id="terms" className={styles.checkbox} />
          <label htmlFor="terms" className={styles.termsLabel}>
            Aceito os{" "}
            <a href="#" className={styles.termsLink}>
              Termos e Condições
            </a>{" "}
            e a{" "}
            <a href="#" className={styles.termsLink}>
              Política de Privacidade
            </a>
          </label>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className={styles.loadingSpinner}></span>
          ) : (
            "Criar Conta"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;