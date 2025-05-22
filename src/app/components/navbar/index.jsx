"use client";
// components/Navbar.jsx

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { useAuth } from "@/app/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href={user ? "/dashboard" : "/"} className={styles.logoLink}>
          <h1 className={styles.logo}>
            <span className={styles.gameText}>Game</span>
            <span className={styles.retroText}>Retrô</span>
          </h1>
        </Link>

        {user && (
          <div className={styles.navLinks}>
            <Link
              href="/dashboard"
              className={`${styles.navLink} ${
                pathname === "/dashboard" ? styles.active : ""
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/games"
              className={`${styles.navLink} ${
                pathname === "/games" ? styles.active : ""
              }`}
            >
              Jogos
            </Link>
            <Link
              href="/leaderboards"
              className={`${styles.navLink} ${
                pathname === "/leaderboards" ? styles.active : ""
              }`}
            >
              Recordes
            </Link>
            <Link
              href="/profile"
              className={`${styles.navLink} ${
                pathname === "/profile" ? styles.active : ""
              }`}
            >
              Perfil
            </Link>
          </div>
        )}

        <div className={styles.navActions}>
          {user ? (
            <div className={styles.userMenu}>
              <div className={styles.userInfo}>
                <span className={styles.userName}>
                  {user.nickname || user.name.split(" ")[0]}
                </span>
              </div>

              {/* <button className={styles.avatarButton}>
                <div className={styles.avatar}>{user.name.charAt(0)}</div>
              </button> */}

              <button onClick={logout} className={styles.dropdownItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5ZM7 20H17V4H7V20ZM13 12V8L17 12L13 16V12Z" />
                </svg>
                Sair
              </button>

              {/* <div className={styles.userDropdown}>
                <Link href="/profile" className={styles.dropdownItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" />
                  </svg>
                  Meu Perfil
                </Link>
                <Link href="/settings" className={styles.dropdownItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M8.68735 4.00008L11.294 1.39348C11.6845 1.00295 12.3176 1.00295 12.7082 1.39348L15.3148 4.00008H19.0011C19.5533 4.00008 20.0011 4.4478 20.0011 5.00008V8.68637L22.6077 11.293C22.9982 11.6835 22.9982 12.3167 22.6077 12.7072L20.0011 15.3138V19.0001C20.0011 19.5524 19.5533 20.0001 19.0011 20.0001H15.3148L12.7082 22.6067C12.3176 22.9972 11.6845 22.9972 11.294 22.6067L8.68735 20.0001H5.00106C4.44877 20.0001 4.00106 19.5524 4.00106 19.0001V15.3138L1.39446 12.7072C1.00393 12.3167 1.00393 11.6835 1.39446 11.293L4.00106 8.68637V5.00008C4.00106 4.4478 4.44877 4.00008 5.00106 4.00008H8.68735ZM6.00106 6.00008V9.5147L3.80777 11.7072L6.00106 13.8998V18.0001H9.51569L11.7082 20.1934L13.9006 18.0001H18.0011V13.8998L20.1944 11.7072L18.0011 9.5147V6.00008H13.9006L11.7082 3.80679L9.51569 6.00008H6.00106ZM12.0011 16.0001C9.79192 16.0001 8.00106 14.2092 8.00106 12.0001C8.00106 9.79094 9.79192 8.00008 12.0011 8.00008C14.2102 8.00008 16.0011 9.79094 16.0011 12.0001C16.0011 14.2092 14.2102 16.0001 12.0011 16.0001ZM12.0011 14.0001C13.1056 14.0001 14.0011 13.1047 14.0011 12.0001C14.0011 10.8955 13.1056 10.0001 12.0011 10.0001C10.8965 10.0001 10.0011 10.8955 10.0011 12.0001C10.0011 13.1047 10.8965 14.0001 12.0011 14.0001Z" />
                  </svg>
                  Configurações
                </Link>
                <button onClick={logout} className={styles.dropdownItem}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5ZM7 20H17V4H7V20ZM13 12V8L17 12L13 16V12Z" />
                  </svg>
                  Sair
                </button>
              </div> */}
            </div>
          ) : (
            <Link href="/" className={styles.loginButton}>
              Entrar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}