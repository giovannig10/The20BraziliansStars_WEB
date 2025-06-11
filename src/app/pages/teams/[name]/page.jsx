"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css'; 

import Loading from "../../../components/loading";
import Team from "../../../components/team";
import { useParams } from "next/navigation";



export default function teamPage() {

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
  return (
    <Team team={team}/>
  );
}
