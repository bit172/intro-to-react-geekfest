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

  return <div className={`card`}></div>
}

export default Card
