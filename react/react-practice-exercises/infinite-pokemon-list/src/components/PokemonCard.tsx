import './PokemonCard.css'

interface PokemonCardProps {
  pokemon: PokemonDetail
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="card">
      {pokemon.name}
      <code>{JSON.stringify(pokemon)}</code>
    </div>
  )
}

export default PokemonCard
