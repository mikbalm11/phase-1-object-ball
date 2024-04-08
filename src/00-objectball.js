function gameObject () {
    return {
        home: {
          teamName: "Brooklyn Nets",
          colors: ["black", "white"],
          players: {
            "Alan Anderson": {
              number: 0,
              shoe: 16,
              points: 22,
              rebounds: 12,
              assists: 12,
              steals: 3,
              blocks: 1,
              slamDunks: 1,
            },
            "Reggie Evans": {
              number: 30,
              shoe: 14,
              points: 12,
              rebounds: 12,
              assists: 12,
              steals: 12,
              blocks: 12,
              slamDunks: 7,
            },
            "Brook Lopez": {
              number: 11,
              shoe: 17,
              points: 17,
              rebounds: 19,
              assists: 10,
              steals: 3,
              blocks: 1,
              slamDunks: 15,
            },
            "Mason Plumlee": {
              number: 1,
              shoe: 19,
              points: 26,
              rebounds: 12,
              assists: 6,
              steals: 3,
              blocks: 8,
              slamDunks: 5,
            },
            "Jason Terry": {
              number: 31,
              shoe: 15,
              points: 19,
              rebounds: 2,
              assists: 2,
              steals: 4,
              blocks: 11,
              slamDunks: 1,
            },
          },
        },
        away: {
          teamName: "Charlotte Hornets",
          colors: ["Turquoise", "Purple"],
          players: {
            "Jeff Adrien": {
              number: 4,
              shoe: 18,
              points: 10,
              rebounds: 1,
              assists: 1,
              steals: 2,
              blocks: 7,
              slamDunks: 2,
            },
            "Bismak Biyombo": {
              number: 0,
              shoe: 16,
              points: 12,
              rebounds: 4,
              assists: 7,
              steals: 7,
              blocks: 15,
              slamDunks: 10,
            },
            "DeSagna Diop": {
              number: 2,
              shoe: 21,
              points: 24,
              rebounds: 12,
              assists: 12,
              steals: 4,
              blocks: 5,
              slamDunks: 5,
            },
            "Ben Gordon": {
              number: 8,
              shoe: 15,
              points: 33,
              rebounds: 3,
              assists: 2,
              steals: 1,
              blocks: 1,
              slamDunks: 0,
            },
            "Brendan Haywood": {
              number: 33,
              shoe: 15,
              points: 6,
              rebounds: 12,
              assists: 12,
              steals: 22,
              blocks: 5,
              slamDunks: 12,
            },
          },
        },
      };
}

//console.log(gameObject());

/*
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}
  
  console.log(homeTeamName());

function awayTeamName() {
    return gameObject()["away"]["teamName"];
}
  
console.log(awayTeamName());
*/

function numPointsScored (playerName) {
  const homePlayers = gameObject().home.players;
  const awayPlayers = gameObject().away.players;

  if (homePlayers.hasOwnProperty(playerName)) {
      return homePlayers[playerName].points;
  } else if (awayPlayers.hasOwnProperty(playerName)) {
      return awayPlayers[playerName].points;
  } else {
    return "Player not found";
  }
}

function shoeSize (playerName) {
  const homePlayers = gameObject().home.players;
  const awayPlayers = gameObject().away.players;

  if (homePlayers.hasOwnProperty(playerName)) {
      return homePlayers[playerName].shoe;
  } else if (awayPlayers.hasOwnProperty(playerName)) {
      return awayPlayers[playerName].shoe;
  } else {
    return "Player not found";
  }
}

function teamColors(teamName) {
  const game = gameObject();

  if (game.home.teamName === teamName) {
      return game.home.colors;
  } else if (game.away.teamName === teamName) {
      return game.away.colors;
  } else {
    return "Team not found";
  }
}

function teamNames() {
  const game = gameObject();

  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();

  if (game.home.teamName === teamName) {
      return Object.values(game.home.players).map(player => player.number);
  }  else if (game.away.teamName === teamName) {
      return Object.values(game.away.players).map(player => player.number);
  } else {
    return "Team not found";
  }
}

function playerStats(playerName) {
  const game = gameObject();

  if (game.home.players.hasOwnProperty(playerName)) {
      return game.home.players[playerName];
  } else  if (game.away.players.hasOwnProperty(playerName)) {
      return game.away.players[playerName];
  } else {
    return "Player not found";
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let largestFeet;
  //debugger
  Object.values(game.home.players).forEach(player => {
      if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          largestFeet = player;
      }
  });

  Object.values(game.away.players).forEach(player => {
      if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          largestFeet = player;
      }
  });
  //debugger;

  return largestFeet.rebounds;
}

function mostPointsScored() {
  const game = gameObject();
  let mostPoints = 0;
  let mostScorer;

  Object.values(game.home.players).forEach(player => {
      if (player.points > mostPoints) {
          mostPoints = player.points;
          mostScorer = player;
      }
  });

  Object.values(game.away.players).forEach(player => {
      if (player.points > mostPoints) {
          mostPoints = player.points;
          mostScorer = player;
      }
  });

 return mostScorer;
}

function winningTeam() {
  const game = gameObject();
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;

  Object.values(game.home.players).forEach(player => {
      homeTeamPoints += player.points;
  });

  Object.values(game.away.players).forEach(player => {
      awayTeamPoints += player.points;
  });

  if (homeTeamPoints > awayTeamPoints) {
      return game.home.teamName;
  } else if (awayTeamPoints > homeTeamPoints) {
      return game.away.teamName;
  } else {
      return "It's a tie!";
  }
}

function playerWithLongestName() {
  const game = gameObject();
  let longestNameLength = 0;
  let playerWithLongestName;

  Object.keys(game.home.players).forEach(playerName => {
      if (playerName.length > longestNameLength) {
          longestNameLength = playerName.length;
          playerWithLongestName = playerName;
      }
  });

  Object.keys(game.away.players).forEach(playerName => {
      if (playerName.length > longestNameLength) {
          longestNameLength = playerName.length;
          playerWithLongestName = playerName;
      }
  });

  return playerWithLongestName;
}

function doesLongNameStealATon() {
  const game = gameObject();
  let longestNamePlayer = playerWithLongestName();
  let mostStealsPlayer;

  Object.values(game.home.players).forEach(player => {
      if (!mostStealsPlayer || player.steals > mostStealsPlayer.steals) {
          mostStealsPlayer = player;
      }
  });

  Object.values(game.away.players).forEach(player => {
      if (!mostStealsPlayer || player.steals > mostStealsPlayer.steals) {
          mostStealsPlayer = player;
      }
  });

  return longestNamePlayer === mostStealsPlayer;
}
