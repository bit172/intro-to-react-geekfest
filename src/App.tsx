import { useState, useEffect } from 'react'

import { fetchGenOnePokemons, fetchPokemon } from './api/ApiClient'

import { PokemonGrid } from './components/PokemonGrid'
import { Loader } from './components/Loader'

import './App.scss'

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchPokemons = () => {
    setIsLoading(true)
    setPokemons([])

    fetchGenOnePokemons().then(async (genOnePokemons) => {
      const { results } = genOnePokemons
      const data: Pokemon[] = []

      await Promise.all(
        results.map(async ({ name }) => {
          const pokemon = await fetchPokemon(name)
          data[pokemon.id] = pokemon
        })
      )

      setPokemons(data)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <main>
      <section>
        <h1 className="title">Pokedex</h1>
        {isLoading ? <Loader /> : <PokemonGrid pokemons={pokemons} />}
      </section>
    </main>
  )
}

export default App
