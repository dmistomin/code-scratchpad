import './PokemonCard.css'

type PokemonData = {
  name: string
}

interface PokemonCardProps {
  pokemon: PokemonData
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="card">
      {pokemon.name}
    </div>
  )
}

export default PokemonCard
