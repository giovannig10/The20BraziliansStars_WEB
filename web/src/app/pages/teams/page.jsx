import React from "react";
import styles from "./teams.module.css";
import Header from "../../components/header";
import Time from "../../components/time";
// import Footer from "../../components/footer";

const teams = [
  {
    id: 1,
    name: "Atletico-MG",
    shieldImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atletico_mineiro_galo.png/1200px-Atletico_mineiro_galo.png",
    fansBackground: "https://shoppingdamassa.vtexassets.com/arquivos/discount-popup.png",
  },
  {
    id: 2,
    name: "Bahia",
    shieldImage: "https://upload.wikimedia.org/wikipedia/pt/9/90/ECBahia.png",
    fansBackground: "https://www.ecbahia.com/wp-content/uploads/2024/04/torcida54-1024x606.jpg",
  },
  {
    id: 3,
    name: "Botafogo",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Escudo_Botafogo.png",
    fansBackground: "",
  },
  {
    id: 4,
    name: "Bragantino",
    shieldImage: "https://upload.wikimedia.org/wikipedia/pt/9/9e/RedBullBragantino.png",
    fansBackground: "",
  },
  {
    id: 5,
    name: "Ceará",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cear%C3%A1_Sporting_Club_logo.svg/1200px-Cear%C3%A1_Sporting_Club_logo.svg.png",
    fansBackground: "",
  },
  {
    id: 6,
    name: "Corinthians",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Escudo_sc_corinthians.png/150px-Escudo_sc_corinthians.png",
    fansBackground: "",
  },
  {
    id: 7,
    name: "Cruzeiro",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/2048px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png",
    fansBackground: "",
  },
  {
    id: 8,
    name: "Flamengo",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/2/22/Logo_Flamengo_crest_1980-2018.png",
    fansBackground: "",
  },
  {
    id: 9,
    name: "Fluminense",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Fluminense_FC_escudo.png",
    fansBackground: "",
  },
  {
    id: 10,
    name: "Fortaleza",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Fortaleza_EC_2018.png",
    fansBackground: "",
  },
  {
    id: 11,
    name: "Grêmio",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gremio_logo.svg/1718px-Gremio_logo.svg.png",
    fansBackground: "",
  },
  {
    id: 12,
    name: "Internacional",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/1200px-Escudo_do_Sport_Club_Internacional.svg.png",
    fansBackground: "",
  },
  {
    id: 13,
    name: "Juventude",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/EC_Juventude.svg/1024px-EC_Juventude.svg.png",
    fansBackground: "",
  },
  {
    id: 14,
    name: "Mirassol",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Mirassol_FC_logo.png",
    fansBackground: "",
  },
  {
    id: 15,
    name: "Palmeiras",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/2048px-Palmeiras_logo.svg.png",
    fansBackground: "",
  },
  {
    id: 16,
    name: "Santos",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png",
    fansBackground: "",
  },
  {
    id: 17,
    name: "Sport",
    shieldImage: "https://sportrecife.com.br/wp-content/uploads/2024/06/image19.png",
    fansBackground: "",
  },
  {
    id: 18,
    name: "São Paulo",
    shieldImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/2054px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png",
    fansBackground: "",
  },
  {
    id: 19,
    name: "Vasco da Gama",
    shieldImage: "https://upload.wikimedia.org/wikipedia/pt/a/ac/CRVascodaGama.png",
    fansBackground: "",
  },
  {
    id: 20,
    name: "Vitória",
    shieldImage: "https://upload.wikimedia.org/wikipedia/pt/3/34/Esporte_Clube_Vit%C3%B3ria_logo.png",
    fansBackground: "",
  },
];

export default function Times() {
  return (
    <div className={styles.container}>
      {/* <Header/> */}
      <section className={styles.teamsContainer}>
        {teams.map((time) => (
          <Time key={time.id} time={time} />
        ))}
      </section>
      {/* <Footer/> */}
    </div>
  );
}
