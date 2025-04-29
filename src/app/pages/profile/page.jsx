import React from 'react';
import styles from "./profile.module.css"; 
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

const ProfilePage = () => {
return (
    <div>
        <Header />
    <div className={styles.profileContainer}>
        <div className={styles.profileCard}>
            <div className={styles.profileHeader}>
                <div className={styles.profileAvatar}>
                    <span className={styles.profileAvatarIcon}>👤</span>
                </div>
                <h2 className={styles.profileName}>Usuário comum</h2>
                <p className={styles.profileId}>ID: xxxxxxxxxx</p>
            </div>
            <div className={styles.profileActions}>
                <button className={styles.profileEdit}>
                    <span className={styles.profileButtonIcon}>⚙️</span>
                    
                </button>
                <button className={styles.profileEdit}>
                    <span className={styles.profileButtonIcon}>✏️</span>
                    
                </button>
                <button className={styles.profileEdit}>
                    <span className={styles.profileButtonIcon}>💙</span>
                </button>
            </div>
        </div>
    </div>
    <Footer />
    </div>
);
};

export default ProfilePage;