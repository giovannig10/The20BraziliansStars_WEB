import React from "react";
import styles from "./about.module.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Membro from "@/app/components/membro";

import { IoHomeOutline } from "react-icons/io5";
import { BsShield } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

const SobreNosPage = () => {
  return (
    <div className={styles.container}>

          <Header 
            homeIcon={<IoHomeOutline size={36} color={"white"} />}
            shieldIcon={<BsShield size ={36} color={"white"}/>}
            userIcon={<IoPersonOutline size={36} color={"white"} />}
            />

      <div className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.titulo}>Conheça nossa equipe</h1>
        </div>
        <div className={styles.gridEquipe_1}>
          <Membro
          img = "/images/giovanni.jpeg"
          name = "Giovanni Gonçalves"
          func = "Product Owner"
          github = "https://github.com/giovannig10"
          gmail = "mailto:giovannig10@gmail.com"
          linkedin = "https://www.linkedin.com/in/"
          />
          <Membro
          img = "/images/danone.jpeg"
          name = "João Vitor Gianonni"
          func = "Scrum Master"
          github = "https://github.com/joaogianoni23"
          gmail = "mailto:joao.gianoni@aluno.senai.br"
          linkedin = "https://www.linkedin.com/in/joaogianoni/"
          />
          <Membro
          img = "/images/valverde.jpeg"
          name = "Vinicius Valverde"
          func = "Membro Desenvolvedor"
          github = "https://github.com/viniciusValverde1410"
          gmail = "mailto:vinicius.valverde@aluno.senai.br"
          linkedin = "https://www.linkedin.com/in/https://www.linkedin.com/in/vin%C3%ADcius-valverde-b987a8339//"
          />
        </div>
        <div className={styles.gridEquipe_2}>
          <Membro
            img="/images/gabriela.jpeg"
            name="Gabriela Fernanda"
            func="Membro Desenvolvedor"
            github="https://github.com/gabriela-fernanda14"
            gmail="mailto:grabiela.e.barbosa@aluno.senai.br"
            linkedin="https://www.linkedin.com/in/"
          />
          <Membro
            img="/images/pedro.jpeg"
            name="Pedro Oliveira"
            func="Membro Desenvolvedor"
            github="https://github.com/pedro-ols"
            gmail="mailto:pedro."
            linkedin="www.linkedin.com/in/pedro-santos-52a5a02b1"
          />
          <Membro
            img="/images/vitor.jpeg"
            name="Vitor Sampaio"
            func="Membro Desenvolvedor"
            github="https://github.com/vitor-sampai0"
            gmail="mailto:vitor.s.lira@aluno.senai.br"
            linkedin="https://www.linkedin.com/in/vitor-sampaio-152839241/"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SobreNosPage;
