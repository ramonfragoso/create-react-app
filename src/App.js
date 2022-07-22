import './App.css';
import PokemonCard from './components/PokemonCard';
import PokemonList from './components/PokemonList';

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          Pokémon Search
        </div>

        <input className="input" placeholder='Pikachu, Bulbasaur...'/>
        <PokemonList list={[1,2,3]}/>
      </div>
      <div className="divider"/>
      <div className="container">
        <div className="title">
          My Pokémon List
        </div>
        <PokemonList list={[1,2,3]}/>
      </div>
    </div>
  );
}

export default App;
