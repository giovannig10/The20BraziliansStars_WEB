import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.logotypeContainer}>
            <img src="" alt="" />
          </section>
          <section className={styles.formContainer}>a
            <article className={styles.inputContainer}>
              <input type="text" className={styles.Input} placeholder="EMAIL:" />
              <input type="password" className={styles.Input} placeholder="SENHA:" />
            </article>
            <button className={styles.logInButton}><h1 className={styles.buttonText}>Entrar</h1></button>
            <h3>ESQUECEU A SENHA?</h3>
            <h3>Não tem uma conta? <a href="">clique para criar</a></h3>
            <article className={styles.logInWithContainer}>
              <div className={styles.socialMedia}>
                <img src="" alt="Foto do logotipo da Google" />
              </div>
              <div className={styles.socialMedia}>
                <img src="" alt="Foto do logotipo do Facebook" />
              </div>
              <div className={styles.socialMedia}>
                <img src="" alt="Foto do logotipo da Apple" />
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

