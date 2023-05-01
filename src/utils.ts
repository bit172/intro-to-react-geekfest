export const getImageURL = (pokemonId: number) => {
  const baseURL =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other'
  // Has SVG.
  return `${baseURL}/dream-world/${pokemonId}.svg`
}
