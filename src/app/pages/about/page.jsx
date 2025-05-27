import React from "react";
import styles from "./about.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const SobreNosPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.titulo}>Conheça nossa equipe</h1>
        </div>
        <div className={styles.gridEquipe_1}>
          <div className={styles.membro}>
            <img src="/images/giovanni.jpg" alt="Giovanni Gonçalves" />
            <div className={styles.texts}>
              <p>Giovanni Gonçalves</p>
              <span>Product Owner</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <p>
                  Responsável pelo alinhamento do produto e comunicação com o
                  time.
                </p>
                                  <a
                    href="https://github.com/giovannig10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
              </details>
            </div>
          </div>
          <div className={styles.membro}>
            <img src="/images/joao.jpg" alt="João Gianonni" />
            <div className={styles.texts}>
              <p>João Vitor Gianonni</p>
              <span>Scrum Master</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <p>
                  Facilita as cerimônias ágeis e remove impedimentos do time.
                </p>
                                  <a
                    href="https://github.com/joaogianoni23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
              </details>
            </div>
          </div>
          <div className={styles.membro}>
            <img src="/images/valverde.jpg" alt="Vinicius Valverde" />
            <div className={styles.texts}>
              <p>Vinicius Valverde</p>
              <span>Membro Desenvolvedor</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <p>Desenvolvedor focado em front-end e integrações.</p>
                <p>
                  <a
                    href="https://github.com/viniciusValverde1410"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </p>
              </details>
            </div>
          </div>
        </div>
        <div className={styles.gridEquipe_2}>
          <div className={styles.membro}>
            <img src="/images/gabriela.jpg" alt="Gabriela Fernanda" />
            <div className={styles.texts}>
              <p>Gabriela Fernanda</p>
              <span>Membro Desenvolvedor</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <p>Especialista em UI/UX e experiência do usuário.</p>
                                  <a
                    href="https://github.com/gabriela-fernanda14"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
              </details>
            </div>
          </div>
          <div className={styles.membro}>
            <img src="/images/pedro.jpg" alt="Pedro Oliveira" />
            <div className={styles.texts}>
              <p>Pedro Oliveira</p>
              <span>Membro Desenvolvedor</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <p>Responsável por testes e qualidade do código.</p>
                                  <a
                    href="https://github.com/pedro-ols"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
              </details>
            </div>
          </div>
          <div className={styles.membro}>
            <img src="/images/vitor.jpg" alt="Vitor Sampaio" />
            <div className={styles.texts}>
              <p>Vitor Sampaio</p>
              <span>Membro Desenvolvedor</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <p>Atua no back-end e integrações de APIs.</p>
                                  <a
                    href="https://github.com/vitor-sampai0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
              </details>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SobreNosPage;
