import PokemonCard from "./PokemonCard"

function PokemonList(props) {
    const { list } = props

    return (
        <div>
            {/* TODO: Pokémon List */}
            {list.map(pokemon => <PokemonCard pokemon={pokemon}/>)}
        </div>
    )
}

export default PokemonList