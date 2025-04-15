import React from "react";
import styles from "./trofeu.module.css";

const TrofeuPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Brasileirão</h1>
      <div className={styles.containerTrofeu}>
        <img src="./trofeu.png" alt="Troféu do Campeonato Brasileiro" />
      </div>
    </div>
  );
}

export default TrofeuPage;