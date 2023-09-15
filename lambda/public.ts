import express, { Router } from 'express';
import serverless from 'serverless-http';

import publicRouter from '../src/routes/public';

const app = express();

app.use('/', publicRouter);

export const handler = serverless(app);