import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";
import Carrossel  from "../../components/carousel";
import Footer from "../../components/footer";

const items = [

    {
        id: 1,
        name: "Palmeiras",
        shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/2048px-Palmeiras_logo.svg.png",
        fansBackground: "/images/fansBackground/outra_torcida_lixo.png",
        titles: 12,
        ultimo: "2023",
        apelido: "Verdão",
    },

    {
        id: 2,
        name: "Santos",
        shieldImage: "https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png",
        fansBackground: "/images/fansBackground/torcida_sport.png",
        titles: 8,
        ultimo: "2004",
        apelido: "Peixe",
    },

    {
        id: 3,
        name: "Flamengo",
        shieldImage: "https://upload.wikimedia.org/wikipedia/commons/2/22/Logo_Flamengo_crest_1980-2018.png",
        fansBackground: "/images/fansBackground/torcida_flamengo.png",
        titles: 8,
        ultimo: "2020",
        apelido: "Mengão",
    },

    {
        id: 4,
        name: "Corinthians",
        shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Escudo_sc_corinthians.png/150px-Escudo_sc_corinthians.png",
        fansBackground: "/images/fansBackground/torcida_ceara.png",
        titles: 7,
        ultimo: "2017",
        apelido: "Timão",
    },

    {
        id: 5,
        name: "São Paulo",
        shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/2054px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png",
        fansBackground: "/images/fansBackground/torcida_saopaulo.png",
        titles: 6,
        ultimo: "2008",
        apelido: "Tricolor Paulista",
    },

]

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
          <div className={styles.tituloCampeoesText}>Conheça os 5 maiores campeões brasileiros</div>
        </div>

        <div className={styles.containerCarrossel}>

        < Carrossel items={items} />

        </div>
      </section>

      <Footer />
    </div>
  );
}
