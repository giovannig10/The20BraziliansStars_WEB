import styles from "./ballPosition.module.css";

export default function BallPosition ({ backgroundColor, name}) {
    return (
              <div className={styles.ballPositionPai}>
              <div className={styles.ballPosition}
               style={{backgroundColor}}
               ></div>
              <h2>
                {name}
                </h2>
              </div>
    )
}
