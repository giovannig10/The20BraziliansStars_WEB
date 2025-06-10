"use client";

import { useState } from "react";
import styles from "./contact.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ContactPage = () => {
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/mldnjkve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensagem }),
      });
      if (res.ok) {
        setEnviado(true);
        setMensagem("");
        setTimeout(() => setEnviado(false), 3000); // some após 3s
      } else {
        alert("Erro ao enviar mensagem.");
      }
    } catch {
      alert("Erro ao enviar mensagem.");
    }
  };

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
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className={styles.messageContainer}>
                  <label className={styles.labelMensagem}>
                    <textarea
                      name="mensagem"
                      className={styles.mensagem}
                      required
                      placeholder="Mensagem:"
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                    ></textarea>
                  </label>
                </div>

                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.button}>
                    Enviar
                  </button>
                </div>

                {enviado && (
                  <div className={styles.popupSucesso}>
                    Mensagem enviada com sucesso!
                  </div>
                )}
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
