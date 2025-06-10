"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./team.module.css";
import Header from "../header";
import Footer from "../footer";
import Loading from "../loading";
import CarouselStadium from "../carouselStadium";
import PlayersCard from "../playersCard";
import BallPosition from "../ballPosition";

import { useParams } from "next/navigation";

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

export default function TeamPage() {
  const url = "https://tbs-back.coolify.fps92.dev/teams";
  const params = useParams();

  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setTeams(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar times na API");
        console.error(error);
        setError("Não foi possível carregar os times.");
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  const name = params.name;

  const team = teams.find(
    (team) => team.name.toLowerCase() === name.toLowerCase()
  );
  if (!team) {
    return <div className={styles.error}>Time não encontrado.</div>;
  }
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.pai}>
          <div className={styles.containerTeam}>
            <div className={styles.containerBanner}>
              <div className={styles.colors}>
                <div className={styles.one} style={{background: team.color1}}></div>
                <div className={styles.two} style={{background: team.color2}}></div>
                <div className={styles.one} style={{background: team.color1}}></div>
                <div className={styles.two} style={{background: team.color2}}></div>
                <div className={styles.one} style={{background: team.color1}}></div>
                <div className={styles.two} style={{background: team.color2}}></div>
                <div className={styles.one} style={{background: team.color1}}></div>
                <div className={styles.two} style={{background: team.color2}}></div>
                <div className={styles.one} style={{background: team.color1}}></div>
                <div className={styles.two} style={{background: team.color2}}></div>
                <div className={styles.one} style={{background: team.color1}}></div>

              </div>

              <div className={styles.line}>
                <div className={styles.shield}>
                  <img className={styles.imagem} src={team.shield} alt="" />
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
                    {/* aqui vai a imagem do uniforme */}
                  </div>
                  <div className={styles.hinoText}>
                    <div className={styles.year}>
                      <h3>{team.foundationYear}</h3>
                    </div>
                    <div className={styles.text}>
                      <h2>"{team.anthem}"</h2>
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
                    <h1>V</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.containerStadium}>
              <div className={styles.containerStadiumTitle}>
                <h1> Estádio </h1>
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
              <PlayersCard teamName={team.name}/>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
