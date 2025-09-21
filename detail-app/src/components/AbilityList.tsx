const AbilityList = ({pokemon,species} :
    {
        pokemon: Pokemon;
        species: Species
    }
) => {
    return (
        <div className="text-gray-700 mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
            <p>Pokedex ID: {pokemon.id}</p>
            <p>Base Exp: {pokemon.base_experience}</p>
            <p>Height: {pokemon.height / 10} m</p>
            <p>Weight: {pokemon.weight / 10} kg</p>
            <p>Habitat: {species.habitat?.name || 'Unknown'}</p>
            <p>Generation: {species.generation.name}</p>
            <p>Capture Rate: {species.capture_rate}</p>
            <p>Growth Rate: {species.growth_rate.name}</p>
            <p>Egg Groups: {species.egg_groups.map(g => g.name).join(', ')}</p>
          </div>
    )
}

export default AbilityList