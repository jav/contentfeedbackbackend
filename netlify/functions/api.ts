import express, { Router } from 'express';
import serverless from 'serverless-http';
import apirRouter from '../../src/routes/api';
import publicRouter from '../../src//routes/public';

const app = express();

app.use('/api/', apirRouter);
app.use('/', publicRouter);

export const handler = serverless(app);