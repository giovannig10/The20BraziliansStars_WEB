import React from "react";
import styles from "./home.module.css";
import Header from "../../components/header";
import Carrossel from "../../components/carousel";
import Footer from "../../components/footer";
import Tabela from "../../components/table";

import { IoHome } from "react-icons/io5";
import { BsShield } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

const items = [
    {
        id: 1,
        name: "Palmeiras",
        shieldImage: "/images/shields/escudo_palmeiras.png",
        fansBackground: "/images/fansBackground/torcida_palmeiras.png",
        titles: 12,
        ultimo: "2023",
        apelido: "Verdão",
    },

    {
        id: 2,
        name: "Santos",
        shieldImage: "/images/shields/escudo_santos.png",
        fansBackground: "/images/fansBackground/torcida_santos.png",
        titles: 8,
        ultimo: "2004",
        apelido: "Peixe",
    },

    {
        id: 3,
        name: "Flamengo",
        shieldImage: "/images/shields/escudo_flamengo.png",
        fansBackground: "/images/fansBackground/torcida_flamengo.png",
        titles: 8,
        ultimo: "2020",
        apelido: "Mengão",
    },

    {
        id: 4,
        name: "Corinthians",
        shieldImage: "/images/shields/escudo_corinthians.png",
        fansBackground: "/images/fansBackground/torcida_lixo.png",
        titles: 7,
        ultimo: "2017",
        apelido: "Timão",
    },

    {
        id: 5,
        name: "São Paulo",
        shieldImage: "/images/shields/escudo_saopaulo.png",
        fansBackground: "/images/fansBackground/torcida_saopaulo.png",
        titles: 6,
        ultimo: "2008",
        apelido: "Tricolor Paulista",
    },

]

export default function Home() {
  return (
    <div className={styles.containerPai}>

      <div className={styles.containerHeader}>

      <Header
      homeIcon={<IoHome size={48} color={"white"} />}
      shieldIcon={<BsShield size ={36} color={"white"}/>}
      userIcon={<IoPersonOutline size={36} color={"white"} />}
      />

      </div>

      <div className={styles.containerHeroSection}>
        <div className={styles.containerTituloLogo}>
          <div className={styles.containerTitulo}>
            <h1 className={styles.titulo}>
              Aqui você encontra tudo <br /> sobre os 20 times que estão
              disputando o “Brasileirão Betano 2025”.
            </h1>
          </div>

          <div className={styles.containerLogo}>
            <img src="/images/logo.png" alt="Logo do site" />
          </div>
        </div>

        <div className={styles.containerButton}>
          <button className={styles.conheca}>
            <a className={styles.a} href="/pages/teams">
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
            <div className={styles.table}>
              <div className={styles.tableHeader}>
                <div className={styles.headerItem}>
                  <h1 className={styles.headerItemText}>Pos</h1>
                </div>
                <div className={styles.clubItem}>
                  <h1 className={styles.headerItemText}>Clube</h1>
                </div>
                <div className={styles.headerItem}>
                  <h1 className={styles.headerItemText}>Jgs</h1>
                </div>
                <div className={styles.headerItem}>
                  <h1 className={styles.headerItemText}>Pts</h1>
                </div>
                <div className={styles.headerItem}>
                  <h1 className={styles.headerItemText}>Vit</h1>
                </div>
                <div className={styles.headerItem}>
                  <h1 className={styles.headerItemText}>Der</h1>
                </div>
                <div className={styles.headerItem}>
                  <h1 className={styles.headerItemText}>Emp</h1>
                </div>
                <div className={styles.headerItem}>
                  <h1 className={styles.headerItemText}>GS</h1>
                </div>
                <div className={styles.headerItem}>
                  <h1 className={styles.headerItemText}>GF</h1>
                </div>
                <div className={styles.retrospectItem}>
                  <h1 className={styles.headerItemText}>Últimas Cinco</h1>
                </div>
              </div>
              <Tabela/>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.containerCampeoes}>
        <div className={styles.tituloCampeoes}>
          <div className={styles.tituloCampeoesText}>
            Conheça os 5 maiores campeões brasileiros
          </div>
        </div>

        <div className={styles.containerCarrossel}>
          <Carrossel items={items} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
