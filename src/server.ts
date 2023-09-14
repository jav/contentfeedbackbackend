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



type ReviewerFeedback = {
    name: string,
    score: number,
    feedback: string,
    improvementSuggestion: string
}

const reviewersRoster = {
    storyTeller: {
        slug: "storyTeller",
        name: "The Story Teller",
        description: "A storyteller that reviews the text from a story telling perspective. How well does the text tell a story? Does include cliffhangers?"
    },
    teacher: {
        slug: "teacher",
        name: "The Teacher",
        description: "A teacher that reviews the text from an educational perspective. How well does the text teach the reader? Is it clear? Does it include examples?"
    },
    hemingway: {
        slug: "hemingway",
        name: "Ernst Hemingway",
        description: "Ernst Hemingway. Hemingway reviews the text from a Hemingway perspective. How easy is the text to read? Does it concrete, specific and more commonly found words?"
    },
    scientist: {
        slug: "scientist",
        name: "The Scientist",
        description: "Reviews the text from a scientific perspective. How well does the text explain the topic? Does it include references? Is it told in an objective way?"
    }
}

const getFeedbackOnContent = async (reviewerSlug: string, contentToGetFeedbackOn: string): Promise<ReviewerFeedback> => {

    if (!(reviewerSlug in reviewersRoster)) {
        throw new Error('Invalid reviewerSlug')
    }

    const systemInstructions = `
    You will be provided with a text, and your task is to evaluate the text
    through the perspective of a persona.
    You will answer with an json object with the following keys and values .
    Key: score, Value: a number between 0 and 10, where 0 is the worst and 10 is the best.
    Key: feedback, Value: a string where you describe what you thought about the text from your perspective.
    Key: improvementSuggestion, Value: a string, where you suggest how the text could be improved from your perspective.

    Your persona is:
    ${reviewersRoster[reviewerSlug].description}
    `
    try {
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
            max_tokens: 512,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })

        // TODO: Validate output

        const contentObj = JSON.parse(gptResponse.choices[0].message.content)
        const retFeedback: ReviewerFeedback = {
            name: reviewersRoster[reviewerSlug].name,
            score: contentObj.score,
            feedback: contentObj.feedback,
            improvementSuggestion: contentObj.improvementSuggestion
        }
        return retFeedback

    } catch (error) {
        console.log(error)
        throw error
    }
}

app.get('/api/reviewers', async (req: Request, res: Response) => {
    const reviewersRosterAsList = Object.values(reviewersRoster)
    return res.json(reviewersRosterAsList)
})

app.post('/api/reviewers/:reviewerSlug/getFeedback', async (req: Request<{ reviewerSlug: string }>, res: Response) => {
    const reviewerSlug = req.params.reviewerSlug
    const contentToGetFeedbackOn = req.body.contentToGetFeedbackOn

    try {
        const feedback = getFeedbackOnContent(reviewerSlug, contentToGetFeedbackOn)
        return res.json(feedback)
    } catch (error) {
        return res.status(500).json({ error })
    }
})

app.listen(port, () => {
    console.log(`Server is listening on ${port} ℹ️`)
})
