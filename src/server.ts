import express from "express"
import cors from 'cors'
import 'dotenv/config'


import apiRouter from './routes/api'


export const app = express()
const port = 9000

app.use(cors())

app.use('/', apiRouter)

app.listen(port, () => {
  console.log(`Server is listening on ${port} ℹ️`)
})
