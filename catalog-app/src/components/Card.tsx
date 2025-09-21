import { Heart, Sword, Shield, Zap } from "lucide-react"

const Card = ({pokemon}:
    {
        pokemon: Pokemon
    }
) => {

    return (
          <div
            key={pokemon.id}
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("navigateToDetail", { detail: { pokemonName: pokemon.name } })
              )
            }
            className="cursor-pointer bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition flex flex-col items-center"
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 mb-3" />
            <h2 className="text-xl font-bold capitalize mb-1">{pokemon.name}</h2>
            <div className="flex gap-2 mb-3">
              {pokemon.types.map((t, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-200 capitalize">
                  {t.type.name}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-500" />
                {pokemon.stats.find((s) => s.stat.name === "hp")?.base_stat}
              </div>
              <div className="flex items-center gap-1">
                <Sword className="w-4 h-4 text-orange-500" />
                {pokemon.stats.find((s) => s.stat.name === "attack")?.base_stat}
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-blue-500" />
                {pokemon.stats.find((s) => s.stat.name === "defense")?.base_stat}
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-yellow-500" />
                {pokemon.stats.find((s) => s.stat.name === "speed")?.base_stat}
              </div>
            </div>
          </div>
    )
}

export default Card