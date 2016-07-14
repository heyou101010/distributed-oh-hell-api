import express from 'express';
import Game from '../models/game';
import Player from '../models/player'
import GameDAO from '../dal/gameDao';
import PlayerDAO from '../dal/playerDao';
const router = express.Router();

router.use((req, res, next) => {
  const now = new Date(Date.now());
  console.log('player router: ' + now.toJSON());
  next();
});
router.get();
router.get();
router.get();
router.post();
router.put();
router.delete();

export default router;