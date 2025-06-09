import styles from "./playersCard.module.css";

export default function PlayersCard() {

    const url = "https://tbs-back.coolify.fps92.dev/players";

  return (
    <div className={styles.playersCardsPai}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <div className={styles.image}>
            <img className={styles.imagePNG} src="https://atletico.com.br/wp-content/uploads/2024/07/Arana.png" alt="" />
            </div>
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardName}>
            <h1>Nome do Jogador</h1>
          </div>
          <div className={styles.cardNumber}>
            <h1>#10</h1>
          </div>
          <div className={styles.cardPlayerInfos}>
            <h2 className={styles.height}>1,97m</h2>
            <h2 className={styles.age}>29y</h2>
          </div>

          <div className={styles.cardNationality}>
            <div className={styles.nationality}>
                <img className={styles.nationalityImage} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/960px-Flag_of_Brazil.svg.png" alt="" />
            </div>
          </div>

          <div className={styles.cardPosition}>
            <div className={styles.position}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
