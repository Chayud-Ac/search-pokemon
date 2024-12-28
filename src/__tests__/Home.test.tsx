import { render, screen, within } from '@testing-library/react';
import client from '@/lib/graphql/client';
import { GET_POKEMON } from '@/lib/graphql/queries';
import PokemonCard from '@/components/PokemonCard';

describe('PokemonCard API Integration Tests', () => {
  // defined the array of pokemon object which has keys of name and expectedType (according to the task)
  const testCases = [
    { name: 'Bulbasaur', expectedType: 'Grass' },
    { name: 'Charmander', expectedType: 'Fire' },
    { name: 'Squirtle', expectedType: 'Water' },
  ];

  // test for each pokenmon in the array (test with the response data)
  testCases.forEach(({ name, expectedType }) => {
    it(`fetches and verifies API data for ${name} of type ${expectedType}`, async () => {
      const { data } = await client.query({
        query: GET_POKEMON,
        variables: { name },
      });

      const pokemon = data?.pokemon;
      // console.log('API Response:', pokemon);


      expect(pokemon).toBeDefined();
      expect(pokemon.name).toBe(name);
      // pokemon.types is array of string ()
      expect(pokemon.types).toContain(expectedType);
      render(<PokemonCard {...pokemon} />);
      expect(screen.getByText(name)).toBeInTheDocument();
      const typesSection = screen.getByText('Types').closest('div');
      expect(within(typesSection!).getByText(expectedType)).toBeInTheDocument();
    });
  });
});
