import React from "react";
import styles from "./sobreNos.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const SobreNosPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.main}>
                <div className={styles.container}>
                    <h2>Conheça nossa Equipe</h2>
                    <div className={styles.membros}>
                        <img className={styles.giovanni} src="" alt="giovanni" />
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default SobreNosPage;