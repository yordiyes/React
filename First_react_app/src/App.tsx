import { useState } from 'react';
import Person from './components/Person'
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  const [cartItmes, setCartItems] = useState(['Product1', 'Product2', 'Product3', 'Product4'])
  const handleClear = () => {
    setCartItems([])
  }
  return (
    <div>
      <Navbar  cartItemsCount={cartItmes.length}/>
      <Cart cartItems={cartItmes} onClear={handleClear}/>
    </div>
  );
}

export default App;
