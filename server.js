var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var gameRouter = require('./app/routes/game-router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Oh Hell API'});
});

app.use('/api', router);
app.use('/api/games', gameRouter);
app.listen(port, process.env.IP);
console.log('Here we go!');