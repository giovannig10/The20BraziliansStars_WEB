import React from "react";
import styles from "./copaBr.module.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { headers } from "next/headers";

const TrofeuPage = () => {
  return (
    <div className={styles.container}>  
      <Header />

      <div className={styles.headers}></div>

      <main className={styles.mainContent}>
        <h1 className={styles.tituloPagina}>Copa do Brasil</h1>

        <div className={styles.containerImagem}>
        <img className={styles.fotoTrofeu} src="/images/copaBr.png" alt="Troféu do Campeonato Brasileiro" />
        <div className={styles.divisoria}></div>
</div>

        <div className={styles.containerTrofeu}>

          <p className={styles.description}>
           A Copa do Brasil é o torneio onde a paixão supera a lógica e os sonhos se realizam em 180 minutos.
            Disputada por clubes de todos os cantos do país, ela une gigantes consagrados e times emergentes em um mata-mata eletrizante,
             onde cada gol pode ser decisivo e cada estádio vira um caldeirão.
              Com partidas de tirar o fôlego, viradas históricas e heróis improváveis,
               a competição é sinônimo de emoção pura. Vencer a Copa do Brasil é mais que levantar a taça — é desafiar o impossível,
                calar críticos e escrever o nome na eternidade do futebol brasileiro.
          </p>
        </div>
      </main>

      <section className={styles.timeSection}>
        <main className={styles.mainTimes}>
          <h1 className={styles.tituloTimes}>ÚLTIMOS TIMES CAMPEÕES</h1>
          <div className={styles.timesCampeoes}>
            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_palmeiras.png" alt="palmeiras2020" />
            <p className={styles.nomeTimes}>Palmeiras, 2020</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_galo.png" alt="atletico2021" />
            <p className={styles.nomeTimes}>Atletico Mineiro, 2021</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_flamengo.png" alt="flamengo2022" />
            <p className={styles.nomeTimes}>Flamengo, 2022</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_saopaulo.png" alt="saopaulo2023" />
            <p className={styles.nomeTimes}>São Paulo, 2023</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_flamengo.png" alt="flamengo2024" />
            <p className={styles.nomeTimes}>Flamengo, 2024</p>

          </div>
        </main>
      </section>

      <Footer/>

    </div>


  );
};

export default TrofeuPage;
