import styles from "./teams.module.css";

const Teams = ({ team }) => {  
  return (
    <a href={`/${team.name}`} className={styles.container}>
      <div className={styles.cardTimeContainer} style={{
      backgroundImage: `url(${team.fansBackground})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center'
      }}>
        <div className={styles.shieldContainer}>
            <div className={styles.shield}><img
            src={team.shield}
            className={styles.shieldImage}
            alt={`Escudo do ${team.name}`}
          /></div>
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.nameBottomBar1}></div>
          <div className={styles.name}>
            <h1 className={styles.teamName}>{team.name}</h1>
          </div>
          <div className={styles.nameBottomBar2}></div>
        </div>
      </div>
    </a>
  );
}

export default Teams;
