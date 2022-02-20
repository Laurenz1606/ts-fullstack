import cors from 'cors';
import express from 'express';
import { logger } from './logger';

//initialize the express app
const app = express();

//parse json payloads to req.body
app.use(express.json());

//add cors to our app
app.use(cors());

//listen on the port defiend in the environment variables
app.listen(process.env.PORT, () =>
  logger.log('info', `Express App listening on Port ${process.env.PORT}!`),
);
