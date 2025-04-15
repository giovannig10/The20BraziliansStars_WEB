import styles from "./header.module.css"

const Header = (
    // {homeIcon , shieldIcon, userIcon}
) => {
    return (
        <div className={styles.paiHeader}>
            <div className={styles.paiIcones}>
                <div className={styles.icones}>
                <a href="/pages/home">
                <img className={styles.home} src="https://img.icons8.com/m_rounded/200/FFFFFF/home.png" alt="Home" />
                </a>

                <a href="/pages/times">
                <img className={styles.shield} src="https://img.icons8.com/m_rounded/200/FFFFFF/shield.png" alt="Shield" />
                </a>

                <a href="">
                <img className={styles.user} src="https://img.icons8.com/m_rounded/200/FFFFFF/user.png" alt="User" />
                </a>
                </div>
            </div>

            <div className={styles.paiSearch}>
                <div className={styles.darkMode}>
                    <img src="" alt="Dark Mode" className={styles.darkModeIcon} />
                </div>
                <div className={styles.filhoSearch}>
                    <div className={styles.search}>
        

                    <input type="text" placeholder="Pesquisar" className={styles.searchInput} />
                    </div>

                    </div>
                </div>
            </div>
    );
};

export default Header;
