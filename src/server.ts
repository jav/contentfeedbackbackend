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

type Reviewer = {
    description: string
}

const reviewersRoster = {
    storyTeller: {
        description: "reviews the text from a story telling perspective. How well does the text tell a story? Does include cliffhangers?"
    },
    teacher: {
        description: "reviews the text from an educational perspective. How well does the text teach the reader? Is it clear? Does it include examples?"
    },
    hemingway: {
        description: "reviews the text from a Hemmingway perspective. How easy is the text to read? Does it concrete, specific and more commonly found words?"
    },
    scientist: {
        description: "reviews the text from a scientific perspective. How well does the text explain the topic? Does it include references? Is it told in an objective way?"
    }
}

const getFeedbackOnContent = async (contentToGetFeedbackOn: string, selectedReviewers?: string[]) => {

    selectedReviewers = selectedReviewers ?? Object.keys(reviewersRoster)
    selectedReviewers = selectedReviewers.filter(reviewer => Object.keys(reviewersRoster).includes(reviewer))

    const systemInstructionsPersonas = selectedReviewers.map(
        reviewer => `The ${reviewer} persona, who ${reviewersRoster[reviewer].description}`
    ).join('\n')

    const systemInstructions = `
    You will be provided with a text, and your task is to
    through different personas evaluate the quality of the text.
    You will answer with an json object, where the each persona is a key,
    and the value is an object with the properties 'score' and 'feedback'.
    The personas are the following:
    ${systemInstructionsPersonas}
    `

    const gptResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": systemInstructions
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
