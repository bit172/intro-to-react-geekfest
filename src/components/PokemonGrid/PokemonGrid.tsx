import './PokemonGrid.scss'

type PokemonGridProps = {
  pokemons: Pokemon[]
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }) => {
  return <div className="pokemon-grid"></div>
}

export default PokemonGrid
