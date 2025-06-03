import React from "react";
import styles from "./mundial.module.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { headers } from "next/headers";

const TrofeuPage = () => {
  return (
    <div className={styles.container}>  
      <Header />

      <div className={styles.headers}></div>

      <main className={styles.mainContent}>
        <h1 className={styles.tituloPagina}>Mundial de Clubes</h1>

        <div className={styles.containerImagem}>
        <img className={styles.fotoTrofeu} src="/images/mundial.png" alt="Troféu do Mundial de Clubes" />
        <div className={styles.divisoria}></div>
</div>

        <div className={styles.containerTrofeu}>

          <p className={styles.description}>
           O Mundial de Clubes é onde o sonho de ser o melhor do planeta se torna realidade.
            É o encontro dos campeões, das culturas, das torcidas e das lendas. 
            Em campo, não importa o continente — só a coragem, o talento e a paixão decidem. 
            Cada jogo é uma final, cada gol é história. Vencer o Mundial é tocar o céu com chuteiras nos pés. 
            É ser imortal no futebol.
          </p>
        </div>
      </main>

      <section className={styles.timeSection}>
        <main className={styles.mainTimes}>
          <h1 className={styles.tituloTimes}>ÚLTIMOS BRASILEIROS CAMPEÕES</h1>
          <div className={styles.timesCampeoes}>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_saopaulo.png" alt="saopaulo1992" />
            <p className={styles.nomeTimes}>São Paulo, 1992</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_saopaulo.png" alt="saopaulo1993" />
            <p className={styles.nomeTimes}>São Paulo, 1993</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_saopaulo.png" alt="saopaulo2005" />
            <p className={styles.nomeTimes}>São Paulo, 2005</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_inter.png" alt="internacional2006" />
            <p className={styles.nomeTimes}>Internacional, 2006</p>

            <img className={styles.imagemTimes} src="/images/fansBackground/torcida_lixo.png" alt="corinthians2012" />
            <p className={styles.nomeTimes}>Corinthians, 2012</p>

            

          </div>
        </main>
      </section>

      <Footer/>

    </div>


  );
};

export default TrofeuPage;
