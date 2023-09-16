import express, { Request, Response } from "express"
import cors from 'cors'
import 'dotenv/config'


import apirRouter from './routes/api'
import publicRouter from './routes/public'


const app = express()
const port = 9000

app.use(cors())

app.use('/api/', apirRouter);
app.use('/', publicRouter);


app.listen(port, () => {
    console.log(`Server is listening on ${port} ℹ️`)
})

import { HttpFunction } from '@google-cloud/functions-framework';

export const serverFunction: HttpFunction = async (req, res) => {
  res.send('Hello World!');
}