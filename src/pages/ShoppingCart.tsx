import ItemImage from "../components/ItemCard/ItemImage";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Aos from "aos";
import 'aos/dist/aos.css';

import { useEffect } from "react";

interface ShoppingCartProp {
  items: {name: string, image: string}[],
}

const ShoppingCart = ({items}: ShoppingCartProp) => {
  useEffect(() => {
    Aos.init();
  }, [])
 
  
  return (
    <div>
        <SectionTitle title = "Your Shopping Cart!"/>
        {(items.length == 0) ? <h1 className="font text-white text-4xl text-center">Click on the items to add them to your shopping cart!</h1> : <ul className="flex flex-wrap justify-center items-center">
          {items.map((item) => <li data-aos = "fade-left"><ItemImage  name = {item.name} image = {item.image}/></li>)}
        </ul>}
        
    </div>
  )
}


export default ShoppingCart;