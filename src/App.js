import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          Pokémon Search
        </div>
        <input className="input" placeholder='Pikachu, Bulbasaur...'/>
        <PokemonCard pokemon={null}/>
      </div>
    </div>
  );
}

export default App;
