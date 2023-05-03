import { useState, useEffect, ChangeEvent } from 'react'

import { fetchGenOnePokemons, fetchPokemon } from './api/ApiClient'

import { PokemonGrid } from './components/PokemonGrid'
import { Loader } from './components/Loader'

import './App.scss'
import { Searchbar } from './components/Searchbar'

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchString, setSearchString] = useState<string>('')

  const onSearchStringChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value
    setSearchString(newSearch)
  }

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

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchString.toLowerCase())
  )

  return (
    <main>
      <section>
        <h1 className="title">Pokedex</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="pokedex">
            <Searchbar
              searchInput={searchString}
              handleChange={onSearchStringChange}
            />
            <PokemonGrid pokemons={filteredPokemons} />
          </div>
        )}
      </section>
    </main>
  )
}

export default App
