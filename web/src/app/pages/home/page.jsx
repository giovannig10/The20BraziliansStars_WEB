import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer"

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

          <div className={styles.containerLogo}> <img src="./logo.png" alt="Logo do site" /> </div>

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

      <section className={styles.containerTabela}>
        <div className={styles.containerTituloTabela}>
          <div className={styles.containerTituloT}>
            <h1 className={styles.tituloTabela}>Acompanhe a Tabela do Campeonato Brasileiro    em Tempo Real</h1>
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
                overflow: "hidden",
              }}
              scrolling="no"
            ></iframe>

            {/* <iframe id="sofa-standings-embed-83-72034" src="https://widgets.sofascore.com/pt-BR/embed/tournament/83/season/72034/standings/Brasileiro%20Serie%20A%202025?widgetTitle=Brasileiro%20Serie%20A%202025&showCompetitionLogo=true" style={styles.iframe} frameborder="0" scrolling="no"></iframe> */}

          </div>
        </div>
      </section>

      <section className={styles.containerJogadores}>

        <div className={styles.containerTituloJogadores}>       
          <h2 className={styles.sectionTitle}>
          Fique ligado na escalação e no jogador da semana
        </h2>
      </div>

      <div className={styles.containerIframes}>        
        <div className={styles.containerEscalacao}>
          <iframe
            id="sofa-totw-embed-372-69522-17830"
            width="85%"
            height="90%"
            src="https://widgets.sofascore.com/pt-BR/embed/unique-tournament/372/season/69522/round/17830/teamOfTheWeek?showCompetitionLogo=true&widgetTheme=light&widgetTitle=Paulista%20S%C3%A9rie%20A1"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>

        <div className={styles.containerJogador}>
          <iframe
            id="sofa-player-embed-874572"
            src="https://widgets.sofascore.com/pt-BR/embed/player/874572?widgetTheme=light"
            style={{
              height: "70%",
              width: "90%",
              border: 0,
              overflow: "hidden",
            }}
            scrolling="no"
          ></iframe>
        </div></div>


      </section>

      <Footer/>
    </div>
  );
}
