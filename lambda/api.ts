import express, { Router } from 'express';
import serverless from 'serverless-http';

import apiRouter from '../src/routes/api';
const app = express();

app.use('/api', apiRouter);

export const handler = serverless(app);