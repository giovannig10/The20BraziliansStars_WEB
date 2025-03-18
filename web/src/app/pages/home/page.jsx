import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const Home = () => {
    return (
      <div className="container">
        <header className="header">
          <h1>The Brazilian Stars</h1>
          <p>Aqui você encontra tudo sobre os 20 times que estão disputando o "Brasileirão Betano 2025".</p>
        </header>

        <section className="tabela">
          <h2>Tabela do Campeonato em Tempo Real</h2>

          <div className="tabela-content">
            
            <table>
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Time</th>
                  <th>Pontos</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>1</td>
                  <td>Time A</td>
                  <td>30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Time B</td>
                  <td>28</td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        <section className="jogadores">
          <h2>Fique ligado na Escalação e no Jogador da Semana</h2>
          <div className="jogadores-content">
      
            <div className="jogador">
              <h3>Vitinha</h3>
            </div>
            <div className="jogador">
              <h3>Goleador</h3>
            </div>
          </div>
        </section>
      </div>
    );
  };


}

