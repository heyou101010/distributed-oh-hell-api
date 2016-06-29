import express from 'express';
import bodyParser from 'body-parser';
import gameRouter from './app/routes/game-router';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Oh Hell API'});
});

app.use('/api', router);
app.use('/api/games', gameRouter);
app.listen(port, process.env.IP);
console.log('Here we go!');