module.exports = function Game(numberOfPlayers){
  var numberOfPlayersInGame = numberOfPlayers;
  return {
    id: Math.floor(Math.random() * 100000000),
    getNumberOfPlayers: function getNumberOfPlayers(){
      return numberOfPlayersInGame;
    },
    getTopHand: function getTopHand(){
      let topHands = [0, 0, 0, 0, 10, 8, 7, 6, 5];
      return topHands[numberOfPlayersInGame];
    },
    updateNumberOfPlayers: function updateNumberOfPlayers(newNumberOfPlayers){
      numberOfPlayersInGame = newNumberOfPlayers;
    }
  };
};