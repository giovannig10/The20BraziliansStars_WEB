"use client";

import { useState, useEffect } from "react";
import React from "react";

import styles from "./teams.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Teams from "../../components/teams";

import { IoHomeOutline } from "react-icons/io5";
import { BsFillShieldFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import axios from "axios";

export default function TeamsPage() {
  const url = "https://tbs-back.coolify.fps92.dev/teams";

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
    return <div className={styles.loading}>Carregando Times...</div>;
  }
  if (error) {
    return <div className={styles.error}>{error}</div>;
  }
  return (
    <div className={styles.container}>
      <Header
        homeIcon={<IoHomeOutline size={36} color={"white"} />}
        shieldIcon={<BsFillShieldFill size={46} color={"white"} />}
        userIcon={<IoPersonOutline size={36} color={"white"} />}
      />

      <section className={styles.teamsContainer}>
        {teams.map((team) => (
          <Teams key={team.id} team={team} />
        ))}
      </section>

      <Footer />
    </div>
  );
}
