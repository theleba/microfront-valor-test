import React, { useEffect, useState } from "react";
import './index.css'
import Sprites from "./components/Sprites";
import Stats from "./components/Stats";
import AbilityList from "./components/AbilityList";
import SearchForm from "./components/SearchForm";
import fetchPokemonByName from "./services/pokemonDetailService";

const DetailPage: React.FC<DetailPageProps> = ({pokemonName}) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [species, setSpecies] = useState<Species | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchPokemon = async (name: string) => {
    try {
      setLoading(true);
      const { pokemon, species } = await fetchPokemonByName(name);
      setPokemon(pokemon);
      setSpecies(species);
    } catch (error) {
      console.error(error);
      setPokemon(null);
      setSpecies(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (pokemonName) {
      setSearch(pokemonName);
      fetchPokemon(pokemonName);
    }
  }, [pokemonName]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <SearchForm
        value={search}
        onChange={setSearch}
        onSubmit={() => fetchPokemon(search)}
      />

      {loading && <div className="text-center">Loading Pokémon...</div>}
      {!loading && !pokemon && <div className="text-center text-gray-500">Pokémon not found.</div>}

      {pokemon && species && (
        <div className={`flex flex-col items-center p-6 rounded-lg shadow-lg bg-white`}>
           <Sprites pokemon={pokemon} />
          <h1 className="text-3xl font-bold capitalize mb-2">{pokemon.name}</h1>

          <div className="flex gap-2 mb-4 flex-wrap">
            {pokemon.types.map((t) => (
              <span key={t.type.name} className="px-2 py-1 bg-gray-200 rounded-full capitalize text-sm">
                {t.type.name}
              </span>
            ))}
          </div>

          <Stats pokemon={pokemon} />

          <p className="mb-4 text-center max-w-xl italic">
            {species.flavor_text_entries.find(f => f.language.name === "en")?.flavor_text.replace(/\n|\f/g, ' ') || 'No description available.'}
          </p>

          <div className="mb-2 flex flex-wrap gap-2">
            {pokemon.abilities.map(a => (
              <span key={a.ability.name} className="px-2 py-1 bg-green-200 rounded-full text-sm capitalize">{a.ability.name}</span>
            ))}
          </div>

          <div className="mb-2 flex flex-wrap gap-2">
            {pokemon.moves.slice(0, 5).map(m => (
              <span key={m.move.name} className="px-2 py-1 bg-yellow-200 rounded-full text-sm capitalize">{m.move.name}</span>
            ))}
          </div>

          <AbilityList pokemon={pokemon} species={species} />
        </div>
      )}
    </div>
  );
};

export default DetailPage;
