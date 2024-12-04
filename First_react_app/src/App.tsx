import { useState } from 'react';

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    }
  })

  const handleClick = () =>{
    // change the name of the player in to something else 
    setGame({...game, player: {...game.player, name: "Yordanos"}})
  }
  return (
    <div>
    </div>
  );
}

export default App;
