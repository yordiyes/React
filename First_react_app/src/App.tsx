  import Button from "./components/Button";

  function App() {
    const handleClick = (item: string)=>{
      console.log(item+ " button clicked")
    }

    return (
      <div>
        <Button color="primary" onClick={handleClick}>
          Primary
        </Button>

        <Button color="success" onClick={handleClick}>
          Success
        </Button>

        <Button color="secondary" onClick={handleClick}>
          Secondary
        </Button>
      </div>
    );
  }

  export default App;
