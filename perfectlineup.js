const positionValidWithOneposition = ['P', 'C', '1B', '2B', '3B', 'SS']
const positionValidWithThreeposition = ['OF']

function validateLineup(lineup) {
    const salary = 0;
    const CountOfPlayerByTeamId = []
    const countOfPlayerByGameId = []
    const countOfPlayersPosition = []
    
    lineup.forEach((player) => {
        salary = salary + player.salary
    
        if (CountOfPlayerByTeamId[player.teamid] === underfined){
            CountOfPlayerByTeamId[player.teamid] = 1
        }else {
            CountOfPlayerByTeamId[player.teamid] = 
            CountOfPlayerByTeamId[player.teamid] + 1
        }
        if (countOfPlayerByGameId[player.gameId] === underfined){
            countOfPlayerByGameId[player.gameId] = 1
        }else {
            countOfPlayerByGameId[player.gameId = 
                countOfPlayerByGameId[player.gameId] + 1
            ]
        if (countOfPlayersPosition[player.position] === underfined){
            countOfPlayersPosition[player.position] = 1
        }else {
            countOfPlayersPosition[player.position] = 
            countOfPlayersPosition[player.position] + 1
        }}
    })


        if (salary > 45000) {
            return false
        }

        for (const teamId in CountOfPlayerByTeamId) {
            if (countOfPlayerByTeamId[teamId] > 2) {
                return false
            }
        }

        for (const gameId in countOfPlayerByGameId) {
            if (countOfPlayerByGameId[gameID] > 3) {
                return false
            }
        }

        for (let x = o; x < positionValidWithThreeposition.length; x++) {
            let position = positionValidWithThreeposition[x]

            if (countOfPlayersPosition[position] !== 3) {
                return false
            }
        }

        return true
    }
module.exports(validateLineup)