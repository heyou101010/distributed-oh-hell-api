/*
GET     games
GET     games/:id
POST    games
PUT     games/:id
DELETE  games/:id
*/

import express from 'express';
import Game from '../models/game';
import GameDAO from '../dal/gameDao';
const router = express.Router();

router.use((req, res, next) => {
  const now = new Date(Date.now());
  console.log('game router: ' + now.toJSON());
  next();
});

router.get('/', (req, res, next) => {
  res.json({ games: global.games });
});

router.get('/help', (req, res) => {
  res.json({
    'get /' : 'get list of games',
    'get /:id' : 'get a game',
    'post /' : 'create a game',
    'put /:id' : 'update a game',
    'delete /:id' : 'delete a game',
    'json' : JSON.stringify({id : 'gameId', players: 'player array'})
  });
});

router.get('/:id', (req, res, next) => {
  
  const gameDAO = new GameDAO();
  const gamePromise = gameDAO.findGameById(req.params.id);
  console.log(typeof req.params.id);
  
  gamePromise.then(
    function resolve(game){
      res.json(game);
    }, function reject(errorMsg){
      res.status(404).send({error: errorMsg});
    }
  );
  
});

router.post('/', (req, res, next) => {
  let gameDAO = new GameDAO();
  let gamePromise = gameDAO.upsertGame(new Game(req.body.players));
  
  gamePromise.then(
    function resolve(game){
      res.json(game);
    }, function reject(errorMsg){
      res.status(404).send({error: errorMsg});
    }
  );
  
});

router.put('/:id', (req, res, next) => {
  res.json({ message: 'update game ' + req.path});
});

router.delete('/:id', (req, res, next) => {
  res.json({ message: 'delete game ' + req.path});
});


export default router;