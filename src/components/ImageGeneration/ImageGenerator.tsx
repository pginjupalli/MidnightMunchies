import { useRef, useState } from 'react'
import './ImageGenerator.css'
import default_image from '../ImageGeneration/DF2885AA-91F6-4985-B9E7-8CACFFF845F9_1_105_c.jpeg'
// import OpenAI from openai

const ImageGenerator = () => {
    const [image_url, setImage_url] = useState("/");
    let inputRef = useRef(null);

    const imageGenerator = async() => {

        // useState(() => {
        //     if (inputRef.current !== null) {
        //       // Now TypeScript knows that myRef.current is not null
        //       console.log(inputRef.current);
        //     }
        //   });


        if (inputRef.current==="") {
            return 0;
        }

        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method:"POST",
                headers:{
                    "content-type":"application/json",
                    Authorization: "Bearer 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",
                    "User-Agent":"Chrome",
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current}`,
                    n:1,
                    size:"512x512",
                }),
            }
        );
        let data = await response.json();
        let data_array = data.data;
        setImage_url(data_array[0].url);
        // console.log(data);
    }
        
    
    return (
        <div className='AI-Image Generator'>
            <div className='header'>
                Ai Image <span>generator</span>
            </div>
            <div className='img-loading'>
                <div className='image'><img src={image_url==="/"?default_image:image_url} alt=""/></div>
            </div>
            <div className="searchbox">
                <input type="text" ref={inputRef} className='search-input' placeholder='describe what you want to see'/>
                <div className="generate-btn" onClick={()=>{imageGenerator()}}> Generate </div>
            </div>
        </div>

        

    )
}

export default ImageGenerator


