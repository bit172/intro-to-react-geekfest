const BASE_URL = 'https://pokeapi.co/api/v2/'

const fetchGenOnePokemonInfo = (): Promise<GenOneResponse> => {
  return ApiClient.get<GenOneResponse>('pokemon?limit=151&offset=0')
}

const fetchPokemon = (pokemonName: string): Promise<Pokemon> => {
  return ApiClient.get<Pokemon>(`pokemon/${pokemonName}`)
}

const fetchGenOnePokemons = async (): Promise<Pokemon[]> => {
  const genOnePokemons = await fetchGenOnePokemonInfo()
  const { results } = genOnePokemons
  const data: Pokemon[] = []

  await Promise.all(
    results.map(async ({ name }) => {
      const pokemon = await fetchPokemon(name)
      pokemon.name = pokemon.name.replace(/-/g, ' ')
      data[pokemon.id] = pokemon
    })
  )

  return data
}

class ApiClient {
  static headers = new Headers()

  static async get<T>(endpoint: string): Promise<T> {
    const res = await fetch(BASE_URL + endpoint)
    return await res.json()
  }

  static setHeader(key: string, value: string): void {
    ApiClient.headers.append(key, value)
  }
}

export { fetchGenOnePokemons, fetchPokemon }
