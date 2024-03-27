const initialState = {
  favorites: {
    pokemons: [],
    moves: [],
    items: [],
  },
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const { item, itemType } = action.payload;

      return {
        ...state,
        favorites: {
          ...state.favorites,
          [itemType]: [...state.favorites[itemType], item],
        },
      };

    case 'DELETE_FAVORITE':
      const { itemDelete, itemDeleteType } = action.payload;
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [itemDeleteType]: [
            ...state.favorites[itemDeleteType].filter(
              (favItemDelete) => favItemDelete.id !== itemDelete.id,
            ),
          ],
        },
      };

    default:
      return state;
  }
};

export default favoritesReducer;
