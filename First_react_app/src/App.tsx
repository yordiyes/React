import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/List Group/ListGroup";

function App() {
  const items = ["Addis", "Dire", "Harar"]
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        Primary
      </Button>
      <ListGroup items={items} heading="Cities in Ethipia" onSelectItem={()=>console.log("hello")}/>
    </div>
  );
}

export default App;
