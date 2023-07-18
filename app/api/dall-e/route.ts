import {openai} from "@/lib/config/openai";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export async function POST(req: Request) {
    const { prompt } = await req.json()
    try {
        // const response = await openai.createImage({
        //     prompt,
        //     n: 1,
        //     size: '512x512'
        // })
        // const image_url = response.data.data[0].url
        // return new Response(image_url)
        return new Response('')
    }catch (e){
       return new Response('error', {status:400})
    }

}