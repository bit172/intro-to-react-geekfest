import { Card } from '../Card'

import './PokemonGrid.scss'

type PokemonGridProps = {
  pokemons: Pokemon[]
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }) => {
  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon, idx) => (
        <Card key={idx} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonGrid
