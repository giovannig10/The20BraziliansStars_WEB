import React from "react";
import styles from "./times.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Times() {
    return(
        <div className={styles.container}>
            <Header/>
            <section>
                <Time/>
            </section>
            <Footer/>
        </div>
    );
};