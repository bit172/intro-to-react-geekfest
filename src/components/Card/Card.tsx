import { getImageURL } from '../../utils'
import './Card.scss'

type CardProps = {
  pokemon: Pokemon
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const imgURL = getImageURL(pokemon.id)
  const cardClassNames = pokemon.types
    .map(({ type }) => 'type-' + type.name)
    .join(' ')

  return (
    <div className={`card ${cardClassNames}`}>
      <div className="card-title">
        <h2 className="card-title-name">{pokemon.name.replace(/-/g, ' ')}</h2>
        <div className="type-badge-container">
          {pokemon.types.map(({ type }) => (
            <span key={type.name} className={`type-badge ${cardClassNames}`}>
              {type.name}
            </span>
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
