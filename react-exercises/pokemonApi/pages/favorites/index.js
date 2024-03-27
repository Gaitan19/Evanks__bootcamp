import HeadPage from '@/components/HeadPage';
import Tabs from '@/components/Tabs';
import Layout from '@/components/Layout';

export default function Favorites() {
  return (
    <>
      <HeadPage title="Favorites" />

      <Layout
        urlImage="/pokeball.png"
        description="logo pokemon"
        heightImage={110}
        widthImage={110}
        titlePage="Favorites"
        isHome
      >
        <div className="Home-list">
          <p className="Home-description">
            The 'Favorites' page on my Pokémon app displays a curated list of
            your favorite Pokémon, preferred items, and cherished Pokémon moves.
            Easily access and manage your most-loved elements in the Pokémon
            world with this convenient feature.
          </p>
        </div>
      </Layout>

      <Tabs customClass="Pokemon-container" isFavorites />
    </>
  );
}
