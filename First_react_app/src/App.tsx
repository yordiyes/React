import { useState } from 'react';

function App() {
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: "Product 1", quantity: 1},
      {id: 2, title: "Product 2", quantity: 1}
    ]
  })

  const handleClick = () =>{
    // change the name of the player in to something else 
    setCart({...cart, items: cart.items.map(item => {item.id == 1? {...item, quantity: item.quantity + 1}: item})})
  }
  return (
    <div>
    </div>
  );
}

export default App;
