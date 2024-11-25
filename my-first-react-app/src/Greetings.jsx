function Greeting(){
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return <>
        <h1>&quot;Hey buddy how you doing?&quot;</h1>
        {animals.map((animal) =>{
            return <li key={animal}>{animal}</li>
        })}
    </>
}

export const Food = ()=>{
    return <h2>My favorite food is banana.</h2>
}

export default Greeting;