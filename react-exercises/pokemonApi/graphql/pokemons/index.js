import { gql } from '@apollo/client';

export const pokemonQuery = {
  pokemonList: gql`
    query Pokemon_v2_berryfirmnessname(
      $where: pokemon_v2_pokemon_bool_exp
      $limit: Int
    ) {
      list: pokemon_v2_pokemon(where: $where, limit: $limit) {
        id
        name
      }
    }
  `,
};

export const getPokemon = gql`
  query Pokemon_v2_berryfirmnessname(
    $limit: Int
    $where: pokemon_v2_pokemon_bool_exp
  ) {
    list: pokemon_v2_pokemon(where: $where) {
      id
      name
      weight
      height
      base_experience
      types: pokemon_v2_pokemontypes {
        typeName: pokemon_v2_type {
          name
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        abilityName: pokemon_v2_ability {
          name
          abilityDescription: pokemon_v2_abilityflavortexts(limit: $limit) {
            description: flavor_text
          }
        }
      }
    }
  }
`;
