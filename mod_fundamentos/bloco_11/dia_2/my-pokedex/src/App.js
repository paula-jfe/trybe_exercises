import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  )
}



export default App;
