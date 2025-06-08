import styles from "./tableItem.module.css";

const TableItem = ({ team, index }) => {
  const lastFiveArray = team.lastFive ? team.lastFive.split("") : [];
  return (
    <div className={styles.container}>
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
      <div className={styles.teamRetrospect}>
        <h2 className={styles.itemText}>
          {lastFiveArray.map((game) => {
            if (game === "V") {
              return <div className={styles.victory}>V</div>;
            } else if (game === "D") {
              return <div className={styles.defeat}>D</div>;
            } else if (game === "E") {
              return <div className={styles.draw}>D</div>;
            } else {
              return <div className={styles.empty}>-</div>;
            }
          }) || ":/"}
        </h2>
      </div>
    </div>
  );
};

export default TableItem;
