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
                "content": `
                    You will be provided with a text, and your task is to
                    through different personas evaluate the quality of the text.
                    You will answer with an json object, where the each persona is a key,
                    and the value is an object with the properties 'score' and 'feedback'. 
                    The first persona is 'the story teller', who reviews the text from
                    a story telling perspective.
                    The second persona is the 'teacher', who reviews the text from
                    an educational perspective.
                    The third persona is the 'helper', who reviews the text from
                    the perspective of how easy the contents are to understand.
                    `
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
