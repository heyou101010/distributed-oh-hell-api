export default class Player {
  
  constructor(userId, bids, tricks, currentHand, id) {
    this._userId = userId;
    this._bids = bids;
    this._tricks = tricks;
    this._id = currentHand;
    this._id = id;
  }
  
  get userId() {
    return this._userId;
  }
    
  set userId(userId) {
    this._userId = userId;
  }
  
  get bids() {
    return this._bids;
  }
    
  set bids(playerBids) {
    this._bids = playerBids;
  }
  
  get tricks() {
    return this._tricks;
  }
    
  set tricks(playerTricks) {
    this._tricks = playerTricks;
  }
  
  get currentHand() {
    return this._currentHand;
  }
    
  set currentHand(cards) {
    this._currentHand = cards;
  }
  
  get id() {
    return this._id;
  }
    
  set id(playerId) {
    this._id = playerId;
  }
}