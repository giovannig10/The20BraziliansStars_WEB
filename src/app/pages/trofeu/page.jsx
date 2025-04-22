import React from "react";
import styles from "./trofeu.module.css";
import Header from "../../components/header";
import { headers } from "next/headers";

const TrofeuPage = () => {
  return (
    <div className={styles.container}>
      
      <Header />

<div className={styles.headers}>

</div>
  
       
      <main className={styles.mainContent}>
      <h1 className={styles.titulo}>Brasileirão</h1>
      <div className={styles.containerTrofeu}>
        <img src="./trofeu.png" alt="Troféu do Campeonato Brasileiro" />
        <p className={styles.description}>
        O Campeonato Brasileiro, ou Brasileirão, é a principal competição de futebol do Brasil. Disputado por 20 clubes no formato de pontos corridos, o torneio tem 38 rodadas, onde o time com mais pontos é o campeão. Além do título, a competição define vagas para torneios internacionais e o rebaixamento para a Série B. Considerado um dos campeonatos mais disputados do mundo, o Brasileirão é marcado por grandes clássicos e muita emoção.
        </p>
      </div>
    
      </main>
      </div>

    
  );
}

export default TrofeuPage;