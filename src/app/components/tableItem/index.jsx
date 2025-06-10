import styles from "./tableItem.module.css";

const TableItem = ({ team, index, zebra }) => {
  const lastFiveArray = team.teamRetrospect
    ? team.teamRetrospect.split("")
    : [];

  console.log(lastFiveArray);
  return (
    <div className={`${styles.container} ${zebra ? styles.zebra : ""}`}>
      <div className={styles.teamInfos}>
        <h2 className={styles.itemText}>{index + 1}</h2>
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
          {lastFiveArray.length > 0 ? (
            lastFiveArray.map((game, i) => {
              if (game === "V") {
                return (
                  <span key={i} className={styles.victory}>
                    V
                  </span>
                );
              } else if (game === "D") {
                return (
                  <span key={i} className={styles.defeat}>
                    D
                  </span>
                );
              } else if (game === "E") {
                return (
                  <span key={i} className={styles.draw}>
                    E
                  </span>
                );
              } else {
                return (
                  <span key={i} className={styles.empty}>
                    -
                  </span>
                );
              }
            })
          ) : (
            <span>:/</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableItem;
