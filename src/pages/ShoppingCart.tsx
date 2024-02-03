import SectionTitle from "../components/SectionTitle/SectionTitle"

interface ShoppingCartProp {
  items: {name: string, image: string}[]
}

const ShoppingCart = ({items}: ShoppingCartProp) => {
  return (
    <div>
        <b><SectionTitle title = "Your Shopping Cart!"/></b>
        <ul>
          {items.map((item) => <li>Hi</li>)}
        </ul>
    </div>
  )
}

export default ShoppingCart