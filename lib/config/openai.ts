import { Configuration, OpenAIApi } from "openai";

export const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
}))