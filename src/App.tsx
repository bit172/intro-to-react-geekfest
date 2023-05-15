import { useState, useEffect, ChangeEvent } from 'react'

import { fetchGenOnePokemons } from './api/ApiClient'

import { PokemonGrid } from './components/PokemonGrid'
import { Searchbar } from './components/Searchbar'
import { Loader } from './components/Loader'

import './App.scss'

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [searchString, setSearchString] = useState<string>('')

  const onSearchStringChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value)
  }

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
