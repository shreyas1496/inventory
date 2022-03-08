import 'dotenv/config'
import express from 'express'
//import { userRouter } from './routes'
import { titanicRouter } from './routes'
import bodyParser from 'body-parser';

const PORT = process.env.PORT;

// Init express
const app = express();
app.use(bodyParser.urlencoded());
//app.use('/users', userRouter);
app.use('/titanic',titanicRouter);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});