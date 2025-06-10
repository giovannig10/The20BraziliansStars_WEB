"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext.jsx";

import RegisterForm from "../components/auth/updateForm"; 

import styles from "./update.module.css";

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
      </div>
    </main>
  );
}