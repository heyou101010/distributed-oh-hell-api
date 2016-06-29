export default class Game {
  constructor(numberOfPlayers) {
    this._numberOfPlayers = numberOfPlayers;
  }
  
  get topHand () {
    let topHands = [0, 0, 0, 0, 10, 8, 7, 6, 5];
    return topHands[this._numberOfPlayers];
  }
}