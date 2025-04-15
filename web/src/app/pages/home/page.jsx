import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div className={styles.containerPai}>
      <Header />

      <div className={styles.containerHeader}></div>

      <div className={styles.containerHeroSection}>
        <div className={styles.containerTituloLogo}>
          <div className={styles.containerTitulo}>
            <h1 className={styles.titulo}>
              Aqui você encontra tudo <br /> sobre os 20 times que estão
              disputando o “Brasileirão Betano 2025”.
            </h1>
          </div>

          <div className={styles.containerLogo}>
            <img
              src="/images/logo.png"
              alt="Logo do site"
              className={styles.logo}
            />
          </div>
        </div>

        <div className={styles.containerButton}>
          <button className={styles.conheca}>
            <a href="/pages/times">
              Conheça a história, o estádio, a torcida, o elenco e os títulos de
              cada clube
            </a>
          </button>
        </div>
      </div>

      <section className={styles.containerTabela}>
        <div className={styles.containerTituloTabela}>
          <div className={styles.containerTituloT}>
            <h1 className={styles.tituloTabela}>
              Acompanhe a Tabela do Campeonato Brasileiro em Tempo Real
            </h1>
          </div>
        </div>
        <div className={styles.containerTabelaIframe}>
          <div className={styles.containerIframe}>
            <iframe
              id="sofa-standings-embed-83-72034"
              src="https://widgets.sofascore.com/pt-BR/embed/tournament/83/season/72034/standings/Brasileiro%20Serie%20A%202025?widgetTitle=Brasileiro%20Serie%20A%202025&showCompetitionLogo=true"
              style={{
                height: "100%",
                width: "100%",
                border: "0",
                overflow: "auto",
              }}
              scrolling="auto"
            ></iframe>
          </div>
        </div>
      </section>

      <section className={styles.containerCampeoes}>
        <div className={styles.tituloCampeoes}>
          <div className={styles.tituloCampeoesText}>Conheça os maiores campeões brasileiros</div>
        </div>

        <div className={styles.containerCarrossel}></div>
      </section>

      <Footer />
    </div>
  );
}
