import React from 'react';
import styles from './home.module.css';


export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.intro}>

                <p className={styles.description}>
                    Aqui você encontra tudo sobre os 20 times que estão disputando o
                    <span>"Brasileirão Betano 2025".</span>
                </p>

                <button className={styles.conheca}>
                    <a href="/times">Conheça a história, o estádio, a torcida, o elenco e os títulos de cada clube</a>
                </button>
            </div>



            <section className={styles.tabela}>
                <div className={styles.tituloTabela}><h2>Tabela
                    do Campeonato
                    em Tempo Real</h2></div>

                <div className={styles.tabelaContent}>
                    <iframe
                        id="sofa-standings-embed-83-72034"
                        src="https://widgets.sofascore.com/pt-BR/embed/tournament/83/season/72034/standings/Brasileiro%20Serie%20A%202025?widgetTitle=Brasileiro%20Serie%20A%202025&showCompetitionLogo=true"
                        style={{
                            height: '600px',

                            width: '700px',
                            border: '0',
                            overflow: 'hidden'
                        }}
                        scrolling="no"
                    ></iframe>
                </div>
            </section >





            <section className={styles.jogadores}>
                <h2>Fique ligado na escalação e no jogador da semana</h2>
                <iframe
                    id="sofa-totw-embed-372-69522-17830"
                    width="25%"
                    height="600px"
                    style={{
                        display: 'block',
                        maxWidth: '700px'
                    }}
                    src="https://widgets.sofascore.com/pt-BR/embed/unique-tournament/372/season/69522/round/17830/teamOfTheWeek?showCompetitionLogo=true&widgetTheme=light&widgetTitle=Paulista%20S%C3%A9rie%20A1"
                    frameBorder="0"
                    scrolling="no"
                ></iframe>
                <div style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
                    Time da semana fornecido por <a target="_blank" href="https://www.sofascore.com/">Sofascore</a>
                </div>

                <iframe
                    id="sofa-player-embed-874572"
                    src="https://widgets.sofascore.com/pt-BR/embed/player/874572?widgetTheme=light"
                    style={{
                        height: '300px',
                        width: '20%',
                        border: '0',
                        overflow: 'hidden'
                    }}
                    scrolling="no"
                ></iframe>

            </section>
        </div >
    );
}