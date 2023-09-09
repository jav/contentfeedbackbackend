import express, { Request, Response } from "express"
import cors from 'cors'

const app = express()
const port = 9000

app.use(express.static('public'))
app.use(cors())
app.use(express.json())


app.post('/api/getFeedback', (req: Request, res: Response) => {
    console.log(req.body)
    res.json({feedback: `Feedback on ${req.body.contentToGetFeedbackOn} from the backend! 👋`})
})

app.listen(port, () => {
    console.log(`Server is listening on ${port} ℹ️`)
})
