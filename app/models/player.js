export default class Player {
  
  constructor(name, token, id) {
    this._name = name;
    this._token = token;
    this._id = id;
  }
  
  get name() {
    return this._name;  
  }
  
  set name(playerName) {
    this._name = playerName;
  }
  
  get token() {
    return this._token;  
  }
  
  set token(playerToken) {
    this._token = playerToken;
  }
  
  get id() {
    return this._id;
  }
    
  set id(playerId) {
    this._id = playerId;
  }
  
  toJSON() {
    let playerObject = {
      id: this._id,
      name: this._name,
      token: this._token
    };
    
    return JSON.stringify(playerObject);
  }
}