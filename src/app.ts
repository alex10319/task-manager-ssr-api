import express, { Request, Response } from 'express';
import cors from 'cors';
import Router from './router';

const App = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

App.use(cors(corsOptions));

App.use(express.json());

App.use("/api", Router);

export default App;
