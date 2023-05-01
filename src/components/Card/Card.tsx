import { getImageURL } from '../../utils'
import './Card.scss'

type CardProps = {
  pokemon: Pokemon
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  const imgURL = getImageURL(pokemon.id)

  return (
    <div className="card">
      <div className="card-title">
        <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
      </div>
      <div className="card-image">
        <img alt={pokemon.name} src={imgURL} />
      </div>
    </div>
  )
}

export default Card
