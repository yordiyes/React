import { useState } from 'react';

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"]
  })

  const handleClick = () =>{
    // change the name of the player in to something else 
    setPizza({...pizza, toppings: [...pizza.toppings, "Cheese"]})
  }
  return (
    <div>
    </div>
  );
}

export default App;
