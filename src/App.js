import { useState } from 'react';
import './App.css';

function App() {

    const [pokemon,setPokemon] = useState([]);

    const ShowPoke = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(response => setPokemon(response.results))
    };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ShowPoke}>Fetch Pokemon</button>
        <div>
          {pokemon.map((pokemon,i) => {
            return ( <ul key={i}><li>{pokemon.name}</li></ul> )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
