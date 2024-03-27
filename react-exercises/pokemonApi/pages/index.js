import HeadPage from '@/components/HeadPage';
import Tabs from '@/components/Tabs';
import Layout from '@/components/Layout';
import homeDescriptions from '@/constants/homeDescription';
import { v4 } from 'uuid';

const renderDescriptions = () => {
  return homeDescriptions.map((description) => {
    return (
      <li key={v4()} className="Home-description">
        {description}
      </li>
    );
  });
};

export default function Home() {
  return (
    <>
      <HeadPage title="Pokemon API" />

      <Layout
        urlImage="/pokeball.png"
        description="logo pokemon"
        heightImage={110}
        widthImage={110}
        titlePage="Welcome to the Pokémon World"
        isHome
      >
        <ul className="Home-list">{renderDescriptions()}</ul>
      </Layout>

      <Tabs customClass="Pokemon-container" />
    </>
  );
}
