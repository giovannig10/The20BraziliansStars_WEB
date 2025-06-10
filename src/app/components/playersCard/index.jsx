"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading";
import styles from "./playersCard.module.css";

export default function PlayersCard({ teamName }) {
  console.log("PlayersCard montou!", teamName);

  const url = "https://tbs-back.coolify.fps92.dev/players";

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function normalize(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/-/g, "")
      .toLowerCase();
  }

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);

        // console.log("teamName recebido:", teamName);
        // console.log("Todos os jogadores:", response.data);

        const filtered = response.data.players.filter(
          (player) =>
            player.teamName &&
            normalize(player.teamName) === normalize(teamName)
        );

        setPlayers(filtered);
        setLoading(false);

      } catch (error) {
        console.log("Erro ao buscar jogadores na API");
        setError("Não foi possível carregar os jogadores.");
        setLoading(false);
      }
    };
    fetchPlayers();
  }, [teamName]);

  if (loading) return <Loading />;
  if (error)
    return (
      <div className={styles.playersCardsPai}>
        <div className={styles.error}>{error}</div>
      </div>
    );
  if (players.length === 0)
    return (
      <div className={styles.playersCardsPai}>
        <div className={styles.error}>
          Nenhum jogador encontrado para este time.
        </div>
      </div>
    );

  return (
    <div className={styles.playersCardsPai}>
      {players.map((players) => (
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <div className={styles.image}>
              <img className={styles.imagePNG} src={players.image} alt="" />
            </div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardName}>
              <h1>{players.name}</h1>
            </div>
            <div className={styles.cardNumber}>
              <h1>{players.number}</h1>
            </div>
            <div className={styles.cardPlayerInfos}>
              <h2 className={styles.height}>{players.height}</h2>
              <h2 className={styles.age}>{players.birthdayYear}</h2>
            </div>

            <div className={styles.cardNationality}>
              <div className={styles.nationality}>
                <img
                  className={styles.nationalityImage}
                  src={players.nationalityImage}
                  alt=""
                />
              </div>
            </div>

            <div className={styles.cardPosition}>
              <div className={styles.position}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
