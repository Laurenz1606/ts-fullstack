import { config } from 'dotenv';
import { logger } from './logger';

//load environment variables (not in production)
if (!(process.env.NODE_ENV === 'production')) {
  logger.log('info', "Loaded environment Variables!");
  config();
}

//load the mongoose module
import './mongoose';

//load the express module
import './express';
