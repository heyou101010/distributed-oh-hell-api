export default class User {
    constructor(firstName, lastName, id) {
      this._firstName = firstName;
      this._lastName = lastName;
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
    
    get id() {
      return this._id;
    }
    
    set id(userId) {
      this._id = userId;
    }
    
}