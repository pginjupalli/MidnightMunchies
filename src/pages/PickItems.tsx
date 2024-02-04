import SectionTitle from "../components/SectionTitle/SectionTitle";
import ItemCard from "../components/ItemCard/ItemCard";

interface PickItemsProp {
  func: (name: string, image: string) => void;
}

const PickItems = ({func}: PickItemsProp) => {
  const items = [
    {
      name: "Milkshake",
      image: "ItemIcons/Lemonade.png",
    },
    {
      name: "Lemonade",
      image: "ItemIcons/Milkshake.png",
    },
    {
      name: "Soda",
      image: "ItemIcons/Soda.png",
    }
  ];

  return (
    <div>
      <SectionTitle title="Pick Your Items!" />
      <ul className="flex flex-wrap justify-center p-5">
        {items.map((item) => (
          <li>
            <ItemCard func = {func} name={item.name} image={item.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PickItems;
