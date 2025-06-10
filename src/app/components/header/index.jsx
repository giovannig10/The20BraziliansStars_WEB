import styles from "./header.module.css";
import { RiMoonFill } from "react-icons/ri";


const Header = ({ homeIcon, shieldIcon, userIcon }) => {
    return (
        <div className={styles.paiHeader}>
            <div className={styles.paiIcones}>
                <div className={styles.icones}>
                    {homeIcon && <a href="/pages/home">{homeIcon}</a>}
                    {shieldIcon && <a href="/pages/teams">{shieldIcon}</a>}
                    {userIcon && <a href="/pages/profile">{userIcon}</a>}
                </div>
            </div>

            <div className={styles.paiLogo}>
                <img className={styles.logoImg} src="/images/logoBranco.png" alt="" />
            </div>
        </div>
    );
};

export default Header;
