import styles from "./time.module.css"

export default Time = ({nome, escudo, torcida}) => {
    return(
        <div className={styles.container}>
            <img src={torcida} alt="imagem da torcida" />
            <div className={styles.cardTimeContainer}>
                <div className={styles.shieldContainer}>
                    <img src={escudo} className={styles.shieldImage} alt="Escudo de time" />
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
};