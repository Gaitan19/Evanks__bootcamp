export const routes = {
  pokemons: '/pokemons',
  items: '/items',
  moves: '/moves',
  home: '/',
  favorite: '/favorites',
};

export const navItems = [
  {
    id: '1',
    text: 'Home',
    route: routes.home,
  },

  {
    id: '2',
    text: 'Favorites',
    route: routes.favorite,
  },

  {
    id: '3',
    text: 'Pokemons',
    route: routes.pokemons,
  },

  {
    id: '4',
    text: 'Items',
    route: routes.items,
  },

  {
    id: '5',
    text: 'Moves',
    route: routes.moves,
  },
];
