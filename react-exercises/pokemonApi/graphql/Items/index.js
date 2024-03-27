import { gql } from '@apollo/client';

export const itemQuery = {
  itemList: gql`
    query Pokemon_v2_ability($where: pokemon_v2_item_bool_exp, $limit: Int) {
      list: pokemon_v2_item(where: $where, limit: $limit) {
        id
        name
      }
    }
  `,
};

export const getItemInformation = gql`
  query Pokemon_v2_ability($where: pokemon_v2_item_bool_exp) {
    list: pokemon_v2_item(where: $where) {
      id
      name
      cost
      item_category_id
      category: pokemon_v2_itemcategory {
        name
      }
      effectName: pokemon_v2_itemeffecttexts {
        effect
      }
    }
  }
`;
