import Player from './player';

export default class Game {
  constructor(players, id) {
    this._players = players || [];
    this._id = id || null;
  }
  
  get players() {
    return this._players;
  }
  
  set players(playerArray) {
    this._players = playerArray;
  }
  
  addPlayer(player) {
    if (player instanceof Player) {
      this._players.push(player);
    }
  }
  
  get id() {
    return this._id;
  }
  
  set id(gameId) {
    this._id = gameId;
  }
  
  get numberOfPlayers() {
    return this._players.length;
  }
  
  get topHand() {
    return Math.floor(51/this._players.length);
  }
}