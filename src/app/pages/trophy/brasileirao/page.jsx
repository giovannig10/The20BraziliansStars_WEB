import React from "react";
import styles from "./trofeu.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { headers } from "next/headers";

const TrofeuPage = () => {
  return (
    <div className={styles.container}>  
      <Header />

      <div className={styles.headers}></div>

      <main className={styles.mainContent}>
        <h1 className={styles.tituloPagina}>Campeonato Brasileiro</h1>

        <div className={styles.containerImagem}>
        <img className={styles.fotoTrofeu} src="/images/trofeu2.png" alt="Troféu do Campeonato Brasileiro" />
        <div className={styles.divisoria}></div>
</div>

        <div className={styles.containerTrofeu}>

          <p className={styles.description}>
            O Campeonato Brasileiro, ou Brasileirão, é a principal competição de
            futebol do Brasil. Disputado por 20 clubes no formato de pontos
            corridos, o torneio tem 38 rodadas, onde o time com mais pontos é o
            campeão. Além do título, a competição define vagas para torneios
            internacionais e o rebaixamento para a Série B. Considerado um dos
            campeonatos mais disputados do mundo, o Brasileirão é marcado por
            grandes clássicos e muita emoção.
          </p>
        </div>
      </main>

      <section className={styles.timeSection}>
        <main className={styles.mainTimes}>
          <h1 className={styles.tituloTimes}>ÚLTIMOS TIMES CAMPEÕES</h1>
          <div className={styles.timesCampeoes}>
            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_flamengo.png" alt="flamengo2020" />
            <p className={styles.nomeTimes}>Flamengo, 2020</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_galo.png" alt="atletico2021" />
            <p className={styles.nomeTimes}>Atletico Mineiro, 2021</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_palmeiras.png" alt="palmeiras2022" />
            <p className={styles.nomeTimes}>Palmeiras, 2022</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_palmeiras.png" alt="palmeiras2023" />
            <p className={styles.nomeTimes}>Palmeiras, 2023</p>

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
