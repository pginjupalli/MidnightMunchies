import './App.css'
import Button from './components/Button/Button'
import Homepage from './pages/Homepage'
import PickItems from './pages/PickItems'
import ShoppingCart from './pages/ShoppingCart'
import {useState} from 'react'

function App() {
  const [color, setColor] = useState('#f7bfc0')
  
  const [items, setItems] = useState([{name: '', image: ''}]);

  const addItem = (name: string, image: string) => {
    const newItem = {
      name: name,
      image: image,
    };

    setItems([...items, newItem]);
  }
  
  return (
    <div className='bg-[#2b3791]'>
      <Homepage/>
      <PickItems func = {addItem}/>
      <ShoppingCart items = {items}/>
      <Button/>
    </div>
  )
}

export default App
