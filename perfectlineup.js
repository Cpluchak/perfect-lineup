const positionValidWithOneposition = ["P", "C", "1B", "2B", "3B", "SS"];
const positionValidWithThreeposition = ["OF"];

function validateLineup(lineup) {
  let salary = 0;
  const countOfPlayerByTeamId = {};
  const countOfPlayerByGameId = {};
  const countOfPlayersPosition = {};

  lineup.forEach((player) => {
    salary = salary + player.salary;

    if (countOfPlayerByTeamId[player.teamId] === undefined) {
      countOfPlayerByTeamId[player.teamId] = 1;
    } else {
      countOfPlayerByTeamId[player.teamId] =
        countOfPlayerByTeamId[player.teamId] + 1;
    }
    if (countOfPlayerByGameId[player.gameId] === undefined) {
      countOfPlayerByGameId[player.gameId] = 1;
    } else {
      countOfPlayerByGameId[player.gameId] =
        countOfPlayerByGameId[player.gameId] + 1;
    }
    if (countOfPlayersPosition[player.position] === undefined) {
      countOfPlayersPosition[player.position] = 1;
    } else {
      countOfPlayersPosition[player.position] =
        countOfPlayersPosition[player.position] + 1;
    }
  });

  if (salary > 45000) {
    return false;
  }

  for (const teamId in countOfPlayerByTeamId) {
    if (countOfPlayerByTeamId[teamId] > 2) {
      return false;
    }
  }

  for (const gameId in countOfPlayerByGameId) {
    if (countOfPlayerByGameId[gameId] > 3) {
      return false;
    }
  }

  for (let x = 0; x < positionValidWithOneposition.length; x++) {
    let position = positionValidWithOneposition[x];

    if (countOfPlayersPosition[position] !== 1) {
      return false;
    }
  }

  for (let x = 0; x < positionValidWithThreeposition.length; x++) {
    let position = positionValidWithThreeposition[x];

    if (countOfPlayersPosition[position] !== 3) {
      return false;
    }
  }

  return true;
}
module.exports = validateLineup;
