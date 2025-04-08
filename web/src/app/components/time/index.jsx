import styles from "./time.module.css";

const Time = ({ time }) => {  
  return (
    <div className={styles.container}>
      <div className={styles.cardTimeContainer} style={{
      backgroundImage: `url(${time.fansBackground})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center'
      }}>
        <div className={styles.shieldContainer}>
            <div className={styles.shield}><img
            src={time.shieldImage}
            className={styles.shieldImage}
            alt="Escudo de time"
          /></div>
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>
            <h1 className={styles.teamName}>{time.name}</h1>
          </div>
          <div className={styles.nameBottomBar}></div>
        </div>
      </div>
    </div>
  );
}

export default Time;
