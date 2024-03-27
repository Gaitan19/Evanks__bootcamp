import { createStore } from 'redux';
import favoritesReducer from '@/redux/reducers';

const loadLocalStorage = () => {
  const initialState = {
    favorites: {
      pokemons: [],
      moves: [],
      items: [],
    },
  };

  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('favorites')) || initialState;
  }

  return initialState;
};

const store = createStore(favoritesReducer, loadLocalStorage());

const saveLocalStorage = () => {
  localStorage.setItem('favorites', JSON.stringify(store.getState()));
};

store.subscribe(() => saveLocalStorage());

export default store;
