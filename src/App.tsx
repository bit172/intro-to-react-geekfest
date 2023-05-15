import { useState } from 'react'

import { fetchGenOnePokemons } from './api/ApiClient'

import './App.scss'

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchPokemons = () => {
    setIsLoading(true)
    setPokemons([])

    fetchGenOnePokemons()
      .then((pokemons) => {
        setPokemons(pokemons)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <main>
      <h1 className="title">Pokedex</h1>
    </main>
  )
}

export default App
