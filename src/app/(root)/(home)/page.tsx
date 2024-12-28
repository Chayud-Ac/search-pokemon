import Navbar from '@/components/Navbar'
import NoResult from '@/components/common/NoResult'
import PokemonCard from '@/components/PokemonCard'
import client from '@/lib/graphql/client'
import { GET_POKEMON } from '@/lib/graphql/queries'
import React from 'react'
import { FetchPokemonResponse } from '@/lib/graphql/type'


interface PageProps {
  searchParams: {
    name?: string
  }
}

// Fetch on the server render on the server 

const HomePage = async ({ searchParams }: PageProps) => {
  const { name } = searchParams

  let pokemon = null

  if (name && name.trim()) {
    // name is provided and not empty
    const { data: pokemonData }: FetchPokemonResponse = await client.query({
      query: GET_POKEMON,
      variables: { name },
    })
    pokemon = pokemonData?.pokemon
  } 

  console.log(pokemon)

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full min-h-screen items-center justify-center p-10">
        {name === undefined  
          // if name is undefined mean user is not query yet then tell user to Search for pokemon
          ? <p>Search for pokemon</p> 
          // else check if pokemon is true if true then show PokemonCard if not show NoResult
          : pokemon  ?  <PokemonCard {...pokemon}/> : <NoResult/>
        }
      </div>
    </>
  )
}

export default HomePage
