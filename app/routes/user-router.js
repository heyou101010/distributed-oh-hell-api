import express from 'express';
import User from '../models/user';
import User from '../dal/user-dao';
const router = express.Router();

router.use((req, res, next) => {
  const now = new Date(Date.now());
  console.log('user router: ' + now.toJSON());
  next();
});

router.get('/', (req, res, next) => {
  res.json({ users: global.users });
});

router.get('/:id', (req, res, next) => {
  
});