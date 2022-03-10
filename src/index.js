import 'dotenv/config';
import express from 'express';
import { studentRouter } from './routes';
import bodyParser from 'body-parser';

const PORT = process.env.PORT;

// Init express
const app = express();
app.use(bodyParser.urlencoded());
app.use('/students', studentRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
