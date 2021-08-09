const positionValidWithOneposition = ['P', 'C', '1B'. '2B', '3B', 'SS']
const positionValidWithThreeposition = ['OF']

function validateLineup(lineup) {
    const salary = 0;
    const playersATeamHas = []
    const countOfPlayersGames = []
    const countOfPlayersPosition = []
    
    lineup.forEach(player => {
        salary = salary + player.salary
    
        if (playersATeamHas[player.teamid] === underfined){
            playersATeamHas[player.teamid] = 1
        }else{
            playersATeamHas[player.teamid] = playersATeamHas[player.teamid] + 1
        }
        if (countOfPlayersGames[player.gameId] === underfined){
            countOfPlayersGames[player.gameId] = 1
        }else{
            countOfPlayersGames[player.gameId = countOfPlayersGames[player.gameId] + 1
            ]
        if (countOfPlayersPosition[player.position] === underfined){
            countOfPlayersPosition[player.position] = 1
        }else{
            countOfPlayersPosition[player.position] = countOfPlayersPosition[player.position] + 1
        }

        }
    };


}
module.export(validateLineup)