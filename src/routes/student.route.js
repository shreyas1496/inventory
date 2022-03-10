import express from 'express';
import { Student } from '../models';
export const studentRouter = express.Router();

studentRouter.get('/', async function (req, res) {
  const students = await Student.findAll();
  res.json(students);
});

studentRouter.post('/', async (req, res) => {
  const { sroll_num,senr,sname,s_mailid,sph_num } = req.body;
  console.log(sroll_num,senr,sname,s_mailid,sph_num, req.body);
  Student.create({
    sroll_num,
    senr,
    sname,
    s_mailid,
    sph_num,
  });

  return res.sendStatus(201);
});
