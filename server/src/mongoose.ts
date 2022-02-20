import { connect } from 'mongoose';
import { logger } from './logger';

//connect to the mongo Database
connect(
  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?authSource=${process.env.MONGODB_AUTHSOURCE}`,
  () => {
    logger.log('info', 'Connected to Mongo Database!');
  },
);