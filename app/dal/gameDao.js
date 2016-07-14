import Game from '../models/game';


export default class GameDAO {
  
  constructor() {
    
  }
  
  findGameById(id) {
    return new Promise(
      function (resolve, reject) {
        let game = global.games.find(currentGame => currentGame.id == id);
        
        if (game) {
          resolve(game);
        } else {
          reject(`There was no game with id of ${id}`);
        }
        
      }
    );
  }
  
  upsertGame(game) {
    return new Promise( 
      function (resolve, reject){
        
        if (game && game instanceof Game) {
          if (game.id) {
            
            let gameIndex = global.games.findIndex(currentGame => currentGame.id == game.id);
            
            if (gameIndex > -1) {
              global.games[gameIndex] = game;
            } else {
              global.games.push(game);
            }
            
          } else {
            game.id = global.games.length + 1;
            global.games.push(game);
          }
          
          resolve(game);
        } else {
          reject('Either the game was not a Game or the game was falsy');
        }
        
      }
    );
  }
  
}