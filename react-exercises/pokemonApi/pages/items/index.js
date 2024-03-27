import { useSelector } from 'react-redux';
import HeadPage from '@/components/HeadPage';
import { itemQuery } from '@/graphql/Items';
import Layout from '@/components/Layout';
import { routes } from '@/constants/routes';
import total from '@/constants/totalData';

const items = () => {
  const favoritesItems = useSelector((state) => state.favorites.items) || [];

  return (
    <>
      <HeadPage title="Items" />
      <Layout
        urlImage="/mochila.png"
        widthImage={180}
        heightImage={180}
        description="Poke backpack"
        titlePage="Welcome to items"
        query={itemQuery.itemList}
        href={routes.items}
        image="/Coin_Bag_icon.png"
        type="items"
        favorites={favoritesItems}
        totalData={total.totalItems}
      />
    </>
  );
};

export default items;
