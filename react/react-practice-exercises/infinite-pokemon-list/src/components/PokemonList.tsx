import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import './PokemonList.css'

async function getPokemonData(pageSize: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}`)
  const data = await res.json()
  return data.results
}

// TODO: Fetch pokemon details in a performant way, currently just have the name

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getPokemonData(10).then(data => setPokemonList(data))
  }, [])

  return (
    <>
      <div className='grid'>
        {pokemonList.map(p => (
          <div className='grid-cell'>
            <PokemonCard pokemon={p} />
          </div>
        ))}
      </div>
    </>
  )
}

export default PokemonList
