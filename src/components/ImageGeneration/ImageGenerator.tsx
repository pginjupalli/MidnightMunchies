import { useRef, useState } from "react";
import "./ImageGenerator.css";
import default_image from "/Placeholder.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import { itemNames } from "../../App";

// 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 = BAD REQUEST BROKE KEY
// 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 = DO NOT USE EXPENSIVE GIVE JAMIE MONEY

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    let prompt: string = "Slumber party with: ";
    let itemString: string = Array.from(itemNames).join(' ');
    prompt = prompt + itemString;
    // useState(() => {
    //     if (inputRef.current !== null) {
    //       // Now TypeScript knows that myRef.current is not null
    //       console.log(inputRef.current);
    //     }
    //   });
    // Bearer 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

    if (prompt === "") {
      return 0;
    }

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1,
          size: "512x512",
        }),
      }
    );
    let data = await response.json();
    let data_array = data.data;
    setImage_url(data_array[0].url);
    // console.log(data);
    
  };

  return (
    <>
      <SectionTitle title="AI Image Generator" />
      <div className="flex flex-col items-center justify-center">
        <img
          className="m-5 w-1/3 rounded-[30px] border-[#ffe9cd] border-solid border-[5px] shadow-2xl hover:scale-105 transition-[2s]"
          src={image_url === "/" ? default_image : image_url}
          alt="?"
        />

        <div className="flex flex-col items-center justify-center">
          <p className="font text-white text-4xl w-[60%] text-center mt-5">
            Generate an abstract image to get your head flowing with your unique and original ideas!
          </p>
          <button
            className="text-4xl font-black text-white whitespace-nowrap text-center w-60 justify-center px-9 py-8 mt-8 bg-pink-200 rounded-3xl hover:bg-red-200"
            onClick={() => {
              imageGenerator();
            }}  
          >
            
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
