import client from '@/lib/graphql/client';
import { GET_POKEMON } from '@/lib/graphql/queries';
import { FetchSinglePokemonResponse } from '@/lib/graphql/type/fetch';

interface PageProps {
  params: {
    id: string;
  };
}

const PokedexId = async ( { params }: PageProps  ) => {
  const { id } = params;

  // Apollo call on the server
  const { data } : FetchSinglePokemonResponse = await client.query({
    query: GET_POKEMON,
    variables: { id },
  });

  const pokemon = data?.pokemon;


  if (pokemon === null) {
    return <div>No Pokémon found</div>;
  }

  return (
    <div>

    </div>
  );
}

export default PokedexId