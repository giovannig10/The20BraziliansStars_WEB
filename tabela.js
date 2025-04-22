const times = [
  {
    name: "Flamengo",
    games: 9,
    wins: 4,
    draws: 3,
    losses: 2,
    points: 0,
    goalsFavor: 12,
    goalsOwn: 29,
    goalsDifference: 0,
  },
  {
    name: "São Paulo",
    games: 9,
    wins: 4,
    draws: 3,
    losses: 2,
    points: 0,
    goalsFavor: 10,
    goalsOwn: 5,
    goalsDifference: 0,
  },
  {
    name: "Palmeiras",
    games: 9,
    wins: 3,
    draws: 4,
    losses: 2,
    points: 0,
    goalsFavor: 8,
    goalsOwn: 6,
    goalsDifference: 0,
  },
  {
    name: "Corinthians",
    games: 9,
    wins: 2,
    draws: 5,
    losses: 2,
    points: 0,
    goalsFavor: 7,
    goalsOwn: 7,
    goalsDifference: 0,
  },
];

times.map((time) => {
  time.points = time.wins * 3 + time.draws * 1 + time.losses * 0;
  time.goalsDifference = time.goalsFavor - time.goalsOwn;
});

times.map((time) => {
  if (time.games !== time.wins + time.draws + time.losses) {
    console.log(
      "algo na contagem da quantidade de jogos, vitórias, empates e/ou derrotas não está correto."
    );
  }
});

let tabela = times.sort((timeA, timeB) => {
  if (timeA.points == timeB.points) {
    if (timeA.wins == timeB.wins) {
      timeB.goalsDifference - timeA.goalsDifference;
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
