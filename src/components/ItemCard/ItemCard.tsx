interface ItemCardProp {
  name: string;
  image: string;
  func: (name: string, image: string) => void;
  
}


function ItemCard({ name, image, func }: ItemCardProp) {
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

export default ItemCard;

// function ItemComponent() {
//   return (
//     <header className="flex flex-col px-7 pt-12 pb-8 text-4xl font-black text-white whitespace-nowrap bg-red-300 max-w-[344px] rounded-[50px]">
//       <div className="justify-center px-9 py-8 mt-72 bg-red-200 rounded-3xl">Item Name</div>
//     </header>
//   );
// }

// export default ItemComponent;

// function ItemCard({name, image}: ItemCardProp) {
//   return (
//     <header className="flex flex-col pt-8 text-4xl font-black text-white whitespace-nowrap max-w-[390px]">
//       <section className="flex flex-col px-11 pb-12 mt-8 w-full bg-red-300 rounded-[50px]">

//         <img src = {image}/>
//         <div className="flex flex-col justify-center mt-80 mb-1.5 bg-white rounded-3xl">
//           <div className="text-center justify-center px-11 py-9 bg-red-200 rounded-[20px]">
//             {name}
//           </div>
//         </div>
//       </section>
//     </header>
//   );
// }
