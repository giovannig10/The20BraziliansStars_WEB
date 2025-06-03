import styles from "./atleticoMG.module.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function AtleticoMG() {
        return (
            <div className={styles.container}>
                <Header/>

                <main className={styles.main}>
                    <div className={styles.pai }>
                    <div className={styles.containerTeam}>

                    <div className={styles.containerBanner}>
                        <div className={styles.colors}>
                            <div className={styles.white}></div>
                            <div className={styles.black}></div>
                            <div className={styles.white}></div>
                            <div className={styles.black}></div>
                            <div className={styles.white}></div>
                            <div className={styles.black}></div>
                            <div className={styles.white}></div>
                            <div className={styles.black}></div>
                            <div className={styles.white}></div>
                            <div className={styles.black}></div>
                            <div className={styles.white}></div>
                        </div>

                        <div className={styles.line}>
                            <div className={styles.shield}>
                                {/* aqui vai o escudo do time puxado da API */}
                            </div>
                        </div>
                        
                    </div>

                    </div>

                    </div>

                </main>

                <Footer/>
            </div>
        )
}