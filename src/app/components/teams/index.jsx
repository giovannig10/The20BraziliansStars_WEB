import styles from "./teams.module.css";

const Times = ({ time }) => {  
  return (
    <a href={`/${team.name}`} className={styles.container}>
      <div className={styles.cardTimeContainer} style={{
      backgroundImage: `url(${time.fansBackground})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center'
      }}>
        <div className={styles.shieldContainer}>
            <div className={styles.shield}><img
            src={time.shield}
            className={styles.shieldImage}
            alt={`Escudo do ${time.name}`}
          /></div>
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.nameBottomBar1}></div>
          <div className={styles.name}>
            <h1 className={styles.teamName}>{time.name}</h1>
          </div>
          <div className={styles.nameBottomBar2}></div>
        </div>
      </div>
    </a>
  );
}

export default Times;
