import { getImageURL } from '../../utils'
import './Card.scss'

type CardProps = {
  pokemon: Pokemon
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const imgURL = getImageURL(pokemon.id)

  return (
    <div className="card glass">
      <div className="card-title">
        <h2 className="card-title-name">{pokemon.name.replace(/-/g, ' ')}</h2>
        <div>
          {pokemon.types.map(({ type }) => (
            <span className="type-badge">{type.name}</span>
          ))}
        </div>
      </div>
      <div className="card-image">
        <img alt={pokemon.name} src={imgURL} />
      </div>
    </div>
  )
}

export default Card
