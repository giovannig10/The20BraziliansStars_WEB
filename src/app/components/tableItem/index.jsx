import styles from "./tableItem.module.css";

const TableItem = ({ team, index, zebra }) => {
  let rewardClass = styles.default;
  
  if (index === 0) rewardClass = styles.champ;
  else if (index > 0 && index <= 3) rewardClass = styles.g4;
  else if (index >= 16 && index <= 19) rewardClass = styles.z4;

  return (
    <div className={`${styles.container} ${zebra ? styles.zebra : ""}`}>
      <div className={`${styles.teamInfos} ${styles.position}`}>
        <div className={`${styles.positionReward} ${rewardClass}`}></div>
        <h2 className={styles.itemText} >{index + 1}</h2>
      </div>
      <div className={styles.teamImageContainer}>
        <img className={styles.teamImage} src={team.shield} alt={team.name} />
      </div>
      <div className={styles.teamInfos}>
        <h2 className={styles.itemText}>{team.games}</h2>
      </div>
      <div className={styles.teamInfos}>
        <h2 className={styles.itemText}>{team.points}</h2>
      </div>
      <div className={styles.teamInfos}>
        <h2 className={styles.itemText}>{team.wins}</h2>
      </div>
      <div className={styles.teamInfos}>
        <h2 className={styles.itemText}>{team.draws}</h2>
      </div>
      <div className={styles.teamInfos}>
        <h2 className={styles.itemText}>{team.losses}</h2>
      </div>
      <div className={styles.teamInfos}>
        <h2 className={styles.itemText}>{team.goalsOwn}</h2>
      </div>
      <div className={styles.teamInfos}>
        <h2 className={styles.itemText}>{team.goalsFavor}</h2>
      </div>
      <div className={styles.teamInfos}>
        <h2 className={styles.itemText}>{team.goalsDifference}</h2>
      </div>
      <div className={styles.teamRetrospect}>
        <div className={styles.itemText}>
          {team.retrospect.map((game, i) => {
            if (game === "V") {
              return (
                <div key={i} className={styles.victory}>
                 <h2>V</h2> 
                </div>
              );
            } else if (game === "D") {
              return (
                <div key={i} className={styles.defeat}>
                  <h2>D</h2>
                </div>
              );
            } else if (game === "E") {
              return (
                <div key={i} className={styles.draw}>
                  <h2>E</h2>
                </div>
              );
            } else {
              return (
                <div key={i} className={styles.empty}>
                  -
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TableItem;
