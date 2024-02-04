import SectionTitle from "../components/SectionTitle/SectionTitle"

interface ShoppingCartProp {
  items: {name: string, image: string}[]
}

const ShoppingCart = ({items}: ShoppingCartProp) => {
  return (
    <div>
        <SectionTitle title = "Your Shopping Cart!"/>
        <ul>
          {items.map((item) => <li>Hi</li>)}
        </ul>
    </div>
  )
}

export default ShoppingCart