import "./App.css";
import ImageGenerator from "./components/ImageGeneration/ImageGenerator";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import PickItems from "./pages/PickItems";
import ShoppingCart from "./pages/ShoppingCart";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const itemNames = new Set();

function App() {
  const itemsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  let initial: { name: string; image: string }[] = [];
  const [items, setItems] = useState(initial);

  const addItem = (name: string, image: string) => {
    const newItem = {
      name: name,
      image: image,
    };

    setItems([...items, newItem]);
    itemNames.add(name);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="">
      <Homepage />
      <div ref={aboutRef} id="about">
        <AboutUs />
      </div>
      <hr className="w-1/2 h-2 m-auto bg-[#fff3e3] my-10 rounded-lg "></hr>
      <div ref={itemsRef} id="items" className="">
        <PickItems func={addItem} />
      </div>
      <hr className="w-1/2 h-2 m-auto bg-[#fff3e3] my-10 rounded-lg"></hr>

      <div id="cart">
        <ShoppingCart items={items} />
      </div>

      <hr className="w-1/2 h-2 m-auto bg-[#fff3e3] my-10 rounded-lg"></hr>
      <ImageGenerator />
      <hr className="w-1/2 h-2 m-auto bg-[#fff3e3] my-10 rounded-lg"></hr>
    </div>
  );
}

export default App;
export {itemNames};