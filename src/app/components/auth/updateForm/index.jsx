"use client";
// components/auth/RegisterForm.jsx

import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext.jsx";
import { useRouter } from "next/navigation";

import styles from "./updateForm.module.css";

const RegisterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.id) {
      setError("O ID do usuário é obrigatório");
      return;
    }
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
      const { id, confirmPassword, ...userData } = formData;

      const updateData = {};
      if (userData.name) updateData.name = userData.name;
      if (userData.email) updateData.email = userData.email;
      if (userData.password) updateData.password = userData.password;

      const response = await fetch(
        `https://tbs-back.coolify.fps92.dev/users/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );
      const result = await response.json();
      console.log(result);

      if (response.ok || response.status === 200) {
        setSuccess("Conta atualizada com sucesso!");
        setTimeout(() => {
          if (onSuccess) onSuccess();
        }, 2000);
        router.push("/pages/home");
      } else {
        setError(
          result.error ||
            result.message ||
            "Falha ao criar conta. Tente novamente."
        );
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
          <label htmlFor="id" className={styles.label}>
            ID de usuário <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Seu id"
              value={formData.id}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>
            Nome Completo <span className={styles.required}>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu (novo) nome completo"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
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
              placeholder="seu(novo)@email.com"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
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
              placeholder="Sua senha (nova ou atual) *Mínimo 6 caracteres"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              disabled={isLoading}
            />
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
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className={styles.loadingSpinner}></span>
            ) : (
              "Atualizar Conta"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
