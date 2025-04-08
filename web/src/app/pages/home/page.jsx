import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";

export default function Home() {
  return (

    <div className={styles.containerPai}>

    <Header />

      <div className={styles.containerHeroSection}>  

      <div className={styles.containerTituloLogo}>

      <div className={styles.containerTitulo}>
      <h1 className={styles.titulo}>
      Aqui você encontra tudo <br /> sobre os 20 times que estão disputando o “Brasileirão Betano 2025”.
        </h1>
      </div>

      <div className={styles.containerLogo}> <img src="" alt="" /> </div>

      </div>

      <div className={styles.containerButton}>
      <button className={styles.conheca}>
          <a href="/times">
            Conheça a história, o estádio, a torcida, o elenco e os títulos de
            cada clube  <span> → </span>
          </a>
        </button>
      </div>

      </div>

      <section className={styles.tabela}>
        <div className={styles.tituloTabela}>
          <h2 className={styles.tabelaTitle}>
            Tabela do Campeonato em Tempo Real
          </h2>
        </div>

        <div className={styles.tabelaContent}>
          <iframe
            id="sofa-standings-embed-83-72034"
            src="https://widgets.sofascore.com/pt-BR/embed/tournament/83/season/72034/standings/Brasileiro%20Serie%20A%202025?widgetTitle=Brasileiro%20Serie%20A%202025&showCompetitionLogo=true"
            style={{
              height: "600px",

              width: "700px",
              border: "0",
              overflow: "hidden",
            }}
            scrolling="no"
          ></iframe>
        </div>
      </section>

      <section className={styles.jogadores}>
        <article className={styles.escalacao}>
          <iframe
            id="sofa-totw-embed-372-69522-17830"
            width="50%"
            height="600px"
            style={{
              display: "block",
              maxWidth: "700px",
            }}
            src="https://widgets.sofascore.com/pt-BR/embed/unique-tournament/372/season/69522/round/17830/teamOfTheWeek?showCompetitionLogo=true&widgetTheme=light&widgetTitle=Paulista%20S%C3%A9rie%20A1"
            frameBorder="0"
            scrolling="no"
          ></iframe>
          <div
            style={{
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
              textAlign: "left",
            }}
          >
            <a target="_blank" href=""></a>
          </div>
        </article>

        <article className={styles.jogador}>
          <div className={styles.tituloJogador}>
            <h2 className={styles.sectionTitle}>
              Fique ligado na escalação e no jogador da semana
            </h2>
          </div>
          <iframe
            id="sofa-player-embed-874572"
            src="https://widgets.sofascore.com/pt-BR/embed/player/874572?widgetTheme=light"
            style={{
              height: "300px",
              width: "80%",
              border: "0",
              overflow: "hidden",
            }}
            scrolling="no"
          ></iframe>
        </article>
      </section>
    </div>
  );
}
