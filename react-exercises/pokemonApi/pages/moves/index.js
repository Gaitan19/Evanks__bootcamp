import { useSelector } from 'react-redux';
import HeadPage from '@/components/HeadPage';
import { pokemonMoves } from '@/graphql/pokemonMoves';
import Layout from '@/components/Layout';
import { routes } from '@/constants/routes';
import total from '@/constants/totalData';

const Moves = () => {
  const favoritesMoves = useSelector((state) => state.favorites.moves) || [];

  return (
    <>
      <HeadPage title="Moves" />
      <Layout
        urlImage="/angry-pikachu3.png"
        widthImage={250}
        heightImage={200}
        description="pikachu"
        titlePage="Welcome to pokemon's moves"
        query={pokemonMoves.movesList}
        href={routes.moves}
        image="/Pokemon_Exchange.png"
        type="moves"
        favorites={favoritesMoves}
        totalData={total.totalMoves}
      />
    </>
  );
};

export default Moves;
