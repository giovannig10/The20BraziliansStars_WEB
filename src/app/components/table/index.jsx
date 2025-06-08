"use client";

import TableItem from '../tableItem';
import styles from './tabela.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Tabela = () => {
    const url = "https://tbs-back.coolify.fps92.dev/teams";

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
                setError("Não foi possível carregar os times.");
                setLoading(false);
            };
        };
        fetchTeams();
    }, []);

    if (loading) {
        return (
            <div className={styles.loading}>
                Carregando Times...
            </div>
        )
    }
    if (error) {
        return (
            <div className={styles.error}>
                {error}
            </div>
        )
    }

    return (
        <section className={styles.cardsList}>
            {teams.map((team, index) => (
                <TableItem key={team.id} team={team} index={index}/>
            ))};
        </section>
    )
}

export default Tabela;