import NoResult from '@/components/common/NoResult';
import client from '@/lib/graphql/client';
import { GET_POKEMON } from '@/lib/graphql/queries';
import { FetchSinglePokemonResponse } from '@/lib/graphql/type/fetch';

// This page will show the details of the pokenmon when user click the pokenCard it will redirect to this page
// Will have evolution 
// By default this page is cached

interface PageProps {
  params: {
    id: string;
  };
}

const PokedexId = async ( { params }: PageProps  ) => {


  // Decode the id that we extract from the params which then use to pass to the FetchSinglePokemonResponse to query
  const id = decodeURIComponent(params.id);

  // Apollo call on the server
  const { data } : FetchSinglePokemonResponse = await client.query({
    query: GET_POKEMON,
    variables: { id },
  });

  const pokemon = data?.pokemon;

  if (pokemon === null) {
    return <div><NoResult/></div>;
  }

  return (
    <div>
        {pokemon.name}
    </div>
  );
}

export default PokedexId