const BASE_URL = 'https://pokeapi.co/api/v2/'

const fetchGenOnePokemons = (): Promise<GenOneResponse> => {
  return ApiClient.get<GenOneResponse>('pokemon?limit=151&offset=0')
}

const fetchPokemon = (pokemonName: string): Promise<Pokemon> => {
  return ApiClient.get<Pokemon>(`pokemon/${pokemonName}`)
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
