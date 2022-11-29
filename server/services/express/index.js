import express from 'express';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { errorHandler as queryErrorHandler } from 'querymen';
import { errorHandler as bodyErrorHandler } from 'bodymen';
import { env } from '../../config';
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

export default (apiRoot, routes) => {
  const app = express();

  /* istanbul ignore next */
  if (env === 'production' || env === 'development') {
    app.use(cors());
    app.use(compression());
  }
  if (env === 'development') {
    app.use(morgan('dev'));
  }

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(apiRoot, routes);
  app.use(queryErrorHandler());
  app.use(bodyErrorHandler());
  app.use(cookieParser());
  app.use(fileUpload());
  app.use(express.static('public'));

  return app;
};
