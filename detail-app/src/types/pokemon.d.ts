interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
  };
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  height: number;
  weight: number;
  abilities: { ability: { name: string } }[];
  moves: { move: { name: string } }[];
  base_experience: number;
}

interface Species {
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  habitat: { name: string } | null;
  generation: { name: string };
  egg_groups: { name: string }[];
  capture_rate: number;
  growth_rate: { name: string };
  color: { name: string };
}

interface DetailPageProps {
  pokemonName?: string; 
}