import express, { Request, Response } from "express"
import cors from 'cors'
import 'dotenv/config'

import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const app = express()
const port = 9000

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

const getFeedbackOnContent = async (contentToGetFeedbackOn: string) => {
    const gptResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "You will be provided with a text, and your task is to \
              evaluate the quality of storytelling of the text\
              you will answer in a json format where \
              the first property called score is a \
              0-10 score of the quality of storytelling\
              the second property called feedback is feedback to on how the text could improve its storytelling quality."
            },
            {
                "role": "user",
                "content": contentToGetFeedbackOn
            }
        ],
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    return gptResponse.choices[0].message.content
}

app.post('/api/getFeedback', async (req: Request, res: Response) => {
    console.log(req.body)
    const feedback: string = await getFeedbackOnContent(req.body.contentToGetFeedbackOn)
    res.json({ feedback })
})

app.listen(port, () => {
    console.log(`Server is listening on ${port} ℹ️`)
})
