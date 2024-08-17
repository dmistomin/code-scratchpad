import { useEffect, useState } from 'react';

async function getPokemonData(pageSize: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}`)
  const data = await res.json()
  return data.results
}

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    getPokemonData(10).then(data => setPokemonList(data))
  }, [])

  return (
    <>
      <p>
        PokemonList will go here.
      </p>
      <code>{pokemonList.map(p => JSON.stringify(p))}</code>
    </>
  )
}

export default PokemonList
