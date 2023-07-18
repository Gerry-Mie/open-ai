import {openai} from "@/lib/config/openai";

export async function POST(req: Request) {
    const { prompt } = await req.json()
    const response = await openai.createImage({
        prompt,
        n: 1,
        size: '512x512'
    })
    const image_url = response.data.data[0].url
    return new Response(image_url)
}