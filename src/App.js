import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const ShowPoke = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response);
        setPokemon(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
      }

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={ShowPoke}>Fetch Pokemon</button>
          <div>
            {pokemon.map((pokemon, i) => {
              return (<ul key={i}><li>{pokemon.name}</li></ul>)
            })}
          </div>
        </header>
      </div>
    );
  }


export default App;
