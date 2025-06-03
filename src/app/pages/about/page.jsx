import React from "react";
import styles from "./about.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const linkedinIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg";

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
            <img className={styles.imagem} src="/images/giovanni.jpg" alt="Giovanni Gonçalves" />
            <div className={styles.texts}>
              <p>Giovanni Gonçalves</p>
              <span>Product Owner</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <div className={styles.links}>
                  {/* github */}
                  <a
                    href="https://github.com/giovannig10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                  {/* linkedin */}
                  <a
                    href="https://www.linkedin.com/in/giovanni-goncalves/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                </div>
              </details>
            </div>
          </div>
          <div className={styles.membro}>
            <img className={styles.imagem} src="/images/joao.jpg" alt="João Gianonni" />
            <div className={styles.texts}>
              <p>João Vitor Gianonni</p>
              <span>Scrum Master</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <div className={styles.links}>
                  {/* github */}
                  <a
                    href="https://github.com/joaogianoni23"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                  {/* linkedin */}
                  <a
                    href="https://www.linkedin.com/in/joaovitor-gianonni/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                </div>
              </details>
            </div>
          </div>
          <div className={styles.membro}>
            <img className={styles.imagem} src="/images/valverde.jpg" alt="Vinicius Valverde" />
            <div className={styles.texts}>
              <p>Vinicius Valverde</p>
              <span>Membro Desenvolvedor</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <div className={styles.links}>
                  {/* github */}
                  <a
                    href="https://github.com/viniciusValverde1410"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                  {/* linkedin */}
                  <a
                    href="https://www.linkedin.com/in/vinicius-valverde/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className={styles.gridEquipe_2}>
          <div className={styles.membro}>
            <img className={styles.imagem} src="/images/gabriela.jpg" alt="Gabriela Fernanda" />
            <div className={styles.texts}>
              <p>Gabriela Fernanda</p>
              <span>Membro Desenvolvedor</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <div className={styles.links}>
                  {/* github */}
                  <a
                    href="https://github.com/gabriela-fernanda14"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                  {/* linkedin */}
                  <a
                    href="https://www.linkedin.com/in/gabriela-fernanda/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                </div>
              </details>
            </div>
          </div>
          <div className={styles.membro}>
            <img className={styles.imagem} src="/images/pedro.jpg" alt="Pedro Oliveira" />
            <div className={styles.texts}>
              <p>Pedro Oliveira</p>
              <span>Membro Desenvolvedor</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <div className={styles.links}>
                  {/* github */}
                  <a
                    href="https://github.com/pedro-ols"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                  {/* linkedin */}
                  <a
                    href="https://www.linkedin.com/in/pedro-oliveira/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                </div>
              </details>
            </div>
          </div>
          <div className={styles.membro}>
            <img className={styles.imagem} src="/images/vitor.jpg" alt="Vitor Sampaio" />
            <div className={styles.texts}>
              <p>Vitor Sampaio</p>
              <span>Membro Desenvolvedor</span>
              <details className={styles.details}>
                <summary>Mais detalhes</summary>
                <div className={styles.links}>
                  {/* github */}
                  <a
                    href="https://github.com/vitor-sampai0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                  {/* linkedin */}
                  <a
                    href="https://www.linkedin.com/in/vitor-sampaio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      style={{ width: 24, height: 24 }}
                    />
                  </a>
                </div>
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
