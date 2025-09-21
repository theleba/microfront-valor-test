import React, { useEffect, useState } from "react";
import './index.css';
import Pagination from "./components/Pagination";
import Card from "./components/Card";
import { fetchPokemonsList } from "./service/PokemonService";



const CatalogPage: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);

  const fetchPokemons = async (url: string) => {
  setLoading(true);
  try {
    const { pokemons, next, previous } = await fetchPokemonsList(url);
    setPokemons(pokemons);
    setNextUrl(next);
    setPrevUrl(previous);
  } catch (error) {
    console.error("Erro ao buscar Pokémons:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=12");
  }, []);

  if (loading) {
    return <div className="p-4 text-center text-lg">Loading Pokémons...</div>;
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
      </div>

      <Pagination prevUrl={prevUrl} nextUrl={nextUrl} fetchPokemons={fetchPokemons} />
    </div>
  );
};

export default CatalogPage;
