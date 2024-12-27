import Navbar from '@/components/Navbar'
import NoResult from '@/components/common/NoResult'
import PokemonCard from '@/components/PokemonCard'
import client from '@/lib/graphql/client'
import { GET_POKEMON, GET_POKEMONS } from '@/lib/graphql/queries'
import { FetchPokemonsResponse, FetchSinglePokemonResponse } from '@/lib/graphql/type/fetch'
import React from 'react'

// no cache
export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams: {
    name?: string
  }
}

// Fetch on the server render on the server 

const HomePage = async ({ searchParams }: PageProps) => {
  const { name } = searchParams

  let singlePokemon = null
  let pokemonList = null

  if (name && name.trim()) {
    // name is provided and not empty
    const { data: pokemonData }: FetchSinglePokemonResponse = await client.query({
      query: GET_POKEMON,
      variables: { name },
      fetchPolicy: 'no-cache',
    })
    singlePokemon = pokemonData?.pokemon
  } else {
    // no name provided or empty
    const { data: pokemonsData }: FetchPokemonsResponse = await client.query({
      query: GET_POKEMONS,
      variables: { first: 20 },
      fetchPolicy: 'no-cache',
    })
    pokemonList = pokemonsData?.pokemons
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full p-10">
        <div className={`flex flex-wrap mt-10 justify-center gap-5 `}>
          {pokemonList
            // pokemonList true then map it
            ? pokemonList.map((pokemon, index) => <PokemonCard key={pokemon.id}  {...pokemon} />)
            // pokemonList false then check singlePokemon , if singlePokemon is true show single card , if not show NoResult 
            : singlePokemon ? <PokemonCard {...singlePokemon} /> : <NoResult />
          }
        </div>
      </div>
    </>
  )
}

export default HomePage
