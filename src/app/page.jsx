"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext.jsx";

import LoginForm from "./components/auth/loginForm";
import RegisterForm from "./components/auth/registerForm";

import styles from "./page.module.css";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div>
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
              <LoginForm />
            ) : (
              <RegisterForm onSuccess={() => setIsLogin(true)} />
            )}
          </div>
          <div className={styles.newAccountContainer}>
            <h1 className={styles.newAccountText}>Não tem uma conta?</h1>
            <a href="/registrar" className={styles.newAccountLink}>
              Clique aqui para se registrar
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
