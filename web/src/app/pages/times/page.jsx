import React from "react";
import styles from "./times.module.css";
import Header from "../../components/header";
import Time from "../../components/time"
// import Footer from "../../components/footer";

export default function Times() {
    return(
        <div className={styles.container}>
            {/* <Header/> */}
            <section>
                <Time nome={"Atletico-MG"}/>
                <Time nome={"Bahia"}/>
                <Time nome={"Botafogo"}/>
                <Time nome={"Bragantino"}/>
                <Time nome={"Corinthians"}/>
                <Time nome={"Criciúma"}/>
                <Time nome={"Flamengo"}/>
                <Time nome={"Fluminense"}/>
                <Time nome={"Fortaleza"}/>
                <Time nome={"Grêmio"}/>
                <Time nome={"Internacional"}/>
                <Time nome={"Juventude"}/>
                <Time nome={"Mirassol"}/>
                <Time nome={"Palmeiras"}/>
                <Time nome={"Santos"}/>
                <Time nome={"Sport"}/>
                <Time nome={"São Paulo"}/>
                <Time nome={"Vasco"}/>
                <Time nome={"Vitória"}/>
                
            </section>
            {/* <Footer/> */}
        </div>
    );
};