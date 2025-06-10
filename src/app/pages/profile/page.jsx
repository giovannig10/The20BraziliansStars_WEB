"use client"

import React from "react";
import styles from "./profile.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

import { IoHomeOutline } from "react-icons/io5";
import { BsShield } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

import { Edit3, Heart, Settings, User } from "@deemlol/next-icons";
import { useAuth } from "@/app/context/AuthContext"; // ajuste o caminho se necessário

const ProfilePage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className={styles.profileContainer}>Carregando...</div>;
  }

  if (!user) {
    return <div className={styles.profileContainer}>Usuário não encontrado.</div>;
  }

  return (
    <div>
      <Header
        homeIcon={<IoHomeOutline size={36} color={"white"} />}
        shieldIcon={<BsShield size={36} color={"white"} />}
        userIcon={<IoPersonSharp size={46} color={"white"} />}
      />

      <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.profileAvatar}>
              <span className={styles.profileAvatarIcon}>
                <User size={100} color="#25406A" />
              </span>
            </div>
            <h2 className={styles.profileName}>{user.name || "Usuário"}</h2>
            <p className={styles.profileId}>ID: {user.id || "N/A"}</p>
            <p className={styles.profileEmail}>{user.email}</p>
          </div>
          <div className={styles.profileActions}>
            <a href="/update"className={styles.profileEdit}>
              <span className={styles.profileButtonIcon}>
                <Edit3 size={32} color="#25406A" />
              </span>
            </a>
            <button className={styles.profileEdit}>
              <span className={styles.profileButtonIcon}>
                <Heart size={32} color="#25406A" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;