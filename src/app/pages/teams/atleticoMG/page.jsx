"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./atleticoMG.module.css";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Loading from "../../../components/loading";
import CarouselStadium from "../../../components/carouselStadium";
import PlayersCard from "../../../components/playersCard";
import BallPosition from "../../../components/ballPosition";

export default function AtleticoMG() {
  const items = [
    {
      name: "Estádio Mineirão",
      image: [
        "https://www.estadios.net/wp-content/uploads/2018/12/estadio-mineirao.jpg",
      ],
      location: "Belo Horizonte - MG",
      capacity: "61.500",
    },
    {
      name: "Estádio Mineirão",
      image: [
        "https://www.aeroportoconfins.net/wp-content/uploads/2014/06/mineirao.jpg",
      ],
      location: "Belo Horizonte - MG",
      capacity: "61.500",
    },
    {
      name: "Estádio Mineirão",
      image: [
        "https://portalbelohorizonte.com.br/sites/default/files/arquivos/ao-ar-livre-e-esportes/2021-07/mineirao-6.jpg",
      ],
      location: "Belo Horizonte - MG",
      capacity: "61.500",
    },
  ];

  const url = "https://tbs-back.coolify.fps92.dev/teams";

  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setTeam(response.data.find((team) => team.id === 1));
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar time na API");
        setError("Não foi possível carregar o time.");
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        team &&(
        <main className={styles.main}>
          {/* {teams.map((team) => ( */}
            <div key={team.id} className={styles.pai}>
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
                        src={team.shield}
                        alt="escudo da equipe"
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.containerInfos}>
                  <div className={styles.containerInfosFilho}>
                    <div className={styles.tituloContainer}>
                      <h1 className={styles.name}>{team.name}</h1>
                    </div>
                    <div className={styles.containerTrofeus}>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div className={styles.divisoria}></div>
                    <div className={styles.hino}>
                      <div className={styles.uniforme1}>
                        <img src={team.uniformHome} alt="Uniforme Home" />
                      </div>
                      <div className={styles.hinoText}>
                        <div className={styles.year}>
                          <h3>{team.foundationYear}</h3>
                        </div>
                        <div className={styles.text}>
                          <h2>
                            "{team.anthem}"
                          </h2>
                        </div>
                      </div>
                      <div className={styles.uniforme2}>
                        <img src={team.uniformAway} alt="Uniforme Away" />
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
                        <h1>V</h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.containerStadium}>
                  <div className={styles.containerStadiumTitle}>
                    <h1> Estádio: {team.stadiumName} </h1>
                  </div>
                  <CarouselStadium items={items} />
                </div>
              </div>

              <div className={styles.containerPlayers}>
                <div className={styles.containerPlayersTitle}>
                  <h1>Principais Jogadores</h1>
                </div>
                <div className={styles.containerPlayersPositions}>
                  <BallPosition backgroundColor="red" name="GOL" />
                  <BallPosition backgroundColor="orange" name="DEF" />
                  <BallPosition backgroundColor="green" name="MC" />
                  <BallPosition backgroundColor="blue" name="ATA" />
                </div>

                <div className={styles.playersContent}>
                  <PlayersCard />
                </div>
              </div>
            </div>
          {/* ))} */}
        </main>
        )
      )}

      <Footer />
    </div>
  );
}
