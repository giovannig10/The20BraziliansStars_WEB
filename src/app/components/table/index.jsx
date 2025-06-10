"use client";

import TableItem from "../tableItem";
import styles from "./tabela.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Tabela = () => {
  const urlTeams = "https://tbs-back.coolify.fps92.dev/teams";
  //   const urlGames = "https://tbs-back.coolify.fps92.dev/games";
  const urlGames = "http://localhost:4000/games";

  const [teams, setTeams] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const responseTeams = await axios.get(urlTeams);
        setTeams(responseTeams.data);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar times na API");
        setError("Não foi possível carregar os times.");
        setLoading(false);
      }
      try {
        setLoading(true);
        const responseGames = await axios.get(urlGames);
        setGames(responseGames.data.games);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar jogos na API");
        setError("Não foi possível carregar os jogos.");
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Carregando Times...</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  teams.forEach((time) => {
    time.games = 0;
    time.goalsFavor = 0;
    time.goalsOwn = 0;
    time.wins = 0;
    time.losses = 0;
    time.draws = 0;

    time.retrospect = time.retrospect || [];

    console.log(time);

    games.forEach((jogo) => {

      console.log(jogo);

      if (jogo.homeTeam === time.name) {
        time.games ++;
        time.goalsFavor += jogo.homeGoals;
        time.goalsOwn += jogo.awayGoals;

        if (jogo.homeGoals > jogo.awayGoals) {
          time.wins++;

          time.retrospect.shift();
          time.retrospect.push("V");
        } else if (jogo.homeGoals < jogo.awayGoals) {
          time.losses++;
          time.retrospect.shift();
          time.retrospect.push("D");
        } else {
          time.draws++;
          time.retrospect.shift();
          time.retrospect.push("E");
        }
      }

      if (jogo.awayTeam === time.name) {
        time.games++;
        time.goalsFavor += jogo.awayGoals;
        time.goalsOwn += jogo.homeGoals;

        if (jogo.awayGoals > jogo.homeGoals) {
          time.wins++;
          time.retrospect.shift();
          time.retrospect.push("V");
        } else if (jogo.awayGoals < jogo.homeGoals) {
          time.losses++;
          time.retrospect.shift();
          time.retrospect.push("D");
        } else {
          time.draws++;
          time.retrospect.shift();
          time.retrospect.push("E");
        }
      }
    });

    time.points = time.wins * 3 + time.draws * 1 + time.losses * 0;
    time.goalsDifference = time.goalsFavor - time.goalsOwn;
  });
  let tabela = teams.sort((timeA, timeB) => {
    if (timeA.points == timeB.points) {
      if (timeA.wins == timeB.wins) {
        if (timeA.goalsDifference == timeB.goalsDifference) {
          return timeA.goalsFavor - timeB.goalsFavor;
        }

        return timeB.goalsDifference - timeA.goalsDifference;
      }

      return timeB.wins - timeA.wins;
    }

    return timeB.points - timeA.points;
  });

  console.log(tabela);
  return (
    <section className={styles.cardsList}>
      {teams.map((team, index) => (
        <TableItem key={team.id} team={team} index={index} />
      ))}
    </section>
  );
};

export default Tabela;
