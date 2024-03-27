import { useSelector } from 'react-redux';
import HeadPage from '@/components/HeadPage';
import { pokemonQuery } from '@/graphql/pokemons';
import Layout from '@/components/Layout';
import { routes } from '@/constants/routes';
import total from '@/constants/totalData';

const Pokemons = () => {
  const favoritesPokemons =
    useSelector((state) => state.favorites.pokemons) || [];

  return (
    <>
      <HeadPage title="Pokemons" />
      <Layout
        urlImage="/pikachu.png"
        widthImage={200}
        heightImage={200}
        description="pikachu"
        titlePage="Welcome to pokemons"
        query={pokemonQuery.pokemonList}
        href={routes.pokemons}
        image="/pokemon_go.png"
        type="pokemons"
        favorites={favoritesPokemons}
        totalData={total.totalPokemons}
      />
    </>
  );
};

export default Pokemons;
