import { gql } from '@apollo/client';

export const pokemonQuery = {
  pokemonList: (limit) => {
    return gql`
    query Pokemon_v2_berryfirmnessname($limit: Int) {
      pokemon_v2_pokemon(limit: ${limit}) {
        id
        name
      }
    }
  `;
  },
};
