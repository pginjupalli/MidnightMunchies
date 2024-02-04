import "./App.css";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import PickItems from "./pages/PickItems";
import ShoppingCart from "./pages/ShoppingCart";
import { useState } from "react";
import { useRef } from "react";

type Item = {
  name: string;
  image: string;
};

function App() {
  const [items, setItems] = useState([{ name: "", image: "" }]);

  const addItem = (name: string, image: string) => {
    const newItem = {
      name: name,
      image: image,
    };

    for (let i = 0; i < items.length - 1; i++) {
      if (items[i].image == newItem.image && items[i].name == newItem.name) {
        return;
      }
    }

    setItems([...items, newItem]);
  };

  const deleteItem = (name: string, image: string) => {};

  const itemsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="bg-[#2b3791]">
      <Homepage />
      <div ref={itemsRef} id="items">
        <PickItems func={addItem} />
      </div>
      <div ref={aboutRef} id="about">
        <ShoppingCart items={items} />
      </div>
      <AboutUs />
    </div>
  );
}

export default App;
