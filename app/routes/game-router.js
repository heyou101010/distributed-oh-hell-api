/*
GET     games
GET     games/:id
POST    games
PUT     games/:id
DELETE  games/:id
*/

import express from 'express';
import { game } from '../models/game';

const router = express.Router();

router.use((req, res, next) => {
  const now = new Date(Date.now());
  console.log('game router: ' + now.toJSON());
  next();
});

router.get('/', (req, res, next) => {
  res.json({ message: 'get all the games!' });
});

router.get('/help', (req, res) => {
  res.json({
    'get /' : 'get list of games',
    'get /:id' : 'get a game',
    'post /' : 'create a game',
    'put /:id' : 'update a game',
    'delete /:id' : 'delete a game',
    'json' : JSON.stringify({id : 'gameId'})
  });
});

router.get('/:id', (req, res, next) => {
  res.json({ message: 'get game ' + req.path});
});

router.post('/', (req, res, next) => {
  res.json({ message: 'create a new game'});
});

router.put('/:id', (req, res, next) => {
  res.json({ message: 'update game ' + req.path});
});

router.delete('/:id', (req, res, next) => {
  res.json({ message: 'delete game ' + req.path});
});

export default router;