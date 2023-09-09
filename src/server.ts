import express from 'express'
import cors from 'cors'

const app = express()
const port = 9000

app.use(express.static('public'))
app.use(cors())

app.post('/api/getFeedback', (req, res) => {
    res.json({feedback: 'Hello from the backend! 👋'})
})

app.listen(port, () => {
    console.log(`Server is listening on ${port} ℹ️`)
})
