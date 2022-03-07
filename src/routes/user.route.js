import express from 'express';
import { User } from '../models';
export const userRouter = express.Router();

userRouter.get('/', async function (req, res) {
  const users = await User.findAll();
  res.json(users);
});

userRouter.post('/', async (req, res) => {
  const { firstName, lastName, phone } = req.body;
  console.log(firstName, req.body);
  User.create({
    firstName,
    lastName,
    phone,
  });

  return res.sendStatus(201);
});
