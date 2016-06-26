/*
GET     games
GET     games/:id
POST    games
PUT     games/:id
DELETE  games/:id
*/

var express = require('express');
var router = express.Router();
var game = require('../models/game')

router.use(function (req, res, next) {
  let now = new Date(Date.now());
  console.log('game router: ' + now.toJSON());
  next();
});

router.get('/', function(req, res, next) {
  res.json({ message: 'get all the games!' });
});

router.get('/help', function(req, res){
  res.json({ 
    'get /' : 'get list of games',
    'get /:id' : 'get a game',
    'post /' : 'create a game',
    'put /:id' : 'update a game',
    'delete /:id' : 'delete a game',
    'json' : JSON.stringify({id : 'gameId'})
  });
});

router.get('/:id', function(req, res, next) {
  res.json({ message: 'get game ' + req.path});
});

router.post('/', function(req, res, next) {
  res.json({ message: 'create a new game'});
});

router.put('/:id', function(req, res, next) {
  res.json({ message: 'update game ' + req.path});
});

router.delete('/:id', function(req, res, next) {
  res.json({ message: 'delete game ' + req.path});
});

module.exports = router;