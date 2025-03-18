import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div>
      <main className={styles.main}>
        <section className={styles.logotypeContainer}>
          <div className={styles.logotypeImageContainer}>
          <img src="/images/Logotype.png" alt="Foto da logotipo" className={styles.logotypeImage} />
          </div>
          <div className={styles.blueBar}></div>
          <h1 className={styles.title}>The 20 Brazilians Stars</h1>
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
              <img src="/images/logoGoogle.png" alt="Foto do logotipo da Google" className={styles.mediaImage}/>
            </div>
            <div className={styles.socialMedia}>
              <img src="/images/logoFace.png" alt="Foto do logotipo do Facebook" className={styles.mediaImage}/>
            </div>
            <div className={styles.socialMedia}>
              <img src="/images/logoApple.png" alt="Foto do logotipo da Apple" className={styles.mediaImage}/>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

