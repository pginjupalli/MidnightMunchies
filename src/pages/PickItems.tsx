import SectionTitle from "../components/SectionTitle/SectionTitle";
import ItemCard from "../components/ItemCard/ItemCard";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Subtitle from "../components/Subtitle/Subtitle";

interface PickItemsProp {
  func: (name: string, image: string) => void;
}

const PickItems = ({ func }: PickItemsProp) => {
  const drinks = [
    {
      name: "Lemonade",
      image: "ItemIcons/Lemonade.png",
    },
    {
      name: "Milkshake",
      image: "ItemIcons/Milkshake.png",
    },
    {
      name: "Soda",
      image: "ItemIcons/Soda.png",
    },
    {
      name: "Water",
      image: "ItemIcons/Water.png",
    },
  ];

  const snacks = [
    {
      name: "Strawberries",
      image: "ItemIcons/Strawberries.png",
    },
    {
      name: "Chips",
      image: "ItemIcons/Chips.png",
    },
    {
      name: "Popcorn",
      image: "ItemIcons/Popcorn.png",
    },
    {
      name: "Candy",
      image: "ItemIcons/Candy.png",
    },
  ];

  const decor = [
    {
      name: "Balloons",
      image: "ItemIcons/Balloons.png",
    },
    {
      name: "Confetti",
      image: "ItemIcons/Confetti.png",
    },
    {
      name: "Lights",
      image: "ItemIcons/FairyLights.png",
    },
    {
      name: "Lava Lamp",
      image: "ItemIcons/LavaLamp.png",
    },
  ];

  const masks = [
    {
      name: "Unicorn",
      image: "ItemIcons/UnicornMask.png",
    },
    {
      name: "Dog",
      image: "ItemIcons/Dog.png",
    },
    {
      name: "Cat",
      image: "ItemIcons/Cat.png",
    },
    {
      name: "Frog",
      image: "ItemIcons/Frog.png",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <SectionTitle title="Pick Your Items!" />
      <Subtitle title="Choose your drinks!"/>
      <ul className="flex flex-wrap justify-center p-5">
        {drinks.map((item) => (
          <li data-aos="fade-left">
            <ItemCard func={func} name={item.name} image={item.image} />
          </li>
        ))}
      </ul>

      <Subtitle title="Choose your snacks!"/>
      <ul className="flex flex-wrap justify-center p-5">
        {snacks.map((item) => (
          <li data-aos="fade-left">
            <ItemCard func={func} name={item.name} image={item.image} />
          </li>
        ))}
      </ul>

      <Subtitle title="Choose your decorations!"/>
      <ul className="flex flex-wrap justify-center p-5">
        {decor.map((item) => (
          <li data-aos="fade-left">
            <ItemCard func={func} name={item.name} image={item.image} />
          </li>
        ))}
      </ul>

      <Subtitle title="Choose your decorations!"/>
      <ul className="flex flex-wrap justify-center p-5">
        {masks.map((item) => (
          <li data-aos="fade-left">
            <ItemCard func={func} name={item.name} image={item.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PickItems;
