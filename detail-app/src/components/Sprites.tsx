const Sprites = ({pokemon} : {
    pokemon: Pokemon
}) => {
    return (
          <div className="flex gap-4 mb-4">
            <img src={pokemon.sprites.front_default} alt={`${pokemon.name} front`} className="w-32 h-32" />
            <img src={pokemon.sprites.back_default} alt={`${pokemon.name} back`} className="w-32 h-32" />
            <img src={pokemon.sprites.front_shiny} alt={`${pokemon.name} shiny front`} className="w-32 h-32" />
            <img src={pokemon.sprites.back_shiny} alt={`${pokemon.name} shiny back`} className="w-32 h-32" />
          </div>
    )
}

export default Sprites