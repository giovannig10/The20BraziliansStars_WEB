import React from "react";
import styles from "./profile.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

import { IoHomeOutline } from "react-icons/io5";
import { BsShield } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";


import { Edit3, Heart, Settings, User  } from "@deemlol/next-icons";

const ProfilePage = () => {
  return (
    <div>

      <Header
      homeIcon={<IoHomeOutline size={36} color={"white"} />}
      shieldIcon={<BsShield size ={36} color={"white"}/>}
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
            <h2 className={styles.profileName}>Usuário comum</h2>
            <p className={styles.profileId}>ID: xxxxxxxxxx</p>
          </div>
          <div className={styles.profileActions}>
            <button className={styles.profileEdit}>
              <span className={styles.profileButtonIcon}>
              <Settings size={32} color="#25406A" />
              </span>
            </button>
            <button className={styles.profileEdit}>
              <span className={styles.profileButtonIcon}>
                <Edit3 size={32} color="#25406A" />
              </span>
            </button>
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
