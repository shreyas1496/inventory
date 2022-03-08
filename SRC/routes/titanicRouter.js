import express from 'express';
import { Titanic } from '../models';
export const titanicRouter = express.Router();

titanicRouter.get('/', async function (req, res) {
  const titanic = await Titanic.findAll();
  res.json(titanic);
});

titanicRouter.post('/', async (req, res) => {
  const { pass_name, room_floor, ticket_price } = req.body;
  console.log(firstName, req.body);
  Titanic.create({
    pass_name,
    room_floor,
    ticket_price,
  });

  return res.sendStatus(201);
});
