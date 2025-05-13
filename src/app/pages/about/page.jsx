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
        <div className={styles.gridEquipe}>
          <div className={styles.membro}>
            <img src="/images/giovanni.jpg" alt="Giovanni Gonçalves" />
            <p>Giovanni Gonçalves</p>
            <span>Product Owner</span>
          </div>
          <div className={styles.membro}>
            <img src="/images/valverde.jpg" alt="Vinicius Valverde" />
            <p>Vinicius Valverde</p>
            <span>Membro Desenvolvedor</span>
          </div>
          <div className={styles.membro}>
            <img src="/images/joao.jpg" alt="João Gianoni" />
            <p>João Gianoni</p>
            <span>Scrum Master</span>
          </div>
          <div className={styles.membro}>
            <img src="/images/gabriela.jpg" alt="Gabriela Fernanda" />
            <p>Gabriela Fernanda</p>
            <span>Membro Desenvolvedor</span>
          </div>
          <div className={styles.membro}>
            <img src="/images/pedro.jpg" alt="Pedro Oliveira" />
            <p>Pedro Oliveira</p>
            <span>Membro Desenvolvedor</span>
          </div>
          <div className={styles.membro}>
            <img src="/images/vitor.jpg" alt="Vitor Sampaio" />
            <p>Vitor Sampaio</p>
            <span>Membro Desenvolvedor</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SobreNosPage;