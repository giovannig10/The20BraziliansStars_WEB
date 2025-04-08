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
