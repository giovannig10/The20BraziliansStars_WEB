import React from "react";
import styles from "./libertadores.module.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { headers } from "next/headers";

const TrofeuPage = () => {
  return (
    <div className={styles.container}>  
      <Header />

      <div className={styles.headers}></div>

      <main className={styles.mainContent}>
        <h1 className={styles.tituloPagina}>Copa Libertadores</h1>

        <div className={styles.containerImagem}>
        <img className={styles.fotoTrofeu} src="/images/trofeu2.png" alt="Troféu da Copa Libertadores" />
        <div className={styles.divisoria}></div>
</div>

        <div className={styles.containerTrofeu}>

          <p className={styles.description}>
            A Copa Libertadores da América é o torneio mais prestigiado do futebol sul-americano.
             Reunindo os melhores clubes do continente, a competição é marcada por confrontos eletrizantes,
              estádios pulsando de emoção e rivalidades históricas. Com uma fase de grupos seguida por intensos mata-matas,
               cada jogo é uma batalha rumo à glória.
                Vencer a Libertadores é alcançar o topo da América e garantir um lugar entre os gigantes do futebol mundial.
                 Mais que um título, é um sonho que move torcidas inteiras e escreve lendas eternas no coração do esporte.
          </p>
        </div>
      </main>

      <section className={styles.timeSection}>
        <main className={styles.mainTimes}>
          <h1 className={styles.tituloTimes}>ÚLTIMOS TIMES CAMPEÕES</h1>
          <div className={styles.timesCampeoes}>
            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_palmeiras.png" alt="palmeiras2020" />
            <p className={styles.nomeTimes}>Palmeiras, 2020</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_palmeiras.png" alt="palmeiras2021" />
            <p className={styles.nomeTimes}>Palmeiras, 2021</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_flamengo.png" alt="flamengo2022" />
            <p className={styles.nomeTimes}>Flamengo, 2022</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_flu.png" alt="fluminense2023" />
            <p className={styles.nomeTimes}>Fluminense, 2023</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_fogao.png" alt="botafogo2024" />
            <p className={styles.nomeTimes}>Botafogo, 2024</p>



          </div>
        </main>
      </section>

      <Footer/>

    </div>


  );
};

export default TrofeuPage;
