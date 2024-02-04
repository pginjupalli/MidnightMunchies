interface ItemCardProp {
  name: string;
  image: string;
}

function ItemImage({ name, image }: ItemCardProp) {
  return (
    <header className="flex items-center justify-center w-56 h-56 m-5 bg-[#a492d1] rounded-[50px] shadow-2xl hover:scale-105 transition-[2s]">
      <img
        className="w-52 h-52 drop-shadow-[0_0px_35px_rgba(255,255,255,0.7)]"
        src={image}
      />
    </header>
  );
}

export default ItemImage;
