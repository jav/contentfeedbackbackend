import express, { Router } from 'express';
import serverless from 'serverless-http';
import apirRouter from '../../src/routes/api';
import publicRouter from '../../src/routes/public';

const app = express();


app.get('/', (req, res) => res.send('Hello root!'));

app.get('/hello', (req, res) => res.send('Hello World!'));


export const handler = serverless(app);