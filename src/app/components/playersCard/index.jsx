"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading";
import styles from "./playersCard.module.css";

export default function PlayersCard({ teamName }) {
  const url = "https://tbs-back.coolify.fps92.dev/players";

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function normalize(str) {
    // Normaliza uma string: remove acentos, hífens e converte para minúsculas
    return str
      .normalize("NFD") // Remove acentos
      .replace(/[\u0300-\u036f]/g, "") // Remove marcas de acentuação
      .replace(/-/g, "") // Remove hífens
      .toLowerCase(); // Converte para minúsculas
  }

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);

        console.log("teamName recebido:", teamName);
        console.log("Todos os jogadores:", response.data);

        const filtered = response.data.players.filter(
          (player) =>
            player.teamName &&
            normalize(player.teamName) === normalize(teamName)
        );

        filtered.sort((a, b) => {
          if (a.position === "goleiro" && b.position !== "goleiro") return -1;
          if (a.position !== "goleiro" && b.position === "goleiro") return 1;
          return a.name.localeCompare(b.name, "pt-BR");
        });

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

  const positionColors = {
    goleiro: "red",
    defensor: "orange",
    "meio-campista": "green",
    atacante: "blue",
  };

  return (
    <div className={styles.playersCardsPai}>
      {players.map((players) => (
        <div className={styles.card} key={players.id}>
          <div className={styles.cardImage}>
            <div className={styles.image}>
              <img
                className={styles.imagePNG}
                src={players.image}
                alt="Imagem do jogador"
              />
            </div>
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardName}>
              <h1>{players.name}</h1>
            </div>
            <div className={styles.cardNumber}>
              <h1>#{players.number}</h1>
            </div>
            <div className={styles.cardPlayerInfos}>
              <h2 className={styles.height}>{players.height}m</h2>
              <h2 className={styles.age}>{players.birthdayYear}</h2>
            </div>

            <div className={styles.cardNationality}>
              <div className={styles.nationality}>
                <img
                  className={styles.nationalityImage}
                  src={players.nationalityImage}
                  alt="Imagem da nacionalidade"
                />
              </div>
            </div>

            <div className={styles.cardPosition}>
              <div
                className={styles.position}
                style={{
                  backgroundColor: positionColors[players.position?.toLowerCase()] || "gray",
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
