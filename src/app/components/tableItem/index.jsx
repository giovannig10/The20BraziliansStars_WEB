import styles from "./tableItem.module.css";

const TableItem = ({ team }) => {
    return (
        <div className={styles.card}>
            <div className={styles.teamImageContainer}>
                <img src={team.image || "/images/foto-perfil-vazia.png"} alt="Imagem do personagem" className={styles.cardImage}/>
            </div>
            <div className={styles.cardTitle}>
                <div>
                    <img src={team.shield} alt={team.name} />
                </div>
                <h2 className={styles.teamText}>{team.games}</h2>
                <h2 className={styles.teamText}>{team.points}</h2>
                <h2 className={styles.teamText}>{team.wins}</h2>
                <h2 className={styles.teamText}>{team.draws}</h2>
                <h2 className={styles.teamText}>{team.losses}</h2>
                <h2 className={styles.teamText}>{team.goalsOwn}</h2>
                <h2 className={styles.teamText}>{team.goalsFavor}</h2>
                <h2 className={styles.teamText}>{team.goalsDifference}</h2>
            </div>
        </div>
    )
};

export default TableItem;