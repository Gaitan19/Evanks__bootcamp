export const toggleFavorite = (item, itemType) => ({
  type: 'ADD_FAVORITE',
  payload: { item, itemType },
});

export const deleteFavorite = (itemDelete, itemDeleteType) => ({
  type: 'DELETE_FAVORITE',
  payload: { itemDelete, itemDeleteType },
});
