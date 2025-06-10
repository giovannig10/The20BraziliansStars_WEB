import styles from "./contact.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.pai}>
        <div className={styles.main}>
          <div className={styles.tituloContainer}>
            <h1 className={styles.titulo}>Entre em contato conosco!</h1>
            <p className={styles.subtitulo}>
              Se você tiver alguma dúvida, sugestão ou apenas quiser enviar uma
              mensagem, sinta-se à vontade.{" "}
            </p>
          </div>

          <div className={styles.paiForms}>
            <div className={styles.formsContainer}>
              <form
                className={styles.forms}
                action="https://formspree.io/f/mldnjkve"
                method="POST"
                target="_blank"
              >
                <div className={styles.messageContainer}>

                  <label className={styles.labelMensagem}>
                    
                    <textarea
                      name="mensagem"
                      className={styles.mensagem}
                      required
                      placeholder="Mensagem:"
                    ></textarea>
                  </label>
                </div>

                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.button}>
                    Enviar
                  </button>
                </div>
              </form>
            </div>

            <div className={styles.imageContainer}>
              <img
                className={styles.imageGroup}
                src="/images/grupo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
