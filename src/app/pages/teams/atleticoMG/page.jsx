import styles from "./atleticoMG.module.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function AtleticoMG() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.pai}>
          <div className={styles.containerTeam}>
            <div className={styles.containerBanner}>
              <div className={styles.colors}>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
                <div className={styles.black}></div>
                <div className={styles.white}></div>
              </div>

              <div className={styles.line}>
                <div className={styles.shield}>
                  <img
                    className={styles.imagem}
                    src="/images/shields/escudo_galo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className={styles.containerInfos}>
              <div className={styles.containerInfosFilho}>
                <div className={styles.tituloContainer}>
                  <h1 className={styles.name}>Atlético Mineiro</h1>
                </div>
                <div className={styles.containerTrofeus}>
                  {/* <img src="" alt="" /> */}
                </div>
                <div className={styles.divisoria}></div>
                <div className={styles.hino}>
                  <div className={styles.uniforme1}>
                    {/* aqui vai a imagem do uniforme */}
                  </div>
                  <div className={styles.hinoText}>
                    <div className={styles.year}>
                      <h3>1999</h3>
                    </div>
                    <div className={styles.text}>
                      <h2>
                        Nós somos do Clube Atlético Mineiro Jogamos com muita
                        raça e amor Vibramos com alegria nas vitórias Clube
                        Atlético Mineiro Galo Forte Vingador
                      </h2>
                    </div>
                  </div>
                  <div className={styles.uniforme2}>
                    {/* aqui vai a imagem do uniforme 2 */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.containerInfos2}>
            <div className={styles.containerRetrospectiva}>
              <div className={styles.containerRetrospectivaTitle}>
                <h1> Retrospecto Recente </h1>
              </div>
              <div className={styles.containerResultados}>

              <div className={styles.result}>
              <div className={styles.win}>
                <h1>V</h1>
              </div>
              <div className={styles.draw}>
                <h1>E</h1>
              </div>
              <div className={styles.lose}>
                <h1>D</h1>
              </div>
              <div className={styles.draw}>
                <h1>E</h1>
              </div>
              <div className={styles.win}>
                <h1></h1>
              </div>
              </div>
              </div>
            </div>

            <div className={styles.containerStadium}></div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
