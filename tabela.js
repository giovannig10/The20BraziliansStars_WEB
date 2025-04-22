const teams = [
    {
        name: "Flamengo",
        games: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0,
        goalsFavor: 0,
        goalsOwn: 0,
        goalsDifference: 0,
    },
    {
        name: "São Paulo",
        games: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0,
        goalsFavor: 0,
        goalsOwn: 0,
        goalsDifference: 0,
    },
    {
        name: "Palmeiras",
        games: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0,
        goalsFavor: 0,
        goalsOwn: 0,
        goalsDifference: 0,
    },
    {
        name: "Corinthians",
        games: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0,
        goalsFavor: 0,
        goalsOwn: 0,
        goalsDifference: 0,
    },
];

const jogos =[
    {
        teamHome: "Flamengo",
        teamAway: "São Paulo",
        goalsHome: 2,
        goalsAway: 1,
        round: 1,
    },
    {
        teamHome: "Palmeiras",
        teamAway: "Corinthians",
        goalsHome: 3,
        goalsAway: 0,
        round: 1,
    },
    {
        teamHome: "São Paulo",
        teamAway: "Palmeiras",
        goalsHome: 1,
        goalsAway: 1,
        round: 2,
    },
    {
        teamHome: "Corinthians",
        teamAway: "Flamengo",
        goalsHome: 0,
        goalsAway: 2,
        round: 2,
    },
    {
        teamHome: "Flamengo",
        teamAway: "Palmeiras",
        goalsHome: 1,
        goalsAway: 1,
        round: 3,
    },
    {
        teamHome: "São Paulo",
        teamAway: "Corinthians",
        goalsHome: 22374,
        goalsAway: 2,
        round: 3,
    },

]


teams.map((time) => {
  time.points = time.wins * 3 + time.draws * 1 + time.losses * 0;
  time.goalsDifference = time.goalsFavor - time.goalsOwn;

  jogos.forEach((jogo) => {
    if(jogo.teamHome === time.name){
        time.games ++;
        time.goalsFavor += jogo.goalsHome;
        time.goalsOwn += jogo.goalsAway;
        
        if(jogo.goalsHome > jogo.goalsAway){
            time.wins ++;
        }else if (jogo.goalsHome < jogo.goalsAway){
            time.losses ++;
        }else {
            time.draws ++;
        }
    };

    if(jogo.teamAway === time.name){
        time.games ++;
        time.goalsFavor += jogo.goalsAway;
        time.goalsOwn += jogo.goalsHome;

        if(jogo.goalsAway > jogo.goalsHome){
            time.wins ++;
        }else if (jogo.goalsAway < jogo.goalsHome){
            time.losses ++;
        }else {
            time.draws ++;
        }
    };
  });
});

teams.map((time) => {
  if (time.games !== time.wins + time.draws + time.losses) {
    console.log(
      "algo na contagem da quantidade de jogos, vitórias, empates e/ou derrotas não está correto."
    );
  }
});

let tabela = teams.sort((timeA, timeB) => {
  if (timeA.points == timeB.points) {   
    if (timeA.wins == timeB.wins) {
      if (timeA.goalsDifference == timeB.goalsDifference) {
        return timeA.goalsFavor - timeB.goalsFavor;
      };

      return timeB.goalsDifference - timeA.goalsDifference;
    };

    return timeB.wins - timeA.wins;
  };

  return timeB.points - timeA.points;
});

console.log(tabela);
