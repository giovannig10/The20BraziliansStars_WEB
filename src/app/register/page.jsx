"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext.jsx";

import RegisterForm from "../components/auth/registerForm";

import styles from "./register.module.css";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <main className={styles.main}>
      <div className={styles.loginBox}>
        <section className={styles.logotypeContainer}>
          <div className={styles.logotypeImageContainer}>
            <img
              src="/images/Logotype.png"
              alt="Foto da logotipo"
              className={styles.logotypeImage}
            />
          </div>
          <div className={styles.blueBarContainer}>
            <div className={styles.blueBar} />
          </div>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>The 20 Brazilians Stars</h1>
          </div>
        </section>
        <div className={styles.formWrapper}>
          {isLogin ? (
            <RegisterForm />
          ) : (
            <RegisterForm onSuccess={() => setIsLogin(true)} />
          )}
        </div>
        <div className={styles.newAccountContainer}>
          <h1 className={styles.newAccountLink}>Já tem uma conta?</h1>
          <a href="/" className={styles.newAccountLink}>
            Clique aqui para entrar
          </a>
        </div>
      </div>
    </main>
  );
}
