import User from '../models/User';

export default class UserDAO {
  
  findUserById(id) {
    return new Promise(
      function (resolve, reject) {
        let user = global.users.find(currentUser => currentUser.id == id);
          
        if (user) {
          resolve(user);
        } else {
          reject(`There was no user with id of ${id}`);
        }
      }
    );
  }
  
  upsertUser(user) {
    return new Promise( 
      function (resolve, reject){
        
        if (user && user instanceof User) {
          if (user.id) {
            
            let userIndex = global.users.findIndex(currentUser => currentUser.id == user.id);
            
            if (userIndex > -1) {
              global.users[userIndex] = user;
            } else {
              global.users.push(user);
            }
            
          } else {
            user.id = global.users.length + 1;
            global.users.push(user);
          }
          
          resolve(user);
        } else {
          reject('Either the user was not a User or the user was falsy');
        }
        
      }
    );
  }
  
}