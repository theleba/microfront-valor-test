
export const fetchPokemonsList = async (url: string): Promise<{ pokemons: Pokemon[]; next: string | null; previous: string | null }> => {
  const response = await fetch(url);
  const data: ApiResponse = await response.json();

  const details = await Promise.all(
    data.results.map(async (p) => {
      const res = await fetch(p.url);
      return res.json();
    })
  );

  return { pokemons: details, next: data.next, previous: data.previous };
};