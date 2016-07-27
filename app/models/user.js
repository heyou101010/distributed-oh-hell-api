export default class User {
    constructor(firstName, lastName, token, id) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._token = token;
      this._id = id;
    }
    
    get firstName() {
      return this._firstName;
    }
    
    set firstName(userFirstName) {
      this._firstName = userFirstName;
    }
    
    get lastName() {
      return this._lastName;
    }
    
    set lastName(userLastName) {
      this._lastName = userLastName;
    }
    
    get token() {
      return this._token;
    }
    
    set token(token) {
      this._token = token;
    }
    
    get id() {
      return this._id;
    }
    
    set id(userId) {
      this._id = userId;
    }
    
}