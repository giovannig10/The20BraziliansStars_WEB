import styles from "./time.module.css";

export default function Time({ nome, escudo, torcida }) {
  return (
    <div className={styles.container}>
      <div className={styles.cardTimeContainer}>
        <img src={torcida} alt="imagem da torcida" />
        <div className={styles.shieldContainer}>
            <div className={styles.shield}><img
            src={escudo}
            className={styles.shieldImage}
            alt="Escudo de time"
          /></div>
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>
            <h1 className={styles.teamName}>{nome}</h1>
          </div>
          <div className={styles.nameBottomBar}></div>
        </div>
      </div>
    </div>
  );
}
