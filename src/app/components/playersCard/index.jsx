import styles from "./playersCard.module.css";

export default function PlayersCard() {
  return (
    <div className={styles.playersCardsPai}>
        <div className={styles.card}>
            <div className={styles.cardImage}>
                <img src="" alt="" />
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardName}>
                    <h2>Nome do Jogador</h2>
                </div>
                <div className={styles.cardNumber}>
                    <h3>#10</h3>
                </div>
                <div className={styles.cardPlayerInfos}></div>

                <div className={styles.cardNationalit}></div>

                <div className={styles.cardPosition}></div>
            </div>
        </div>
    </div>
  )
}
