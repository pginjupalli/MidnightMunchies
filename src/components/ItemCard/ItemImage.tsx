interface ItemCardProp {
    name: string;
    image: string;
    func: (name: string, image: string) => void;
    
  }
  
  
  function ItemImage({ name, image, func }: ItemCardProp) {
    return (
      <header className="flex items-center flex-col m-5 px-10 pt-12 pb-8 text-4xl font-black text-white whitespace-nowrap bg-[#a492d1] width-300 rounded-[50px] shadow-2xl hover:scale-105 transition-[2s]">
        <img className = "w-52 h-52 drop-shadow-[0_0px_35px_rgba(255,255,255,0.7)]" src={image} />
        <button onClick = {() => func(name, image)} className="text-center w-full justify-center px-9 py-8 mt-8 bg-pink-200 rounded-3xl hover:bg-red-200">
          {" "}
          {name}{" "}
        </button>
      </header>
    );
  }
  
  export default ItemImage;