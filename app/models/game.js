export default class Game {
  constructor(players, id) {
    this._players = players;
    this._id;
  }
  
  get players() {
    return this._players;
  }
  
  set players(playerArray) {
    this._players = playerArray;
  }
  
  get id() {
    return this._id;
  }
  
  set id(gameId) {
    this._id = gameId;
  }
  
  get numberOfPlayers() {
    if (this._players) {
      return this._players.length;
    }
  }
  
  get topHand() {
    return Math.floor(51/this._players.length);
  }
}