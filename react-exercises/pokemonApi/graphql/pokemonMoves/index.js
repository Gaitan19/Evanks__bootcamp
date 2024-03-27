import { gql } from '@apollo/client';

export const pokemonMoves = {
  movesList: gql`
    query Pokemon_v2_move($where: pokemon_v2_move_bool_exp, $limit: Int) {
      list: pokemon_v2_move(where: $where, limit: $limit) {
        id
        name
      }
    }
  `,
};

export const getMoveInformation = gql`
  query Pokemon_v2_move(
    $where: pokemon_v2_movedamageclassdescription_bool_exp
    $pokemonV2MoveWhere2: pokemon_v2_move_bool_exp
  ) {
    list: pokemon_v2_move(where: $pokemonV2MoveWhere2) {
      name
      id
      power
      pp
      priority
      type_id
      type: pokemon_v2_type {
        name
      }
      moveClass: pokemon_v2_movedamageclass {
        name
        moveDescription: pokemon_v2_movedamageclassdescriptions(where: $where) {
          description
          language_id
        }
      }
    }
  }
`;
