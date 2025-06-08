"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css'; 

import Loading from "../../../components/loading";
import Team from "../../../components/team";
import { useParams } from "next/navigation";



export default function teamPage() {
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
    const params = useParams();

    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setTeams(response.data);
                setLoading(false)
            } catch (error) {
                console.log("Erro ao buscar times na API");
                console.error(error);
                setError("Não foi possível carregar os times.");
                setLoading(false);
            };
        };
        fetchTeams();
    }, []);

    if (loading) {
        return (
            <Loading/>
        )
    }
    if (error) {
        return (
            <div className={styles.error}>
                {error}
            </div>
        )
    }

    const name = params.name;

    const team = teams.find((team) => team.name.toLowerCase() === name.toLowerCase());
    if (!team) {
        return (
            <div className={styles.error}>
                Time não encontrado.
            </div>
        );
    }
    console.log(team.name, team.shield);
  return (
    <Team items={items}/>
  );
}
