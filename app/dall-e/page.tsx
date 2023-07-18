'use client'
import React, {FormEvent, useState} from "react";
import axios from "axios";

const DallE = () => {
    const [status, setStatus] = useState<'loading' | 'error' | ''>('')
    const [image, setImage] = useState<string | null>(null)

    async function generate(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('loading')
        try {
            const prompt: string = e.currentTarget.prompt.value;
            const res = await axios.post('api/dall-e', {prompt})
            console.log(res)
            setImage(res.data)
            setStatus('')
        }catch (e){
            setStatus('error')
        }
    }

    return (
        <div className='min-h-screen flex justify-center pt-10'>
            <div className='max-w-[600px]'>
                <p className='py-5 text-xl'>Next Image Generator</p>
                <form onSubmit={generate}>
                    <input name='prompt' className='w-full min-w-[512px] p-2'/>
                    <button className='p-2 mt-4 w-full bg-blue-400' type='submit'>submit</button>
                </form>
                <h1 className='py-5'>{status==='loading'?'generating...':status=='error'?'error':''}</h1>
                {image&&(
                    <img width={512} src={image} height={512} alt='image'/>
                )}
            </div>

        </div>
    );
};

export default DallE;
