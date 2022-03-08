import { config } from 'dotenv';
config();
import express, { Express } from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import morgan from 'morgan';
import routes from '../routes';
require('../strategies/discord')

export function createApp(): Express {
  const app = express();
  // Enable parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // Enable cors
  app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));


  // Enable session
  app.use(session({
    secret: 'hacktheplanet',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  }));

  // Enable passport
  app.use(passport.initialize());
  app.use(passport.session());

  // Enable logging
  app.use(morgan('combined'));
  // Enable routes
  app.use('/api/v1', routes);
  return app;
}
