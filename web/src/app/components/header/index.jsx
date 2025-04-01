import styles from "./header.module.css"
import { FaSearch } from "react-icons/fa";

const Header = ({homeIcon , shieldIcon, userIcon}) => {
    return (
        <div className={styles.paiHeader}>
            <div className={styles.paiIcones}>
                <div className={styles.icones}>
                    <img className={styles.home} src={homeIcon} alt="Home" />
                    <img className={styles.shield} src={shieldIcon} alt="Shield" />
                    <img className={styles.user} src={userIcon} alt="User" />
                </div>
            </div>

            <div className={styles.paiSearch}>
                <div className={styles.darkMode}>
                    <img src="https://img.icons8.com/m_rounded/200/FFFFFF/moon.png" alt="Dark Mode" className={styles.darkModeIcon} />
                </div>
                <div className={styles.filhoSearch}>
                    <div className={styles.search}>
                    <FaSearch className={styles.searchIcon}/>
                    <input type="text"  placeholder= " Pesquisar..." className={styles.searchInput} />
                    </div>

                    </div>
                </div>
            </div>
    );
};

export default Header;
