import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.logotypeContainer}>
        </section>
        <section className={styles.formContainer}>
          <article className={styles.inputContainer}>
            <input type="text" className={styles.input} placeholder="EMAIL:" />
            <input type="password" className={styles.input} placeholder="SENHA:" />
          </article>
          <article className={styles.entryContainer}>
            <button className={styles.logInButton}><h1 className={styles.buttonText}>Entrar</h1></button>
            <h3 className={styles.forgotPassword}>ESQUECEU A SENHA?</h3>
            <h3 className={styles.createAccount}>Não tem uma conta?
              <a href="" className={styles.createAccountLink}>clique para criar.</a>
            </h3>
          </article>
          <article className={styles.logInWithContainer}>
            <div className={styles.socialMedia}>
              <img src="#" alt="Foto do logotipo da Google" />
            </div>
            <div className={styles.socialMedia}>
              <img src="#" alt="Foto do logotipo do Facebook" />
            </div>
            <div className={styles.socialMedia}>
              <img src="#" alt="Foto do logotipo da Apple" />
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

