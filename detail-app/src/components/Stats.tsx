import { Heart, Sword, Shield, Zap } from "lucide-react"

const Stats = ({pokemon}:
    {
        pokemon: Pokemon
    }
) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-700 mb-4">
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
    )
}

export default Stats