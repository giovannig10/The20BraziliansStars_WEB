import React from "react";
import styles from "./teams.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Time from "../../components/time";

const teams = [
  {
    id: 1,
    name: "Atletico-MG",
    shieldImage:
      "/images/shields/escudo_galo.png",
    fansBackground: "/images/fansBackground/torcida_galo.png",
  },
  {
    id: 2,
    name: "Bahia",
    shieldImage: "/images/shields/escudo_bahia.png",
    fansBackground: "/images/fansBackground/torcida_bahia.png",
  },
  {
    id: 3,
    name: "Botafogo",
    shieldImage: "/images/shields/escudo_botafogo.png",
    fansBackground: "/images/fansBackground/torcida_fogao.png",
  },
  {
    id: 4,
    name: "Bragantino",
    shieldImage: "/images/shields/escudo_bragantino.png",
    fansBackground: "/images/fansBackground/torcida_bragantino.png",
  },
  {
    id: 5,
    name: "Ceará",
    shieldImage: "/images/shields/escudo_ceara.png",
    fansBackground: "/images/fansBackground/torcida_ceara.png",
  },
  {
    id: 6,
    name: "Corinthians",
    shieldImage: "/images/shields/escudo_corinthians.png",
    fansBackground: "/images/fansBackground/torcida_lixo.png",
  },
  {
    id: 7,
    name: "Cruzeiro",
    shieldImage: "/images/shields/escudo_cruzeiro.png",
    fansBackground: "/images/fansBackground/torcida_cruzeiro.png",
  },
  {
    id: 8,
    name: "Flamengo",
    shieldImage: "/images/shields/escudo_flamengo.png",
    fansBackground: "/images/fansBackground/torcida_flamengo.png",
  },
  {
    id: 9,
    name: "Fluminense",
    shieldImage: "/images/shields/escudo_flu.png",
    fansBackground: "/images/fansBackground/torcida_flu.png",
  },
  {
    id: 10,
    name: "Fortaleza",
    shieldImage: "/images/shields/escudo_fortaleza.png",
    fansBackground: "/images/fansBackground/torcida_fortaleza.png",
  },
  {
    id: 11,
    name: "Grêmio",
    shieldImage: "/images/shields/escudo_gremio.png",
    fansBackground: "/images/fansBackground/torcida_gremio.png",
  },
  {
    id: 12,
    name: "Internacional",
    shieldImage: "/images/shields/escudo_inter.png",
    fansBackground: "/images/fansBackground/torcida_inter.png",
  },
  {
    id: 13,
    name: "Juventude",
    shieldImage: "/images/shields/escudo_juventude.png",
    fansBackground: "/images/fansBackground/torcida_juventude.png",
  },
  {
    id: 14,
    name: "Mirassol",
    shieldImage: "/images/shields/escudo_mirassol.png",
    fansBackground: "/images/fansBackground/torcida_mirassol.png",
  },
  {
    id: 15,
    name: "Palmeiras",
    shieldImage: "/images/shields/escudo_palmeiras.png",
    fansBackground: "/images/fansBackground/torcida_palmeiras.png",
  },
  {
    id: 16,
    name: "Santos",
    shieldImage: "/images/shields/escudo_santos.png",
    fansBackground: "/images/fansBackground/torcida_santos.png",
  },
  {
    id: 17,
    name: "Sport",
    shieldImage: "/images/shields/escudo_sport.png",
    fansBackground: "/images/fansBackground/torcida_sport.png",
  },
  {
    id: 18,
    name: "São Paulo",
    shieldImage: "/images/shields/escudo_saopaulo.png",
    fansBackground: "/images/fansBackground/torcida_saopaulo.png",
  },
  {
    id: 19,
    name: "Vasco da Gama",
    shieldImage: "/images/shields/escudo_vasco.png",
    fansBackground: "/images/fansBackground/torcida_vasco.png",
  },
  {
    id: 20,
    name: "Vitória",
    shieldImage: "/images/shields/escudo_vitoria.png",
    fansBackground: "/images/fansBackground/torcida_vitoria.png",
  },
];

export default function Times() {
  return (
    <div className={styles.container}>

      <Header/>

      <section className={styles.teamsContainer}>
        {teams.map((time) => (
          <Time key={time.id} time={time} />
        ))}
      </section>

      <Footer/>

    </div>
  );
}
