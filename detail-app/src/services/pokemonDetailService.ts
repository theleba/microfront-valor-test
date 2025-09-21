const fetchPokemonByName = async (name: string): Promise<{ pokemon: Pokemon; species: Species }> => {
  if (!name) throw new Error("Pokémon name not provided");

  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  const pokemon: Pokemon = await pokemonResponse.json();

  const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}`);
  const species: Species = await speciesResponse.json();

  return { pokemon, species };
};

export default fetchPokemonByName